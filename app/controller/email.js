/* eslint-disable no-unused-vars */
'use strict';

const Controller = require('egg').Controller;
const TableStore = require('tablestore');

const client = require('../utils/client');

class EmailController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'email';
  }
  async add() {
    const { ctx } = this;

    const { img, title, date, text } = ctx.request.body;
    const params = {
      tableName: 'email',
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      primaryKey: [
        { id: `${Date.now() - Math.random()}` },
      ],
      attributeColumns: [
        { img },
        { title },
        { date: date.substr(0, 10) },
        { text },
        { status: '1' },
      ],
    };

    const res = await client.putRow(params);
    ctx.body = res;
  }

  async getone() {

    const { ctx } = this;

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
      ctx.body = data;
    } else {
      ctx.body = '';
    }

  }

  async update() {
    const { ctx } = this;

    const { id, img, title, date, text } = ctx.request.body;

    const params = {
      tableName: 'email',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ id }],
      updateOfAttributeColumns: [
        {
          PUT: [
            { img },
            { title },
            { date: date.substr(0, 10) },
            { text },
          ],
        },
      ],
    };


    const res = await client.updateRow(params);
    ctx.body = res;
  }
}

module.exports = EmailController;
