"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PullrequestCommentTaskEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PullrequestCommentTask();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PullrequestCommentTask().load({ "id": "x", "pullrequest_id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pullrequest_comment_task.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "t": "`$ANY`", "key$": "comment", "index$": 0 }, "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "task raw content", "t": "`$OBJECT`", "key$": "content", "index$": 1 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "t": "`$STRING`", "key$": "created_on", "index$": 2 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": true, "t": "`$ANY`", "key$": "creator", "index$": 3 }, "id": { "a": true, "fo": "int64", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 5 }, "pending": { "a": true, "h": "Pending", "n": "pending", "r": false, "t": "`$BOOLEAN`", "key$": "pending", "index$": 6 }, "resolved_by": { "a": true, "h": "Resolved By", "n": "resolved_by", "r": false, "t": "`$ANY`", "key$": "resolved_by", "index$": 7 }, "resolved_on": { "a": true, "fo": "date-time", "h": "Resolved On", "n": "resolved_on", "r": false, "sh": "The ISO8601 timestamp for when the task was resolved.", "t": "`$STRING`", "key$": "resolved_on", "index$": 8 }, "state": { "a": true, "h": "State", "n": "state", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "state", "index$": 9 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": true, "t": "`$STRING`", "key$": "updated_on", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "pullrequest_comment_task", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["comment", "content", "pending"], "co": { "id": "POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "pull_request_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "pull_request_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pullrequests" }, { "var": "id" }, { "lit": "tasks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "task_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "pullrequest_id", "or": "pull_request_id", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}", "q": { "exist": ["id", "pullrequest_id", "repo_slug", "workspace"] }, "r": { "param": { "pull_request_id": "pullrequest_id", "task_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pullrequests" }, { "var": "pullrequest_id" }, { "lit": "tasks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["content", "state"], "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "task_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "pullrequest_id", "or": "pull_request_id", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}", "q": { "exist": ["id", "pullrequest_id", "repo_slug", "workspace"] }, "r": { "param": { "pull_request_id": "pullrequest_id", "task_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pullrequests" }, { "var": "pullrequest_id" }, { "lit": "tasks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"], ["$.main.kit.entity.repository", "$.main.kit.entity.pullrequest"]] }, "key$": "pullrequest_comment_task", "name__orig": "pullrequest_comment_task", "Name": "PullrequestCommentTask", "name_": "pullrequest_comment_task", "name-": "pullrequest-comment-task", "NAME": "PULLREQUEST_COMMENT_TASK", "index$": 88 }, { "active": true, "entity": "pullrequest_comment_task", "key$": "BasicPullrequestCommentTaskFlow", "kind": "basic", "name": "BasicPullrequestCommentTaskFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "pullrequest_comment_task_ref01" }, "m": { "pull_request_id": "pull_request01", "pullrequest_id": "pullrequest01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": true, "d": { "pullrequest_id": "pullrequest01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "i": { "ref": "pullrequest_comment_task_ref01", "srcdatavar": "pullrequest_comment_task_ref01_data", "suffix": "_up0", "textfield": "created_on" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pullrequest_comment_task_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "pullrequest_comment_task_ref01", "srcdatavar": "pullrequest_comment_task_ref01_data", "suffix": "_dt0" }, "m": { "id": "pullrequest_comment_task01", "pullrequest_id": "pullrequest01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pullrequest_comment_task_ref01" } }] }] }, 'PullrequestCommentTask', { "POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks": { "protocol": "http", "parameters": [{ "name": "pull_request_id", "in": "path", "description": "The id of the pull request.", "required": true, "type": "integer", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "_body", "in": "body", "description": "The contents of the task", "required": true, "schema": { "type": "object", "title": "Pull Request Task Create", "description": "A pullrequest task create", "properties": { "content": { "type": "object", "title": "Task Raw Content", "description": "task raw content", "properties": { "raw": { "type": "string", "description": "The task contents" } }, "required": ["raw"], "additionalProperties": false, "key$": "content" }, "comment": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Comment", "description": "The base type for all comments. This type should be considered abstract. Each of the \"commentable\" resources defines its own subtypes (e.g. `issue_comment`).", "properties": { "id": { "type": "integer", "format": "int64", "key$": "id" }, "created_on": { "type": "string", "format": "date-time", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "key$": "updated_on" }, "content": { "type": "object", "properties": {}, "additionalProperties": false, "key$": "content" }, "user": { "allOf": [], "x-ref": "#/definitions/account", "key$": "user" }, "deleted": { "type": "boolean", "key$": "deleted" }, "parent": { "allOf": "[Circular *paths./repositories/{workspace}/{repo_slug}/commit/{commit}/comments.get.responses.200.schema.properties.values.items.allOf.0.allOf]", "x-ref": "#/definitions/comment", "key$": "parent" }, "inline": { "type": "object", "properties": {}, "required": [], "additionalProperties": false, "key$": "inline" }, "links": { "type": "object", "properties": {}, "additionalProperties": false, "key$": "links" } }, "additionalProperties": true }], "x-ref": "#/definitions/comment", "key$": "comment" }, "pending": { "type": "boolean", "key$": "pending" } }, "required": ["content"], "additionalProperties": false, "x-ref": "#/definitions/pullrequest_task_create", "index$": 1 }, "index$": 3 }] }, "GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}": { "protocol": "http", "parameters": [{ "name": "pull_request_id", "in": "path", "description": "The id of the pull request.", "required": true, "type": "integer", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "task_id", "in": "path", "description": "The ID of the task.", "required": true, "type": "integer", "format": "int64", "index$": 2 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 3 }] }, "PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}": { "protocol": "http", "parameters": [{ "name": "pull_request_id", "in": "path", "description": "The id of the pull request.", "required": true, "type": "integer", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "task_id", "in": "path", "description": "The ID of the task.", "required": true, "type": "integer", "format": "int64", "index$": 2 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 3 }, { "name": "_body", "in": "body", "description": "The updated state and content of the task.", "required": true, "schema": { "type": "object", "title": "Pull Request Task Update", "description": "A pullrequest task update", "properties": { "content": { "type": "object", "title": "Task Raw Content", "description": "task raw content", "properties": { "raw": { "type": "string", "description": "The task contents" } }, "required": ["raw"], "additionalProperties": false, "key$": "content" }, "state": { "type": "string", "enum": ["RESOLVED", "UNRESOLVED"], "key$": "state" } }, "additionalProperties": false, "x-ref": "#/definitions/pullrequest_task_update", "index$": 1 }, "index$": 4 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let pullrequest_comment_task_ref01_data = Object.values(setup.data.existing.pullrequest_comment_task)[0];
        // UPDATE
        const pullrequest_comment_task_ref01_ent = client.PullrequestCommentTask();
        const pullrequest_comment_task_ref01_data_up0 = {};
        pullrequest_comment_task_ref01_data_up0.id = pullrequest_comment_task_ref01_data.id;
        pullrequest_comment_task_ref01_data_up0['pullrequest_id'] = setup.idmap['pullrequest_id'] ?? setup.idmap['pullrequest01'];
        pullrequest_comment_task_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        pullrequest_comment_task_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const pullrequest_comment_task_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-pullrequest_comment_task_ref01_' + setup.now };
        pullrequest_comment_task_ref01_data_up0[pullrequest_comment_task_ref01_markdef_up0.name] = pullrequest_comment_task_ref01_markdef_up0.value;
        const pullrequest_comment_task_ref01_resdata_up0 = (await pullrequest_comment_task_ref01_ent.update(pullrequest_comment_task_ref01_data_up0)).data();
        (0, node_assert_1.default)(pullrequest_comment_task_ref01_resdata_up0.id === pullrequest_comment_task_ref01_data_up0.id);
        (0, node_assert_1.default)(pullrequest_comment_task_ref01_resdata_up0[pullrequest_comment_task_ref01_markdef_up0.name] === pullrequest_comment_task_ref01_markdef_up0.value);
        // LOAD
        const pullrequest_comment_task_ref01_match_dt0 = {};
        pullrequest_comment_task_ref01_match_dt0.id = pullrequest_comment_task_ref01_data.id;
        pullrequest_comment_task_ref01_match_dt0['pullrequest_id'] = setup.idmap['pullrequest_id'] ?? setup.idmap['pullrequest01'];
        pullrequest_comment_task_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        pullrequest_comment_task_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const pullrequest_comment_task_ref01_data_dt0 = (await pullrequest_comment_task_ref01_ent.load(pullrequest_comment_task_ref01_match_dt0)).data();
        (0, node_assert_1.default)(pullrequest_comment_task_ref01_data_dt0.id === pullrequest_comment_task_ref01_data.id);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pullrequest_comment_task/PullrequestCommentTaskTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pullrequest_comment_task01', 'pullrequest_comment_task02', 'pullrequest_comment_task03', 'repository01', 'repository02', 'repository03', 'pullrequest01', 'pullrequest02', 'pullrequest03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PULLREQUEST_COMMENT_TASK_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PULLREQUEST_COMMENT_TASK_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PULLREQUEST_COMMENT_TASK_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BitbucketSdkSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=PullrequestCommentTaskEntity.test.js.map