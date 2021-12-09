/*
 * @Author: David
 * @Date: 2021-12-06 14:51:44
 * @LastEditTime: 2021-12-09 14:46:12
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /play_plane/src/app.js
 */
import { defineComponent, h, ref, computed } from '@vue/runtime-core';
import StartPage from './page/StartPage';
import GamePage from './page/GamePage';
import EndPage from './page/EndPage';

export default defineComponent({
  setup(props, ctx) {
    const currentPageName = ref('StartPage');
    const currentPage = computed(() => {
      if (currentPageName.value === 'StartPage') {
        return StartPage;
      } else if (currentPageName.value === 'GamePage') {
        return GamePage;
      } else if (currentPage.value === 'EndPage') {
        return EndPage;
      }
    });
    return {
      currentPage,
      currentPageName,
    };
  },
  render(ctx) {
    return h(
      'Container',
      h(ctx.currentPage, {
        onChangePage(page) {
          ctx.currentPageName = page;
        },
      })
    );
  },
});
