

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


describe('PaginatedChangesetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedChangeset()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedChangeset().list({"repo_slug":1,"workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_changeset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$ANY`","key$":"author","index$":0},"committer":{"a":true,"h":"Committer","n":"committer","r":false,"t":"`$ANY`","key$":"committer","index$":1},"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":false,"t":"`$STRING`","key$":"date","index$":2},"hash":{"a":true,"h":"Hash","n":"hash","r":false,"t":"`$STRING`","key$":"hash","index$":3},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":4},"next":{"a":true,"fo":"uri","h":"Next","n":"next","r":false,"sh":"Link to the next page if it exists.","t":"`$STRING`","key$":"next","index$":5},"page":{"a":true,"h":"Page","n":"page","r":false,"sh":"Page number of the current results.","t":"`$INTEGER`","key$":"page","index$":6},"pagelen":{"a":true,"h":"Pagelen","n":"pagelen","r":false,"sh":"Current number of objects on the existing page.","t":"`$INTEGER`","key$":"pagelen","index$":7},"parents":{"a":true,"h":"Parents","n":"parents","r":false,"t":"`$ARRAY`","key$":"parents","index$":8},"previous":{"a":true,"fo":"uri","h":"Previous","n":"previous","r":false,"sh":"Link to previous page if it exists.","t":"`$STRING`","key$":"previous","index$":9},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Total number of objects in the response.","t":"`$INTEGER`","key$":"size","index$":10},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$OBJECT`","key$":"summary","index$":11},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":12},"values":{"a":true,"h":"Values","n":"values","r":false,"t":"`$ARRAY`","key$":"values","index$":13}},"name":"paginated_changeset","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /repositories/{workspace}/{repo_slug}/commits/{revision}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"revision","or":"revision","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/commits/{revision}","q":{"exist":["repo_slug","revision","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commits"},{"var":"revision"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /repositories/{workspace}/{repo_slug}/commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/commits","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commits","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commits"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commits/{revision}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"revision","or":"revision","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commits/{revision}","q":{"exist":["repo_slug","revision","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commits"},{"var":"revision"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.repository","$.main.kit.entity.commit"]]},"key$":"paginated_changeset","name__orig":"paginated_changeset","Name":"PaginatedChangeset","name_":"paginated_changeset","name-":"paginated-changeset","NAME":"PAGINATED_CHANGESET","index$":26}, {"active":true,"entity":"paginated_changeset","key$":"BasicPaginatedChangesetFlow","kind":"basic","name":"BasicPaginatedChangesetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"paginated_changeset_ref01"},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_changeset_ref01"}}]},{"a":false,"d":{},"i":{"ref":"paginated_changeset_ref01","srcdatavar":"paginated_changeset_ref01_data","suffix":"_dt0"},"m":{"id":"paginated_changeset01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-paginated_changeset_ref01"}}],"unreachable":true}]}, 'PaginatedChangeset', {"POST /repositories/{workspace}/{repo_slug}/commits/{revision}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"revision","in":"path","description":"A commit SHA1 or ref name.","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"POST /repositories/{workspace}/{repo_slug}/commits":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1}]},"GET /repositories/{workspace}/{repo_slug}/commits":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1}]},"GET /repositories/{workspace}/{repo_slug}/commits/{revision}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"revision","in":"path","description":"A commit SHA1 or ref name.","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const paginated_changeset_ref01_ent = client.PaginatedChangeset()
    let paginated_changeset_ref01_data = setup.data.new.paginated_changeset['paginated_changeset_ref01']
    paginated_changeset_ref01_data['repo_slug'] = setup.idmap['repo_slug01']
    paginated_changeset_ref01_data['workspace'] = setup.idmap['workspace01']

    paginated_changeset_ref01_data = (await paginated_changeset_ref01_ent.create(paginated_changeset_ref01_data)).data()
    assert(null != paginated_changeset_ref01_data)


    // LIST
    const paginated_changeset_ref01_match: any = {}
    paginated_changeset_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_changeset_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_changeset_ref01_list = (await paginated_changeset_ref01_ent.list(paginated_changeset_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_changeset/PaginatedChangesetTestData.json')

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
    ['paginated_changeset01','paginated_changeset02','paginated_changeset03','repository01','repository02','repository03','commit01','commit02','commit03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_CHANGESET_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_CHANGESET_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_CHANGESET_ENTID']
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
  
