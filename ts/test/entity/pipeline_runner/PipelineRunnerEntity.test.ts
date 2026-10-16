

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


describe('PipelineRunnerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PipelineRunner()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PipelineRunner().create({"workspace_id":1,"type":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pipeline_runner.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"sh":"The timestamp when the runner was created.","t":"`$STRING`","key$":"created_on","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"labels":{"a":true,"h":"Labels","n":"labels","r":false,"sh":"Labels assigned to the runner for identification and routing.","t":"`$ARRAY`","key$":"labels","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the runner.","t":"`$STRING`","key$":"name","index$":3},"oauth_client":{"a":true,"h":"Oauth Client","n":"oauth_client","r":false,"sh":"OAuth client configuration for the runner.","t":"`$ANY`","key$":"oauth_client","index$":4},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The current state of the runner.","t":"`$ANY`","key$":"state","index$":5},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":6},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":false,"sh":"The timestamp when the runner was last updated.","t":"`$STRING`","key$":"updated_on","index$":7},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The UUID identifying the runner.","t":"`$STRING`","key$":"uuid","index$":8}},"id":{"field":"id","name":"id"},"name":"pipeline_runner","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /repositories/{workspace}/{repo_slug}/pipelines-config/runners","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/pipelines-config/runners","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines-config"},{"lit":"runners"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /workspaces/{workspace}/pipelines-config/runners","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/workspaces/{workspace}/pipelines-config/runners","q":{"exist":["workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"pipelines-config"},{"lit":"runners"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"runner_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"runner_uuid":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines-config"},{"lit":"runners"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"runner_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}","q":{"exist":["id","workspace_id"]},"r":{"param":{"runner_uuid":"id","workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"pipelines-config"},{"lit":"runners"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"runner_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"runner_uuid":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines-config"},{"lit":"runners"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"runner_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}","q":{"exist":["id","workspace_id"]},"r":{"param":{"runner_uuid":"id","workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"pipelines-config"},{"lit":"runners"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.workspace"]]},"key$":"pipeline_runner","name__orig":"pipeline_runner","Name":"PipelineRunner","name_":"pipeline_runner","name-":"pipeline-runner","NAME":"PIPELINE_RUNNER","index$":74}, {"active":true,"entity":"pipeline_runner","key$":"BasicPipelineRunnerFlow","kind":"basic","name":"BasicPipelineRunnerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pipeline_runner_ref01"},"m":{"repo_slug":"repo_slug01","workspace":"workspace01","workspace_id":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{"workspace_id":"workspace01"},"i":{"ref":"pipeline_runner_ref01","srcdatavar":"pipeline_runner_ref01_data","suffix":"_up0","textfield":"created_on"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pipeline_runner_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"pipeline_runner_ref01","srcdatavar":"pipeline_runner_ref01_data","suffix":"_dt0"},"m":{"id":"pipeline_runner01","workspace_id":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pipeline_runner_ref01"}}]}]}, 'PipelineRunner', {"POST /repositories/{workspace}/{repo_slug}/pipelines-config/runners":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1}]},"POST /workspaces/{workspace}/pipelines-config/runners":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0}]},"GET /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"runner_uuid","description":"The runner uuid.","required":true,"in":"path","type":"string","index$":2}]},"GET /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"runner_uuid","description":"The runner uuid.","required":true,"in":"path","type":"string","index$":1}]},"PUT /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"runner_uuid","description":"The runner uuid.","required":true,"in":"path","type":"string","index$":2}]},"PUT /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"runner_uuid","description":"The runner uuid.","required":true,"in":"path","type":"string","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pipeline_runner_ref01_ent = client.PipelineRunner()
    let pipeline_runner_ref01_data = setup.data.new.pipeline_runner['pipeline_runner_ref01']
    pipeline_runner_ref01_data['repo_slug'] = setup.idmap['repo_slug01']
    pipeline_runner_ref01_data['workspace'] = setup.idmap['workspace01']
    pipeline_runner_ref01_data['workspace_id'] = setup.idmap['workspace01']

    pipeline_runner_ref01_data = (await pipeline_runner_ref01_ent.create(pipeline_runner_ref01_data)).data()
    assert(null != pipeline_runner_ref01_data.id)


    // UPDATE
    const pipeline_runner_ref01_data_up0: any = {}
    pipeline_runner_ref01_data_up0.id = pipeline_runner_ref01_data.id
    pipeline_runner_ref01_data_up0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01']

    const pipeline_runner_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-pipeline_runner_ref01_' + setup.now }
    ;(pipeline_runner_ref01_data_up0 as any)[pipeline_runner_ref01_markdef_up0.name] = pipeline_runner_ref01_markdef_up0.value

    const pipeline_runner_ref01_resdata_up0 = (await pipeline_runner_ref01_ent.update(pipeline_runner_ref01_data_up0)).data()
    assert(pipeline_runner_ref01_resdata_up0.id === pipeline_runner_ref01_data_up0.id)

    assert((pipeline_runner_ref01_resdata_up0 as any)[pipeline_runner_ref01_markdef_up0.name] === pipeline_runner_ref01_markdef_up0.value)


    // LOAD
    const pipeline_runner_ref01_match_dt0: any = {}
    pipeline_runner_ref01_match_dt0.id = pipeline_runner_ref01_data.id
    pipeline_runner_ref01_match_dt0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01']
    const pipeline_runner_ref01_data_dt0 = (await pipeline_runner_ref01_ent.load(pipeline_runner_ref01_match_dt0)).data()
    assert(pipeline_runner_ref01_data_dt0.id === pipeline_runner_ref01_data.id)


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
      '../../../../.sdk/test/entity/pipeline_runner/PipelineRunnerTestData.json')

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
    ['pipeline_runner01','pipeline_runner02','pipeline_runner03','repository01','repository02','repository03','workspace01','workspace02','workspace03','repo_slug01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PIPELINE_RUNNER_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PIPELINE_RUNNER_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PIPELINE_RUNNER_ENTID']
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
  
