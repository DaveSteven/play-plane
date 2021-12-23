import { defineComponent, h } from '@vue/runtime-core';
import endImg from '../../assets/end_page.jpg';
import restartImg from '../../assets/restartBtn.png';

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
      h('Sprite', { texture: endImg }),
      h('Sprite', {
        texture: restartImg,
        x: 227,
        y: 515,
        interactive: true,
        onClick: ctx.onClick,
      }),
    ]);
  },
});