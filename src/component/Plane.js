import { defineComponent, h, toRefs } from '@vue/runtime-core';
import planeImg from '../../assets/plane.png';

export default defineComponent({
  props: ['x', 'y'],
  setup(props, { emit }) {
    const { x, y } = toRefs(props);
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        emit('attack', { x: x.value + 100, y: y.value });
      }
    });
    return {
      x,
      y,
    };
  },
  render(ctx) {
    return h(
      'Container',
      h('Sprite', {
        texture: planeImg,
        x: ctx.x,
        y: ctx.y,
      })
    );
  },
});
