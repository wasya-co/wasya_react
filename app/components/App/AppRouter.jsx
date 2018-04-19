
let AppRouter = {
  rootPath: '/',

  bizServicesPath:  '/services/business',
  blogLink: () => { return '/blog' },
  blogItemPath: '/blog/show/:reportname',
  blogItemLink: (item) => { return `/blog/show/${item.reportname}` },

  careersPath: '/careers',

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
