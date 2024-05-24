<template>
    <div id="container"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { LikeRectangle, PolygonRanging } from "../../src/main";

let mapIns: AMap.Map | null = null;

let polygon!: AMap.Polygon;

let polygonRangingIns: PolygonRanging | null = null;

const registryMap = () => {
    mapIns = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 18,
    });
};

const createPolygon = () => {
    if (!mapIns) return;

    const likeRectangleOptions = {
        map: mapIns,
        center: [116.400274, 39.905812] as [number, number],
        width: 200,
        height: 50,
        draggable: true,
        cursor: "pointer",
        fillOpacity: 0.3,
        strokeOpacity: 0.8,
        rotatable: true,
        bubble: true, // 事件穿透
    };

    polygon = new LikeRectangle(
        likeRectangleOptions
    )! as unknown as AMap.Polygon;

    mapIns.add([polygon]);

    return polygon;
};

const createPolygonRanging = () => {
    polygonRangingIns = new PolygonRanging(mapIns!);
    polygonRangingIns.start(polygon!);
};

onMounted(async () => {
    registryMap();

    createPolygon();

    createPolygonRanging();
});

onUnmounted(() => {
    polygon.destroy();
    polygonRangingIns!.destroy?.();
});
</script>

<style>
.container {
    width: 100%;
    height: 100%;
}
</style>
