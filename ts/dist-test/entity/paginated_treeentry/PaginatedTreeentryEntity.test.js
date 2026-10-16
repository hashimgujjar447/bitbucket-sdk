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
(0, node_test_1.describe)('PaginatedTreeentryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedTreeentry();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedTreeentry().list({ "repo_slug": 1, "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_treeentry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "commit": { "a": true, "h": "Commit", "n": "commit", "r": false, "t": "`$ANY`", "key$": "commit", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "next": { "a": true, "fo": "uri", "h": "Next", "n": "next", "r": false, "sh": "Link to the next page if it exists.", "t": "`$STRING`", "key$": "next", "index$": 2 }, "page": { "a": true, "h": "Page", "n": "page", "r": false, "sh": "Page number of the current results.", "t": "`$INTEGER`", "key$": "page", "index$": 3 }, "pagelen": { "a": true, "h": "Pagelen", "n": "pagelen", "r": false, "sh": "Current number of objects on the existing page.", "t": "`$INTEGER`", "key$": "pagelen", "index$": 4 }, "path": { "a": true, "h": "Path", "n": "path", "r": false, "sh": "The path in the repository", "t": "`$STRING`", "key$": "path", "index$": 5 }, "previous": { "a": true, "fo": "uri", "h": "Previous", "n": "previous", "r": false, "sh": "Link to previous page if it exists.", "t": "`$STRING`", "key$": "previous", "index$": 6 }, "size": { "a": true, "h": "Size", "n": "size", "r": false, "sh": "Total number of objects in the response.", "t": "`$INTEGER`", "key$": "size", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 8 }, "values": { "a": true, "h": "Values", "n": "values", "r": false, "t": "`$ARRAY`", "key$": "values", "index$": 9 } }, "id": { "field": "id", "from": { "commit": "commit", "path": "path" }, "name": "id", "parts": ["commit", "path"], "sep": "/" }, "name": "paginated_treeentry", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/src", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/src", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "src" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "path", "or": "path", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }], "query": [{ "a": true, "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "max_depth", "or": "max_depth", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/src/{commit}/{path}", "q": { "exist": ["commit", "path", "repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "src" }, { "var": "commit" }, { "var": "path" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"], ["$.main.kit.entity.repository"]] }, "key$": "paginated_treeentry", "name__orig": "paginated_treeentry", "Name": "PaginatedTreeentry", "name_": "paginated_treeentry", "name-": "paginated-treeentry", "NAME": "PAGINATED_TREEENTRY", "index$": 66 }, { "active": true, "entity": "paginated_treeentry", "key$": "BasicPaginatedTreeentryFlow", "kind": "basic", "name": "BasicPaginatedTreeentryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_treeentry_ref01" } }] }, { "a": false, "d": {}, "i": { "ref": "paginated_treeentry_ref01", "srcdatavar": "paginated_treeentry_ref01_data", "suffix": "_dt0" }, "m": { "commit": "commit01", "id": "paginated_treeentry01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-paginated_treeentry_ref01" } }], "unreachable": true }] }, 'PaginatedTreeentry', { "GET /repositories/{workspace}/{repo_slug}/src": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "format", "in": "query", "description": "Instead of returning the file's contents, return the (json) meta data for it.", "required": false, "type": "string", "enum": ["meta"], "index$": 2 }] }, "GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}": { "protocol": "http", "parameters": [{ "name": "commit", "in": "path", "description": "The commit's SHA1.", "required": true, "type": "string", "index$": 0 }, { "name": "path", "in": "path", "description": "Path to the file.", "required": true, "type": "string", "index$": 1 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 3 }, { "name": "format", "in": "query", "description": "If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered' option only supports these filetypes: `.md`, `.markdown`, `.mkd`, `.mkdn`, `.mdown`, `.text`, `.rst`, and `.textile`. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.", "required": false, "type": "string", "enum": ["meta", "rendered"], "index$": 4 }, { "name": "q", "in": "query", "description": "Optional filter expression as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).", "required": false, "type": "string", "index$": 5 }, { "name": "sort", "in": "query", "description": "Optional sorting parameter as per [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).", "required": false, "type": "string", "index$": 6 }, { "name": "max_depth", "in": "query", "description": "If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1.", "required": false, "type": "integer", "index$": 7 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_treeentry_ref01_data = Object.values(setup.data.existing.paginated_treeentry)[0];
        // LIST
        const paginated_treeentry_ref01_ent = client.PaginatedTreeentry();
        const paginated_treeentry_ref01_match = {};
        paginated_treeentry_ref01_match['repo_slug'] = setup.idmap['repo_slug01'];
        paginated_treeentry_ref01_match['workspace'] = setup.idmap['workspace01'];
        const paginated_treeentry_ref01_list = (await paginated_treeentry_ref01_ent.list(paginated_treeentry_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_treeentry/PaginatedTreeentryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_treeentry01', 'paginated_treeentry02', 'paginated_treeentry03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_TREEENTRY_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_TREEENTRY_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_TREEENTRY_ENTID'];
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
//# sourceMappingURL=PaginatedTreeentryEntity.test.js.map