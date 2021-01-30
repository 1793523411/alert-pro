/* eslint-disable no-unused-vars */
'use strict';

const Controller = require('egg').Controller;
const TableStore = require('tablestore');

const client = require('../utils/client');

class DingController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Ding';
  }

  async addText() {
    const { ctx } = this;

    const { atMobiles, content, isAtAll } = ctx.request.body;
    const params = {
      tableName: 'dingText',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { atMobiles },
        { content },
        { isAtAll },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getoneText() {

    const { ctx } = this;

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
        id: res.rows[0].primaryKey[0].value,
        atMobiles: res.rows[0].attributes[0].columnValue,
        content: res.rows[0].attributes[1].columnValue,
        isAtAll: res.rows[0].attributes[2].columnValue,
      };
      ctx.body = data;
    } else {
      ctx.body = '';
    }
  }

  async updateText() {
    const { ctx } = this;

    const { id, atMobiles, content, isAtAll } = ctx.request.body;

    const params = {
      tableName: 'dingText',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { atMobiles },
            { content },
            { isAtAll },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
  async addMark() {
    const { ctx } = this;

    const { atMobiles, title, text, isAtAll } = ctx.request.body;
    const params = {
      tableName: 'dingMark',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { atMobiles },
        { title },
        { text },
        { isAtAll },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getoneMark() {

    const { ctx } = this;

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
        id: res.rows[0].primaryKey[0].value,
        atMobiles: res.rows[0].attributes[0].columnValue,
        isAtAll: res.rows[0].attributes[1].columnValue,
        text: res.rows[0].attributes[2].columnValue,
        title: res.rows[0].attributes[3].columnValue,
      };
      ctx.body = data;
    } else {
      ctx.body = '';
    }
  }

  async updateMark() {
    const { ctx } = this;

    const { id, atMobiles, title, text, isAtAll } = ctx.request.body;

    const params = {
      tableName: 'dingMark',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { atMobiles },
            { title },
            { text },
            { isAtAll },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
  async addLink() {
    const { ctx } = this;

    const { picUrl, messageUrl, title, text } = ctx.request.body;
    const params = {
      tableName: 'dingLink',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { picUrl },
        { messageUrl },
        { title },
        { text },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getoneLink() {

    const { ctx } = this;

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
        id: res.rows[0].primaryKey[0].value,
        messageUrl: res.rows[0].attributes[0].columnValue,
        picUrl: res.rows[0].attributes[1].columnValue,
        text: res.rows[0].attributes[2].columnValue,
        title: res.rows[0].attributes[3].columnValue,
      };
      ctx.body = data;
    } else {
      ctx.body = '';
    }
  }

  async updateLink() {
    const { ctx } = this;

    const { id, picUrl, messageUrl, title, text } = ctx.request.body;

    const params = {
      tableName: 'dingLink',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { picUrl },
            { messageUrl },
            { title },
            { text },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
  async addAcard() {
    const { ctx } = this;

    const { title, singleTitle, singleURL, text } = ctx.request.body;
    const params = {
      tableName: 'Acard',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { singleTitle },
        { singleURL },
        { title },
        { text },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getoneAcard() {

    const { ctx } = this;

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
        id: res.rows[0].primaryKey[0].value,
        singleTitle: res.rows[0].attributes[0].columnValue,
        singleURL: res.rows[0].attributes[1].columnValue,
        text: res.rows[0].attributes[2].columnValue,
        title: res.rows[0].attributes[3].columnValue,
      };
      ctx.body = data;
    } else {
      ctx.body = '';
    }
  }

  async updateAcard() {
    const { ctx } = this;

    const { id, title, singleTitle, singleURL, text } = ctx.request.body;

    const params = {
      tableName: 'Acard',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { singleTitle },
            { singleURL },
            { title },
            { text },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }

  async addFcard() {
    const { ctx } = this;

    // console.log(ctx.request.body);
    const { picURl, messageURL, title, text } = ctx.request.body;
    const params = {
      tableName: 'dingFcard',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { picURl },
        { messageURL },
        { title },
        { text },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getFcard() {
    const { ctx } = this;

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
        id: item.primaryKey[0].value,
        messageURL: item.attributes[0].columnValue,
        picURl: item.attributes[1].columnValue,
        text: item.attributes[2].columnValue,
        title: item.attributes[3].columnValue,
      };
      data.push(tmp);
    });
    ctx.body = data;
  }

  async delFcard() {
    const { ctx } = this;

    const { id } = ctx.request.body;

    const params = {
      tableName: 'dingFcard',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [{ id }],
    };

    const res = await client.deleteRow(params);
    ctx.body = res;
  }
}

module.exports = DingController;
