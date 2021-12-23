import {
  defineComponent,
  h,
  reactive,
  onMounted,
  onUnmounted,
} from '@vue/runtime-core';
import EnemyPlane from '../component/EnemyPlane';
import Map from '../component/Map';
import Plane from '../component/Plane';
import { game } from '../Game';
import { hitTestObject } from '../utils';

export default defineComponent({
  setup(props, ctx) {
    let planeInfo = useCreatePlane();
    const enemyPlanes = useCreateEnemyPlanes();

    const handleTicker = () => {
      enemyPlanes.forEach((enemyPlaneInfo) => {
        enemyPlaneInfo.y++;
      });

      enemyPlanes.forEach((enemyInfo) => {
        if (hitTestObject(enemyInfo, planeInfo)) {
          ctx.emit('changePage', 'EndPage');
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
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
  const planeInfo = reactive({ x: 150, y: 700, width: 258, height: 364 });
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
