import type { ILikeRectangle, ILikeRectangleOptions, IEnhanceProperty } from './type';
import Event from '../Event';
import Rotatable from '../Rotatable';
declare class LikeRectangle extends Event implements ILikeRectangle {
    opts: ILikeRectangleOptions;
    map: ILikeRectangleOptions['map'];
    width: number;
    height: number;
    center: AMap.Vector2;
    leftTop: AMap.Vector2;
    rightTop: AMap.Vector2;
    leftBottom: AMap.Vector2;
    rightBottom: AMap.Vector2;
    likeRectangle: AMap.Polygon & IEnhanceProperty;
    rotatableIns: Rotatable;
    likeRectangleDestroy: () => void;
    constructor(opts: ILikeRectangleOptions);
    bindOptsToSelf(opts: ILikeRectangleOptions): void;
    enhanceMethods(): void;
    destroy(): void;
    registerRotatable(): void;
    calcPoints(center?: AMap.Vector2): {
        leftTop: AMap.Vector2;
        rightTop: AMap.Vector2;
        leftBottom: AMap.Vector2;
        rightBottom: AMap.Vector2;
    };
    setCenter(center: AMap.Vector2): void;
    setPoints(): void;
    create(): AMap.Polygon & IEnhanceProperty;
    enhanceProperty(): void;
    registryEvent(): void;
    onDragEnd(data: IObject): void;
    updatePoints(leftTop: AMap.Vector2, rightTop: AMap.Vector2, rightBottom: AMap.Vector2, leftBottom: AMap.Vector2): void;
    getCenter(): any;
}
export default LikeRectangle;
