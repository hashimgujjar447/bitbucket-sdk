# Bitbucket API

Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 111 entities and 299 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Addon

Results: The client key of the Connect addon linked to the Forge app installation where the request was made; Request has succeeded. The application has been deleted for the user.; Request has succeeded. The installation has been updated to the new descriptor.

SDK operations: `load`, `remove`, `update`.

### ApplicationProperty

Results: The value of the property.

SDK operations: `load`.

### Approve

Results: The `participant` object recording that the authenticated user approved the pull request.

SDK operations: `create`.

Key fields to recognise:

- `participated_on`: The ISO8601 timestamp of the participant&#39;s action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.

### Branch

Results: The newly created branch object.; The branch object.

SDK operations: `create`, `load`.

Key fields to recognise:

- `default_merge_strategy`: The default merge strategy for pull requests targeting this branch.
- `links`: Links related to an Account.
- `merge_strategies`: Available merge strategies for pull requests targeting this branch.
- `name`: The name of the ref.

### BranchingModel

Results: The branching model object.

SDK operations: `list`.

Key fields to recognise:

- `branch_types`: The active branch types.

### BranchingModelSetting

Results: The branching model configuration; The updated branching model configuration.

SDK operations: `list`, `update`.

### Branchrestriction

Results: A paginated list of branch restrictions; The branch restriction rule; The updated branch restriction rule.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `branch_match_kind`: Indicates how the restriction is matched against a branch. The default is `glob`.
- `branch_type`: Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.
- `id`: The branch restriction status&#39; id.
- `kind`: The type of restriction that is being applied.
- `links`: Links related to an Account.

### CommentResolution

Results: The comment resolution details.

SDK operations: `create`.

Key fields to recognise:

- `created_on`: The ISO8601 timestamp the resolution was created.

### Commit

Results: The `participant` object recording that the authenticated user approved the commit.; The newly created comment.; A paginated list of commit comments.; The commit comment.; The commit object; The merge base of the provided spec.; The raw diff; The raw patches; Indicates the comment was deleted by this action or a previous delete.; An empty response indicating the authenticated user&#39;s approval has been withdrawn.; The newly updated comment.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### Commitstatus

Results: The newly created build status object.; The build status object with the specified key.; The updated build status object.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `description`: A description of the build (for example &quot;Unit tests in Bamboo&quot;)
- `key`: An identifier for the status that&#39;s unique to its type (current &quot;build&quot; is the only supported type) and the vendor, for example BB-DEPLOY
- `name`: An identifier for the build itself, for example BB-DEPLOY-1
- `refname`: The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (for example a Pipeline build). It is legitimate for this field to not be set, or even apply (for example a static linting job).
- `state`: Provides some indication of the status of this commit

### DefaultReviewer

Results: The specified user is a default reviewer; The specified user was successfully added to the default reviewers.

SDK operations: `load`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### DeployKey

Results: The deploy key that was created; Deploy key matching the key ID; The newly updated deploy key.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `comment`: The comment parsed from the deploy key (if present)
- `key`: The deploy key value.
- `label`: The user-defined label for the deploy key
- `links`: Links related to an Account.

### Deployment

Results: The environment update request was accepted.; The deployment.; The environment was deleted.; The project deploy key has been deleted; The key has been deleted.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `environment`: A deployment environment.
- `release`: The release associated with this deployment.
- `uuid`: The UUID identifying the deployment.

### DeploymentEnvironment

Results: The environment was created.; The environment.

SDK operations: `create`, `load`.

Key fields to recognise:

- `name`: The name of the environment.
- `uuid`: The UUID identifying the environment.

### DeploymentVariable

Results: The variable was created.; The deployment variable was updated.

SDK operations: `create`, `update`.

Key fields to recognise:

- `key`: The unique name of the variable.
- `secured`: If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
- `uuid`: The UUID identifying the variable.
- `value`: The value of the variable. If the variable is secured, this will be empty.

### Download

Results: The artifact was uploaded sucessfully.; Returns a paginated list of the downloads associated with the repository.; The specified download artifact was deleted.

SDK operations: `create`, `load`, `remove`.

### EffectiveDefaultReviewer

Results: The paginated list of effective default reviewers.

SDK operations: `list`.

### EffectiveRepoBranchingModel

Results: The effective branching model object.

SDK operations: `list`.

Key fields to recognise:

- `branch_types`: The active branch types.

### Gpg

Results: The key has been deleted.

SDK operations: `remove`.

### GpgAccountKey

Results: The newly created GPG key.; The specific GPG key matching the user and fingerprint.

SDK operations: `create`, `load`.

Key fields to recognise:

- `fingerprint`: The GPG key fingerprint.
- `key`: The GPG key value in X format.
- `key_id`: The unique identifier for the GPG key
- `links`: Links related to an Account.
- `name`: The user-defined label for the GPG key

### MergeQueue

Results: Merge queue retrieved successfully.; The remove request was accepted.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `name`: The merge queue name.
- `state`: The configuration state returned by the merge queue service. Known values are `ACTIVE`, `PAUSED`, `DRAINING`, `SUSPENDED`, `INACTIVE`, and `UNKNOWN`. `ACTIVE` accepts entries; `PAUSED` accepts entries but pauses landing; `DRAINING` and `SUSPENDED` block entry; `INACTIVE` does not require queueing. Unknown values are returned unchanged and follow the existing queue behavior: only `DRAINING` and `SUSPENDED` block entry.
- `uuid`: The merge queue UUID.

### MergeQueuePullrequest

Results: Merge queue pullrequest retrieved successfully.

SDK operations: `load`.

Key fields to recognise:

- `merge_queue`: A reference to the merge queue holding a pullrequest.
- `rank`: The one-based position of the pullrequest in the merge queue.

### PaginatedAccount

Results: The paginated list of default reviewers.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedAnnotation

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `annotation_type`: The type of the report.
- `created_on`: The timestamp when the report was created.
- `details`: The details to show to users when clicking on the annotation.
- `external_id`: ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it&#39;s generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.
- `line`: The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.

### PaginatedBranch

Results: A paginated list of branches matching any filter criteria that were provided.

SDK operations: `list`.

Key fields to recognise:

- `default_merge_strategy`: The default merge strategy for pull requests targeting this branch.
- `links`: Links related to an Account.
- `merge_strategies`: Available merge strategies for pull requests targeting this branch.
- `name`: The name of the ref.

### PaginatedBranchrestriction

Results: A paginated list of branch restrictions.

SDK operations: `list`.

Key fields to recognise:

- `branch_match_kind`: Indicates how the restriction is matched against a branch. The default is `glob`.
- `branch_type`: Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.
- `id`: The branch restriction status&#39; id.
- `kind`: The type of restriction that is being applied.
- `links`: Links related to an Account.

### PaginatedChangeset

Results: A paginated list of commits.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedCommitstatus

Results: A paginated list of all commit statuses for this commit.; A paginated list of all commit statuses for this pull request.

SDK operations: `list`.

Key fields to recognise:

- `description`: A description of the build (for example &quot;Unit tests in Bamboo&quot;)
- `key`: An identifier for the status that&#39;s unique to its type (current &quot;build&quot; is the only supported type) and the vendor, for example BB-DEPLOY
- `name`: An identifier for the build itself, for example BB-DEPLOY-1
- `refname`: The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (for example a Pipeline build). It is legitimate for this field to not be set, or even apply (for example a static linting job).
- `state`: Provides some indication of the status of this commit

### PaginatedDefaultReviewerAndType

Results: The list of project default reviewers.

SDK operations: `list`.

### PaginatedDeployKey

Results: Deploy keys matching the repository.

SDK operations: `list`.

Key fields to recognise:

- `comment`: The comment parsed from the deploy key (if present)
- `key`: The deploy key value.
- `label`: The user-defined label for the deploy key
- `links`: Links related to an Account.

### PaginatedDeployment

Results: The matching deployments.

SDK operations: `list`.

Key fields to recognise:

- `environment`: A deployment environment.
- `release`: The release associated with this deployment.
- `uuid`: The UUID identifying the deployment.

### PaginatedDeploymentVariable

Results: The retrieved deployment variables.

SDK operations: `list`.

Key fields to recognise:

- `key`: The unique name of the variable.
- `secured`: If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
- `uuid`: The UUID identifying the variable.
- `value`: The value of the variable. If the variable is secured, this will be empty.

### PaginatedDiffstat

Results: The diff stats.

SDK operations: `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 500 with 5000 being the maximum allowed value.
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedEnvironment

Results: The matching environments.

SDK operations: `list`.

Key fields to recognise:

- `name`: The name of the environment.
- `uuid`: The UUID identifying the environment.

### PaginatedFile

Results: A paginated list of commits that modified the specified file.

SDK operations: `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedFileConflict

Results: A paginated list of file conflicts.

SDK operations: `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedGpgUserKey

Results: A list of the GPG keys associated with the account.

SDK operations: `list`.

Key fields to recognise:

- `fingerprint`: The GPG key fingerprint.
- `key`: The GPG key value in X format.
- `key_id`: The unique identifier for the GPG key
- `links`: Links related to an Account.
- `name`: The user-defined label for the GPG key

### PaginatedHookEvent

Results: A paginated list of webhook types available to subscribe on.; A mapping of resource/subject types pointing to their individual event types.

SDK operations: `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `previous`: Link to previous page if it exists. A collection&#39;s first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedMergeQueue

Results: Merge queues retrieved successfully.

SDK operations: `list`.

Key fields to recognise:

- `name`: The merge queue name.
- `state`: The configuration state returned by the merge queue service. Known values are `ACTIVE`, `PAUSED`, `DRAINING`, `SUSPENDED`, `INACTIVE`, and `UNKNOWN`. `ACTIVE` accepts entries; `PAUSED` accepts entries but pauses landing; `DRAINING` and `SUSPENDED` block entry; `INACTIVE` does not require queueing. Unknown values are returned unchanged and follow the existing queue behavior: only `DRAINING` and `SUSPENDED` block entry.
- `uuid`: The merge queue UUID.

### PaginatedMergeQueuePullrequest

Results: Merge queue pullrequests retrieved successfully.

SDK operations: `list`.

Key fields to recognise:

- `merge_queue`: A reference to the merge queue holding a pullrequest.
- `rank`: The one-based position of the pullrequest in the merge queue.

### PaginatedPipeline

Results: The matching pipelines.

SDK operations: `list`.

Key fields to recognise:

- `build_number`: The build number of the pipeline.
- `build_seconds_used`: The number of build seconds used by this pipeline.
- `completed_on`: The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
- `configuration_sources`: An ordered list of sources of the pipeline configuration
- `created_on`: The timestamp when the pipeline was created.

### PaginatedPipelineCache

Results: The list of caches for the given repository.

SDK operations: `list`.

Key fields to recognise:

- `created_on`: The timestamp when the cache was created.
- `file_size_bytes`: The size of the file containing the archive of the cache.
- `key_hash`: The key hash of the cache version.
- `name`: The name of the cache.
- `path`: The path where the cache contents were retrieved from.

### PaginatedPipelineKnownHost

Results: The retrieved known hosts.

SDK operations: `list`.

Key fields to recognise:

- `hostname`: The hostname of the known host.
- `public_key`: The public key of the known host.
- `uuid`: The UUID identifying the known host.

### PaginatedPipelineRunner

Results: The repository runners.; The workspace runners.

SDK operations: `list`.

Key fields to recognise:

- `created_on`: The timestamp when the runner was created.
- `labels`: Labels assigned to the runner for identification and routing.
- `name`: The name of the runner.
- `oauth_client`: OAuth client configuration for the runner.
- `state`: The current state of the runner.

### PaginatedPipelineSchedule

Results: The list of schedules.

SDK operations: `list`.

Key fields to recognise:

- `created_on`: The timestamp when the schedule was created.
- `cron_pattern`: The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0 12 * * ? *, will execute at 12pm UTC every day.
- `enabled`: Whether the schedule is enabled.
- `target`: The target on which the schedule will be executed.
- `type`: The type of selector.

### PaginatedPipelineScheduleExecution

Results: The list of executions of a schedule.

SDK operations: `list`.

### PaginatedPipelineStep

Results: The steps.

SDK operations: `list`.

Key fields to recognise:

- `completed_on`: The timestamp when the step execution was completed. This is not set if the step is still in progress.
- `image`: The Docker image used as the build container for the step.
- `script_commands`: The list of build commands. These commands are executed in the build container.
- `setup_commands`: The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container.
- `started_on`: The timestamp when the step execution was started. This is not set when the step hasn&#39;t executed yet.

### PaginatedPipelineVariable

Results: The retrieved variables.; The found user level variables.; The found account level variables.; The found workspace level variables.

SDK operations: `list`.

Key fields to recognise:

- `key`: The unique name of the variable.
- `secured`: If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
- `uuid`: The UUID identifying the variable.
- `value`: The value of the variable. If the variable is secured, this will be empty.

### PaginatedProject

Results: The list of projects in this workspace.

SDK operations: `list`.

Key fields to recognise:

- `has_publicly_visible_repos`: Indicates whether the project contains publicly visible repositories. Note that private projects cannot contain public repositories.
- `is_private`: Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
- `key`: The project&#39;s key.
- `links`: Links related to an Account.
- `name`: The name of the project.

### PaginatedProjectDeployKey

Results: Deploy keys matching the project.

SDK operations: `list`.

Key fields to recognise:

- `comment`: The comment parsed from the deploy key (if present)
- `key`: The deploy key value.
- `label`: The user-defined label for the deploy key
- `links`: Links related to an Account.

### PaginatedProjectGroupPermission

Results: Paginated list of project group permissions.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedProjectUserPermission

Results: Paginated list of explicit user permissions.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedPullrequest

Results: The paginated list of pull requests.; The repository&#39;s pull requests are still being indexed.; All pull requests on the specified repository.; All pull requests authored by the specified user.

SDK operations: `list`, `load`.

Key fields to recognise:

- `close_source_branch`: A boolean flag indicating if merging the pull request closes the source branch.
- `comment_count`: The number of comments for a specific pull request.
- `created_on`: The ISO8601 timestamp the request was created.
- `draft`: A boolean flag indicating whether the pull request is a draft.
- `id`: The pull request&#39;s unique ID. Note that pull request IDs are only unique within their associated repository.

### PaginatedPullrequestComment

Results: A paginated list of comments made on the given pull request, in chronological order.

SDK operations: `list`.

Key fields to recognise:

- `created_on`: The ISO8601 timestamp the request was created.
- `id`: The pull request&#39;s unique ID. Note that pull request IDs are only unique within their associated repository.
- `links`: Links related to an Account.
- `resolution`: The resolution object for a Comment.
- `updated_on`: The ISO8601 timestamp the request was last updated.

### PaginatedRef

Results: A paginated list of refs matching any filter criteria that were provided.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.
- `name`: The name of the ref.

### PaginatedReport

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_on`: The timestamp when the report was created.
- `data`: An array of data fields to display information on the report. Maximum 10.
- `details`: A string to describe the purpose of the report.
- `external_id`: ID of the report provided by the report creator. It can be used to identify the report as an alternative to it&#39;s generated uuid. It is not used by Bitbucket, but only by the report creator for updating or deleting this specific report. Needs to be unique.
- `link`: A URL linking to the results of the report in an external tool.

### PaginatedRepository

Results: All forks.; The repositories owned by the specified account.

SDK operations: `list`, `load`.

Key fields to recognise:

- `fork_policy`: Controls the rules for forking this repository. * **`allow_forks`**: unrestricted forking * **`no_public_forks`**: restrict forking to private forks (forks cannot be made public later) * **`no_forks`**: deny all forking
- `full_name`: The concatenation of the repository owner&#39;s username and the slugified name, for example &quot;evzijst/interruptingcow&quot;. This is the same string used in Bitbucket URLs.
- `has_issues`: The issue tracker for this repository is enabled. Issue Tracker features are not supported for repositories in workspaces administered through admin.atlassian.com.
- `has_wiki`: The wiki for this repository is enabled. Wiki features are not supported for repositories in workspaces administered through admin.atlassian.com.
- `is_private`: Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.

### PaginatedRepositoryGroupPermission

Results: Paginated of explicit group permissions on the repository.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedRepositoryPermission

Results: The list of repository permissions for the authenticated user in the specified workspace.; List of workspace&#39;s repository permissions.; The repository permission for all users in this repository.

SDK operations: `list`, `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedRepositoryUserPermission

Results: Paginated of explicit user permissions on the repository.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedSnippet

Results: A paginated list of snippets.

SDK operations: `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
- `size`: Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.

### PaginatedSnippetComment

Results: A paginated list of snippet comments, ordered by creation date.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedSnippetCommit

Results: The paginated list of snippet commits.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### PaginatedSshUserKey

Results: A list of the SSH keys associated with the account.

SDK operations: `list`.

Key fields to recognise:

- `comment`: The comment parsed from the SSH key (if present)
- `fingerprint`: The SSH key fingerprint in SHA-256 format.
- `key`: The SSH public key value in OpenSSH format.
- `label`: The user-defined label for the SSH key
- `links`: Links related to an Account.

### PaginatedTag

Results: A paginated list of tags matching any filter criteria that were provided.

SDK operations: `list`.

Key fields to recognise:

- `date`: The date that the tag was created, if available
- `links`: Links related to an Account.
- `message`: The message associated with the tag, if available.
- `name`: The name of the ref.

### PaginatedTask

Results: A paginated list of pull request tasks for the given pull request.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.
- `resolved_on`: The ISO8601 timestamp for when the task was resolved.

### PaginatedTreeentry

Results: If the path matches a file, then the raw contents of the file are returned (unless the `format=meta` query parameter was provided, in which case a json document containing the file&#39;s meta data is returned). If the path matches a directory, then a paginated list of file and directory entries is returned (if the `format=meta` query parameter was provided, then the json document containing the directory&#39;s meta data is returned).; If the path matches a file, then the raw contents of the file are returned. If the `format=meta` query parameter is provided, a json document containing the file&#39;s meta data is returned. If the `format=rendered` query parameter is provided, the contents of the file in HTML-formated rendered markup is returned. If the path matches a directory, then a paginated list of file and directory entries is returned (if the `format=meta` query parameter was provided, then the json document containing the directory&#39;s meta data is returned.).

SDK operations: `list`, `load`.

Key fields to recognise:

- `next`: Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
- `page`: Page number of the current results. This is an optional element that is not provided in all responses.
- `pagelen`: Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
- `path`: The path in the repository
- `previous`: Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.

### PaginatedWebhookSubscription

Results: The paginated list of installed webhooks.

SDK operations: `list`.

Key fields to recognise:

- `active`: Whether or not the webhook subscription is enabled.
- `created_at`: The timestamp when the webhook subscription was created.
- `description`: A user-defined description of the webhook.
- `events`: The events this webhook is subscribed to.
- `links`: A link to a resource related to this object.

### PaginatedWorkspaceAccess

Results: The list of workspaces accessible by the authenticated user.

SDK operations: `list`.

Key fields to recognise:

- `administrator`: The permission level the user has for the workspace. True if the user is an administrator, otherwise False.

### PaginatedWorkspaceMembership

Results: The list of users that are part of a workspace.; The list of users that are part of a workspace, along with their permission.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### Pipeline

Results: The pipeline has been signaled to stop.; The initiated pipeline.; The raw log file for the build container or service container.; Test case reasons (output).; The raw log file for this pipeline step.; A summary of test reports for this pipeline step.; Test cases for this pipeline step.; The pipeline.; The OpenID configuration; The keys in JSON web key format; The variable was deleted.; The cache was deleted.; The known host was deleted.; The caches were deleted.; The repository runner was deleted.; The schedule was deleted.; The SSH key pair was deleted.; The workspace runner was deleted.; The variable was deleted.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `build_number`: The build number of the pipeline.
- `build_seconds_used`: The number of build seconds used by this pipeline.
- `completed_on`: The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
- `configuration_sources`: An ordered list of sources of the pipeline configuration
- `created_on`: The timestamp when the pipeline was created.

### PipelineBuildNumber

Results: The build number has been configured.

SDK operations: `update`.

Key fields to recognise:

- `next`: The next number that will be used as build number.

### PipelineCacheContentUri

Results: The cache content uri.

SDK operations: `load`.

Key fields to recognise:

- `uri`: The uri for pipeline cache content.

### PipelineKnownHost

Results: The known host was created.; The known host.; The known host was updated.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `hostname`: The hostname of the known host.
- `public_key`: The public key of the known host.
- `uuid`: The UUID identifying the known host.

### PipelineRunner

Results: The repository runner.; The workspace runner.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `created_on`: The timestamp when the runner was created.
- `id`: The OAuth client ID.
- `labels`: Labels assigned to the runner for identification and routing.
- `name`: The name of the runner.
- `oauth_client`: OAuth client configuration for the runner.

### PipelineSchedule

Results: The created schedule.; The requested schedule.; The schedule is updated.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `created_on`: The timestamp when the schedule was created.
- `cron_pattern`: The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0 12 * * ? *, will execute at 12pm UTC every day.
- `enabled`: Whether the schedule is enabled.
- `target`: The target on which the schedule will be executed.
- `type`: The type of selector.

### PipelineSshKeyPair

Results: The SSH key pair.; The SSH key pair was created or updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `private_key`: The SSH private key. This value will be empty when retrieving the SSH key pair.
- `public_key`: The SSH public key.

### PipelineStep

Results: The step.

SDK operations: `load`.

Key fields to recognise:

- `completed_on`: The timestamp when the step execution was completed. This is not set if the step is still in progress.
- `image`: The Docker image used as the build container for the step.
- `script_commands`: The list of build commands. These commands are executed in the build container.
- `setup_commands`: The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container.
- `started_on`: The timestamp when the step execution was started. This is not set when the step hasn&#39;t executed yet.

### PipelineVariable

Results: The variable was created.; The created variable.; The variable.; The variable was updated.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `key`: The unique name of the variable.
- `secured`: If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
- `uuid`: The UUID identifying the variable.
- `value`: The value of the variable. If the variable is secured, this will be empty.

### PipelinesConfig

Results: The repository pipelines configuration.; The repository pipelines configuration was updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `enabled`: Whether Pipelines is enabled for the repository.

### Project

Results: A new project has been created.; The project that is part of a workspace.; The project group permission was deleted and no content returned.; The specified user was removed from the list of project default reviewers; The project user permission was deleted and no content returned.; Successful deletion.; The existing project is has been updated.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `has_publicly_visible_repos`: Indicates whether the project contains publicly visible repositories. Note that private projects cannot contain public repositories.
- `is_private`: Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
- `key`: The project&#39;s key.
- `links`: Links related to an Account.
- `name`: The name of the project.

### ProjectBranchingModel

Results: The branching model object.

SDK operations: `list`.

Key fields to recognise:

- `branch_types`: The active branch types.

### ProjectDeployKey

Results: The project deploy key that was created; Project deploy key matching the key ID.

SDK operations: `create`, `load`.

Key fields to recognise:

- `comment`: The comment parsed from the deploy key (if present)
- `key`: The deploy key value.
- `label`: The user-defined label for the deploy key
- `links`: Links related to an Account.

### ProjectGroupPermission

Results: Project group permission; Project group permission updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### ProjectUserPermission

Results: Explicit user permission for user and project; Explicit user permission updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### Property

Results: An empty response.

SDK operations: `remove`, `update`.

### Pullrequest

Results: The pull request was successfully declined.; The pull request object.; In the Location header, the URL to poll for the pull request merge status; The newly created pull request.; Returns a task status if the merge is either pending or successful, and if it is successful, a pull request; The pull request object; The pull request activity log; A paginated list of commits made on the given pull request, in chronological order. This list will be empty if the source branch no longer exists.; Successful deletion.; An empty response indicating the authenticated user&#39;s approval has been withdrawn.; An empty response indicating the authenticated user&#39;s request for change has been withdrawn.; The specified user successfully removed from the default reviewers; The updated pull request.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `close_source_branch`: A boolean flag indicating if merging the pull request closes the source branch.
- `comment_count`: The number of comments for a specific pull request.
- `created_on`: The ISO8601 timestamp the request was created.
- `draft`: A boolean flag indicating whether the pull request is a draft.
- `id`: The pull request&#39;s unique ID. Note that pull request IDs are only unique within their associated repository.

### PullrequestComment

Results: The newly created comment.; The comment.; The comment is reopened.; The updated comment.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_on`: The ISO8601 timestamp the request was created.
- `id`: The pull request&#39;s unique ID. Note that pull request IDs are only unique within their associated repository.
- `links`: Links related to an Account.
- `resolution`: The resolution object for a Comment.
- `updated_on`: The ISO8601 timestamp the request was last updated.

### PullrequestCommentTask

Results: The newly created task.; The task.; The updated task.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `content`: task raw content
- `links`: Links related to an Account.
- `resolved_on`: The ISO8601 timestamp for when the task was resolved.

### PullrequestMergeabilityCheck

Results: The collection of checks that determine whether the specified pull request can be merged.

SDK operations: `list`.

Key fields to recognise:

- `blocking`: Whether this check is currently preventing the pull request from being merged.
- `required`: Whether this check must pass for the pull request to be mergeable.
- `status`: Whether this check passed. `UNKNOWN` means the check could not be evaluated; it does not establish that the pull request is mergeable.

### Ref

Results: Indicates that the specified branch was successfully deleted.; Indicates the specified tag was successfully deleted.

SDK operations: `remove`.

### Report

Results: OK; No content.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `created_on`: The timestamp when the report was created.
- `data`: An array of data fields to display information on the report. Maximum 10.
- `details`: A string to describe the purpose of the report.
- `external_id`: ID of the report provided by the report creator. It can be used to identify the report as an alternative to it&#39;s generated uuid. It is not used by Bitbucket, but only by the report creator for updating or deleting this specific report. Needs to be unique.
- `link`: A URL linking to the results of the report in an external tool.

### ReportAnnotation

Results: OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `annotation_type`: The type of the report.
- `created_on`: The timestamp when the report was created.
- `details`: The details to show to users when clicking on the annotation.
- `external_id`: ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it&#39;s generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.
- `line`: The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.

### Repository

Results: The newly created repository.; The newly created fork.; The repository object.; Group permission deleted; The repository user permission was deleted and no content returned.; When the webhook was deleted successfully; Indicates successful deletion.; The existing repository has been updated; A new repository has been created; The repository setting inheritance state was set and no content returned.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `fork_policy`: Controls the rules for forking this repository. * **`allow_forks`**: unrestricted forking * **`no_public_forks`**: restrict forking to private forks (forks cannot be made public later) * **`no_forks`**: deny all forking
- `full_name`: The concatenation of the repository owner&#39;s username and the slugified name, for example &quot;evzijst/interruptingcow&quot;. This is the same string used in Bitbucket URLs.
- `has_issues`: The issue tracker for this repository is enabled. Issue Tracker features are not supported for repositories in workspaces administered through admin.atlassian.com.
- `has_wiki`: The wiki for this repository is enabled. Wiki features are not supported for repositories in workspaces administered through admin.atlassian.com.
- `is_private`: Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.

### RepositoryGroupPermission

Results: Group permission for group slug and repository; Group permission updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### RepositoryInheritanceState

Results: The repository setting inheritance state.

SDK operations: `load`.

### RepositoryUserPermission

Results: Explicit user permission for user and repository; Explicit user permission updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### RequestChange

Results: The `participant` object recording that the authenticated user requested changes on the pull request.

SDK operations: `create`.

Key fields to recognise:

- `participated_on`: The ISO8601 timestamp of the participant&#39;s action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.

### SearchResultPage

Results: Successful search.

SDK operations: `list`.

Key fields to recognise:

- `file`: A file object, representing a file at a commit in a repository

### Snippet

Results: The newly created snippet object.; Returns the contents of the specified file.; The snippet object.; The raw diff contents.; The raw patch contents.; If the authenticated user is watching the snippet.; Indicates the comment was deleted successfully.; If the snippet was deleted successfully.; Indicates the user stopped watching the snippet successfully.; The updated snippet object.; Indicates the authenticated user is now watching the snippet.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `scm`: The DVCS used to store the snippet.

### SnippetComment

Results: The newly created comment.; The specified comment.; The updated comment object.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `links`: Links related to an Account.

### SnippetCommit

Results: The specified snippet commit.

SDK operations: `load`.

Key fields to recognise:

- `links`: Links related to an Account.

### Source

Results: .

SDK operations: `create`.

### Ssh

Results: The key has been deleted.

SDK operations: `remove`.

### SshAccountKey

Results: The newly created SSH key.; The specific SSH key matching the user and UUID; The newly updated SSH key.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `comment`: The comment parsed from the SSH key (if present)
- `fingerprint`: The SSH key fingerprint in SHA-256 format.
- `key`: The SSH public key value in OpenSSH format.
- `label`: The user-defined label for the SSH key
- `links`: Links related to an Account.

### Tag

Results: The newly created tag.; The tag object.

SDK operations: `create`, `load`.

Key fields to recognise:

- `date`: The date that the tag was created, if available
- `links`: Links related to an Account.
- `message`: The message associated with the tag, if available.
- `name`: The name of the ref.

### User

Results: The specified user that is a default reviewer; The user object; The current user.; The specified user was added as a project default reviewer.

SDK operations: `load`, `update`.

Key fields to recognise:

- `account_id`: The user&#39;s Atlassian account ID.
- `account_status`: The status of the account. Currently the only possible value is &quot;active&quot;, but more values may be added in the future.
- `links`: Links related to an Account.
- `nickname`: Account name defined by the owner. Should be used instead of the &quot;username&quot; field. Note that &quot;nickname&quot; cannot be used in place of &quot;username&quot; in URLs and queries, as &quot;nickname&quot; is not guaranteed to be unique.

### Watcher

Results: The paginated list of users watching this snippet; A paginated list of all the watchers on the specified repository.

SDK operations: `list`.

Key fields to recognise:

- `links`: Links related to an Account.

### WebhookSubscription

Results: If the webhook was registered successfully.; The webhook subscription object.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `active`: Whether or not the webhook subscription is enabled.
- `created_at`: The timestamp when the webhook subscription was created.
- `description`: A user-defined description of the webhook.
- `events`: The events this webhook is subscribed to.
- `links`: A link to a resource related to this object.

### Workspace

Results: The workspace.; The system public GPG key(s).; When the webhook was deleted successfully.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `forking_mode`: Controls the rules for forking repositories within this workspace. * **`allow_forks`**: unrestricted forking * **`internal_only`**: prevents forking of private repositories outside the workspace or to public repositories
- `is_personal`: Indicates whether the workspace belongs to an individual user.
- `is_privacy_enforced`: Indicates whether the workspace enforces private content, or whether it allows public content.
- `is_private`: Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members.
- `name`: The name of the workspace.

### WorkspaceMembership

Results: The user that is part of a workspace.

SDK operations: `load`.

Key fields to recognise:

- `links`: Links related to an Account.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Addon | `load` | `GET /addon/{addon_key}/client-key` | Required |
| Addon | `remove` | `DELETE /addon` | Required |
| Addon | `update` | `PUT /addon` | Required |
| ApplicationProperty | `load` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}` | Required |
| ApplicationProperty | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}` | Required |
| ApplicationProperty | `load` | `GET /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}` | Required |
| ApplicationProperty | `load` | `GET /users/{selected_user}/properties/{app_key}/{property_name}` | Required |
| Approve | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve` | Required |
| Branch | `create` | `POST /repositories/{workspace}/{repo_slug}/refs/branches` | Required |
| Branch | `load` | `GET /repositories/{workspace}/{repo_slug}/refs/branches/{name}` | Required |
| BranchingModel | `list` | `GET /repositories/{workspace}/{repo_slug}/branching-model` | Required |
| BranchingModelSetting | `list` | `GET /workspaces/{workspace}/projects/{project_key}/branching-model/settings` | Required |
| BranchingModelSetting | `list` | `GET /repositories/{workspace}/{repo_slug}/branching-model/settings` | Required |
| BranchingModelSetting | `update` | `PUT /workspaces/{workspace}/projects/{project_key}/branching-model/settings` | Required |
| BranchingModelSetting | `update` | `PUT /repositories/{workspace}/{repo_slug}/branching-model/settings` | Required |
| Branchrestriction | `create` | `POST /repositories/{workspace}/{repo_slug}/branch-restrictions` | Required |
| Branchrestriction | `load` | `GET /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}` | Required |
| Branchrestriction | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}` | Required |
| Branchrestriction | `update` | `PUT /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}` | Required |
| CommentResolution | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve` | Required |
| Commit | `create` | `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/approve` | Required |
| Commit | `create` | `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/comments` | Required |
| Commit | `list` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments` | Required |
| Commit | `load` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}` | Required |
| Commit | `load` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}` | Required |
| Commit | `load` | `GET /repositories/{workspace}/{repo_slug}/merge-base/{revspec}` | Required |
| Commit | `load` | `GET /repositories/{workspace}/{repo_slug}/diff/{spec}` | Required |
| Commit | `load` | `GET /repositories/{workspace}/{repo_slug}/patch/{spec}` | Required |
| Commit | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}` | Required |
| Commit | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/approve` | Required |
| Commit | `update` | `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}` | Required |
| Commitstatus | `create` | `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build` | Required |
| Commitstatus | `load` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}` | Required |
| Commitstatus | `update` | `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}` | Required |
| DefaultReviewer | `load` | `GET /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}` | Required |
| DefaultReviewer | `update` | `PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}` | Required |
| DeployKey | `create` | `POST /repositories/{workspace}/{repo_slug}/deploy-keys` | Required |
| DeployKey | `load` | `GET /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}` | Required |
| DeployKey | `update` | `PUT /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}` | Required |
| Deployment | `create` | `POST /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes` | Required |
| Deployment | `load` | `GET /repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}` | Required |
| Deployment | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}` | Required |
| Deployment | `remove` | `DELETE /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}` | Required |
| Deployment | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}` | Required |
| DeploymentEnvironment | `create` | `POST /repositories/{workspace}/{repo_slug}/environments` | Required |
| DeploymentEnvironment | `load` | `GET /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}` | Required |
| DeploymentVariable | `create` | `POST /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables` | Required |
| DeploymentVariable | `update` | `PUT /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}` | Required |
| Download | `create` | `POST /repositories/{workspace}/{repo_slug}/downloads` | Required |
| Download | `load` | `GET /repositories/{workspace}/{repo_slug}/downloads/{filename}` | Required |
| Download | `load` | `GET /repositories/{workspace}/{repo_slug}/downloads` | Required |
| Download | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/downloads/{filename}` | Required |
| EffectiveDefaultReviewer | `list` | `GET /repositories/{workspace}/{repo_slug}/effective-default-reviewers` | Required |
| EffectiveRepoBranchingModel | `list` | `GET /repositories/{workspace}/{repo_slug}/effective-branching-model` | Required |
| Gpg | `remove` | `DELETE /users/{selected_user}/gpg-keys/{fingerprint}` | Required |
| GpgAccountKey | `create` | `POST /users/{selected_user}/gpg-keys` | Required |
| GpgAccountKey | `load` | `GET /users/{selected_user}/gpg-keys/{fingerprint}` | Required |
| MergeQueue | `load` | `GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}` | Required |
| MergeQueue | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}` | Required |
| MergeQueuePullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}` | Required |
| PaginatedAccount | `list` | `GET /repositories/{workspace}/{repo_slug}/default-reviewers` | Required |
| PaginatedAnnotation | `list` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations` | Required |
| PaginatedBranch | `list` | `GET /repositories/{workspace}/{repo_slug}/refs/branches` | Required |
| PaginatedBranchrestriction | `list` | `GET /repositories/{workspace}/{repo_slug}/branch-restrictions` | Required |
| PaginatedChangeset | `create` | `POST /repositories/{workspace}/{repo_slug}/commits/{revision}` | Required |
| PaginatedChangeset | `create` | `POST /repositories/{workspace}/{repo_slug}/commits` | Required |
| PaginatedChangeset | `list` | `GET /repositories/{workspace}/{repo_slug}/commits` | Required |
| PaginatedChangeset | `load` | `GET /repositories/{workspace}/{repo_slug}/commits/{revision}` | Required |
| PaginatedCommitstatus | `list` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses` | Required |
| PaginatedCommitstatus | `list` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses` | Required |
| PaginatedDefaultReviewerAndType | `list` | `GET /workspaces/{workspace}/projects/{project_key}/default-reviewers` | Required |
| PaginatedDeployKey | `list` | `GET /repositories/{workspace}/{repo_slug}/deploy-keys` | Required |
| PaginatedDeployment | `list` | `GET /repositories/{workspace}/{repo_slug}/deployments` | Required |
| PaginatedDeploymentVariable | `list` | `GET /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables` | Required |
| PaginatedDiffstat | `load` | `GET /repositories/{workspace}/{repo_slug}/diffstat/{spec}` | Required |
| PaginatedEnvironment | `list` | `GET /repositories/{workspace}/{repo_slug}/environments` | Required |
| PaginatedFile | `load` | `GET /repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}` | Required |
| PaginatedFileConflict | `load` | `GET /repositories/{workspace}/{repo_slug}/file-conflicts/{spec}` | Required |
| PaginatedGpgUserKey | `list` | `GET /users/{selected_user}/gpg-keys` | Required |
| PaginatedHookEvent | `load` | `GET /hook_events/{subject_type}` | Required |
| PaginatedHookEvent | `load` | `GET /hook_events` | Required |
| PaginatedMergeQueue | `list` | `GET /repositories/{workspace}/{repo_slug}/merge-queues` | Required |
| PaginatedMergeQueuePullrequest | `list` | `GET /repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue` | Required |
| PaginatedPipeline | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines` | Required |
| PaginatedPipelineCache | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines-config/caches` | Required |
| PaginatedPipelineKnownHost | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts` | Required |
| PaginatedPipelineRunner | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines-config/runners` | Required |
| PaginatedPipelineRunner | `list` | `GET /workspaces/{workspace}/pipelines-config/runners` | Required |
| PaginatedPipelineSchedule | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules` | Required |
| PaginatedPipelineScheduleExecution | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions` | Required |
| PaginatedPipelineStep | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps` | Required |
| PaginatedPipelineVariable | `list` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/variables` | Required |
| PaginatedPipelineVariable | `list` | `GET /users/{selected_user}/pipelines_config/variables` | Required |
| PaginatedPipelineVariable | `list` | `GET /teams/{username}/pipelines_config/variables` | Required |
| PaginatedPipelineVariable | `list` | `GET /workspaces/{workspace}/pipelines-config/variables` | Required |
| PaginatedProject | `list` | `GET /workspaces/{workspace}/projects` | Required |
| PaginatedProjectDeployKey | `list` | `GET /workspaces/{workspace}/projects/{project_key}/deploy-keys` | Required |
| PaginatedProjectGroupPermission | `list` | `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/groups` | Required |
| PaginatedProjectUserPermission | `list` | `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/users` | Required |
| PaginatedPullrequest | `list` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests` | Required |
| PaginatedPullrequest | `list` | `GET /repositories/{workspace}/{repo_slug}/pullrequests` | Required |
| PaginatedPullrequest | `load` | `GET /workspaces/{workspace}/pullrequests/{selected_user}` | Required |
| PaginatedPullrequestComment | `list` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments` | Required |
| PaginatedRef | `list` | `GET /repositories/{workspace}/{repo_slug}/refs` | Required |
| PaginatedReport | `list` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports` | Required |
| PaginatedRepository | `list` | `GET /repositories/{workspace}/{repo_slug}/forks` | Required |
| PaginatedRepository | `load` | `GET /repositories/{workspace}` | Required |
| PaginatedRepositoryGroupPermission | `list` | `GET /repositories/{workspace}/{repo_slug}/permissions-config/groups` | Required |
| PaginatedRepositoryPermission | `list` | `GET /user/workspaces/{workspace}/permissions/repositories` | Required |
| PaginatedRepositoryPermission | `list` | `GET /workspaces/{workspace}/permissions/repositories` | Required |
| PaginatedRepositoryPermission | `load` | `GET /workspaces/{workspace}/permissions/repositories/{repo_slug}` | Required |
| PaginatedRepositoryUserPermission | `list` | `GET /repositories/{workspace}/{repo_slug}/permissions-config/users` | Required |
| PaginatedSnippet | `load` | `GET /snippets/{workspace}` | Required |
| PaginatedSnippetComment | `list` | `GET /snippets/{workspace}/{encoded_id}/comments` | Required |
| PaginatedSnippetCommit | `list` | `GET /snippets/{workspace}/{encoded_id}/commits` | Required |
| PaginatedSshUserKey | `list` | `GET /users/{selected_user}/ssh-keys` | Required |
| PaginatedTag | `list` | `GET /repositories/{workspace}/{repo_slug}/refs/tags` | Required |
| PaginatedTask | `list` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks` | Required |
| PaginatedTreeentry | `list` | `GET /repositories/{workspace}/{repo_slug}/src` | Required |
| PaginatedTreeentry | `load` | `GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}` | Required |
| PaginatedWebhookSubscription | `list` | `GET /repositories/{workspace}/{repo_slug}/hooks` | Required |
| PaginatedWebhookSubscription | `list` | `GET /workspaces/{workspace}/hooks` | Required |
| PaginatedWorkspaceAccess | `list` | `GET /user/workspaces` | Required |
| PaginatedWorkspaceMembership | `list` | `GET /workspaces/{workspace}/members` | Required |
| PaginatedWorkspaceMembership | `list` | `GET /workspaces/{workspace}/permissions` | Required |
| Pipeline | `create` | `POST /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline` | Required |
| Pipeline | `create` | `POST /repositories/{workspace}/{repo_slug}/pipelines` | Required |
| Pipeline | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}` | Required |
| Pipeline | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons` | Required |
| Pipeline | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log` | Required |
| Pipeline | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports` | Required |
| Pipeline | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases` | Required |
| Pipeline | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}` | Required |
| Pipeline | `load` | `GET /workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration` | Required |
| Pipeline | `load` | `GET /workspaces/{workspace}/pipelines-config/identity/oidc/keys.json` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines-config/caches` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}` | Required |
| Pipeline | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair` | Required |
| Pipeline | `remove` | `DELETE /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}` | Required |
| Pipeline | `remove` | `DELETE /users/{selected_user}/pipelines_config/variables/{variable_uuid}` | Required |
| Pipeline | `remove` | `DELETE /teams/{username}/pipelines_config/variables/{variable_uuid}` | Required |
| Pipeline | `remove` | `DELETE /workspaces/{workspace}/pipelines-config/variables/{variable_uuid}` | Required |
| PipelineBuildNumber | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/build_number` | Required |
| PipelineCacheContentUri | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri` | Required |
| PipelineKnownHost | `create` | `POST /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts` | Required |
| PipelineKnownHost | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}` | Required |
| PipelineKnownHost | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}` | Required |
| PipelineRunner | `create` | `POST /repositories/{workspace}/{repo_slug}/pipelines-config/runners` | Required |
| PipelineRunner | `create` | `POST /workspaces/{workspace}/pipelines-config/runners` | Required |
| PipelineRunner | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}` | Required |
| PipelineRunner | `load` | `GET /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}` | Required |
| PipelineRunner | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}` | Required |
| PipelineRunner | `update` | `PUT /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}` | Required |
| PipelineSchedule | `create` | `POST /repositories/{workspace}/{repo_slug}/pipelines_config/schedules` | Required |
| PipelineSchedule | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}` | Required |
| PipelineSchedule | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}` | Required |
| PipelineSshKeyPair | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair` | Required |
| PipelineSshKeyPair | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair` | Required |
| PipelineStep | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}` | Required |
| PipelineVariable | `create` | `POST /repositories/{workspace}/{repo_slug}/pipelines_config/variables` | Required |
| PipelineVariable | `create` | `POST /users/{selected_user}/pipelines_config/variables` | Required |
| PipelineVariable | `create` | `POST /teams/{username}/pipelines_config/variables` | Required |
| PipelineVariable | `create` | `POST /workspaces/{workspace}/pipelines-config/variables` | Required |
| PipelineVariable | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}` | Required |
| PipelineVariable | `load` | `GET /users/{selected_user}/pipelines_config/variables/{variable_uuid}` | Required |
| PipelineVariable | `load` | `GET /teams/{username}/pipelines_config/variables/{variable_uuid}` | Required |
| PipelineVariable | `load` | `GET /workspaces/{workspace}/pipelines-config/variables/{variable_uuid}` | Required |
| PipelineVariable | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}` | Required |
| PipelineVariable | `update` | `PUT /users/{selected_user}/pipelines_config/variables/{variable_uuid}` | Required |
| PipelineVariable | `update` | `PUT /teams/{username}/pipelines_config/variables/{variable_uuid}` | Required |
| PipelineVariable | `update` | `PUT /workspaces/{workspace}/pipelines-config/variables/{variable_uuid}` | Required |
| PipelinesConfig | `load` | `GET /repositories/{workspace}/{repo_slug}/pipelines_config` | Required |
| PipelinesConfig | `update` | `PUT /repositories/{workspace}/{repo_slug}/pipelines_config` | Required |
| Project | `create` | `POST /workspaces/{workspace}/projects` | Required |
| Project | `load` | `GET /workspaces/{workspace}/projects/{project_key}` | Required |
| Project | `remove` | `DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}` | Required |
| Project | `remove` | `DELETE /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}` | Required |
| Project | `remove` | `DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}` | Required |
| Project | `remove` | `DELETE /workspaces/{workspace}/projects/{project_key}` | Required |
| Project | `update` | `PUT /workspaces/{workspace}/projects/{project_key}` | Required |
| ProjectBranchingModel | `list` | `GET /workspaces/{workspace}/projects/{project_key}/branching-model` | Required |
| ProjectDeployKey | `create` | `POST /workspaces/{workspace}/projects/{project_key}/deploy-keys` | Required |
| ProjectDeployKey | `load` | `GET /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}` | Required |
| ProjectGroupPermission | `load` | `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}` | Required |
| ProjectGroupPermission | `update` | `PUT /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}` | Required |
| ProjectUserPermission | `load` | `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}` | Required |
| ProjectUserPermission | `update` | `PUT /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}` | Required |
| Property | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}` | Required |
| Property | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}` | Required |
| Property | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}` | Required |
| Property | `remove` | `DELETE /users/{selected_user}/properties/{app_key}/{property_name}` | Required |
| Property | `update` | `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}` | Required |
| Property | `update` | `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}` | Required |
| Property | `update` | `PUT /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}` | Required |
| Property | `update` | `PUT /users/{selected_user}/properties/{app_key}/{property_name}` | Required |
| Pullrequest | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline` | Required |
| Pullrequest | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge` | Required |
| Pullrequest | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/conflicts` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch` | Required |
| Pullrequest | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/activity` | Required |
| Pullrequest | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}` | Required |
| Pullrequest | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}` | Required |
| Pullrequest | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve` | Required |
| Pullrequest | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes` | Required |
| Pullrequest | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}` | Required |
| Pullrequest | `update` | `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}` | Required |
| PullrequestComment | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments` | Required |
| PullrequestComment | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}` | Required |
| PullrequestComment | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve` | Required |
| PullrequestComment | `update` | `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}` | Required |
| PullrequestCommentTask | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks` | Required |
| PullrequestCommentTask | `load` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}` | Required |
| PullrequestCommentTask | `update` | `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}` | Required |
| PullrequestMergeabilityCheck | `list` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/mergeability/checks` | Required |
| Ref | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/refs/branches/{name}` | Required |
| Ref | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/refs/tags/{name}` | Required |
| Report | `load` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}` | Required |
| Report | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}` | Required |
| Report | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}` | Required |
| Report | `update` | `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}` | Required |
| ReportAnnotation | `create` | `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations` | Required |
| ReportAnnotation | `load` | `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}` | Required |
| ReportAnnotation | `update` | `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}` | Required |
| Repository | `create` | `POST /repositories/{workspace}/{repo_slug}` | Required |
| Repository | `create` | `POST /repositories/{workspace}/{repo_slug}/forks` | Required |
| Repository | `load` | `GET /repositories/{workspace}/{repo_slug}` | Required |
| Repository | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}` | Required |
| Repository | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}` | Required |
| Repository | `remove` | `DELETE /repositories/{workspace}/{repo_slug}/hooks/{uid}` | Required |
| Repository | `remove` | `DELETE /repositories/{workspace}/{repo_slug}` | Required |
| Repository | `update` | `PUT /repositories/{workspace}/{repo_slug}` | Required |
| Repository | `update` | `PUT /repositories/{workspace}/{repo_slug}/override-settings` | Required |
| RepositoryGroupPermission | `load` | `GET /repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}` | Required |
| RepositoryGroupPermission | `update` | `PUT /repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}` | Required |
| RepositoryInheritanceState | `load` | `GET /repositories/{workspace}/{repo_slug}/override-settings` | Required |
| RepositoryUserPermission | `load` | `GET /repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}` | Required |
| RepositoryUserPermission | `update` | `PUT /repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}` | Required |
| RequestChange | `create` | `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes` | Required |
| SearchResultPage | `list` | `GET /users/{selected_user}/search/code` | Required |
| SearchResultPage | `list` | `GET /teams/{username}/search/code` | Required |
| SearchResultPage | `list` | `GET /workspaces/{workspace}/search/code` | Required |
| Snippet | `create` | `POST /snippets/{workspace}` | Required |
| Snippet | `create` | `POST /snippets` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}/{node_id}/files/{path}` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}/{node_id}` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}/files/{path}` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}/{revision}/diff` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}/{revision}/patch` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}` | Required |
| Snippet | `load` | `GET /snippets/{workspace}/{encoded_id}/watch` | Required |
| Snippet | `remove` | `DELETE /snippets/{workspace}/{encoded_id}/comments/{comment_id}` | Required |
| Snippet | `remove` | `DELETE /snippets/{workspace}/{encoded_id}/{node_id}` | Required |
| Snippet | `remove` | `DELETE /snippets/{workspace}/{encoded_id}` | Required |
| Snippet | `remove` | `DELETE /snippets/{workspace}/{encoded_id}/watch` | Required |
| Snippet | `update` | `PUT /snippets/{workspace}/{encoded_id}/{node_id}` | Required |
| Snippet | `update` | `PUT /snippets/{workspace}/{encoded_id}` | Required |
| Snippet | `update` | `PUT /snippets/{workspace}/{encoded_id}/watch` | Required |
| SnippetComment | `create` | `POST /snippets/{workspace}/{encoded_id}/comments` | Required |
| SnippetComment | `load` | `GET /snippets/{workspace}/{encoded_id}/comments/{comment_id}` | Required |
| SnippetComment | `update` | `PUT /snippets/{workspace}/{encoded_id}/comments/{comment_id}` | Required |
| SnippetCommit | `load` | `GET /snippets/{workspace}/{encoded_id}/commits/{revision}` | Required |
| Source | `create` | `POST /repositories/{workspace}/{repo_slug}/src` | Required |
| Ssh | `remove` | `DELETE /users/{selected_user}/ssh-keys/{key_id}` | Required |
| SshAccountKey | `create` | `POST /users/{selected_user}/ssh-keys` | Required |
| SshAccountKey | `load` | `GET /users/{selected_user}/ssh-keys/{key_id}` | Required |
| SshAccountKey | `update` | `PUT /users/{selected_user}/ssh-keys/{key_id}` | Required |
| Tag | `create` | `POST /repositories/{workspace}/{repo_slug}/refs/tags` | Required |
| Tag | `load` | `GET /repositories/{workspace}/{repo_slug}/refs/tags/{name}` | Required |
| User | `load` | `GET /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}` | Required |
| User | `load` | `GET /user/emails/{email}` | Required |
| User | `load` | `GET /users/{selected_user}` | Required |
| User | `load` | `GET /user` | Required |
| User | `load` | `GET /user/emails` | Required |
| User | `update` | `PUT /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}` | Required |
| Watcher | `list` | `GET /snippets/{workspace}/{encoded_id}/watchers` | Required |
| Watcher | `list` | `GET /repositories/{workspace}/{repo_slug}/watchers` | Required |
| WebhookSubscription | `create` | `POST /repositories/{workspace}/{repo_slug}/hooks` | Required |
| WebhookSubscription | `create` | `POST /workspaces/{workspace}/hooks` | Required |
| WebhookSubscription | `load` | `GET /repositories/{workspace}/{repo_slug}/hooks/{uid}` | Required |
| WebhookSubscription | `load` | `GET /workspaces/{workspace}/hooks/{uid}` | Required |
| WebhookSubscription | `update` | `PUT /repositories/{workspace}/{repo_slug}/hooks/{uid}` | Required |
| WebhookSubscription | `update` | `PUT /workspaces/{workspace}/hooks/{uid}` | Required |
| Workspace | `load` | `GET /workspaces/{workspace}` | Required |
| Workspace | `load` | `GET /workspaces/{workspace}/settings/gpg/public-key` | Required |
| Workspace | `remove` | `DELETE /workspaces/{workspace}/hooks/{uid}` | Required |
| WorkspaceMembership | `load` | `GET /workspaces/{workspace}/members/{member}` | Required |
| WorkspaceMembership | `load` | `GET /user/workspaces/{workspace}/permission` | Required |

## Connect to the API

- API server: `https://api.bitbucket.org/2.0`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Basic HTTP Authentication as per [RFC-2617](https://tools.ietf.org/html/rfc2617) (Digest not supported). Note that Basic Auth is available only with username and app password as credentials.

OAuth 2 as per [RFC-6749](https://tools.ietf.org/html/rfc6749).

API Keys can be used as Basic HTTP Authentication credentials and provide a substitute for the account&#39;s actual username and password. API Keys are only available to team accounts and there is only 1 key per account. API Keys do not support scopes and have therefore access to all contents of the account.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

