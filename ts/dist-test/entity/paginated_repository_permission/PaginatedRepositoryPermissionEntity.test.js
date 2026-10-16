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
(0, node_test_1.describe)('PaginatedRepositoryPermissionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedRepositoryPermission();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedRepositoryPermission().list({ "workspace_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_repository_permission.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "next": { "a": true, "fo": "uri", "h": "Next", "n": "next", "r": false, "sh": "Link to the next page if it exists.", "t": "`$STRING`", "key$": "next", "index$": 0 }, "page": { "a": true, "h": "Page", "n": "page", "r": false, "sh": "Page number of the current results.", "t": "`$INTEGER`", "key$": "page", "index$": 1 }, "pagelen": { "a": true, "h": "Pagelen", "n": "pagelen", "r": false, "sh": "Current number of objects on the existing page.", "t": "`$INTEGER`", "key$": "pagelen", "index$": 2 }, "permission": { "a": true, "h": "Permission", "n": "permission", "r": false, "t": "`$STRING`", "key$": "permission", "index$": 3 }, "previous": { "a": true, "fo": "uri", "h": "Previous", "n": "previous", "r": false, "sh": "Link to previous page if it exists.", "t": "`$STRING`", "key$": "previous", "index$": 4 }, "repository": { "a": true, "h": "Repository", "n": "repository", "r": false, "t": "`$ANY`", "key$": "repository", "index$": 5 }, "size": { "a": true, "h": "Size", "n": "size", "r": false, "sh": "Total number of objects in the response.", "t": "`$INTEGER`", "key$": "size", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 7 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "t": "`$ANY`", "key$": "user", "index$": 8 }, "values": { "a": true, "h": "Values", "n": "values", "r": false, "t": "`$ARRAY`", "key$": "values", "index$": 9 } }, "name": "paginated_repository_permission", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /user/workspaces/{workspace}/permissions/repositories", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/user/workspaces/{workspace}/permissions/repositories", "q": { "exist": ["workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "user" }, { "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "permissions" }, { "lit": "repositories" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /workspaces/{workspace}/permissions/repositories", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/permissions/repositories", "q": { "exist": ["workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "permissions" }, { "lit": "repositories" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /workspaces/{workspace}/permissions/repositories/{repo_slug}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/permissions/repositories/{repo_slug}", "q": { "exist": ["repo_slug", "workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "permissions" }, { "lit": "repositories" }, { "var": "repo_slug" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"], ["$.main.kit.entity.workspace", "$.main.kit.entity.repository"]] }, "key$": "paginated_repository_permission", "name__orig": "paginated_repository_permission", "Name": "PaginatedRepositoryPermission", "name_": "paginated_repository_permission", "name-": "paginated-repository-permission", "NAME": "PAGINATED_REPOSITORY_PERMISSION", "index$": 58 }, { "active": true, "entity": "paginated_repository_permission", "key$": "BasicPaginatedRepositoryPermissionFlow", "kind": "basic", "name": "BasicPaginatedRepositoryPermissionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "workspace_id": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_repository_permission_ref01" } }] }, { "a": false, "d": {}, "i": { "ref": "paginated_repository_permission_ref01", "srcdatavar": "paginated_repository_permission_ref01_data", "suffix": "_dt0" }, "m": { "id": "paginated_repository_permission01", "workspace_id": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-paginated_repository_permission_ref01" } }], "unreachable": true }] }, 'PaginatedRepositoryPermission', { "GET /user/workspaces/{workspace}/permissions/repositories": { "protocol": "http", "parameters": [{ "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "q", "in": "query", "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).", "required": false, "type": "string", "index$": 1 }, { "name": "sort", "in": "query", "description": "\nName of a response property sort the result by as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).", "required": false, "type": "string", "index$": 2 }] }, "GET /workspaces/{workspace}/permissions/repositories": { "protocol": "http", "parameters": [{ "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "q", "in": "query", "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).", "required": false, "type": "string", "index$": 1 }, { "name": "sort", "in": "query", "description": "\nName of a response property sort the result by as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).\n", "required": false, "type": "string", "index$": 2 }] }, "GET /workspaces/{workspace}/permissions/repositories/{repo_slug}": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "q", "in": "query", "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).", "required": false, "type": "string", "index$": 2 }, { "name": "sort", "in": "query", "description": "\nName of a response property sort the result by as per\n[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).\n", "required": false, "type": "string", "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_repository_permission_ref01_data = Object.values(setup.data.existing.paginated_repository_permission)[0];
        // LIST
        const paginated_repository_permission_ref01_ent = client.PaginatedRepositoryPermission();
        const paginated_repository_permission_ref01_match = {};
        paginated_repository_permission_ref01_match['workspace_id'] = setup.idmap['workspace01'];
        const paginated_repository_permission_ref01_list = (await paginated_repository_permission_ref01_ent.list(paginated_repository_permission_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_repository_permission/PaginatedRepositoryPermissionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_repository_permission01', 'paginated_repository_permission02', 'paginated_repository_permission03', 'workspace01', 'workspace02', 'workspace03', 'repository01', 'repository02', 'repository03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_REPOSITORY_PERMISSION_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_REPOSITORY_PERMISSION_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_REPOSITORY_PERMISSION_ENTID'];
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
//# sourceMappingURL=PaginatedRepositoryPermissionEntity.test.js.map