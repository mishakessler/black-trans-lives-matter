const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://blacktranslivesmatter.co',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://blacktranslivesmatter.co',
    title:
      "<a href='https://blacktranslivesmatter.co'>Actions & Resources for Solidarity</a>",
    githubUrl: 'https://github.com/mishakessler/black-trans-lives-matter',
    helpUrl: 'https://github.com/mishakessler/black-trans-lives-matter',
    tweetText: '',
    links: [{ text: 'Testing', link: '' }],
    search: {
      enabled: true,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/',
      '/perspectives',
      '/voices',
      '/events',
      '/resources',
    ],
    collapsedNav: [
      '/',
      '/perspectives',
      '/voices',
      '/events',
      '/resources',   
    ],
    links: [
      { text: 'Contribute', link: 'https://github.com/mishakessler/black-trans-lives-matter' },
      { text: 'Give Feedback', link: 'mailto:readytoactfeedback@gmail.com' }],
    frontline: true,
    ignoreIndex: true,
    title:
      "<div class='greenCircle'></div>honor black trans lives<div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: '#BlackTransLivesMatter',
    description: 'Actions & Resources for Solidarity',
    ogImage: null,
    docsLocation: 'https://github.com/mishakessler/black-trans-lives-matter/tree/master/content',
    favicon: {src: 'src/pwa-512.png'},
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: '#BlackTransLivesMatter',
      short_name: '#BlackTransLivesMatter',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#4bb2c6',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
