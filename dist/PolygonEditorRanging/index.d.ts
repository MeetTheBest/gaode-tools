import { IPolygonEditorPatch } from './type';
export default class PolygonEditorRanging {
    private map;
    private circleMarkers;
    private midCircleMarkers;
    private lines;
    private polygonEditor;
    private polygonPaths;
    private polygonTotalPaths;
    private polygon;
    private startPointToCursorText;
    private lastPointToCursorText;
    private lineLengthText;
    private circleMarker;
    private midCircleMarker;
    private startPosition;
    private lastPosition;
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null;
    constructor(map: AMap.Map, polygonEditor?: AMap.PolygonEditor & IPolygonEditorPatch);
    /**
     * 获取编辑器目标多边形路径
     * @returns
     */
    private getPolygonEditorTargetPaths;
    /**
     *
     */
    setEditingMidTipMarkerListPath(path: string): this;
    /**
     *
     * @returns
     */
    private getEditingMidTipMarkerList;
    /**
     * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
     * @returns
     */
    private getPolygonEditorTargetTotalPaths;
    /**
     * 注册多边形编辑器，可操作点位事件
     * @param polygonEditor
     */
    open(polygonEditor: AMap.PolygonEditor): void;
    /**
     * 注册多边形编辑器，可操作点位事件
     * @param polygonEditor
     */
    start(polygonEditor: AMap.PolygonEditor): this;
    /**
     * 移除多边形编辑器，可操作点位事件
     */
    close(): void;
    /**
     * 移除多边形编辑器，可操作点位事件
     */
    stop(): void;
    private onPolygonEditorAdjust;
    private onMouseDown;
    private onMovePolygonEditorPoint;
    private onMovePolygonEditorMidPoint;
    private onMouseUp;
    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    startLineRanging(polygon: AMap.Polygon): void;
    stopLineRanging(): void;
    private onInPolygonEditorLine;
    /**
     * 设置起始点位、一次点位
     * @param {object} startPosition
     * @param {object} lastPosition
     */
    private setPosition;
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
    private removeLineDistanceText;
    private removeDistanceText;
    private reset;
    destroy(): this;
    destroyLineRanging(): this;
}
