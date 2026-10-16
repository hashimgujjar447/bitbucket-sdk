

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


describe('PaginatedPullrequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedPullrequest()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedPullrequest().list({"commit_id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_pullrequest.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$ANY`","key$":"author","index$":0},"close_source_branch":{"a":true,"h":"Close Source Branch","n":"close_source_branch","r":false,"sh":"A boolean flag indicating if merging the pull request closes the source branch.","t":"`$BOOLEAN`","key$":"close_source_branch","index$":1},"closed_by":{"a":true,"h":"Closed By","n":"closed_by","r":false,"t":"`$ANY`","key$":"closed_by","index$":2},"comment_count":{"a":true,"h":"Comment Count","n":"comment_count","r":false,"sh":"The number of comments for a specific pull request.","t":"`$INTEGER`","key$":"comment_count","index$":3},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"sh":"The ISO8601 timestamp the request was created.","t":"`$STRING`","key$":"created_on","index$":4},"destination":{"a":true,"h":"Destination","n":"destination","r":false,"t":"`$OBJECT`","key$":"destination","index$":5},"draft":{"a":true,"h":"Draft","n":"draft","r":false,"sh":"A boolean flag indicating whether the pull request is a draft.","t":"`$BOOLEAN`","key$":"draft","index$":6},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The pull request's unique ID.","t":"`$INTEGER`","key$":"id","index$":7},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":8},"merge_commit":{"a":true,"h":"Merge Commit","n":"merge_commit","r":false,"t":"`$OBJECT`","key$":"merge_commit","index$":9},"next":{"a":true,"fo":"uri","h":"Next","n":"next","r":false,"sh":"Link to the next page if it exists.","t":"`$STRING`","key$":"next","index$":10},"page":{"a":true,"h":"Page","n":"page","r":false,"sh":"Page number of the current results.","t":"`$INTEGER`","key$":"page","index$":11},"pagelen":{"a":true,"h":"Pagelen","n":"pagelen","r":false,"sh":"Current number of objects on the existing page.","t":"`$INTEGER`","key$":"pagelen","index$":12},"participants":{"a":true,"h":"Participants","n":"participants","r":false,"sh":"The list of users that are collaborating on this pull request.","t":"`$ARRAY`","key$":"participants","index$":13},"previous":{"a":true,"fo":"uri","h":"Previous","n":"previous","r":false,"sh":"Link to previous page if it exists.","t":"`$STRING`","key$":"previous","index$":14},"queued":{"a":true,"h":"Queued","n":"queued","r":false,"sh":"A boolean flag indicating whether the pull request is queued","t":"`$BOOLEAN`","key$":"queued","index$":15},"reason":{"a":true,"h":"Reason","n":"reason","r":false,"sh":"Explains why a pull request was declined.","t":"`$STRING`","key$":"reason","index$":16},"rendered":{"a":true,"h":"Rendered","n":"rendered","r":false,"sh":"User provided pull request text, interpreted in a markup language and rendered in HTML","t":"`$OBJECT`","key$":"rendered","index$":17},"reviewers":{"a":true,"h":"Reviewers","n":"reviewers","r":false,"sh":"The list of users that were added as reviewers on this pull request when it was created.","t":"`$ARRAY`","key$":"reviewers","index$":18},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Total number of objects in the response.","t":"`$INTEGER`","key$":"size","index$":19},"source":{"a":true,"h":"Source","n":"source","r":false,"t":"`$OBJECT`","key$":"source","index$":20},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The pull request's current status.","t":"`$STRING`","key$":"state","index$":21},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$OBJECT`","key$":"summary","index$":22},"task_count":{"a":true,"h":"Task Count","n":"task_count","r":false,"sh":"The number of open tasks for a specific pull request.","t":"`$INTEGER`","key$":"task_count","index$":23},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Title of the pull request.","t":"`$STRING`","key$":"title","index$":24},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":25},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":false,"sh":"The ISO8601 timestamp the request was last updated.","t":"`$STRING`","key$":"updated_on","index$":26},"values":{"a":true,"h":"Values","n":"values","r":false,"t":"`$ARRAY`","key$":"values","index$":27}},"id":{"field":"id","name":"id"},"name":"paginated_pullrequest","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"commit_id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":30,"k":"query","n":"pagelen","or":"pagelen","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests","q":{"exist":["commit_id","repo_slug","workspace"]},"r":{"param":{"commit":"commit_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"commit_id"},{"lit":"pullrequests"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0},{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pullrequests","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pullrequests","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pullrequests"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /workspaces/{workspace}/pullrequests/{selected_user}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"selected_user","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/pullrequests/{selected_user}","q":{"exist":["id","workspace_id"]},"r":{"param":{"selected_user":"id","workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"pullrequests"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.workspace"],["$.main.kit.entity.repository","$.main.kit.entity.commit"]]},"key$":"paginated_pullrequest","name__orig":"paginated_pullrequest","Name":"PaginatedPullrequest","name_":"paginated_pullrequest","name-":"paginated-pullrequest","NAME":"PAGINATED_PULLREQUEST","index$":52}, {"active":true,"entity":"paginated_pullrequest","key$":"BasicPaginatedPullrequestFlow","kind":"basic","name":"BasicPaginatedPullrequestFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_pullrequest_ref01"}}]},{"a":true,"d":{},"i":{"ref":"paginated_pullrequest_ref01","srcdatavar":"paginated_pullrequest_ref01_data","suffix":"_dt0"},"m":{"id":"paginated_pullrequest01","workspace_id":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-paginated_pullrequest_ref01"}}]}]}, 'PaginatedPullrequest', {"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests":{"protocol":"http","parameters":[{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"The repository; either the UUID in curly braces, or the slug","required":true,"type":"string","index$":1},{"name":"commit","in":"path","description":"The SHA1 of the commit","required":true,"type":"string","index$":2},{"name":"page","in":"query","description":"Which page to retrieve","required":false,"type":"integer","default":1,"format":"int32","index$":3},{"name":"pagelen","in":"query","description":"How many pull requests to retrieve per page","required":false,"type":"integer","default":30,"format":"int32","index$":4}]},"GET /repositories/{workspace}/{repo_slug}/pullrequests":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1},{"name":"state","in":"query","description":"Only return pull requests that are in this state. This parameter can be repeated.","type":"string","enum":["OPEN","MERGED","DECLINED","SUPERSEDED"],"index$":2}]},"GET /workspaces/{workspace}/pullrequests/{selected_user}":{"protocol":"http","parameters":[{"name":"selected_user","in":"path","description":"This can either be the username of the pull request author, the author's UUID\nsurrounded by curly-braces, for example: `{account UUID}`, or the author's Atlassian ID.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1},{"name":"state","in":"query","description":"Only return pull requests that are in this state. This parameter can be repeated.","type":"string","enum":["OPEN","MERGED","DECLINED","SUPERSEDED"],"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_pullrequest_ref01_data = Object.values(setup.data.existing.paginated_pullrequest)[0] as any

    // LIST
    const paginated_pullrequest_ref01_ent = client.PaginatedPullrequest()
    const paginated_pullrequest_ref01_match: any = {}
    paginated_pullrequest_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_pullrequest_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_pullrequest_ref01_list = (await paginated_pullrequest_ref01_ent.list(paginated_pullrequest_ref01_match)).map((e: any) => e.data())


    // LOAD
    const paginated_pullrequest_ref01_match_dt0: any = {}
    paginated_pullrequest_ref01_match_dt0.id = paginated_pullrequest_ref01_data.id
    paginated_pullrequest_ref01_match_dt0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01']
    const paginated_pullrequest_ref01_data_dt0 = (await paginated_pullrequest_ref01_ent.load(paginated_pullrequest_ref01_match_dt0)).data()
    assert(paginated_pullrequest_ref01_data_dt0.id === paginated_pullrequest_ref01_data.id)


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
      '../../../../.sdk/test/entity/paginated_pullrequest/PaginatedPullrequestTestData.json')

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
    ['paginated_pullrequest01','paginated_pullrequest02','paginated_pullrequest03','repository01','repository02','repository03','workspace01','workspace02','workspace03','commit01','commit02','commit03','repo_slug01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_PULLREQUEST_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_PULLREQUEST_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_PULLREQUEST_ENTID']
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
  
