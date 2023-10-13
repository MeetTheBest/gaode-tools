import { throttle } from 'lodash-es';
import LikeRectangleEditor from ".";

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
        this.onDragging = throttle(this.onDragging.bind(this), 4);
        this.onDragEnd = this.onDragEnd.bind(this);

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
        this.point.on('dragging', this.onDragging);
        this.point.on('dragend', this.onDragEnd);
        console.log('注册完成');
    }

    destroyEvent() {
        this.point.off('dragstart', this.onDragStart);
        this.point.off('dragging', this.onDragging);
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
        this.context.onDragStart(data);
    }

    onDragging(data: IObject) {
        const { pixel } = data;
        // console.log(`点位${this.extData.idx} 移动中`);
        // delay(this.context.onChange, DELAY_TIME, data);

        // 更新下一个左节点的位置
        this.updateNextLeftPoint(pixel, data);

        // 更新下一个右节点的位置
        this.updateNextRightPoint(pixel, data);
        this.context.onDragging(data);
    }

    onDragEnd(data: IObject) {
        const { target, pixel } = data;

        // 更新下一个左节点的位置
        this.updateNextLeftPoint(pixel, data);

        // 更新下一个右节点的位置
        this.updateNextRightPoint(pixel, data);

        // 更新中心点
        this.center = target.getCenter();
        this.context.onDragEnd(data);
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

        // 下一个左节点的下一个左节点的 xy 坐标
        const leftNextIdx = leftIdx - 1 >= 0 ? leftIdx - 1 : this.len;
        const leftNextPoint = this.points[leftNextIdx];
        const leftNextPointPixel = this.map.lngLatToContainer(leftNextPoint.getCenter());
        // console.log('leftNextPointPixel ===>', leftNextPointPixel);
        // this.map.add(new AMap.Marker({ position: leftNextPoint.getCenter() }));

        // y1 = k1 * x1 + b1 （ps: 两条直线互相垂直，则有 k1 * k2 = -1）
        const k1 = (leftNextPointPixel.y - leftPointPixel.y) / (leftNextPointPixel.x - leftPointPixel.x);
        const b1 = leftNextPointPixel.y - k1 * leftNextPointPixel.x;
        // console.log('updateNextLeftPoint.k1 ===>', k1);
        // console.log('updateNextLeftPoint.b1 ===>', b1);

        // y2 = k2 * x2 + b2
        const k2 = -1 / k1;
        const b2 = endPixel.y - k2 * endPixel.x;
        // console.log('updateNextLeftPoint.k2 ===>', k2);
        // console.log('updateNextLeftPoint.b2 ===>', b2);

        // 设交点坐标为：x,y
        // 则有： y1 = k1 * x + b1
        // 则有： y2 = k2 * x + b2
        // 则有： k1 * x + b1 = k2 * x + b2
        // 平行 x轴 的直线，k = 0
        // 平行 y轴 的直线，k = 无穷大
        let x: number;
        if (k1 === 0) {
            x = endPixel.x;
        } else if (!Number.isFinite(k1) || k1 > Number.MAX_SAFE_INTEGER || k1 < Number.MIN_SAFE_INTEGER) {
            x = leftPointPixel.x;
        } else {
            x = (b2 - b1) / (k1 - k2);
        }

        let y: number;
        if (k1 === 0) {
            y = leftPointPixel.y;
        } else if (!Number.isFinite(k1)) {
            y = endPixel.y;
        } else {
            y = k1 * x + b1;
        }
        // console.log('updateNextLeftPoint.x ===>', x);
        // console.log('updateNextLeftPoint.y ===>', y);

        const nextLeftPointPixel = new AMap.Pixel(x, y);
        // const nextLeftPoint = this.map.containerToLngLat(nextLeftPointPixel);
        // const nextRightPointCenter = [nextLeftPoint.lng, nextLeftPoint.lat];
        // this.map.add(new AMap.Marker({ position: nextLeftPoint }));
        this.dispatch(leftPoint, nextLeftPointPixel, data.originEvent);
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

        // 下一个节点的下一个节点的 xy 坐标
        const rightNextIdx = rightIdx + 1 <= this.len ? rightIdx + 1 : 0;
        const rightNextPoint = this.points[rightNextIdx];
        const rightNextPointPixel = this.map.lngLatToContainer(rightNextPoint.getCenter());
        // console.log('rightNextPointPixel ===>', rightNextPointPixel);
        // this.map.add(new AMap.Marker({ position: rightNextPoint.getCenter() }));

        // y1 = k1 * x1 + b1 （ps: 两条直线互相垂直，则有 k1 * k2 = -1）
        const k1 = (rightNextPointPixel.y - rightPointPixel.y) / (rightNextPointPixel.x - rightPointPixel.x);
        const b1 = rightNextPointPixel.y - k1 * rightNextPointPixel.x;
        // console.log('updateNextRightPoint.k1 ===>', k1);
        // console.log('updateNextRightPoint.b1 ===>', b1);

        // y2 = k2 * x2 + b2
        const k2 = -1 / k1;
        const b2 = endPixel.y - k2 * endPixel.x;
        // console.log('updateNextRightPoint.k2 ===>', k2);
        // console.log('updateNextRightPoint.b2 ===>', b2);

        // 设交点坐标为：x,y
        // 则有： y1 = k1 * x + b1
        // 则有： y2 = k2 * x + b2
        // 则有： k1 * x + b1 = k2 * x + b2
        // 平行 x轴 的直线，k = 0
        // 平行 y轴 的直线，k = 无穷大
        let x: number;
        if (k1 === 0) {
            x = endPixel.x;
        } else if (!Number.isFinite(k1) || k1 > Number.MAX_SAFE_INTEGER || k1 < Number.MIN_SAFE_INTEGER) {
            x = rightPointPixel.x;
        } else {
            x = (b2 - b1) / (k1 - k2);
        }

        let y: number;
        if (k1 === 0) {
            y = rightPointPixel.y;
        } else if (!Number.isFinite(k1)) {
            y = endPixel.y;
        } else {
            y = k1 * x + b1;
        }
        // console.log('updateNextRightPoint.x ===>', x);
        // console.log('updateNextRightPoint.y ===>', y);

        const nextRightPointPixel = new AMap.Pixel(x, y);
        // const nextRightPoint = this.map.containerToLngLat(nextRightPointPixel);
        // const nextRightPointCenter = [nextRightPoint.lng, nextRightPoint.lat];
        // this.map.add(new AMap.Marker({ position: nextRightPoint }));
        this.dispatch(rightPoint, nextRightPointPixel, data.originEvent);
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
