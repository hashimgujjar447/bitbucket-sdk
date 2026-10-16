

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


describe('CommitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.Commit()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Commit().list({"id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['load', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'commit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$ANY`","key$":"author","index$":0},"commit":{"a":true,"h":"Commit","n":"commit","r":false,"t":"`$ANY`","key$":"commit","index$":1},"committer":{"a":true,"h":"Committer","n":"committer","r":false,"t":"`$ANY`","key$":"committer","index$":2},"content":{"a":true,"h":"Content","n":"content","r":false,"t":"`$OBJECT`","key$":"content","index$":3},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":4},"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":false,"t":"`$STRING`","key$":"date","index$":5},"deleted":{"a":true,"h":"Deleted","n":"deleted","r":false,"t":"`$BOOLEAN`","key$":"deleted","index$":6},"hash":{"a":true,"h":"Hash","n":"hash","r":false,"t":"`$STRING`","key$":"hash","index$":7},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":8},"inline":{"a":true,"h":"Inline","n":"inline","r":true,"t":"`$OBJECT`","key$":"inline","index$":9},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":10},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":11},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"t":"`$ANY`","key$":"parent","index$":12},"parents":{"a":true,"h":"Parents","n":"parents","r":false,"t":"`$ARRAY`","key$":"parents","index$":13},"participants":{"a":true,"h":"Participants","n":"participants","r":false,"t":"`$ARRAY`","key$":"participants","index$":14},"repository":{"a":true,"h":"Repository","n":"repository","r":false,"t":"`$ANY`","key$":"repository","index$":15},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$OBJECT`","key$":"summary","index$":16},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":17},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":false,"t":"`$STRING`","key$":"updated_on","index$":18},"user":{"a":true,"h":"User","n":"user","r":false,"t":"`$ANY`","key$":"user","index$":19}},"id":{"field":"id","name":"id"},"name":"commit","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /repositories/{workspace}/{repo_slug}/commit/{commit}/approve","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/approve","q":{"$action":"approve","exist":["id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"approve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["commit","content","created_on","deleted","id","inline","links","parent","type","updated_on","user"],"co":{"id":"POST /repositories/{workspace}/{repo_slug}/commit/{commit}/comments","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/comments","q":{"$action":"comment","exist":["id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/comments","q":{"$action":"comment","exist":["id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"comment_id","or":"comment_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}","q":{"exist":["comment_id","id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"comments"},{"var":"comment_id"}],"t":{"req":"`reqdata`","res":"`body.commit`"},"index$":0},{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commit/{commit}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/merge-base/{revspec}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"revspec","or":"revspec","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/merge-base/{revspec}","q":{"exist":["repo_slug","revspec","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"merge-base"},{"var":"revspec"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/diff/{spec}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"spec","or":"spec","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"binary","or":"binary","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"context","or":"context","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"ignore_whitespace","or":"ignore_whitespace","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"merge","or":"merge","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"path","or":"path","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"rename","or":"renames","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"topic","or":"topic","r":false,"t":"`$BOOLEAN`","index$":6}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/diff/{spec}","q":{"exist":["repo_slug","spec","workspace"]},"r":{},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"diff"},{"var":"spec"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/patch/{spec}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"spec","or":"spec","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/patch/{spec}","q":{"exist":["repo_slug","spec","workspace"]},"r":{},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"patch"},{"var":"spec"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"comment_id","or":"comment_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}","q":{"exist":["comment_id","id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"comments"},{"var":"comment_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/approve","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/approve","q":{"$action":"approve","exist":["id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"approve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["commit","content","created_on","deleted","id","inline","links","parent","type","updated_on","user"],"co":{"id":"PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"comment_id","or":"comment_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"id","or":"commit","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}","q":{"exist":["comment_id","id","repo_slug","workspace"]},"r":{"param":{"commit":"id"}},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"id"},{"lit":"comments"},{"var":"comment_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.repository"],["$.main.kit.entity.repository"],["$.main.kit.entity.repository"],["$.main.kit.entity.repository"],["$.main.kit.entity.repository"]]},"key$":"commit","name__orig":"commit","Name":"Commit","name_":"commit","name-":"commit","NAME":"COMMIT","index$":8}, {"active":true,"entity":"commit","key$":"BasicCommitFlow","kind":"basic","name":"BasicCommitFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"commit_ref01"},"m":{"commit":"commit01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"commit":"commit01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"commit_ref01"}}],"unreachable":true},{"a":false,"d":{"repo_slug":"repo_slug01","workspace":"workspace01"},"i":{"ref":"commit_ref01","srcdatavar":"commit_ref01_data","suffix":"_up0","textfield":"created_on"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-commit_ref01"}}],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"commit_ref01","srcdatavar":"commit_ref01_data","suffix":"_dt0"},"m":{"id":"commit01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-commit_ref01"}}]},{"a":false,"d":{},"i":{"ref":"commit_ref01","suffix":"_rm0"},"m":{"id":"commit01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"remove","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"commit":"commit01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"commit_ref01"}}]}]}, 'Commit', {"POST /repositories/{workspace}/{repo_slug}/commit/{commit}/approve":{"protocol":"http","parameters":[{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"POST /repositories/{workspace}/{repo_slug}/commit/{commit}/comments":{"protocol":"http","parameters":[{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2},{"name":"_body","in":"body","description":"The specified comment.","required":true,"schema":{"allOf":[{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"Comment","description":"The base type for all comments. This type should be considered abstract. Each of the \"commentable\" resources defines its own subtypes (e.g. `issue_comment`).","properties":{"id":{"type":"integer","format":"int64","key$":"id"},"created_on":{"type":"string","format":"date-time","key$":"created_on"},"updated_on":{"type":"string","format":"date-time","key$":"updated_on"},"content":{"type":"object","properties":{},"additionalProperties":false,"key$":"content"},"user":{"allOf":[],"x-ref":"#/definitions/account","key$":"user"},"deleted":{"type":"boolean","key$":"deleted"},"parent":{"allOf":"[Circular *paths./repositories/{workspace}/{repo_slug}/commit/{commit}/comments.get.responses.200.schema.properties.values.items.allOf.0.allOf]","x-ref":"#/definitions/comment","key$":"parent"},"inline":{"type":"object","properties":{},"required":[],"additionalProperties":false,"key$":"inline"},"links":{"type":"object","properties":{},"additionalProperties":false,"key$":"links"}},"additionalProperties":true}],"x-ref":"#/definitions/comment"},{"type":"object","title":"Commit Comment","description":"A commit comment.","properties":{"commit":{"allOf":[{"allOf":[],"x-ref":"#/definitions/base_commit"},{"type":"object","title":"Commit","description":"A repository commit object.","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/commit","key$":"commit"}},"additionalProperties":true}],"x-ref":"#/definitions/commit_comment"},"index$":3}]},"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments":{"protocol":"http","parameters":[{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2},{"name":"q","in":"query","description":"Query string to narrow down the response as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\n","required":false,"type":"string","index$":3},{"name":"sort","in":"query","description":"Field by which the results should be sorted as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).\n","required":false,"type":"string","index$":4}]},"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}":{"protocol":"http","parameters":[{"name":"comment_id","in":"path","description":"The id of the comment.","required":true,"type":"integer","format":"int64","index$":0},{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":1},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":2},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":3}]},"GET /repositories/{workspace}/{repo_slug}/commit/{commit}":{"protocol":"http","parameters":[{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"GET /repositories/{workspace}/{repo_slug}/merge-base/{revspec}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"revspec","in":"path","description":"A commit range using double dot notation (e.g. `3a8b42..9ff173`).\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"GET /repositories/{workspace}/{repo_slug}/diff/{spec}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"spec","in":"path","description":"A commit SHA (e.g. `3a8b42`) or a commit range using double dot\nnotation (e.g. `3a8b42..9ff173`).\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2},{"name":"context","in":"query","description":"Generate diffs with <n> lines of context instead of the usual three.","required":false,"type":"integer","index$":3},{"name":"path","in":"query","description":"Limit the diff to a particular file (this parameter\ncan be repeated for multiple paths).","required":false,"type":"string","index$":4},{"name":"ignore_whitespace","in":"query","description":"Generate diffs that ignore whitespace.","required":false,"type":"boolean","index$":5},{"name":"binary","in":"query","description":"Generate diffs that include binary files, true if omitted.","required":false,"type":"boolean","index$":6},{"name":"renames","in":"query","description":"Whether to perform rename detection, true if omitted.","required":false,"type":"boolean","index$":7},{"name":"merge","in":"query","description":"This parameter is deprecated. The 'topic' parameter should be used\ninstead. The 'merge' and 'topic' parameters cannot be both used at\nthe same time.\n\nIf true, the source commit is merged into the\ndestination commit, and then a diff from the\ndestination to the merge result is returned. If false,\na simple 'two dot' diff between the source and\ndestination is returned. True if omitted.","required":false,"type":"boolean","index$":8},{"name":"topic","in":"query","description":"If true, returns 2-way 'three-dot' diff.\nThis is a diff between the source commit and the merge base\nof the source commit and the destination commit.\nIf false, a simple 'two dot' diff between the source and\ndestination is returned.\n\nIf omitted, defaults to true, ie. a 2 way 'three-dot'\ndiff is returned.\n","required":false,"type":"boolean","index$":9}]},"GET /repositories/{workspace}/{repo_slug}/patch/{spec}":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"spec","in":"path","description":"A commit SHA (e.g. `3a8b42`) or a commit range using double dot\nnotation (e.g. `3a8b42..9ff173`).\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}":{"protocol":"http","parameters":[{"name":"comment_id","in":"path","description":"The id of the comment.","required":true,"type":"integer","format":"int64","index$":0},{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":1},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":2},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":3}]},"DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/approve":{"protocol":"http","parameters":[{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}":{"protocol":"http","parameters":[{"name":"comment_id","in":"path","description":"The id of the comment.","required":true,"type":"integer","format":"int64","index$":0},{"name":"commit","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":1},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":2},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":3},{"name":"_body","in":"body","description":"The updated comment.","required":true,"schema":{"allOf":[{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"Comment","description":"The base type for all comments. This type should be considered abstract. Each of the \"commentable\" resources defines its own subtypes (e.g. `issue_comment`).","properties":{"id":{"type":"integer","format":"int64","key$":"id"},"created_on":{"type":"string","format":"date-time","key$":"created_on"},"updated_on":{"type":"string","format":"date-time","key$":"updated_on"},"content":{"type":"object","properties":{},"additionalProperties":false,"key$":"content"},"user":{"allOf":[],"x-ref":"#/definitions/account","key$":"user"},"deleted":{"type":"boolean","key$":"deleted"},"parent":{"allOf":"[Circular *paths./repositories/{workspace}/{repo_slug}/commit/{commit}/comments.get.responses.200.schema.properties.values.items.allOf.0.allOf]","x-ref":"#/definitions/comment","key$":"parent"},"inline":{"type":"object","properties":{},"required":[],"additionalProperties":false,"key$":"inline"},"links":{"type":"object","properties":{},"additionalProperties":false,"key$":"links"}},"additionalProperties":true}],"x-ref":"#/definitions/comment"},{"type":"object","title":"Commit Comment","description":"A commit comment.","properties":{"commit":{"allOf":[{"allOf":[],"x-ref":"#/definitions/base_commit"},{"type":"object","title":"Commit","description":"A repository commit object.","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/commit","key$":"commit"}},"additionalProperties":true}],"x-ref":"#/definitions/commit_comment","index$":1},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let commit_ref01_data = Object.values(setup.data.existing.commit)[0] as any

    // LOAD
    const commit_ref01_ent = client.Commit()
    const commit_ref01_match_dt0: any = {}
    commit_ref01_match_dt0.id = commit_ref01_data.id
    commit_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    commit_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const commit_ref01_data_dt0 = (await commit_ref01_ent.load(commit_ref01_match_dt0)).data()
    assert(commit_ref01_data_dt0.id === commit_ref01_data.id)


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
      '../../../../.sdk/test/entity/commit/CommitTestData.json')

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
    ['commit01','commit02','commit03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_COMMIT_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_COMMIT_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_COMMIT_ENTID']
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
  
