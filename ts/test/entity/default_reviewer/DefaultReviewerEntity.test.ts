

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


describe('DefaultReviewerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.DefaultReviewer()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DefaultReviewer().load({"id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'default_reviewer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":0},"display_name":{"a":true,"h":"Display Name","n":"display_name","r":false,"t":"`$STRING`","key$":"display_name","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"Links related to an Account.","t":"`$OBJECT`","key$":"links","index$":3},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":4},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"t":"`$STRING`","key$":"uuid","index$":5}},"id":{"field":"id","name":"id"},"name":"default_reviewer","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"target_username","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"target_username":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"default-reviewers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"target_username","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"target_username":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"default-reviewers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"default_reviewer","name__orig":"default_reviewer","Name":"DefaultReviewer","name_":"default_reviewer","name-":"default-reviewer","NAME":"DEFAULT_REVIEWER","index$":10}, {"active":true,"entity":"default_reviewer","key$":"BasicDefaultReviewerFlow","kind":"basic","name":"BasicDefaultReviewerFlow","param":{},"step":[{"a":true,"d":{"repo_slug":"repo_slug01","workspace":"workspace01"},"i":{"ref":"default_reviewer_ref01","srcdatavar":"default_reviewer_ref01_data","suffix":"_up0","textfield":"created_on"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-default_reviewer_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"default_reviewer_ref01","srcdatavar":"default_reviewer_ref01_data","suffix":"_dt0"},"m":{"id":"default_reviewer01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-default_reviewer_ref01"}}]}]}, 'DefaultReviewer', {"GET /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"target_username","in":"path","description":"This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"target_username","in":"path","description":"This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let default_reviewer_ref01_data = Object.values(setup.data.existing.default_reviewer)[0] as any

    // UPDATE
    const default_reviewer_ref01_ent = client.DefaultReviewer()
    const default_reviewer_ref01_data_up0: any = {}
    default_reviewer_ref01_data_up0.id = default_reviewer_ref01_data.id
    default_reviewer_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    default_reviewer_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']

    const default_reviewer_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-default_reviewer_ref01_' + setup.now }
    ;(default_reviewer_ref01_data_up0 as any)[default_reviewer_ref01_markdef_up0.name] = default_reviewer_ref01_markdef_up0.value

    const default_reviewer_ref01_resdata_up0 = (await default_reviewer_ref01_ent.update(default_reviewer_ref01_data_up0)).data()
    assert(default_reviewer_ref01_resdata_up0.id === default_reviewer_ref01_data_up0.id)

    assert((default_reviewer_ref01_resdata_up0 as any)[default_reviewer_ref01_markdef_up0.name] === default_reviewer_ref01_markdef_up0.value)


    // LOAD
    const default_reviewer_ref01_match_dt0: any = {}
    default_reviewer_ref01_match_dt0.id = default_reviewer_ref01_data.id
    default_reviewer_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    default_reviewer_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const default_reviewer_ref01_data_dt0 = (await default_reviewer_ref01_ent.load(default_reviewer_ref01_match_dt0)).data()
    assert(default_reviewer_ref01_data_dt0.id === default_reviewer_ref01_data.id)


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
      '../../../../.sdk/test/entity/default_reviewer/DefaultReviewerTestData.json')

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
    ['default_reviewer01','default_reviewer02','default_reviewer03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_DEFAULT_REVIEWER_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_DEFAULT_REVIEWER_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_DEFAULT_REVIEWER_ENTID']
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
  
