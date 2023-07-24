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
}
export interface IOptions {
    [x: string]: any;
}
export {};
