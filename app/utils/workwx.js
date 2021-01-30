/* eslint-disable no-unused-vars */
'use strict';
const { getdataT, getdataM, getdataI } = require('../model/workWxMesage');

module.exports = async function(ctx) {
  let res = {};
  switch (ctx.app.config.wxMegType) {
    case 'wxtext':
      res = await getdataT();
      await ctx.curl(ctx.app.config.workWxUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          msgtype: 'text',
          text: res,
        },
      });
      break;
    case 'wxmarkdown':
      res = await getdataM();
      await ctx.curl(ctx.app.config.workWxUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          msgtype: 'markdown',
          markdown: res,
        },
      });
      break;
    case 'wximgtext':
      res = await getdataI();
      await ctx.curl(ctx.app.config.workWxUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          msgtype: 'news',
          news: {
            articles: [
              res,
            ],
          },
        },
      });
      break;
    default:
      break;
  }
};
