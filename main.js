/*
 * @Author: David
 * @Date: 2021-12-06 13:39:44
 * @LastEditTime: 2021-12-06 15:27:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/main.js
 */
import { createApp } from "./src/runtime-canvas";
import App from './src/App'
import { getRootContainer } from "./src/Game";

createApp(App).mount(getRootContainer())