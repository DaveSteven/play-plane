/*
 * @Author: David
 * @Date: 2021-12-06 14:45:39
 * @LastEditTime: 2021-12-06 15:30:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/runtime-canvas/index.js
 */
import { createRenderer } from "@vue/runtime-core";

const renderer = createRenderer({

    createElement(type) {
        console.log(type)
    },

    insert(el, parent) {
        console.log(el)
    }

});

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent);
}