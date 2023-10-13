import type LikeRectangle from './index';

export interface ILikeRectangle extends Partial<AMap.PolygonOptions> {
    center: AMap.Vector2 | null; // 中心点
    leftTop: AMap.Vector2 | null; // 左上点
    rightTop: AMap.Vector2 | null; // 右上点
    leftBottom: AMap.Vector2 | null; // 左下点
    rightBottom: AMap.Vector2 | null; // 右下点
    rotatable?: boolean;
    // likeRectangleCenter: AMap.Vector2 | null; // 中心点
}

// 创建矩形方式
// - 两点创建一个矩形：东北点 和 西南点
// - 四点创建
// - 中心点 + 宽 + 高
export interface ILikeRectangleOptions extends AMap.PolygonOptions {
    map: AMap.Map,
    center?: AMap.Vector2;
    width?: number;
    height?: number;
    rotatable?: boolean;
}

export interface IEnhanceProperty extends ILikeRectangle {
    likeRectangle: LikeRectangle;
    likeRectangleCenter: AMap.Vector2 | null; // 中心点
    updatePoints: (leftTop: AMap.Vector2, rightTop: AMap.Vector2, rightBottom: AMap.Vector2, leftBottom: AMap.Vector2) => void;
}
