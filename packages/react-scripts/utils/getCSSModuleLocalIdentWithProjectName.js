'use strict';

const crypto = require('crypto');

const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const createHash = buffer =>
  new Buffer(crypto.createHash('md5').update(buffer).digest('hex'))
    .toString('base64')
    .substr(0, 5);

module.exports = projectName => (...args) => {
  const localIdent = getCSSModuleLocalIdent(...args);

  return (
    localIdent.substring(0, localIdent.length - 5) +
    createHash(localIdent + projectName)
  );
};
