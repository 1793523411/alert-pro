/* eslint-disable no-unused-vars */
'use strict';

const TableStore = require('tablestore');
const client = require('../utils/client');


exports.getDataText = async function() {
  const params = {
    tableName: 'dingText',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      msgtype: 'text',
      text: {
        content: res.rows[0].attributes[1].columnValue,
      },
      at: {
        atMobiles: res.rows[0].attributes[0].columnValue.split(' '),
        isAtAll: res.rows[0].attributes[2].columnValue,
      },
    };
    return data;
  }
  return {
    msgtype: 'text',
    text: {
      content: '测试-我就是我, @150XXXXXXXX 是不一样的烟火',
    },
    at: {
      atMobiles: [
        '150XXXXXXXX',
      ],
      isAtAll: false,
    },
  };

};

exports.getDataMark = async function() {
  const params = {
    tableName: 'dingMark',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      msgtype: 'markdown',
      markdown: {
        title: res.rows[0].attributes[3].columnValue,
        text: res.rows[0].attributes[2].columnValue,
      },
      at: {
        atMobiles: res.rows[0].attributes[0].columnValue.split(' '),
        isAtAll: res.rows[0].attributes[3].columnValue,
      },
    };
    console.log(data);
    return data;
  }
  return {
    msgtype: 'markdown',
    markdown: {
      title: '测试-杭州天气',
      text: '#### 杭州天气 @150XXXXXXXX \n> 9度，西北风1级，空气良89，相对温度73%\n> ![screenshot](https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png)\n> ###### 10点20分发布 [天气](https://www.dingtalk.com) \n',
    },
    at: {
      atMobiles: [
        '150XXXXXXXX',
      ],
      isAtAll: false,
    },
  }
  ;

};

exports.getDataLink = async function() {
  const params = {
    tableName: 'dingLink',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      msgtype: 'link',
      link: {
        text: res.rows[0].attributes[2].columnValue,
        title: res.rows[0].attributes[3].columnValue,
        picUrl: res.rows[0].attributes[1].columnValue,
        messageUrl: res.rows[0].attributes[0].columnValue,
      },
    };
    return data;
  }
  return {
    msgtype: 'link',
    link: {
      text: '测试-这个即将发布的新版本，创始人xx称它为红树林。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是红树林',
      title: '时代的火车向前开',
      picUrl: 'https://img.alicdn.com/tfs/TB1bbLH2eL2gK0jSZPhXXahvXXa-2460-1020.png',
      messageUrl: 'https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI',
    },
  };

};

exports.getDataAcard = async function() {
  const params = {
    tableName: 'Acard',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 2,
  };

  const res = await client.getRange(params);
  if (res.rows.length > 0) {
    const data = {
      actionCard: {
        title: res.rows[0].attributes[3].columnValue,
        text: res.rows[0].attributes[2].columnValue,
        singleTitle: res.rows[0].attributes[0].columnValue,
        singleURL: res.rows[0].attributes[1].columnValue,
      },
      msgtype: 'actionCard',
    };
    return data;
  }
  return {
    actionCard: {
      title: '测试-乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身',
      text: '![screenshot](https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png) 乔布斯 20 年前想打造的苹果咖啡厅 Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划',
      singleTitle: '阅读全文',
      singleURL: 'https://www.dingtalk.com/',
    },
    msgtype: 'actionCard',
  };

};


exports.getDataFcard = async function() {
  const params = {
    tableName: 'dingFcard',
    direction: TableStore.Direction.FORWARD,
    inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
    exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
    limit: 100,
  };

  const res = await client.getRange(params);

  const data = [];

  res.rows.forEach(item => {
    const tmp = {
      messageURL: item.attributes[0].columnValue,
      picURL: item.attributes[1].columnValue,
      text: item.attributes[2].columnValue,
      title: item.attributes[3].columnValue,
    };
    data.push(tmp);
  });
  return {
    msgtype: 'feedCard',
    feedCard: {
      links: data,
    },
  };
};
