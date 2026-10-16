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
(0, node_test_1.describe)('PaginatedReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedReport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedReport().list({ "commit_id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "sh": "The timestamp when the report was created.", "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "An array of data fields to display information on the report.", "t": "`$ARRAY`", "key$": "data", "index$": 1 }, "details": { "a": true, "h": "Details", "n": "details", "r": false, "sh": "A string to describe the purpose of the report.", "t": "`$STRING`", "key$": "details", "index$": 2 }, "external_id": { "a": true, "h": "External Id", "n": "external_id", "r": false, "sh": "ID of the report provided by the report creator.", "t": "`$STRING`", "key$": "external_id", "index$": 3 }, "link": { "a": true, "fo": "uri", "h": "Link", "n": "link", "r": false, "sh": "A URL linking to the results of the report in an external tool.", "t": "`$STRING`", "key$": "link", "index$": 4 }, "logo_url": { "a": true, "fo": "uri", "h": "Logo Url", "n": "logo_url", "r": false, "sh": "A URL to the report logo.", "t": "`$STRING`", "key$": "logo_url", "index$": 5 }, "remote_link_enabled": { "a": true, "h": "Remote Link Enabled", "n": "remote_link_enabled", "r": false, "sh": "If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to.", "t": "`$BOOLEAN`", "key$": "remote_link_enabled", "index$": 6 }, "report_type": { "a": true, "h": "Report Type", "n": "report_type", "r": false, "sh": "The type of the report.", "t": "`$STRING`", "key$": "report_type", "index$": 7 }, "reporter": { "a": true, "h": "Reporter", "n": "reporter", "r": false, "sh": "A string to describe the tool or company who created the report.", "t": "`$STRING`", "key$": "reporter", "index$": 8 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "sh": "The state of the report.", "t": "`$STRING`", "key$": "result", "index$": 9 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "The title of the report.", "t": "`$STRING`", "key$": "title", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 11 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": false, "sh": "The timestamp when the report was updated.", "t": "`$STRING`", "key$": "updated_on", "index$": 12 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The UUID that can be used to identify the report.", "t": "`$STRING`", "key$": "uuid", "index$": 13 } }, "name": "paginated_report", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", "q": { "exist": ["commit_id", "repo_slug", "workspace"] }, "r": { "param": { "commit": "commit_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "reports" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.repository", "$.main.kit.entity.commit"]] }, "key$": "paginated_report", "name__orig": "paginated_report", "Name": "PaginatedReport", "name_": "paginated_report", "name-": "paginated-report", "NAME": "PAGINATED_REPORT", "index$": 55 }, { "active": true, "entity": "paginated_report", "key$": "BasicPaginatedReportFlow", "kind": "basic", "name": "BasicPaginatedReportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "commit_id": "commit01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_report_ref01" } }] }] }, 'PaginatedReport', { "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "commit", "description": "The commit for which to retrieve reports.", "required": true, "in": "path", "type": "string", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_report_ref01_data = Object.values(setup.data.existing.paginated_report)[0];
        // LIST
        const paginated_report_ref01_ent = client.PaginatedReport();
        const paginated_report_ref01_match = {};
        paginated_report_ref01_match['commit_id'] = setup.idmap['commit01'];
        paginated_report_ref01_match['repo_slug'] = setup.idmap['repo_slug01'];
        paginated_report_ref01_match['workspace'] = setup.idmap['workspace01'];
        const paginated_report_ref01_list = (await paginated_report_ref01_ent.list(paginated_report_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_report/PaginatedReportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_report01', 'paginated_report02', 'paginated_report03', 'repository01', 'repository02', 'repository03', 'commit01', 'commit02', 'commit03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_REPORT_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_REPORT_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_REPORT_ENTID'];
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
//# sourceMappingURL=PaginatedReportEntity.test.js.map