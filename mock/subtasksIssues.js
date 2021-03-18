module.exports = {
  expand: "schema,names",
  startAt: 0,
  maxResults: 50,
  total: 6,
  issues: [
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28468",
      self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28468",
      key: "RUSE-871",
      fields: {
        statuscategorychangedate: "2021-01-21T09:12:04.507+0900",
        issuetype: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10153",
          id: "10153",
          description:
            "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
          iconUrl:
            "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
          name: "サブタスク",
          subtask: true,
          avatarId: 10316,
          entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
          hierarchyLevel: -1,
        },
        parent: {
          id: "28464",
          key: "RUSE-868",
          self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28464",
          fields: {
            summary: "※853関連※[マイページ] 一括査定を全国査定のUIに寄せる",
            status: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://marketenterprise.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10149",
              id: "10149",
              description: "ユーザー目標として表明された機能。",
              iconUrl:
                "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
              name: "ストーリー",
              subtask: false,
              avatarId: 10315,
              entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
              hierarchyLevel: 0,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://marketenterprise.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: "2021-01-22T11:37:54.934+0900",
        watches: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-871/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2021-01-21T09:12:04.209+0900",
        customfield_10020: "0|i01m1v:",
        customfield_10021: null,
        priority: {
          self: "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        labels: [],
        customfield_10620: null,
        customfield_10016: null,
        customfield_10610: null,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        customfield_10614: null,
        timeestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@marketenterprise.co.jp",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
            "24x24":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
            "16x16":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
            "32x32":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
          },
          displayName: "仲摩智樹",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-22T14:03:58.981+0900",
        status: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://marketenterprise.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: null,
        customfield_10015: [
          {
            id: 157,
            name: "スプリント14",
            state: "active",
            boardId: 54,
            goal: "1/25-2/5",
            startDate: "2021-01-22T03:27:24.165Z",
            endDate: "2021-02-05T03:27:14.000Z",
          },
        ],
        security: null,
        customfield_10602: null,
        aggregatetimeestimate: null,
        customfield_10603: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[グループログイン（PC/SP）] baitai=zでの分岐をなくし、単一のフォーマットで一括査定・全国査定の査定結果を表示させる",
        creator: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        subtasks: [],
        reporter: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10000: null,
        customfield_10001: null,
        customfield_10200: {
          hasEpicLinkFieldDependency: false,
          showField: false,
          nonEditableReason: {
            reason: "PLUGIN_LICENSE_ERROR",
            message: "親リンクは、Jira Premium ユーザーのみが利用できます。",
          },
        },
        customfield_10400: null,
        environment: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-871/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28467",
      self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28467",
      key: "RUSE-870",
      fields: {
        statuscategorychangedate: "2021-01-21T09:11:47.737+0900",
        issuetype: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10153",
          id: "10153",
          description:
            "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
          iconUrl:
            "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
          name: "サブタスク",
          subtask: true,
          avatarId: 10316,
          entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
          hierarchyLevel: -1,
        },
        parent: {
          id: "28464",
          key: "RUSE-868",
          self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28464",
          fields: {
            summary: "※853関連※[マイページ] 一括査定を全国査定のUIに寄せる",
            status: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://marketenterprise.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10149",
              id: "10149",
              description: "ユーザー目標として表明された機能。",
              iconUrl:
                "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
              name: "ストーリー",
              subtask: false,
              avatarId: 10315,
              entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
              hierarchyLevel: 0,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://marketenterprise.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-870/watchers",
          watchCount: 1,
          isWatching: false,
        },
        lastViewed: "2021-01-22T11:36:54.571+0900",
        created: "2021-01-21T09:11:47.113+0900",
        customfield_10020: "0|i01m1n:",
        customfield_10021: null,
        priority: {
          self: "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        customfield_10620: null,
        labels: [],
        customfield_10016: null,
        customfield_10610: null,
        customfield_10611: null,
        customfield_10612: null,
        timeestimate: null,
        customfield_10614: null,
        aggregatetimeoriginalestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@marketenterprise.co.jp",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
            "24x24":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
            "16x16":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
            "32x32":
              "https://secure.gravatar.com/avatar/162cbe566985300a2e5314ede23d79f1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTN-6.png",
          },
          displayName: "仲摩智樹",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-22T14:03:51.831+0900",
        status: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://marketenterprise.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: null,
        customfield_10015: [
          {
            id: 157,
            name: "スプリント14",
            state: "active",
            boardId: 54,
            goal: "1/25-2/5",
            startDate: "2021-01-22T03:27:24.165Z",
            endDate: "2021-02-05T03:27:14.000Z",
          },
        ],
        security: null,
        customfield_10602: null,
        aggregatetimeestimate: null,
        customfield_10603: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[加盟店マイページ（PC/SP）] baitai=zでの分岐をなくし、単一のフォーマットで一括査定・全国査定の査定結果を表示させる",
        creator: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        subtasks: [],
        reporter: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        customfield_10000: null,
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10001: null,
        customfield_10200: {
          hasEpicLinkFieldDependency: false,
          showField: false,
          nonEditableReason: {
            reason: "PLUGIN_LICENSE_ERROR",
            message: "親リンクは、Jira Premium ユーザーのみが利用できます。",
          },
        },
        customfield_10400: null,
        environment: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-870/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28466",
      self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28466",
      key: "RUSE-869",
      fields: {
        statuscategorychangedate: "2021-01-21T09:11:00.734+0900",
        issuetype: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10153",
          id: "10153",
          description:
            "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
          iconUrl:
            "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
          name: "サブタスク",
          subtask: true,
          avatarId: 10316,
          entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
          hierarchyLevel: -1,
        },
        parent: {
          id: "28464",
          key: "RUSE-868",
          self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28464",
          fields: {
            summary: "※853関連※[マイページ] 一括査定を全国査定のUIに寄せる",
            status: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://marketenterprise.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10149",
              id: "10149",
              description: "ユーザー目標として表明された機能。",
              iconUrl:
                "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
              name: "ストーリー",
              subtask: false,
              avatarId: 10315,
              entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
              hierarchyLevel: 0,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://marketenterprise.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: "2021-01-22T11:44:07.856+0900",
        watches: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-869/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2021-01-21T09:11:00.173+0900",
        customfield_10020: "0|i01m1f:",
        customfield_10021: null,
        customfield_10100: null,
        priority: {
          self: "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10300: "{}",
        customfield_10620: null,
        labels: [],
        customfield_10016: null,
        customfield_10610: null,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        customfield_10614: null,
        timeestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        updated: "2021-01-22T14:04:01.834+0900",
        status: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://marketenterprise.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: null,
        customfield_10015: [
          {
            id: 157,
            name: "スプリント14",
            state: "active",
            boardId: 54,
            goal: "1/25-2/5",
            startDate: "2021-01-22T03:27:24.165Z",
            endDate: "2021-02-05T03:27:14.000Z",
          },
        ],
        security: null,
        customfield_10602: null,
        aggregatetimeestimate: null,
        customfield_10603: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[お客様マイページ] baitai=zでの分岐をなくし、単一のフォーマットで一括査定・全国査定の査定結果を表示させる",
        creator: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        subtasks: [],
        reporter: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10000: null,
        customfield_10001: null,
        customfield_10200: {
          hasEpicLinkFieldDependency: false,
          showField: false,
          nonEditableReason: {
            reason: "PLUGIN_LICENSE_ERROR",
            message: "親リンクは、Jira Premium ユーザーのみが利用できます。",
          },
        },
        customfield_10400: null,
        environment: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-869/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28443",
      self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28443",
      key: "RUSE-851",
      fields: {
        statuscategorychangedate: "2021-01-18T10:37:44.881+0900",
        issuetype: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10153",
          id: "10153",
          description:
            "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
          iconUrl:
            "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
          name: "サブタスク",
          subtask: true,
          avatarId: 10316,
          entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
          hierarchyLevel: -1,
        },
        parent: {
          id: "28397",
          key: "RUSE-816",
          self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28397",
          fields: {
            summary: "[依頼詳細-SP]お気に入りボタンのスタイルが外れている",
            status: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/status/10371",
              description: "",
              iconUrl: "https://marketenterprise.atlassian.net/",
              name: "テスト中",
              id: "10371",
              statusCategory: {
                self:
                  "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/4",
                id: 4,
                key: "indeterminate",
                colorName: "yellow",
                name: "進行中",
              },
            },
            priority: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10151",
              id: "10151",
              description: "問題またはエラー。",
              iconUrl:
                "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10303&avatarType=issuetype",
              name: "バグ",
              subtask: false,
              avatarId: 10303,
              entityId: "1bae50c8-b428-4935-85e8-3a5c20ea587c",
              hierarchyLevel: 0,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://marketenterprise.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: "2021-01-22T09:31:45.557+0900",
        watches: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-851/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2021-01-18T10:37:44.521+0900",
        customfield_10020: "0|i01lx7:",
        customfield_10021: null,
        priority: {
          self: "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        customfield_10620: null,
        labels: [],
        customfield_10610: null,
        customfield_10016: null,
        customfield_10611: null,
        customfield_10612: null,
        customfield_10614: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=5d92ed2ce85fbc0c2a155ad6",
          accountId: "5d92ed2ce85fbc0c2a155ad6",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/32",
          },
          displayName: "向宇",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-18T10:39:26.223+0900",
        status: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://marketenterprise.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "お気に入りボタンの文字がずれている",
                  marks: [
                    {
                      type: "strong",
                    },
                  ],
                },
                {
                  type: "hardBreak",
                },
                {
                  type: "text",
                  text: "（査定前・査定済ともに）",
                },
              ],
            },
            {
              type: "mediaSingle",
              attrs: {
                layout: "align-start",
              },
              content: [
                {
                  type: "media",
                  attrs: {
                    id: "ca2bd3d5-2023-4fea-a0e4-cf0d5bda6da0",
                    type: "file",
                    collection: "jira-28443-field-description",
                    width: 1536,
                    height: 2048,
                    occurrenceKey: "3654a6ee-0815-40d6-a980-af5209a2cf81",
                  },
                },
              ],
            },
          ],
        },
        customfield_10015: [
          {
            id: 157,
            name: "スプリント14",
            state: "active",
            boardId: 54,
            goal: "1/25-2/5",
            startDate: "2021-01-22T03:27:24.165Z",
            endDate: "2021-02-05T03:27:14.000Z",
          },
        ],
        security: null,
        customfield_10602: null,
        aggregatetimeestimate: null,
        customfield_10603: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[テスト指摘] iPad mini4 依頼詳細のお気に入りボタンの文字がずれている",
        creator: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        subtasks: [],
        reporter: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        customfield_10000: null,
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10001: null,
        customfield_10200: {
          hasEpicLinkFieldDependency: false,
          showField: false,
          nonEditableReason: {
            reason: "PLUGIN_LICENSE_ERROR",
            message: "親リンクは、Jira Premium ユーザーのみが利用できます。",
          },
        },
        customfield_10400: null,
        environment: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-851/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28424",
      self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28424",
      key: "RUSE-840",
      fields: {
        statuscategorychangedate: "2021-01-08T14:50:53.158+0900",
        issuetype: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10153",
          id: "10153",
          description:
            "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
          iconUrl:
            "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
          name: "サブタスク",
          subtask: true,
          avatarId: 10316,
          entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
          hierarchyLevel: -1,
        },
        parent: {
          id: "28420",
          key: "RUSE-836",
          self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28420",
          fields: {
            summary:
              "[802が終わったら！] ユーザから査定店舗へ問い合わせた際にユーザへ自動送信メール（控え）を送信する",
            status: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://marketenterprise.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10149",
              id: "10149",
              description: "ユーザー目標として表明された機能。",
              iconUrl:
                "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
              name: "ストーリー",
              subtask: false,
              avatarId: 10315,
              entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
              hierarchyLevel: 0,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://marketenterprise.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-840/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2021-01-08T14:50:52.636+0900",
        customfield_10020: "0|i01luj:",
        customfield_10021: null,
        priority: {
          self: "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        customfield_10620: null,
        labels: [],
        customfield_10610: null,
        customfield_10016: null,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        customfield_10614: null,
        timeestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=5d92ed2ce85fbc0c2a155ad6",
          accountId: "5d92ed2ce85fbc0c2a155ad6",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92ed2ce85fbc0c2a155ad6/5b2e9630-6396-40b0-bcd5-cb93fea80092/32",
          },
          displayName: "向宇",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-08T14:50:58.110+0900",
        status: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://marketenterprise.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: null,
        customfield_10015: [
          {
            id: 157,
            name: "スプリント14",
            state: "active",
            boardId: 54,
            goal: "1/25-2/5",
            startDate: "2021-01-22T03:27:24.165Z",
            endDate: "2021-02-05T03:27:14.000Z",
          },
        ],
        security: null,
        customfield_10602: null,
        aggregatetimeestimate: null,
        customfield_10603: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary: "メール送信処理の実装",
        creator: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=5d92e5f256bb950dd648bad8",
          accountId: "5d92e5f256bb950dd648bad8",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/32",
          },
          displayName: "中村真弓",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        subtasks: [],
        reporter: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=5d92e5f256bb950dd648bad8",
          accountId: "5d92e5f256bb950dd648bad8",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/32",
          },
          displayName: "中村真弓",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10000: null,
        customfield_10001: null,
        customfield_10200: {
          hasEpicLinkFieldDependency: false,
          showField: false,
          nonEditableReason: {
            reason: "PLUGIN_LICENSE_ERROR",
            message: "親リンクは、Jira Premium ユーザーのみが利用できます。",
          },
        },
        customfield_10400: null,
        environment: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-840/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28423",
      self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28423",
      key: "RUSE-839",
      fields: {
        statuscategorychangedate: "2021-01-19T10:47:15.675+0900",
        issuetype: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10153",
          id: "10153",
          description:
            "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
          iconUrl:
            "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
          name: "サブタスク",
          subtask: true,
          avatarId: 10316,
          entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
          hierarchyLevel: -1,
        },
        parent: {
          id: "28420",
          key: "RUSE-836",
          self: "https://marketenterprise.atlassian.net/rest/api/3/issue/28420",
          fields: {
            summary:
              "[802が終わったら！] ユーザから査定店舗へ問い合わせた際にユーザへ自動送信メール（控え）を送信する",
            status: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://marketenterprise.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://marketenterprise.atlassian.net/rest/api/3/issuetype/10149",
              id: "10149",
              description: "ユーザー目標として表明された機能。",
              iconUrl:
                "https://marketenterprise.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
              name: "ストーリー",
              subtask: false,
              avatarId: 10315,
              entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
              hierarchyLevel: 0,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://marketenterprise.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://marketenterprise.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/resolution/10000",
          id: "10000",
          description: "この課題に対する作業は完了しました。",
          name: "完了",
        },
        customfield_10500: null,
        resolutiondate: "2021-01-19T10:47:15.667+0900",
        customfield_10629: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-839/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2021-01-08T12:13:56.057+0900",
        customfield_10020: "0|i01lub:",
        customfield_10021: null,
        priority: {
          self: "https://marketenterprise.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://marketenterprise.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        customfield_10620: null,
        labels: [],
        customfield_10016: null,
        customfield_10610: null,
        customfield_10611: null,
        customfield_10612: null,
        customfield_10614: null,
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
          accountId: "557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:b460699a-65b7-4bf0-86c0-e08bdaba4d25/f5d561ee-0146-4622-beb2-d12debec33fc/32",
          },
          displayName: "蓮野えりか",
          active: true,
          timeZone: "Asia/Seoul",
          accountType: "atlassian",
        },
        updated: "2021-01-19T10:47:15.675+0900",
        status: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/status/10376",
          description: "",
          iconUrl: "https://marketenterprise.atlassian.net/",
          name: "完了",
          id: "10376",
          statusCategory: {
            self:
              "https://marketenterprise.atlassian.net/rest/api/3/statuscategory/3",
            id: 3,
            key: "done",
            colorName: "green",
            name: "完了",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: null,
        customfield_10015: [
          {
            id: 157,
            name: "スプリント14",
            state: "active",
            boardId: 54,
            goal: "1/25-2/5",
            startDate: "2021-01-22T03:27:24.165Z",
            endDate: "2021-02-05T03:27:14.000Z",
          },
        ],
        security: null,
        customfield_10602: null,
        aggregatetimeestimate: null,
        customfield_10603: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary: "メールテンプレート作成",
        creator: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=5d92e5f256bb950dd648bad8",
          accountId: "5d92e5f256bb950dd648bad8",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/32",
          },
          displayName: "中村真弓",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        subtasks: [],
        reporter: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/user?accountId=5d92e5f256bb950dd648bad8",
          accountId: "5d92e5f256bb950dd648bad8",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5d92e5f256bb950dd648bad8/0767b0eb-2daf-4574-a2df-46bc10f6e70b/32",
          },
          displayName: "中村真弓",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        customfield_10000: null,
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10001: "10376_*:*_1_*:*_0_*|*_10369_*:*_1_*:*_945199638",
        customfield_10200: {
          hasEpicLinkFieldDependency: false,
          showField: false,
          nonEditableReason: {
            reason: "PLUGIN_LICENSE_ERROR",
            message: "親リンクは、Jira Premium ユーザーのみが利用できます。",
          },
        },
        customfield_10400: null,
        environment: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://marketenterprise.atlassian.net/rest/api/3/issue/RUSE-839/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
  ],
};
