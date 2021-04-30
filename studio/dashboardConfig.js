export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608bdf7bfe713fc478b8cb45',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pzvxx13y',
                  apiId: '2862a99a-200e-4dad-a21f-6b2f1a5a5fc6'
                },
                {
                  buildHookId: '608bdf7bd2a9eabfd0911a5b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ijboiyyf',
                  apiId: 'f1251bd6-e44b-4581-8648-e46bba01bf4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcinrck/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ijboiyyf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
