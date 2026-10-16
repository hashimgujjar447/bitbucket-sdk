import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "addon",
    "accessor": "Addon",
    "op": "load",
    "method": "GET",
    "path": "/addon/{addon_key}/client-key",
    "action": "client_key",
    "args": [
      {
        "name": "addon_key",
        "wire": "addon_key",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "addon",
    "accessor": "Addon",
    "op": "remove",
    "method": "DELETE",
    "path": "/addon",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "addon",
    "accessor": "Addon",
    "op": "update",
    "method": "PUT",
    "path": "/addon",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "application_property",
    "accessor": "ApplicationProperty",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "commit",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_attributes": [
        "public"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "application_property",
    "accessor": "ApplicationProperty",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "pullrequest_id",
        "wire": "pullrequest_id",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_attributes": [
        "public"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "application_property",
    "accessor": "ApplicationProperty",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_attributes": [
        "public"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "application_property",
    "accessor": "ApplicationProperty",
    "op": "load",
    "method": "GET",
    "path": "/users/{selected_user}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "_attributes": [
        "public"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "approve",
    "accessor": "Approve",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve",
    "args": [
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "user": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "role": "PARTICIPANT",
      "approved": true,
      "state": "approved",
      "participated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "branch",
    "accessor": "Branch",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/refs/branches",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "name": "x",
      "target": {
        "type": "x",
        "hash": "x",
        "date": "2026-01-01T00:00:00Z",
        "author": {},
        "committer": {},
        "message": "x",
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "parents": [],
        "participants": [
          {}
        ]
      },
      "merge_strategies": [
        "merge_commit"
      ],
      "default_merge_strategy": "x"
    },
    "idField": "id"
  },
  {
    "entity": "branch",
    "accessor": "Branch",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/refs/branches/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "master",
      "links": {
        "commits": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/master"
        },
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master"
        },
        "html": {
          "href": "https://bitbucket.org/atlassian/aui/branch/master"
        }
      },
      "default_merge_strategy": "squash",
      "merge_strategies": [
        "merge_commit",
        "squash",
        "fast_forward"
      ],
      "type": "branch",
      "target": {
        "hash": "e7d158ff7ed5538c28f94cd97a9ad569680fc94e",
        "repository": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
            },
            "html": {
              "href": "https://bitbucket.org/atlassian/aui"
            },
            "avatar": {
              "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
            }
          },
          "type": "repository",
          "name": "aui",
          "full_name": "atlassian/aui",
          "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
        },
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
          },
          "comments": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/comments"
          },
          "patch": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
          },
          "html": {
            "href": "https://bitbucket.org/atlassian/aui/commits/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
          },
          "diff": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
          },
          "approve": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/approve"
          },
          "statuses": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/statuses"
          }
        },
        "author": {
          "raw": "psre-renovate-bot <psre-renovate-bot@atlassian.com>",
          "type": "author",
          "user": {
            "display_name": "psre-renovate-bot",
            "uuid": "{250a442a-3ab3-4fcb-87c3-3c8f3df65ec7}",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/users/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D"
              },
              "html": {
                "href": "https://bitbucket.org/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D/"
              },
              "avatar": {
                "href": "https://secure.gravatar.com/avatar/6972ee037c9f36360170a86f544071a2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FP-3.png"
              }
            },
            "nickname": "Renovate Bot",
            "type": "user",
            "account_id": "5d5355e8c6b9320d9ea5b28d"
          }
        },
        "parents": [
          {
            "hash": "eab868a309e75733de80969a7bed1ec6d4651e06",
            "type": "commit",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/eab868a309e75733de80969a7bed1ec6d4651e06"
              },
              "html": {
                "href": "https://bitbucket.org/atlassian/aui/commits/eab868a309e75733de80969a7bed1ec6d4651e06"
              }
            }
          }
        ],
        "date": "2021-04-12T06:44:38+00:00",
        "message": "Merged in issue/NONE-renovate-master-babel-monorepo (pull request #2883)\n\nchore(deps): update babel monorepo to v7.13.15 (master)\n\nApproved-by: Chris \"Daz\" Darroch\n",
        "type": "commit"
      }
    },
    "idField": "id"
  },
  {
    "entity": "branching_model",
    "accessor": "BranchingModel",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/branching-model",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "development": {
        "name": "master",
        "branch": {
          "type": "branch",
          "name": "master",
          "target": {
            "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
          }
        },
        "use_mainbranch": true
      },
      "production": {
        "name": "production",
        "branch": {
          "type": "branch",
          "name": "production",
          "target": {
            "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
          }
        },
        "use_mainbranch": false
      },
      "branch_types": [
        {
          "kind": "release",
          "prefix": "release/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        },
        {
          "kind": "feature",
          "prefix": "feature/"
        }
      ],
      "type": "branching_model",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/.../branching-model"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "branching_model_setting",
    "accessor": "BranchingModelSetting",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/branching-model/settings",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "development": {
        "name": "null",
        "use_mainbranch": true
      },
      "production": {
        "name": "production",
        "use_mainbranch": false,
        "enabled": false
      },
      "branch_types": [
        {
          "kind": "release",
          "enabled": true,
          "prefix": "release/"
        },
        {
          "kind": "hotfix",
          "enabled": true,
          "prefix": "hotfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        }
      ],
      "type": "branching_model_settings",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/.../branching-model/settings"
        }
      },
      "default_branch_deletion": "false"
    },
    "idField": "id"
  },
  {
    "entity": "branching_model_setting",
    "accessor": "BranchingModelSetting",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/branching-model/settings",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "development": {
        "is_valid": true,
        "name": "null",
        "use_mainbranch": true
      },
      "production": {
        "is_valid": true,
        "name": "production",
        "use_mainbranch": false,
        "enabled": false
      },
      "branch_types": [
        {
          "kind": "release",
          "enabled": true,
          "prefix": "release/"
        },
        {
          "kind": "hotfix",
          "enabled": true,
          "prefix": "hotfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        }
      ],
      "type": "branching_model_settings",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/.../branching-model/settings"
        }
      },
      "default_branch_deletion": "false"
    },
    "idField": "id"
  },
  {
    "entity": "branching_model_setting",
    "accessor": "BranchingModelSetting",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/projects/{project_key}/branching-model/settings",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "development": {
        "use_mainbranch": true
      },
      "production": {
        "enabled": true,
        "use_mainbranch": false,
        "name": "production"
      },
      "branch_types": [
        {
          "kind": "bugfix",
          "enabled": true,
          "prefix": "bugfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        }
      ],
      "default_branch_deletion": "false"
    },
    "idField": "id"
  },
  {
    "entity": "branching_model_setting",
    "accessor": "BranchingModelSetting",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/branching-model/settings",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "development": {
        "use_mainbranch": true
      },
      "production": {
        "enabled": true,
        "use_mainbranch": false,
        "name": "production"
      },
      "branch_types": [
        {
          "kind": "bugfix",
          "enabled": true,
          "prefix": "bugfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        }
      ],
      "default_branch_deletion": "true"
    },
    "idField": "id"
  },
  {
    "entity": "branchrestriction",
    "accessor": "Branchrestriction",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/branch-restrictions",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "kind": "push",
      "branch_match_kind": "branching_model",
      "branch_type": "feature",
      "pattern": "x",
      "pipelines_source_branches": [
        "x"
      ],
      "value": 1,
      "users": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "groups": [
        {
          "type": "x",
          "links": {
            "self": {},
            "html": {}
          },
          "owner": {},
          "workspace": {},
          "name": "x",
          "slug": "x",
          "full_slug": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "branchrestriction",
    "accessor": "Branchrestriction",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "kind": "push",
      "branch_match_kind": "branching_model",
      "branch_type": "feature",
      "pattern": "x",
      "pipelines_source_branches": [
        "x"
      ],
      "value": 1,
      "users": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "groups": [
        {
          "type": "x",
          "links": {
            "self": {},
            "html": {}
          },
          "owner": {},
          "workspace": {},
          "name": "x",
          "slug": "x",
          "full_slug": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "branchrestriction",
    "accessor": "Branchrestriction",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "branchrestriction",
    "accessor": "Branchrestriction",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "kind": "push",
      "branch_match_kind": "branching_model",
      "branch_type": "feature",
      "pattern": "x",
      "pipelines_source_branches": [
        "x"
      ],
      "value": 1,
      "users": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "groups": [
        {
          "type": "x",
          "links": {
            "self": {},
            "html": {}
          },
          "owner": {},
          "workspace": {},
          "name": "x",
          "slug": "x",
          "full_slug": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "comment_resolution",
    "accessor": "CommentResolution",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve",
    "action": "resolve",
    "args": [
      {
        "name": "id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "user": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "created_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve",
    "action": "approve",
    "args": [
      {
        "name": "id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "user": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "role": "PARTICIPANT",
      "approved": true,
      "state": "approved",
      "participated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments",
    "action": "comment",
    "args": [
      {
        "name": "id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments",
    "action": "comment",
    "args": [
      {
        "name": "id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "id": 1,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "content": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "user": {},
          "deleted": true,
          "inline": {
            "from": 1,
            "to": 1,
            "start_from": 1,
            "start_to": 1,
            "path": "x"
          },
          "links": {
            "self": {},
            "html": {},
            "code": {}
          },
          "commit": {
            "participants": []
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "user": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "deleted": true,
      "inline": {
        "from": 1,
        "to": 1,
        "start_from": 1,
        "start_to": 1,
        "path": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "code": {
          "href": "x",
          "name": "x"
        }
      },
      "commit": {
        "type": "x",
        "hash": "x",
        "date": "2026-01-01T00:00:00Z",
        "author": {},
        "committer": {},
        "message": "x",
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "parents": [],
        "participants": [
          {}
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}",
    "args": [
      {
        "name": "id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "rendered": {
        "message": {
          "raw": "Add a GEORDI_OUTPUT_DIR setting",
          "markup": "markdown",
          "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
          "type": "rendered"
        }
      },
      "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
      "repository": {
        "name": "geordi",
        "type": "repository",
        "full_name": "bitbucket/geordi",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
          },
          "html": {
            "href": "https://bitbucket.org/bitbucket/geordi"
          },
          "avatar": {
            "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
          }
        },
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "comments": {
          "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
        },
        "patch": {
          "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "html": {
          "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "diff": {
          "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "approve": {
          "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
        },
        "statuses": {
          "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
        }
      },
      "author": {
        "raw": "Brodie Rao <a@b.c>",
        "type": "author",
        "user": {
          "display_name": "Brodie Rao",
          "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
            },
            "html": {
              "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
            },
            "avatar": {
              "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
            }
          },
          "type": "user",
          "nickname": "brodie",
          "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
        }
      },
      "summary": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
      },
      "participants": [],
      "parents": [
        {
          "type": "commit",
          "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
            },
            "html": {
              "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
            }
          }
        }
      ],
      "date": "2012-07-16T19:37:54+00:00",
      "message": "Add a GEORDI_OUTPUT_DIR setting",
      "type": "commit"
    },
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "revspec",
        "wire": "revspec",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "hash": "x",
      "date": "2026-01-01T00:00:00Z",
      "author": {
        "type": "x",
        "raw": "x",
        "user": {}
      },
      "committer": {
        "type": "x",
        "raw": "x",
        "user": {}
      },
      "message": "x",
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "parents": [],
      "participants": [
        {
          "type": "x",
          "user": {},
          "role": "PARTICIPANT",
          "approved": true,
          "state": "approved",
          "participated_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve",
    "action": "approve",
    "args": [
      {
        "name": "id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "commit",
    "accessor": "Commit",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "commitstatus",
    "accessor": "Commitstatus",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "commit": {
          "href": "x",
          "name": "x"
        }
      },
      "key": "x",
      "refname": "x",
      "url": "x",
      "state": "FAILED",
      "name": "x",
      "description": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "commitstatus",
    "accessor": "Commitstatus",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "key",
        "wire": "key",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "commit": {
          "href": "x",
          "name": "x"
        }
      },
      "key": "x",
      "refname": "x",
      "url": "x",
      "state": "FAILED",
      "name": "x",
      "description": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "commitstatus",
    "accessor": "Commitstatus",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "key",
        "wire": "key",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "commit": {
          "href": "x",
          "name": "x"
        }
      },
      "key": "x",
      "refname": "x",
      "url": "x",
      "state": "FAILED",
      "name": "x",
      "description": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "default_reviewer",
    "accessor": "DefaultReviewer",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}",
    "args": [
      {
        "name": "id",
        "wire": "target_username",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "created_on": "2026-01-01T00:00:00Z",
      "display_name": "x",
      "uuid": "x"
    },
    "idField": "id"
  },
  {
    "entity": "default_reviewer",
    "accessor": "DefaultReviewer",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}",
    "args": [
      {
        "name": "id",
        "wire": "target_username",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "created_on": "2026-01-01T00:00:00Z",
      "display_name": "x",
      "uuid": "x"
    },
    "idField": "id"
  },
  {
    "entity": "deploy_key",
    "accessor": "DeployKey",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/deploy-keys",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 123,
      "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
      "label": "mydeploykey",
      "type": "deploy_key",
      "created_on": "2018-08-15T23:50:59.993890+00:00",
      "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
        }
      },
      "last_used": null,
      "comment": "mleu@C02W454JHTD8"
    },
    "idField": "id"
  },
  {
    "entity": "deploy_key",
    "accessor": "DeployKey",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}",
    "args": [
      {
        "name": "id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "comment": "mleu@C02W454JHTD8",
      "last_used": null,
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
        }
      },
      "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "label": "mykey",
      "created_on": "2018-08-15T23:50:59.993890+00:00",
      "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
      "id": 1234,
      "type": "deploy_key"
    },
    "idField": "id"
  },
  {
    "entity": "deploy_key",
    "accessor": "DeployKey",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}",
    "args": [
      {
        "name": "id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "comment": "newcomment",
      "last_used": null,
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
        }
      },
      "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "label": "newlabel",
      "created_on": "2018-08-15T23:50:59.993890+00:00",
      "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
      "id": 1234,
      "type": "deploy_key"
    },
    "idField": "id"
  },
  {
    "entity": "deployment",
    "accessor": "Deployment",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes",
    "args": [
      {
        "name": "environment_uuid",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "deployment",
    "accessor": "Deployment",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "deployment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "state": {
        "type": "x"
      },
      "environment": {
        "type": "x",
        "uuid": "x",
        "name": "x"
      },
      "release": {
        "type": "x",
        "uuid": "x",
        "name": "x",
        "url": "x",
        "commit": {
          "participants": []
        },
        "created_on": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "deployment",
    "accessor": "Deployment",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}",
    "args": [
      {
        "name": "environment_uuid",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "deployment",
    "accessor": "Deployment",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}",
    "args": [
      {
        "name": "key_id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "deployment",
    "accessor": "Deployment",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}",
    "args": [
      {
        "name": "key_id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "deployment_environment",
    "accessor": "DeploymentEnvironment",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/environments",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "deployment_environment",
    "accessor": "DeploymentEnvironment",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "deployment_variable",
    "accessor": "DeploymentVariable",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables",
    "args": [
      {
        "name": "environment_id",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "deployment_variable",
    "accessor": "DeploymentVariable",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
    "args": [
      {
        "name": "environment_id",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "download",
    "accessor": "Download",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/downloads",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "download",
    "accessor": "Download",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/downloads/{filename}",
    "args": [
      {
        "name": "id",
        "wire": "filename",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "download",
    "accessor": "Download",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/downloads",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "download",
    "accessor": "Download",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/downloads/{filename}",
    "args": [
      {
        "name": "id",
        "wire": "filename",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "effective_default_reviewer",
    "accessor": "EffectiveDefaultReviewer",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/effective-default-reviewers",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 20,
      "values": [
        {
          "user": {
            "display_name": "Patrick Wolf",
            "uuid": "{9565301a-a3cf-4b5d-88f4-dd6af8078d7e}"
          },
          "reviewer_type": "project",
          "type": "default_reviewer"
        },
        {
          "user": {
            "display_name": "Davis Lee",
            "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
          },
          "reviewer_type": "repository",
          "type": "default_reviewer"
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "effective_repo_branching_model",
    "accessor": "EffectiveRepoBranchingModel",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/effective-branching-model",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "branch_types": [
        {
          "kind": "feature",
          "prefix": "x"
        }
      ],
      "development": {
        "branch": {
          "type": "x",
          "links": {
            "self": {},
            "commits": {},
            "html": {}
          },
          "name": "x",
          "target": {},
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "name": "x",
        "use_mainbranch": true
      },
      "production": {
        "branch": {
          "type": "x",
          "links": {
            "self": {},
            "commits": {},
            "html": {}
          },
          "name": "x",
          "target": {},
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "name": "x",
        "use_mainbranch": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "gpg",
    "accessor": "Gpg",
    "op": "remove",
    "method": "DELETE",
    "path": "/users/{selected_user}/gpg-keys/{fingerprint}",
    "args": [
      {
        "name": "fingerprint",
        "wire": "fingerprint",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "gpg_account_key",
    "accessor": "GpgAccountKey",
    "op": "create",
    "method": "POST",
    "path": "/users/{selected_user}/gpg-keys",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "added_on": "2024-09-24T12:09:33.154081+00:00",
      "created_on": "2018-03-20T13:09:04.207005+00:00",
      "expires_on": null,
      "fingerprint": "h4m26ppxrol7blr7spbc7lhyymokdbnkxd06kzrt",
      "key_id": "ymokdbnkxd06kzrt",
      "last_used": "2024-09-25T15:18:05.196003+00:00",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys/H4M26PPXROL7BLR7SPBC7LHYYMOKDBNKXD06KZRT"
        }
      },
      "name": "Alice's OpenPGP key",
      "owner": {
        "display_name": "Mark Adams",
        "links": {
          "avatar": {
            "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
          },
          "html": {
            "href": "https://bitbucket.org/markadams-atl/"
          },
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
          }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
      },
      "parent_fingerprint": null,
      "type": "gpg_key"
    },
    "idField": "id"
  },
  {
    "entity": "gpg_account_key",
    "accessor": "GpgAccountKey",
    "op": "load",
    "method": "GET",
    "path": "/users/{selected_user}/gpg-keys/{fingerprint}",
    "args": [
      {
        "name": "fingerprint",
        "wire": "fingerprint",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "added_on": "2024-09-24T12:09:33.154081+00:00",
      "created_on": "2018-03-20T13:09:04.207005+00:00",
      "expires_on": null,
      "fingerprint": "h4m26ppxrol7blr7spbc7lhyymokdbnkxd06kzrt",
      "key_id": "ymokdbnkxd06kzrt",
      "last_used": "2024-09-25T15:18:05.196003+00:00",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys/H4M26PPXROL7BLR7SPBC7LHYYMOKDBNKXD06KZRT"
        }
      },
      "name": "Alice's OpenPGP key",
      "owner": {
        "display_name": "Mark Adams",
        "links": {
          "avatar": {
            "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
          },
          "html": {
            "href": "https://bitbucket.org/markadams-atl/"
          },
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
          }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
      },
      "parent_fingerprint": null,
      "type": "gpg_key"
    },
    "idField": "id"
  },
  {
    "entity": "merge_queue",
    "accessor": "MergeQueue",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "merge_queue_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "state": "x"
    },
    "idField": "id"
  },
  {
    "entity": "merge_queue",
    "accessor": "MergeQueue",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}",
    "args": [
      {
        "name": "id",
        "wire": "merge_queue_uuid",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pullrequest_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "merge_queue_pullrequest",
    "accessor": "MergeQueuePullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue/{pullrequest_id}",
    "args": [
      {
        "name": "merge_queue_id",
        "wire": "merge_queue_uuid",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pullrequest_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "queued_pullrequest",
      "status": "QUEUED",
      "rank": 1,
      "queued_on": "2026-01-01T00:00:00Z",
      "last_activity_on": "2026-01-01T00:00:00Z",
      "merge_queue": {
        "type": "merge_queue",
        "uuid": "x"
      },
      "pipeline": {
        "type": "x",
        "uuid": "x",
        "build_number": 1,
        "creator": {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "target": {
          "type": "x"
        },
        "trigger": {
          "type": "x"
        },
        "state": {
          "type": "x"
        },
        "variables": [
          {
            "type": "x",
            "uuid": "x",
            "key": "x",
            "value": "x",
            "secured": true
          }
        ],
        "created_on": "2026-01-01T00:00:00Z",
        "completed_on": "2026-01-01T00:00:00Z",
        "build_seconds_used": 1,
        "configuration_sources": [
          {
            "source": "x",
            "uri": "x"
          }
        ],
        "links": {
          "type": "x",
          "self": {},
          "steps": {}
        }
      },
      "pullrequest": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "approve": {
            "href": "x",
            "name": "x"
          },
          "diff": {
            "href": "x",
            "name": "x"
          },
          "diffstat": {
            "href": "x",
            "name": "x"
          },
          "comments": {
            "href": "x",
            "name": "x"
          },
          "activity": {
            "href": "x",
            "name": "x"
          },
          "merge": {
            "href": "x",
            "name": "x"
          },
          "decline": {
            "href": "x",
            "name": "x"
          },
          "mergeability_checks": {
            "href": "x",
            "name": "x"
          }
        },
        "id": 1,
        "title": "x",
        "rendered": {
          "title": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "description": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "reason": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          }
        },
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "state": "OPEN",
        "author": {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "source": {
          "repository": {
            "type": "x",
            "links": {},
            "uuid": "x",
            "full_name": "x",
            "is_private": true,
            "scm": "git",
            "name": "x",
            "description": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "size": 1,
            "language": "x",
            "has_issues": true,
            "has_wiki": true,
            "fork_policy": "allow_forks"
          },
          "branch": {
            "name": "x",
            "merge_strategies": [
              "merge_commit"
            ],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "destination": {
          "repository": {
            "type": "x",
            "links": {},
            "uuid": "x",
            "full_name": "x",
            "is_private": true,
            "scm": "git",
            "name": "x",
            "description": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "size": 1,
            "language": "x",
            "has_issues": true,
            "has_wiki": true,
            "fork_policy": "allow_forks"
          },
          "branch": {
            "name": "x",
            "merge_strategies": [
              "merge_commit"
            ],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "merge_commit": {
          "hash": "x"
        },
        "comment_count": 1,
        "task_count": 1,
        "close_source_branch": true,
        "closed_by": {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "reason": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "reviewers": [
          {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          }
        ],
        "participants": [
          {
            "type": "x",
            "role": "PARTICIPANT",
            "approved": true,
            "state": "approved",
            "participated_on": "2026-01-01T00:00:00Z"
          }
        ],
        "draft": true,
        "queued": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "paginated_account",
    "accessor": "PaginatedAccount",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/default-reviewers",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "avatar": {
              "href": "x",
              "name": "x"
            }
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_annotation",
    "accessor": "PaginatedAnnotation",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "report_id",
        "wire": "reportId",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "external_id": "x",
          "uuid": "x",
          "annotation_type": "VULNERABILITY",
          "path": "x",
          "line": 1,
          "summary": "x",
          "details": "x",
          "result": "PASSED",
          "severity": "CRITICAL",
          "link": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_branch",
    "accessor": "PaginatedBranch",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/refs/branches",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 1,
      "size": 187,
      "values": [
        {
          "name": "issue-9.3/AUI-5343-assistive-class",
          "links": {
            "commits": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/issue-9.3/AUI-5343-assistive-class"
            },
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/issue-9.3/AUI-5343-assistive-class"
            },
            "html": {
              "href": "https://bitbucket.org/atlassian/aui/branch/issue-9.3/AUI-5343-assistive-class"
            }
          },
          "default_merge_strategy": "squash",
          "merge_strategies": [
            "merge_commit",
            "squash",
            "fast_forward"
          ],
          "type": "branch",
          "target": {
            "hash": "e5d1cde9069fcb9f0af90403a4de2150c125a148",
            "repository": {
              "links": {
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
                },
                "html": {
                  "href": "https://bitbucket.org/atlassian/aui"
                },
                "avatar": {
                  "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
                }
              },
              "type": "repository",
              "name": "aui",
              "full_name": "atlassian/aui",
              "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
            },
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148"
              },
              "comments": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/comments"
              },
              "patch": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e5d1cde9069fcb9f0af90403a4de2150c125a148"
              },
              "html": {
                "href": "https://bitbucket.org/atlassian/aui/commits/e5d1cde9069fcb9f0af90403a4de2150c125a148"
              },
              "diff": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e5d1cde9069fcb9f0af90403a4de2150c125a148"
              },
              "approve": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/approve"
              },
              "statuses": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/statuses"
              }
            },
            "author": {
              "raw": "Marcin Konopka <mkonopka@atlassian.com>",
              "type": "author",
              "user": {
                "display_name": "Marcin Konopka",
                "uuid": "{47cc24f4-2a05-4420-88fe-0417535a110a}",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D"
                  },
                  "html": {
                    "href": "https://bitbucket.org/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D/"
                  },
                  "avatar": {
                    "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MK-1.png"
                  }
                },
                "nickname": "Marcin Konopka",
                "type": "user",
                "account_id": "60113d2b47a9540069f4de03"
              }
            },
            "parents": [
              {
                "hash": "87f7fc92b00464ae47b13ef65c91884e4ac9be51",
                "type": "commit",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
                  },
                  "html": {
                    "href": "https://bitbucket.org/atlassian/aui/commits/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
                  }
                }
              }
            ],
            "date": "2021-04-13T13:44:49+00:00",
            "message": "wip\n",
            "type": "commit"
          }
        }
      ],
      "page": 1,
      "next": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1&page=2"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_branchrestriction",
    "accessor": "PaginatedBranchrestriction",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/branch-restrictions",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "kind": "v1",
      "pattern": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "kind",
      "pattern"
    ],
    "queryArgs": [
      {
        "name": "kind",
        "wire": "kind"
      },
      {
        "name": "pattern",
        "wire": "pattern"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            }
          },
          "id": 1,
          "kind": "push",
          "branch_match_kind": "branching_model",
          "branch_type": "feature",
          "pattern": "x",
          "pipelines_source_branches": [
            "x"
          ],
          "value": 1,
          "users": [
            {}
          ],
          "groups": [
            {}
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_changeset",
    "accessor": "PaginatedChangeset",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/commits/{revision}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "revision",
        "wire": "revision",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "hash": "x",
          "date": "2026-01-01T00:00:00Z",
          "author": {
            "type": "x",
            "raw": "x"
          },
          "committer": {
            "type": "x",
            "raw": "x"
          },
          "message": "x",
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "parents": []
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_changeset",
    "accessor": "PaginatedChangeset",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/commits",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "hash": "x",
          "date": "2026-01-01T00:00:00Z",
          "author": {
            "type": "x",
            "raw": "x"
          },
          "committer": {
            "type": "x",
            "raw": "x"
          },
          "message": "x",
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "parents": []
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_changeset",
    "accessor": "PaginatedChangeset",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commits",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "hash": "x",
          "date": "2026-01-01T00:00:00Z",
          "author": {
            "type": "x",
            "raw": "x"
          },
          "committer": {
            "type": "x",
            "raw": "x"
          },
          "message": "x",
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "parents": []
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_changeset",
    "accessor": "PaginatedChangeset",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commits/{revision}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "revision",
        "wire": "revision",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "hash": "x",
          "date": "2026-01-01T00:00:00Z",
          "author": {
            "type": "x",
            "raw": "x"
          },
          "committer": {
            "type": "x",
            "raw": "x"
          },
          "message": "x",
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "parents": []
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_commitstatus",
    "accessor": "PaginatedCommitstatus",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "q": "v1",
      "refname": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "refname",
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "refname",
        "wire": "refname"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "commit": {
              "href": "x",
              "name": "x"
            }
          },
          "key": "x",
          "refname": "x",
          "url": "x",
          "state": "FAILED",
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_commitstatus",
    "accessor": "PaginatedCommitstatus",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses",
    "args": [
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "commit": {
              "href": "x",
              "name": "x"
            }
          },
          "key": "x",
          "refname": "x",
          "url": "x",
          "state": "FAILED",
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_default_reviewer_and_type",
    "accessor": "PaginatedDefaultReviewerAndType",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/default-reviewers",
    "args": [
      {
        "name": "project_key",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "user": {
            "display_name": "Davis Lee",
            "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
          },
          "reviewer_type": "project",
          "type": "default_reviewer"
        },
        {
          "user": {
            "display_name": "Jorge Rodriguez",
            "uuid": "{1aa43376-260d-4a0b-9660-f62672b9655d}"
          },
          "reviewer_type": "project",
          "type": "default_reviewer"
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "paginated_deploy_key",
    "accessor": "PaginatedDeployKey",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/deploy-keys",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "id": 123,
          "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
          "label": "mykey",
          "type": "deploy_key",
          "created_on": "2018-08-15T23:50:59.993890+00:00",
          "repository": {
            "full_name": "mleu/test",
            "name": "test",
            "type": "repository",
            "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
          },
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
            }
          },
          "last_used": null,
          "comment": "mleu@C02W454JHTD8"
        }
      ],
      "page": 1,
      "size": 1
    },
    "idField": "id"
  },
  {
    "entity": "paginated_deployment",
    "accessor": "PaginatedDeployment",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/deployments",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "state": {
            "type": "x"
          },
          "environment": {
            "type": "x",
            "uuid": "x",
            "name": "x"
          },
          "release": {
            "type": "x",
            "uuid": "x",
            "name": "x",
            "url": "x",
            "created_on": "2026-01-01T00:00:00Z"
          }
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_deployment_variable",
    "accessor": "PaginatedDeploymentVariable",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables",
    "args": [
      {
        "name": "environment_id",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_diffstat",
    "accessor": "PaginatedDiffstat",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/diffstat/{spec}",
    "args": [
      {
        "name": "id",
        "wire": "spec",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "ignore_whitespace": "v1",
      "merge": "v1",
      "path": "v1",
      "rename": "v1",
      "topic": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "ignore_whitespace",
      "merge",
      "path",
      "renames",
      "topic"
    ],
    "queryArgs": [
      {
        "name": "ignore_whitespace",
        "wire": "ignore_whitespace"
      },
      {
        "name": "merge",
        "wire": "merge"
      },
      {
        "name": "path",
        "wire": "path"
      },
      {
        "name": "rename",
        "wire": "renames"
      },
      {
        "name": "topic",
        "wire": "topic"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 500,
      "values": [
        {
          "type": "diffstat",
          "status": "modified",
          "lines_removed": 1,
          "lines_added": 2,
          "old": {
            "path": "setup.py",
            "escaped_path": "setup.py",
            "type": "commit_file",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
              }
            }
          },
          "new": {
            "path": "setup.py",
            "escaped_path": "setup.py",
            "type": "commit_file",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
              }
            }
          }
        }
      ],
      "page": 1,
      "size": 1
    },
    "idField": "id"
  },
  {
    "entity": "paginated_environment",
    "accessor": "PaginatedEnvironment",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/environments",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "name": "x"
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_file",
    "accessor": "PaginatedFile",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}",
    "args": [
      {
        "name": "commit",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {
      "q": "v1",
      "rename": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "renames",
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "rename",
        "wire": "renames"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "values": [
        {
          "commit": {
            "date": "2011-05-17T07:32:09+00:00"
          },
          "path": "README.rst"
        },
        {
          "commit": {
            "date": "2011-05-16T06:33:28+00:00"
          },
          "path": "README.txt"
        },
        {
          "commit": {
            "date": "2011-05-16T06:15:39+00:00"
          },
          "path": "README.txt"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_file_conflict",
    "accessor": "PaginatedFileConflict",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/file-conflicts/{spec}",
    "args": [
      {
        "name": "id",
        "wire": "spec",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 500,
      "page": 1,
      "size": 2,
      "values": [
        {
          "path": "src/main/App.java",
          "scenario": "content",
          "message": "File modified in both source and destination"
        },
        {
          "path": "README.md",
          "scenario": "content",
          "message": "File modified in both source and destination"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_gpg_user_key",
    "accessor": "PaginatedGpgUserKey",
    "op": "list",
    "method": "GET",
    "path": "/users/{selected_user}/gpg-keys",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "pagelen": 10,
      "size": 1,
      "values": [
        {
          "added_on": "2024-09-24T12:09:33.154081+00:00",
          "created_on": "2018-03-20T13:09:04.207005+00:00",
          "expires_on": null,
          "fingerprint": "h4m26ppxrol7blr7spbc7lhyymokdbnkxd06kzrt",
          "key_id": "ymokdbnkxd06kzrt",
          "last_used": "2024-09-25T15:18:05.196003+00:00",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys/H4M26PPXROL7BLR7SPBC7LHYYMOKDBNKXD06KZRT"
            }
          },
          "name": "Alice's OpenPGP key",
          "owner": {
            "display_name": "Mark Adams",
            "links": {
              "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
              },
              "html": {
                "href": "https://bitbucket.org/markadams-atl/"
              },
              "self": {
                "href": "https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
              }
            },
            "type": "user",
            "username": "markadams-atl",
            "nickname": "markadams-atl",
            "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
          },
          "parent_fingerprint": null,
          "type": "gpg_key"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_hook_event",
    "accessor": "PaginatedHookEvent",
    "op": "load",
    "method": "GET",
    "path": "/hook_events/{subject_type}",
    "args": [
      {
        "name": "id",
        "wire": "subject_type",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "pagelen": 30,
      "size": 4,
      "values": [
        {
          "category": "Repository",
          "description": "Whenever a repository push occurs",
          "event": "repo:push",
          "label": "Push"
        },
        {
          "category": "Repository",
          "description": "Whenever a repository fork occurs",
          "event": "repo:fork",
          "label": "Fork"
        },
        {
          "category": "Repository",
          "description": "Whenever a repository import occurs",
          "event": "repo:imported",
          "label": "Import"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_hook_event",
    "accessor": "PaginatedHookEvent",
    "op": "load",
    "method": "GET",
    "path": "/hook_events",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "repository": {
        "links": {
          "events": {
            "href": "https://api.bitbucket.org/2.0/hook_events/repository"
          }
        }
      },
      "workspace": {
        "links": {
          "events": {
            "href": "https://api.bitbucket.org/2.0/hook_events/workspace"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "paginated_merge_queue",
    "accessor": "PaginatedMergeQueue",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/merge-queues",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "page": 1,
      "pagelen": 10,
      "target_branch": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "target_branch",
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      },
      {
        "name": "target_branch",
        "wire": "target_branch"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "size": 1,
      "pagelen": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "name": "x",
          "state": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_merge_queue_pullrequest",
    "accessor": "PaginatedMergeQueuePullrequest",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/merge-queues/{merge_queue_uuid}/queue",
    "args": [
      {
        "name": "merge_queue_id",
        "wire": "merge_queue_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "page": 1,
      "pagelen": 10
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "size": 1,
      "pagelen": 1,
      "values": [
        {
          "type": "queued_pullrequest",
          "status": "QUEUED",
          "rank": 1,
          "queued_on": "2026-01-01T00:00:00Z",
          "last_activity_on": "2026-01-01T00:00:00Z",
          "merge_queue": {
            "type": "merge_queue",
            "uuid": "x"
          },
          "pipeline": {
            "type": "x",
            "uuid": "x",
            "build_number": 1,
            "creator": {},
            "repository": {},
            "target": {},
            "trigger": {},
            "state": {},
            "variables": [],
            "created_on": "2026-01-01T00:00:00Z",
            "completed_on": "2026-01-01T00:00:00Z",
            "build_seconds_used": 1,
            "configuration_sources": [
              {}
            ],
            "links": {}
          },
          "pullrequest": {
            "type": "x",
            "links": {
              "self": {},
              "html": {},
              "commits": {},
              "approve": {},
              "diff": {},
              "diffstat": {},
              "comments": {},
              "activity": {},
              "merge": {},
              "decline": {},
              "mergeability_checks": {}
            },
            "id": 1,
            "title": "x",
            "rendered": {
              "title": {},
              "description": {},
              "reason": {}
            },
            "summary": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "state": "OPEN",
            "author": {},
            "source": {
              "branch": {},
              "commit": {}
            },
            "destination": {
              "branch": {},
              "commit": {}
            },
            "merge_commit": {
              "hash": "x"
            },
            "comment_count": 1,
            "task_count": 1,
            "close_source_branch": true,
            "closed_by": {},
            "reason": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "reviewers": [],
            "participants": [],
            "draft": true,
            "queued": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline",
    "accessor": "PaginatedPipeline",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "created_on": "v1",
      "creator_uuid": "v1",
      "page": 1,
      "pagelen": 10,
      "sort": "v1",
      "status": "v1",
      "target_branch": "v1",
      "target_commit_hash": "v1",
      "target_ref_name": "v1",
      "target_ref_type": "v1",
      "target_selector_pattern": "v1",
      "target_selector_type": "v1",
      "trigger_type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "creator.uuid",
      "target.ref_type",
      "target.ref_name",
      "target.branch",
      "target.commit.hash",
      "target.selector.pattern",
      "target.selector.type",
      "created_on",
      "trigger_type",
      "status",
      "sort",
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "created_on",
        "wire": "created_on"
      },
      {
        "name": "creator_uuid",
        "wire": "creator.uuid"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "status",
        "wire": "status"
      },
      {
        "name": "target_branch",
        "wire": "target.branch"
      },
      {
        "name": "target_commit_hash",
        "wire": "target.commit.hash"
      },
      {
        "name": "target_ref_name",
        "wire": "target.ref_name"
      },
      {
        "name": "target_ref_type",
        "wire": "target.ref_type"
      },
      {
        "name": "target_selector_pattern",
        "wire": "target.selector.pattern"
      },
      {
        "name": "target_selector_type",
        "wire": "target.selector.type"
      },
      {
        "name": "trigger_type",
        "wire": "trigger_type"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "build_number": 1,
          "creator": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "repository": {
            "type": "x",
            "links": {},
            "uuid": "x",
            "full_name": "x",
            "is_private": true,
            "scm": "git",
            "name": "x",
            "description": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "size": 1,
            "language": "x",
            "has_issues": true,
            "has_wiki": true,
            "fork_policy": "allow_forks"
          },
          "target": {
            "type": "x"
          },
          "trigger": {
            "type": "x"
          },
          "state": {
            "type": "x"
          },
          "variables": [
            {}
          ],
          "created_on": "2026-01-01T00:00:00Z",
          "completed_on": "2026-01-01T00:00:00Z",
          "build_seconds_used": 1,
          "configuration_sources": [
            {
              "source": "x",
              "uri": "x"
            }
          ],
          "links": {
            "type": "x"
          }
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_cache",
    "accessor": "PaginatedPipelineCache",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "pipeline_uuid": "x",
          "step_uuid": "x",
          "name": "x",
          "key_hash": "x",
          "path": "x",
          "file_size_bytes": 1,
          "created_on": "2026-01-01T00:00:00Z"
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_known_host",
    "accessor": "PaginatedPipelineKnownHost",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "hostname": "x",
          "public_key": {
            "type": "x",
            "key_type": "x",
            "key": "x",
            "md5_fingerprint": "x",
            "sha256_fingerprint": "x"
          }
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_runner",
    "accessor": "PaginatedPipelineRunner",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/runners",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "name": "x",
          "labels": [
            "x"
          ],
          "state": {
            "type": "x",
            "status": "UNREGISTERED",
            "updated_on": "2026-01-01T00:00:00Z",
            "cordoned": true
          },
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "oauth_client": {
            "type": "x",
            "id": "x",
            "secret": "x",
            "token_endpoint": "x",
            "audience": "x"
          }
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_runner",
    "accessor": "PaginatedPipelineRunner",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/pipelines-config/runners",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "name": "x",
          "labels": [
            "x"
          ],
          "state": {
            "type": "x",
            "status": "UNREGISTERED",
            "updated_on": "2026-01-01T00:00:00Z",
            "cordoned": true
          },
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "oauth_client": {
            "type": "x",
            "id": "x",
            "secret": "x",
            "token_endpoint": "x",
            "audience": "x"
          }
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_schedule",
    "accessor": "PaginatedPipelineSchedule",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "enabled": true,
          "target": {
            "ref_type": "branch",
            "ref_name": "x"
          },
          "cron_pattern": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_schedule_execution",
    "accessor": "PaginatedPipelineScheduleExecution",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "schedule_id",
        "wire": "schedule_uuid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x"
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_step",
    "accessor": "PaginatedPipelineStep",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps",
    "args": [
      {
        "name": "pipeline_id",
        "wire": "pipeline_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "started_on": "2026-01-01T00:00:00Z",
          "completed_on": "2026-01-01T00:00:00Z",
          "state": {
            "type": "x"
          },
          "image": {
            "name": "x",
            "username": "x",
            "password": "x",
            "email": "x"
          },
          "setup_commands": [
            {
              "name": "x",
              "command": "x"
            }
          ],
          "script_commands": [
            {
              "name": "x",
              "command": "x"
            }
          ]
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_variable",
    "accessor": "PaginatedPipelineVariable",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_variable",
    "accessor": "PaginatedPipelineVariable",
    "op": "list",
    "method": "GET",
    "path": "/users/{selected_user}/pipelines_config/variables",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_variable",
    "accessor": "PaginatedPipelineVariable",
    "op": "list",
    "method": "GET",
    "path": "/teams/{username}/pipelines_config/variables",
    "args": [
      {
        "name": "username",
        "wire": "username",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pipeline_variable",
    "accessor": "PaginatedPipelineVariable",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/pipelines-config/variables",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_project",
    "accessor": "PaginatedProject",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "html": {
              "href": "x",
              "name": "x"
            },
            "avatar": {
              "href": "x",
              "name": "x"
            }
          },
          "uuid": "x",
          "key": "x",
          "owner": {},
          "name": "x",
          "description": "x",
          "is_private": true,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "has_publicly_visible_repos": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_project_deploy_key",
    "accessor": "PaginatedProjectDeployKey",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/deploy-keys",
    "args": [
      {
        "name": "project_key",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "comment": "thakseth@C02W454JHTD8",
          "last_used": null,
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
            }
          },
          "label": "test",
          "project": {
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
              }
            },
            "type": "project",
            "name": "cooperative standard",
            "key": "TEST_PROJECT",
            "uuid": "{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
          },
          "created_on": "2021-07-28T21:20:19.491721+00:00",
          "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
          "type": "project_deploy_key",
          "id": 1234
        }
      ],
      "page": 1,
      "size": 1
    },
    "idField": "id"
  },
  {
    "entity": "paginated_project_group_permission",
    "accessor": "PaginatedProjectGroupPermission",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "type": "project_group_permission",
          "group": {
            "type": "group",
            "name": "Administrators",
            "slug": "administrators"
          },
          "permission": "admin",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/groups/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
            }
          }
        },
        {
          "type": "project_group_permission",
          "group": {
            "type": "group",
            "name": "Developers",
            "slug": "developers"
          },
          "permission": "write",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/groups/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
            }
          }
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "paginated_project_user_permission",
    "accessor": "PaginatedProjectUserPermission",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "type": "project_user_permission",
          "user": {
            "type": "user",
            "display_name": "Colin Cameron",
            "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
            "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
          },
          "permission": "admin",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
            }
          }
        },
        {
          "type": "project_user_permission",
          "user": {
            "type": "user",
            "display_name": "Sean Conaty",
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}",
            "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
          },
          "permission": "write",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
            }
          }
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pullrequest",
    "accessor": "PaginatedPullrequest",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "page": 1,
      "pagelen": 30
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "approve": {
              "href": "x",
              "name": "x"
            },
            "diff": {
              "href": "x",
              "name": "x"
            },
            "diffstat": {
              "href": "x",
              "name": "x"
            },
            "comments": {
              "href": "x",
              "name": "x"
            },
            "activity": {
              "href": "x",
              "name": "x"
            },
            "merge": {
              "href": "x",
              "name": "x"
            },
            "decline": {
              "href": "x",
              "name": "x"
            },
            "mergeability_checks": {
              "href": "x",
              "name": "x"
            }
          },
          "id": 1,
          "title": "x",
          "rendered": {
            "title": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "description": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "reason": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            }
          },
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "state": "OPEN",
          "author": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "source": {
            "repository": {},
            "branch": {
              "name": "x",
              "merge_strategies": [],
              "default_merge_strategy": "x"
            },
            "commit": {
              "hash": "x"
            }
          },
          "destination": {
            "repository": {},
            "branch": {
              "name": "x",
              "merge_strategies": [],
              "default_merge_strategy": "x"
            },
            "commit": {
              "hash": "x"
            }
          },
          "merge_commit": {
            "hash": "x"
          },
          "comment_count": 1,
          "task_count": 1,
          "close_source_branch": true,
          "closed_by": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "reason": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "reviewers": [
            {}
          ],
          "participants": [
            {}
          ],
          "draft": true,
          "queued": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pullrequest",
    "accessor": "PaginatedPullrequest",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "state": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "state"
    ],
    "queryArgs": [
      {
        "name": "state",
        "wire": "state"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "approve": {
              "href": "x",
              "name": "x"
            },
            "diff": {
              "href": "x",
              "name": "x"
            },
            "diffstat": {
              "href": "x",
              "name": "x"
            },
            "comments": {
              "href": "x",
              "name": "x"
            },
            "activity": {
              "href": "x",
              "name": "x"
            },
            "merge": {
              "href": "x",
              "name": "x"
            },
            "decline": {
              "href": "x",
              "name": "x"
            },
            "mergeability_checks": {
              "href": "x",
              "name": "x"
            }
          },
          "id": 1,
          "title": "x",
          "rendered": {
            "title": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "description": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "reason": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            }
          },
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "state": "OPEN",
          "author": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "source": {
            "repository": {},
            "branch": {
              "name": "x",
              "merge_strategies": [],
              "default_merge_strategy": "x"
            },
            "commit": {
              "hash": "x"
            }
          },
          "destination": {
            "repository": {},
            "branch": {
              "name": "x",
              "merge_strategies": [],
              "default_merge_strategy": "x"
            },
            "commit": {
              "hash": "x"
            }
          },
          "merge_commit": {
            "hash": "x"
          },
          "comment_count": 1,
          "task_count": 1,
          "close_source_branch": true,
          "closed_by": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "reason": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "reviewers": [
            {}
          ],
          "participants": [
            {}
          ],
          "draft": true,
          "queued": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pullrequest",
    "accessor": "PaginatedPullrequest",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/pullrequests/{selected_user}",
    "args": [
      {
        "name": "id",
        "wire": "selected_user",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "state": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "state"
    ],
    "queryArgs": [
      {
        "name": "state",
        "wire": "state"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "approve": {
              "href": "x",
              "name": "x"
            },
            "diff": {
              "href": "x",
              "name": "x"
            },
            "diffstat": {
              "href": "x",
              "name": "x"
            },
            "comments": {
              "href": "x",
              "name": "x"
            },
            "activity": {
              "href": "x",
              "name": "x"
            },
            "merge": {
              "href": "x",
              "name": "x"
            },
            "decline": {
              "href": "x",
              "name": "x"
            },
            "mergeability_checks": {
              "href": "x",
              "name": "x"
            }
          },
          "id": 1,
          "title": "x",
          "rendered": {
            "title": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "description": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            },
            "reason": {
              "raw": "x",
              "markup": "markdown",
              "html": "x"
            }
          },
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "state": "OPEN",
          "author": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "source": {
            "repository": {},
            "branch": {
              "name": "x",
              "merge_strategies": [],
              "default_merge_strategy": "x"
            },
            "commit": {
              "hash": "x"
            }
          },
          "destination": {
            "repository": {},
            "branch": {
              "name": "x",
              "merge_strategies": [],
              "default_merge_strategy": "x"
            },
            "commit": {
              "hash": "x"
            }
          },
          "merge_commit": {
            "hash": "x"
          },
          "comment_count": 1,
          "task_count": 1,
          "close_source_branch": true,
          "closed_by": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "reason": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "reviewers": [
            {}
          ],
          "participants": [
            {}
          ],
          "draft": true,
          "queued": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_pullrequest_comment",
    "accessor": "PaginatedPullrequestComment",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments",
    "args": [
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "id": 1,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "content": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "user": {},
          "deleted": true,
          "inline": {
            "from": 1,
            "to": 1,
            "start_from": 1,
            "start_to": 1,
            "path": "x"
          },
          "links": {
            "self": {},
            "html": {},
            "code": {}
          },
          "pullrequest": {
            "type": "x",
            "links": {},
            "id": 1,
            "title": "x",
            "rendered": {},
            "summary": {},
            "state": "OPEN",
            "source": {},
            "destination": {},
            "merge_commit": {},
            "comment_count": 1,
            "task_count": 1,
            "close_source_branch": true,
            "reason": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "reviewers": [],
            "participants": [],
            "draft": true,
            "queued": true
          },
          "resolution": {
            "type": "x",
            "user": {},
            "created_on": "2026-01-01T00:00:00Z"
          },
          "pending": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_ref",
    "accessor": "PaginatedRef",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/refs",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            }
          },
          "name": "x",
          "target": {
            "type": "x",
            "hash": "x",
            "date": "2026-01-01T00:00:00Z",
            "message": "x",
            "summary": {},
            "parents": [],
            "participants": []
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_report",
    "accessor": "PaginatedReport",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "title": "x",
          "details": "x",
          "external_id": "x",
          "reporter": "x",
          "link": "x",
          "remote_link_enabled": true,
          "logo_url": "x",
          "report_type": "SECURITY",
          "result": "PASSED",
          "data": [
            {
              "type": "BOOLEAN",
              "title": "x",
              "value": {}
            }
          ],
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "size": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_repository",
    "accessor": "PaginatedRepository",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/forks",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "q": "v1",
      "role": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "role",
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "role",
        "wire": "role"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            },
            "avatar": {
              "href": "x",
              "name": "x"
            },
            "pullrequests": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "forks": {
              "href": "x",
              "name": "x"
            },
            "watchers": {
              "href": "x",
              "name": "x"
            },
            "downloads": {
              "href": "x",
              "name": "x"
            },
            "clone": [
              {}
            ],
            "hooks": {
              "href": "x",
              "name": "x"
            }
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {
            "type": "x",
            "links": {},
            "uuid": "x",
            "key": "x",
            "name": "x",
            "description": "x",
            "is_private": true,
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "has_publicly_visible_repos": true
          },
          "mainbranch": {
            "type": "x",
            "links": {},
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_repository",
    "accessor": "PaginatedRepository",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}",
    "args": [
      {
        "name": "id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {
      "q": "v1",
      "role": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "role",
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "role",
        "wire": "role"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            },
            "avatar": {
              "href": "x",
              "name": "x"
            },
            "pullrequests": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "forks": {
              "href": "x",
              "name": "x"
            },
            "watchers": {
              "href": "x",
              "name": "x"
            },
            "downloads": {
              "href": "x",
              "name": "x"
            },
            "clone": [
              {}
            ],
            "hooks": {
              "href": "x",
              "name": "x"
            }
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {
            "type": "x",
            "links": {},
            "uuid": "x",
            "key": "x",
            "name": "x",
            "description": "x",
            "is_private": true,
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "has_publicly_visible_repos": true
          },
          "mainbranch": {
            "type": "x",
            "links": {},
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_repository_group_permission",
    "accessor": "PaginatedRepositoryGroupPermission",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/groups",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "type": "repository_group_permission",
          "group": {
            "type": "group",
            "name": "Administrators",
            "slug": "administrators"
          },
          "permission": "admin",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/administrators"
            }
          }
        },
        {
          "type": "repository_group_permission",
          "group": {
            "type": "group",
            "name": "Developers",
            "slug": "developers"
          },
          "permission": "read",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers"
            }
          }
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "paginated_repository_permission",
    "accessor": "PaginatedRepositoryPermission",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/permissions/repositories/{repo_slug}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "type": "repository_permission",
          "user": {
            "type": "user",
            "display_name": "Erik van Zijst",
            "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
          },
          "repository": {
            "type": "repository",
            "name": "geordi",
            "full_name": "atlassian_tutorial/geordi",
            "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
          },
          "permission": "admin"
        },
        {
          "type": "repository_permission",
          "user": {
            "type": "user",
            "display_name": "Sean Conaty",
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
          },
          "repository": {
            "type": "repository",
            "name": "geordi",
            "full_name": "atlassian_tutorial/geordi",
            "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
          },
          "permission": "write"
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "paginated_repository_user_permission",
    "accessor": "PaginatedRepositoryUserPermission",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/users",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "type": "repository_user_permission",
          "user": {
            "type": "user",
            "display_name": "Colin Cameron",
            "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
            "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
          },
          "permission": "admin",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
            }
          }
        },
        {
          "type": "repository_user_permission",
          "user": {
            "type": "user",
            "display_name": "Sean Conaty",
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}",
            "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
          },
          "permission": "write",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0//repositories/atlassian_tutorial/geordi/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
            }
          }
        }
      ],
      "page": 1,
      "size": 2
    },
    "idField": "id"
  },
  {
    "entity": "paginated_snippet",
    "accessor": "PaginatedSnippet",
    "op": "load",
    "method": "GET",
    "path": "/snippets/{workspace}",
    "args": [
      {
        "name": "id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {
      "role": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "role"
    ],
    "queryArgs": [
      {
        "name": "role",
        "wire": "role"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "id": 1,
          "title": "x",
          "scm": "git",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "owner": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "creator": {
            "type": "x",
            "links": {},
            "created_on": "2026-01-01T00:00:00Z",
            "display_name": "x",
            "uuid": "x"
          },
          "is_private": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_snippet_comment",
    "accessor": "PaginatedSnippetComment",
    "op": "list",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/comments",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            }
          },
          "snippet": {
            "type": "x",
            "id": 1,
            "title": "x",
            "scm": "git",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "is_private": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_snippet_commit",
    "accessor": "PaginatedSnippetCommit",
    "op": "list",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/commits",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "hash": "x",
          "date": "2026-01-01T00:00:00Z",
          "author": {},
          "committer": {},
          "message": "x",
          "summary": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "parents": [],
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            },
            "diff": {
              "href": "x",
              "name": "x"
            }
          },
          "snippet": {
            "type": "x",
            "id": 1,
            "title": "x",
            "scm": "git",
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "is_private": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_ssh_user_key",
    "accessor": "PaginatedSshUserKey",
    "op": "list",
    "method": "GET",
    "path": "/users/{selected_user}/ssh-keys",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "page": 1,
      "pagelen": 10,
      "size": 1,
      "values": [
        {
          "comment": "user@myhost",
          "created_on": "2018-03-14T13:17:05.196003+00:00",
          "expires_on": null,
          "fingerprint": "w9tZSiFoZ8oXwS4ZSWrJopGxwvnPIewA6Mo4owAHPrI",
          "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
          "label": "",
          "last_used": "2018-03-20T13:18:05.196003+00:00",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
            }
          },
          "owner": {
            "display_name": "Mark Adams",
            "links": {
              "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
              },
              "html": {
                "href": "https://bitbucket.org/markadams-atl/"
              },
              "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
              }
            },
            "type": "user",
            "username": "markadams-atl",
            "nickname": "markadams-atl",
            "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
          },
          "type": "ssh_key",
          "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_tag",
    "accessor": "PaginatedTag",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/refs/tags",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "self": {
              "href": "x",
              "name": "x"
            },
            "commits": {
              "href": "x",
              "name": "x"
            },
            "html": {
              "href": "x",
              "name": "x"
            }
          },
          "name": "x",
          "target": {
            "participants": []
          },
          "message": "x",
          "date": "2026-01-01T00:00:00Z",
          "tagger": {
            "type": "x",
            "raw": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_task",
    "accessor": "PaginatedTask",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks",
    "args": [
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "pagelen": "v1",
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "sort",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "pagelen",
        "wire": "pagelen"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "id": 1,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "state": "RESOLVED",
          "content": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "creator": {},
          "pending": true,
          "resolved_on": "2026-01-01T00:00:00Z",
          "resolved_by": {},
          "links": {
            "self": {},
            "html": {}
          },
          "comment": {
            "type": "x",
            "id": 1,
            "created_on": "2026-01-01T00:00:00Z",
            "updated_on": "2026-01-01T00:00:00Z",
            "content": {},
            "deleted": true,
            "inline": {},
            "links": {}
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_treeentry",
    "accessor": "PaginatedTreeentry",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/src",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "format": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "format"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "path": "x",
          "commit": {
            "type": "x",
            "hash": "x",
            "date": "2026-01-01T00:00:00Z",
            "message": "x",
            "summary": {},
            "parents": [],
            "participants": []
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_treeentry",
    "accessor": "PaginatedTreeentry",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/src/{commit}/{path}",
    "args": [
      {
        "name": "commit",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {
      "format": "v1",
      "max_depth": "v1",
      "q": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "format",
      "q",
      "sort",
      "max_depth"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "max_depth",
        "wire": "max_depth"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "path": "x",
          "commit": {
            "type": "x",
            "hash": "x",
            "date": "2026-01-01T00:00:00Z",
            "message": "x",
            "summary": {},
            "parents": [],
            "participants": []
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "paginated_webhook_subscription",
    "accessor": "PaginatedWebhookSubscription",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/hooks",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "url": "x",
          "description": "x",
          "subject_type": "repository",
          "subject": {
            "type": "x"
          },
          "active": true,
          "created_at": "2026-01-01T00:00:00Z",
          "events": [
            "issue:comment_created"
          ],
          "secret_set": true,
          "secret": "x",
          "links": {
            "self": {
              "href": "x"
            }
          }
        }
      ],
      "pagelen": 1,
      "next": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_webhook_subscription",
    "accessor": "PaginatedWebhookSubscription",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/hooks",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "values": [
        {
          "type": "x",
          "uuid": "x",
          "url": "x",
          "description": "x",
          "subject_type": "repository",
          "subject": {
            "type": "x"
          },
          "active": true,
          "created_at": "2026-01-01T00:00:00Z",
          "events": [
            "issue:comment_created"
          ],
          "secret_set": true,
          "secret": "x",
          "links": {
            "self": {
              "href": "x"
            }
          }
        }
      ],
      "pagelen": 1,
      "next": "x"
    },
    "idField": "id"
  },
  {
    "entity": "paginated_workspace_access",
    "accessor": "PaginatedWorkspaceAccess",
    "op": "list",
    "method": "GET",
    "path": "/user/workspaces",
    "args": [],
    "select": {
      "administrator": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "sort",
      "administrator"
    ],
    "queryArgs": [
      {
        "name": "administrator",
        "wire": "administrator"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 25,
      "page": 1,
      "size": 1,
      "values": [
        {
          "administrator": true,
          "type": "workspace_access",
          "workspace": {
            "links": {
              "avatar": {
                "href": "https://api.bitbucket.org/workspaces/bbworkspace1/avatar/"
              },
              "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
              }
            },
            "slug": "bbworkspace1",
            "type": "workspace_base",
            "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline",
    "action": "stop_pipeline",
    "args": [
      {
        "name": "id",
        "wire": "pipeline_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "merge_default": "v1",
      "target_branch_to_create": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "merge_defaults",
      "target_branch_to_create"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "build_number": 1,
      "creator": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "repository": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "avatar": {
            "href": "x",
            "name": "x"
          },
          "pullrequests": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "forks": {
            "href": "x",
            "name": "x"
          },
          "watchers": {
            "href": "x",
            "name": "x"
          },
          "downloads": {
            "href": "x",
            "name": "x"
          },
          "clone": [
            {}
          ],
          "hooks": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "full_name": "x",
        "is_private": true,
        "scm": "git",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "name": "x",
        "description": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "size": 1,
        "language": "x",
        "has_issues": true,
        "has_wiki": true,
        "fork_policy": "allow_forks",
        "project": {
          "type": "x",
          "links": {},
          "uuid": "x",
          "key": "x",
          "name": "x",
          "description": "x",
          "is_private": true,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "has_publicly_visible_repos": true
        },
        "mainbranch": {
          "type": "x",
          "links": {},
          "name": "x",
          "merge_strategies": [],
          "default_merge_strategy": "x"
        }
      },
      "target": {
        "type": "x"
      },
      "trigger": {
        "type": "x"
      },
      "state": {
        "type": "x"
      },
      "variables": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "completed_on": "2026-01-01T00:00:00Z",
      "build_seconds_used": 1,
      "configuration_sources": [
        {
          "source": "x",
          "uri": "x"
        }
      ],
      "links": {
        "type": "x",
        "self": {
          "type": "x",
          "href": "x"
        },
        "steps": {
          "type": "x",
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "pipeline_uuid",
        "value": "p1"
      },
      {
        "name": "log_uuid",
        "wire": "log_uuid",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "step_id",
        "wire": "step_uuid",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons",
    "args": [
      {
        "name": "id",
        "wire": "pipeline_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "step_id",
        "wire": "step_uuid",
        "value": "p3"
      },
      {
        "name": "test_case_id",
        "wire": "test_case_uuid",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "pipeline_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "build_number": 1,
      "creator": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "repository": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "avatar": {
            "href": "x",
            "name": "x"
          },
          "pullrequests": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "forks": {
            "href": "x",
            "name": "x"
          },
          "watchers": {
            "href": "x",
            "name": "x"
          },
          "downloads": {
            "href": "x",
            "name": "x"
          },
          "clone": [
            {}
          ],
          "hooks": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "full_name": "x",
        "is_private": true,
        "scm": "git",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "name": "x",
        "description": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "size": 1,
        "language": "x",
        "has_issues": true,
        "has_wiki": true,
        "fork_policy": "allow_forks",
        "project": {
          "type": "x",
          "links": {},
          "uuid": "x",
          "key": "x",
          "name": "x",
          "description": "x",
          "is_private": true,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "has_publicly_visible_repos": true
        },
        "mainbranch": {
          "type": "x",
          "links": {},
          "name": "x",
          "merge_strategies": [],
          "default_merge_strategy": "x"
        }
      },
      "target": {
        "type": "x"
      },
      "trigger": {
        "type": "x"
      },
      "state": {
        "type": "x"
      },
      "variables": [
        {
          "type": "x",
          "uuid": "x",
          "key": "x",
          "value": "x",
          "secured": true
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "completed_on": "2026-01-01T00:00:00Z",
      "build_seconds_used": 1,
      "configuration_sources": [
        {
          "source": "x",
          "uri": "x"
        }
      ],
      "links": {
        "type": "x",
        "self": {
          "type": "x",
          "href": "x"
        },
        "steps": {
          "type": "x",
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
    "args": [
      {
        "name": "environment_id",
        "wire": "environment_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "variable_uuid",
        "wire": "variable_uuid",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}",
    "args": [
      {
        "name": "cache_uuid",
        "wire": "cache_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
    "args": [
      {
        "name": "known_host_uuid",
        "wire": "known_host_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "name": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "name"
    ],
    "queryArgs": [
      {
        "name": "name",
        "wire": "name"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "runner_uuid",
        "wire": "runner_uuid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "schedule_uuid",
        "wire": "schedule_uuid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "variable_uuid",
        "wire": "variable_uuid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}",
    "args": [
      {
        "name": "runner_uuid",
        "wire": "runner_uuid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      },
      {
        "name": "variable_uuid",
        "wire": "variable_uuid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/teams/{username}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "username",
        "wire": "username",
        "value": "p1"
      },
      {
        "name": "variable_uuid",
        "wire": "variable_uuid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline",
    "accessor": "Pipeline",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
    "args": [
      {
        "name": "variable_uuid",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pipeline_build_number",
    "accessor": "PipelineBuildNumber",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/build_number",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "next": 1
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_cache_content_uri",
    "accessor": "PipelineCacheContentUri",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri",
    "args": [
      {
        "name": "cache_id",
        "wire": "cache_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uri": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_known_host",
    "accessor": "PipelineKnownHost",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "hostname": "x",
      "public_key": {
        "type": "x",
        "key_type": "x",
        "key": "x",
        "md5_fingerprint": "x",
        "sha256_fingerprint": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_known_host",
    "accessor": "PipelineKnownHost",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "known_host_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "hostname": "x",
      "public_key": {
        "type": "x",
        "key_type": "x",
        "key": "x",
        "md5_fingerprint": "x",
        "sha256_fingerprint": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_known_host",
    "accessor": "PipelineKnownHost",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "known_host_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "hostname": "x",
      "public_key": {
        "type": "x",
        "key_type": "x",
        "key": "x",
        "md5_fingerprint": "x",
        "sha256_fingerprint": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_runner",
    "accessor": "PipelineRunner",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/runners",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "labels": [
        "x"
      ],
      "state": {
        "type": "x",
        "status": "UNREGISTERED",
        "version": {
          "type": "x",
          "version": "x",
          "current": "x"
        },
        "updated_on": "2026-01-01T00:00:00Z",
        "cordoned": true
      },
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "oauth_client": {
        "type": "x",
        "id": "x",
        "secret": "x",
        "token_endpoint": "x",
        "audience": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_runner",
    "accessor": "PipelineRunner",
    "op": "create",
    "method": "POST",
    "path": "/workspaces/{workspace}/pipelines-config/runners",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "labels": [
        "x"
      ],
      "state": {
        "type": "x",
        "status": "UNREGISTERED",
        "version": {
          "type": "x",
          "version": "x",
          "current": "x"
        },
        "updated_on": "2026-01-01T00:00:00Z",
        "cordoned": true
      },
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "oauth_client": {
        "type": "x",
        "id": "x",
        "secret": "x",
        "token_endpoint": "x",
        "audience": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_runner",
    "accessor": "PipelineRunner",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "runner_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "labels": [
        "x"
      ],
      "state": {
        "type": "x",
        "status": "UNREGISTERED",
        "version": {
          "type": "x",
          "version": "x",
          "current": "x"
        },
        "updated_on": "2026-01-01T00:00:00Z",
        "cordoned": true
      },
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "oauth_client": {
        "type": "x",
        "id": "x",
        "secret": "x",
        "token_endpoint": "x",
        "audience": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_runner",
    "accessor": "PipelineRunner",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "runner_uuid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "labels": [
        "x"
      ],
      "state": {
        "type": "x",
        "status": "UNREGISTERED",
        "version": {
          "type": "x",
          "version": "x",
          "current": "x"
        },
        "updated_on": "2026-01-01T00:00:00Z",
        "cordoned": true
      },
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "oauth_client": {
        "type": "x",
        "id": "x",
        "secret": "x",
        "token_endpoint": "x",
        "audience": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_runner",
    "accessor": "PipelineRunner",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "runner_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "labels": [
        "x"
      ],
      "state": {
        "type": "x",
        "status": "UNREGISTERED",
        "version": {
          "type": "x",
          "version": "x",
          "current": "x"
        },
        "updated_on": "2026-01-01T00:00:00Z",
        "cordoned": true
      },
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "oauth_client": {
        "type": "x",
        "id": "x",
        "secret": "x",
        "token_endpoint": "x",
        "audience": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_runner",
    "accessor": "PipelineRunner",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "runner_uuid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "name": "x",
      "labels": [
        "x"
      ],
      "state": {
        "type": "x",
        "status": "UNREGISTERED",
        "version": {
          "type": "x",
          "version": "x",
          "current": "x"
        },
        "updated_on": "2026-01-01T00:00:00Z",
        "cordoned": true
      },
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "oauth_client": {
        "type": "x",
        "id": "x",
        "secret": "x",
        "token_endpoint": "x",
        "audience": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_schedule",
    "accessor": "PipelineSchedule",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "enabled": true,
      "target": {
        "type": "x",
        "ref_type": "branch",
        "ref_name": "x",
        "commit": {
          "participants": []
        },
        "selector": {
          "type": "branches",
          "pattern": "x"
        }
      },
      "cron_pattern": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_schedule",
    "accessor": "PipelineSchedule",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "schedule_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "enabled": true,
      "target": {
        "type": "x",
        "ref_type": "branch",
        "ref_name": "x",
        "commit": {
          "participants": []
        },
        "selector": {
          "type": "branches",
          "pattern": "x"
        }
      },
      "cron_pattern": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_schedule",
    "accessor": "PipelineSchedule",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "schedule_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "enabled": true,
      "target": {
        "type": "x",
        "ref_type": "branch",
        "ref_name": "x",
        "commit": {
          "participants": []
        },
        "selector": {
          "type": "branches",
          "pattern": "x"
        }
      },
      "cron_pattern": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_ssh_key_pair",
    "accessor": "PipelineSshKeyPair",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "private_key": "x",
      "public_key": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_ssh_key_pair",
    "accessor": "PipelineSshKeyPair",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "private_key": "x",
      "public_key": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_step",
    "accessor": "PipelineStep",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "step_uuid",
        "value": "p1"
      },
      {
        "name": "pipeline_id",
        "wire": "pipeline_uuid",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "started_on": "2026-01-01T00:00:00Z",
      "completed_on": "2026-01-01T00:00:00Z",
      "state": {
        "type": "x"
      },
      "image": {
        "name": "x",
        "username": "x",
        "password": "x",
        "email": "x"
      },
      "setup_commands": [
        {
          "name": "x",
          "command": "x"
        }
      ],
      "script_commands": [
        {
          "name": "x",
          "command": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "create",
    "method": "POST",
    "path": "/users/{selected_user}/pipelines_config/variables",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "create",
    "method": "POST",
    "path": "/teams/{username}/pipelines_config/variables",
    "args": [
      {
        "name": "username",
        "wire": "username",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "create",
    "method": "POST",
    "path": "/workspaces/{workspace}/pipelines-config/variables",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "load",
    "method": "GET",
    "path": "/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "load",
    "method": "GET",
    "path": "/teams/{username}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "username",
        "wire": "username",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "update",
    "method": "PUT",
    "path": "/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "update",
    "method": "PUT",
    "path": "/teams/{username}/pipelines_config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "username",
        "wire": "username",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipeline_variable",
    "accessor": "PipelineVariable",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
    "args": [
      {
        "name": "id",
        "wire": "variable_uuid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "key": "x",
      "value": "x",
      "secured": true
    },
    "idField": "id"
  },
  {
    "entity": "pipelines_config",
    "accessor": "PipelinesConfig",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "enabled": true,
      "repository": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "avatar": {
            "href": "x",
            "name": "x"
          },
          "pullrequests": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "forks": {
            "href": "x",
            "name": "x"
          },
          "watchers": {
            "href": "x",
            "name": "x"
          },
          "downloads": {
            "href": "x",
            "name": "x"
          },
          "clone": [
            {}
          ],
          "hooks": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "full_name": "x",
        "is_private": true,
        "scm": "git",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "name": "x",
        "description": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "size": 1,
        "language": "x",
        "has_issues": true,
        "has_wiki": true,
        "fork_policy": "allow_forks",
        "project": {
          "type": "x",
          "links": {},
          "uuid": "x",
          "key": "x",
          "name": "x",
          "description": "x",
          "is_private": true,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "has_publicly_visible_repos": true
        },
        "mainbranch": {
          "type": "x",
          "links": {},
          "name": "x",
          "merge_strategies": [],
          "default_merge_strategy": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pipelines_config",
    "accessor": "PipelinesConfig",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pipelines_config",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "enabled": true,
      "repository": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "avatar": {
            "href": "x",
            "name": "x"
          },
          "pullrequests": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "forks": {
            "href": "x",
            "name": "x"
          },
          "watchers": {
            "href": "x",
            "name": "x"
          },
          "downloads": {
            "href": "x",
            "name": "x"
          },
          "clone": [
            {}
          ],
          "hooks": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "full_name": "x",
        "is_private": true,
        "scm": "git",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "name": "x",
        "description": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "size": 1,
        "language": "x",
        "has_issues": true,
        "has_wiki": true,
        "fork_policy": "allow_forks",
        "project": {
          "type": "x",
          "links": {},
          "uuid": "x",
          "key": "x",
          "name": "x",
          "description": "x",
          "is_private": true,
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "has_publicly_visible_repos": true
        },
        "mainbranch": {
          "type": "x",
          "links": {},
          "name": "x",
          "merge_strategies": [],
          "default_merge_strategy": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "create",
    "method": "POST",
    "path": "/workspaces/{workspace}/projects",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "html": {
          "href": "x",
          "name": "x"
        },
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "uuid": "x",
      "key": "x",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {},
          "self": {},
          "html": {},
          "members": {},
          "projects": {},
          "repositories": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "name": "x",
      "description": "x",
      "is_private": true,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "has_publicly_visible_repos": true
    },
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}",
    "args": [
      {
        "name": "id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "html": {
          "href": "x",
          "name": "x"
        },
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "uuid": "x",
      "key": "x",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {},
          "self": {},
          "html": {},
          "members": {},
          "projects": {},
          "repositories": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "name": "x",
      "description": "x",
      "is_private": true,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "has_publicly_visible_repos": true
    },
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}",
    "args": [
      {
        "name": "group_slug",
        "wire": "group_slug",
        "value": "p1"
      },
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "selected_user_id",
        "wire": "selected_user_id",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/projects/{project_key}",
    "args": [
      {
        "name": "id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "project",
    "accessor": "Project",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/projects/{project_key}",
    "args": [
      {
        "name": "id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "html": {
          "href": "x",
          "name": "x"
        },
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "uuid": "x",
      "key": "x",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {},
          "self": {},
          "html": {},
          "members": {},
          "projects": {},
          "repositories": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "name": "x",
      "description": "x",
      "is_private": true,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "has_publicly_visible_repos": true
    },
    "idField": "id"
  },
  {
    "entity": "project_branching_model",
    "accessor": "ProjectBranchingModel",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/branching-model",
    "args": [
      {
        "name": "project_key",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "development": {
        "name": "master",
        "use_mainbranch": true
      },
      "production": {
        "name": "production",
        "use_mainbranch": false
      },
      "branch_types": [
        {
          "kind": "release",
          "prefix": "release/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        },
        {
          "kind": "feature",
          "prefix": "feature/"
        }
      ],
      "type": "project_branching_model",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/.../branching-model"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "project_deploy_key",
    "accessor": "ProjectDeployKey",
    "op": "create",
    "method": "POST",
    "path": "/workspaces/{workspace}/projects/{project_key}/deploy-keys",
    "args": [
      {
        "name": "project_key",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "comment": "mleu@C02W454JHTD8",
      "last_used": null,
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/5/"
        }
      },
      "label": "myprojectkey",
      "project": {
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
          }
        },
        "type": "project",
        "name": "cooperative standard",
        "key": "TEST_PROJECT",
        "uuid": "{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
      },
      "created_on": "2021-08-10T05:28:00.570859+00:00",
      "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
      "type": "project_deploy_key",
      "id": 5
    },
    "idField": "id"
  },
  {
    "entity": "project_deploy_key",
    "accessor": "ProjectDeployKey",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}",
    "args": [
      {
        "name": "id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "project_key",
        "wire": "project_key",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagelen": 10,
      "values": [
        {
          "comment": "thakseth@C02W454JHTD8",
          "last_used": null,
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
            }
          },
          "label": "test",
          "project": {
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
              }
            },
            "type": "project",
            "name": "cooperative standard",
            "key": "TEST_PROJECT",
            "uuid": "{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
          },
          "created_on": "2021-07-28T21:20:19.491721+00:00",
          "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
          "type": "project_deploy_key",
          "id": 1234
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "project_group_permission",
    "accessor": "ProjectGroupPermission",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}",
    "args": [
      {
        "name": "group_slug",
        "wire": "group_slug",
        "value": "p1"
      },
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "project_group_permission",
      "group": {
        "type": "group",
        "name": "Administrators",
        "slug": "administrators"
      },
      "permission": "admin",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/groups/administrators"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "project_group_permission",
    "accessor": "ProjectGroupPermission",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}",
    "args": [
      {
        "name": "group_slug",
        "wire": "group_slug",
        "value": "p1"
      },
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "project_group_permission",
      "group": {
        "type": "group",
        "name": "Administrators",
        "slug": "administrators"
      },
      "permission": "write",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/groups/administrators"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "project_user_permission",
    "accessor": "ProjectUserPermission",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "selected_user_id",
        "wire": "selected_user_id",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "project_user_permission",
      "user": {
        "type": "user",
        "display_name": "Colin Cameron",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
      },
      "permission": "admin",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "project_user_permission",
    "accessor": "ProjectUserPermission",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "selected_user_id",
        "wire": "selected_user_id",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "project_user_permission",
      "user": {
        "type": "user",
        "display_name": "Colin Cameron",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
      },
      "permission": "write",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/projects/PRJ/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "commit",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "pullrequest_id",
        "wire": "pullrequest_id",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "remove",
    "method": "DELETE",
    "path": "/users/{selected_user}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "commit",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "pullrequest_id",
        "wire": "pullrequest_id",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "property",
    "accessor": "Property",
    "op": "update",
    "method": "PUT",
    "path": "/users/{selected_user}/properties/{app_key}/{property_name}",
    "args": [
      {
        "name": "app_key",
        "wire": "app_key",
        "value": "p1"
      },
      {
        "name": "property_name",
        "wire": "property_name",
        "value": "p2"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline",
    "action": "decline",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "approve": {
          "href": "x",
          "name": "x"
        },
        "diff": {
          "href": "x",
          "name": "x"
        },
        "diffstat": {
          "href": "x",
          "name": "x"
        },
        "comments": {
          "href": "x",
          "name": "x"
        },
        "activity": {
          "href": "x",
          "name": "x"
        },
        "merge": {
          "href": "x",
          "name": "x"
        },
        "decline": {
          "href": "x",
          "name": "x"
        },
        "mergeability_checks": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "title": "x",
      "rendered": {
        "title": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "description": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "reason": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        }
      },
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "state": "OPEN",
      "author": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "source": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "destination": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "merge_commit": {
        "hash": "x"
      },
      "comment_count": 1,
      "task_count": 1,
      "close_source_branch": true,
      "closed_by": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "reason": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "reviewers": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "participants": [
        {
          "type": "x",
          "user": {},
          "role": "PARTICIPANT",
          "approved": true,
          "state": "approved",
          "participated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "draft": true,
      "queued": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge",
    "action": "merge",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "async": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "async"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "approve": {
          "href": "x",
          "name": "x"
        },
        "diff": {
          "href": "x",
          "name": "x"
        },
        "diffstat": {
          "href": "x",
          "name": "x"
        },
        "comments": {
          "href": "x",
          "name": "x"
        },
        "activity": {
          "href": "x",
          "name": "x"
        },
        "merge": {
          "href": "x",
          "name": "x"
        },
        "decline": {
          "href": "x",
          "name": "x"
        },
        "mergeability_checks": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "title": "x",
      "rendered": {
        "title": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "description": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "reason": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        }
      },
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "state": "OPEN",
      "author": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "source": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "destination": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "merge_commit": {
        "hash": "x"
      },
      "comment_count": 1,
      "task_count": 1,
      "close_source_branch": true,
      "closed_by": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "reason": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "reviewers": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "participants": [
        {
          "type": "x",
          "user": {},
          "role": "PARTICIPANT",
          "approved": true,
          "state": "approved",
          "participated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "draft": true,
      "queued": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "approve": {
          "href": "x",
          "name": "x"
        },
        "diff": {
          "href": "x",
          "name": "x"
        },
        "diffstat": {
          "href": "x",
          "name": "x"
        },
        "comments": {
          "href": "x",
          "name": "x"
        },
        "activity": {
          "href": "x",
          "name": "x"
        },
        "merge": {
          "href": "x",
          "name": "x"
        },
        "decline": {
          "href": "x",
          "name": "x"
        },
        "mergeability_checks": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "title": "x",
      "rendered": {
        "title": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "description": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "reason": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        }
      },
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "state": "OPEN",
      "author": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "source": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "destination": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "merge_commit": {
        "hash": "x"
      },
      "comment_count": 1,
      "task_count": 1,
      "close_source_branch": true,
      "closed_by": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "reason": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "reviewers": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "participants": [
        {
          "type": "x",
          "user": {},
          "role": "PARTICIPANT",
          "approved": true,
          "state": "approved",
          "participated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "draft": true,
      "queued": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "task_id",
        "wire": "task_id",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "approve": {
          "href": "x",
          "name": "x"
        },
        "diff": {
          "href": "x",
          "name": "x"
        },
        "diffstat": {
          "href": "x",
          "name": "x"
        },
        "comments": {
          "href": "x",
          "name": "x"
        },
        "activity": {
          "href": "x",
          "name": "x"
        },
        "merge": {
          "href": "x",
          "name": "x"
        },
        "decline": {
          "href": "x",
          "name": "x"
        },
        "mergeability_checks": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "title": "x",
      "rendered": {
        "title": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "description": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "reason": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        }
      },
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "state": "OPEN",
      "author": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "source": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "destination": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "merge_commit": {
        "hash": "x"
      },
      "comment_count": 1,
      "task_count": 1,
      "close_source_branch": true,
      "closed_by": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "reason": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "reviewers": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "participants": [
        {
          "type": "x",
          "user": {},
          "role": "PARTICIPANT",
          "approved": true,
          "state": "approved",
          "participated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "draft": true,
      "queued": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity",
    "action": "activity",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits",
    "action": "commit",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/conflicts",
    "action": "conflict",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff",
    "action": "diff",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat",
    "action": "diffstat",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch",
    "action": "patch",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/activity",
    "action": "activity",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "task_id",
        "wire": "task_id",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve",
    "action": "approve",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes",
    "action": "request_change",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "target_username",
        "wire": "target_username",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest",
    "accessor": "Pullrequest",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "approve": {
          "href": "x",
          "name": "x"
        },
        "diff": {
          "href": "x",
          "name": "x"
        },
        "diffstat": {
          "href": "x",
          "name": "x"
        },
        "comments": {
          "href": "x",
          "name": "x"
        },
        "activity": {
          "href": "x",
          "name": "x"
        },
        "merge": {
          "href": "x",
          "name": "x"
        },
        "decline": {
          "href": "x",
          "name": "x"
        },
        "mergeability_checks": {
          "href": "x",
          "name": "x"
        }
      },
      "id": 1,
      "title": "x",
      "rendered": {
        "title": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "description": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "reason": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        }
      },
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "state": "OPEN",
      "author": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "source": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "destination": {
        "repository": {
          "type": "x",
          "links": {
            "self": {},
            "html": {},
            "avatar": {},
            "pullrequests": {},
            "commits": {},
            "forks": {},
            "watchers": {},
            "downloads": {},
            "clone": [],
            "hooks": {}
          },
          "uuid": "x",
          "full_name": "x",
          "is_private": true,
          "scm": "git",
          "owner": {},
          "name": "x",
          "description": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "size": 1,
          "language": "x",
          "has_issues": true,
          "has_wiki": true,
          "fork_policy": "allow_forks",
          "project": {},
          "mainbranch": {}
        },
        "branch": {
          "name": "x",
          "merge_strategies": [
            "merge_commit"
          ],
          "default_merge_strategy": "x"
        },
        "commit": {
          "hash": "x"
        }
      },
      "merge_commit": {
        "hash": "x"
      },
      "comment_count": 1,
      "task_count": 1,
      "close_source_branch": true,
      "closed_by": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "reason": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "reviewers": [
        {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ],
      "participants": [
        {
          "type": "x",
          "user": {},
          "role": "PARTICIPANT",
          "approved": true,
          "state": "approved",
          "participated_on": "2026-01-01T00:00:00Z"
        }
      ],
      "draft": true,
      "queued": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment",
    "accessor": "PullrequestComment",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "user": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "deleted": true,
      "inline": {
        "from": 1,
        "to": 1,
        "start_from": 1,
        "start_to": 1,
        "path": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "code": {
          "href": "x",
          "name": "x"
        }
      },
      "pullrequest": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "approve": {
            "href": "x",
            "name": "x"
          },
          "diff": {
            "href": "x",
            "name": "x"
          },
          "diffstat": {
            "href": "x",
            "name": "x"
          },
          "comments": {
            "href": "x",
            "name": "x"
          },
          "activity": {
            "href": "x",
            "name": "x"
          },
          "merge": {
            "href": "x",
            "name": "x"
          },
          "decline": {
            "href": "x",
            "name": "x"
          },
          "mergeability_checks": {
            "href": "x",
            "name": "x"
          }
        },
        "id": 1,
        "title": "x",
        "rendered": {
          "title": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "description": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "reason": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          }
        },
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "state": "OPEN",
        "author": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "source": {
          "repository": {},
          "branch": {
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "destination": {
          "repository": {},
          "branch": {
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "merge_commit": {
          "hash": "x"
        },
        "comment_count": 1,
        "task_count": 1,
        "close_source_branch": true,
        "closed_by": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "reason": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "reviewers": [
          {}
        ],
        "participants": [
          {}
        ],
        "draft": true,
        "queued": true
      },
      "resolution": {
        "type": "x",
        "user": {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "created_on": "2026-01-01T00:00:00Z"
      },
      "pending": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment",
    "accessor": "PullrequestComment",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}",
    "args": [
      {
        "name": "id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "user": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "deleted": true,
      "inline": {
        "from": 1,
        "to": 1,
        "start_from": 1,
        "start_to": 1,
        "path": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "code": {
          "href": "x",
          "name": "x"
        }
      },
      "pullrequest": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "approve": {
            "href": "x",
            "name": "x"
          },
          "diff": {
            "href": "x",
            "name": "x"
          },
          "diffstat": {
            "href": "x",
            "name": "x"
          },
          "comments": {
            "href": "x",
            "name": "x"
          },
          "activity": {
            "href": "x",
            "name": "x"
          },
          "merge": {
            "href": "x",
            "name": "x"
          },
          "decline": {
            "href": "x",
            "name": "x"
          },
          "mergeability_checks": {
            "href": "x",
            "name": "x"
          }
        },
        "id": 1,
        "title": "x",
        "rendered": {
          "title": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "description": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "reason": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          }
        },
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "state": "OPEN",
        "author": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "source": {
          "repository": {},
          "branch": {
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "destination": {
          "repository": {},
          "branch": {
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "merge_commit": {
          "hash": "x"
        },
        "comment_count": 1,
        "task_count": 1,
        "close_source_branch": true,
        "closed_by": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "reason": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "reviewers": [
          {}
        ],
        "participants": [
          {}
        ],
        "draft": true,
        "queued": true
      },
      "resolution": {
        "type": "x",
        "user": {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "created_on": "2026-01-01T00:00:00Z"
      },
      "pending": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment",
    "accessor": "PullrequestComment",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve",
    "action": "resolve",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment",
    "accessor": "PullrequestComment",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}",
    "args": [
      {
        "name": "id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "user": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "deleted": true,
      "inline": {
        "from": 1,
        "to": 1,
        "start_from": 1,
        "start_to": 1,
        "path": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "code": {
          "href": "x",
          "name": "x"
        }
      },
      "pullrequest": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "approve": {
            "href": "x",
            "name": "x"
          },
          "diff": {
            "href": "x",
            "name": "x"
          },
          "diffstat": {
            "href": "x",
            "name": "x"
          },
          "comments": {
            "href": "x",
            "name": "x"
          },
          "activity": {
            "href": "x",
            "name": "x"
          },
          "merge": {
            "href": "x",
            "name": "x"
          },
          "decline": {
            "href": "x",
            "name": "x"
          },
          "mergeability_checks": {
            "href": "x",
            "name": "x"
          }
        },
        "id": 1,
        "title": "x",
        "rendered": {
          "title": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "description": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          },
          "reason": {
            "raw": "x",
            "markup": "markdown",
            "html": "x"
          }
        },
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "state": "OPEN",
        "author": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "source": {
          "repository": {},
          "branch": {
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "destination": {
          "repository": {},
          "branch": {
            "name": "x",
            "merge_strategies": [],
            "default_merge_strategy": "x"
          },
          "commit": {
            "hash": "x"
          }
        },
        "merge_commit": {
          "hash": "x"
        },
        "comment_count": 1,
        "task_count": 1,
        "close_source_branch": true,
        "closed_by": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "reason": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "reviewers": [
          {}
        ],
        "participants": [
          {}
        ],
        "draft": true,
        "queued": true
      },
      "resolution": {
        "type": "x",
        "user": {
          "type": "x",
          "links": {
            "avatar": {}
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "created_on": "2026-01-01T00:00:00Z"
      },
      "pending": true
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment_task",
    "accessor": "PullrequestCommentTask",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks",
    "args": [
      {
        "name": "id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "state": "RESOLVED",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "pending": true,
      "resolved_on": "2026-01-01T00:00:00Z",
      "resolved_by": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "comment": {
        "type": "x",
        "id": 1,
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "content": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "user": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "deleted": true,
        "inline": {
          "from": 1,
          "to": 1,
          "start_from": 1,
          "start_to": 1,
          "path": "x"
        },
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "code": {
            "href": "x",
            "name": "x"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment_task",
    "accessor": "PullrequestCommentTask",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}",
    "args": [
      {
        "name": "id",
        "wire": "task_id",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "state": "RESOLVED",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "pending": true,
      "resolved_on": "2026-01-01T00:00:00Z",
      "resolved_by": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "comment": {
        "type": "x",
        "id": 1,
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "content": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "user": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "deleted": true,
        "inline": {
          "from": 1,
          "to": 1,
          "start_from": 1,
          "start_to": 1,
          "path": "x"
        },
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "code": {
            "href": "x",
            "name": "x"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_comment_task",
    "accessor": "PullrequestCommentTask",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}",
    "args": [
      {
        "name": "id",
        "wire": "task_id",
        "value": "p1"
      },
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "state": "RESOLVED",
      "content": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "pending": true,
      "resolved_on": "2026-01-01T00:00:00Z",
      "resolved_by": {
        "type": "x",
        "links": {
          "avatar": {}
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "comment": {
        "type": "x",
        "id": 1,
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "content": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "user": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "deleted": true,
        "inline": {
          "from": 1,
          "to": 1,
          "start_from": 1,
          "start_to": 1,
          "path": "x"
        },
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "code": {
            "href": "x",
            "name": "x"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pullrequest_mergeability_check",
    "accessor": "PullrequestMergeabilityCheck",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/mergeability/checks",
    "args": [
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "values": [
        {
          "type": "pullrequest_state_check",
          "status": "PASSED",
          "required": true,
          "blocking": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "report",
    "accessor": "Report",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "reportId",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "title": "x",
      "details": "x",
      "external_id": "x",
      "reporter": "x",
      "link": "x",
      "remote_link_enabled": true,
      "logo_url": "x",
      "report_type": "SECURITY",
      "result": "PASSED",
      "data": [
        {
          "type": "BOOLEAN",
          "title": "x",
          "value": {}
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "report",
    "accessor": "Report",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
    "args": [
      {
        "name": "annotation_id",
        "wire": "annotationId",
        "value": "p1"
      },
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p2"
      },
      {
        "name": "id",
        "wire": "reportId",
        "value": "p3"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "report",
    "accessor": "Report",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "reportId",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "report",
    "accessor": "Report",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "reportId",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "title": "x",
      "details": "x",
      "external_id": "x",
      "reporter": "x",
      "link": "x",
      "remote_link_enabled": true,
      "logo_url": "x",
      "report_type": "SECURITY",
      "result": "PASSED",
      "data": [
        {
          "type": "BOOLEAN",
          "title": "x",
          "value": {}
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "report_annotation",
    "accessor": "ReportAnnotation",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "reportId",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {
      "report_annotations": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "type": "x",
        "external_id": "x",
        "uuid": "x",
        "annotation_type": "VULNERABILITY",
        "path": "x",
        "line": 1,
        "summary": "x",
        "details": "x",
        "result": "PASSED",
        "severity": "CRITICAL",
        "link": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "report_annotation",
    "accessor": "ReportAnnotation",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "annotationId",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "report_id",
        "wire": "reportId",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "external_id": "x",
      "uuid": "x",
      "annotation_type": "VULNERABILITY",
      "path": "x",
      "line": 1,
      "summary": "x",
      "details": "x",
      "result": "PASSED",
      "severity": "CRITICAL",
      "link": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "report_annotation",
    "accessor": "ReportAnnotation",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
    "args": [
      {
        "name": "commit_id",
        "wire": "commit",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "annotationId",
        "value": "p2"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p3"
      },
      {
        "name": "report_id",
        "wire": "reportId",
        "value": "p4"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p5"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "external_id": "x",
      "uuid": "x",
      "annotation_type": "VULNERABILITY",
      "path": "x",
      "line": 1,
      "summary": "x",
      "details": "x",
      "result": "PASSED",
      "severity": "CRITICAL",
      "link": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "repository",
    "accessor": "Repository",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "avatar": {
          "href": "x",
          "name": "x"
        },
        "pullrequests": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "forks": {
          "href": "x",
          "name": "x"
        },
        "watchers": {
          "href": "x",
          "name": "x"
        },
        "downloads": {
          "href": "x",
          "name": "x"
        },
        "clone": [
          {
            "href": "x",
            "name": "x"
          }
        ],
        "hooks": {
          "href": "x",
          "name": "x"
        }
      },
      "uuid": "x",
      "full_name": "x",
      "is_private": true,
      "scm": "git",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "name": "x",
      "description": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "size": 1,
      "language": "x",
      "has_issues": true,
      "has_wiki": true,
      "fork_policy": "allow_forks",
      "project": {
        "type": "x",
        "links": {
          "html": {
            "href": "x",
            "name": "x"
          },
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "key": "x",
        "owner": {},
        "name": "x",
        "description": "x",
        "is_private": true,
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "has_publicly_visible_repos": true
      },
      "mainbranch": {
        "type": "x",
        "links": {
          "self": {
            "href": "x",
            "name": "x"
          },
          "commits": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          }
        },
        "name": "x",
        "target": {
          "participants": []
        },
        "merge_strategies": [
          "merge_commit"
        ],
        "default_merge_strategy": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "repository",
    "accessor": "Repository",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}",
    "args": [
      {
        "name": "group_slug",
        "wire": "group_slug",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "repository",
    "accessor": "Repository",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "selected_user_id",
        "wire": "selected_user_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "repository",
    "accessor": "Repository",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}/hooks/{uid}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "uid",
        "wire": "uid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "repository",
    "accessor": "Repository",
    "op": "remove",
    "method": "DELETE",
    "path": "/repositories/{workspace}/{repo_slug}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "redirect_to": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "redirect_to"
    ],
    "queryArgs": [
      {
        "name": "redirect_to",
        "wire": "redirect_to"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "repository_group_permission",
    "accessor": "RepositoryGroupPermission",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}",
    "args": [
      {
        "name": "group_slug",
        "wire": "group_slug",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "repository_group_permission",
      "group": {
        "type": "group",
        "name": "Developers",
        "slug": "developers",
        "full_slug": "atlassian_tutorial:developers"
      },
      "permission": "read",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "repository_group_permission",
    "accessor": "RepositoryGroupPermission",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}",
    "args": [
      {
        "name": "group_slug",
        "wire": "group_slug",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "repository_group_permission",
      "group": {
        "type": "group",
        "name": "Developers",
        "slug": "developers",
        "full_slug": "atlassian_tutorial:developers"
      },
      "permission": "write",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "repository_inheritance_state",
    "accessor": "RepositoryInheritanceState",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/override-settings",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "override_settings": {}
    },
    "idField": "id"
  },
  {
    "entity": "repository_user_permission",
    "accessor": "RepositoryUserPermission",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "selected_user_id",
        "wire": "selected_user_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "repository_user_permission",
      "user": {
        "type": "user",
        "display_name": "Colin Cameron",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a",
        "nickname": "Colin Cameron"
      },
      "permission": "admin",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "repository_user_permission",
    "accessor": "RepositoryUserPermission",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "selected_user_id",
        "wire": "selected_user_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "repository_user_permission",
      "user": {
        "type": "user",
        "display_name": "Colin Cameron",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a",
        "nickname": "Colin Cameron"
      },
      "permission": "write",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "request_change",
    "accessor": "RequestChange",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes",
    "args": [
      {
        "name": "pullrequest_id",
        "wire": "pull_request_id",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "user": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "role": "PARTICIPANT",
      "approved": true,
      "state": "approved",
      "participated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "search_result_page",
    "accessor": "SearchResultPage",
    "op": "list",
    "method": "GET",
    "path": "/users/{selected_user}/search/code",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {
      "search_query": "v1",
      "page": 1,
      "pagelen": 10
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "search_query",
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      },
      {
        "name": "search_query",
        "wire": "search_query"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 10,
      "query_substituted": false,
      "values": [
        {
          "type": "code_search_result",
          "content_match_count": 2,
          "content_matches": [
            {
              "lines": [
                {
                  "line": 2,
                  "segments": []
                },
                {
                  "line": 3,
                  "segments": [
                    {
                      "text": "def "
                    },
                    {
                      "text": "foo",
                      "match": true
                    },
                    {
                      "text": "():"
                    }
                  ]
                },
                {
                  "line": 4,
                  "segments": [
                    {
                      "text": "    print(\"snek\")"
                    }
                  ]
                }
              ]
            }
          ],
          "path_matches": [
            {
              "text": "src/"
            },
            {
              "text": "foo",
              "match": true
            },
            {
              "text": ".py"
            }
          ],
          "file": {
            "path": "src/foo.py",
            "type": "commit_file",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
              }
            }
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "search_result_page",
    "accessor": "SearchResultPage",
    "op": "list",
    "method": "GET",
    "path": "/teams/{username}/search/code",
    "args": [
      {
        "name": "username",
        "wire": "username",
        "value": "p1"
      }
    ],
    "select": {
      "search_query": "v1",
      "page": 1,
      "pagelen": 10
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "search_query",
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      },
      {
        "name": "search_query",
        "wire": "search_query"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 10,
      "query_substituted": false,
      "values": [
        {
          "type": "code_search_result",
          "content_match_count": 2,
          "content_matches": [
            {
              "lines": [
                {
                  "line": 2,
                  "segments": []
                },
                {
                  "line": 3,
                  "segments": [
                    {
                      "text": "def "
                    },
                    {
                      "text": "foo",
                      "match": true
                    },
                    {
                      "text": "():"
                    }
                  ]
                },
                {
                  "line": 4,
                  "segments": [
                    {
                      "text": "    print(\"snek\")"
                    }
                  ]
                }
              ]
            }
          ],
          "path_matches": [
            {
              "text": "src/"
            },
            {
              "text": "foo",
              "match": true
            },
            {
              "text": ".py"
            }
          ],
          "file": {
            "path": "src/foo.py",
            "type": "commit_file",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
              }
            }
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "search_result_page",
    "accessor": "SearchResultPage",
    "op": "list",
    "method": "GET",
    "path": "/workspaces/{workspace}/search/code",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {
      "search_query": "v1",
      "page": 1,
      "pagelen": 10
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "search_query",
      "page",
      "pagelen"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "pagelen",
        "wire": "pagelen"
      },
      {
        "name": "search_query",
        "wire": "search_query"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 10,
      "query_substituted": false,
      "values": [
        {
          "type": "code_search_result",
          "content_match_count": 2,
          "content_matches": [
            {
              "lines": [
                {
                  "line": 2,
                  "segments": []
                },
                {
                  "line": 3,
                  "segments": [
                    {
                      "text": "def "
                    },
                    {
                      "text": "foo",
                      "match": true
                    },
                    {
                      "text": "():"
                    }
                  ]
                },
                {
                  "line": 4,
                  "segments": [
                    {
                      "text": "    print(\"snek\")"
                    }
                  ]
                }
              ]
            }
          ],
          "path_matches": [
            {
              "text": "src/"
            },
            {
              "text": "foo",
              "match": true
            },
            {
              "text": ".py"
            }
          ],
          "file": {
            "path": "src/foo.py",
            "type": "commit_file",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
              }
            }
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "create",
    "method": "POST",
    "path": "/snippets/{workspace}",
    "args": [
      {
        "name": "id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "id": 1,
      "title": "x",
      "scm": "git",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "is_private": true
    },
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "create",
    "method": "POST",
    "path": "/snippets",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "id": 1,
      "title": "x",
      "scm": "git",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "is_private": true
    },
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "load",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "node_id",
        "wire": "node_id",
        "value": "p2"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p3"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p4"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "load",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/{node_id}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "node_id",
        "wire": "node_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json",
      "multipart/related",
      "multipart/form-data"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": 1,
      "title": "x",
      "scm": "git",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "is_private": true
    },
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "load",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/files/{path}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "remove",
    "method": "DELETE",
    "path": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "remove",
    "method": "DELETE",
    "path": "/snippets/{workspace}/{encoded_id}/{node_id}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "node_id",
        "wire": "node_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "snippet",
    "accessor": "Snippet",
    "op": "update",
    "method": "PUT",
    "path": "/snippets/{workspace}/{encoded_id}/{node_id}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "node_id",
        "wire": "node_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json",
      "multipart/related",
      "multipart/form-data"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "id": 1,
      "title": "x",
      "scm": "git",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "owner": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "creator": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "is_private": true
    },
    "idField": "id"
  },
  {
    "entity": "snippet_comment",
    "accessor": "SnippetComment",
    "op": "create",
    "method": "POST",
    "path": "/snippets/{workspace}/{encoded_id}/comments",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "snippet": {
        "type": "x",
        "id": 1,
        "title": "x",
        "scm": "git",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "creator": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "is_private": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "snippet_comment",
    "accessor": "SnippetComment",
    "op": "load",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "comment_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "snippet": {
        "type": "x",
        "id": 1,
        "title": "x",
        "scm": "git",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "creator": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "is_private": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "snippet_comment",
    "accessor": "SnippetComment",
    "op": "update",
    "method": "PUT",
    "path": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "comment_id",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "snippet": {
        "type": "x",
        "id": 1,
        "title": "x",
        "scm": "git",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "creator": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "is_private": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "snippet_commit",
    "accessor": "SnippetCommit",
    "op": "load",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/commits/{revision}",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "revision",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "hash": "x",
      "date": "2026-01-01T00:00:00Z",
      "author": {
        "type": "x",
        "raw": "x",
        "user": {}
      },
      "committer": {
        "type": "x",
        "raw": "x",
        "user": {}
      },
      "message": "x",
      "summary": {
        "raw": "x",
        "markup": "markdown",
        "html": "x"
      },
      "parents": [],
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        },
        "diff": {
          "href": "x",
          "name": "x"
        }
      },
      "snippet": {
        "type": "x",
        "id": 1,
        "title": "x",
        "scm": "git",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "owner": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "creator": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        },
        "is_private": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "source",
    "accessor": "Source",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/src",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {
      "author": "v1",
      "branch": "v1",
      "file": "v1",
      "message": "v1",
      "parent": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "message",
      "author",
      "parents",
      "files",
      "branch"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "ssh",
    "accessor": "Ssh",
    "op": "remove",
    "method": "DELETE",
    "path": "/users/{selected_user}/ssh-keys/{key_id}",
    "args": [
      {
        "name": "key_id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "ssh_account_key",
    "accessor": "SshAccountKey",
    "op": "create",
    "method": "POST",
    "path": "/users/{selected_user}/ssh-keys",
    "args": [
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {
      "expires_on": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "expires_on"
    ],
    "queryArgs": [],
    "bodyArgs": [
      "expires_on"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "comment": "user@myhost",
      "created_on": "2018-03-14T13:17:05.196003+00:00",
      "expires_on": null,
      "fingerprint": "w9tZSiFoZ8oXwS4ZSWrJopGxwvnPIewA6Mo4owAHPrI",
      "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
      "label": "",
      "last_used": "2018-03-20T13:18:05.196003+00:00",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
      },
      "owner": {
        "display_name": "Mark Adams",
        "links": {
          "avatar": {
            "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
          },
          "html": {
            "href": "https://bitbucket.org/markadams-atl/"
          },
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
          }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
      },
      "type": "ssh_key",
      "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
    },
    "idField": "id"
  },
  {
    "entity": "ssh_account_key",
    "accessor": "SshAccountKey",
    "op": "load",
    "method": "GET",
    "path": "/users/{selected_user}/ssh-keys/{key_id}",
    "args": [
      {
        "name": "key_id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "comment": "user@myhost",
      "created_on": "2018-03-14T13:17:05.196003+00:00",
      "expires_on": null,
      "fingerprint": "w9tZSiFoZ8oXwS4ZSWrJopGxwvnPIewA6Mo4owAHPrI",
      "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
      "label": "",
      "last_used": "2018-03-20T13:18:05.196003+00:00",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
      },
      "owner": {
        "display_name": "Mark Adams",
        "links": {
          "avatar": {
            "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
          },
          "html": {
            "href": "https://bitbucket.org/markadams-atl/"
          },
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
          }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
      },
      "type": "ssh_key",
      "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
    },
    "idField": "id"
  },
  {
    "entity": "ssh_account_key",
    "accessor": "SshAccountKey",
    "op": "update",
    "method": "PUT",
    "path": "/users/{selected_user}/ssh-keys/{key_id}",
    "args": [
      {
        "name": "key_id",
        "wire": "key_id",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "comment": "",
      "created_on": "2018-03-14T13:17:05.196003+00:00",
      "expires_on": null,
      "fingerprint": "w9tZSiFoZ8oXwS4ZSWrJopGxwvnPIewA6Mo4owAHPrI",
      "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
      "label": "Work key",
      "last_used": "2018-03-20T13:18:05.196003+00:00",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
      },
      "owner": {
        "display_name": "Mark Adams",
        "links": {
          "avatar": {
            "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
          },
          "html": {
            "href": "https://bitbucket.org/markadams-atl/"
          },
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
          }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
      },
      "type": "ssh_key",
      "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
    },
    "idField": "id"
  },
  {
    "entity": "tag",
    "accessor": "Tag",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/refs/tags",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "name": "x",
      "target": {
        "type": "x",
        "hash": "x",
        "date": "2026-01-01T00:00:00Z",
        "author": {},
        "committer": {},
        "message": "x",
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "parents": [],
        "participants": [
          {}
        ]
      },
      "message": "x",
      "date": "2026-01-01T00:00:00Z",
      "tagger": {
        "type": "x",
        "raw": "x",
        "user": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "tag",
    "accessor": "Tag",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/refs/tags/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        },
        "commits": {
          "href": "x",
          "name": "x"
        },
        "html": {
          "href": "x",
          "name": "x"
        }
      },
      "name": "x",
      "target": {
        "type": "x",
        "hash": "x",
        "date": "2026-01-01T00:00:00Z",
        "author": {},
        "committer": {},
        "message": "x",
        "summary": {
          "raw": "x",
          "markup": "markdown",
          "html": "x"
        },
        "parents": [],
        "participants": [
          {}
        ]
      },
      "message": "x",
      "date": "2026-01-01T00:00:00Z",
      "tagger": {
        "type": "x",
        "raw": "x",
        "user": {
          "type": "x",
          "links": {},
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "display_name": "Davis Lee",
      "type": "user",
      "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/user/emails/{email}",
    "args": [
      {
        "name": "email",
        "wire": "email",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/users/{selected_user}",
    "args": [
      {
        "name": "id",
        "wire": "selected_user",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "created_on": "2026-01-01T00:00:00Z",
      "display_name": "x",
      "uuid": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/user",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "avatar": {
          "href": "x",
          "name": "x"
        }
      },
      "created_on": "2026-01-01T00:00:00Z",
      "display_name": "x",
      "uuid": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/user/emails",
    "action": "email",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_key",
        "value": "p1"
      },
      {
        "name": "selected_user",
        "wire": "selected_user",
        "value": "p2"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "display_name": "Yaniv Sagy",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/%7Bdd5db7f2-6389-458d-a62a-716773910b7a%7D"
        },
        "avatar": {
          "href": "https://secure.gravatar.com/avatar/YS-2.png"
        },
        "html": {
          "href": "https://api.bitbucket.org/%7Bdd5db7f2-6389-458d-a62a-716773910b7a%7D/"
        }
      },
      "type": "user",
      "uuid": "{dd5db7f2-6389-458d-a62a-716773910b7a}",
      "account_id": "712020:4efe52fa-b4b4-475b-9eb0-c0a23b7eb194",
      "nickname": "Yaniv Sagy"
    },
    "idField": "id"
  },
  {
    "entity": "watcher",
    "accessor": "Watcher",
    "op": "list",
    "method": "GET",
    "path": "/snippets/{workspace}/{encoded_id}/watchers",
    "args": [
      {
        "name": "encoded_id",
        "wire": "encoded_id",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "avatar": {
              "href": "x",
              "name": "x"
            }
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "watcher",
    "accessor": "Watcher",
    "op": "list",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/watchers",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "page": 1,
      "pagelen": 1,
      "next": "x",
      "previous": "x",
      "values": [
        {
          "type": "x",
          "links": {
            "avatar": {
              "href": "x",
              "name": "x"
            }
          },
          "created_on": "2026-01-01T00:00:00Z",
          "display_name": "x",
          "uuid": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "webhook_subscription",
    "accessor": "WebhookSubscription",
    "op": "create",
    "method": "POST",
    "path": "/repositories/{workspace}/{repo_slug}/hooks",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "url": "x",
      "description": "x",
      "subject_type": "repository",
      "subject": {
        "type": "x"
      },
      "active": true,
      "created_at": "2026-01-01T00:00:00Z",
      "events": [
        "issue:comment_created"
      ],
      "secret_set": true,
      "secret": "x",
      "links": {
        "self": {
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook_subscription",
    "accessor": "WebhookSubscription",
    "op": "create",
    "method": "POST",
    "path": "/workspaces/{workspace}/hooks",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "type": "x",
      "uuid": "x",
      "url": "x",
      "description": "x",
      "subject_type": "repository",
      "subject": {
        "type": "x"
      },
      "active": true,
      "created_at": "2026-01-01T00:00:00Z",
      "events": [
        "issue:comment_created"
      ],
      "secret_set": true,
      "secret": "x",
      "links": {
        "self": {
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook_subscription",
    "accessor": "WebhookSubscription",
    "op": "load",
    "method": "GET",
    "path": "/repositories/{workspace}/{repo_slug}/hooks/{uid}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "uid",
        "wire": "uid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "url": "x",
      "description": "x",
      "subject_type": "repository",
      "subject": {
        "type": "x"
      },
      "active": true,
      "created_at": "2026-01-01T00:00:00Z",
      "events": [
        "issue:comment_created"
      ],
      "secret_set": true,
      "secret": "x",
      "links": {
        "self": {
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook_subscription",
    "accessor": "WebhookSubscription",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/hooks/{uid}",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "url": "x",
      "description": "x",
      "subject_type": "repository",
      "subject": {
        "type": "x"
      },
      "active": true,
      "created_at": "2026-01-01T00:00:00Z",
      "events": [
        "issue:comment_created"
      ],
      "secret_set": true,
      "secret": "x",
      "links": {
        "self": {
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook_subscription",
    "accessor": "WebhookSubscription",
    "op": "update",
    "method": "PUT",
    "path": "/repositories/{workspace}/{repo_slug}/hooks/{uid}",
    "args": [
      {
        "name": "repo_slug",
        "wire": "repo_slug",
        "value": "p1"
      },
      {
        "name": "uid",
        "wire": "uid",
        "value": "p2"
      },
      {
        "name": "workspace",
        "wire": "workspace",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "url": "x",
      "description": "x",
      "subject_type": "repository",
      "subject": {
        "type": "x"
      },
      "active": true,
      "created_at": "2026-01-01T00:00:00Z",
      "events": [
        "issue:comment_created"
      ],
      "secret_set": true,
      "secret": "x",
      "links": {
        "self": {
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook_subscription",
    "accessor": "WebhookSubscription",
    "op": "update",
    "method": "PUT",
    "path": "/workspaces/{workspace}/hooks/{uid}",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "uuid": "x",
      "url": "x",
      "description": "x",
      "subject_type": "repository",
      "subject": {
        "type": "x"
      },
      "active": true,
      "created_at": "2026-01-01T00:00:00Z",
      "events": [
        "issue:comment_created"
      ],
      "secret_set": true,
      "secret": "x",
      "links": {
        "self": {
          "href": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "remove",
    "method": "DELETE",
    "path": "/workspaces/{workspace}/hooks/{uid}",
    "args": [
      {
        "name": "id",
        "wire": "workspace",
        "value": "p1"
      },
      {
        "name": "uid",
        "wire": "uid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace_membership",
    "accessor": "WorkspaceMembership",
    "op": "load",
    "method": "GET",
    "path": "/workspaces/{workspace}/members/{member}",
    "args": [
      {
        "name": "member",
        "wire": "member",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        }
      },
      "user": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "workspace": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "members": {
            "href": "x",
            "name": "x"
          },
          "owners": {
            "href": "x",
            "name": "x"
          },
          "projects": {
            "href": "x",
            "name": "x"
          },
          "repositories": {
            "href": "x",
            "name": "x"
          },
          "snippets": {
            "href": "x",
            "name": "x"
          },
          "self": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "name": "x",
        "slug": "x",
        "is_private": true,
        "is_personal": true,
        "is_privacy_enforced": true,
        "forking_mode": "allow_forks",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "workspace_membership",
    "accessor": "WorkspaceMembership",
    "op": "load",
    "method": "GET",
    "path": "/user/workspaces/{workspace}/permission",
    "action": "permission",
    "args": [
      {
        "name": "id",
        "wire": "workspace",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "type": "x",
      "links": {
        "self": {
          "href": "x",
          "name": "x"
        }
      },
      "user": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          }
        },
        "created_on": "2026-01-01T00:00:00Z",
        "display_name": "x",
        "uuid": "x"
      },
      "workspace": {
        "type": "x",
        "links": {
          "avatar": {
            "href": "x",
            "name": "x"
          },
          "html": {
            "href": "x",
            "name": "x"
          },
          "members": {
            "href": "x",
            "name": "x"
          },
          "owners": {
            "href": "x",
            "name": "x"
          },
          "projects": {
            "href": "x",
            "name": "x"
          },
          "repositories": {
            "href": "x",
            "name": "x"
          },
          "snippets": {
            "href": "x",
            "name": "x"
          },
          "self": {
            "href": "x",
            "name": "x"
          }
        },
        "uuid": "x",
        "name": "x",
        "slug": "x",
        "is_private": true,
        "is_personal": true,
        "is_privacy_enforced": true,
        "forking_mode": "allow_forks",
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
