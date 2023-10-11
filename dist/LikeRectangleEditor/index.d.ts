import { PolygonEditorOptions } from '@amap/amap-jsapi-types/plugins/PolygonEditor';
import LikeRectangle from "../LikeRectangle";
import ControlPoint from './controlPoint';
import { IEnhanceProperty, IEnhanceEditorOptions } from './type';
declare class LikeRectangleEditor {
    opts: PolygonEditorOptions & IEnhanceEditorOptions;
    map: AMap.Map;
    likeRectangle: LikeRectangle;
    polygonEditor: AMap.PolygonEditor & IEnhanceProperty;
    polygonEditorOpen: () => void;
    controlPoints: ControlPoint[];
    constructor(map: AMap.Map, likeRectangle: LikeRectangle, opts: PolygonEditorOptions & IEnhanceEditorOptions);
    get options(): PolygonEditorOptions;
    /**
     * 重新 polygonEditor.open 方法
     */
    open(): void;
    findControlPoint(point: AMap.CircleMarker): ControlPoint | undefined;
    createEditor(): AMap.PolygonEditor & IEnhanceProperty;
    enhanceProperty(): void;
    controlPointRegistryEvent(): void;
    onChange(): void;
    updateCenterMarker(): void;
    updateLikeRectanglePath(): void;
}
export default LikeRectangleEditor;
