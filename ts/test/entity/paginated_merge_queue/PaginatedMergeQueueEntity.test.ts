

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


describe('PaginatedMergeQueueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedMergeQueue()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedMergeQueue().list({"repo_slug":1,"workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_merge_queue.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The merge queue name.","t":"`$STRING`","key$":"name","index$":0},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"The configuration state returned by the merge queue service.","t":"`$STRING`","key$":"state","index$":1},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":2},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":true,"sh":"The merge queue UUID.","t":"`$STRING`","key$":"uuid","index$":3}},"name":"paginated_merge_queue","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/merge-queues","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":10,"k":"query","n":"pagelen","or":"pagelen","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"target_branch","or":"target_branch","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/merge-queues","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"merge-queues"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"paginated_merge_queue","name__orig":"paginated_merge_queue","Name":"PaginatedMergeQueue","name_":"paginated_merge_queue","name-":"paginated-merge-queue","NAME":"PAGINATED_MERGE_QUEUE","index$":38}, {"active":true,"entity":"paginated_merge_queue","key$":"BasicPaginatedMergeQueueFlow","kind":"basic","name":"BasicPaginatedMergeQueueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_merge_queue_ref01"}}]}]}, 'PaginatedMergeQueue', {"GET /repositories/{workspace}/{repo_slug}/merge-queues":{"protocol":"http","parameters":[{"name":"workspace","description":"The workspace containing the repository.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository slug.","required":true,"in":"path","type":"string","index$":1},{"name":"target_branch","description":"Optional target branch name to filter merge queues.","required":false,"in":"query","type":"string","index$":2},{"name":"page","description":"The page number of elements to retrieve.","required":false,"in":"query","type":"integer","format":"int32","minimum":1,"default":1,"index$":3},{"name":"pagelen","description":"The maximum number of results to return.","required":false,"in":"query","type":"integer","format":"int32","minimum":1,"maximum":100,"default":10,"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_merge_queue_ref01_data = Object.values(setup.data.existing.paginated_merge_queue)[0] as any

    // LIST
    const paginated_merge_queue_ref01_ent = client.PaginatedMergeQueue()
    const paginated_merge_queue_ref01_match: any = {}
    paginated_merge_queue_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_merge_queue_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_merge_queue_ref01_list = (await paginated_merge_queue_ref01_ent.list(paginated_merge_queue_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_merge_queue/PaginatedMergeQueueTestData.json')

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
    ['paginated_merge_queue01','paginated_merge_queue02','paginated_merge_queue03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_ENTID']
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
  
