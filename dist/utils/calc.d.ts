/**
 * 计算两个点位的距离
 * @param position
 * @param p2
 * @returns
 */
export declare const computePoint2PointDistance: (p1: AMap.LngLat, p2: AMap.LngLat) => Common.IDistanceText;
/**
 * 平面坐标内，计算两个点的距离
 * @param p1
 * @param p2
 * @returns
 */
export declare const computePointDistance: (p1: AMap.Pixel, p2: AMap.Pixel) => number;
