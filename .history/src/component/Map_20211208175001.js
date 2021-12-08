/*
 * @Author: David
 * @Date: 2021-12-08 17:42:32
 * @LastEditTime: 2021-12-08 17:50:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: /play_plane/src/component/Map.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { defineComponent, h } from '@vue/runtime-core';
import mapImage from '../../assets/map.jpg';

export default defineComponent({
  render() {
    return h('Container', [
      h('Sprite', { texture: mapImage }),
      h('Sprite', { texture: mapImage }),
    ]);
  },
});
