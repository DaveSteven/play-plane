/*
 * @Author: David
 * @Date: 2021-12-08 17:42:32
 * @LastEditTime: 2021-12-08 17:56:18
 * @LastEditors: your name
 * @Description:
 * @FilePath: /play_plane/src/component/Map.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { defineComponent, h, ref } from '@vue/runtime-core';
import mapImage from '../../assets/map.jpg';
import { game } from '../Game';
export default defineComponent({
  setup(props, ctx) {
    const viewHeight = 1080;
    const mapY1 = ref(0);
    const mapY2 = ref(-viewHeight);
    const speed = 5;
    game.ticker.add(() => {
      mapY1.value += speed;
      mapY2.value += speed;
    });
    if (mapY1 >= 1080) {
      mapY1 = -viewHeight;
    }
    if (mapY2 >= 1080) {
      mapY2 = -viewHeight;
    }
    return {
      mapY1,
      mapY2,
    };
  },
  render(ctx) {
    return h('Container', [
      h('Sprite', { texture: mapImage, y: ctx.mapY1 }),
      h('Sprite', { texture: mapImage, y: ctx.mapY2 }),
    ]);
  },
});
