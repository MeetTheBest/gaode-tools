import AMapLoader from '@amap/amap-jsapi-loader';
import { createApp } from 'vue';
import App from './App.vue';

window._AMapSecurityConfig = {
    securityJsCode: '09a04cabe5128998d9c9f8f72b9ff8ed',
}

AMapLoader.load({
    "key": "93cb727982a4ea47e12a2229bc519e2d",
    "version": "2.0",
    plugins: [
        'AMap.MouseTool',
        'AMap.PolygonEditor',
    ]
}).then((AMap) => {
    window.AMap = AMap;
    createApp(App).mount('#app');
}).catch((e) => {
    console.error(e);  //加载错误提示
});
