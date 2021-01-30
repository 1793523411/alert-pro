/* eslint-disable no-unused-vars */
'use strict';

const { getDataText, getDataMark, getDataLink, getDataAcard, getDataFcard } = require('../model/dingMesage');

async function request(ctx, res) {
  await ctx.curl(ctx.app.config.dingdingUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: res,
  });
}

module.exports = async function(ctx) {
  let res = {};
  switch (ctx.app.config.msgType) {
    case 'text':
      res = await getDataText();
      console.log(res);
      await request(ctx, res);
      break;
    case 'markdown':
      res = await getDataMark();
      console.log(res);
      await request(ctx, res);
      break;
    case 'link':
      res = await getDataLink();
      await request(ctx, res);
      break;
    case 'actionCard':
      res = await getDataAcard();
      await request(ctx, res);
      break;
    case 'feedCard':
      res = await getDataFcard();
      await request(ctx, res);
      break;
    default:
      break;
  }
};
