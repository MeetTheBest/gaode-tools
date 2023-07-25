<template>
	<div class="nav">
		<span :class="['btn', isPolygonRangingPage ? 'active' : '']" @click="toPolygonRangingPage">
			查看多边形边线长度
		</span>
		<span
			:class="['btn', isPolygonRangingInDrawingPage ? 'active' : '']"
			@click="toPolygonRangingInDrawingPage"
		>
			查看多边形绘制时测距
		</span>
		<span
			:class="['btn', isPolygonEditorRangingPage ? 'active' : '']"
			@click="toPolygonEditorRangingPage"
		>
			查看多边形编辑器测距页
		</span>
		<span :class="['btn', isPolygonEditorEvent ? 'active' : '']" @click="toPolygonEditorEventPage">
			多边形点位事件监听
		</span>
	</div>
	<PolygonRanging v-if="isPolygonRangingPage" />
	<PolygonRangingInDrawing v-if="isPolygonRangingInDrawingPage" />
	<PolygonEditorRanging v-if="isPolygonEditorRangingPage" />
	<PolygonEdtiorEvent v-if="isPolygonEditorEvent" />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import PolygonRanging from './PolygonRanging/index.vue';
import PolygonRangingInDrawing from './PolygonRangingInDrawing/index.vue';
import PolygonEditorRanging from './PolygonEditorRanging/index.vue';
import PolygonEdtiorEvent from './PolygonEditorEvent/index.vue';

enum Page {
	PolygonRanging = 'PolygonRanging',
	PolygonRangingInDrawing = 'PolygonRangingInDrawing',
	PolygonEditorRanging = 'PolygonEditorRanging',
	PolygonEditorEvent = 'PolygonEditorEvent',
}

const page = ref(Page.PolygonEditorEvent);

const isPolygonRangingPage = computed(() => page.value === Page.PolygonRanging);
const isPolygonRangingInDrawingPage = computed(() => page.value === Page.PolygonRangingInDrawing);
const isPolygonEditorRangingPage = computed(() => page.value === Page.PolygonEditorRanging);
const isPolygonEditorEvent = computed(() => page.value === Page.PolygonEditorEvent);

const toPolygonRangingPage = () => (page.value = Page.PolygonRanging);
const toPolygonRangingInDrawingPage = () => (page.value = Page.PolygonRangingInDrawing);
const toPolygonEditorRangingPage = () => (page.value = Page.PolygonEditorRanging);
const toPolygonEditorEventPage = () => (page.value = Page.PolygonEditorEvent);
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
	padding: 0 12px;
	cursor: pointer;
}

.active {
	color: cornflowerblue;
}
</style>
