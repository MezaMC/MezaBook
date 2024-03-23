// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './css/style.scss'
import './css/custom.scss'
import './css/ov-theme.scss'
import MyLayout from "./MyLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscusTalk({
          repo: 'MezaMC/MezaBook',
          repoId: 'R_kgDOLIn8Zg',
          category: 'General', // default: `General`
          categoryId: 'DIC_kwDOLIn8Zs4CcwRT',
          mapping: 'pathname', // default: `pathname`
          inputPosition: 'top', // default: `top`
          lang: 'ru', // default: `zh-CN`
          lightTheme: 'light', // default: `light`
          darkTheme: 'transparent_dark', // default: `transparent_dark`
          // ...
        }, {
          frontmatter, route
        },
        // Whether to activate the comment area on all pages.
        // The default is true, which means enabled, this parameter can be ignored;
        // If it is false, it means it is not enabled.
        // You can use `comment: true` preface to enable it separately on the page.
        true
    );
  }
} satisfies Theme
