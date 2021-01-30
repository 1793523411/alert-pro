/* eslint-disable no-unused-vars */
'use strict';

const TableStore = require('tablestore');
const client = require('../utils/client');

module.exports = async function() {
  const params = {
    tableName: 'email',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };
  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      id: res.rows[0].primaryKey[0].value,
      img: res.rows[0].attributes[1].columnValue,
      date: res.rows[0].attributes[0].columnValue,
      text: res.rows[0].attributes[3].columnValue,
      title: res.rows[0].attributes[4].columnValue,
    };
    console.log(data);
    return data;
  }
  return {
    img: 'https://img.alicdn.com/tfs/TB1bbLH2eL2gK0jSZPhXXahvXXa-2460-1020.png',
    title: '第三届前端艺术家沙龙于10月24日成功举办',
    date: '2020-10-24',
    text: '由阿里巴巴ICBU深圳前端艺术家团队主办的前端艺术家沙龙与10月24日举办，本次分享会邀请了行内知名讲师，与大家畅聊“前端职业成长”心得。',
  };

};

