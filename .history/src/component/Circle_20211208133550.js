/*
 * @Author: David
 * @Date: 2021-12-06 15:52:37
 * @LastEditTime: 2021-12-08 13:35:50
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/component/Circle.js
 */
import { h, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  render() {
    return h("circle", { x: 100, y: 100 });
  },
});
