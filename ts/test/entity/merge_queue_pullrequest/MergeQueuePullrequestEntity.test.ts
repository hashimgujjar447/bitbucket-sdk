

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


describe('MergeQueuePullrequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.MergeQueuePullrequest()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.MergeQueuePullrequest().load({"merge_queue_id":1,"pullrequest_id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'merge_queue_pullrequest.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"last_activity_on":{"a":true,"fo":"date-time","h":"Last Activity On","n":"last_activity_on","r":false,"t":"`$STRING`","key$":"last_activity_on","index$":0},"merge_queue":{"a":true,"h":"Merge Queue","n":"merge_queue","r":false,"sh":"A reference to the merge queue holding a pullrequest.","t":"`$OBJECT`","key$":"merge_queue","index$":1},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"t":"`$ANY`","key$":"pipeline","index$":2},"pullrequest":{"a":true,"h":"Pullrequest","n":"pullrequest","r":false,"t":"`$ANY`","key$":"pullrequest","index$":3},"queued_on":{"a":true,"fo":"date-time","h":"Queued On","n":"queued_on","r":false,"t":"`$STRING`","key$":"queued_on","index$":4},"rank":{"a":true,"h":"Rank","n":"rank","r":false,"sh":"The one-based position of the pullrequest in the merge queue.","t":"`$INTEGER`","key$":"rank","index$":5},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":7}},"name":"merge_queue_pullrequest","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_queue_id","or":"merge_queue_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"pullrequest_id","or":"pullrequest_id","r":true,"t":"`$INTEGER`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}","q":{"exist":["merge_queue_id","pullrequest_id","repo_slug","workspace"]},"r":{"param":{"merge_queue_uuid":"merge_queue_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"merge-queues"},{"var":"merge_queue_id"},{"lit":"queue"},{"var":"pullrequest_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.merge_queue"]]},"key$":"merge_queue_pullrequest","name__orig":"merge_queue_pullrequest","Name":"MergeQueuePullrequest","name_":"merge_queue_pullrequest","name-":"merge-queue-pullrequest","NAME":"MERGE_QUEUE_PULLREQUEST","index$":21}, {"active":true,"entity":"merge_queue_pullrequest","key$":"BasicMergeQueuePullrequestFlow","kind":"basic","name":"BasicMergeQueuePullrequestFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"merge_queue_pullrequest_ref01","srcdatavar":"merge_queue_pullrequest_ref01_data","suffix":"_dt0"},"m":{"id":"merge_queue_pullrequest01","merge_queue_id":"merge_queue01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-merge_queue_pullrequest_ref01"}}],"unreachable":true}]}, 'MergeQueuePullrequest', {"GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}":{"protocol":"http","parameters":[{"name":"workspace","description":"The workspace containing the repository.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository slug.","required":true,"in":"path","type":"string","index$":1},{"name":"merge_queue_uuid","description":"The UUID of the merge queue.","required":true,"in":"path","type":"string","format":"uuid","index$":2},{"name":"pullrequest_id","description":"The ID of the pullrequest.","required":true,"in":"path","type":"integer","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let merge_queue_pullrequest_ref01_data = Object.values(setup.data.existing.merge_queue_pullrequest)[0] as any

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
      '../../../../.sdk/test/entity/merge_queue_pullrequest/MergeQueuePullrequestTestData.json')

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
    ['merge_queue_pullrequest01','merge_queue_pullrequest02','merge_queue_pullrequest03','repository01','repository02','repository03','merge_queue01','merge_queue02','merge_queue03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_MERGE_QUEUE_PULLREQUEST_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_MERGE_QUEUE_PULLREQUEST_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_MERGE_QUEUE_PULLREQUEST_ENTID']
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
  
