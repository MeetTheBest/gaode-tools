import Moveable from 'moveable';
import LikeRectangle from '../LikeRectangle';
import Event from '../Event';
declare class Rotatable extends Event {
    likeRectangleIns: LikeRectangle & AMap.Polygon;
    moveableIns: Moveable | null;
    rotationPointIns: AMap.Marker | null;
    midPoint: AMap.LngLat;
    initAngle: number;
    offset: number;
    rotationLine: AMap.Polyline;
    customRotationDOMId: string;
    moveableElementId: string;
    targetElementId: string;
    constructor(likeRectangle: LikeRectangle & AMap.Polygon);
    get mapIns(): any;
    get center(): AMap.Vector2;
    get draggable(): any;
    open(): void;
    reset(): void;
    close(): void;
    registryLikeRectangleEvents(): void;
    destroyLikeRectangleEvents(): void;
    /**
     * 旋转点（即中心点）
     */
    createRotationPoint(): Promise<void>;
    genMarkerContent: (rotate?: number) => string;
    setMarkerRotatable: () => void;
    registryEvent(): void;
    destroyEvent(): void;
    onRotateStart: () => void;
    onRotate: (event: any) => void;
    onRotateEnd: () => void;
    rotate: (deg: number) => void;
    calcRotatePoint: (point: AMap.Pixel, center: AMap.Pixel, angle: number) => {
        x: number;
        y: number;
    };
    getDOMTransformRotate: (dom: HTMLElement) => number;
    calcMidPoint(): AMap.LngLat;
    /**
     * 计算第一条连线的中点，位于中心点角度
     */
    calcInitAngle(): number | undefined;
    calcInitOffset(): number;
    updateRotationAbleOffset: () => void;
    private onDragStart;
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    private onDragEnd;
    setRotationLine(): void;
}
export default Rotatable;
