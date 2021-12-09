/*
 * @Author: David
 * @Date: 2021-12-09 13:45:18
 * @LastEditTime: 2021-12-09 14:03:13
 * @LastEditors: your name
 * @Description:
 * @FilePath: /play_plane/src/utils/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
export const hitTestObject = (objectA, objectB) => {
  return (
    objectA.x + objectA.width >= objectB.x &&
    objectB.x + objectB.width >= objectA.x &&
    objectA.y + objectA.height >= objectB.y &&
    objectB.y + objectB.height >= objectA.y
  );
};
