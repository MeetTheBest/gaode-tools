export declare const uuid: () => string;
export declare const formatNumber: (num: number, precision?: number) => number;
/**
 * 创建文本
 * @param text
 * @param style 自定义文本样式
 * @returns
 */
export declare const createText: (text?: string, style?: {}) => AMap.Text;
/**
 * 计算两个点位的距离
 * @param position
 * @param p2
 * @returns
 */
export declare const computePoint2PointDistance: (p1: AMap.LngLat, p2: AMap.LngLat) => Common.IDistanceText;
