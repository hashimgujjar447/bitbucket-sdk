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
(0, node_test_1.describe)('ReportAnnotationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.ReportAnnotation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ReportAnnotation().load({ "commit_id": 1, "id": "x", "repo_slug": "x", "report_id": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'report_annotation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "annotation_type": { "a": true, "h": "Annotation Type", "n": "annotation_type", "r": false, "sh": "The type of the report.", "t": "`$STRING`", "key$": "annotation_type", "index$": 0 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "sh": "The timestamp when the report was created.", "t": "`$STRING`", "key$": "created_on", "index$": 1 }, "details": { "a": true, "h": "Details", "n": "details", "r": false, "sh": "The details to show to users when clicking on the annotation.", "t": "`$STRING`", "key$": "details", "index$": 2 }, "external_id": { "a": true, "h": "External Id", "n": "external_id", "r": false, "sh": "ID of the annotation provided by the annotation creator.", "t": "`$STRING`", "key$": "external_id", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "line": { "a": true, "h": "Line", "n": "line", "r": false, "sh": "The line number that the annotation should belong to.", "t": "`$INTEGER`", "key$": "line", "index$": 5 }, "link": { "a": true, "fo": "uri", "h": "Link", "n": "link", "r": false, "sh": "A URL linking to the annotation in an external tool.", "t": "`$STRING`", "key$": "link", "index$": 6 }, "path": { "a": true, "h": "Path", "n": "path", "r": false, "sh": "The path of the file on which this annotation should be placed.", "t": "`$STRING`", "key$": "path", "index$": 7 }, "report_annotations": { "a": true, "h": "Report Annotations", "n": "report_annotations", "r": false, "sh": "The annotations to create or update", "t": "`$ARRAY`", "key$": "report_annotations", "index$": 8 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "sh": "The state of the report.", "t": "`$STRING`", "key$": "result", "index$": 9 }, "severity": { "a": true, "h": "Severity", "n": "severity", "r": false, "sh": "The severity of the annotation.", "t": "`$STRING`", "key$": "severity", "index$": 10 }, "summary": { "a": true, "h": "Summary", "n": "summary", "r": false, "sh": "The message to display to users.", "t": "`$STRING`", "key$": "summary", "index$": 11 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 12 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": false, "sh": "The timestamp when the report was updated.", "t": "`$STRING`", "key$": "updated_on", "index$": 13 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The UUID that can be used to identify the annotation.", "t": "`$STRING`", "key$": "uuid", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "report_annotation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["report_annotations"], "co": { "id": "POST /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "reportId", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", "q": { "exist": ["commit_id", "id", "repo_slug", "report_annotations", "workspace"] }, "r": { "param": { "commit": "commit_id", "reportId": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "reports" }, { "var": "id" }, { "lit": "annotations" }], "t": { "req": "`reqdata.report_annotations`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "annotationId", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "report_id", "or": "reportId", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", "q": { "exist": ["commit_id", "id", "repo_slug", "report_id", "workspace"] }, "r": { "param": { "annotationId": "id", "commit": "commit_id", "reportId": "report_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "reports" }, { "var": "report_id" }, { "lit": "annotations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["annotation_type", "created_on", "details", "external_id", "line", "link", "path", "result", "severity", "summary", "type", "updated_on", "uuid"], "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "commit_id", "or": "commit", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "annotationId", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "report_id", "or": "reportId", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", "q": { "exist": ["commit_id", "id", "repo_slug", "report_id", "workspace"] }, "r": { "param": { "annotationId": "id", "commit": "commit_id", "reportId": "report_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit_id" }, { "lit": "reports" }, { "var": "report_id" }, { "lit": "annotations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository", "$.main.kit.entity.commit"], ["$.main.kit.entity.repository", "$.main.kit.entity.commit", "$.main.kit.entity.report"]] }, "key$": "report_annotation", "name__orig": "report_annotation", "Name": "ReportAnnotation", "name_": "report_annotation", "name-": "report-annotation", "NAME": "REPORT_ANNOTATION", "index$": 92 }, { "active": true, "entity": "report_annotation", "key$": "BasicReportAnnotationFlow", "kind": "basic", "name": "BasicReportAnnotationFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "report_annotation_ref01" }, "m": { "commit_id": "commit01", "repo_slug": "repo_slug01", "report_id": "report01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": true, "d": { "commit_id": "commit01", "repo_slug": "repo_slug01", "report_id": "report01", "workspace": "workspace01" }, "i": { "ref": "report_annotation_ref01", "srcdatavar": "report_annotation_ref01_data", "suffix": "_up0", "textfield": "annotation_type" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-report_annotation_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "report_annotation_ref01", "srcdatavar": "report_annotation_ref01_data", "suffix": "_dt0" }, "m": { "commit_id": "commit01", "id": "report_annotation01", "repo_slug": "repo_slug01", "report_id": "report01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-report_annotation_ref01" } }] }] }, 'ReportAnnotation', { "POST /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "commit", "description": "The commit for which to retrieve reports.", "required": true, "in": "path", "type": "string", "index$": 2 }, { "name": "reportId", "description": "Uuid or external-if of the report for which to get annotations for.", "required": true, "in": "path", "type": "string", "index$": 3 }, { "name": "_body", "in": "body", "description": "The annotations to create or update", "required": true, "schema": { "type": "array", "items": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Report Annotation", "description": "A report for a commit.", "properties": { "external_id": { "type": "string", "description": "ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.", "key$": "external_id" }, "uuid": { "type": "string", "description": "The UUID that can be used to identify the annotation.", "key$": "uuid" }, "annotation_type": { "enum": ["VULNERABILITY", "CODE_SMELL", "BUG"], "type": "string", "description": "The type of the report.", "key$": "annotation_type" }, "path": { "type": "string", "description": "The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified.", "key$": "path" }, "line": { "type": "integer", "description": "The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.", "minimum": 1, "key$": "line" }, "summary": { "type": "string", "description": "The message to display to users.", "key$": "summary" }, "details": { "type": "string", "description": "The details to show to users when clicking on the annotation.", "key$": "details" }, "result": { "enum": ["PASSED", "FAILED", "SKIPPED", "IGNORED"], "type": "string", "description": "The state of the report. May be set to PENDING and later updated.", "key$": "result" }, "severity": { "enum": ["CRITICAL", "HIGH", "MEDIUM", "LOW"], "type": "string", "description": "The severity of the annotation.", "key$": "severity" }, "link": { "type": "string", "format": "uri", "description": "A URL linking to the annotation in an external tool.", "key$": "link" }, "created_on": { "type": "string", "format": "date-time", "description": "The timestamp when the report was created.", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "description": "The timestamp when the report was updated.", "key$": "updated_on" } } }], "x-bb-default-fields": ["uuid"], "x-bb-url": "/rest/2.0/accounts/{workspace.uuid}/repositories/{repository.uuid}/commits/{commit.hash}/reports/{reportUuid}/annotations/{uuid}", "x-ref": "#/definitions/report_annotation" }, "minItems": 1, "maxItems": 100, "index$": 1 }, "index$": 4 }] }, "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "commit", "description": "The commit the report belongs to.", "required": true, "in": "path", "type": "string", "index$": 2 }, { "name": "reportId", "description": "Either the uuid or external-id of the report.", "required": true, "in": "path", "type": "string", "index$": 3 }, { "name": "annotationId", "description": "Either the uuid or external-id of the annotation.", "required": true, "in": "path", "type": "string", "index$": 4 }] }, "PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "commit", "description": "The commit the report belongs to.", "required": true, "in": "path", "type": "string", "index$": 2 }, { "name": "reportId", "description": "Either the uuid or external-id of the report.", "required": true, "in": "path", "type": "string", "index$": 3 }, { "name": "annotationId", "description": "Either the uuid or external-id of the annotation.", "required": true, "in": "path", "type": "string", "index$": 4 }, { "name": "_body", "in": "body", "description": "The annotation to create or update", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Report Annotation", "description": "A report for a commit.", "properties": { "external_id": { "type": "string", "description": "ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.", "key$": "external_id" }, "uuid": { "type": "string", "description": "The UUID that can be used to identify the annotation.", "key$": "uuid" }, "annotation_type": { "enum": ["VULNERABILITY", "CODE_SMELL", "BUG"], "type": "string", "description": "The type of the report.", "key$": "annotation_type" }, "path": { "type": "string", "description": "The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified.", "key$": "path" }, "line": { "type": "integer", "description": "The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.", "minimum": 1, "key$": "line" }, "summary": { "type": "string", "description": "The message to display to users.", "key$": "summary" }, "details": { "type": "string", "description": "The details to show to users when clicking on the annotation.", "key$": "details" }, "result": { "enum": ["PASSED", "FAILED", "SKIPPED", "IGNORED"], "type": "string", "description": "The state of the report. May be set to PENDING and later updated.", "key$": "result" }, "severity": { "enum": ["CRITICAL", "HIGH", "MEDIUM", "LOW"], "type": "string", "description": "The severity of the annotation.", "key$": "severity" }, "link": { "type": "string", "format": "uri", "description": "A URL linking to the annotation in an external tool.", "key$": "link" }, "created_on": { "type": "string", "format": "date-time", "description": "The timestamp when the report was created.", "key$": "created_on" }, "updated_on": { "type": "string", "format": "date-time", "description": "The timestamp when the report was updated.", "key$": "updated_on" } } }], "x-bb-default-fields": ["uuid"], "x-bb-url": "/rest/2.0/accounts/{workspace.uuid}/repositories/{repository.uuid}/commits/{commit.hash}/reports/{reportUuid}/annotations/{uuid}", "x-ref": "#/definitions/report_annotation", "index$": 1 }, "index$": 5 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let report_annotation_ref01_data = Object.values(setup.data.existing.report_annotation)[0];
        // UPDATE
        const report_annotation_ref01_ent = client.ReportAnnotation();
        const report_annotation_ref01_data_up0 = {};
        report_annotation_ref01_data_up0.id = report_annotation_ref01_data.id;
        report_annotation_ref01_data_up0['commit_id'] = setup.idmap['commit_id'] ?? setup.idmap['commit01'];
        report_annotation_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        report_annotation_ref01_data_up0['report_id'] = setup.idmap['report_id'] ?? setup.idmap['report01'];
        report_annotation_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const report_annotation_ref01_markdef_up0 = { name: 'annotation_type', value: 'Mark01-report_annotation_ref01_' + setup.now };
        report_annotation_ref01_data_up0[report_annotation_ref01_markdef_up0.name] = report_annotation_ref01_markdef_up0.value;
        const report_annotation_ref01_resdata_up0 = (await report_annotation_ref01_ent.update(report_annotation_ref01_data_up0)).data();
        (0, node_assert_1.default)(report_annotation_ref01_resdata_up0.id === report_annotation_ref01_data_up0.id);
        (0, node_assert_1.default)(report_annotation_ref01_resdata_up0[report_annotation_ref01_markdef_up0.name] === report_annotation_ref01_markdef_up0.value);
        // LOAD
        const report_annotation_ref01_match_dt0 = {};
        report_annotation_ref01_match_dt0.id = report_annotation_ref01_data.id;
        report_annotation_ref01_match_dt0['commit_id'] = setup.idmap['commit_id'] ?? setup.idmap['commit01'];
        report_annotation_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        report_annotation_ref01_match_dt0['report_id'] = setup.idmap['report_id'] ?? setup.idmap['report01'];
        report_annotation_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const report_annotation_ref01_data_dt0 = (await report_annotation_ref01_ent.load(report_annotation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(report_annotation_ref01_data_dt0.id === report_annotation_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/report_annotation/ReportAnnotationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['report_annotation01', 'report_annotation02', 'report_annotation03', 'repository01', 'repository02', 'repository03', 'commit01', 'commit02', 'commit03', 'report01', 'report02', 'report03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_REPORT_ANNOTATION_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_REPORT_ANNOTATION_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_REPORT_ANNOTATION_ENTID'];
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
//# sourceMappingURL=ReportAnnotationEntity.test.js.map