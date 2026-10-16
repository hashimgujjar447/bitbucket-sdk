

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


describe('PaginatedWebhookSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedWebhookSubscription()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedWebhookSubscription().list({"workspace_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_webhook_subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"sh":"Whether or not the webhook subscription is enabled.","t":"`$BOOLEAN`","key$":"active","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"sh":"The timestamp when the webhook subscription was created.","t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A user-defined description of the webhook.","t":"`$STRING`","key$":"description","index$":2},"events":{"a":true,"h":"Events","n":"events","r":false,"sh":"The events this webhook is subscribed to.","t":"`$ARRAY`","key$":"events","index$":3},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"A link to a resource related to this object.","t":"`$OBJECT`","key$":"links","index$":4},"secret":{"a":true,"h":"Secret","n":"secret","r":false,"sh":"The secret to associate with the hook.","t":"`$STRING`","key$":"secret","index$":5},"secret_set":{"a":true,"h":"Secret Set","n":"secret_set","r":false,"ro":true,"sh":"Indicates whether or not the hook has an associated secret.","t":"`$BOOLEAN`","key$":"secret_set","index$":6},"subject":{"a":true,"h":"Subject","n":"subject","r":true,"ro":true,"sh":"Base type for most resource objects.","t":"`$OBJECT`","key$":"subject","index$":7},"subject_type":{"a":true,"h":"Subject Type","n":"subject_type","r":false,"ro":true,"sh":"The type of entity.","t":"`$STRING`","key$":"subject_type","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":9},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"The URL events get delivered to.","t":"`$STRING`","key$":"url","index$":10},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"ro":true,"sh":"The webhook's id.","t":"`$STRING`","key$":"uuid","index$":11}},"name":"paginated_webhook_subscription","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/hooks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/hooks","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"hooks"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0},{"a":true,"co":{"id":"GET /workspaces/{workspace}/hooks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/hooks","q":{"exist":["workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"hooks"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.workspace"]]},"key$":"paginated_webhook_subscription","name__orig":"paginated_webhook_subscription","Name":"PaginatedWebhookSubscription","name_":"paginated_webhook_subscription","name-":"paginated-webhook-subscription","NAME":"PAGINATED_WEBHOOK_SUBSCRIPTION","index$":67}, {"active":true,"entity":"paginated_webhook_subscription","key$":"BasicPaginatedWebhookSubscriptionFlow","kind":"basic","name":"BasicPaginatedWebhookSubscriptionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"workspace_id":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_webhook_subscription_ref01"}}]}]}, 'PaginatedWebhookSubscription', {"GET /repositories/{workspace}/{repo_slug}/hooks":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.","required":true,"in":"path","type":"string","index$":1}]},"GET /workspaces/{workspace}/hooks":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_webhook_subscription_ref01_data = Object.values(setup.data.existing.paginated_webhook_subscription)[0] as any

    // LIST
    const paginated_webhook_subscription_ref01_ent = client.PaginatedWebhookSubscription()
    const paginated_webhook_subscription_ref01_match: any = {}
    paginated_webhook_subscription_ref01_match['workspace_id'] = setup.idmap['workspace01']

    const paginated_webhook_subscription_ref01_list = (await paginated_webhook_subscription_ref01_ent.list(paginated_webhook_subscription_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_webhook_subscription/PaginatedWebhookSubscriptionTestData.json')

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
    ['paginated_webhook_subscription01','paginated_webhook_subscription02','paginated_webhook_subscription03','repository01','repository02','repository03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_WEBHOOK_SUBSCRIPTION_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_WEBHOOK_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_WEBHOOK_SUBSCRIPTION_ENTID']
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
  
