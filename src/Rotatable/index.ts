import { isFinite } from 'lodash-es'
import Moveable, { makeAble } from 'moveable';
import LikeRectangle from '../LikeRectangle';
import Event from '../Event';
import { uuid } from '../utils';
import { computePointDistance } from '../utils/calc';
import { isLimitMaxInteger } from '../utils/index';
import { K_DOWN_LIMIT_COUNT } from '../constants/common';

class Rotatable extends Event {
    likeRectangleIns!: LikeRectangle & AMap.Polygon;
    moveableIns: Moveable | null = null;
    rotationPointIns: AMap.Marker | null = null;
    midPoint!: AMap.LngLat;
    initAngle!: number;
    offset!: number;
    rotationLine!: AMap.Polyline;
    customRotationDOMId = `ID${uuid()}`;
    moveableElementId = `ID${uuid()}`;
    targetElementId = `ID${uuid()}`;

    constructor(likeRectangle: LikeRectangle & AMap.Polygon) {
        super();
        if (!likeRectangle) {
            throw new Error('likeRectangleIns is required');
        }

        this.likeRectangleIns = likeRectangle;
        this.open();
    }

    get mapIns() {
        // @ts-ignore
        return this.likeRectangleIns._map;
    }

    get center() {
        return this.likeRectangleIns.likeRectangle.center!;
    }

    get draggable() {
        const options = this.likeRectangleIns?.getOptions();
        return options.draggable;
    }

    open() {
        this.calcMidPoint();
        this.calcInitAngle();
        this.setRotationLine();
        this.registryLikeRectangleEvents();
        // 创建
        this.createRotationPoint();
    }

    reset() {
        this.moveableIns?.destroy?.();
        this.moveableIns = null;
        this.rotationPointIns?.destroy?.();
        this.rotationPointIns = null;
    }

    close() {
        this.reset();
        this.destroyLikeRectangleEvents();
        this.destroyEvent();
    }

    registryLikeRectangleEvents() {
        // 可拖动，注册拖动结束事件
        const hasEvent = this.likeRectangleIns.hasEvents('dragstart', this.onDragStart);
        if (this.draggable && !hasEvent) {
            this.likeRectangleIns!.on('dragstart', this.onDragStart);
            this.likeRectangleIns!.on('dragend', this.onDragEnd);
        }
    }

    destroyLikeRectangleEvents() {
        // 可拖动，注册拖动结束事件
        this.likeRectangleIns!.off('dragstart', this.onDragStart);
        this.likeRectangleIns!.off('dragend', this.onDragEnd);
    }

    /**
     * 旋转点（即中心点）
     */
    async createRotationPoint() {
        this.rotationPointIns?.destroy?.();
        this.rotationPointIns = null;
        this.rotationPointIns = new AMap.Marker({
            map: this.mapIns,
            position: this.center,
            content: this.genMarkerContent(this.initAngle),
        });

        await Promise.resolve();
        this.setMarkerRotatable();
    }

    genMarkerContent = (rotate = 0) => {
        const w = 0.1;
        const boxStyle = `width:${w}px; height:${w}px;`;
        rotate = Number.isNaN(+rotate) ? 0 : +rotate;

        // const dynamicDOM = `<div style="visibility: visible; background: red; height: ${w}px; width: ${w}px"></div>`;
        const dynamicDOM = `<div style="visibility: hidden; background: transparent; height: ${w}px; width: ${w}px"></div>`;
        const markerContent = `
            <div
            style="${boxStyle}"
            data-rotatable-ref="${this.moveableElementId}"
            >
            <div
                data-rotatable-ref="${this.targetElementId}"
                style="${boxStyle} transform: translate(0,0) rotate(${rotate}deg);">
                ${dynamicDOM}
            </div>
            </div>
        `;
        return markerContent;
    };

    setMarkerRotatable = () => {
        this.offset = this.calcInitOffset();
        const self = this;

        const CustomRotation = makeAble('customRotation', {
            render(moveable, renderer) {
                const rect = moveable.getRect();
                const { pos1, pos2 } = moveable.state;
                return renderer.createElement(
                    'div',
                    {
                        key: 'custom-rotation',
                        id: self.customRotationDOMId,
                        className: 'moveable-custom-rotation',
                        style: {
                            display: 'inline-block',
                            position: 'absolute',
                            transform:
                                `translate(-50%, -100%)` +
                                ` translate(${(pos1[0] + pos2[0]) / 2}px, ${(pos1[1] + pos2[1]) / 2}px)` +
                                ` rotate(${rect.rotation}deg) translateY(-${self.offset}px)`,
                            width: '10px',
                            height: '10px',
                            cursor: 'move',
                            background: '#fff',
                            border: '2px solid #cc6666',
                            borderRadius: '50%',
                            transformOrigin: '50% 100%',
                        },
                    },
                    ['\n        '],
                );
            },
        });

        const element$0 = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`) as HTMLElement;
        const rotatableTarget = document.querySelector(`[data-rotatable-ref="${this.targetElementId}"]`) as HTMLElement;

        this.moveableIns = new Moveable(element$0, {
            target: rotatableTarget,
            ables: [CustomRotation],
            props: { customRotation: true },
            rotatable: true,
            throttleRotate: 0,
            origin: false,
            hideDefaultLines: true,
            rotationTarget: '.moveable-custom-rotation',
            rotationPosition: 'none',
        });

        this.registryEvent();
    };

    registryEvent() {
        if (!this.moveableIns) return;
        this.moveableIns.on('rotateStart', this.onRotateStart);
        this.moveableIns.on('rotate', this.onRotate);
        this.moveableIns.on('rotateEnd', this.onRotateEnd);
        this.mapIns?.on?.('zoomchange', this.updateRotationAbleOffset);
    }

    destroyEvent() {
        if (!this.moveableIns) return;
        this.moveableIns.off('rotateStart', this.onRotateStart);
        this.moveableIns.off('rotate', this.onRotate);
        this.moveableIns.off('rotateEnd', this.onRotateEnd);
        this.mapIns?.off?.('zoomchange', this.updateRotationAbleOffset);
    }

    onRotateStart = () => {
        this.emit('rotateStart', this.likeRectangleIns);
    }

    onRotate = (event) => {
        event.target.style.transform = event.drag.transform;
        const angle = +this.getDOMTransformRotate(event.target) - this.initAngle;
        this.rotate(angle);
        this.emit('rotate', event);
    }

    onRotateEnd = () => {
        this.emit('rotateEnd', this.likeRectangleIns);
    }

    rotate = (deg: number) => {
        const centerXY = this.mapIns.lngLatToContainer(this.center);

        // 左上
        const leftTopPoint = this.likeRectangleIns.leftTop;
        const leftTopPointXY = this.mapIns.lngLatToContainer(leftTopPoint);
        const nexLeftTopPointXY = this.calcRotatePoint(leftTopPointXY, centerXY, deg);
        const leftTopPixel = new AMap.Pixel(nexLeftTopPointXY.x, nexLeftTopPointXY.y);
        const nextLeftTopPoint = this.mapIns.containerToLngLat(leftTopPixel);

        // 右上
        const rightTopPoint = this.likeRectangleIns.rightTop;
        const rightTopPointXY = this.mapIns.lngLatToContainer(rightTopPoint);
        const nexRightTopPointXY = this.calcRotatePoint(rightTopPointXY, centerXY, deg);
        const rightTopPixel = new AMap.Pixel(nexRightTopPointXY.x, nexRightTopPointXY.y);
        const nextRightTopPoint = this.mapIns.containerToLngLat(rightTopPixel);

        // 右下
        const rightBottomPoint = this.likeRectangleIns.rightBottom;
        const rightBottomPointXY = this.mapIns.lngLatToContainer(rightBottomPoint);
        const nextRightBottomPointXY = this.calcRotatePoint(rightBottomPointXY, centerXY, deg);
        const rightBottomPixel = new AMap.Pixel(nextRightBottomPointXY.x, nextRightBottomPointXY.y);
        const nextRightBottomPoint = this.mapIns.containerToLngLat(rightBottomPixel);

        // 左下
        const leftBottomPoint = this.likeRectangleIns.leftBottom;
        const leftBottomPointXY = this.mapIns.lngLatToContainer(leftBottomPoint);
        const nextLeftBottomPointXY = this.calcRotatePoint(leftBottomPointXY, centerXY, deg);
        const leftBottomPixel = new AMap.Pixel(nextLeftBottomPointXY.x, nextLeftBottomPointXY.y);
        const nextLeftBottomPoint = this.mapIns.containerToLngLat(leftBottomPixel);

        const nextPath = [
            [nextLeftTopPoint.lng, nextLeftTopPoint.lat],
            [nextRightTopPoint.lng, nextRightTopPoint.lat],
            [nextRightBottomPoint.lng, nextRightBottomPoint.lat],
            [nextLeftBottomPoint.lng, nextLeftBottomPoint.lat],
        ];

        // 更新点位
        // @ts-ignore
        this.likeRectangleIns.setPath(nextPath);

        // likeRectangleIns.likeRectangleIns.updatePoints(
        // 	[nextLeftTopPoint.lng, nextLeftTopPoint.lat],
        // 	[nextRightTopPoint.lng, nextRightTopPoint.lat],
        // 	[nextRightBottomPoint.lng, nextRightBottomPoint.lat],
        // 	[nextLeftBottomPoint.lng, nextLeftBottomPoint.lat],
        // );
    };

    calcRotatePoint = (point: AMap.Pixel, center: AMap.Pixel, angle: number) => {
        const x1 = point.x;
        const y1 = point.y;
        const x2 = center.x;
        const y2 = center.y;
        const angleRad = (angle * Math.PI) / 180;

        const dx = x1 - x2;
        const dy = y1 - y2;
        const newX = dx * Math.cos(angleRad) - dy * Math.sin(angleRad) + x2;
        const newY = dx * Math.sin(angleRad) + dy * Math.cos(angleRad) + y2;

        return { x: newX, y: newY };
    }

    getDOMTransformRotate = (dom: HTMLElement) => {
        if (!dom) return 0;
        let deg = null;
        const transformStr = dom?.style?.transform || '';
        transformStr.replace(/rotate\((.*)deg\)/g, (_m, $1) => (deg = $1));
        return +deg! || 0;
    };

    calcMidPoint() {
        const path = this.likeRectangleIns?.getPath?.()?.map((lngLat: any) => [lngLat.lng, lngLat.lat])! as unknown as number[];
        if (!path.length || !this.mapIns) {
            throw new Error('likeRectangle or map is undefined');
        }

        const firstPoint = path[0];
        console.log('firstPoint ===>', firstPoint);
        const firstPointPixel = this.mapIns.lngLatToContainer(firstPoint);
        // new AMap.Marker({ map: this.mapIns, position: firstPoint as unknown as AMap.Vector2 });

        const secondPoint = path[1];
        console.log('secondPoint ===>', secondPoint);
        const secondPointPixel = this.mapIns.lngLatToContainer(secondPoint);
        // new AMap.Marker({ map: this.mapIns, position: secondPoint as unknown as AMap.Vector2 });

        // y1 = k1 * x1 + b1
        let k1 = (firstPointPixel.y - secondPointPixel.y) / (firstPointPixel.x - secondPointPixel.x);
        k1 = Math.abs(k1) < K_DOWN_LIMIT_COUNT ? 0 : k1;
        const b1 = firstPointPixel.y - k1 * firstPointPixel.x;
        // console.log('calcMidPoint.k1 ===>', k1);
        // console.log('calcMidPoint.b1 ===>', b1);
        // 平行于 x 轴的直线，斜率为 0

        // 互相垂直的线的斜率乘积为 -1
        // console.log('calcMidPoint.center ===>', this.center);
        const centerPixel = this.mapIns.lngLatToContainer(this.center);
        const k2 = -1 / k1;
        const b2 = centerPixel.y - k2 * centerPixel.x;
        // console.log('calcMidPoint.k2 ===>', k2);
        // console.log('calcMidPoint.b2 ===>', b2);

        const isLimit = !isFinite(k1)
            || isLimitMaxInteger(k1)
            || !isFinite(k2)
            || isLimitMaxInteger(k2)
            || !isFinite(b1)
            || isLimitMaxInteger(b1)
            || !isFinite(b2)
            || isLimitMaxInteger(b2);

        // 设交点坐标为：x,y
        // 则有： y1 = k1 * x + b1
        // 则有： y2 = k2 * x + b2
        // 则有： k1 * x + b1 = k2 * x + b2
        let x: number;
        if (k1 === 0) {
            x = (firstPointPixel.x + secondPointPixel.x) / 2;
        } else if (isLimit) {
            x = firstPointPixel.x;
        } else {
            x = (b2 - b1) / (k1 - k2);
        }

        let y: number;
        if (k1 === 0) {
            y = firstPointPixel.y;
        } else if (isLimit) {
            y = (firstPointPixel.y + secondPointPixel.y) / 2;
        } else {
            y = k1 * x + b1;
        }
        // console.log('calcMidPoint.x ===>', x);
        // console.log('calcMidPoint.y ===>', y);

        const xyPixel = new AMap.Pixel(x, y);
        this.midPoint = this.mapIns.containerToLngLat(xyPixel);
        // new AMap.Marker({ map: this.mapIns, position: this.midPoint });

        return this.midPoint;
    }

    /**
     * 计算第一条连线的中点，位于中心点角度
     */
    calcInitAngle() {
        if (!this.mapIns) return;
        const mitPointPixel = this.mapIns.lngLatToContainer(this.midPoint);
        const centerPixel = this.mapIns.lngLatToContainer(this.center);

        const radian = Math.atan2(mitPointPixel.y - centerPixel.y, mitPointPixel.x - centerPixel.x);
        // 默认加 90 度，因为初始位置为垂直向上
        this.initAngle = 180 / Math.PI * radian + 90;
        return this.initAngle;
    }

    // TODO 需要处理小于中点的情况
    calcInitOffset() {
        if (!this.mapIns) return 0;

        const mitPointPixel = this.mapIns.lngLatToContainer(this.midPoint);
        const centerPixel = this.mapIns.lngLatToContainer(this.center);

        // 默认多 50px 长度
        // return (computePointDistance(mitPointPixel, centerPixel) || 100) + 50;
        // 先直接放到中点上
        return (computePointDistance(mitPointPixel, centerPixel) || 100) - 6;
    }

    updateRotationAbleOffset = () => {
        const dom = document.querySelector(`#${this.customRotationDOMId}`) as HTMLElement;

        let offset = null;
        let transformStr = dom?.style?.transform || '';
        transformStr.replace(/translateY\((.*)px\)/g, (_m, $1) => (offset = $1));
        if (!offset) return;

        const nextOffset = `-${this.calcInitOffset()}`;
        transformStr = transformStr.replace(new RegExp(offset, 'g'), nextOffset);
        dom.style.transform = transformStr;

        // 设置 offset 值
        this.offset = this.calcInitOffset();
    }

    private onDragStart = async () => {
        console.log('Rotatable.onDragStart');
        this.reset();
    }

    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    private onDragEnd = async () => {
        console.log('Rotatable.onDragEnd');
        this.open();
    }

    // setRotationPoint() {

    // }

    setRotationLine() {
        // const path = [this.center, this.midPoint]

        // this.rotationLine = new AMap.Polyline({ path, strokeColor: '#cc6666' });
        // this.mapIns.add(this.rotationLine);
    }
}

export default Rotatable;
