

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


describe('PaginatedPipelineStepEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedPipelineStep()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedPipelineStep().list({"pipeline_id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_pipeline_step.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completed_on":{"a":true,"fo":"date-time","h":"Completed On","n":"completed_on","r":false,"sh":"The timestamp when the step execution was completed.","t":"`$STRING`","key$":"completed_on","index$":0},"image":{"a":true,"h":"Image","n":"image","r":false,"sh":"The Docker image used as the build container for the step.","t":"`$OBJECT`","key$":"image","index$":1},"script_commands":{"a":true,"h":"Script Commands","n":"script_commands","r":false,"sh":"The list of build commands.","t":"`$ARRAY`","key$":"script_commands","index$":2},"setup_commands":{"a":true,"h":"Setup Commands","n":"setup_commands","r":false,"sh":"The list of commands that are executed as part of the setup phase of the build.","t":"`$ARRAY`","key$":"setup_commands","index$":3},"started_on":{"a":true,"fo":"date-time","h":"Started On","n":"started_on","r":false,"sh":"The timestamp when the step execution was started.","t":"`$STRING`","key$":"started_on","index$":4},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The current state of the step","t":"`$ANY`","key$":"state","index$":5},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":6},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The UUID identifying the step.","t":"`$STRING`","key$":"uuid","index$":7}},"name":"paginated_pipeline_step","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"pipeline_id","or":"pipeline_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps","q":{"exist":["pipeline_id","repo_slug","workspace"]},"r":{"param":{"pipeline_uuid":"pipeline_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"steps"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.pipeline"]]},"key$":"paginated_pipeline_step","name__orig":"paginated_pipeline_step","Name":"PaginatedPipelineStep","name_":"paginated_pipeline_step","name-":"paginated-pipeline-step","NAME":"PAGINATED_PIPELINE_STEP","index$":46}, {"active":true,"entity":"paginated_pipeline_step","key$":"BasicPaginatedPipelineStepFlow","kind":"basic","name":"BasicPaginatedPipelineStepFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"pipeline_id":"pipeline01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_pipeline_step_ref01"}}]}]}, 'PaginatedPipelineStep', {"GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"pipeline_uuid","description":"The UUID of the pipeline.","required":true,"in":"path","type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_pipeline_step_ref01_data = Object.values(setup.data.existing.paginated_pipeline_step)[0] as any

    // LIST
    const paginated_pipeline_step_ref01_ent = client.PaginatedPipelineStep()
    const paginated_pipeline_step_ref01_match: any = {}
    paginated_pipeline_step_ref01_match['pipeline_id'] = setup.idmap['pipeline01']
    paginated_pipeline_step_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_pipeline_step_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_pipeline_step_ref01_list = (await paginated_pipeline_step_ref01_ent.list(paginated_pipeline_step_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_pipeline_step/PaginatedPipelineStepTestData.json')

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
    ['paginated_pipeline_step01','paginated_pipeline_step02','paginated_pipeline_step03','repository01','repository02','repository03','pipeline01','pipeline02','pipeline03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_STEP_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_STEP_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_STEP_ENTID']
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
  
