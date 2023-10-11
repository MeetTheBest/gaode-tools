import { createText, computePoint2PointDistance } from '../utils/index';

export default class PolygonRanging {
    private map: AMap.Map;
    // 开始点位到鼠标位置的文本
    private startPointToCursorText: AMap.Text | null = null;
    // 最后一次点位到鼠标位置的文本
    private lastPointToCursorText: AMap.Text | null = null;
    // 起始点位
    private startPosition: AMap.LngLat | null = null;
    // 上次点击点位
    private lastPosition: AMap.LngLat | null = null;

    constructor(map: AMap.Map) {
        if (!map) {
            throw new Error('map not found!');
        }
        this.map = map;
    }

    /**
 * 注册地图事件
 */
    public open() {
        this.start();
    }

    /**
     * 注册地图事件
     */
    public start() {
        this.map.on('click', this.getClickPosition);
        this.map.on('mousemove', this.onMouseMoveInDrawPolygon);
    }

    /**
 * 移除地图注册事件
 */
    public close() {
        this.stop();
    }

    /**
     * 移除地图注册事件
     */
    public stop() {
        this.map.off('click', this.getClickPosition);
        this.map.off('mousemove', this.onMouseMoveInDrawPolygon);
    }

    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    private getClickPosition = (event: Common.Event) => {
        const position = event.lnglat;

        // 不存在起始点位
        if (!this.startPosition) {
            this.startPosition = position;
        } else if (this.startPosition) {
            // 记录为上次点击点位
            this.lastPosition = position;
            this.createDistanceText();
        }
    };

    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    private onMouseMoveInDrawPolygon = (event: Common.Event) => {
        if (!this.startPosition || !this.lastPosition) return;

        const cursorPosition = event.lnglat;
        this.updateDistanceText(
            this.startPointToCursorText!,
            computePoint2PointDistance(this.startPosition, cursorPosition)
        );
        this.updateDistanceText(
            this.lastPointToCursorText!,
            computePoint2PointDistance(this.lastPosition, cursorPosition)
        );
    };

    /**
     * 创建距离文本
     * @returns
     */
    private createDistanceText() {
        if (this.startPointToCursorText && this.lastPointToCursorText) return;

        // 起始点位到鼠标的距离距离文本
        this.startPointToCursorText = createText();
        this.startPointToCursorText.setMap(this.map);

        // 上一个点位到鼠标的距离距离文本
        this.lastPointToCursorText = createText();
        this.lastPointToCursorText.setMap(this.map);
    }

    private updateDistanceText(textIns: AMap.Text, { text, textPos }: Common.IDistanceText) {
        textIns.setText(text);
        textIns.setPosition(textPos);
    }

    private removeDistanceText() {
        this.startPointToCursorText?.remove();
        this.startPointToCursorText = null;
        this.lastPointToCursorText?.remove();
        this.lastPointToCursorText = null;
    }

    public reset() {
        this.startPosition = null;
        this.lastPosition = null;
        this.removeDistanceText();
        return this;
    }

    public destroy() {
        this.reset();
        this.stop();
        return this;
    }
}
