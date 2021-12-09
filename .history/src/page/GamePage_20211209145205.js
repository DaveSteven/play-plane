/*
 * @Author: David
 * @Date: 2021-12-08 11:02:47
 * @LastEditTime: 2021-12-09 14:52:05
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/page/GamePage.js
 */
import { defineComponent, h, reactive } from '@vue/runtime-core';
import EnemyPlane from '../component/EnemyPlane';
import Map from '../component/Map';
import Plane from '../component/Plane';
import { game } from '../Game';
import { hitTestObject } from '../utils';

export default defineComponent({
  setup(props, ctx) {
    const planeInfo = useCreatePlane();
    const enemyPlanes = useCreateEnemyPlanes();

    game.ticker.add(() => {
      enemyPlanes.forEach((enemyPlaneInfo) => {
        enemyPlaneInfo.y++;
      });

      enemyPlanes.forEach((enemyInfo) => {
        if (hitTestObject(enemyInfo, planeInfo)) {
          ctx.emit('changePage', 'EndPage');
        }
      });
    });
    return {
      planeInfo,
      enemyPlanes,
    };
  },
  render(ctx) {
    const useCreateEnemyPlane = () => {
      return ctx.enemyPlanes.map((enemyInfo) => {
        return h(EnemyPlane, {
          x: enemyInfo.x,
          y: enemyInfo.y,
        });
      });
    };
    return h('Container', [
      h(Map),
      h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
      ...useCreateEnemyPlane(),
    ]);
  },
});

function useCreateEnemyPlanes() {
  const enemyPlanes = reactive([
    {
      x: 50,
      y: 0,
      width: 308,
      height: 207,
    },
  ]);

  return enemyPlanes;
}

function useCreatePlane() {
  const planeInfo = reactive({ x: 150, y: 700, width: 200, height: 306 });
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
