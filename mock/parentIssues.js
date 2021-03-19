module.exports = {
  expand: "schema,names",
  startAt: 0,
  maxResults: 50,
  total: 14,
  issues: [
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28478",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28478",
      key: "RUSE-881",
      fields: {
        statuscategorychangedate: "2021-01-22T10:17:25.821+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10208",
          id: "10208",
          description: "生まれたてのチケット\n未確定のチケット",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10300&avatarType=issuetype",
          name: "New",
          subtask: false,
          avatarId: 10300,
          entityId: "1d273f30-d6ed-44e8-b0d0-67bc61568c9c",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2021-01-22T16:22:26.539+0900",
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-881/watchers",
          watchCount: 1,
          isWatching: true,
        },
        created: "2021-01-22T10:17:25.287+0900",
        customfield_10020: "0|i01m3d:",
        customfield_10021: null,
        customfield_10100: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10300: "{}",
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
        assignee: null,
        updated: "2021-01-22T16:22:23.575+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "要望背景などを記入しておく",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "例）サービス名変更に伴い、ユーザーに誤解をあたえないようにするため、JUMと記述のある部分は全てUMMへ変更する",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "これを確認できればチケットcloseとする内容を記入しておく",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "具体的なテスト方法があればそれも",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "例）該当箇所がJUMからUMMに書き換わっていること",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "[ ] その他補足事項",
                        },
                      ],
                    },
                  ],
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
        customfield_10603: null,
        aggregatetimeestimate: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary: "セミナーのバナーをアップする",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-881/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28475",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28475",
      key: "RUSE-878",
      fields: {
        statuscategorychangedate: "2021-01-21T14:53:55.915+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
          id: "10150",
          description: "さまざまな小規模作業。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
          name: "タスク",
          subtask: false,
          avatarId: 10318,
          entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: "EX) 中村：5h,10h,....（スプリント分）、山田：6h...",
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-878/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-22T23:53:17.376+0900",
        created: "2021-01-21T14:53:55.557+0900",
        customfield_10020: "0|i01lmr:6",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        labels: [],
        customfield_10620: null,
        customfield_10016: null,
        customfield_10610: 6.0,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        customfield_10614: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        updated: "2021-01-22T13:59:36.889+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "VNで対応中のTOPページのリニューアルを本番サイトに反映する",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "コードレビュー後に日本側で必要な修正作業のチケットが作成されていること",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "作業内容",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "見た目のテスト兼ねる",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "コードレビュー後に修正が必要になったらチケット作成",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "作成したチケットに見積もり",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "0.5d=6pt",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
        summary: "[TOPページ改修] PRをレビュー後に修正が必要な作業を洗い出す",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: null,
        environment: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-878/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28470",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28470",
      key: "RUSE-873",
      fields: {
        statuscategorychangedate: "2021-01-21T10:35:32.391+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
          id: "10150",
          description: "さまざまな小規模作業。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
          name: "タスク",
          subtask: false,
          avatarId: 10318,
          entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: "2021-01-22T14:00:57.891+0900",
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-873/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2021-01-21T10:35:32.061+0900",
        customfield_10020: "0|i01lmr:3",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        labels: [],
        customfield_10620: null,
        customfield_10016: null,
        customfield_10610: 11.0,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        customfield_10614: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: null,
        updated: "2021-01-22T14:04:23.072+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "VNで対応しているTOPページおよびマイページの変更に伴いヘッダ・フッタも更新されるためそれらを反映する",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "対象",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "おいくら(",
                                },
                                {
                                  type: "text",
                                  text: "http://oikura.jp/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "http://oikura.jp/",
                                      },
                                    },
                                  ],
                                },
                                {
                                  type: "text",
                                  text: ")　←必達",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "査定フォーム(",
                                },
                                {
                                  type: "text",
                                  text: "https://oikura.jp/offer-form/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "https://oikura.jp/offer-form/",
                                      },
                                    },
                                  ],
                                },
                                {
                                  type: "text",
                                  text: ")　←必達",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "問い合わせフォーム(",
                                },
                                {
                                  type: "text",
                                  text:
                                    "https://oikura.jp/form/index.html?contents_key=oikura_client",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href:
                                          "https://oikura.jp/form/index.html?contents_key=oikura_client",
                                      },
                                    },
                                  ],
                                },
                                {
                                  type: "text",
                                  text: ")　←努力目標",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "おいくらマガジン(",
                                },
                                {
                                  type: "text",
                                  text: "https://oikura.jp/magazine/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "https://oikura.jp/magazine/",
                                      },
                                    },
                                  ],
                                },
                                {
                                  type: "text",
                                  text: ")　←努力目標",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "現在のSPヘッダ",
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
                    id: "8f714f31-d0c1-4c8b-8918-b4144e520ea1",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "8d3f8862-ecca-4068-b4ba-8a9c684539d3",
                    width: 306,
                    height: 407,
                  },
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
                    id: "80ed7ae1-4dc0-4a60-b46f-020aca75013d",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "4a123284-3eb7-438b-a6f0-56c6583b6d19",
                    width: 303,
                    height: 407,
                  },
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "変更後のSPヘッダ",
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
                    id: "bed27a76-93ec-438d-8d34-51873ea2cc81",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "a3e6e026-6066-4141-858d-a992da46ad8b",
                    width: 306,
                    height: 374,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "現在のSPフッタ",
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
                    id: "03e85d3c-12b3-4a99-ab32-6924d714f03e",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "429dbf64-11be-44fb-9fd2-52a6f1629ce8",
                    width: 214,
                    height: 198,
                  },
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "変更後のSPフッタ",
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
                    id: "b3aca398-ef8c-4abc-af40-13e3efc65b37",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "0441f310-f3ea-4522-bddc-535d9fe21252",
                    width: 213,
                    height: 372,
                  },
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "現在のPCヘッダ",
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
                    id: "c2920844-d28a-4759-8760-0b80be95c253",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "4eca7448-13a8-436d-a376-0d673b5e8944",
                    width: 749,
                    height: 128,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "変更後のPCヘッダ（完成？？）",
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
                    id: "f26c21d1-ddd9-4ccc-be69-5dad5cb6cb59",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "3d78da52-bc9a-46a8-85a4-de7f1c3c2e75",
                    width: 795,
                    height: 117,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "現在のPCフッタ",
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
                    id: "49cee757-99f5-4ba8-ad1f-4173d6795b03",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "0e195fc7-968c-4e89-8fe8-d6dd803b944d",
                    width: 747,
                    height: 113,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "変更後のPCフッタ（完成？？）",
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
                    id: "c8bff97d-d927-43f5-a962-2fc0d6474a83",
                    type: "file",
                    collection: "jira-28470-field-description",
                    occurrenceKey: "62b04d03-f243-4469-9264-19778f1a7d9a",
                    width: 837,
                    height: 218,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "対象のページのヘッダ、フッタが変更されていること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "ヘッダ・フッタ以外の箇所に影響が及んでいないこと",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "デザイン",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "画像は少し古いバージョンになってる",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "ローカル環境では完成している",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "調整不要な状態で進んでる？",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "何かあったら日本側で修正しちゃう",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "あまりにも酷い場合は差し戻し（期間的にはある）",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "VN受け入れ",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "staging向けにPRがもらう？",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "VN受け入れ用のブランチを作成する？",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "作業内容",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "コードレビュー",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "複数パターンがあるかも",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "ある程度の共通化されている",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "不足している部分の対応作業",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "テスト×サービス数",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "各デバイスでの確認",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "修正作業（場合によってはVNへ戻す）",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "ヘッダ・フッタのテンプレート反映（PHP）",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "CSS変更",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "パーツ数としては４つ",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "ヘッダー（PC／SP）",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "フッター（PC／SP）",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "おいくら査定フォームはレスポンシブなのでパーツ数は少ない？",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "マガジン",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "Wordpress",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "テスト環境は残ってないかも",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "テーマを変更する",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "場合によってはメディアに振れそう",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "お問い合わせフォーム",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "SDがやるのは確定",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "今のヘッダ・フッタがすでに違う",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "何箇所変更する？",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "ファイル数：４つ",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "URL別にあるが、ほとんど一緒なので１箇所変更したらあとはコピペでどうとでもなる",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "878とセットで本番リリース",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
        summary: "[TOPページ改修]サイト上のヘッダ・フッタを更新する（PC/SP）",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        subtasks: [
          {
            id: "28472",
            key: "RUSE-875",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28472",
            fields: {
              summary: "[査定フォーム] ヘッダ・フッタを更新する（PC/SP）",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28471",
            key: "RUSE-874",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28471",
            fields: {
              summary: "[おいくらサイト全般] ヘッダ・フッタを更新する（PC/SP）",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        customfield_10634: null,
        environment: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-873/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28469",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28469",
      key: "RUSE-872",
      fields: {
        statuscategorychangedate: "2021-01-21T10:15:33.502+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
          id: "10150",
          description: "さまざまな小規模作業。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
          name: "タスク",
          subtask: false,
          avatarId: 10318,
          entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10627: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-872/watchers",
          watchCount: 1,
          isWatching: false,
        },
        lastViewed: "2021-01-22T16:21:45.114+0900",
        created: "2021-01-21T10:15:33.103+0900",
        customfield_10020: "0|i01lmr:9",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        customfield_10620: null,
        labels: [],
        customfield_10610: 15.0,
        customfield_10016: null,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        customfield_10614: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [
          {
            id: "23687",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issueLink/23687",
            type: {
              id: "10000",
              name: "Blocks",
              inward: "is blocked by",
              outward: "blocks",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issueLinkType/10000",
            },
            inwardIssue: {
              id: "28369",
              key: "RUSE-802",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28369",
              fields: {
                summary:
                  "査定結果を見たユーザーから店舗へメーラー以外で問い合わせできる（UI以外のみ作成）",
                status: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
                  description: "",
                  iconUrl: "https://xxxxxxxx.atlassian.net/",
                  name: "RV中",
                  id: "10421",
                  statusCategory: {
                    self:
                      "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
                    id: 4,
                    key: "indeterminate",
                    colorName: "yellow",
                    name: "進行中",
                  },
                },
                priority: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                  name: "Medium",
                  id: "3",
                },
                issuetype: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
                  id: "10150",
                  description: "さまざまな小規模作業。",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
                  name: "タスク",
                  subtask: false,
                  avatarId: 10318,
                  entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
                  hierarchyLevel: 0,
                },
              },
            },
          },
        ],
        assignee: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        updated: "2021-01-22T08:31:50.140+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text:
                    "レビューをみた感じだと、以下の点からVNで最後まで開発してもらうことに懸念があると判断し、早期に巻き取る。",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "様々なパターンのテストが必要",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "レスポンシブ化対応の受け入れ確認を行う",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "該当ページ（3ページ）",
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
                    id: "194b3884-73b7-4921-b8d9-c9925589f6f7",
                    type: "file",
                    collection: "jira-28469-field-description",
                    occurrenceKey: "a02aa1ce-1e81-4b04-b3d9-f2acc0ce5918",
                    width: 311,
                    height: 407,
                  },
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
                    id: "9fbebc72-57e2-467e-97ff-01b49edf28f1",
                    type: "file",
                    collection: "jira-28469-field-description",
                    occurrenceKey: "dc282a04-cae0-45b3-b1b5-90d98d642b36",
                    width: 314,
                    height: 379,
                  },
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
                    id: "cf52fe16-846e-4ff5-a9f2-a50fd4f13bde",
                    type: "file",
                    collection: "jira-28469-field-description",
                    occurrenceKey: "87d26dff-b494-47c3-850d-e6cdfc7f67b5",
                    width: 303,
                    height: 416,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "baitaiでの分岐は最低限にして、一括査定・全国査定それぞれの査定結果が正しく表示されること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "VNのレスポンシブ対応が取り込まれていて、表示の著しい崩れがないこと",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "機能が問題なく動作していること",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "並び替え",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "返信",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "出張作業費の記載がされていること",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一括査定と全国査定をまとめた後のマイページ表示に関しては別チケットとする",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "853が間に合わなかった場合でもリリースができる",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "テスト＋修正を蓮野さん対応",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "テスト日数：0.5d",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "修正日数：2d?（テスト完了後に見直し）",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "優先順位を考えて諦めてるものも出てくる",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "2.5d＝6*2.5=15",
                        },
                      ],
                    },
                  ],
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
        customfield_10603: null,
        aggregatetimeestimate: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[お客様マイページ] VNで開発したものに不足している要素や分岐を加えて、一括査定・全国査定の両方に対応する形にする",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        customfield_10634: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-872/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28464",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28464",
      key: "RUSE-868",
      fields: {
        statuscategorychangedate: "2021-01-20T15:32:12.513+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
          id: "10149",
          description: "ユーザー目標として表明された機能。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
          name: "ストーリー",
          subtask: false,
          avatarId: 10315,
          entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
          hierarchyLevel: 0,
        },
        parent: {
          id: "27297",
          key: "RUSE-172",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/27297",
          fields: {
            summary: "おいくら-Zプラン",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10627: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-868/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-22T14:33:32.100+0900",
        created: "2021-01-20T15:32:12.196+0900",
        customfield_10020: "0|i01lmy:",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        labels: [],
        customfield_10620: null,
        customfield_10610: 21.0,
        customfield_10016: null,
        customfield_10611: null,
        customfield_10612: null,
        timeestimate: null,
        customfield_10614: null,
        aggregatetimeoriginalestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: null,
        updated: "2021-01-22T13:55:39.687+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "一括査定を全国査定のUIに寄せる",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一括査定での依頼時にも全国査定が送られるようになるため",
                        },
                        {
                          type: "hardBreak",
                        },
                        {
                          type: "text",
                          text:
                            "依頼の分岐を前提としない形にマイページのUIを変更する",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一括査定の依頼の場合ユーザーが選択した買取方法の金額が表示されていること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "全国査定の場合には店舗が選択した買取方法の金額が表示されていること",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "2/12までにリリースマスト",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "2/11が祝日なので実質、2/9,10あたりにはリリース想定",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "VNで行ったレスポンシブ化が取り込まれていている前提 => ",
                        },
                        {
                          type: "text",
                          text: "872",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href:
                                  "https://xxxxxxxx.atlassian.net/browse/RUSE-872",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "優先度は以下記載の通りで、運営管理はリリースまでには間に合っていなくても良い",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "=>PO確認中",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "対象",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "お客様マイページ",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "過去査定一覧",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/CreqEstResultLists/showReqList",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/CreqEstResultLists/showReqList",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "査定回答一覧",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/CreqEstResultLists/showEstResultList?seq_request_id=9267384&seq_user_id=&key=08906745",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/CreqEstResultLists/showEstResultList?seq_request_id=9267384&seq_user_id=&key=08906745",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "査定回答詳細",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/mypage/response_detail?seq_request_id=9266076&seq_user_id=1759260&key=91824078",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/mypage/response_detail?seq_request_id=9266076&seq_user_id=1759260&key=91824078",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "加盟店マイページ",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "依頼一覧(PC/SP)",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/client/rest-lists/index/",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/client/rest-lists/index/",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "査定回答詳細(PC/SP)",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/client/rest-details/index/9266099/index",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/client/rest-details/index/9266099/index",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "口コミ投稿依頼(PC/SP)",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/client/rest-reports/confirm/9266099",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/client/rest-reports/confirm/9266099",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "グループ店舗マイページ",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "依頼一覧(PC/SP)",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/group/rest-lists/index/",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/group/rest-lists/index/",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "査定回答詳細(PC/SP)",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/group/rest-details/index/9272515/1759260/index",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/group/rest-details/index/9272515/1759260/index",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "口コミ投稿依頼(PC/SP)",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/group/rest-reports/confirm/9266400/seq_user_id:1759260",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/group/rest-reports/confirm/9266400/seq_user_id:1759260",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "運営管理",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "依頼審査削除",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "https://oikura.jp/maintenance/req-searche/",
                                                  marks: [
                                                    {
                                                      type: "link",
                                                      attrs: {
                                                        href:
                                                          "https://oikura.jp/maintenance/req-searche/",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "作業内容",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "UI",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "お客様マイページ、加盟店マイページ、グループ（SP／PC）",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "15ページ分",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "お客様マイページはレスポンシブ対応済み前提",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "Zプラン用で表示分岐が存在する",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "分岐を無くして、どっちのもの表示できるようにする",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "運営管理ページ（やらない予定）",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "Zプラン対応されていない",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "全国査定情報が入っても表示されるよう対応する",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
        customfield_10603: null,
        aggregatetimeestimate: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary: "※853関連※[マイページ] 一括査定を全国査定のUIに寄せる",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [
          {
            id: "28467",
            key: "RUSE-870",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28467",
            fields: {
              summary:
                "[加盟店マイページ（PC/SP）] baitai=zでの分岐をなくし、単一のフォーマットで一括査定・全国査定の査定結果を表示させる",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28468",
            key: "RUSE-871",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28468",
            fields: {
              summary:
                "[グループログイン（PC/SP）] baitai=zでの分岐をなくし、単一のフォーマットで一括査定・全国査定の査定結果を表示させる",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28466",
            key: "RUSE-869",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28466",
            fields: {
              summary:
                "[お客様マイページ] baitai=zでの分岐をなくし、単一のフォーマットで一括査定・全国査定の査定結果を表示させる",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: null,
        environment: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-868/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28454",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28454",
      key: "RUSE-859",
      fields: {
        statuscategorychangedate: "2021-01-19T16:34:09.414+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10151",
          id: "10151",
          description: "問題またはエラー。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10303&avatarType=issuetype",
          name: "バグ",
          subtask: false,
          avatarId: 10303,
          entityId: "1bae50c8-b428-4935-85e8-3a5c20ea587c",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10627: null,
        customfield_10629: "0.5",
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-859/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-22T16:22:23.273+0900",
        created: "2021-01-19T15:21:30.985+0900",
        customfield_10020: "0|i01m33:",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300:
          '{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={"cachedValue":{"errors":[],"summary":{"pullrequest":{"overall":{"count":1,"lastUpdated":"2021-01-19T16:40:38.000+0900","stateCount":1,"state":"OPEN","dataType":"pullrequest","open":true},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        labels: [],
        customfield_10620: null,
        customfield_10016: null,
        customfield_10610: null,
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        updated: "2021-01-22T16:22:20.011+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "RV中",
          id: "10421",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "起こっている問題",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一部ページにおいてgoogle tag mnagerが正常に動作していない",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "https://oikura.jp/guide/",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href: "https://oikura.jp/guide/",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "問題の再現手段",
                },
              ],
            },
            {
              type: "orderedList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "https://oikura.jp/guide/にアクセス",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href:
                                  "https://oikura.jp/guide/%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "google tag assistantを起動",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "enableをクリックしてリロード",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "google tag assisitantでrecord結果を確認",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "該当のページでtagmanagerが発火していることを確認する",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "https://oikura.jp/guide/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "https://oikura.jp/guide/",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "https://oikura.jp/guide/faq/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "https://oikura.jp/guide/faq/",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "https://oikura.jp/lp/ihin/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "https://oikura.jp/lp/ihin/",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "TOPや他のもともと動作していたページに影響が出ていないことを確認する",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "https://oikura.jp",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href: "https://oikura.jp/guide/",
                                      },
                                    },
                                  ],
                                },
                                {
                                  type: "text",
                                  text: "/",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "動作環境・ブラウザ",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "macOS / Windows / Linux / iOS / Android",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "Chrome / Safari / Firefox / Edge / Internet Explorer",
                        },
                      ],
                    },
                  ],
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
        customfield_10603: null,
        aggregatetimeestimate: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary: "一部のページでtagmangerがエラーを起こしている",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: null,
        environment: null,
        customfield_10635: null,
        customfield_10636: "2021-01-19",
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-859/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28446",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28446",
      key: "RUSE-853",
      fields: {
        statuscategorychangedate: "2021-01-22T08:30:41.468+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
          id: "10149",
          description: "ユーザー目標として表明された機能。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
          name: "ストーリー",
          subtask: false,
          avatarId: 10315,
          entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
          hierarchyLevel: 0,
        },
        parent: {
          id: "27297",
          key: "RUSE-172",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/27297",
          fields: {
            summary: "おいくら-Zプラン",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-853/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-22T16:21:56.853+0900",
        created: "2021-01-18T16:46:06.045+0900",
        customfield_10020: "0|i01lmu:",
        customfield_10021: null,
        customfield_10100: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10300:
          '{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={"cachedValue":{"errors":[],"summary":{"pullrequest":{"overall":{"count":1,"lastUpdated":"2021-01-22T17:07:21.000+0900","stateCount":1,"state":"OPEN","dataType":"pullrequest","open":true},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        customfield_10620: 0.0,
        labels: [],
        customfield_10016: null,
        customfield_10610: 29.0,
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5dbb9fecb8463d0c4fb6ed2b",
          accountId: "5dbb9fecb8463d0c4fb6ed2b",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "24x24":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "16x16":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "32x32":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
          },
          displayName: "南島康一",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-22T17:07:25.757+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "RV中",
          id: "10421",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一括に比べると全国査定の返信率が著しく低いため一括査定にも送りユーザーに返信がいくようにしたい",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "全国査定の依頼に対しての返信率が現在30%ほど",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "一括査定は返信率が80%",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "フォームから依頼をした際に一括査定と全国査定、どちらにも依頼を送る",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "全国査定（Z）で送っている項目が一括査定でも送られていること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "該当した店舗に依頼が飛んでいること（店舗情報APIの取得結果、一括査定先店舗に飛んでること）",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "修正後のフォームから送信した依頼が全国査定の依頼一覧に表示されていること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "Z用の項目が査定フォームのUIに表示されていて、送信されていること",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "Z用の項目は一括査定（既存おいくらDB）に保存されないでOK？",
                                  marks: [
                                    {
                                      type: "strong",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "査定後のマイページに表示しないなら保存されないでもOK？",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "依頼IDが一緒なのでZで見ることはできる",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "2/12までにリリースマスト",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "2/11が祝日なので実質、2/9,10あたりにはリリース想定",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "ME送客はZに流しますか？",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "流したいです（関根）",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "流す",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "何が必要になる？切り出せる？",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "工数的には追加しても問題ないよ",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "査定が入らない依頼がZで増える？",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "ME送客はユーザーが消してることが多いらしい",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "SRが増えてきたら別途検討",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "母数が増える分、率が下がって見えるようになるかも",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "テストの手間が増えそう",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "決めなきゃいけないところ",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一括査定で店舗検索した際にサジェストも含め一致0件だった場合にはフォーム側で止める（＝依頼がPOSTされない)",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "PO確認済 → ",
                                },
                                {
                                  type: "text",
                                  text:
                                    "https://xxxxxxxx.slack.com/archives/G015A8A6U67/p1611271341004600",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href:
                                          "https://xxxxxxxx.slack.com/archives/G015A8A6U67/p1611271341004600",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "作業内容",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "マイページの査定店舗件数",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "一括査定：店舗数非表示（予定）　←削除を含めるかどうかは未定",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "全国査定：0　←査定が入れば加算",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "API",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "一括査定用エンドポイント内",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "Z用のエンドポイントの内容を吸収する",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "Zにも依頼を送る",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "一括査定用のデータをZ用に整形して送る必要がある",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "ME送客にも送る",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "ME送客に必要なデータをDBから取り出して付け足す必要がある",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "メールテンプレートにZプランで送っていた内容を追記する",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "少し内容が合ってなくてもここはスコープ外",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "マイページ修正時（RUSE-868）に対応予定",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "フォーム（UI）",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "Zプラン用のUIと一括査定用のUIを統合するイメージ",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "Zプラン用の条件分岐がなくなる",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "店舗検索APIを用いた店舗情報部分をUI上に表示しないよう変更する",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "地区町村を選ぶと出てくる店舗情報をUI上に表示しない",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "サジェストも表示しない",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "店舗情報が見つからなかった場合は「店舗が見つかりませんでした」といったメッセージを表示する",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text:
                                                    "買取方法付近に表示する",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "APIのレスポンス待ちのローディングは残す（UIに表示しないだけで店舗情報は取得する）",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "詳しい変更内容はサブタスク内参照",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
          "一括査定のUIに全国査定の項目を足して、一括・全国両方に送信する",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [
          {
            id: "28448",
            key: "RUSE-855",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28448",
            fields: {
              summary: "[Form]一括査定でもZと同じデータを送信できる",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10370",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "作業中",
                id: "10370",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
                  id: 4,
                  key: "indeterminate",
                  colorName: "yellow",
                  name: "進行中",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28447",
            key: "RUSE-854",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28447",
            fields: {
              summary:
                "[API]選択された買取方法での店舗数が20件に満たなかった場合Zにも依頼を送る",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "RV中",
                id: "10421",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
                  id: 4,
                  key: "indeterminate",
                  colorName: "yellow",
                  name: "進行中",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: "2021-01-21",
        customfield_10635: "1",
        customfield_10636: "2021-01-22",
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-853/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28442",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28442",
      key: "RUSE-850",
      fields: {
        statuscategorychangedate: "2021-01-21T14:23:04.116+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
          id: "10149",
          description: "ユーザー目標として表明された機能。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
          name: "ストーリー",
          subtask: false,
          avatarId: 10315,
          entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
          hierarchyLevel: 0,
        },
        parent: {
          id: "27297",
          key: "RUSE-172",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/27297",
          fields: {
            summary: "おいくら-Zプラン",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10627: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-850/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-23T23:09:28.277+0900",
        created: "2021-01-18T09:42:06.086+0900",
        customfield_10020: "0|i01lmr:00i",
        customfield_10021: null,
        customfield_10100: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10300:
          '{branch={count=1, dataType=branch}, json={"cachedValue":{"errors":[],"summary":{"branch":{"overall":{"count":1,"lastUpdated":null,"dataType":"branch"},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        labels: [],
        customfield_10620: 0.0,
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        updated: "2021-01-22T12:21:21.917+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10370",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "作業中",
          id: "10370",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "inlineCard",
                  attrs: {
                    url:
                      "https://docs.google.com/spreadsheets/d/1n-lNJKQL0gh0MmUrCZ8mlAcL-ZpJx_JqAL1EAg7910c/edit#gid=1278707060",
                  },
                },
                {
                  type: "text",
                  text: " ",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "マイページから店舗に問い合わせをする際にフォームから送信ができる",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "RUSE-802案",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href:
                                  "https://docs.google.com/spreadsheets/d/1n-lNJKQL0gh0MmUrCZ8mlAcL-ZpJx_JqAL1EAg7910c/edit#gid=1278707060",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "新規のVIewは2つ",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "回答送信画面",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "回答送信完了画面",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "別ページ遷移とする",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "査定回答詳細 => 回答送信画面 => 回答送信完了画面",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
                    id: "cbfd4174-a1d8-4f4b-985d-4a662d2d1a03",
                    type: "file",
                    collection: "jira-28442-field-description",
                    occurrenceKey: "8b6ffabc-9b06-44e3-9579-fe48c6a2d7b8",
                    width: 505,
                    height: 686,
                  },
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
                    id: "2a82a576-ee53-4b08-a0fd-6162653a0238",
                    type: "file",
                    collection: "jira-28442-field-description",
                    occurrenceKey: "5d0509ee-14af-489f-b774-59ff205ad04a",
                    width: 385,
                    height: 326,
                  },
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "現在、ガワは準備済",
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
                    id: "cde7d474-5598-4e81-a8c1-27754bbf0ec7",
                    type: "file",
                    collection: "jira-28442-field-description",
                    width: 846,
                    height: 460,
                    occurrenceKey: "c3c1bb0b-2364-4924-b0b9-7fac526ed2c5",
                  },
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "査定回答詳細の「ショップに連絡する」から遷移させる",
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
                    id: "25a67e79-d222-42e9-9610-53bd153de0c0",
                    type: "file",
                    collection: "jira-28442-field-description",
                    width: 300,
                    height: 409,
                    occurrenceKey: "3aaaa3d0-0a61-4d33-8ba6-87d7eabc87d7",
                  },
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "デザインはこちらを踏襲",
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
                    id: "02059a39-4ecf-463b-975c-3676972044ba",
                    type: "file",
                    collection: "jira-28442-field-description",
                    width: 302,
                    height: 420,
                    occurrenceKey: "10c227f7-58ad-42c1-917a-c519e6ba3e65",
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "各Viewがレスポンシブに対応した状態で表示できること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "メールが送信できること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "送信されたメールの内容がPOと合意した内容と相違ないこと",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "現在VNで進めているマイページのレスポンシブ対応と一緒にするためレスポンシブ前提で作成する",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "ヘッダ、フッタなどの共通部分はVNが作成したものをマイページのレスポンシブ化が完了した後で当て込む",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "トーンはレスポンシブ化後に合わせる",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "デザインとコーディングを含む",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "ロジックは",
                        },
                        {
                          type: "text",
                          text: "別チケット",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href:
                                  "https://xxxxxxxx.atlassian.net/browse/RUSE-802",
                              },
                            },
                          ],
                        },
                        {
                          type: "text",
                          text: "とする",
                        },
                      ],
                    },
                  ],
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
        summary: "UI側からメール送信できるようにする",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [
          {
            id: "28463",
            key: "RUSE-867",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28463",
            fields: {
              summary: "マイページからフォーム画面への繋ぎ込み",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28462",
            key: "RUSE-866",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28462",
            fields: {
              summary: "SP：スタイルのフィッティング",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28461",
            key: "RUSE-865",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28461",
            fields: {
              summary: "UI側からメール送信できるようにする",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28460",
            key: "RUSE-864",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28460",
            fields: {
              summary: "PC：スタイルのフィッティング",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28459",
            key: "RUSE-863",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28459",
            fields: {
              summary: "デザイン作成",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: "2021-01-21",
        environment: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-850/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28439",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28439",
      key: "RUSE-847",
      fields: {
        statuscategorychangedate: "2021-01-13T18:09:56.278+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
          id: "10150",
          description: "さまざまな小規模作業。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
          name: "タスク",
          subtask: false,
          avatarId: 10318,
          entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-847/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-22T15:19:22.198+0900",
        created: "2021-01-13T18:09:55.907+0900",
        customfield_10020: "0|i01ln5:",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        labels: [],
        customfield_10620: null,
        customfield_10610: 3.0,
        customfield_10016: null,
        customfield_10611: null,
        customfield_10612: null,
        customfield_10614: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [
          {
            id: "23685",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issueLink/23685",
            type: {
              id: "10001",
              name: "Cloners",
              inward: "is cloned by",
              outward: "clones",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issueLinkType/10001",
            },
            outwardIssue: {
              id: "28427",
              key: "RUSE-843",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28427",
              fields: {
                summary: "レオパレス21のLPをアップロードする",
                status: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/status/10376",
                  description: "",
                  iconUrl: "https://xxxxxxxx.atlassian.net/",
                  name: "完了",
                  id: "10376",
                  statusCategory: {
                    self:
                      "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "完了",
                  },
                },
                priority: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                  name: "Medium",
                  id: "3",
                },
                issuetype: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
                  id: "10150",
                  description: "さまざまな小規模作業。",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
                  name: "タスク",
                  subtask: false,
                  avatarId: 10318,
                  entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
                  hierarchyLevel: 0,
                },
              },
            },
          },
        ],
        assignee: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        updated: "2021-01-22T14:04:48.085+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "新規アライアンス先(大東建託)との提携開始に伴ってLPをアップする必要がある",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "URLは",
                        },
                        {
                          type: "text",
                          text:
                            "https://oikura.jp/shopsupport/lp/partner/dkselect/",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href:
                                  "https://oikura.jp/shopsupport/lp/partner/dkselect/",
                              },
                            },
                            {
                              type: "underline",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "1月29日までにアップする",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "shopsupport配下の他のページと同様のものをheader内に設置",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "タグマネージャー",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "GA",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "optimize",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "GoogleTagAssistantで発火していることを確認する",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "https://wacul-ai.com/blog/access-analysis/google-analytics-method/tagassistant/",
                                  marks: [
                                    {
                                      type: "link",
                                      attrs: {
                                        href:
                                          "https://wacul-ai.com/blog/access-analysis/google-analytics-method/tagassistant/",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "https://oikura.jp/shopsupport/lp/partner/dkselect/",
                          marks: [
                            {
                              type: "link",
                              attrs: {
                                href:
                                  "https://oikura.jp/shopsupport/lp/partner/dkselect/",
                              },
                            },
                          ],
                        },
                        {
                          type: "text",
                          text: "で該当のページが表示崩れなく確認できること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "以下のタグが動作していること",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "タグマネージャー",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "GA",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "optimize",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "cssやjsのチェックは最低限しか行わない",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "そもそも動作していない",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "スタイルが正常にあたっていない",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "1/28まで",
                        },
                      ],
                    },
                  ],
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
        summary: "大東建託のLPをアップロードする",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-847/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28420",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28420",
      key: "RUSE-836",
      fields: {
        statuscategorychangedate: "2021-01-07T19:07:40.813+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
          id: "10149",
          description: "ユーザー目標として表明された機能。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
          name: "ストーリー",
          subtask: false,
          avatarId: 10315,
          entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-836/watchers",
          watchCount: 1,
          isWatching: false,
        },
        lastViewed: "2021-01-22T16:21:32.389+0900",
        created: "2021-01-07T19:07:40.509+0900",
        customfield_10020: "0|i01ln1:",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300: "{}",
        customfield_10620: 0.0,
        labels: [],
        customfield_10016: null,
        customfield_10610: 5.0,
        customfield_10611: null,
        customfield_10612: null,
        customfield_10614: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [
          {
            id: "23682",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issueLink/23682",
            type: {
              id: "10300",
              name: "Gantt End to Start",
              inward: "has to be done after",
              outward: "has to be done before",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issueLinkType/10300",
            },
            inwardIssue: {
              id: "28369",
              key: "RUSE-802",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28369",
              fields: {
                summary:
                  "査定結果を見たユーザーから店舗へメーラー以外で問い合わせできる（UI以外のみ作成）",
                status: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
                  description: "",
                  iconUrl: "https://xxxxxxxx.atlassian.net/",
                  name: "RV中",
                  id: "10421",
                  statusCategory: {
                    self:
                      "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
                    id: 4,
                    key: "indeterminate",
                    colorName: "yellow",
                    name: "進行中",
                  },
                },
                priority: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                  name: "Medium",
                  id: "3",
                },
                issuetype: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
                  id: "10150",
                  description: "さまざまな小規模作業。",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
                  name: "タスク",
                  subtask: false,
                  avatarId: 10318,
                  entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
                  hierarchyLevel: 0,
                },
              },
            },
          },
        ],
        assignee: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5d92ed2ce85fbc0c2a155ad6",
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
        updated: "2021-01-22T16:21:28.823+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "To Do",
          id: "10369",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
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
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "お客様マイページの査定結果から店舗へ問い合わせた時、問い合わせ内容の控えをお客様へもメール送信する",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "返信メールで以下の２通のメールが送信されること",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "店舗への通知メール（既存／802で実装済み）",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "お客様への控えメール（当チケット追加分）",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "店舗への通知メールは実装済みなので、お客様への控えメールの送信のみ実装する",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "Controller内で２通送る",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "テンプレートの内容に次第で新たにデータをとる必要はあるかも",
                        },
                      ],
                    },
                  ],
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
        customfield_10603: null,
        aggregatetimeestimate: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[802が終わったら！] ユーザから査定店舗へ問い合わせた際にユーザへ自動送信メール（控え）を送信する",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5d92e5f256bb950dd648bad8",
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
        subtasks: [
          {
            id: "28424",
            key: "RUSE-840",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28424",
            fields: {
              summary: "メール送信処理の実装",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28423",
            key: "RUSE-839",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28423",
            fields: {
              summary: "メールテンプレート作成",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10376",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "完了",
                id: "10376",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/3",
                  id: 3,
                  key: "done",
                  colorName: "green",
                  name: "完了",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5d92e5f256bb950dd648bad8",
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
        customfield_10634: null,
        customfield_10635: null,
        customfield_10636: null,
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-836/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28397",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28397",
      key: "RUSE-816",
      fields: {
        statuscategorychangedate: "2021-01-07T17:16:35.856+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10151",
          id: "10151",
          description: "問題またはエラー。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10303&avatarType=issuetype",
          name: "バグ",
          subtask: false,
          avatarId: 10303,
          entityId: "1bae50c8-b428-4935-85e8-3a5c20ea587c",
          hierarchyLevel: 0,
        },
        parent: {
          id: "27297",
          key: "RUSE-172",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/27297",
          fields: {
            summary: "おいくら-Zプラン",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: "2021-01-22T16:40:40.060+0900",
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-816/watchers",
          watchCount: 2,
          isWatching: true,
        },
        created: "2021-01-06T18:03:34.946+0900",
        customfield_10020: "0|i01lmr:01",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300:
          '{pullrequest={dataType=pullrequest, state=MERGED, stateCount=1}, json={"cachedValue":{"errors":[],"summary":{"pullrequest":{"overall":{"count":1,"lastUpdated":"2021-01-22T15:22:10.000+0900","stateCount":1,"state":"MERGED","dataType":"pullrequest","open":false},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        customfield_10620: 1.0,
        labels: [],
        customfield_10016: null,
        customfield_10610: null,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        customfield_10614: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [],
        assignee: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        updated: "2021-01-22T12:21:17.936+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10371",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "テスト中",
          id: "10371",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "起こっている問題",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "本番",
                },
                {
                  type: "hardBreak",
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
                    id: "ed14a81a-2a00-4eaf-b719-682ad816f9e6",
                    type: "file",
                    collection: "jira-28397-field-description",
                    width: 383,
                    height: 219,
                    occurrenceKey: "b08491cb-08a3-4860-b97b-67b9d4a6a522",
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "dev環境",
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
                    id: "42977fc8-2694-44a9-a7f0-af69162ad013",
                    type: "file",
                    collection: "jira-28397-field-description",
                    width: 435,
                    height: 289,
                    occurrenceKey: "c9b8bd36-42f7-445c-8e22-9808dcca6f4d",
                  },
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "依頼詳細にあるお気に入りボタンのスタイルが外れている",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "ここ以外の崩れは確認していないので他に影響がある可能性はある",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "問題の再現手段",
                },
              ],
            },
            {
              type: "orderedList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "iPhoneやChromeのシュミレートで依頼詳細にアクセス",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "本番(デザイン)と同様のスタイリングになっていること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "お気に入りボタン以外も影響が出ていないこと",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "動作環境・ブラウザ",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "iOS",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "Safari",
                        },
                      ],
                    },
                  ],
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
        summary: "[依頼詳細-SP]お気に入りボタンのスタイルが外れている",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [
          {
            id: "28443",
            key: "RUSE-851",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28443",
            fields: {
              summary:
                "[テスト指摘] iPad mini4 依頼詳細のお気に入りボタンの文字がずれている",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        aggregateprogress: {
          progress: 0,
          total: 0,
        },
        customfield_10000: "2021-01-07T17:16:59.305+0900",
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
        customfield_10634: null,
        environment: null,
        customfield_10635: null,
        customfield_10636: "2021-01-07",
        customfield_10637: "5",
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-816/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28369",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28369",
      key: "RUSE-802",
      fields: {
        statuscategorychangedate: "2021-01-14T08:16:30.666+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
          id: "10150",
          description: "さまざまな小規模作業。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
          name: "タスク",
          subtask: false,
          avatarId: 10318,
          entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        resolutiondate: null,
        customfield_10627: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-802/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-23T23:10:16.641+0900",
        created: "2020-12-25T15:20:54.632+0900",
        customfield_10020: "0|i01lmr:02",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300:
          '{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={"cachedValue":{"errors":[],"summary":{"pullrequest":{"overall":{"count":1,"lastUpdated":"2021-01-15T11:29:20.000+0900","stateCount":1,"state":"OPEN","dataType":"pullrequest","open":true},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        customfield_10620: 0.0,
        labels: [],
        customfield_10610: 21.0,
        customfield_10016: null,
        customfield_10611: null,
        customfield_10612: null,
        aggregatetimeoriginalestimate: null,
        timeestimate: null,
        customfield_10614: null,
        versions: [],
        customfield_10618: null,
        customfield_10619: null,
        issuelinks: [
          {
            id: "23687",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issueLink/23687",
            type: {
              id: "10000",
              name: "Blocks",
              inward: "is blocked by",
              outward: "blocks",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issueLinkType/10000",
            },
            outwardIssue: {
              id: "28469",
              key: "RUSE-872",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28469",
              fields: {
                summary:
                  "[お客様マイページ] VNで開発したものに不足している要素や分岐を加えて、一括査定・全国査定の両方に対応する形にする",
                status: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                  description: "",
                  iconUrl: "https://xxxxxxxx.atlassian.net/",
                  name: "To Do",
                  id: "10369",
                  statusCategory: {
                    self:
                      "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                    id: 2,
                    key: "new",
                    colorName: "blue-gray",
                    name: "To Do",
                  },
                },
                priority: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                  name: "Medium",
                  id: "3",
                },
                issuetype: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
                  id: "10150",
                  description: "さまざまな小規模作業。",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
                  name: "タスク",
                  subtask: false,
                  avatarId: 10318,
                  entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
                  hierarchyLevel: 0,
                },
              },
            },
          },
          {
            id: "23681",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issueLink/23681",
            type: {
              id: "10300",
              name: "Gantt End to Start",
              inward: "has to be done after",
              outward: "has to be done before",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issueLinkType/10300",
            },
            outwardIssue: {
              id: "28419",
              key: "RUSE-835",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28419",
              fields: {
                summary:
                  "査定結果に対して２回目の店舗問い合わせをできないようにする（UI以外のみ変更）",
                status: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                  description: "",
                  iconUrl: "https://xxxxxxxx.atlassian.net/",
                  name: "To Do",
                  id: "10369",
                  statusCategory: {
                    self:
                      "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                    id: 2,
                    key: "new",
                    colorName: "blue-gray",
                    name: "To Do",
                  },
                },
                priority: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                  name: "Medium",
                  id: "3",
                },
                issuetype: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10150",
                  id: "10150",
                  description: "さまざまな小規模作業。",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
                  name: "タスク",
                  subtask: false,
                  avatarId: 10318,
                  entityId: "972aaaa6-b3cb-4f0c-b369-5140aa58f3b0",
                  hierarchyLevel: 0,
                },
              },
            },
          },
          {
            id: "23682",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issueLink/23682",
            type: {
              id: "10300",
              name: "Gantt End to Start",
              inward: "has to be done after",
              outward: "has to be done before",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issueLinkType/10300",
            },
            outwardIssue: {
              id: "28420",
              key: "RUSE-836",
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28420",
              fields: {
                summary:
                  "[802が終わったら！] ユーザから査定店舗へ問い合わせた際にユーザへ自動送信メール（控え）を送信する",
                status: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                  description: "",
                  iconUrl: "https://xxxxxxxx.atlassian.net/",
                  name: "To Do",
                  id: "10369",
                  statusCategory: {
                    self:
                      "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                    id: 2,
                    key: "new",
                    colorName: "blue-gray",
                    name: "To Do",
                  },
                },
                priority: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                  name: "Medium",
                  id: "3",
                },
                issuetype: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
                  id: "10149",
                  description: "ユーザー目標として表明された機能。",
                  iconUrl:
                    "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
                  name: "ストーリー",
                  subtask: false,
                  avatarId: 10315,
                  entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
                  hierarchyLevel: 0,
                },
              },
            },
          },
        ],
        assignee: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5dbb9fecb8463d0c4fb6ed2b",
          accountId: "5dbb9fecb8463d0c4fb6ed2b",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "24x24":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "16x16":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "32x32":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
          },
          displayName: "南島康一",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-22T12:21:14.693+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "RV中",
          id: "10421",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "【問題点】",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "ユーザーはマイページで査定結果を確認しても、メーラーを立ち上げてメールする、店舗のアドレスをコピーするなどしてメールする等を強いられていて顧客体験が悪い",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "そもそもメールアドレスを表示するためのボタンも「質問メール」という表記であったり、直感的ではなくわかりづらい",
                        },
                      ],
                    },
                  ],
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
                    id: "cc5ee350-6412-4f73-9c68-14a96f355d2b",
                    type: "file",
                    collection: "jira-28369-field-description",
                    occurrenceKey: "1436b0be-faa4-4cbf-8469-dcf103a3813b",
                    width: 442,
                    height: 636,
                  },
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
                    id: "b11dfb11-d334-4add-9043-0cfd24bed4f1",
                    type: "file",
                    collection: "jira-28369-field-description",
                    occurrenceKey: "c169f12a-688f-439e-8593-ed3726aa2310",
                    width: 952,
                    height: 578,
                  },
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
                    id: "e6fd63fc-97a2-45c4-b305-3ed3bb97ad19",
                    type: "file",
                    collection: "jira-28369-field-description",
                    occurrenceKey: "d90ebc93-62ed-45c6-b809-9c67c5b85c1a",
                    width: 598,
                    height: 449,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "【全体像】",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text:
                    "依頼詳細の「ショップに返事を出す」をクリックするとお問い合わせフォームが立ち上がって、入力した内容が店舗にメールで届く",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "「ショップに返事を出す」をクリックするとお問い合わせフォームが立ち上がる",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "入力された内容が店舗に送られる",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "一度に送れるのは選択した店舗のみ、一箇所に送った後は送信不可",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "その後はメールでやりとりしてもらう",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "送信した内容はお客さんに自動送信する(控えメール)",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "問い合わせ送信",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "店舗へメール送信されること",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text:
                                    "送信されたメールの内容に以下の情報が含まれていること",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "本文",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "名前",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "依頼時の名前をそのまま送る",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "メールアドレス",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "依頼時のアドレスをそのまま送る",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "問い合わせ種別",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text:
                                                            "APIが受け取った内容",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "問い合わせ内容",
                                                },
                                              ],
                                            },
                                            {
                                              type: "bulletList",
                                              content: [
                                                {
                                                  type: "listItem",
                                                  content: [
                                                    {
                                                      type: "paragraph",
                                                      content: [
                                                        {
                                                          type: "text",
                                                          text: "自由入力",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "電話番号を入れる？？",
                                                  marks: [
                                                    {
                                                      type: "strong",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "件名",
                                        },
                                      ],
                                    },
                                    {
                                      type: "bulletList",
                                      content: [
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "依頼ID",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          type: "listItem",
                                          content: [
                                            {
                                              type: "paragraph",
                                              content: [
                                                {
                                                  type: "text",
                                                  text: "名前",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "DBに以下の内容が保存されていること",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "問い合わせ内容（任意入力）",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text:
                                            "問い合わせ種別（必須、文字列）",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "全体像のうち、バックエンド側のみを日本対応とする",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "既存のメール送信を使いまわして実装する",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "開発者側の動作確認のみを行う（テストは行わない）",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "メール送信用のファンクションを作る",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "Controller",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "Model操作でデータ作る",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "送信データの保存",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: "フラグの保存",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "メール送信",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "UI側から問い合わせ内容、問い合わせ種別、依頼ID？を受け取る前提",
                        },
                      ],
                    },
                  ],
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
          "査定結果を見たユーザーから店舗へメーラー以外で問い合わせできる（UI以外のみ作成）",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [
          {
            id: "28426",
            key: "RUSE-842",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28426",
            fields: {
              summary: "店舗向けメールの送信処理の実装",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "RV中",
                id: "10421",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
                  id: 4,
                  key: "indeterminate",
                  colorName: "yellow",
                  name: "進行中",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28425",
            key: "RUSE-841",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28425",
            fields: {
              summary: "DB：送信データ、フラグを保存する",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "RV中",
                id: "10421",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
                  id: 4,
                  key: "indeterminate",
                  colorName: "yellow",
                  name: "進行中",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
          {
            id: "28422",
            key: "RUSE-838",
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28422",
            fields: {
              summary: "メールフォーマットを決める",
              status: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
                description: "",
                iconUrl: "https://xxxxxxxx.atlassian.net/",
                name: "To Do",
                id: "10369",
                statusCategory: {
                  self:
                    "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do",
                },
              },
              priority: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
                name: "Medium",
                id: "3",
              },
              issuetype: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10153",
                id: "10153",
                description:
                  "サブタスクでは、大規模なタスク内の小さな作業を追跡します。",
                iconUrl:
                  "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10316&avatarType=issuetype",
                name: "サブタスク",
                subtask: true,
                avatarId: 10316,
                entityId: "faaa7dd1-354c-44c9-a23b-68df4e5031ee",
                hierarchyLevel: -1,
              },
            },
          },
        ],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: "2021-01-18",
        environment: null,
        customfield_10635: "1",
        customfield_10636: "2021-01-19",
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-802/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "28151",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/28151",
      key: "RUSE-662",
      fields: {
        statuscategorychangedate: "2021-01-13T08:55:55.260+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
          id: "10149",
          description: "ユーザー目標として表明された機能。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
          name: "ストーリー",
          subtask: false,
          avatarId: 10315,
          entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
          hierarchyLevel: 0,
        },
        parent: {
          id: "27297",
          key: "RUSE-172",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/27297",
          fields: {
            summary: "おいくら-Zプラン",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        lastViewed: "2021-01-21T14:48:23.965+0900",
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-662/watchers",
          watchCount: 1,
          isWatching: false,
        },
        created: "2020-12-01T09:47:33.063+0900",
        customfield_10020: "0|i01m3b:",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300:
          '{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={"cachedValue":{"errors":[],"summary":{"pullrequest":{"overall":{"count":1,"lastUpdated":"2021-01-22T09:08:27.000+0900","stateCount":1,"state":"OPEN","dataType":"pullrequest","open":true},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        labels: [],
        customfield_10620: 13.0,
        customfield_10610: 13.0,
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5d92ed2ce85fbc0c2a155ad6",
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
        updated: "2021-01-22T16:21:05.347+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "RV中",
          id: "10421",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "ユーザーが入力を間違えている場合によりわかりやすく誘導してあげるためにエラー箇所をハイライトする",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "XD",
                        },
                      ],
                    },
                    {
                      type: "bulletList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "PC",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "text",
                                          text: " ",
                                        },
                                        {
                                          type: "text",
                                          text:
                                            "https://xd.adobe.com/view/7eedd767-c840-474a-6c5c-fccc9f0f1d00-08dc/screen/d54b7367-5d79-4230-bc1f-112c2f40b5d3/",
                                          marks: [
                                            {
                                              type: "link",
                                              attrs: {
                                                href:
                                                  "https://xd.adobe.com/view/7eedd767-c840-474a-6c5c-fccc9f0f1d00-08dc/screen/d54b7367-5d79-4230-bc1f-112c2f40b5d3/",
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          type: "text",
                                          text: " ",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "SP",
                                },
                              ],
                            },
                            {
                              type: "bulletList",
                              content: [
                                {
                                  type: "listItem",
                                  content: [
                                    {
                                      type: "paragraph",
                                      content: [
                                        {
                                          type: "inlineCard",
                                          attrs: {
                                            url:
                                              "https://xd.adobe.com/view/6ce7ad80-8283-44ce-7722-f20a1543df7a-1ad6/screen/ab774ecc-749b-4e0d-b0ea-59043e1929bb/",
                                          },
                                        },
                                        {
                                          type: "text",
                                          text: " ",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
                    id: "880a8e72-964d-4d3e-b5f0-d24b5ce80475",
                    type: "file",
                    collection: "jira-28151-field-description",
                    occurrenceKey: "4c357e2d-1c47-4f6b-a37d-499156e5f90b",
                    width: 1072,
                    height: 620,
                  },
                },
              ],
            },
            {
              type: "paragraph",
              content: [],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "エラー発生時にエラー該当箇所がデザイン通りにハイライトされること",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "ハイライトされた箇所の近くにエラー内容のテキストが表示されること",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "[ ] その他補足事項",
                        },
                      ],
                    },
                  ],
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
        customfield_10603: null,
        aggregatetimeestimate: null,
        customfield_10604: null,
        customfield_10605: null,
        customfield_10606: null,
        customfield_10607: null,
        customfield_10608: null,
        customfield_10609: [],
        summary:
          "[依頼詳細] バリデーションエラー時にエラー箇所をハイライトしてエラー内容を表示する",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3Ab460699a-65b7-4bf0-86c0-e08bdaba4d25",
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
        customfield_10634: "2021-01-12",
        customfield_10635: "8",
        customfield_10636: "2021-01-22",
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-662/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "27913",
      self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/27913",
      key: "RUSE-498",
      fields: {
        statuscategorychangedate: "2021-01-21T14:13:07.664+0900",
        issuetype: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10149",
          id: "10149",
          description: "ユーザー目標として表明された機能。",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
          name: "ストーリー",
          subtask: false,
          avatarId: 10315,
          entityId: "0542510e-bfd7-4a41-a2b9-097ead55b117",
          hierarchyLevel: 0,
        },
        parent: {
          id: "26876",
          key: "RUSE-1",
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/issue/26876",
          fields: {
            summary: "おいくら-保守",
            status: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/status/10369",
              description: "",
              iconUrl: "https://xxxxxxxx.atlassian.net/",
              name: "To Do",
              id: "10369",
              statusCategory: {
                self:
                  "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/2",
                id: 2,
                key: "new",
                colorName: "blue-gray",
                name: "To Do",
              },
            },
            priority: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
              name: "Medium",
              id: "3",
            },
            issuetype: {
              self:
                "https://xxxxxxxx.atlassian.net/rest/api/3/issuetype/10152",
              id: "10152",
              description:
                "エピックでは、一連の関連するバグ、ストーリー、タスクを追跡します。",
              iconUrl:
                "https://xxxxxxxx.atlassian.net/secure/viewavatar?size=medium&avatarId=10307&avatarType=issuetype",
              name: "エピック",
              subtask: false,
              avatarId: 10307,
              entityId: "824cc639-126f-4237-8919-530802b83b56",
              hierarchyLevel: 1,
            },
          },
        },
        timespent: null,
        project: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/project/12014",
          id: "12014",
          key: "RUSE",
          name: "チームブルー",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?pid=12014&avatarId=11719",
            "24x24":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=small&s=small&pid=12014&avatarId=11719",
            "16x16":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=12014&avatarId=11719",
            "32x32":
              "https://xxxxxxxx.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=12014&avatarId=11719",
          },
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_10500: null,
        customfield_10627: null,
        resolutiondate: null,
        customfield_10629: null,
        workratio: -1,
        watches: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-498/watchers",
          watchCount: 1,
          isWatching: true,
        },
        lastViewed: "2021-01-21T15:43:08.606+0900",
        created: "2020-10-28T10:53:27.172+0900",
        customfield_10020: "0|i01lmr:09",
        customfield_10021: null,
        priority: {
          self: "https://xxxxxxxx.atlassian.net/rest/api/3/priority/3",
          iconUrl:
            "https://xxxxxxxx.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        customfield_10100: null,
        customfield_10300:
          '{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={"cachedValue":{"errors":[],"summary":{"pullrequest":{"overall":{"count":1,"lastUpdated":"2021-01-21T15:44:32.000+0900","stateCount":1,"state":"OPEN","dataType":"pullrequest","open":true},"byInstanceType":{"GitHub":{"count":1,"name":"GitHub"}}}}},"isStale":true}}',
        customfield_10620: 0.0,
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
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=5dbb9fecb8463d0c4fb6ed2b",
          accountId: "5dbb9fecb8463d0c4fb6ed2b",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "24x24":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "16x16":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
            "32x32":
              "https://secure.gravatar.com/avatar/1090f956740adae84ee9fb0c4019f12b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FM-3.png",
          },
          displayName: "南島康一",
          active: true,
          timeZone: "Asia/Tokyo",
          accountType: "atlassian",
        },
        updated: "2021-01-21T15:45:24.845+0900",
        status: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/status/10421",
          description: "",
          iconUrl: "https://xxxxxxxx.atlassian.net/",
          name: "RV中",
          id: "10421",
          statusCategory: {
            self:
              "https://xxxxxxxx.atlassian.net/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "進行中",
          },
        },
        components: [],
        timeoriginalestimate: null,
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "概要",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "削除した際にもメールが飛ぶ状況のため、一括査定を行った際に大量のメールが飛ぶ",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "そのため一部のお客様から止めてくれ、という旨のSRが入る",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text:
                            "現在削除した場合にはお客様に削除メールが飛ぶが、お客様に削除メールが飛ばないようにする",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "受入条件",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "削除時にメールが飛ばないこと",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "備考",
                },
              ],
            },
            {
              type: "bulletList",
              content: [
                {
                  type: "listItem",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "削除時の遷移は以下",
                        },
                      ],
                    },
                    {
                      type: "orderedList",
                      content: [
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "削除ボタンをクリック(依頼詳細)",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "理由を選択(理由選択)",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "削除確認(削除確認)",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "listItem",
                          content: [
                            {
                              type: "paragraph",
                              content: [
                                {
                                  type: "text",
                                  text: "完了",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        customfield_10015: [
          {
            id: 140,
            name: "Zプランスプリント7",
            state: "closed",
            boardId: 54,
            goal: "",
            startDate: "2020-10-16T08:49:30.029Z",
            endDate: "2020-10-30T12:49:15.000Z",
            completeDate: "2020-10-30T04:10:47.262Z",
          },
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
        summary: "削除した場合にメールが飛ばないようにする",
        creator: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        subtasks: [],
        reporter: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/user?accountId=557058%3A17fcc822-605c-48bb-97b3-2057e2250010",
          accountId: "557058:17fcc822-605c-48bb-97b3-2057e2250010",
          emailAddress: "nakama@xxxxxxxx.co.jp",
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
        customfield_10634: "2021-01-21",
        environment: null,
        customfield_10635: "0",
        customfield_10636: "2021-01-21",
        customfield_10637: null,
        duedate: null,
        progress: {
          progress: 0,
          total: 0,
        },
        votes: {
          self:
            "https://xxxxxxxx.atlassian.net/rest/api/3/issue/RUSE-498/votes",
          votes: 0,
          hasVoted: false,
        },
      },
    },
  ],
};
