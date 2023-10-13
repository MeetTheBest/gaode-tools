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
    polygonEditorClose: () => void;
    controlPoints: ControlPoint[];
    inEditing: boolean;
    isRestart: boolean;
    constructor(map: AMap.Map, likeRectangle: LikeRectangle, opts: PolygonEditorOptions & IEnhanceEditorOptions);
    get options(): PolygonEditorOptions;
    get rotatable(): any;
    get rotatingCloseEditor(): boolean | undefined;
    get rotatableIns(): any;
    /**
     * 重新 polygonEditor.open 方法
     */
    open(): void;
    close(): void;
    findControlPoint(point: AMap.CircleMarker): ControlPoint | undefined;
    createEditor(): AMap.PolygonEditor & IEnhanceProperty;
    enhanceProperty(): void;
    registryLikeRectangleRotateEvents(): void;
    destroyLikeRectangleRotateEvents(): void;
    registryControlPoints(): void;
    onDragStart: (data: any) => void;
    onDragging: (data: any) => void;
    onDragEnd: (data: any) => void;
    onChange: (type: string, data: any) => void;
    updateLikeRectanglePath(): void;
    onRotateStart: () => Promise<void>;
    onRotateEnd: () => Promise<void>;
}
export default LikeRectangleEditor;
