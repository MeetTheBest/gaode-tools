export default class PolygonRanging {
    private map;
    private startPointToCursorText;
    private lastPointToCursorText;
    private startPosition;
    private lastPosition;
    constructor(map: AMap.Map);
    /**
 * 注册地图事件
 */
    open(): void;
    /**
     * 注册地图事件
     */
    start(): void;
    /**
 * 移除地图注册事件
 */
    close(): void;
    /**
     * 移除地图注册事件
     */
    stop(): void;
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    private getClickPosition;
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    private onMouseMoveInDrawPolygon;
    /**
     * 创建距离文本
     * @returns
     */
    private createDistanceText;
    private updateDistanceText;
    private removeDistanceText;
    reset(): this;
    destroy(): this;
}
