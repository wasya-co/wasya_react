
let AppRouter = {
  rootPath: '/',

  bizServicesPath:  '/services/business',

  blogPath: '/blog',
  blogLink: () => { return '/blog' },
  blogItemPath: '/blog/show/:reportname',
  blogItemLink: (item) => { 
    if (item.reportname) { return `/blog/show/${item.reportname}` }
    if (item.slug) { return `/blog/show/${item.slug}` }
  },

  /**
   * C
   */
  careersPath: '/careers',
  careersLink: () => { return '/careers' },

  careerPath: '/careers/:which',
  careerLink: (which) => { return `/careers/${which}` },

  caseStudiesPath: '/case-studies',
  caseStudiesLink: () => { return '/case-studies' },

  contactPath: '/contact',
  contactLink: () => { return '/contact' },

  /**
   * F
   */
  findInvoice: '/api/invoices/search',

  makePayment: '/api/payments',

  ourProcessLink: () => { return "/our-process" },
  ourProcessPath: '/our-process',
  ourStackLink: () => { return '/our-stack' },
  ourStackPath: '/our-stack',
  ourWorkLink: () => { return '/our-work' },
  ourWorkPath: '/our-work',

  /**
   * P
   */
  pagesPath: '/pages',
  promo1Path: '/pages/promo-1',

  servicesPath:     '/services',

  techServicesPath: '/services/technology',
  termsPath: '/pages/terms-of-service',

  wasyaCoPath: '/pages/wasyaco',
}

export default AppRouter
