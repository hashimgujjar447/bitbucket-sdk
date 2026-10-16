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
(0, node_test_1.describe)('PaginatedBranchrestrictionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedBranchrestriction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedBranchrestriction().list({ "repo_slug": 1, "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_branchrestriction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch_match_kind": { "a": true, "h": "Branch Match Kind", "n": "branch_match_kind", "r": true, "sh": "Indicates how the restriction is matched against a branch.", "t": "`$STRING`", "key$": "branch_match_kind", "index$": 0 }, "branch_type": { "a": true, "h": "Branch Type", "n": "branch_type", "r": false, "sh": "Apply the restriction to branches of this type.", "t": "`$STRING`", "key$": "branch_type", "index$": 1 }, "groups": { "a": true, "h": "Groups", "n": "groups", "r": false, "t": "`$ARRAY`", "key$": "groups", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The branch restriction status' id.", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": true, "sh": "The type of restriction that is being applied.", "t": "`$STRING`", "key$": "kind", "index$": 4 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 5 }, "pattern": { "a": true, "h": "Pattern", "n": "pattern", "r": true, "sh": "Apply the restriction to branches that match this pattern.", "t": "`$STRING`", "key$": "pattern", "index$": 6 }, "pipelines_source_branches": { "a": true, "h": "Pipelines Source Branches", "n": "pipelines_source_branches", "r": false, "sh": "List of source branch names allowed to push back to the restricted branch.", "t": "`$ARRAY`", "key$": "pipelines_source_branches", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 8 }, "users": { "a": true, "h": "Users", "n": "users", "r": false, "t": "`$ARRAY`", "key$": "users", "index$": 9 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "sh": "Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR.", "t": "`$INTEGER`", "key$": "value", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "paginated_branchrestriction", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/branch-restrictions", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "kind", "or": "kind", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "pattern", "or": "pattern", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/branch-restrictions", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "branch-restrictions" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "paginated_branchrestriction", "name__orig": "paginated_branchrestriction", "Name": "PaginatedBranchrestriction", "name_": "paginated_branchrestriction", "name-": "paginated-branchrestriction", "NAME": "PAGINATED_BRANCHRESTRICTION", "index$": 25 }, { "active": true, "entity": "paginated_branchrestriction", "key$": "BasicPaginatedBranchrestrictionFlow", "kind": "basic", "name": "BasicPaginatedBranchrestrictionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_branchrestriction_ref01" } }] }] }, 'PaginatedBranchrestriction', { "GET /repositories/{workspace}/{repo_slug}/branch-restrictions": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "kind", "in": "query", "description": "Branch restrictions of this type", "required": false, "type": "string", "index$": 2 }, { "name": "pattern", "in": "query", "description": "Branch restrictions applied to branches of this pattern", "required": false, "type": "string", "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_branchrestriction_ref01_data = Object.values(setup.data.existing.paginated_branchrestriction)[0];
        // LIST
        const paginated_branchrestriction_ref01_ent = client.PaginatedBranchrestriction();
        const paginated_branchrestriction_ref01_match = {};
        paginated_branchrestriction_ref01_match['repo_slug'] = setup.idmap['repo_slug01'];
        paginated_branchrestriction_ref01_match['workspace'] = setup.idmap['workspace01'];
        const paginated_branchrestriction_ref01_list = (await paginated_branchrestriction_ref01_ent.list(paginated_branchrestriction_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_branchrestriction/PaginatedBranchrestrictionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_branchrestriction01', 'paginated_branchrestriction02', 'paginated_branchrestriction03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_BRANCHRESTRICTION_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_BRANCHRESTRICTION_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_BRANCHRESTRICTION_ENTID'];
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
//# sourceMappingURL=PaginatedBranchrestrictionEntity.test.js.map