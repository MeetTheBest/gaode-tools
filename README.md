# 高德未支持工具封装

## 本地运行

```
npm install
npm run dev
```

## 通用 API

| name | 使用 | 描述 |
| ----- | ----- | ---- |
| `start` | `instance.start(arg?)` | 开始相应功能 |
| `stop` | `instance.stop()` | 停止相应功能 |
| `destroy` | `instance.destroy()` | 销毁相应功能 |

## 多边形测距 PolygonRanging

**使用**

```javascript
import { PolygonRanging } from 'gd-tools';

const map = new AMap.Map('container');
const polygonRangingIns = new PolygonRanging(map);

const polygon = new AMap.Polygon({});

// 开启测距
polygonRangingIns.start(polygon);

// 适当时机销毁测距（如组件的 destroy 生命周期）
polygonRangingIns.destroy();
```

## 多边形绘制时测距 PolygonRangingInDrawing

**使用**

```javascript
import { PolygonRangingInDrawing } from 'gd-tools';

const map = new AMap.Map('container');
const polygonRangingIns = new PolygonRangingInDrawing(map);

const mouseTool = new AMap.MouseTool({});

mouseTool.on('draw', () => {
    // 绘制完成后，需要停止
    polygonRangingIns.stop();
});

// 开始绘制多边形
mouseTool.polygon();

// 开启测距
polygonRangingIns.start();

// 适当时机销毁测距（如组件的 destroy 生命周期）
polygonRangingIns.destroy();
```

## 多边形编辑器测距 PolygonEditorRanging

**使用**

```javascript
import { PolygonEditorRanging } from 'gd-tools';

const map = new AMap.Map('container');

const polygon = new AMap.Polygon({});

const editor = new AMap.PolygonEditor(map, polygon);

const polygonEditorRangingIns = new PolygonEditorRanging(map);

// 开启测距
polygonEditorRangingIns.start(editor);

// 适当时机停止测距
polygonEditorRangingIns.stop();

// 适当时机销毁测距（如组件的 destroy 生命周期）
polygonEditorRangingIns.destroy();
```
