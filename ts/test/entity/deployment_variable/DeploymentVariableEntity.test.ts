

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


describe('DeploymentVariableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.DeploymentVariable()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DeploymentVariable().create({"environment_id":1,"repo_slug":"x","workspace":"x","type":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'deployment_variable.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"The unique name of the variable.","t":"`$STRING`","key$":"key","index$":1},"secured":{"a":true,"h":"Secured","n":"secured","r":false,"sh":"If true, this variable will be treated as secured.","t":"`$BOOLEAN`","key$":"secured","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":3},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The UUID identifying the variable.","t":"`$STRING`","key$":"uuid","index$":4},"value":{"a":true,"h":"Value","n":"value","r":false,"sh":"The value of the variable.","t":"`$STRING`","key$":"value","index$":5}},"id":{"field":"id","name":"id"},"name":"deployment_variable","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["key","secured","type","uuid","value"],"co":{"id":"POST /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"environment_id","or":"environment_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables","q":{"exist":["environment_id","repo_slug","workspace"]},"r":{"param":{"environment_uuid":"environment_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"deployments_config"},{"lit":"environments"},{"var":"environment_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["key","secured","type","uuid","value"],"co":{"id":"PUT /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"environment_id","or":"environment_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"variable_uuid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}","q":{"exist":["environment_id","id","repo_slug","workspace"]},"r":{"param":{"environment_uuid":"environment_id","variable_uuid":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"deployments_config"},{"lit":"environments"},{"var":"environment_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"deployment_variable","name__orig":"deployment_variable","Name":"DeploymentVariable","name_":"deployment_variable","name-":"deployment-variable","NAME":"DEPLOYMENT_VARIABLE","index$":14}, {"active":true,"entity":"deployment_variable","key$":"BasicDeploymentVariableFlow","kind":"basic","name":"BasicDeploymentVariableFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"deployment_variable_ref01"},"m":{"environment_id":"environment01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{"environment_id":"environment01","repo_slug":"repo_slug01","workspace":"workspace01"},"i":{"ref":"deployment_variable_ref01","srcdatavar":"deployment_variable_ref01_data","suffix":"_up0","textfield":"key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-deployment_variable_ref01"}}],"v":[]}]}, 'DeploymentVariable', {"POST /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"environment_uuid","description":"The environment.","required":true,"in":"path","type":"string","index$":2},{"name":"_body","in":"body","description":"The variable to create","required":true,"schema":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"additionalProperties":true,"type":"object","title":"Deployment Variable","description":"A Pipelines deployment variable.","properties":{"uuid":{"type":"string","description":"The UUID identifying the variable.","key$":"uuid"},"key":{"type":"string","description":"The unique name of the variable.","key$":"key"},"value":{"type":"string","description":"The value of the variable. If the variable is secured, this will be empty.","key$":"value"},"secured":{"type":"boolean","description":"If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.","key$":"secured"}}}],"x-ref":"#/definitions/deployment_variable","index$":1},"index$":3}]},"PUT /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"environment_uuid","description":"The environment.","required":true,"in":"path","type":"string","index$":2},{"name":"variable_uuid","description":"The UUID of the variable to update.","required":true,"in":"path","type":"string","index$":3},{"name":"_body","in":"body","description":"The updated deployment variable.","required":true,"schema":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"additionalProperties":true,"type":"object","title":"Deployment Variable","description":"A Pipelines deployment variable.","properties":{"uuid":{"type":"string","description":"The UUID identifying the variable.","key$":"uuid"},"key":{"type":"string","description":"The unique name of the variable.","key$":"key"},"value":{"type":"string","description":"The value of the variable. If the variable is secured, this will be empty.","key$":"value"},"secured":{"type":"boolean","description":"If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.","key$":"secured"}}}],"x-ref":"#/definitions/deployment_variable","index$":1},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const deployment_variable_ref01_ent = client.DeploymentVariable()
    let deployment_variable_ref01_data = setup.data.new.deployment_variable['deployment_variable_ref01']
    deployment_variable_ref01_data['environment_id'] = setup.idmap['environment01']
    deployment_variable_ref01_data['repo_slug'] = setup.idmap['repo_slug01']
    deployment_variable_ref01_data['workspace'] = setup.idmap['workspace01']

    deployment_variable_ref01_data = (await deployment_variable_ref01_ent.create(deployment_variable_ref01_data)).data()
    assert(null != deployment_variable_ref01_data.id)


    // UPDATE
    const deployment_variable_ref01_data_up0: any = {}
    deployment_variable_ref01_data_up0.id = deployment_variable_ref01_data.id
    deployment_variable_ref01_data_up0['environment_id'] = setup.idmap['environment_id'] ?? setup.idmap['environment01']
    deployment_variable_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    deployment_variable_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']

    const deployment_variable_ref01_markdef_up0 = { name: 'key', value: 'Mark01-deployment_variable_ref01_' + setup.now }
    ;(deployment_variable_ref01_data_up0 as any)[deployment_variable_ref01_markdef_up0.name] = deployment_variable_ref01_markdef_up0.value

    const deployment_variable_ref01_resdata_up0 = (await deployment_variable_ref01_ent.update(deployment_variable_ref01_data_up0)).data()
    assert(deployment_variable_ref01_resdata_up0.id === deployment_variable_ref01_data_up0.id)

    assert((deployment_variable_ref01_resdata_up0 as any)[deployment_variable_ref01_markdef_up0.name] === deployment_variable_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/deployment_variable/DeploymentVariableTestData.json')

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
    ['deployment_variable01','deployment_variable02','deployment_variable03','repository01','repository02','repository03','environment01','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_DEPLOYMENT_VARIABLE_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_DEPLOYMENT_VARIABLE_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_DEPLOYMENT_VARIABLE_ENTID']
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
  
