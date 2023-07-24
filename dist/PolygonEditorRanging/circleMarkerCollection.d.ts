declare class CircleMarkerCollection {
    map: AMap.Map;
    options: AMap.MarkerOptions;
    circleMarkers: AMap.CircleMarker[];
    constructor(map: AMap.Map);
    setOptions(options: AMap.MarkerOptions): this;
    createCircleMarkersByPaths(paths: Common.IPath): void;
    createCircleMarker(center: AMap.LngLat): AMap.CircleMarker;
    addToMap(): void;
    removeFromTheMap(): void;
    /**
     * 获取点是否在围栏编辑器的白色操作点上
     * @param {AMap.LngLat} pos
     * @returns
     */
    getPointInCircleMarkers(pos: AMap.LngLat): AMap.CircleMarker | null;
    /**
     * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
     * @param {*} pos
     * @returns
     */
    getInCircleMarkersPoint(pos: AMap.LngLat): AMap.CircleMarker | null;
    isPointInCircle(p: AMap.LngLat, circle: AMap.CircleMarker): boolean;
    reset(): void;
    destroy(): void;
}
export default CircleMarkerCollection;
