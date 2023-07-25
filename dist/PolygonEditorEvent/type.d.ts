export interface IDistanceText {
    text: string;
    textPos: AMap.Vector2;
}
interface ISingleRingList {
    editingMidTipMarkerList: AMap.CircleMarker[];
}
interface ISingleRingListHandle {
    list: ISingleRingList;
}
export interface IPolygonEditorPatch {
    editingMidTipMarkerList?: any[];
    singleRingListHandle?: ISingleRingListHandle;
    map?: AMap.Map;
}
export interface IOptions {
    [x: string]: any;
}
export type TEventNames = 'mousedown' | 'mousemove' | 'mouseup';
export type TEventCallback = (target?: AMap.CircleMarker) => void;
export type IEvents = Record<TEventNames, TEventCallback>;
export {};
