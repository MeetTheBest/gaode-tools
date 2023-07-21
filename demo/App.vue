<template>
	<div class="nav">
		<span class="btn" @click="toPolygonRangingPage">查看多边形边线长度</span>
		<span class="btn" @click="toPolygonRangingInDrawingPage">查看多边形绘制时测距</span>
		<span class="btn" @click="toPolygonEditorRangingPage">查看多边形编辑器测距页</span>
	</div>
	<PolygonRanging v-if="isPolygonRangingPage" />
	<PolygonEditorRanging v-if="isPolygonEditorRangingPage" />
	<PolygonRangingInDrawing v-if="isPolygonRangingInDrawingPage" />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import PolygonRanging from './PolygonRanging/index.vue';
import PolygonEditorRanging from './PolygonEditorRanging/index.vue';
import PolygonRangingInDrawing from './PolygonRangingInDrawing/index.vue';

enum Page {
	PolygonRanging = 'PolygonRanging',
	PolygonEditorRanging = 'PolygonEditorRanging',
	PolygonRangingInDrawing = 'PolygonRangingInDrawing',
}

const page = ref(Page.PolygonEditorRanging);

const isPolygonRangingPage = computed(() => page.value === Page.PolygonRanging);
const isPolygonEditorRangingPage = computed(() => page.value === Page.PolygonEditorRanging);
const isPolygonRangingInDrawingPage = computed(() => page.value === Page.PolygonRangingInDrawing);

const toPolygonRangingPage = () => (page.value = Page.PolygonRanging);
const toPolygonEditorRangingPage = () => (page.value = Page.PolygonEditorRanging);
const toPolygonRangingInDrawingPage = () => (page.value = Page.PolygonRangingInDrawing);
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

html,
body,
#container {
	height: 100vh;
	width: 100vw;
}

.nav {
	position: fixed;
	top: 0px;
	left: 0;
	right: r0;
	height: 40px;
	background: #fff;
	z-index: 999;
	width: 100vw;
	display: flex;
	align-items: center;
	padding: 0 20px;
}

.btn {
	color: cornflowerblue;
	padding: 0 12px;
	cursor: pointer;
}
</style>
