/*
 * @Author: David
 * @Date: 2021-12-08 11:02:47
 * @LastEditTime: 2021-12-09 13:34:50
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/page/GamePage.js
 */
import { defineComponent, h, reactive } from '@vue/runtime-core';
import EnemyPlane from '../component/EnemyPlane';
import Map from '../component/Map';
import Plane from '../component/Plane';

export default defineComponent({
  setup() {
    const planeInfo = userCreatePlane();
    const enemyPlanes = reactive([
      {
        x: 50,
        y: 0,
      },
    ]);

    return {
      planeInfo,
    };
  },
  render(ctx) {
    return h('Container', [
      h(Map),
      h(Plane, { x: ctx.x, y: ctx.y }),
      h(EnemyPlane),
    ]);
  },
});
function userCreatePlane() {
  const planeInfo = reactive({ x: 150, y: 150 });
  const speed = 15;
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowUp':
        planeInfo.y -= speed;
        break;
      case 'ArrowLeft':
        planeInfo.x -= speed;
        break;
      case 'ArrowDown':
        planeInfo.y += speed;
        break;
      case 'ArrowRight':
        planeInfo.x += speed;
        break;
    }
  });
  return planeInfo;
}
