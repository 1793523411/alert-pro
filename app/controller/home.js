'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      a: 1,
      b: 2,
    };
  }
}

module.exports = HomeController;
