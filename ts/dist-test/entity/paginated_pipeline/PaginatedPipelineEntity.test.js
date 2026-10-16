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
(0, node_test_1.describe)('PaginatedPipelineEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedPipeline();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedPipeline().list({ "repo_slug": 1, "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_pipeline.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "build_number": { "a": true, "h": "Build Number", "n": "build_number", "r": false, "sh": "The build number of the pipeline.", "t": "`$INTEGER`", "key$": "build_number", "index$": 0 }, "build_seconds_used": { "a": true, "h": "Build Seconds Used", "n": "build_seconds_used", "r": false, "sh": "The number of build seconds used by this pipeline.", "t": "`$INTEGER`", "key$": "build_seconds_used", "index$": 1 }, "completed_on": { "a": true, "fo": "date-time", "h": "Completed On", "n": "completed_on", "r": false, "sh": "The timestamp when the Pipeline was completed.", "t": "`$STRING`", "key$": "completed_on", "index$": 2 }, "configuration_sources": { "a": true, "h": "Configuration Sources", "n": "configuration_sources", "r": false, "sh": "An ordered list of sources of the pipeline configuration", "t": "`$ARRAY`", "key$": "configuration_sources", "index$": 3 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "sh": "The timestamp when the pipeline was created.", "t": "`$STRING`", "key$": "created_on", "index$": 4 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The Bitbucket account that was used to create the pipeline.", "t": "`$ANY`", "key$": "creator", "index$": 5 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$ANY`", "key$": "links", "index$": 6 }, "repository": { "a": true, "h": "Repository", "n": "repository", "r": false, "t": "`$ANY`", "key$": "repository", "index$": 7 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$ANY`", "key$": "state", "index$": 8 }, "target": { "a": true, "h": "Target", "n": "target", "r": false, "sh": "The target that the pipeline built.", "t": "`$ANY`", "key$": "target", "index$": 9 }, "trigger": { "a": true, "h": "Trigger", "n": "trigger", "r": false, "sh": "The trigger used for the pipeline.", "t": "`$ANY`", "key$": "trigger", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 11 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The UUID identifying the pipeline.", "t": "`$STRING`", "key$": "uuid", "index$": 12 }, "variables": { "a": true, "h": "Variables", "n": "variables", "r": false, "sh": "The variables for the pipeline.", "t": "`$ARRAY`", "key$": "variables", "index$": 13 } }, "name": "paginated_pipeline", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/pipelines", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "created_on", "or": "created_on", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "creator_uuid", "or": "creator.uuid", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 10, "k": "query", "n": "pagelen", "or": "pagelen", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "target_branch", "or": "target.branch", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "target_commit_hash", "or": "target.commit.hash", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "target_ref_name", "or": "target.ref_name", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "target_ref_type", "or": "target.ref_type", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "target_selector_pattern", "or": "target.selector.pattern", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "target_selector_type", "or": "target.selector.type", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "trigger_type", "or": "trigger_type", "r": false, "t": "`$STRING`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/pipelines", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "paginated_pipeline", "name__orig": "paginated_pipeline", "Name": "PaginatedPipeline", "name_": "paginated_pipeline", "name-": "paginated-pipeline", "NAME": "PAGINATED_PIPELINE", "index$": 40 }, { "active": true, "entity": "paginated_pipeline", "key$": "BasicPaginatedPipelineFlow", "kind": "basic", "name": "BasicPaginatedPipelineFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_pipeline_ref01" } }] }] }, 'PaginatedPipeline', { "GET /repositories/{workspace}/{repo_slug}/pipelines": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "creator.uuid", "description": "The UUID of the creator of the pipeline to filter by.", "required": false, "in": "query", "type": "string", "format": "uuid", "index$": 2 }, { "name": "target.ref_type", "description": "The type of the reference to filter by.", "required": false, "in": "query", "type": "string", "enum": ["BRANCH", "TAG", "ANNOTATED_TAG"], "index$": 3 }, { "name": "target.ref_name", "description": "The reference name to filter by.", "required": false, "in": "query", "type": "string", "index$": 4 }, { "name": "target.branch", "description": "The name of the branch to filter by.", "required": false, "in": "query", "type": "string", "index$": 5 }, { "name": "target.commit.hash", "description": "The revision to filter by.", "required": false, "in": "query", "type": "string", "index$": 6 }, { "name": "target.selector.pattern", "description": "The pipeline pattern to filter by.", "required": false, "in": "query", "type": "string", "index$": 7 }, { "name": "target.selector.type", "description": "The type of pipeline to filter by.", "required": false, "in": "query", "type": "string", "enum": ["BRANCH", "TAG", "CUSTOM", "PULLREQUESTS", "DEFAULT"], "index$": 8 }, { "name": "created_on", "description": "The creation date to filter by.", "required": false, "in": "query", "type": "string", "format": "date-time", "index$": 9 }, { "name": "trigger_type", "description": "The trigger type to filter by.", "required": false, "in": "query", "type": "string", "enum": ["PUSH", "MANUAL", "SCHEDULED", "PARENT_STEP"], "index$": 10 }, { "name": "status", "description": "The pipeline status to filter by.", "required": false, "in": "query", "type": "string", "enum": ["PARSING", "PENDING", "PAUSED", "HALTED", "BUILDING", "ERROR", "PASSED", "FAILED", "STOPPED", "UNKNOWN"], "index$": 11 }, { "name": "sort", "description": "The attribute name to sort on.", "required": false, "in": "query", "type": "string", "enum": ["creator.uuid", "created_on", "run_creation_date"], "index$": 12 }, { "name": "page", "description": "The page number of elements to retrieve.", "required": false, "in": "query", "type": "integer", "format": "int32", "minimum": 1, "default": 1, "index$": 13 }, { "name": "pagelen", "description": "The maximum number of results to return.", "required": false, "in": "query", "type": "integer", "format": "int32", "minimum": 1, "maximum": 100, "default": 10, "index$": 14 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_pipeline_ref01_data = Object.values(setup.data.existing.paginated_pipeline)[0];
        // LIST
        const paginated_pipeline_ref01_ent = client.PaginatedPipeline();
        const paginated_pipeline_ref01_match = {};
        paginated_pipeline_ref01_match['repo_slug'] = setup.idmap['repo_slug01'];
        paginated_pipeline_ref01_match['workspace'] = setup.idmap['workspace01'];
        const paginated_pipeline_ref01_list = (await paginated_pipeline_ref01_ent.list(paginated_pipeline_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_pipeline/PaginatedPipelineTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_pipeline01', 'paginated_pipeline02', 'paginated_pipeline03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_PIPELINE_ENTID'];
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
//# sourceMappingURL=PaginatedPipelineEntity.test.js.map