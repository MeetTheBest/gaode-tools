export default class LineCollection {
    map: AMap.Map;
    linesPath: Common.IPaths;
    lines: never[];
    constructor(map: AMap.Map);
    getLinesByPaths(paths: Common.IPath): Common.IPaths;
    createLinesByPaths(paths: Common.IPath): void;
    createPolyLine(path: Common.IPath): AMap.Polyline;
    addToMap(): void;
    removeFromTheMap(): void;
    getPointInPolyline(pos: AMap.LngLat): Common.IPath | undefined;
    reset(): void;
}
