

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BitbucketSdkSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DownloadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.Download()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Download().load({"id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'download.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"download","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /repositories/{workspace}/{repo_slug}/downloads","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/downloads","q":{"exist":["repo_slug","workspace"]},"r":{},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"downloads"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/downloads/{filename}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"filename","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/downloads/{filename}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"filename":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"downloads"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/downloads","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/downloads","q":{"exist":["repo_slug","workspace"]},"r":{},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"downloads"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /repositories/{workspace}/{repo_slug}/downloads/{filename}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"filename","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/repositories/{workspace}/{repo_slug}/downloads/{filename}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"filename":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"downloads"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"download","name__orig":"download","Name":"Download","name_":"download","name-":"download","NAME":"DOWNLOAD","index$":15}, {"active":true,"entity":"download","key$":"BasicDownloadFlow","kind":"basic","name":"BasicDownloadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"download_ref01"},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"download_ref01","srcdatavar":"download_ref01_data","suffix":"_dt0"},"m":{"id":"download01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-download_ref01"}}]},{"a":true,"d":{},"i":{"ref":"download_ref01","suffix":"_rm0"},"m":{"id":"download01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"remove","s":[],"v":[]}]}, 'Download', {"POST /repositories/{workspace}/{repo_slug}/downloads":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1}]},"GET /repositories/{workspace}/{repo_slug}/downloads/{filename}":{"protocol":"http","parameters":[{"name":"filename","in":"path","description":"Name of the file.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"GET /repositories/{workspace}/{repo_slug}/downloads":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1}]},"DELETE /repositories/{workspace}/{repo_slug}/downloads/{filename}":{"protocol":"http","parameters":[{"name":"filename","in":"path","description":"Name of the file.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const download_ref01_ent = client.Download()
    let download_ref01_data = setup.data.new.download['download_ref01']
    download_ref01_data['repo_slug'] = setup.idmap['repo_slug01']
    download_ref01_data['workspace'] = setup.idmap['workspace01']

    download_ref01_data = (await download_ref01_ent.create(download_ref01_data)).data()
    assert(null != download_ref01_data.id)


    // LOAD
    const download_ref01_match_dt0: any = {}
    download_ref01_match_dt0.id = download_ref01_data.id
    download_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const download_ref01_data_dt0 = (await download_ref01_ent.load(download_ref01_match_dt0)).data()
    assert(download_ref01_data_dt0.id === download_ref01_data.id)


    // REMOVE
    const download_ref01_match_rm0: any = { id: download_ref01_data.id }
    download_ref01_match_rm0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    download_ref01_match_rm0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    await download_ref01_ent.remove(download_ref01_match_rm0)
  

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/download/DownloadTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BitbucketSdkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['download01','download02','download03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_DOWNLOAD_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_DOWNLOAD_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_DOWNLOAD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BitbucketSdkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.BITBUCKET_SDK_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BITBUCKET_SDK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
