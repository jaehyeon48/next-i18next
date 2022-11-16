const LOCALE_PATH = 'public/static/locales'

const koLocal = require(resolve(LOCALE_PATH, 'ko', 'local.json'))
const koCommon = require(resolve(LOCALE_PATH, 'ko', 'common-web.json'))
const jaLocal = require(resolve(LOCALE_PATH, 'ja', 'local.json'))
const jaCommon = require(resolve(LOCALE_PATH, 'ja', 'common-web.json'))
const twLocal = require(resolve(LOCALE_PATH, 'zh-TW', 'local.json'))
const twCommon = require(resolve(LOCALE_PATH, 'zh-TW', 'common-web.json'))

const resources = {
  ja: {
    'common-web': jaCommon,
    local: jaLocal,
  },
  ko: {
    'common-web': koCommon,
    local: koLocal,
  },
  'zh-TW': {
    'common-web': twCommon,
    local: twLocal,
  },
}

module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'ja', 'zh-TW'],
  },
  localePath: resolve(LOCALE_PATH),
  // eslint-disable-next-line sort-keys
  defaultNS: 'local',
  serializeConfig: false,
  // eslint-disable-next-line sort-keys
  resources,
}
