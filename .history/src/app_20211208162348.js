/*
 * @Author: David
 * @Date: 2021-12-06 14:51:44
 * @LastEditTime: 2021-12-08 16:23:34
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/app.js
 */
import { defineComponent, h, ref, computed } from '@vue/runtime-core';
import StartPage from './page/StartPage';
export default defineComponent({
  setup(props, ctx) {
    const currentPageName = ref('StartPage');
    const currentPage = computed(() => {
      if (currentPage.value === 'StartPage') {
        return 'StartPage';
      } else if (currentPage.value === 'GamePage') {
        return 'GamePage';
      }
    });
    return {
        currentPage,
        currentPageName
    }
  },
  render(ctx) {
      console.log(ctx.currentPage)
    return h(ctx.currentPage, {
        onChangePage(page) {
            console.log(page)
            ctx.currentPageName = page;
        }
    });
  },
});
