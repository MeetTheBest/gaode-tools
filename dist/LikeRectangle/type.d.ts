import type LikeRectangle from './index';
export interface ILikeRectangle {
    center: AMap.Vector2 | null;
    leftTop: AMap.Vector2 | null;
    rightTop: AMap.Vector2 | null;
    leftBottom: AMap.Vector2 | null;
    rightBottom: AMap.Vector2 | null;
}
export interface ILikeRectangleOptions extends AMap.PolygonOptions {
    map: AMap.Map;
    center: AMap.Vector2;
    width: number;
    height: number;
}
export interface IEnhanceProperty extends ILikeRectangle {
    likeRectangle: LikeRectangle;
    likeRectangleCenter: AMap.Vector2 | null;
    updatePoints: (leftTop: AMap.Vector2, rightTop: AMap.Vector2, rightBottom: AMap.Vector2, leftBottom: AMap.Vector2) => void;
}
