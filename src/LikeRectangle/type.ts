import type LikeRectangle from './index';

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

export interface ILikeRectangle extends ILikeRectangleOptions, Partial<AMap.PolygonOptions> {
    center: AMap.Vector2; // 中心点
    leftTop: AMap.Vector2; // 左上点
    rightTop: AMap.Vector2; // 右上点
    leftBottom: AMap.Vector2; // 左下点
    rightBottom: AMap.Vector2; // 右下点
    opts: ILikeRectangleOptions; // 配置参数
}

export interface IEnhanceProperty extends ILikeRectangle {
    likeRectangle: LikeRectangle;
    updatePoints: (leftTop: AMap.Vector2, rightTop: AMap.Vector2, rightBottom: AMap.Vector2, leftBottom: AMap.Vector2) => void;
}
