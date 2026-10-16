

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


describe('PaginatedFileConflictEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedFileConflict()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedFileConflict().load({"id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_file_conflict.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"next":{"a":true,"fo":"uri","h":"Next","n":"next","r":false,"sh":"Link to the next page if it exists.","t":"`$STRING`","key$":"next","index$":1},"page":{"a":true,"h":"Page","n":"page","r":false,"sh":"Page number of the current results.","t":"`$INTEGER`","key$":"page","index$":2},"pagelen":{"a":true,"h":"Pagelen","n":"pagelen","r":false,"sh":"Current number of objects on the existing page.","t":"`$INTEGER`","key$":"pagelen","index$":3},"previous":{"a":true,"fo":"uri","h":"Previous","n":"previous","r":false,"sh":"Link to previous page if it exists.","t":"`$STRING`","key$":"previous","index$":4},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Total number of objects in the response.","t":"`$INTEGER`","key$":"size","index$":5},"values":{"a":true,"h":"Values","n":"values","r":false,"t":"`$ARRAY`","key$":"values","index$":6}},"id":{"field":"id","name":"id"},"name":"paginated_file_conflict","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/file-conflicts/{spec}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"spec","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/file-conflicts/{spec}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"spec":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"file-conflicts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"paginated_file_conflict","name__orig":"paginated_file_conflict","Name":"PaginatedFileConflict","name_":"paginated_file_conflict","name-":"paginated-file-conflict","NAME":"PAGINATED_FILE_CONFLICT","index$":35}, {"active":true,"entity":"paginated_file_conflict","key$":"BasicPaginatedFileConflictFlow","kind":"basic","name":"BasicPaginatedFileConflictFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"paginated_file_conflict_ref01","srcdatavar":"paginated_file_conflict_ref01_data","suffix":"_dt0"},"m":{"id":"paginated_file_conflict01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-paginated_file_conflict_ref01"}}]}]}, 'PaginatedFileConflict', {"GET /repositories/{workspace}/{repo_slug}/file-conflicts/{spec}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"spec","in":"path","description":"A commit SHA (e.g. `3a8b42`) or a commit range using double dot\nnotation (e.g. `3a8b42..9ff173`).\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_file_conflict_ref01_data = Object.values(setup.data.existing.paginated_file_conflict)[0] as any

    // LOAD
    const paginated_file_conflict_ref01_ent = client.PaginatedFileConflict()
    const paginated_file_conflict_ref01_match_dt0: any = {}
    paginated_file_conflict_ref01_match_dt0.id = paginated_file_conflict_ref01_data.id
    paginated_file_conflict_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    paginated_file_conflict_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const paginated_file_conflict_ref01_data_dt0 = (await paginated_file_conflict_ref01_ent.load(paginated_file_conflict_ref01_match_dt0)).data()
    assert(paginated_file_conflict_ref01_data_dt0.id === paginated_file_conflict_ref01_data.id)


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
      '../../../../.sdk/test/entity/paginated_file_conflict/PaginatedFileConflictTestData.json')

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
    ['paginated_file_conflict01','paginated_file_conflict02','paginated_file_conflict03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_FILE_CONFLICT_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_FILE_CONFLICT_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_FILE_CONFLICT_ENTID']
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
  
