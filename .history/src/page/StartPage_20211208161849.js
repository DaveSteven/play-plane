/*
 * @Author: David
 * @Date: 2021-12-08 11:02:47
 * @LastEditTime: 2021-12-08 16:18:49
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/page/StartPage.js
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
