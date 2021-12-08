/*
 * @Author: David
 * @Date: 2021-12-06 15:19:59
 * @LastEditTime: 2021-12-08 17:51:53
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/Game.js
 */
import { Application } from "pixi.js";

// cavas => pixi.js
export const game = new Application({
    width: 750,
    height: 1080
})

document.body.append(game.view)

// game.stage
export function getRootContainer() {
    return game.stage;
}