/*
 * @Author: David
 * @Date: 2021-12-09 10:28:59
 * @LastEditTime: 2021-12-09 10:31:36
 * @LastEditors: your name
 * @Description: 飞机组件
 * @FilePath: /play_plane/src/component/Plane.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineComponent, h } from '@vue/runtime-core';
import planeImg from '../../assets/plane.png';

export default defineComponent({
  render() {
    return h('Container', h('Sprite', { texture: planeImg }));
  },
});
