import path from 'path'

const LOCALE_PATH = './public/static/locales'

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default async function getNextI18nextConfig() {
  const koLocal = await import(`${LOCALE_PATH}/ko/local.json`)
  const jaLocal = await import(`${LOCALE_PATH}/ja/local.json`)
  const twLocal = await import(`${LOCALE_PATH}/zh-TW/local.json`)
  const koCommon = await import(`${LOCALE_PATH}/ko/common-web.json`)
  const jaCommon = await import(`${LOCALE_PATH}/ja/common-web.json`)
  const twCommon = await import(`${LOCALE_PATH}/zh-TW/common-web.json`)

  const resources = {
    ja: {
      'common-web': jaCommon,
      local: jaLocal,
    },
    ko: {
      'common-web': koCommon,
      local: koLocal,
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'zh-TW': {
      'common-web': twCommon,
      local: twLocal,
    },
  }

  return {
    i18n: {
      defaultLocale: 'ko',
      locales: ['ko', 'ja', 'zh-TW'],
    },
    localePath: path.resolve(LOCALE_PATH),
    // eslint-disable-next-line @typescript-eslint/naming-convention, sort-keys
    defaultNS: 'local',
    serializeConfig: false,
    // eslint-disable-next-line sort-keys
    resources,
  }
}
