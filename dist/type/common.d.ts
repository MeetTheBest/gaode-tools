declare namespace Common {
    type IPath = AMap.LngLat[];
    type IPaths = IPath[];
    interface Event {
        lnglat: AMap.LngLat;
        pixel: AMap.Pixel;
        type: string;
        target: any;
    }
    interface IDistanceText {
        text: string;
        textPos: AMap.Vector2;
    }
}
