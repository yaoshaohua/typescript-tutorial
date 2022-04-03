module.exports = {
  title: 'TypeScript Tutorial',
  description: 'TypeScript 学习笔记',
  theme: 'reco',
  themeConfig: {
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        children: ['/started/'],
      },
      {
        title: '手册',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/handbook/intro',
          '/handbook/basic-types',
          '/handbook/everyday-types',
          '/handbook/narrowing',
          '/handbook/functions',
          '/handbook/objects',
          {
            title: '类型操作',
            collapsable: false,
            children: [
              '/handbook/type-manipulation/',
              '/handbook/type-manipulation/generics',
              '/handbook/type-manipulation/keyof-types',
              '/handbook/type-manipulation/typeof-types',
              '/handbook/type-manipulation/indexed-access-types',
              '/handbook/type-manipulation/conditional-types',
              '/handbook/type-manipulation/mapped-types',
              '/handbook/type-manipulation/template-literal-types',
            ],
          },
          '/handbook/classes',
          '/handbook/modules',
        ],
      },
    ],
    subSidebar: 'auto',
  },
};
