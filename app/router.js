'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/email', controller.email.index);
  router.post('/email/add', controller.email.add);
  router.get('/email/getone', controller.email.getone);
  router.post('/email/update', controller.email.update);
  router.get('/workwx', controller.workwx.index);
  router.post('/workwx/add', controller.workwx.add);
  router.get('/workwx/getone', controller.workwx.getone);
  router.post('/workwx/update', controller.workwx.update);
  router.post('/workwx/addm', controller.workwx.addM);
  router.get('/workwx/getonem', controller.workwx.getoneM);
  router.post('/workwx/updatem', controller.workwx.updateM);
  router.post('/workwx/addi', controller.workwx.addI);
  router.get('/workwx/getonei', controller.workwx.getoneI);
  router.post('/workwx/updatei', controller.workwx.updateI);
  router.get('/ding', controller.ding.index);
  router.post('/ding/addtext', controller.ding.addText);
  router.get('/ding/getonetext', controller.ding.getoneText);
  router.post('/ding/updatetext', controller.ding.updateText);
  router.post('/ding/addmark', controller.ding.addMark);
  router.get('/ding/getonemark', controller.ding.getoneMark);
  router.post('/ding/updatemark', controller.ding.updateMark);
  router.post('/ding/addlink', controller.ding.addLink);
  router.get('/ding/getonelink', controller.ding.getoneLink);
  router.post('/ding/updatelink', controller.ding.updateLink);
  router.post('/ding/addacard', controller.ding.addAcard);
  router.get('/ding/getoneacard', controller.ding.getoneAcard);
  router.post('/ding/updateacard', controller.ding.updateAcard);
  router.post('/ding/addfcard', controller.ding.addFcard);
  router.get('/ding/getfcard', controller.ding.getFcard);
  router.post('/ding/delfcard', controller.ding.delFcard);
};
