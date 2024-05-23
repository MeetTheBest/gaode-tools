<template>
    <div id="container"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { PolygonEditorEvent } from "../../src/main.ts";

let mapIns: AMap.Map | null = null;

let polyEditor: AMap.PolygonEditor | null = null;

let polygonEditorEventIns: PolygonEditorEvent | null = null;

const registryMap = () => {
    mapIns = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 14,
    });
};

const createPolygon = () => {
    if (!mapIns) return;

    const path = [
        [116.403322, 39.920255],
        [116.410703, 39.897555],
        [116.402292, 39.892353],
        [116.389846, 39.891365],
    ];

    const polygonOptions = {
        path: path,
        strokeColor: "#FF33FF",
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillOpacity: 0.4,
        fillColor: "#1791fc",
        zIndex: 50,
        bubble: true,
    } as AMap.PolygonOptions;

    const polygon = new AMap.Polygon();
    polygon.setOptions(polygonOptions);

    mapIns.add([polygon]);
    // 缩放地图到合适的视野级别
    mapIns.setFitView();

    return polygon;
};

const createPolygonEditor = (polygon: AMap.Polygon | undefined) => {
    polyEditor = new AMap.PolygonEditor(mapIns!, polygon);
    polyEditor.open();
};

const createPolygonEditorRanging = () => {
    polygonEditorEventIns = new PolygonEditorEvent(polyEditor!);
};

const registryPolygonEditorEvent = () => {
    polygonEditorEventIns?.on("mousedown", (circleMarker) => {
        console.log("按下", circleMarker);
    });
    polygonEditorEventIns?.on("mouseup", (circleMarker) => {
        console.log("松开", circleMarker);
    });
    polygonEditorEventIns?.on("mousemove", (circleMarker) => {
        console.log("移动", circleMarker);
    });
};

onMounted(() => {
    registryMap();
    createPolygonEditor(createPolygon());
    createPolygonEditorRanging();
    registryPolygonEditorEvent();
});

onUnmounted(() => {
    polygonEditorEventIns?.destroy?.();
});
</script>

<style>
.container {
    width: 100%;
    height: 100%;
}
</style>
