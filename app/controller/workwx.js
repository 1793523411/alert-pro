/* eslint-disable no-unused-vars */
'use strict';

const Controller = require('egg').Controller;
const TableStore = require('tablestore');

const client = require('../utils/client');

class WorkwxController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Workwx';
  }

  async add() {
    const { ctx } = this;

    const { mentioned_list, mentioned_mobile_list, content } = ctx.request.body;
    const params = {
      tableName: 'workwxtext',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { mentioned_list },
        { mentioned_mobile_list },
        { content },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getone() {

    const { ctx } = this;

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
        mentioned_list: res.rows[0].attributes[1].columnValue,
        mentioned_mobile_list: res.rows[0].attributes[2].columnValue,
      };
      ctx.body = data;
    } else {
      ctx.body = '';
    }
  }

  async update() {
    const { ctx } = this;

    const { id, mentioned_list, mentioned_mobile_list, content } = ctx.request.body;

    const params = {
      tableName: 'workwxtext',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { mentioned_list },
            { mentioned_mobile_list },
            { content },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
  async addM() {
    const { ctx } = this;

    const { content } = ctx.request.body;
    const params = {
      tableName: 'workwxmark',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { content },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getoneM() {

    const { ctx } = this;

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
      ctx.body = data;
    } else {
      ctx.body = '';
    }
    // ctx.body = res;
  }

  async updateM() {
    const { ctx } = this;

    const { id, content } = ctx.request.body;

    const params = {
      tableName: 'workwxmark',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { content },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
  async addI() {
    const { ctx } = this;

    const { title, url, picurl, description } = ctx.request.body;
    const params = {
      tableName: 'workwximgtext',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { title },
        { url },
        { picurl },
        { description },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getoneI() {

    const { ctx } = this;

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
      ctx.body = data;
    } else {
      ctx.body = '';
    }
    // ctx.body = res;
  }

  async updateI() {
    const { ctx } = this;

    const { id, title, url, picurl, description } = ctx.request.body;

    const params = {
      tableName: 'workwximgtext',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { title },
            { url },
            { picurl },
            { description },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
}

module.exports = WorkwxController;
