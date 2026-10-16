

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


describe('PaginatedWorkspaceMembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedWorkspaceMembership()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedWorkspaceMembership().list({"workspace_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_workspace_membership.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":0},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":1},"user":{"a":true,"h":"User","n":"user","r":false,"t":"`$ANY`","key$":"user","index$":2},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":false,"t":"`$ANY`","key$":"workspace","index$":3}},"name":"paginated_workspace_membership","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /workspaces/{workspace}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/members","q":{"exist":["workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0},{"a":true,"co":{"id":"GET /workspaces/{workspace}/permissions","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/permissions","q":{"exist":["workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"permissions"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"paginated_workspace_membership","name__orig":"paginated_workspace_membership","Name":"PaginatedWorkspaceMembership","name_":"paginated_workspace_membership","name-":"paginated-workspace-membership","NAME":"PAGINATED_WORKSPACE_MEMBERSHIP","index$":69}, {"active":true,"entity":"paginated_workspace_membership","key$":"BasicPaginatedWorkspaceMembershipFlow","kind":"basic","name":"BasicPaginatedWorkspaceMembershipFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"workspace_id":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_workspace_membership_ref01"}}]}]}, 'PaginatedWorkspaceMembership', {"GET /workspaces/{workspace}/members":{"protocol":"http","parameters":[{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":0}]},"GET /workspaces/{workspace}/permissions":{"protocol":"http","parameters":[{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":0},{"name":"q","in":"query","description":"\nQuery string to narrow down the response as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).","required":false,"type":"string","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_workspace_membership_ref01_data = Object.values(setup.data.existing.paginated_workspace_membership)[0] as any

    // LIST
    const paginated_workspace_membership_ref01_ent = client.PaginatedWorkspaceMembership()
    const paginated_workspace_membership_ref01_match: any = {}
    paginated_workspace_membership_ref01_match['workspace_id'] = setup.idmap['workspace01']

    const paginated_workspace_membership_ref01_list = (await paginated_workspace_membership_ref01_ent.list(paginated_workspace_membership_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_workspace_membership/PaginatedWorkspaceMembershipTestData.json')

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
    ['paginated_workspace_membership01','paginated_workspace_membership02','paginated_workspace_membership03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_WORKSPACE_MEMBERSHIP_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_WORKSPACE_MEMBERSHIP_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_WORKSPACE_MEMBERSHIP_ENTID']
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
  
