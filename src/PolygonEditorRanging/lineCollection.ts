const STYLE = {
    zIndex: 1,
    strokeColor: '#00D3FC',
    strokeWeight: 8,
    strokeOpacity: 0
};

export default class LineCollection {
    map: AMap.Map;

    linesPath: Common.IPaths = [] as Common.IPaths;
    lines = [];

    constructor(map: AMap.Map) {
        if (!map) {
            throw new Error('map not found');
        }
        this.map = map;
    }

    getLinesByPaths(paths: Common.IPath) {
        let idx = 0;
        const len = paths.length;

        while (idx < len) {
            const nextIdx = idx + 1 >= len ? 0 : idx + 1;
            this.linesPath.push([paths[idx], paths[nextIdx]]);
            idx++;
        }

        return this.linesPath;
    }

    createLinesByPaths(paths: Common.IPath) {
        this.reset();
        this.getLinesByPaths(paths);
        // this.removeFromTheMap();

        // this.linesPath.forEach(path => {
        //   this.lines.push(this.createPolyLine(path));
        // });

        // this.addToMap();
    }

    createPolyLine(path: Common.IPath) {
        return new AMap.Polyline({ path, ...STYLE });
    }

    addToMap() {
        this.map.add(this.lines);
    }

    removeFromTheMap() {
        this.map.remove(this.lines);
    }

    getPointInPolyline(pos: AMap.LngLat) {
        const mp = this.map.getResolution();
        const m = STYLE.strokeWeight * mp;
        const line = this.linesPath.find(path =>
            AMap.GeometryUtil.isPointOnSegment(pos, path[0], path[1], m)
        );
        return line;
    }

    reset() {
        this.linesPath = [];
        this.lines = [];
    }
}
