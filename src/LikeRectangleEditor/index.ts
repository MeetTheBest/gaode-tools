import { PolygonEditorOptions } from '@amap/amap-jsapi-types/plugins/PolygonEditor';
import LikeRectangle from "../LikeRectangle";
import ControlPoint from './controlPoint';
import { IEnhanceProperty, IEnhanceEditorOptions } from './type';

class LikeRectangleEditor {
    opts!: PolygonEditorOptions & IEnhanceEditorOptions;
    map!: AMap.Map;
    likeRectangle!: LikeRectangle;
    polygonEditor!: AMap.PolygonEditor & IEnhanceProperty;
    polygonEditorOpen!: () => void;
    controlPoints!: ControlPoint[];

    constructor(map: AMap.Map, likeRectangle: LikeRectangle, opts: PolygonEditorOptions & IEnhanceEditorOptions) {
        this.map = map;
        this.likeRectangle = likeRectangle;
        this.opts = opts;

        this.onChange = this.onChange.bind(this);

        // @ts-ignore
        return this.createEditor();
    }

    get options() {
        return {
            ...this.opts,
            midControlPoint: { radius: 0 }
        } as PolygonEditorOptions;
    }

    /**
     * 重新 polygonEditor.open 方法
     */
    open() {
        this.polygonEditorOpen();
        this.controlPointRegistryEvent();
    }

    findControlPoint(point: AMap.CircleMarker) {
        return this.controlPoints.find(controlPoint => {
            const controlPointCenter = controlPoint.point.getCenter();
            const controlPointLngLat = `${controlPointCenter.lng}_${controlPointCenter.lat}`;

            const pointCenter = point.getCenter();
            const pointCenterLngLat = `${pointCenter.lng}_${pointCenter.lat}`;

            return controlPointLngLat === pointCenterLngLat;
        });
    }

    createEditor() {
        const polygon = this.likeRectangle as unknown as AMap.Polygon;

        this.polygonEditor = new AMap.PolygonEditor(this.map, polygon, this.options) as AMap.PolygonEditor & IEnhanceProperty;

        // 增强属性
        this.enhanceProperty();

        return this.polygonEditor;
    }

    enhanceProperty() {
        this.polygonEditor.likeRectangleEditor = this;

        this.polygonEditorOpen = this.polygonEditor.open;
        this.polygonEditor.open = this.open.bind(this);
    }

    controlPointRegistryEvent() {
        // @ts-ignore
        const controlPoints = (this.polygonEditor?.singleRingListHandle?.list?.editingVertexMarkerList ?? []) as AMap.CircleMarker[];

        this.controlPoints = controlPoints.map((controlPoint, idx) => {
            const extData = controlPoint.getExtData() || {};
            controlPoint.setExtData({ ...extData, idx });

            return new ControlPoint(this, controlPoint, controlPoints);
        });
    }

    onChange() {
        // TODO 需要处理圆心位置实时变化
        this.updateCenterMarker();

        // TODO 更新多边形路径
        this.updateLikeRectanglePath();

        this.opts.onChange?.();
    }

    updateCenterMarker() {

    }

    updateLikeRectanglePath() {
        const [
            leftTopControlPoint,
            rightTopControlPoint,
            rightBottomControlPoint,
            leftBottomControlPoint
        ] = this.controlPoints;

        const leftTopControlPointCenter = leftTopControlPoint.point.getCenter();
        const rightTopControlPointCenter = rightTopControlPoint.point.getCenter();
        const rightBottomControlPointCenter = rightBottomControlPoint.point.getCenter();
        const leftBottomControlPointCenter = leftBottomControlPoint.point.getCenter();

        this.likeRectangle.likeRectangle.updatePoints(
            [leftTopControlPointCenter.lng, leftTopControlPointCenter.lat],
            [rightTopControlPointCenter.lng, rightTopControlPointCenter.lat],
            [rightBottomControlPointCenter.lng, rightBottomControlPointCenter.lat],
            [leftBottomControlPointCenter.lng, leftBottomControlPointCenter.lat],
        );
    }
}

export default LikeRectangleEditor;
