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
(0, node_test_1.describe)('PaginatedMergeQueuePullrequestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedMergeQueuePullrequest();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedMergeQueuePullrequest().list({ "merge_queue_id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_merge_queue_pullrequest.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "last_activity_on": { "a": true, "fo": "date-time", "h": "Last Activity On", "n": "last_activity_on", "r": false, "t": "`$STRING`", "key$": "last_activity_on", "index$": 0 }, "merge_queue": { "a": true, "h": "Merge Queue", "n": "merge_queue", "r": false, "sh": "A reference to the merge queue holding a pullrequest.", "t": "`$OBJECT`", "key$": "merge_queue", "index$": 1 }, "pipeline": { "a": true, "h": "Pipeline", "n": "pipeline", "r": false, "t": "`$ANY`", "key$": "pipeline", "index$": 2 }, "pullrequest": { "a": true, "h": "Pullrequest", "n": "pullrequest", "r": false, "t": "`$ANY`", "key$": "pullrequest", "index$": 3 }, "queued_on": { "a": true, "fo": "date-time", "h": "Queued On", "n": "queued_on", "r": false, "t": "`$STRING`", "key$": "queued_on", "index$": 4 }, "rank": { "a": true, "h": "Rank", "n": "rank", "r": false, "sh": "The one-based position of the pullrequest in the merge queue.", "t": "`$INTEGER`", "key$": "rank", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "t": "`$STRING`", "key$": "type", "index$": 7 } }, "name": "paginated_merge_queue_pullrequest", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "merge_queue_id", "or": "merge_queue_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "pagelen", "or": "pagelen", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue", "q": { "exist": ["merge_queue_id", "repo_slug", "workspace"] }, "r": { "param": { "merge_queue_uuid": "merge_queue_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "merge-queues" }, { "var": "merge_queue_id" }, { "lit": "queue" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.repository", "$.main.kit.entity.merge_queue"]] }, "key$": "paginated_merge_queue_pullrequest", "name__orig": "paginated_merge_queue_pullrequest", "Name": "PaginatedMergeQueuePullrequest", "name_": "paginated_merge_queue_pullrequest", "name-": "paginated-merge-queue-pullrequest", "NAME": "PAGINATED_MERGE_QUEUE_PULLREQUEST", "index$": 39 }, { "active": true, "entity": "paginated_merge_queue_pullrequest", "key$": "BasicPaginatedMergeQueuePullrequestFlow", "kind": "basic", "name": "BasicPaginatedMergeQueuePullrequestFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "merge_queue_id": "merge_queue01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_merge_queue_pullrequest_ref01" } }] }] }, 'PaginatedMergeQueuePullrequest', { "GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "The workspace containing the repository.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository slug.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "merge_queue_uuid", "description": "The UUID of the merge queue.", "required": true, "in": "path", "type": "string", "format": "uuid", "index$": 2 }, { "name": "page", "description": "The page number of elements to retrieve.", "required": false, "in": "query", "type": "integer", "format": "int32", "minimum": 1, "default": 1, "index$": 3 }, { "name": "pagelen", "description": "The maximum number of results to return.", "required": false, "in": "query", "type": "integer", "format": "int32", "minimum": 1, "maximum": 100, "default": 10, "index$": 4 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_merge_queue_pullrequest_ref01_data = Object.values(setup.data.existing.paginated_merge_queue_pullrequest)[0];
        // LIST
        const paginated_merge_queue_pullrequest_ref01_ent = client.PaginatedMergeQueuePullrequest();
        const paginated_merge_queue_pullrequest_ref01_match = {};
        paginated_merge_queue_pullrequest_ref01_match['merge_queue_id'] = setup.idmap['merge_queue01'];
        paginated_merge_queue_pullrequest_ref01_match['repo_slug'] = setup.idmap['repo_slug01'];
        paginated_merge_queue_pullrequest_ref01_match['workspace'] = setup.idmap['workspace01'];
        const paginated_merge_queue_pullrequest_ref01_list = (await paginated_merge_queue_pullrequest_ref01_ent.list(paginated_merge_queue_pullrequest_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_merge_queue_pullrequest/PaginatedMergeQueuePullrequestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_merge_queue_pullrequest01', 'paginated_merge_queue_pullrequest02', 'paginated_merge_queue_pullrequest03', 'repository01', 'repository02', 'repository03', 'merge_queue01', 'merge_queue02', 'merge_queue03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_PULLREQUEST_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_PULLREQUEST_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_MERGE_QUEUE_PULLREQUEST_ENTID'];
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
//# sourceMappingURL=PaginatedMergeQueuePullrequestEntity.test.js.map