import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mcsmanager开服教程",
  description: "mcsmanager开服教程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }, //不需要
      { text: '怎么找到我们?', items:[
      { text: 'Github', link: 'https://github.com/kabaka9527/mcsmanager-docs-go-ahead-of-the-rest' }
      ]},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kabaka9527/mcsmanager-docs-go-ahead-of-the-rest' }
    ],
    search: {
      provider:"local",
      options: {
      translations: {
        button: {
	  buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
	  },
	modal: {
	  noResultsText: "无法找到相关结果",
	  resetButtonTitle: "清除查询条件",
	  footer: {
	    selectText: "选择",
	    navigateText: "切换",
	  },
	},
      },
    },
  },
}
})
