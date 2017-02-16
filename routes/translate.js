const express = require('express');
const steem = require('steem');
const translate = require('../helpers/translate');
const router = express.Router();

router.get('/', function(req, res, next) {
  const parentPermlink = req.query.parentPermlink;
  const author = req.query.author;
  const permlink = req.query.permlink;
  const locale = req.query.locale;
  steem.api.getState(`/${parentPermlink}/@${author}/${permlink}`, (err, result) => {
    let messages = translate.getMessages(result.content);
    messages = locale ? messages[locale] || {} : messages;
    res.json(messages);
  });
});

module.exports = router;
