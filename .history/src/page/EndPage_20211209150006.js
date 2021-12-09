import { defineComponent, h } from '@vue/runtime-core';
import endImage from '../../assets/end_page.jpg';
import startBtn from '../../assets/startBtn.png';

export default defineComponent({
  setup(props, ctx) {
    const onClick = () => {
      ctx.emit('changePage', 'GamePage')
    };
    return {
      onClick,
    };
  },
  render(ctx) {
    return h('Container', [
      h('Sprite', { texture: endImage }),
      h('Sprite', {
        texture: startBtn,
        x: 227,
        y: 515,
        interactive: true,
        onClick: ctx.onClick,
      }),
    ]);
  },
});