

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


describe('PullrequestMergeabilityCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PullrequestMergeabilityCheck()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PullrequestMergeabilityCheck().list({"pullrequest_id":"x","repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pullrequest_mergeability_check.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"blocking":{"a":true,"h":"Blocking","n":"blocking","r":true,"sh":"Whether this check is currently preventing the pull request from being merged.","t":"`$BOOLEAN`","key$":"blocking","index$":0},"required":{"a":true,"h":"Required","n":"required","r":true,"sh":"Whether this check must pass for the pull request to be mergeable.","t":"`$BOOLEAN`","key$":"required","index$":1},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Whether this check passed.","t":"`$STRING`","key$":"status","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":3}},"name":"pullrequest_mergeability_check","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/mergeability/checks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"pullrequest_id","or":"pull_request_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/mergeability/checks","q":{"exist":["pullrequest_id","repo_slug","workspace"]},"r":{"param":{"pull_request_id":"pullrequest_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pullrequests"},{"var":"pullrequest_id"},{"lit":"mergeability"},{"lit":"checks"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.pullrequest"]]},"key$":"pullrequest_mergeability_check","name__orig":"pullrequest_mergeability_check","Name":"PullrequestMergeabilityCheck","name_":"pullrequest_mergeability_check","name-":"pullrequest-mergeability-check","NAME":"PULLREQUEST_MERGEABILITY_CHECK","index$":89}, {"active":true,"entity":"pullrequest_mergeability_check","key$":"BasicPullrequestMergeabilityCheckFlow","kind":"basic","name":"BasicPullrequestMergeabilityCheckFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"pullrequest_id":"pullrequest01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pullrequest_mergeability_check_ref01"}}]}]}, 'PullrequestMergeabilityCheck', {"GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/mergeability/checks":{"protocol":"http","parameters":[{"name":"pull_request_id","in":"path","description":"The id of the pull request.","required":true,"type":"integer","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2},{"name":"q","in":"query","description":"Only a limited subset of BBQL is supported here. Checks that are expensive to calculate can be excluded: `type!=\"git_mergeability_check\"` skips Git conflict evaluation, and `check.kind!=\"maximum_commits_behind\"` skips the bounded Git ancestry check behind that standard merge check. Combine both with `AND` (either order). Anything else returns `400 Bad Request`.","required":false,"type":"string","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pullrequest_mergeability_check_ref01_data = Object.values(setup.data.existing.pullrequest_mergeability_check)[0] as any

    // LIST
    const pullrequest_mergeability_check_ref01_ent = client.PullrequestMergeabilityCheck()
    const pullrequest_mergeability_check_ref01_match: any = {}
    pullrequest_mergeability_check_ref01_match['pullrequest_id'] = setup.idmap['pullrequest01']
    pullrequest_mergeability_check_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    pullrequest_mergeability_check_ref01_match['workspace'] = setup.idmap['workspace01']

    const pullrequest_mergeability_check_ref01_list = (await pullrequest_mergeability_check_ref01_ent.list(pullrequest_mergeability_check_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/pullrequest_mergeability_check/PullrequestMergeabilityCheckTestData.json')

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
    ['pullrequest_mergeability_check01','pullrequest_mergeability_check02','pullrequest_mergeability_check03','repository01','repository02','repository03','pullrequest01','pullrequest02','pullrequest03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PULLREQUEST_MERGEABILITY_CHECK_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PULLREQUEST_MERGEABILITY_CHECK_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PULLREQUEST_MERGEABILITY_CHECK_ENTID']
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
  
