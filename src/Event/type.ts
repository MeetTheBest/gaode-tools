export type TEventCallback = (target?: AMap.CircleMarker, event?: Common.Event) => void;

export interface IEvents {
    [x: string]: TEventCallback[];
}
