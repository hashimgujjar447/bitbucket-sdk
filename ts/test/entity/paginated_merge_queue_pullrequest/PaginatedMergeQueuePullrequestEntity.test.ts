

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


describe('PaginatedMergeQueuePullrequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedMergeQueuePullrequest()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedMergeQueuePullrequest().list({"merge_queue_id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_merge_queue_pullrequest.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"last_activity_on":{"a":true,"fo":"date-time","h":"Last Activity On","n":"last_activity_on","r":false,"t":"`$STRING`","key$":"last_activity_on","index$":0},"merge_queue":{"a":true,"h":"Merge Queue","n":"merge_queue","r":false,"sh":"A reference to the merge queue holding a pullrequest.","t":"`$OBJECT`","key$":"merge_queue","index$":1},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"t":"`$ANY`","key$":"pipeline","index$":2},"pullrequest":{"a":true,"h":"Pullrequest","n":"pullrequest","r":false,"t":"`$ANY`","key$":"pullrequest","index$":3},"queued_on":{"a":true,"fo":"date-time","h":"Queued On","n":"queued_on","r":false,"t":"`$STRING`","key$":"queued_on","index$":4},"rank":{"a":true,"h":"Rank","n":"rank","r":false,"sh":"The one-based position of the pullrequest in the merge queue.","t":"`$INTEGER`","key$":"rank","index$":5},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":7}},"name":"paginated_merge_queue_pullrequest","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_queue_id","or":"merge_queue_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":10,"k":"query","n":"pagelen","or":"pagelen","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue","q":{"exist":["merge_queue_id","repo_slug","workspace"]},"r":{"param":{"merge_queue_uuid":"merge_queue_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"merge-queues"},{"var":"merge_queue_id"},{"lit":"queue"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.merge_queue"]]},"key$":"paginated_merge_queue_pullrequest","name__orig":"paginated_merge_queue_pullrequest","Name":"PaginatedMergeQueuePullrequest","name_":"paginated_merge_queue_pullrequest","name-":"paginated-merge-queue-pullrequest","NAME":"PAGINATED_MERGE_QUEUE_PULLREQUEST","index$":39}, {"active":true,"entity":"paginated_merge_queue_pullrequest","key$":"BasicPaginatedMergeQueuePullrequestFlow","kind":"basic","name":"BasicPaginatedMergeQueuePullrequestFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"merge_queue_id":"merge_queue01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_merge_queue_pullrequest_ref01"}}]}]}, 'PaginatedMergeQueuePullrequest', {"GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue":{"protocol":"http","parameters":[{"name":"workspace","description":"The workspace containing the repository.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository slug.","required":true,"in":"path","type":"string","index$":1},{"name":"merge_queue_uuid","description":"The UUID of the merge queue.","required":true,"in":"path","type":"string","format":"uuid","index$":2},{"name":"page","description":"The page number of elements to retrieve.","required":false,"in":"query","type":"integer","format":"int32","minimum":1,"default":1,"index$":3},{"name":"pagelen","description":"The maximum number of results to return.","required":false,"in":"query","type":"integer","format":"int32","minimum":1,"maximum":100,"default":10,"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_merge_queue_pullrequest_ref01_data = Object.values(setup.data.existing.paginated_merge_queue_pullrequest)[0] as any

    // LIST
    const paginated_merge_queue_pullrequest_ref01_ent = client.PaginatedMergeQueuePullrequest()
    const paginated_merge_queue_pullrequest_ref01_match: any = {}
    paginated_merge_queue_pullrequest_ref01_match['merge_queue_id'] = setup.idmap['merge_queue01']
    paginated_merge_queue_pullrequest_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_merge_queue_pullrequest_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_merge_queue_pullrequest_ref01_list = (await paginated_merge_queue_pullrequest_ref01_ent.list(paginated_merge_queue_pullrequest_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_merge_queue_pullrequest/PaginatedMergeQueuePullrequestTestData.json')

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
    ['paginated_merge_queue_pullrequest01','paginated_merge_queue_pullrequest02','paginated_merge_queue_pullrequest03','repository01','repository02','repository03','merge_queue01','merge_queue02','merge_queue03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_PULLREQUEST_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_PULLREQUEST_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_PULLREQUEST_ENTID']
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
  
