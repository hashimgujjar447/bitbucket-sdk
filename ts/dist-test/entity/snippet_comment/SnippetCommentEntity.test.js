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
(0, node_test_1.describe)('SnippetCommentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.SnippetComment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.SnippetComment().load({ "encoded_id": 1, "id": 1, "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'snippet_comment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 1 }, "snippet": { "a": true, "h": "Snippet", "n": "snippet", "r": false, "t": "`$ANY`", "key$": "snippet", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "snippet_comment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["links", "snippet", "type"], "co": { "id": "POST /snippets/{workspace}/{encoded_id}/comments", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "encoded_id", "or": "encoded_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/snippets/{workspace}/{encoded_id}/comments", "q": { "exist": ["encoded_id", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "snippets" }, { "var": "workspace" }, { "var": "encoded_id" }, { "lit": "comments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /snippets/{workspace}/{encoded_id}/comments/{comment_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "encoded_id", "or": "encoded_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "comment_id", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", "q": { "exist": ["encoded_id", "id", "workspace"] }, "r": { "param": { "comment_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "snippets" }, { "var": "workspace" }, { "var": "encoded_id" }, { "lit": "comments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["links", "snippet", "type"], "co": { "id": "PUT /snippets/{workspace}/{encoded_id}/comments/{comment_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "encoded_id", "or": "encoded_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "comment_id", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", "q": { "exist": ["encoded_id", "id", "workspace"] }, "r": { "param": { "comment_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "snippets" }, { "var": "workspace" }, { "var": "encoded_id" }, { "lit": "comments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.snippet"]] }, "key$": "snippet_comment", "name__orig": "snippet_comment", "Name": "SnippetComment", "name_": "snippet_comment", "name-": "snippet-comment", "NAME": "SNIPPET_COMMENT", "index$": 100 }, { "active": true, "entity": "snippet_comment", "key$": "BasicSnippetCommentFlow", "kind": "basic", "name": "BasicSnippetCommentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "snippet_comment_ref01" }, "m": { "encoded_id": "encoded01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": { "encoded_id": "encoded01", "workspace": "workspace01" }, "i": { "ref": "snippet_comment_ref01", "srcdatavar": "snippet_comment_ref01_data", "suffix": "_up0", "textfield": "type" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-snippet_comment_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "snippet_comment_ref01", "srcdatavar": "snippet_comment_ref01_data", "suffix": "_dt0" }, "m": { "encoded_id": "encoded01", "id": "snippet_comment01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-snippet_comment_ref01" } }] }] }, 'SnippetComment', { "POST /snippets/{workspace}/{encoded_id}/comments": { "protocol": "http", "parameters": [{ "name": "encoded_id", "in": "path", "description": "The snippet id.", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "_body", "in": "body", "description": "The contents of the new comment.", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Snippet Comment", "description": "A comment on a snippet.", "properties": { "links": { "type": "object", "properties": { "self": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false }, "html": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "snippet": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": {}, "required": [], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Snippet", "description": "A snippet object.", "properties": {}, "additionalProperties": true }], "x-ref": "#/definitions/snippet", "key$": "snippet" } }, "additionalProperties": true }], "x-ref": "#/definitions/snippet_comment", "index$": 1 }, "index$": 2 }] }, "GET /snippets/{workspace}/{encoded_id}/comments/{comment_id}": { "protocol": "http", "parameters": [{ "name": "comment_id", "in": "path", "description": "The id of the comment.", "required": true, "type": "integer", "format": "int64", "index$": 0 }, { "name": "encoded_id", "in": "path", "description": "The snippet id.", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "PUT /snippets/{workspace}/{encoded_id}/comments/{comment_id}": { "protocol": "http", "parameters": [{ "name": "comment_id", "in": "path", "description": "The id of the comment.", "required": true, "type": "integer", "format": "int64", "index$": 0 }, { "name": "encoded_id", "in": "path", "description": "The snippet id.", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "_body", "in": "body", "description": "The contents to update the comment to.", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Snippet Comment", "description": "A comment on a snippet.", "properties": { "links": { "type": "object", "properties": { "self": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false }, "html": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "snippet": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": {}, "required": [], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Snippet", "description": "A snippet object.", "properties": {}, "additionalProperties": true }], "x-ref": "#/definitions/snippet", "key$": "snippet" } }, "additionalProperties": true }], "x-ref": "#/definitions/snippet_comment", "index$": 1 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const snippet_comment_ref01_ent = client.SnippetComment();
        let snippet_comment_ref01_data = setup.data.new.snippet_comment['snippet_comment_ref01'];
        snippet_comment_ref01_data['encoded_id'] = setup.idmap['encoded01'];
        snippet_comment_ref01_data['workspace'] = setup.idmap['workspace01'];
        snippet_comment_ref01_data = (await snippet_comment_ref01_ent.create(snippet_comment_ref01_data)).data();
        (0, node_assert_1.default)(null != snippet_comment_ref01_data.id);
        // UPDATE
        const snippet_comment_ref01_data_up0 = {};
        snippet_comment_ref01_data_up0.id = snippet_comment_ref01_data.id;
        snippet_comment_ref01_data_up0['encoded_id'] = setup.idmap['encoded_id'] ?? setup.idmap['encoded01'];
        snippet_comment_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const snippet_comment_ref01_markdef_up0 = { name: 'type', value: 'Mark01-snippet_comment_ref01_' + setup.now };
        snippet_comment_ref01_data_up0[snippet_comment_ref01_markdef_up0.name] = snippet_comment_ref01_markdef_up0.value;
        const snippet_comment_ref01_resdata_up0 = (await snippet_comment_ref01_ent.update(snippet_comment_ref01_data_up0)).data();
        (0, node_assert_1.default)(snippet_comment_ref01_resdata_up0.id === snippet_comment_ref01_data_up0.id);
        (0, node_assert_1.default)(snippet_comment_ref01_resdata_up0[snippet_comment_ref01_markdef_up0.name] === snippet_comment_ref01_markdef_up0.value);
        // LOAD
        const snippet_comment_ref01_match_dt0 = {};
        snippet_comment_ref01_match_dt0.id = snippet_comment_ref01_data.id;
        snippet_comment_ref01_match_dt0['encoded_id'] = setup.idmap['encoded_id'] ?? setup.idmap['encoded01'];
        snippet_comment_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const snippet_comment_ref01_data_dt0 = (await snippet_comment_ref01_ent.load(snippet_comment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(snippet_comment_ref01_data_dt0.id === snippet_comment_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/snippet_comment/SnippetCommentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['snippet_comment01', 'snippet_comment02', 'snippet_comment03', 'snippet01', 'snippet02', 'snippet03', 'encoded01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_SNIPPET_COMMENT_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_SNIPPET_COMMENT_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_SNIPPET_COMMENT_ENTID'];
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
//# sourceMappingURL=SnippetCommentEntity.test.js.map