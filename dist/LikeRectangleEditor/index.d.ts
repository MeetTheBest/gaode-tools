import { IEnhanceProperty, IEnhanceEditorOptions } from './type';
import { default as ControlPoint } from './controlPoint';
import { default as LikeRectangle } from '../LikeRectangle';
import { PolygonEditorOptions } from '@amap/amap-jsapi-types/plugins/PolygonEditor';

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
    constructor(map: AMap.Map, likeRectangle: LikeRectangle, opts?: PolygonEditorOptions & IEnhanceEditorOptions);
    get options(): PolygonEditorOptions;
    get rotatable(): boolean | undefined;
    get rotatingCloseEditor(): boolean | undefined;
    get rotatableIns(): any;
    get isMobile(): boolean | undefined;
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
