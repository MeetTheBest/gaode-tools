const TEXT_STYLE = {
    'border-color': '#e1f5fe',
    'font-size': '12px',
    'border-radius': '.25rem',
    'background-color': 'rgba(0,0,0,.4)',
    'border-width': 0,
    'text-align': 'center',
    color: '#fff'
};

/**
 * 创建文本
 * @param text 
 * @param style 自定义文本样式
 * @returns 
 */
export const createText = (text = '', style = {}) => {
    return new AMap.Text({ text, style: { ...TEXT_STYLE, ...style }, offset: [0, -10] });
}

/**
 * 计算两个点位的距离
 * @param position 
 * @param p2 
 * @returns 
 */
export const computePoint2PointDistance = (p1: AMap.LngLat, p2: AMap.LngLat): Common.IDistanceText => {
    const textPos = p1.divideBy(2).add(p2.divideBy(2));
    const distance = Math.round(p1.distance(p2));
    return { text: `${distance}米`, textPos } as unknown as Common.IDistanceText;
}