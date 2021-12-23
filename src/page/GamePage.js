import {
  defineComponent,
  h,
  reactive,
  onMounted,
  onUnmounted,
} from '@vue/runtime-core';
import EnemyPlane from '../component/EnemyPlane';
import Bullet from '../component/Bullet';
import Map from '../component/Map';
import Plane from '../component/Plane';
import { game } from '../Game';
import { hitTestObject } from '../utils';

export default defineComponent({
  setup(props, { emit }) {
    let planeInfo = useCreatePlane();
    const enemyPlanes = useCreateEnemyPlanes();

    const { bullets, addBullet } = useCreateBullets();

    const onAttack = (bulletInfo) => {
      addBullet(bulletInfo);
    };

    useFighting(bullets, enemyPlanes, planeInfo, emit);

    return {
      planeInfo,
      enemyPlanes,
      bullets,
      onAttack,
    };
  },
  render(ctx) {
    const createEnemyPlanes = () => {
      return ctx.enemyPlanes.map((enemyInfo) => {
        return h(EnemyPlane, {
          x: enemyInfo.x,
          y: enemyInfo.y,
        });
      });
    };

    const createBullets = () => {
      return ctx.bullets.map((bullet) => {
        return h(Bullet, {
          x: bullet.x,
          y: bullet.y,
        });
      });
    };

    return h('Container', [
      h(Map),
      h(Plane, {
        x: ctx.planeInfo.x,
        y: ctx.planeInfo.y,
        onAttack: ctx.onAttack,
      }),
      ...createBullets(),
      ...createEnemyPlanes(),
    ]);
  },
});

function useFighting(bullets, enemyPlanes, planeInfo, emit) {
  const handleTicker = () => {
    bullets.forEach((bulletInfo) => {
      bulletInfo.y--;
    });

    enemyPlanes.forEach((enemyInfo) => {
      enemyInfo.y++;
    });

    // 敌方飞机和我方飞机碰撞检测
    enemyPlanes.forEach((enemyPlaneInfo) => {
      if (hitTestObject(enemyPlaneInfo, planeInfo)) {
        emit('changePage', 'EndPage');
      }
    });

    // 子弹和飞机碰撞检测
    bullets.forEach((bulletInfo, bulletIndex) => {
      enemyPlanes.forEach((enemyInfo, enemyIndex) => {
        if (hitTestObject(bulletInfo, enemyInfo)) {
          // ctx.emit('changePage', 'EndPage');
          bullets.splice(bulletIndex, 1);
          enemyPlanes.splice(enemyIndex, 1);
          // 我方子弹消失
          // 敌方飞机消失
        }
      });
    });
  };

  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
}

function useCreateBullets() {
  const bullets = reactive([]);
  const addBullet = (bulletsInfo) => {
    bullets.push({ ...bulletsInfo, width: 61, height: 99 });
  };
  return { bullets, addBullet };
}

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
