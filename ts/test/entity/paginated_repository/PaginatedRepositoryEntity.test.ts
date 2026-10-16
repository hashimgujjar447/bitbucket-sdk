

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


describe('PaginatedRepositoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedRepository()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedRepository().list({"repo_slug":1,"workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_repository.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"fork_policy":{"a":true,"h":"Fork Policy","n":"fork_policy","r":false,"sh":"Controls the rules for forking this repository.","t":"`$STRING`","key$":"fork_policy","index$":2},"full_name":{"a":true,"h":"Full Name","n":"full_name","r":false,"sh":"The concatenation of the repository owner's username and the slugified name, e.g.","t":"`$STRING`","key$":"full_name","index$":3},"has_issues":{"a":true,"h":"Has Issues","n":"has_issues","r":false,"sh":"The issue tracker for this repository is enabled.","t":"`$BOOLEAN`","key$":"has_issues","index$":4},"has_wiki":{"a":true,"h":"Has Wiki","n":"has_wiki","r":false,"sh":"The wiki for this repository is enabled.","t":"`$BOOLEAN`","key$":"has_wiki","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"is_private":{"a":true,"h":"Is Private","n":"is_private","r":false,"t":"`$BOOLEAN`","key$":"is_private","index$":7},"language":{"a":true,"h":"Language","n":"language","r":false,"t":"`$STRING`","key$":"language","index$":8},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":9},"mainbranch":{"a":true,"h":"Mainbranch","n":"mainbranch","r":false,"t":"`$ANY`","key$":"mainbranch","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":11},"next":{"a":true,"fo":"uri","h":"Next","n":"next","r":false,"sh":"Link to the next page if it exists.","t":"`$STRING`","key$":"next","index$":12},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"t":"`$ANY`","key$":"owner","index$":13},"page":{"a":true,"h":"Page","n":"page","r":false,"sh":"Page number of the current results.","t":"`$INTEGER`","key$":"page","index$":14},"pagelen":{"a":true,"h":"Pagelen","n":"pagelen","r":false,"sh":"Current number of objects on the existing page.","t":"`$INTEGER`","key$":"pagelen","index$":15},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"t":"`$ANY`","key$":"parent","index$":16},"previous":{"a":true,"fo":"uri","h":"Previous","n":"previous","r":false,"sh":"Link to previous page if it exists.","t":"`$STRING`","key$":"previous","index$":17},"project":{"a":true,"h":"Project","n":"project","r":false,"t":"`$ANY`","key$":"project","index$":18},"scm":{"a":true,"h":"Scm","n":"scm","r":false,"t":"`$STRING`","key$":"scm","index$":19},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Total number of objects in the response.","t":"`$INTEGER`","key$":"size","index$":20},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":21},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":false,"t":"`$STRING`","key$":"updated_on","index$":22},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The repository's immutable id.","t":"`$STRING`","key$":"uuid","index$":23},"values":{"a":true,"h":"Values","n":"values","r":false,"t":"`$ARRAY`","key$":"values","index$":24}},"id":{"field":"id","name":"id"},"name":"paginated_repository","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/forks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"role","or":"role","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/forks","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"forks"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"role","or":"role","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}","q":{"exist":["id"]},"r":{"param":{"workspace":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"paginated_repository","name__orig":"paginated_repository","Name":"PaginatedRepository","name_":"paginated_repository","name-":"paginated-repository","NAME":"PAGINATED_REPOSITORY","index$":56}, {"active":true,"entity":"paginated_repository","key$":"BasicPaginatedRepositoryFlow","kind":"basic","name":"BasicPaginatedRepositoryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_repository_ref01"}}]},{"a":true,"d":{},"i":{"ref":"paginated_repository_ref01","srcdatavar":"paginated_repository_ref01_data","suffix":"_dt0"},"m":{"id":"paginated_repository01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-paginated_repository_ref01"}}]}]}, 'PaginatedRepository', {"GET /repositories/{workspace}/{repo_slug}/forks":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1},{"name":"role","in":"query","description":"Filters the result based on the authenticated user's role on each repository.\n\n* **member**: returns repositories to which the user has explicit read access\n* **contributor**: returns repositories to which the user has explicit write access\n* **admin**: returns repositories to which the user has explicit administrator access\n* **owner**: returns all repositories owned by the current user\n","required":false,"type":"string","enum":["admin","contributor","member","owner"],"index$":2},{"name":"q","in":"query","description":"Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\n","required":false,"type":"string","index$":3},{"name":"sort","in":"query","description":"Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\n","required":false,"type":"string","index$":4}]},"GET /repositories/{workspace}":{"protocol":"http","parameters":[{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":0},{"name":"role","in":"query","description":"\nFilters the result based on the authenticated user's role on each repository.\n\n* **member**: returns repositories to which the user has explicit read access\n* **contributor**: returns repositories to which the user has explicit write access\n* **admin**: returns repositories to which the user has explicit administrator access\n* **owner**: returns all repositories owned by the current user\n","required":false,"type":"string","enum":["admin","contributor","member","owner"],"index$":1},{"name":"q","in":"query","description":"\nQuery string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\n","required":false,"type":"string","index$":2},{"name":"sort","in":"query","description":"\nField by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\n        ","required":false,"type":"string","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_repository_ref01_data = Object.values(setup.data.existing.paginated_repository)[0] as any

    // LIST
    const paginated_repository_ref01_ent = client.PaginatedRepository()
    const paginated_repository_ref01_match: any = {}
    paginated_repository_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_repository_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_repository_ref01_list = (await paginated_repository_ref01_ent.list(paginated_repository_ref01_match)).map((e: any) => e.data())


    // LOAD
    const paginated_repository_ref01_match_dt0: any = {}
    paginated_repository_ref01_match_dt0.id = paginated_repository_ref01_data.id
    const paginated_repository_ref01_data_dt0 = (await paginated_repository_ref01_ent.load(paginated_repository_ref01_match_dt0)).data()
    assert(paginated_repository_ref01_data_dt0.id === paginated_repository_ref01_data.id)


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
      '../../../../.sdk/test/entity/paginated_repository/PaginatedRepositoryTestData.json')

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
    ['paginated_repository01','paginated_repository02','paginated_repository03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_REPOSITORY_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_REPOSITORY_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_REPOSITORY_ENTID']
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
  
