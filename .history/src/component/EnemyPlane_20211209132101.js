import { defineComponent, h, toRefs } from '@vue/runtime-core';
import enemyPlane from '../../assets/enemyPlane';

export default defineComponent({
  render(ctx) {
    return h(
      'Container',
      h('Sprite', { texture: planeImg })
    );
  },
});
