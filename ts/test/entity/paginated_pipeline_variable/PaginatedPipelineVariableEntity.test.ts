

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


describe('PaginatedPipelineVariableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedPipelineVariable()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedPipelineVariable().list({"selected_user":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_pipeline_variable.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"The unique name of the variable.","t":"`$STRING`","key$":"key","index$":0},"secured":{"a":true,"h":"Secured","n":"secured","r":false,"sh":"If true, this variable will be treated as secured.","t":"`$BOOLEAN`","key$":"secured","index$":1},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":2},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The UUID identifying the variable.","t":"`$STRING`","key$":"uuid","index$":3},"value":{"a":true,"h":"Value","n":"value","r":false,"sh":"The value of the variable.","t":"`$STRING`","key$":"value","index$":4}},"name":"paginated_pipeline_variable","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pipelines_config/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pipelines_config/variables","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines_config"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0},{"a":true,"co":{"id":"GET /users/{selected_user}/pipelines_config/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{selected_user}/pipelines_config/variables","q":{"exist":["selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"pipelines_config"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":1},{"a":true,"co":{"id":"GET /teams/{username}/pipelines_config/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/teams/{username}/pipelines_config/variables","q":{"exist":["username"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"teams"},{"var":"username"},{"lit":"pipelines_config"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":2},{"a":true,"co":{"id":"GET /workspaces/{workspace}/pipelines-config/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/pipelines-config/variables","q":{"exist":["workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"pipelines-config"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":3}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.user"],["$.main.kit.entity.workspace"]]},"key$":"paginated_pipeline_variable","name__orig":"paginated_pipeline_variable","Name":"PaginatedPipelineVariable","name_":"paginated_pipeline_variable","name-":"paginated-pipeline-variable","NAME":"PAGINATED_PIPELINE_VARIABLE","index$":47}, {"active":true,"entity":"paginated_pipeline_variable","key$":"BasicPaginatedPipelineVariableFlow","kind":"basic","name":"BasicPaginatedPipelineVariableFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"workspace_id":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_pipeline_variable_ref01"}}]}]}, 'PaginatedPipelineVariable', {"GET /repositories/{workspace}/{repo_slug}/pipelines_config/variables":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1}]},"GET /users/{selected_user}/pipelines_config/variables":{"protocol":"http","parameters":[{"name":"selected_user","description":"Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.","required":true,"in":"path","type":"string","index$":0}]},"GET /teams/{username}/pipelines_config/variables":{"protocol":"http","parameters":[{"name":"username","description":"The account.","required":true,"in":"path","type":"string","index$":0}]},"GET /workspaces/{workspace}/pipelines-config/variables":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_pipeline_variable_ref01_data = Object.values(setup.data.existing.paginated_pipeline_variable)[0] as any

    // LIST
    const paginated_pipeline_variable_ref01_ent = client.PaginatedPipelineVariable()
    const paginated_pipeline_variable_ref01_match: any = {}
    paginated_pipeline_variable_ref01_match['workspace_id'] = setup.idmap['workspace01']

    const paginated_pipeline_variable_ref01_list = (await paginated_pipeline_variable_ref01_ent.list(paginated_pipeline_variable_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_pipeline_variable/PaginatedPipelineVariableTestData.json')

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
    ['paginated_pipeline_variable01','paginated_pipeline_variable02','paginated_pipeline_variable03','repository01','repository02','repository03','user01','user02','user03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_VARIABLE_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_VARIABLE_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_VARIABLE_ENTID']
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
  
