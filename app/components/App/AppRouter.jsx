
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

  pagesPath: '/pages',

  servicesPath:     '/services',

  techServicesPath: '/services/technology',
  termsPath: '/pages/terms-of-service',
}

export default AppRouter
