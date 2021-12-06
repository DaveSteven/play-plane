/*
 * @Author: David
 * @Date: 2021-12-06 13:39:38
 * @LastEditTime: 2021-12-06 13:41:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/webpack.config.js
 */
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist.js')
    }
}