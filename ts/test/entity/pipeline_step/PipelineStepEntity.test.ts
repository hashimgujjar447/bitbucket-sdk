

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


describe('PipelineStepEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PipelineStep()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PipelineStep().load({"id":1,"pipeline_id":"x","repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pipeline_step.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completed_on":{"a":true,"fo":"date-time","h":"Completed On","n":"completed_on","r":false,"sh":"The timestamp when the step execution was completed.","t":"`$STRING`","key$":"completed_on","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"image":{"a":true,"h":"Image","n":"image","r":false,"sh":"The Docker image used as the build container for the step.","t":"`$OBJECT`","key$":"image","index$":2},"script_commands":{"a":true,"h":"Script Commands","n":"script_commands","r":false,"sh":"The list of build commands.","t":"`$ARRAY`","key$":"script_commands","index$":3},"setup_commands":{"a":true,"h":"Setup Commands","n":"setup_commands","r":false,"sh":"The list of commands that are executed as part of the setup phase of the build.","t":"`$ARRAY`","key$":"setup_commands","index$":4},"started_on":{"a":true,"fo":"date-time","h":"Started On","n":"started_on","r":false,"sh":"The timestamp when the step execution was started.","t":"`$STRING`","key$":"started_on","index$":5},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The current state of the step","t":"`$ANY`","key$":"state","index$":6},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":7},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The UUID identifying the step.","t":"`$STRING`","key$":"uuid","index$":8}},"id":{"field":"id","name":"id"},"name":"pipeline_step","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"step_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"pipeline_id","or":"pipeline_uuid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}","q":{"exist":["id","pipeline_id","repo_slug","workspace"]},"r":{"param":{"pipeline_uuid":"pipeline_id","step_uuid":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"steps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.pipeline"]]},"key$":"pipeline_step","name__orig":"pipeline_step","Name":"PipelineStep","name_":"pipeline_step","name-":"pipeline-step","NAME":"PIPELINE_STEP","index$":77}, {"active":true,"entity":"pipeline_step","key$":"BasicPipelineStepFlow","kind":"basic","name":"BasicPipelineStepFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pipeline_step_ref01","srcdatavar":"pipeline_step_ref01_data","suffix":"_dt0"},"m":{"id":"pipeline_step01","pipeline_id":"pipeline01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pipeline_step_ref01"}}]}]}, 'PipelineStep', {"GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"pipeline_uuid","description":"The UUID of the pipeline.","required":true,"in":"path","type":"string","index$":2},{"name":"step_uuid","description":"The UUID of the step.","required":true,"in":"path","type":"string","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pipeline_step_ref01_data = Object.values(setup.data.existing.pipeline_step)[0] as any

    // LOAD
    const pipeline_step_ref01_ent = client.PipelineStep()
    const pipeline_step_ref01_match_dt0: any = {}
    pipeline_step_ref01_match_dt0.id = pipeline_step_ref01_data.id
    pipeline_step_ref01_match_dt0['pipeline_id'] = setup.idmap['pipeline_id'] ?? setup.idmap['pipeline01']
    pipeline_step_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    pipeline_step_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const pipeline_step_ref01_data_dt0 = (await pipeline_step_ref01_ent.load(pipeline_step_ref01_match_dt0)).data()
    assert(pipeline_step_ref01_data_dt0.id === pipeline_step_ref01_data.id)


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
      '../../../../.sdk/test/entity/pipeline_step/PipelineStepTestData.json')

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
    ['pipeline_step01','pipeline_step02','pipeline_step03','repository01','repository02','repository03','pipeline01','pipeline02','pipeline03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PIPELINE_STEP_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PIPELINE_STEP_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PIPELINE_STEP_ENTID']
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
  
