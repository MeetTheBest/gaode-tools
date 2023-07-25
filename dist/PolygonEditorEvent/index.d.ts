import Event from '../Event';
import { IPolygonEditorPatch } from './type';
export default class PolygonEditorEvent extends Event {
    private map;
    private circleMarkers;
    private polygonEditor;
    private polygonTotalPaths;
    private circleMarker;
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null;
    constructor(polygonEditor: AMap.PolygonEditor & IPolygonEditorPatch);
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
     * 获取编辑中间点标记列表
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
     */
    private start;
    /**
     *
     */
    private stop;
    private onPolygonEditorAdjust;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    destroy(): this;
}
