/*
 * @Author: David
 * @Date: 2021-12-06 14:51:44
 * @LastEditTime: 2021-12-08 13:32:32
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/app.js
 */
import { defineComponent, h } from "@vue/runtime-core";
import Circle from "./component/Circle";
import StartPage from "./page/StartPage"
export default defineComponent({
    render () {
        const vnode = h(StartPage)
        return vnode;
    }
})