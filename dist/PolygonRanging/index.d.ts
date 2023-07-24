export default class PolygonRanging {
    private map;
    private lines;
    private polygon;
    private lineLengthText;
    editingMidTipMarkerListPath: string | ((polygonEditor: AMap.PolygonEditor) => AMap.PolygonEditor) | null;
    constructor(map: AMap.Map);
    /**
     * 开始边线测距
     * @param polygon
     * @returns
     */
    start(polygon: AMap.Polygon): void;
    stop(): void;
    private onPolygonRanging;
    private updateDistanceText;
    private removeLineDistanceText;
    destroy(): this;
}
