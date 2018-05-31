
let AppRouter = {
  rootPath: '/',

  bizServicesPath:  '/services/business',

  blogPath: '/blog',
  blogLink: () => { return '/blog' },
  blogItemPath: '/blog/show/:reportname',
  blogItemLink: (item) => { return `/blog/show/${item.reportname}` },

  /**
   * C
   */
  careersPath: '/careers',

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
}

export default AppRouter
