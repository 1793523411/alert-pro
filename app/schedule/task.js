/* eslint-disable no-unused-vars */
'use strict';
const Subscription = require('egg').Subscription;
const TableStore = require('tablestore');
const client = require('../utils/client');
const sendEmail = require('../utils/email');
const sendWorkwx = require('../utils/workwx');
const sendDing = require('../utils/ding');

class Task extends Subscription {

  static get schedule() {
    return {
      interval: '5s',
      // cron: '*/5 * * * * ?',
      type: 'worker',
    };
  }

  async subscribe() {
    const { ctx } = this;

    ctx.app.config.qEmail && sendEmail(ctx);
    ctx.app.config.workWx && sendWorkwx(ctx);
    ctx.app.config.dingMessage && sendDing(ctx);

  }
}

module.exports = Task;
