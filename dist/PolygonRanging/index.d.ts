import { IOptions } from './type';

export default class PolygonRanging {
    opts: IOptions | undefined;
    private map;
    private lines;
    private polygon;
    private lineLengthText;
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null;
    constructor(map: AMap.Map, opts?: IOptions);
    get immediate(): boolean | undefined;
    get draggable(): any;
    get rotatable(): any;
    /**
     * 立刻激活
     */
    private immediateActive;
    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    open(polygon: AMap.Polygon): void;
    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    start(polygon: AMap.Polygon): void;
    registryPolygonEvents(): void;
    destroyPolygonEvents(): void;
    close(): void;
    stop(): void;
    private onPolygonRanging;
    private updateDistanceText;
    private removeLineDistanceText;
    /**
 * 拖拽结束后，需要重新计算一下点位数据
 */
    private onRotateEndEnd;
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    private onDragEnd;
    destroy(): this;
}
