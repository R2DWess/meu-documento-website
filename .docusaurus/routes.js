import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/meu-documento-website/blog',
    component: ComponentCreator('/meu-documento-website/blog', '9e2'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/archive',
    component: ComponentCreator('/meu-documento-website/blog/archive', '6e1'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/first-blog-post',
    component: ComponentCreator('/meu-documento-website/blog/first-blog-post', 'ecd'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/long-blog-post',
    component: ComponentCreator('/meu-documento-website/blog/long-blog-post', '080'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/mdx-blog-post',
    component: ComponentCreator('/meu-documento-website/blog/mdx-blog-post', 'f65'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/tags',
    component: ComponentCreator('/meu-documento-website/blog/tags', '9b0'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/tags/docusaurus',
    component: ComponentCreator('/meu-documento-website/blog/tags/docusaurus', '1e6'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/tags/facebook',
    component: ComponentCreator('/meu-documento-website/blog/tags/facebook', 'c42'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/tags/hello',
    component: ComponentCreator('/meu-documento-website/blog/tags/hello', '968'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/tags/hola',
    component: ComponentCreator('/meu-documento-website/blog/tags/hola', 'fd5'),
    exact: true
  },
  {
    path: '/meu-documento-website/blog/welcome',
    component: ComponentCreator('/meu-documento-website/blog/welcome', '271'),
    exact: true
  },
  {
    path: '/meu-documento-website/markdown-page',
    component: ComponentCreator('/meu-documento-website/markdown-page', '527'),
    exact: true
  },
  {
    path: '/meu-documento-website/docs',
    component: ComponentCreator('/meu-documento-website/docs', '86f'),
    routes: [
      {
        path: '/meu-documento-website/docs',
        component: ComponentCreator('/meu-documento-website/docs', 'c1b'),
        routes: [
          {
            path: '/meu-documento-website/docs',
            component: ComponentCreator('/meu-documento-website/docs', '5fa'),
            routes: [
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-cloud-front/conceito',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-cloud-front/conceito', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-cloud-front/tutorial',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-cloud-front/tutorial', '033'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-rds/conceito',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-rds/conceito', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-rds/tutorial',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/amazon-rds/tutorial', 'efe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/aws-lambda/conceito',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/aws-lambda/conceito', '6e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/aws-lambda/tutorial',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/aws-lambda/tutorial', '302'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/elastic-compute cloud/conceito',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/elastic-compute cloud/conceito', '526'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/elastic-compute cloud/tutorial',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/elastic-compute cloud/tutorial', 'ccb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/simple-storage-service/conceito',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/simple-storage-service/conceito', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/simple-storage-service/tutorial',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/simple-storage-service/tutorial', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/virtual-private-cloud/conceito',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/virtual-private-cloud/conceito', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/virtual-private-cloud/tutorial',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/⚙️ Serviços/virtual-private-cloud/tutorial', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/Amazon Web Services/guia',
                component: ComponentCreator('/meu-documento-website/docs/Amazon Web Services/guia', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/category/amazon-cloudfront',
                component: ComponentCreator('/meu-documento-website/docs/category/amazon-cloudfront', '2b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/category/aws-lambda',
                component: ComponentCreator('/meu-documento-website/docs/category/aws-lambda', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/category/elastic-compute-cloud-ec2',
                component: ComponentCreator('/meu-documento-website/docs/category/elastic-compute-cloud-ec2', '6c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/category/relational-database-servicerds',
                component: ComponentCreator('/meu-documento-website/docs/category/relational-database-servicerds', '101'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/category/simple-storage-service-s3',
                component: ComponentCreator('/meu-documento-website/docs/category/simple-storage-service-s3', '23f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/category/virtual-private-cloud-vpc',
                component: ComponentCreator('/meu-documento-website/docs/category/virtual-private-cloud-vpc', '6af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/meu-documento-website/docs/intro',
                component: ComponentCreator('/meu-documento-website/docs/intro', '2ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/meu-documento-website/',
    component: ComponentCreator('/meu-documento-website/', '35a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
