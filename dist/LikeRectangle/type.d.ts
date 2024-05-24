import { default as RotationOptions } from '../Rotatable/type';
import { default as LikeRectangle } from './index';

export interface ILikeRectangleOptions extends AMap.PolygonOptions {
    map: AMap.Map;
    center?: AMap.Vector2;
    width?: number;
    height?: number;
    rotatable?: boolean;
    rotationOptions?: RotationOptions;
}
export interface ILikeRectangle extends ILikeRectangleOptions, Partial<AMap.PolygonOptions> {
    center: AMap.Vector2;
    leftTop: AMap.Vector2;
    rightTop: AMap.Vector2;
    leftBottom: AMap.Vector2;
    rightBottom: AMap.Vector2;
    opts: ILikeRectangleOptions;
}
export interface IEnhanceProperty extends ILikeRectangle {
    likeRectangle: LikeRectangle;
    updatePoints: (leftTop: AMap.Vector2, rightTop: AMap.Vector2, rightBottom: AMap.Vector2, leftBottom: AMap.Vector2) => void;
}
