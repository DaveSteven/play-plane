/*
 * @Author: David
 * @Date: 2021-12-06 14:45:39
 * @LastEditTime: 2021-12-08 13:39:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/runtime-canvas/index.js
 */
import { createRenderer } from '@vue/runtime-core';
import { Graphics, Text, Container, Sprite } from 'pixi.js';

const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (key) {
      case 'Container':
        element = new Container();
        break;
      case 'Sprite':
        element = new Sprite();
    }
    return element;
  },

  setElementText(node, text) {
    const cText = new Text(text);
    node.addChild(cText);
  },

  createText(text) {
    return new Text(text);
  },

  patchProp(el, key, prevValue, nextValue) {
    switch (type) {
      case 'texture':
        el.texture = Sprite.texture(nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },

  insert(el, parent) {
    parent.addChild(el);
  },

  createComment() {},
  parentNoder() {},
  nextSibling() {},
  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
