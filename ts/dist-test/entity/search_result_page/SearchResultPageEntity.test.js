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
(0, node_test_1.describe)('SearchResultPageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.SearchResultPage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.SearchResultPage().list({ "selected_user": 1, "search_query": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search_result_page.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content_match_count": { "a": true, "fo": "int64", "h": "Content Match Count", "n": "content_match_count", "r": false, "ro": true, "t": "`$INTEGER`", "key$": "content_match_count", "index$": 0 }, "content_matches": { "a": true, "h": "Content Matches", "n": "content_matches", "r": false, "ro": true, "t": "`$ARRAY`", "key$": "content_matches", "index$": 1 }, "file": { "a": true, "h": "File", "n": "file", "r": true, "ro": true, "sh": "A file object, representing a file at a commit in a repository", "t": "`$OBJECT`", "key$": "file", "index$": 2 }, "path_matches": { "a": true, "h": "Path Matches", "n": "path_matches", "r": false, "ro": true, "t": "`$ARRAY`", "key$": "path_matches", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "ro": true, "t": "`$STRING`", "key$": "type", "index$": 4 } }, "name": "search_result_page", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /users/{selected_user}/search/code", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "selected_user", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "pagelen", "or": "pagelen", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "search_query", "or": "search_query", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/users/{selected_user}/search/code", "q": { "exist": ["search_query", "selected_user"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "users" }, { "var": "selected_user" }, { "lit": "search" }, { "lit": "code" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /teams/{username}/search/code", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "username", "or": "username", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "pagelen", "or": "pagelen", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "search_query", "or": "search_query", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/teams/{username}/search/code", "q": { "exist": ["search_query", "username"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "teams" }, { "var": "username" }, { "lit": "search" }, { "lit": "code" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /workspaces/{workspace}/search/code", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "pagelen", "or": "pagelen", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "search_query", "or": "search_query", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/search/code", "q": { "exist": ["search_query", "workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "search" }, { "lit": "code" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.user"], ["$.main.kit.entity.workspace"]] }, "key$": "search_result_page", "name__orig": "search_result_page", "Name": "SearchResultPage", "name_": "search_result_page", "name-": "search-result-page", "NAME": "SEARCH_RESULT_PAGE", "index$": 98 }, { "active": true, "entity": "search_result_page", "key$": "BasicSearchResultPageFlow", "kind": "basic", "name": "BasicSearchResultPageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "workspace_id": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "search_result_page_ref01" } }] }] }, 'SearchResultPage', { "GET /users/{selected_user}/search/code": { "protocol": "http", "parameters": [{ "name": "selected_user", "in": "path", "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.", "required": true, "type": "string", "index$": 0 }, { "name": "search_query", "in": "query", "description": "The search query", "required": true, "type": "string", "index$": 1 }, { "name": "page", "in": "query", "description": "Which page of the search results to retrieve", "required": false, "type": "integer", "default": 1, "format": "int32", "index$": 2 }, { "name": "pagelen", "in": "query", "description": "How many search results to retrieve per page", "required": false, "type": "integer", "default": 10, "format": "int32", "index$": 3 }] }, "GET /teams/{username}/search/code": { "protocol": "http", "parameters": [{ "name": "username", "in": "path", "description": "The account to search in; either the username or the UUID in curly braces", "required": true, "type": "string", "index$": 0 }, { "name": "search_query", "in": "query", "description": "The search query", "required": true, "type": "string", "index$": 1 }, { "name": "page", "in": "query", "description": "Which page of the search results to retrieve", "required": false, "type": "integer", "default": 1, "format": "int32", "index$": 2 }, { "name": "pagelen", "in": "query", "description": "How many search results to retrieve per page", "required": false, "type": "integer", "default": 10, "format": "int32", "index$": 3 }] }, "GET /workspaces/{workspace}/search/code": { "protocol": "http", "parameters": [{ "name": "workspace", "in": "path", "description": "The workspace to search in; either the slug or the UUID in curly braces", "required": true, "type": "string", "index$": 0 }, { "name": "search_query", "in": "query", "description": "The search query", "required": true, "type": "string", "index$": 1 }, { "name": "page", "in": "query", "description": "Which page of the search results to retrieve", "required": false, "type": "integer", "default": 1, "format": "int32", "index$": 2 }, { "name": "pagelen", "in": "query", "description": "How many search results to retrieve per page", "required": false, "type": "integer", "default": 10, "format": "int32", "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_result_page_ref01_data = Object.values(setup.data.existing.search_result_page)[0];
        // LIST
        const search_result_page_ref01_ent = client.SearchResultPage();
        const search_result_page_ref01_match = {};
        search_result_page_ref01_match['workspace_id'] = setup.idmap['workspace01'];
        const search_result_page_ref01_list = (await search_result_page_ref01_ent.list(search_result_page_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search_result_page/SearchResultPageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search_result_page01', 'search_result_page02', 'search_result_page03', 'user01', 'user02', 'user03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_SEARCH_RESULT_PAGE_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_SEARCH_RESULT_PAGE_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_SEARCH_RESULT_PAGE_ENTID'];
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
//# sourceMappingURL=SearchResultPageEntity.test.js.map