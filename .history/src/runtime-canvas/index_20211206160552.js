/*
 * @Author: David
 * @Date: 2021-12-06 14:45:39
 * @LastEditTime: 2021-12-06 16:05:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/runtime-canvas/index.js
 */
import { createRenderer } from "@vue/runtime-core";
import { Graphics } from "pixi.js";

const renderer = createRenderer({

    createElement(type) {
        let element;
        if (type === 'rect') {
            element = new Graphics();
            element.beginFill(0xff0000)
            element.drawRect(0, 0, 500, 500);
            element.endFill();
        } else if (type === 'circle') {
            element = new Graphics();
            element.beginFill(0xffff00)
            element.drawCircle(0, 0, 50);
            element.endFill();
        }
        return element;
    },

    setElementText(node, text) {
        console.log(node)
        const cText = new Text(text);
        node.addChild(cText);
    },

    createText(text) {
        return new Text(text);
    },

    patchProp(el, key, prevValue, nextValue) {
        el[key] = nextValue;
    },

    insert(el, parent) {
        parent.addChild(el)
    }

});

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent);
}