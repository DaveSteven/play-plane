/*
 * @Author: David
 * @Date: 2021-12-09 13:18:21
 * @LastEditTime: 2021-12-09 13:23:30
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /play_plane/src/component/EnemyPlane.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineComponent, h, toRefs } from '@vue/runtime-core';
import enemyPlane from '../../assets/enemy.png';

export default defineComponent({
  render(ctx) {
    return h(
      'Container',
      h('Sprite', { texture: enemyPlane })
    );
  },
});
