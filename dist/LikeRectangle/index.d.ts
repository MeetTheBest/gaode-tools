import { default as Rotatable } from '../Rotatable';
import { default as Event } from '../Event';
import { ILikeRectangle, ILikeRectangleOptions, IEnhanceProperty } from './type';

declare class LikeRectangle extends Event implements ILikeRectangle {
    opts: ILikeRectangleOptions;
    map: AMap.Map;
    width: number;
    height: number;
    center: AMap.Vector2;
    leftTop: AMap.Vector2;
    rightTop: AMap.Vector2;
    leftBottom: AMap.Vector2;
    rightBottom: AMap.Vector2;
    likeRectangle: AMap.Polygon & IEnhanceProperty;
    rotatableIns: Rotatable | null;
    likeRectangleDestroy: () => void;
    likeRectangleRawSetOptions: (optsArg: AMap.PolygonOptions) => void;
    constructor(opts: ILikeRectangleOptions);
    validatorOpts(opts: ILikeRectangleOptions): void;
    bindOptsToSelf(opts: ILikeRectangleOptions): void;
    enhanceMethods(): void;
    likeRectangleSetOptions(optsArg: AMap.PolygonOptions & ILikeRectangleOptions): void;
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
