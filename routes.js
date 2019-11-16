//const routes = require('next-routes')();
//module.exports=routes;
//
const routes = module.exports = require('next-routes')()

//添加路由规则
//routes.add([name], pattern = /name, page = name)
//name - Route name
//pattern - Route pattern (like express, see path-to-regexp)
//page - Page inside ./pages to be rendered


//
// API:
//
// routes.add(name, pattern = /name, page = name)
// routes.add(pattern, page)
// routes.add(object)
// Arguments:
//
// name - Route name
// pattern - Route pattern (like express, see path-to-regexp)
// page - Page inside ./pages to be rendered
//

//添加创建众筹页面的路由规则
routes.add(
  {name:'campaign new page',pattern:'/campaign/new',page:'/campaign/new'}
);
//添加查看众筹页面详细的路由规则
routes.add(
  {name:'showCampaignDetail',pattern:'/campaign/:address',page:'/campaign/show'}
);
routes.add(
    {name:'viewRequestList',pattern:'/campaign/:address/request',page:'/campaign/request/index'}
);
routes.add(
  {name:'createRequest',pattern:'/campaign/:address/request/createRequest',page:'/campaign/request/createRequest'}
);
//
// routes
// .add('about')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'});
