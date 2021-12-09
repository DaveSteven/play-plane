/*
 * @Author: David
 * @Date: 2021-12-08 11:02:47
 * @LastEditTime: 2021-12-09 14:58:34
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /play_plane/src/page/StartPage.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineComponent, h } from '@vue/runtime-core';
import bgImage from '../../assets/start_page.jpg';
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
      h('Sprite', { texture: bgImage }),
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
