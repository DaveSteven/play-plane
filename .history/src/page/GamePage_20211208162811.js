/*
 * @Author: David
 * @Date: 2021-12-08 11:02:47
 * @LastEditTime: 2021-12-08 16:28:11
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/page/GamePage.js
 */
import { defineComponent, h } from '@vue/runtime-core';
import bgImage from '../../assets/map.jpg';

export default defineComponent({
  render() {
    return h('Container', [
      h('Sprite', { texture: bgImage }),
    ]);
  },
});
