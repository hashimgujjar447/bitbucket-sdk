

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


describe('PaginatedTaskEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedTask()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedTask().list({"pullrequest_id":"x","repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_task.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"comment":{"a":true,"h":"Comment","n":"comment","r":false,"t":"`$ANY`","key$":"comment","index$":0},"content":{"a":true,"h":"Content","n":"content","r":true,"t":"`$OBJECT`","key$":"content","index$":1},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"t":"`$STRING`","key$":"created_on","index$":2},"creator":{"a":true,"h":"Creator","n":"creator","r":true,"t":"`$ANY`","key$":"creator","index$":3},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":5},"pending":{"a":true,"h":"Pending","n":"pending","r":false,"t":"`$BOOLEAN`","key$":"pending","index$":6},"resolved_by":{"a":true,"h":"Resolved By","n":"resolved_by","r":false,"t":"`$ANY`","key$":"resolved_by","index$":7},"resolved_on":{"a":true,"fo":"date-time","h":"Resolved On","n":"resolved_on","r":false,"sh":"The ISO8601 timestamp for when the task was resolved.","t":"`$STRING`","key$":"resolved_on","index$":8},"state":{"a":true,"h":"State","n":"state","r":true,"t":"`$STRING`","key$":"state","index$":9},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"t":"`$STRING`","key$":"updated_on","index$":10}},"id":{"field":"id","name":"id"},"name":"paginated_task","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"pullrequest_id","or":"pull_request_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"pagelen","or":"pagelen","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks","q":{"exist":["pullrequest_id","repo_slug","workspace"]},"r":{"param":{"pull_request_id":"pullrequest_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pullrequests"},{"var":"pullrequest_id"},{"lit":"tasks"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.pullrequest"]]},"key$":"paginated_task","name__orig":"paginated_task","Name":"PaginatedTask","name_":"paginated_task","name-":"paginated-task","NAME":"PAGINATED_TASK","index$":65}, {"active":true,"entity":"paginated_task","key$":"BasicPaginatedTaskFlow","kind":"basic","name":"BasicPaginatedTaskFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"pullrequest_id":"pullrequest01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_task_ref01"}}]}]}, 'PaginatedTask', {"GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks":{"protocol":"http","parameters":[{"name":"pull_request_id","in":"path","description":"The id of the pull request.","required":true,"type":"integer","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2},{"name":"q","in":"query","description":"\nQuery string to narrow down the response. See\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.","required":false,"type":"string","index$":3},{"name":"sort","in":"query","description":"\nField by which the results should be sorted as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\nDefaults to `created_on`.\n","required":false,"type":"string","index$":4},{"name":"pagelen","in":"query","description":"\nCurrent number of objects on the existing page.\nThe default value is 10 with 100 being the maximum allowed value.\nIndividual APIs may enforce different values.\n","required":false,"type":"integer","index$":5}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_task_ref01_data = Object.values(setup.data.existing.paginated_task)[0] as any

    // LIST
    const paginated_task_ref01_ent = client.PaginatedTask()
    const paginated_task_ref01_match: any = {}
    paginated_task_ref01_match['pullrequest_id'] = setup.idmap['pullrequest01']
    paginated_task_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_task_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_task_ref01_list = (await paginated_task_ref01_ent.list(paginated_task_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_task/PaginatedTaskTestData.json')

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
    ['paginated_task01','paginated_task02','paginated_task03','repository01','repository02','repository03','pullrequest01','pullrequest02','pullrequest03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_TASK_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_TASK_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_TASK_ENTID']
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
  
