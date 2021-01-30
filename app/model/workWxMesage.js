/* eslint-disable no-unused-vars */
'use strict';

const TableStore = require('tablestore');
const client = require('../utils/client');


exports.getdataT = async function() {
  const params = {
    tableName: 'workwxtext',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      id: res.rows[0].primaryKey[0].value,
      content: res.rows[0].attributes[0].columnValue,
      mentioned_list: res.rows[0].attributes[1].columnValue.split(' '),
      mentioned_mobile_list: res.rows[0].attributes[2].columnValue.split(' '),
    };
    return data;
  }
  return {
    content: '广州今日天气：29度，大部分多云，降雨概率：60%',
    mentioned_list: [ 'wangqing', '@all' ],
    mentioned_mobile_list: [ '13800001111', '@all' ],
  };

};

exports.getdataM = async function() {

  const params = {
    tableName: 'workwxmark',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      id: res.rows[0].primaryKey[0].value,
      content: res.rows[0].attributes[0].columnValue,
    };
    return data;
  }
  return {
    content: '实时新增用户反馈<font color="warning">132例</font>，请相关同事注意。\n>类型:<font color="comment">用户反馈</font>>普通用户反馈:<font color="comment">117例</font>>VIP用户反馈:<font color="comment">15例</font>',

  };

};


exports.getdataI = async function() {
  const params = {
    tableName: 'workwximgtext',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      id: res.rows[0].primaryKey[0].value,
      description: res.rows[0].attributes[0].columnValue,
      picurl: res.rows[0].attributes[1].columnValue,
      title: res.rows[0].attributes[2].columnValue,
      url: res.rows[0].attributes[3].columnValue,
    };
    return data;
  }
  return {
    title: '中秋节礼品领取',
    description: '今年中秋节公司有豪礼相送',
    url: 'www.qq.com',
    picurl: 'http://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png',
  };

};
