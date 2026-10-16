

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


describe('MergeQueueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.MergeQueue()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.MergeQueue().load({"id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'merge_queue.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The merge queue name.","t":"`$STRING`","key$":"name","index$":1},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"The configuration state returned by the merge queue service.","t":"`$STRING`","key$":"state","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":3},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":true,"sh":"The merge queue UUID.","t":"`$STRING`","key$":"uuid","index$":4}},"id":{"field":"id","name":"id"},"name":"merge_queue","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_queue_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"merge_queue_uuid":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"merge-queues"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_queue_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"pullrequest_id","or":"pullrequest_id","r":true,"t":"`$INTEGER`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}","q":{"exist":["id","pullrequest_id","repo_slug","workspace"]},"r":{"param":{"merge_queue_uuid":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"merge-queues"},{"var":"id"},{"lit":"queue"},{"var":"pullrequest_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.repository"]]},"key$":"merge_queue","name__orig":"merge_queue","Name":"MergeQueue","name_":"merge_queue","name-":"merge-queue","NAME":"MERGE_QUEUE","index$":20}, {"active":true,"entity":"merge_queue","key$":"BasicMergeQueueFlow","kind":"basic","name":"BasicMergeQueueFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"merge_queue_ref01","srcdatavar":"merge_queue_ref01_data","suffix":"_dt0"},"m":{"id":"merge_queue01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-merge_queue_ref01"}}]}]}, 'MergeQueue', {"GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"The workspace containing the repository.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository slug.","required":true,"in":"path","type":"string","index$":1},{"name":"merge_queue_uuid","description":"The UUID of the merge queue.","required":true,"in":"path","type":"string","format":"uuid","index$":2}]},"DELETE /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}":{"protocol":"http","parameters":[{"name":"workspace","description":"The workspace containing the repository.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository slug.","required":true,"in":"path","type":"string","index$":1},{"name":"merge_queue_uuid","description":"The UUID of the merge queue.","required":true,"in":"path","type":"string","format":"uuid","index$":2},{"name":"pullrequest_id","description":"The ID of the pullrequest to remove.","required":true,"in":"path","type":"integer","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let merge_queue_ref01_data = Object.values(setup.data.existing.merge_queue)[0] as any

    // LOAD
    const merge_queue_ref01_ent = client.MergeQueue()
    const merge_queue_ref01_match_dt0: any = {}
    merge_queue_ref01_match_dt0.id = merge_queue_ref01_data.id
    merge_queue_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    merge_queue_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const merge_queue_ref01_data_dt0 = (await merge_queue_ref01_ent.load(merge_queue_ref01_match_dt0)).data()
    assert(merge_queue_ref01_data_dt0.id === merge_queue_ref01_data.id)


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
      '../../../../.sdk/test/entity/merge_queue/MergeQueueTestData.json')

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
    ['merge_queue01','merge_queue02','merge_queue03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_MERGE_QUEUE_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_MERGE_QUEUE_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_MERGE_QUEUE_ENTID']
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
  
