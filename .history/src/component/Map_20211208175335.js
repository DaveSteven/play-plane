/*
 * @Author: David
 * @Date: 2021-12-08 17:42:32
 * @LastEditTime: 2021-12-08 17:53:35
 * @LastEditors: your name
 * @Description:
 * @FilePath: /play_plane/src/component/Map.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { defineComponent, h } from '@vue/runtime-core';
import mapImage from '../../assets/map.jpg';
import { game } from '../Game';
export default defineComponent({
  setup(props, ctx) {
    const viewHeight = 1080;
    const mapY1 = ref(0);
    const mapY2 = ref(-viewHeight);
    const speed = 5;
    game.add(() => {
      mapY1 += speed;
      mapY2 += speed;
    });
  },
  render() {
    return h('Container', [
      h('Sprite', { texture: mapImage }),
      h('Sprite', { texture: mapImage }),
    ]);
  },
});
