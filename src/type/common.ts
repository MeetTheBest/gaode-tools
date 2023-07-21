declare namespace Common {
    export type IPath = AMap.LngLat[];

    export type IPaths = IPath[];

    export interface Event {
        lnglat: AMap.LngLat;
        pixel: AMap.Pixel;
        type: string;
        target: any;
    }

    export interface IDistanceText {
        text: string;
        textPos: AMap.Vector2;
    }
}