import { delay, throttle } from 'lodash-es';
import LikeRectangleEditor from ".";

const DELAY_TIME = 10;
class ControlPoint {
    point!: AMap.CircleMarker;
    points!: AMap.CircleMarker[];
    center!: AMap.LngLat;
    context!: LikeRectangleEditor;
    isEnabled: boolean = false;

    constructor(context: LikeRectangleEditor, point: AMap.CircleMarker, points: AMap.CircleMarker[]) {
        this.context = context;
        this.point = point;
        this.points = points;

        this.init();
        this.clearClientEvent();
    }

    get len() {
        return this.points.length - 1;
    }

    get extData() {
        return this.point.getExtData();
    }

    get idx() {
        return this.extData.idx;
    }

    get map() {
        return this.context.map;
    }

    get xAxisMax() {
        return document.body.clientWidth;
    }

    get yAxisMax() {
        return document.body.clientHeight;
    }


    enable() {
        if (this.isEnabled) return;

        this.isEnabled = true;
        this.setCursorPointer('move');
        this.registryEvent();

        // this.toContainer2({} as AMap.Pixel, {});
    }

    disable() {
        this.isEnabled = false;
        this.setCursorPointer('pointer');
        this.destroyEvent();
    }

    setCursorPointer(cursor: string) {
        this.point?.setOptions({ cursor });
    }

    init() {
        this.center = this.point.getCenter();

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragging = throttle(this.onDragging.bind(this), 100);
        this.onDragEnd = this.onDragEnd.bind(this);

        // this.updateNextLeftPoint = throttle(this.updateNextLeftPoint.bind(this), 100);
        // this.updateNextRightPoint = throttle(this.updateNextRightPoint.bind(this), 100);

        this.defaultRegistryEvent();
    }

    clearClientEvent() {
        this.point.clearEvents('click');
        // TODO 考虑把原事件都干掉，自身注册一次，在调用原注册事件
    }

    defaultRegistryEvent() {
        this.point.on('mouseover', this.onMouseOver);
        this.point.on('mouseout', this.onMouseOut);
    }


    registryEvent() {
        this.point.on('dragstart', this.onDragStart);
        // TODO 实时问题很大
        // this.point.on('dragging', this.onDragging);
        this.point.on('dragend', this.onDragEnd);
        console.log('注册完成');
    }

    destroyEvent() {
        this.point.off('dragstart', this.onDragStart);
        // this.point.off('dragging', this.onDragging);
        this.point.off('dragend', this.onDragEnd);
    }

    onMouseOver() {
        console.log(`点位${this.extData.idx} 移入`);
        this.enable();
    }

    onMouseOut() {
        console.log(`点位${this.extData.idx} 移出`);
        this.disable();
    }

    onDragStart(data) {
        console.log(`点位${this.extData.idx} 移动开始`);
        delay(this.context.onChange, DELAY_TIME, data);
    }

    onDragging(data: IObject) {
        const { pixel } = data;
        // console.log(`点位${this.extData.idx} 移动中`);
        // delay(this.context.onChange, DELAY_TIME, data);

        // 更新下一个左节点的位置
        this.updateNextLeftPoint(pixel, data);

        // 更新下一个右节点的位置
        this.updateNextRightPoint(pixel, data);

        // 更新中心点
        // this.center = target.getCenter();

        delay(this.context.onChange, DELAY_TIME, data);
    }

    onDragEnd(data: IObject) {
        const { target, pixel } = data;

        // 更新下一个左节点的位置
        this.updateNextLeftPoint(pixel, data);

        // 更新下一个右节点的位置
        this.updateNextRightPoint(pixel, data);

        // 更新中心点
        this.center = target.getCenter();

        delay(this.context.onChange, DELAY_TIME, data);
    }

    /**
     * 更新下一个左节点位置
     */
    updateNextLeftPoint(endPixel: AMap.Pixel, data: IObject) {
        // 左节点的 xy 坐标
        const leftIdx = this.idx - 1 >= 0 ? this.idx - 1 : this.len;
        const leftPoint = this.points[leftIdx];
        const leftPointPixel = this.map.lngLatToContainer(leftPoint.getCenter());
        // console.log('leftPointPixel ===>', leftPointPixel);
        // this.map.add(new AMap.Marker({ position: leftPoint.getCenter() }));

        // 当前操作点 xy 坐标
        const currentPixel = this.map.lngLatToContainer(this.center);
        // console.log('currentPixel ===>', currentPixel);
        // this.map.add(new AMap.Marker({ position: this.center }));

        // y1 = k1 * x1 + b1
        const k1 = (currentPixel.y - leftPointPixel.y) / (currentPixel.x - leftPointPixel.x);
        const b1 = currentPixel.y - k1 * currentPixel.x;
        // console.log('k1 ===>', k1);
        // console.log('b1 ===>', b1);
        // console.log('验证', leftPointPixel.y - k1 * leftPointPixel.x - b1);

        // 下一个左节点的下一个左节点的 xy 坐标
        const leftNextIdx = leftIdx - 1 >= 0 ? leftIdx - 1 : this.len;
        const leftNextPoint = this.points[leftNextIdx];
        const leftNextPointPixel = this.map.lngLatToContainer(leftNextPoint.getCenter());
        // console.log('leftNextPointPixel ===>', leftNextPointPixel);
        // this.map.add(new AMap.Marker({ position: leftNextPoint.getCenter() }));

        // y2 = k2 * x2 + b2 （ps: 两条直线互相垂直，则有 k1 * k2 = -1）
        // const k2 = (leftNextPointPixel.y - leftPointPixel.y) / (leftNextPointPixel.x - leftPointPixel.x);
        const k2 = -1 / k1;
        let b2 = leftNextPointPixel.y - k2 * leftNextPointPixel.x;
        // console.log('k2 ===>', k2);
        // console.log('b2 ===>', b2);
        const validateVal = leftPointPixel.y - k2 * leftPointPixel.x - b2;
        console.log('updateNextLeftPoint 验证', validateVal);
        if (Math.abs(validateVal) >= 0.1) {
            console.log('=== updateNextLeftPoint 矫正 b2 值 ===');
            console.log(`矫正前 b2 = ${b2}`);
            // if (validateVal > 0) {
            //     b2 -= validateVal;
            // }
            // if (validateVal < 0) {
            //     b2 += validateVal;
            // }
            b2 += validateVal;
            console.log(`矫正后 b2 = ${b2}`);
            console.log('updateNextLeftPoint 矫正后验证', leftPointPixel.y - k2 * leftPointPixel.x - b2);
        }

        // y3 = k3 * x3 + b3
        const k3 = k1;
        const b3 = endPixel.y - k3 * endPixel.x;
        // console.log('k3 ===>', k3);
        // console.log('b3 ===>', b3);

        // 从 xAxis = 0 开始穷举交点位置（可以考虑更优算法）
        let s: number[] = [];
        let x = 0;
        while (x < this.xAxisMax) {
            const y = k2 * x + b2;
            const val = y - k3 * x - b3;

            // val 趋向于 [-1, 1] 之间时，则标记为可用
            if (-2 <= val && val <= 2) {
                s.push(val);
                // 在穷举，使其无限趋向于 0 
                if (-0.01 <= val && val <= 0.01) {
                    console.log('updateNextLeftPoint.val ===>', val);
                    // 在穷举，使其无限趋向于 0 
                    const pixel = new AMap.Pixel(x, y);
                    // this.map.add(new AMap.Marker({ position: this.map.containerToLngLat(pixel) }));
                    this.dispatch(leftPoint, pixel, data.originEvent);
                    break;
                } else {
                    x += 0.005;
                }
            } else {
                x += 0.5;
            }
        }

        if (x >= this.xAxisMax) {
            console.log(s);
            console.error('updateNextLeftPoint ===> 未找到交点');

            console.log('k1 ===>', k1);
            console.log('b1 ===>', b1);
            console.log('验证', leftPointPixel.y - k1 * leftPointPixel.x - b1);

            console.log('k2 ===>', k2);
            console.log('b2 ===>', b2);
            console.log('验证', leftPointPixel.y - k2 * leftPointPixel.x - b2);

            console.log('k3 ===>', k3);
            console.log('b3 ===>', b3);
        }
    }

    /**
     * 更新下一个右节点位置
     */
    updateNextRightPoint(endPixel: AMap.Pixel, data: IObject) {
        // 下一个节点的 xy 坐标
        const rightIdx = this.idx + 1 <= this.len ? this.idx + 1 : 0;
        const rightPoint = this.points[rightIdx];
        const rightPointPixel = this.map.lngLatToContainer(rightPoint.getCenter());
        // console.log('rightPointPixel ===>', rightPointPixel);
        // this.map.add(new AMap.Marker({ position: rightPoint.getCenter() }));

        // 当前操作点 xy 坐标
        const currentPixel = this.map.lngLatToContainer(this.center);
        // console.log('currentPixel ===>', currentPixel);
        // this.map.add(new AMap.Marker({ position: this.center }));

        // y1 = k1 * x1 + b1
        const k1 = (currentPixel.y - rightPointPixel.y) / (currentPixel.x - rightPointPixel.x);
        const b1 = currentPixel.y - k1 * currentPixel.x;
        // console.log('k1 ===>', k1);
        // console.log('b1 ===>', b1);
        // console.log('验证', rightPointPixel.y - k1 * rightPointPixel.x - b1);

        // 下一个节点的下一个节点的 xy 坐标
        const rightNextIdx = rightIdx + 1 <= this.len ? rightIdx + 1 : 0;
        const rightNextPoint = this.points[rightNextIdx];
        const rightNextPointPixel = this.map.lngLatToContainer(rightNextPoint.getCenter());
        // console.log('rightNextPointPixel ===>', rightNextPointPixel);
        // this.map.add(new AMap.Marker({ position: rightNextPoint.getCenter() }));

        // y2 = k2 * x2 + b2 （ps: 两条直线互相垂直，则有 k1 * k2 = -1）
        // const k2 = (rightNextPointPixel.y - rightPointPixel.y) / (rightNextPointPixel.x - rightPointPixel.x);
        const k2 = -1 / k1;
        let b2 = rightNextPointPixel.y - k2 * rightNextPointPixel.x;
        // console.log('k2 ===>', k2);
        // console.log('b2 ===>', b2);
        // 矫正 b2 值 
        const validateVal = rightPointPixel.y - k2 * rightPointPixel.x - b2;
        console.log('updateNextRightPoint 验证', validateVal);
        if (Math.abs(validateVal) >= 0.01) {
            console.log('=== updateNextRightPoint 矫正 b2 值 ===');
            console.log(`矫正前 b2 = ${b2}`);
            b2 += validateVal;
            console.log(`矫正后 b2 = ${b2}`);
        }

        // y3 = k3 * x3 + b3
        const k3 = k1;
        const b3 = endPixel.y - k3 * endPixel.x;
        // console.log('k3 ===>', k3);
        // console.log('b3 ===>', b3);

        // 从 xAxis = 0 开始穷举交点位置（可以考虑更优算法：二分法）
        const s: number[] = [];
        let x = 0;
        while (x < this.xAxisMax) {
            const y = k2 * x + b2;
            const val = y - k3 * x - b3;

            // val 趋向于 [-1, 1] 之间时，则标记为可用
            if (-2 < val && val < 2) {
                s.push(val);
                // 在穷举，使其无限趋向于 0 
                if (-0.01 <= val && val <= 0.01) {
                    console.log('updateNextRightPoint.val ===>', val);
                    const pixel = new AMap.Pixel(x, y);
                    // this.map.add(new AMap.Marker({ position: this.map.containerToLngLat(pixel) }));
                    this.dispatch(rightPoint, pixel, data.originEvent);
                    break;
                } else {
                    x += 0.005;
                }
            } else {
                x += 0.5;
            }
        }
        if (x >= this.xAxisMax) {
            console.log(s);
            console.error('updateNextRightPoint ===> 未找到交点');

            console.log('k1 ===>', k1);
            console.log('b1 ===>', b1);
            console.log('验证', rightPointPixel.y - k1 * rightPointPixel.x - b1);

            console.log('k2 ===>', k2);
            console.log('b2 ===>', b2);
            console.log('验证', rightPointPixel.y - k2 * rightPointPixel.x - b2);

            console.log('k3 ===>', k3);
            console.log('b3 ===>', b3);
            console.log('验证', endPixel.y - k3 * endPixel.x - b3);
        }
    }

    dispatch(point: AMap.CircleMarker, pixel: AMap.Pixel, originEvent) {
        const nextLngLat = this.map.containerToLngLat(pixel);

        // NOTE 模拟事件触发只需要这两个字段即可
        const emitData = {
            lnglat: nextLngLat,
            originEvent, // 这里的鼠标事件直接透传即可
        };

        // 触发事件
        point.emit('dragend', emitData);
    }
}

export default ControlPoint;
