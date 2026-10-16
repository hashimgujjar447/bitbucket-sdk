// BitbucketSdk Ts SDK

import { AddonEntity } from './entity/AddonEntity'
import { ApplicationPropertyEntity } from './entity/ApplicationPropertyEntity'
import { ApproveEntity } from './entity/ApproveEntity'
import { BranchEntity } from './entity/BranchEntity'
import { BranchingModelEntity } from './entity/BranchingModelEntity'
import { BranchingModelSettingEntity } from './entity/BranchingModelSettingEntity'
import { BranchrestrictionEntity } from './entity/BranchrestrictionEntity'
import { CommentResolutionEntity } from './entity/CommentResolutionEntity'
import { CommitEntity } from './entity/CommitEntity'
import { CommitstatusEntity } from './entity/CommitstatusEntity'
import { DefaultReviewerEntity } from './entity/DefaultReviewerEntity'
import { DeployKeyEntity } from './entity/DeployKeyEntity'
import { DeploymentEntity } from './entity/DeploymentEntity'
import { DeploymentEnvironmentEntity } from './entity/DeploymentEnvironmentEntity'
import { DeploymentVariableEntity } from './entity/DeploymentVariableEntity'
import { DownloadEntity } from './entity/DownloadEntity'
import { EffectiveDefaultReviewerEntity } from './entity/EffectiveDefaultReviewerEntity'
import { EffectiveRepoBranchingModelEntity } from './entity/EffectiveRepoBranchingModelEntity'
import { GpgEntity } from './entity/GpgEntity'
import { GpgAccountKeyEntity } from './entity/GpgAccountKeyEntity'
import { MergeQueueEntity } from './entity/MergeQueueEntity'
import { MergeQueuePullrequestEntity } from './entity/MergeQueuePullrequestEntity'
import { PaginatedAccountEntity } from './entity/PaginatedAccountEntity'
import { PaginatedAnnotationEntity } from './entity/PaginatedAnnotationEntity'
import { PaginatedBranchEntity } from './entity/PaginatedBranchEntity'
import { PaginatedBranchrestrictionEntity } from './entity/PaginatedBranchrestrictionEntity'
import { PaginatedChangesetEntity } from './entity/PaginatedChangesetEntity'
import { PaginatedCommitstatusEntity } from './entity/PaginatedCommitstatusEntity'
import { PaginatedDefaultReviewerAndTypeEntity } from './entity/PaginatedDefaultReviewerAndTypeEntity'
import { PaginatedDeployKeyEntity } from './entity/PaginatedDeployKeyEntity'
import { PaginatedDeploymentEntity } from './entity/PaginatedDeploymentEntity'
import { PaginatedDeploymentVariableEntity } from './entity/PaginatedDeploymentVariableEntity'
import { PaginatedDiffstatEntity } from './entity/PaginatedDiffstatEntity'
import { PaginatedEnvironmentEntity } from './entity/PaginatedEnvironmentEntity'
import { PaginatedFileEntity } from './entity/PaginatedFileEntity'
import { PaginatedFileConflictEntity } from './entity/PaginatedFileConflictEntity'
import { PaginatedGpgUserKeyEntity } from './entity/PaginatedGpgUserKeyEntity'
import { PaginatedHookEventEntity } from './entity/PaginatedHookEventEntity'
import { PaginatedMergeQueueEntity } from './entity/PaginatedMergeQueueEntity'
import { PaginatedMergeQueuePullrequestEntity } from './entity/PaginatedMergeQueuePullrequestEntity'
import { PaginatedPipelineEntity } from './entity/PaginatedPipelineEntity'
import { PaginatedPipelineCacheEntity } from './entity/PaginatedPipelineCacheEntity'
import { PaginatedPipelineKnownHostEntity } from './entity/PaginatedPipelineKnownHostEntity'
import { PaginatedPipelineRunnerEntity } from './entity/PaginatedPipelineRunnerEntity'
import { PaginatedPipelineScheduleEntity } from './entity/PaginatedPipelineScheduleEntity'
import { PaginatedPipelineScheduleExecutionEntity } from './entity/PaginatedPipelineScheduleExecutionEntity'
import { PaginatedPipelineStepEntity } from './entity/PaginatedPipelineStepEntity'
import { PaginatedPipelineVariableEntity } from './entity/PaginatedPipelineVariableEntity'
import { PaginatedProjectEntity } from './entity/PaginatedProjectEntity'
import { PaginatedProjectDeployKeyEntity } from './entity/PaginatedProjectDeployKeyEntity'
import { PaginatedProjectGroupPermissionEntity } from './entity/PaginatedProjectGroupPermissionEntity'
import { PaginatedProjectUserPermissionEntity } from './entity/PaginatedProjectUserPermissionEntity'
import { PaginatedPullrequestEntity } from './entity/PaginatedPullrequestEntity'
import { PaginatedPullrequestCommentEntity } from './entity/PaginatedPullrequestCommentEntity'
import { PaginatedRefEntity } from './entity/PaginatedRefEntity'
import { PaginatedReportEntity } from './entity/PaginatedReportEntity'
import { PaginatedRepositoryEntity } from './entity/PaginatedRepositoryEntity'
import { PaginatedRepositoryGroupPermissionEntity } from './entity/PaginatedRepositoryGroupPermissionEntity'
import { PaginatedRepositoryPermissionEntity } from './entity/PaginatedRepositoryPermissionEntity'
import { PaginatedRepositoryUserPermissionEntity } from './entity/PaginatedRepositoryUserPermissionEntity'
import { PaginatedSnippetEntity } from './entity/PaginatedSnippetEntity'
import { PaginatedSnippetCommentEntity } from './entity/PaginatedSnippetCommentEntity'
import { PaginatedSnippetCommitEntity } from './entity/PaginatedSnippetCommitEntity'
import { PaginatedSshUserKeyEntity } from './entity/PaginatedSshUserKeyEntity'
import { PaginatedTagEntity } from './entity/PaginatedTagEntity'
import { PaginatedTaskEntity } from './entity/PaginatedTaskEntity'
import { PaginatedTreeentryEntity } from './entity/PaginatedTreeentryEntity'
import { PaginatedWebhookSubscriptionEntity } from './entity/PaginatedWebhookSubscriptionEntity'
import { PaginatedWorkspaceAccessEntity } from './entity/PaginatedWorkspaceAccessEntity'
import { PaginatedWorkspaceMembershipEntity } from './entity/PaginatedWorkspaceMembershipEntity'
import { PipelineEntity } from './entity/PipelineEntity'
import { PipelineBuildNumberEntity } from './entity/PipelineBuildNumberEntity'
import { PipelineCacheContentUriEntity } from './entity/PipelineCacheContentUriEntity'
import { PipelineKnownHostEntity } from './entity/PipelineKnownHostEntity'
import { PipelineRunnerEntity } from './entity/PipelineRunnerEntity'
import { PipelineScheduleEntity } from './entity/PipelineScheduleEntity'
import { PipelineSshKeyPairEntity } from './entity/PipelineSshKeyPairEntity'
import { PipelineStepEntity } from './entity/PipelineStepEntity'
import { PipelineVariableEntity } from './entity/PipelineVariableEntity'
import { PipelinesConfigEntity } from './entity/PipelinesConfigEntity'
import { ProjectEntity } from './entity/ProjectEntity'
import { ProjectBranchingModelEntity } from './entity/ProjectBranchingModelEntity'
import { ProjectDeployKeyEntity } from './entity/ProjectDeployKeyEntity'
import { ProjectGroupPermissionEntity } from './entity/ProjectGroupPermissionEntity'
import { ProjectUserPermissionEntity } from './entity/ProjectUserPermissionEntity'
import { PropertyEntity } from './entity/PropertyEntity'
import { PullrequestEntity } from './entity/PullrequestEntity'
import { PullrequestCommentEntity } from './entity/PullrequestCommentEntity'
import { PullrequestCommentTaskEntity } from './entity/PullrequestCommentTaskEntity'
import { PullrequestMergeabilityCheckEntity } from './entity/PullrequestMergeabilityCheckEntity'
import { RefEntity } from './entity/RefEntity'
import { ReportEntity } from './entity/ReportEntity'
import { ReportAnnotationEntity } from './entity/ReportAnnotationEntity'
import { RepositoryEntity } from './entity/RepositoryEntity'
import { RepositoryGroupPermissionEntity } from './entity/RepositoryGroupPermissionEntity'
import { RepositoryInheritanceStateEntity } from './entity/RepositoryInheritanceStateEntity'
import { RepositoryUserPermissionEntity } from './entity/RepositoryUserPermissionEntity'
import { RequestChangeEntity } from './entity/RequestChangeEntity'
import { SearchResultPageEntity } from './entity/SearchResultPageEntity'
import { SnippetEntity } from './entity/SnippetEntity'
import { SnippetCommentEntity } from './entity/SnippetCommentEntity'
import { SnippetCommitEntity } from './entity/SnippetCommitEntity'
import { SourceEntity } from './entity/SourceEntity'
import { SshEntity } from './entity/SshEntity'
import { SshAccountKeyEntity } from './entity/SshAccountKeyEntity'
import { TagEntity } from './entity/TagEntity'
import { UserEntity } from './entity/UserEntity'
import { WatcherEntity } from './entity/WatcherEntity'
import { WebhookSubscriptionEntity } from './entity/WebhookSubscriptionEntity'
import { WorkspaceEntity } from './entity/WorkspaceEntity'
import { WorkspaceMembershipEntity } from './entity/WorkspaceMembershipEntity'

export type * from './BitbucketSdkTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { BitbucketSdkEntityBase } from './BitbucketSdkEntityBase'
import { Utility } from './utility/Utility'
import { unreadableBody } from './utility/ResultBodyUtility'
import { abortError } from './utility/MakeRequestUtility'
import { allowed } from './utility/PrepareMethodUtility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


// A request's outcome: ok is false alone on an error with no response, so a
// caller narrowing on it reaches the status and the data.
type DirectResult =
  | { ok: false, err: any, status?: undefined, headers?: undefined, data?: undefined }
  | { ok: boolean, status: number, headers: any, data: any, err?: any }


class BitbucketSdkSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options
    const method = String(fetchargs.method || 'GET').toUpperCase()

    if (!allowed(options.allow.method, method)) {
      return ctx.error('spec_method_allow', 'Method "' + method +
        '" not allowed by SDK option allow.method value: "' + options.allow.method + '"')
    }

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method,
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any): Promise<DirectResult> {
    if (!allowed(this._options.allow.op, 'direct')) {
      return {
        ok: false,
        err: new Error('BitbucketSdkSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any): Promise<DirectResult> {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return { ok: false, err: utility.clean(this._rootctx, fetchdef) }
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      if (true === fetchdef.signal?.aborted) {
        throw fetchdef.signal.reason
      }

      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, abortError(ctx, fetched)) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      let err: any = undefined
      if (!noBody) {
        let text: any = undefined
        try {
          const raw: any = fetched
          if ('function' === typeof raw.text) {
            text = await raw.text()
            json = '' === text.trim() ? undefined : JSON.parse(text)
          }
          else {
            json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
          }
        }
        catch (parseErr: any) {
          if ('SyntaxError' !== parseErr?.name) {
            throw parseErr
          }
          err = unreadableBody(ctx, {
            status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
            failed: 200 <= status && status < 300 ? undefined :
              ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
          })
        }
      }

      return {
        ok: null == err && status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
        ...(null == err ? {} : { err: utility.clean(ctx, err) }),
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, abortError(ctx, err)) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!allowed(options.allow.op, 'graphql')) {
      return {
        ok: false,
        err: new Error('BitbucketSdkSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('BitbucketSdkSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Addon().list()` / `client.Addon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Addon(entopts?: Record<string, any>) {
    const self = this
    return new AddonEntity(self, entopts)
  }


  // Entity access: `client.ApplicationProperty().list()` / `client.ApplicationProperty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApplicationProperty(entopts?: Record<string, any>) {
    const self = this
    return new ApplicationPropertyEntity(self, entopts)
  }


  // Entity access: `client.Approve().list()` / `client.Approve().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Approve(entopts?: Record<string, any>) {
    const self = this
    return new ApproveEntity(self, entopts)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branch(entopts?: Record<string, any>) {
    const self = this
    return new BranchEntity(self, entopts)
  }


  // Entity access: `client.BranchingModel().list()` / `client.BranchingModel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchingModel(entopts?: Record<string, any>) {
    const self = this
    return new BranchingModelEntity(self, entopts)
  }


  // Entity access: `client.BranchingModelSetting().list()` / `client.BranchingModelSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchingModelSetting(entopts?: Record<string, any>) {
    const self = this
    return new BranchingModelSettingEntity(self, entopts)
  }


  // Entity access: `client.Branchrestriction().list()` / `client.Branchrestriction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branchrestriction(entopts?: Record<string, any>) {
    const self = this
    return new BranchrestrictionEntity(self, entopts)
  }


  // Entity access: `client.CommentResolution().list()` / `client.CommentResolution().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommentResolution(entopts?: Record<string, any>) {
    const self = this
    return new CommentResolutionEntity(self, entopts)
  }


  // Entity access: `client.Commit().list()` / `client.Commit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Commit(entopts?: Record<string, any>) {
    const self = this
    return new CommitEntity(self, entopts)
  }


  // Entity access: `client.Commitstatus().list()` / `client.Commitstatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Commitstatus(entopts?: Record<string, any>) {
    const self = this
    return new CommitstatusEntity(self, entopts)
  }


  // Entity access: `client.DefaultReviewer().list()` / `client.DefaultReviewer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DefaultReviewer(entopts?: Record<string, any>) {
    const self = this
    return new DefaultReviewerEntity(self, entopts)
  }


  // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeployKey(entopts?: Record<string, any>) {
    const self = this
    return new DeployKeyEntity(self, entopts)
  }


  // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deployment(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentEntity(self, entopts)
  }


  // Entity access: `client.DeploymentEnvironment().list()` / `client.DeploymentEnvironment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentEnvironment(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentEnvironmentEntity(self, entopts)
  }


  // Entity access: `client.DeploymentVariable().list()` / `client.DeploymentVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentVariable(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentVariableEntity(self, entopts)
  }


  // Entity access: `client.Download().list()` / `client.Download().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Download(entopts?: Record<string, any>) {
    const self = this
    return new DownloadEntity(self, entopts)
  }


  // Entity access: `client.EffectiveDefaultReviewer().list()` / `client.EffectiveDefaultReviewer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EffectiveDefaultReviewer(entopts?: Record<string, any>) {
    const self = this
    return new EffectiveDefaultReviewerEntity(self, entopts)
  }


  // Entity access: `client.EffectiveRepoBranchingModel().list()` / `client.EffectiveRepoBranchingModel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EffectiveRepoBranchingModel(entopts?: Record<string, any>) {
    const self = this
    return new EffectiveRepoBranchingModelEntity(self, entopts)
  }


  // Entity access: `client.Gpg().list()` / `client.Gpg().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gpg(entopts?: Record<string, any>) {
    const self = this
    return new GpgEntity(self, entopts)
  }


  // Entity access: `client.GpgAccountKey().list()` / `client.GpgAccountKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GpgAccountKey(entopts?: Record<string, any>) {
    const self = this
    return new GpgAccountKeyEntity(self, entopts)
  }


  // Entity access: `client.MergeQueue().list()` / `client.MergeQueue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MergeQueue(entopts?: Record<string, any>) {
    const self = this
    return new MergeQueueEntity(self, entopts)
  }


  // Entity access: `client.MergeQueuePullrequest().list()` / `client.MergeQueuePullrequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MergeQueuePullrequest(entopts?: Record<string, any>) {
    const self = this
    return new MergeQueuePullrequestEntity(self, entopts)
  }


  // Entity access: `client.PaginatedAccount().list()` / `client.PaginatedAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedAccount(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedAccountEntity(self, entopts)
  }


  // Entity access: `client.PaginatedAnnotation().list()` / `client.PaginatedAnnotation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedAnnotation(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedAnnotationEntity(self, entopts)
  }


  // Entity access: `client.PaginatedBranch().list()` / `client.PaginatedBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedBranch(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedBranchEntity(self, entopts)
  }


  // Entity access: `client.PaginatedBranchrestriction().list()` / `client.PaginatedBranchrestriction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedBranchrestriction(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedBranchrestrictionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedChangeset().list()` / `client.PaginatedChangeset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedChangeset(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedChangesetEntity(self, entopts)
  }


  // Entity access: `client.PaginatedCommitstatus().list()` / `client.PaginatedCommitstatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedCommitstatus(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedCommitstatusEntity(self, entopts)
  }


  // Entity access: `client.PaginatedDefaultReviewerAndType().list()` / `client.PaginatedDefaultReviewerAndType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedDefaultReviewerAndType(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedDefaultReviewerAndTypeEntity(self, entopts)
  }


  // Entity access: `client.PaginatedDeployKey().list()` / `client.PaginatedDeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedDeployKey(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedDeployKeyEntity(self, entopts)
  }


  // Entity access: `client.PaginatedDeployment().list()` / `client.PaginatedDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedDeployment(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedDeploymentEntity(self, entopts)
  }


  // Entity access: `client.PaginatedDeploymentVariable().list()` / `client.PaginatedDeploymentVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedDeploymentVariable(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedDeploymentVariableEntity(self, entopts)
  }


  // Entity access: `client.PaginatedDiffstat().list()` / `client.PaginatedDiffstat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedDiffstat(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedDiffstatEntity(self, entopts)
  }


  // Entity access: `client.PaginatedEnvironment().list()` / `client.PaginatedEnvironment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedEnvironment(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedEnvironmentEntity(self, entopts)
  }


  // Entity access: `client.PaginatedFile().list()` / `client.PaginatedFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedFile(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedFileEntity(self, entopts)
  }


  // Entity access: `client.PaginatedFileConflict().list()` / `client.PaginatedFileConflict().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedFileConflict(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedFileConflictEntity(self, entopts)
  }


  // Entity access: `client.PaginatedGpgUserKey().list()` / `client.PaginatedGpgUserKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedGpgUserKey(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedGpgUserKeyEntity(self, entopts)
  }


  // Entity access: `client.PaginatedHookEvent().list()` / `client.PaginatedHookEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedHookEvent(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedHookEventEntity(self, entopts)
  }


  // Entity access: `client.PaginatedMergeQueue().list()` / `client.PaginatedMergeQueue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedMergeQueue(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedMergeQueueEntity(self, entopts)
  }


  // Entity access: `client.PaginatedMergeQueuePullrequest().list()` / `client.PaginatedMergeQueuePullrequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedMergeQueuePullrequest(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedMergeQueuePullrequestEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipeline().list()` / `client.PaginatedPipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipeline(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineCache().list()` / `client.PaginatedPipelineCache().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineCache(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineCacheEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineKnownHost().list()` / `client.PaginatedPipelineKnownHost().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineKnownHost(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineKnownHostEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineRunner().list()` / `client.PaginatedPipelineRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineRunner(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineRunnerEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineSchedule().list()` / `client.PaginatedPipelineSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineSchedule(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineScheduleEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineScheduleExecution().list()` / `client.PaginatedPipelineScheduleExecution().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineScheduleExecution(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineScheduleExecutionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineStep().list()` / `client.PaginatedPipelineStep().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineStep(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineStepEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPipelineVariable().list()` / `client.PaginatedPipelineVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPipelineVariable(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPipelineVariableEntity(self, entopts)
  }


  // Entity access: `client.PaginatedProject().list()` / `client.PaginatedProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedProject(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedProjectEntity(self, entopts)
  }


  // Entity access: `client.PaginatedProjectDeployKey().list()` / `client.PaginatedProjectDeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedProjectDeployKey(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedProjectDeployKeyEntity(self, entopts)
  }


  // Entity access: `client.PaginatedProjectGroupPermission().list()` / `client.PaginatedProjectGroupPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedProjectGroupPermission(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedProjectGroupPermissionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedProjectUserPermission().list()` / `client.PaginatedProjectUserPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedProjectUserPermission(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedProjectUserPermissionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPullrequest().list()` / `client.PaginatedPullrequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPullrequest(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPullrequestEntity(self, entopts)
  }


  // Entity access: `client.PaginatedPullrequestComment().list()` / `client.PaginatedPullrequestComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedPullrequestComment(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedPullrequestCommentEntity(self, entopts)
  }


  // Entity access: `client.PaginatedRef().list()` / `client.PaginatedRef().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedRef(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedRefEntity(self, entopts)
  }


  // Entity access: `client.PaginatedReport().list()` / `client.PaginatedReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedReport(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedReportEntity(self, entopts)
  }


  // Entity access: `client.PaginatedRepository().list()` / `client.PaginatedRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedRepository(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedRepositoryEntity(self, entopts)
  }


  // Entity access: `client.PaginatedRepositoryGroupPermission().list()` / `client.PaginatedRepositoryGroupPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedRepositoryGroupPermission(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedRepositoryGroupPermissionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedRepositoryPermission().list()` / `client.PaginatedRepositoryPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedRepositoryPermission(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedRepositoryPermissionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedRepositoryUserPermission().list()` / `client.PaginatedRepositoryUserPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedRepositoryUserPermission(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedRepositoryUserPermissionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedSnippet().list()` / `client.PaginatedSnippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedSnippet(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedSnippetEntity(self, entopts)
  }


  // Entity access: `client.PaginatedSnippetComment().list()` / `client.PaginatedSnippetComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedSnippetComment(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedSnippetCommentEntity(self, entopts)
  }


  // Entity access: `client.PaginatedSnippetCommit().list()` / `client.PaginatedSnippetCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedSnippetCommit(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedSnippetCommitEntity(self, entopts)
  }


  // Entity access: `client.PaginatedSshUserKey().list()` / `client.PaginatedSshUserKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedSshUserKey(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedSshUserKeyEntity(self, entopts)
  }


  // Entity access: `client.PaginatedTag().list()` / `client.PaginatedTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedTag(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedTagEntity(self, entopts)
  }


  // Entity access: `client.PaginatedTask().list()` / `client.PaginatedTask().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedTask(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedTaskEntity(self, entopts)
  }


  // Entity access: `client.PaginatedTreeentry().list()` / `client.PaginatedTreeentry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedTreeentry(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedTreeentryEntity(self, entopts)
  }


  // Entity access: `client.PaginatedWebhookSubscription().list()` / `client.PaginatedWebhookSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedWebhookSubscription(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedWebhookSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.PaginatedWorkspaceAccess().list()` / `client.PaginatedWorkspaceAccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedWorkspaceAccess(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedWorkspaceAccessEntity(self, entopts)
  }


  // Entity access: `client.PaginatedWorkspaceMembership().list()` / `client.PaginatedWorkspaceMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaginatedWorkspaceMembership(entopts?: Record<string, any>) {
    const self = this
    return new PaginatedWorkspaceMembershipEntity(self, entopts)
  }


  // Entity access: `client.Pipeline().list()` / `client.Pipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pipeline(entopts?: Record<string, any>) {
    const self = this
    return new PipelineEntity(self, entopts)
  }


  // Entity access: `client.PipelineBuildNumber().list()` / `client.PipelineBuildNumber().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineBuildNumber(entopts?: Record<string, any>) {
    const self = this
    return new PipelineBuildNumberEntity(self, entopts)
  }


  // Entity access: `client.PipelineCacheContentUri().list()` / `client.PipelineCacheContentUri().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineCacheContentUri(entopts?: Record<string, any>) {
    const self = this
    return new PipelineCacheContentUriEntity(self, entopts)
  }


  // Entity access: `client.PipelineKnownHost().list()` / `client.PipelineKnownHost().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineKnownHost(entopts?: Record<string, any>) {
    const self = this
    return new PipelineKnownHostEntity(self, entopts)
  }


  // Entity access: `client.PipelineRunner().list()` / `client.PipelineRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineRunner(entopts?: Record<string, any>) {
    const self = this
    return new PipelineRunnerEntity(self, entopts)
  }


  // Entity access: `client.PipelineSchedule().list()` / `client.PipelineSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineSchedule(entopts?: Record<string, any>) {
    const self = this
    return new PipelineScheduleEntity(self, entopts)
  }


  // Entity access: `client.PipelineSshKeyPair().list()` / `client.PipelineSshKeyPair().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineSshKeyPair(entopts?: Record<string, any>) {
    const self = this
    return new PipelineSshKeyPairEntity(self, entopts)
  }


  // Entity access: `client.PipelineStep().list()` / `client.PipelineStep().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineStep(entopts?: Record<string, any>) {
    const self = this
    return new PipelineStepEntity(self, entopts)
  }


  // Entity access: `client.PipelineVariable().list()` / `client.PipelineVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelineVariable(entopts?: Record<string, any>) {
    const self = this
    return new PipelineVariableEntity(self, entopts)
  }


  // Entity access: `client.PipelinesConfig().list()` / `client.PipelinesConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PipelinesConfig(entopts?: Record<string, any>) {
    const self = this
    return new PipelinesConfigEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectBranchingModel().list()` / `client.ProjectBranchingModel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectBranchingModel(entopts?: Record<string, any>) {
    const self = this
    return new ProjectBranchingModelEntity(self, entopts)
  }


  // Entity access: `client.ProjectDeployKey().list()` / `client.ProjectDeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectDeployKey(entopts?: Record<string, any>) {
    const self = this
    return new ProjectDeployKeyEntity(self, entopts)
  }


  // Entity access: `client.ProjectGroupPermission().list()` / `client.ProjectGroupPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectGroupPermission(entopts?: Record<string, any>) {
    const self = this
    return new ProjectGroupPermissionEntity(self, entopts)
  }


  // Entity access: `client.ProjectUserPermission().list()` / `client.ProjectUserPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectUserPermission(entopts?: Record<string, any>) {
    const self = this
    return new ProjectUserPermissionEntity(self, entopts)
  }


  // Entity access: `client.Property().list()` / `client.Property().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Property(entopts?: Record<string, any>) {
    const self = this
    return new PropertyEntity(self, entopts)
  }


  // Entity access: `client.Pullrequest().list()` / `client.Pullrequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pullrequest(entopts?: Record<string, any>) {
    const self = this
    return new PullrequestEntity(self, entopts)
  }


  // Entity access: `client.PullrequestComment().list()` / `client.PullrequestComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullrequestComment(entopts?: Record<string, any>) {
    const self = this
    return new PullrequestCommentEntity(self, entopts)
  }


  // Entity access: `client.PullrequestCommentTask().list()` / `client.PullrequestCommentTask().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullrequestCommentTask(entopts?: Record<string, any>) {
    const self = this
    return new PullrequestCommentTaskEntity(self, entopts)
  }


  // Entity access: `client.PullrequestMergeabilityCheck().list()` / `client.PullrequestMergeabilityCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullrequestMergeabilityCheck(entopts?: Record<string, any>) {
    const self = this
    return new PullrequestMergeabilityCheckEntity(self, entopts)
  }


  // Entity access: `client.Ref().list()` / `client.Ref().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ref(entopts?: Record<string, any>) {
    const self = this
    return new RefEntity(self, entopts)
  }


  // Entity access: `client.Report().list()` / `client.Report().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Report(entopts?: Record<string, any>) {
    const self = this
    return new ReportEntity(self, entopts)
  }


  // Entity access: `client.ReportAnnotation().list()` / `client.ReportAnnotation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReportAnnotation(entopts?: Record<string, any>) {
    const self = this
    return new ReportAnnotationEntity(self, entopts)
  }


  // Entity access: `client.Repository().list()` / `client.Repository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repository(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGroupPermission().list()` / `client.RepositoryGroupPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGroupPermission(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryGroupPermissionEntity(self, entopts)
  }


  // Entity access: `client.RepositoryInheritanceState().list()` / `client.RepositoryInheritanceState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryInheritanceState(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryInheritanceStateEntity(self, entopts)
  }


  // Entity access: `client.RepositoryUserPermission().list()` / `client.RepositoryUserPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryUserPermission(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryUserPermissionEntity(self, entopts)
  }


  // Entity access: `client.RequestChange().list()` / `client.RequestChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RequestChange(entopts?: Record<string, any>) {
    const self = this
    return new RequestChangeEntity(self, entopts)
  }


  // Entity access: `client.SearchResultPage().list()` / `client.SearchResultPage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SearchResultPage(entopts?: Record<string, any>) {
    const self = this
    return new SearchResultPageEntity(self, entopts)
  }


  // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Snippet(entopts?: Record<string, any>) {
    const self = this
    return new SnippetEntity(self, entopts)
  }


  // Entity access: `client.SnippetComment().list()` / `client.SnippetComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SnippetComment(entopts?: Record<string, any>) {
    const self = this
    return new SnippetCommentEntity(self, entopts)
  }


  // Entity access: `client.SnippetCommit().list()` / `client.SnippetCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SnippetCommit(entopts?: Record<string, any>) {
    const self = this
    return new SnippetCommitEntity(self, entopts)
  }


  // Entity access: `client.Source().list()` / `client.Source().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Source(entopts?: Record<string, any>) {
    const self = this
    return new SourceEntity(self, entopts)
  }


  // Entity access: `client.Ssh().list()` / `client.Ssh().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ssh(entopts?: Record<string, any>) {
    const self = this
    return new SshEntity(self, entopts)
  }


  // Entity access: `client.SshAccountKey().list()` / `client.SshAccountKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SshAccountKey(entopts?: Record<string, any>) {
    const self = this
    return new SshAccountKeyEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts?: Record<string, any>) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.Watcher().list()` / `client.Watcher().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Watcher(entopts?: Record<string, any>) {
    const self = this
    return new WatcherEntity(self, entopts)
  }


  // Entity access: `client.WebhookSubscription().list()` / `client.WebhookSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookSubscription(entopts?: Record<string, any>) {
    const self = this
    return new WebhookSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workspace(entopts?: Record<string, any>) {
    const self = this
    return new WorkspaceEntity(self, entopts)
  }


  // Entity access: `client.WorkspaceMembership().list()` / `client.WorkspaceMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkspaceMembership(entopts?: Record<string, any>) {
    const self = this
    return new WorkspaceMembershipEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new BitbucketSdkSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return BitbucketSdkSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'BitbucketSdk' }
  }

  toString() {
    return 'BitbucketSdk ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = BitbucketSdkSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  BitbucketSdkEntityBase,

  BitbucketSdkSDK,
  SDK,
}


export type { DirectResult }
