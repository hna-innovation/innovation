angular.module('configuration')
  .constant('RESOURCE', {
    TECH: {
      TEAMS:[
        {
          img: '../img/resources/tech/team-3.png',
          name: '敏捷开发咨询',
          leader: '程杨',
          url: 'team-detail'
        },
        {
          img: '../img/resources/tech/team-2.png',
          name: '移动APP开发',
          leader: '杨叶鹏',
          url: 'explore-resources.experts'
        },
        {
          img: '../img/resources/tech/team-1.png',
          name: '快速原型设计',
          leader: '龚倩',
          url: 'explore-resources.experts'
        },
        {
          img: '../img/resources/tech/team-4.png',
          name: '智能硬件设计',
          leader: '任耀洲',
          url: 'explore-resources.experts'
        }
      ],
      RESOURCES: [
        {
          img: '../img/resources/tech/resource-1-thumb.jpg',
          banner: '../img/resources/tech/resource-1.jpg',
          owner: '温岩',
          tags: ['软件资源', '大数据', '营销'],
          name: '大数据营销服务',
          tel: '15910596807',
          introduction: '基于航旅、电商 、支付等海航具备特色的数据池，为开发者提供用户画像、聚类等大数据分析，帮助开发者快速开发精准营销解决方案。'
        },
        {
          img: '../img/resources/tech/resource-2-thumb.jpg',
          banner: '../img/resources/tech/resource-2.jpg',
          owner: '杨仁慧',
          tags: ['软件资源', '测试', '云管理'],
          name: '开发测试云',
          tel: '18701407132',
          introduction: '可跨越私有云、公有云提供开发测试环境，支持DevOps所需的工具和流程，为开发团队提供自动化、虚拟化的基础设施资源，提升开发部署速度和灵活性。'
        },
        {
          img: '../img/resources/tech/resource-3-thumb.jpg',
          banner: '../img/resources/tech/resource-3.jpg',
          owner: '李书博',
          tags: ['软件资源', '微服务', '容器化'],
          name: '容器云',
          tel: '18601177189',
          introduction: '基于最新的Docker技术构建面向应用的容器云技术，为应用开发提供巨大的灵活性和可移植性，快速实现应用架构云化、微服务化。'
        },
        {
          img: '../img/resources/tech/resource-4-thumb.jpg',
          banner: '../img/resources/tech/resource-4.jpg',
          owner: '任耀洲',
          tags: ['软件资源', '物联网'],
          name: '物联网云平台',
          tel: '18601179100',
          introduction: '为各类智能设备提供了数据采集、设备管理、远程操作等能力，并通过开放API和SDK支持跨平台物联网应用及服务的开发和运行，可为车联网、智能楼宇、客流分析、物流跟踪、装备维修等应用领域带来创新动力。'
        },
        {
          img: '../img/resources/tech/resource-5-thumb.jpg',
          banner: '../img/resources/tech/resource-5.jpg',
          owner: '冯廷伟',
          tags: ['软件资源', '通信'],
          name: '融合通信云服务',
          tel: '18629408281',
          introduction: '可为开发者提供即时消息、VoIP电话、视频会议等多种应用服务，帮助开发者便捷地将IP电话、PC终端、智能手机终端融合一体，快速落地企业移动办公通信、电话会议等创意。'
        }
        // {
        //   img: '../img/resources/tech/resource-4.png',
        //   owner: '温岩',
        //   tags: ['硬件资源', '显示屏'],
        //   name: '数据展示大屏'
        // },
        // {
        //   img: '../img/resources/tech/resource-5.png',
        //   owner: '杨叶鹏',
        //   tags: ['硬件资源', '测试'],
        //   name: '移动测试设备'
        // }
      ]
    },
    PROFESSOR: {
      IT: [
        {
          name: '程杨',
          img: '../img/face/1.png',
          description: '产品经理，海航生态科技研究院',
          tel: '18091584470',
          tags: ['看板', 'SCRUM', '代码狂', '开发']
        },
        {
          name: '李剑波',
          img: '../img/face/4.png',
          description: '产品经理，海航生态科技研究院',
          tel: '18601158064',
          tags: ['敏捷', '云计算', '架构', 'Web服务']
        },
        {
          name: '李书博',
          img: '../img/face/3.png',
          description: '产品经理，海航生态科技研究院',
          tel: '18601177189',
          tags: ['容器', 'SCRUM', '公有云', '研发体系']
        },
        {
          name: '刘轩',
          img: '../img/face/4.png',
          description: 'PMO总监，海航生态科技集团',
          tel: '18601158064',
          tags: ['项目管理', '项目交付', 'PMP', '运维']
        }
      ],
      FINANCE: [
        {
          name: '张荣',
          img: '../img/face/1.png',
          description: '共享服务经理，海航生态科技集团',
          tel: '18810728864',
          tags: ['预算', '核算', '资本化']
        },
        {
          name: '牛晓鹏',
          img: '../img/face/3.png',
          description: '税务主管，海航生态科技集团',
          tel: '18907553381',
          tags: ['税务', '核算']
        }
      ],
      MARKET: [
        {
          name: '李麒麟',
          img: '../img/face/1.png',
          description: '公关经理，海航生态科技集团',
          tel: '18600915201',
          tags: ['公关', 'Journalism', 'Press Release']
        },
        {
          name: '黄杨',
          img: '../img/face/3.png',
          description: '公关主管，海航生态科技集团',
          tel: '18601158064',
          tags: ['公关', 'Journalism', 'Press Release', '官网']
        }
      ],
      HR: [
        {
          name: '侯斌(Allen)',
          img: '../img/face/3.png',
          description: '高级培训经理',
          tel: '18611924619',
          tags: ['培训讲师', '课程开发', '人际密码', '向上沟通']
        },
        {
          name: '朱钰(Erin)',
          img: '../img/face/4.png',
          description: '招聘培训主管',
          tel: '18643851727',
          tags: ['人事招聘', '团队协作', '综合协调']
        }
      ],
      LAW: [
        {
          name: '韩明(Maggie)',
          img: '../img/face/3.png',
          description: '法律事务经理',
          tel: '13661399455',
          tags: ['风险控制', '法律事务']
        },
        {
          name: '王伟钊',
          img: '../img/face/4.png',
          description: '法律事务主管',
          tel: '15001185703',
          tags: ['风险控制', '法律事务']
        }
      ]
    },
    TRAIN: {
      CLASSES: [
        {
            title: "社交媒体运营",
            img: "../img/resources/tech/team-2.png",
            speaker: '李睿平',
            city: '上海',
            date: '2016-10-28'
        },
        {
            title: "创业意识培训",
            img: "../img/resources/tech/team-4.png",
            speaker: '张博',
            city: '北京',
            date: '2016-11-02'
        },
        {
            title: "如何创办你的企业",
            img: "../img/resources/tech/team-2.png",
            speaker: '刘宏伟',
            city: '广州',
            date: '2016-11-05'
        },
        {
            title: "创业精神与人生发展",
            img: "../img/resources/tech/team-4.png",
            speaker: '高德阳',
            city: '西安',
            date: '2016-11-14'
        }
      ]
    },
    KNOWLEDGE: {
      ARTICLES: [
        {
            title: "作物病害将通过人工智能得到识别",
            img: "../img/resources/knowledge/new-1.jpg",
            tags: ["科技资讯", "人工智能"],
            likeCount: 14,
            starCount: 4,
            commentCount: 7
        },
        {
            title: "彩虹编程的魅力",
            img: "../img/resources/knowledge/new-2.png",
            tags: ["科技资讯", "编程"],
            likeCount: 32,
            starCount: 14,
            commentCount: 10
        },
        {
            title: "人类手写笔记或能被电脑进行复制",
            img: "../img/resources/knowledge/new-3.jpg",
            tags: ["科技资讯", "机器学习"],
            likeCount: 21,
            starCount: 21,
            commentCount: 4
        },
        {
            title: "直播平台的机遇与挑战",
            img: "../img/resources/knowledge/event-1.png",
            tags: ["行业活动", "直播平台"],
            likeCount: 10,
            starCount: 32,
            commentCount: 10
        },
        {
            title: "对话垂直行业大数据+创业",
            img: "../img/resources/knowledge/event-2.png",
            tags: ["行业活动", "大数据"],
            likeCount: 32,
            starCount: 14,
            commentCount: 14
        },
        {
            title: "投资人导师访谈",
            img: "../img/resources/knowledge/event-3.png",
            tags: ["行业活动", "投资"],
            likeCount: 25,
            starCount: 3,
            commentCount: 10
        }
      ]
    },

    INCUBATION: {
      MENTOR:[
        {
          img: '../img/resources/incubation/mentor/jiangshan.jpg',
          name: '江山',
          title: '国内最大的生鲜电商平台"我厨"首席运营官'
        },
        {
          img: '../img/resources/incubation/mentor/tanbing.jpg',
          name: '覃冰',
          title: '纵横公关北京公司的总经理'
        },
        {
          img: '../img/resources/incubation/mentor/libotao.jpg',
          name: '李博韬',
          title: '锦囊专家合伙人CMO'
        }
      ],
      SERVICES: [
        {
          img: '../img/resources/incubation/innovation-service.jpg',
          tags: ['办公室', '融资服务', '行政服务', '咨询服务', '活动策划', '网站搭建'],
          name: '创业服务'
        },{
          img: '../img/resources/incubation/company-service.jpg',
          tags: ['投资机会对接', '创新活动策划', '创新体系设计'],
          name: '企业服务'
        },{
          img: '../img/resources/incubation/innovation-video.jpg',
          tags: ['创业课堂', '创业TV'],
          name: '创业视频'
        },{
          img: '../img/resources/incubation/training-service.jpg',
          tags: ['企业培训需求分析'],
          name: '培训服务'
        }
      ],
      RESOURCES: [
        {
          banner: '../img/resources/incubation/banner/innovation-service.jpg',
          name: '创业服务',
          introduction: [
            {
              title: '办公室',
              detail: '北京孵化基地位于雍和航星园。中关村雍和航星科技园是中关村管委会与东城区人民政府合作共建的高科技文化创意产业园，是经北京市政府批复的信息服务产业园。园区地处北京市北二环东段，为中心城区，交通便利。可以为创业者提供舒适的办公环境。孵化基地将引入美国Rocket Space管理经验，为创业者提供全方位服务。'
            },{
              title: '海航特色资源',
              detail: '为创业公司提供海航特色资源对接服务，包括海航业务资源、海航应用场景、海航航机媒体资源等。'
            },{
              title: '融资服务',
              detail: '为创业公司提供多渠道融资对接，帮助创业公司与创投机构基金对接，提供多层资本市场对接，帮助创业公司对接新三板，四板，助推企业快速跨入资本市场。'
            },{
              title: '行政服务',
              detail: '为创业公司提供基础行政服务，包括：工商注册服务、人力资源、代理记账、政策申请等服务。'
            },{
              title: '创业咨询服务',
              detail: '包括技术咨询、财务咨询、知识产权咨询、法务咨询、商业模式梳理、战略策划、行业研究等服务。'
            },{
              title: '创新活动策划',
              detail: '为创业公司提供创新培训、会员交流、对接投资人、项目路演、搭建合作关系。'
            },{
              title: '网站搭建',
              detail: '为创业公司提供网站搭建样板，运营咨询服务。'
            }
          ]
        },{
          banner: '../img/resources/incubation/banner/company-service.jpg',
          name: '企业服务',
          introduction: [
            {
              title: '投资机会对接',
              detail: '搭建起大企业与创新企业对接的桥梁。'
            },{
              title: '创新活动策划',
              detail: '为大企业集团策划创新活动、创新沙龙、创新比赛，帮助大企业树立创新品牌和创新形象。'
            },{
              title: '创新体系设计',
              detail: '为大公司创新负责人设计内部创新创投体系，挖掘大集团自身创新潜力，创造业务发展新动力，挖掘创新人才。'
            }
          ]
        },{
          banner: '../img/resources/incubation/banner/innovation-video.jpg',
          name: '创业视频',
          introduction: [
            {
              title: '创业视频',
              detail: '为创业项目提供丰富多样的视频资源。'
            }
          ]
        },{
          banner: '../img/resources/incubation/banner/training-service.jpg',
          name: '创业培训',
          introduction: [
            {
              title: '企业培训需求分析',
              details: '企业战略、财务、市场营销等全方位培训'
            }
          ]
        }
        ]
    },

    POPULAR_RESOURCE : [
      {
        title: "敏捷咨询团队",
        img: '../img/resources/tech/team-3.png',
        url: 'team-detail',
        tags: ["敏捷", "XP"],
        likeCount: 423,
        starCount: 318,
        commentCount: 180
      },
      {
        img: '../img/resources/tech/resource-3-thumb.jpg',
        banner: '../img/resources/tech/resource-3.jpg',
        owner: '李书博',
        url: 'tech-resource-detail({detailId:2})',
        tags: ['软件资源', '微服务', '容器化'],
        title: '容器云',
        company: "海创空间",
        introduction: '基于最新的Docker技术构建面向应用的容器云技术，为应用开发提供巨大的灵活性和可移植性，快速实现应用架构云化、微服务化。',
        likeCount: 289,
        starCount: 183,
        commentCount: 90
      },
      {
        img: '../img/resources/tech/resource-1-thumb.jpg',
        banner: '../img/resources/tech/resource-1.jpg',
        owner: '温岩',
        url: 'tech-resource-detail({detailId:0})',
        tags: ['软件资源', '大数据', '营销'],
        title: '大数据营销服务',
        introduction: '基于航旅、电商 、支付等海航具备特色的数据池，为开发者提供用户画像、聚类等大数据分析，帮助开发者快速开发精准营销解决方案。',
        likeCount: 235,
        starCount: 103,
        commentCount: 90
      },
      {
        img: '../img/resources/tech/resource-2-thumb.jpg',
        banner: '../img/resources/tech/resource-2.jpg',
        owner: '杨仁慧',
        url: 'tech-resource-detail({detailId:1})',
        tags: ['软件资源', '测试', '云管理'],
        title: '开发测试云',
        company: "海创空间",
        introduction: '可跨越私有云、公有云提供开发测试环境，支持DevOps所需的工具和流程，为开发团队提供自动化、虚拟化的基础设施资源，提升开发部署速度和灵活性。',
        likeCount: 223,
        starCount: 99,
        commentCount: 403
      },
      {
        img: '../img/resources/tech/resource-4-thumb.jpg',
        banner: '../img/resources/tech/resource-4.jpg',
        owner: '任耀洲',
        url: 'tech-resource-detail({detailId:3})',
        tags: ['软件资源', '物联网'],
        title: '物联网云平台',
        company: "海创空间",
        introduction: '为各类智能设备提供了数据采集、设备管理、远程操作等能力，并通过开放API和SDK支持跨平台物联网应用及服务的开发和运行，可为车联网、智能楼宇、客流分析、物流跟踪、装备维修等应用领域带来创新动力。',
        likeCount: 173,
        starCount: 80,
        commentCount: 33
      },
      {
        img: '../img/resources/tech/resource-5-thumb.jpg',
        banner: '../img/resources/tech/resource-5.jpg',
        owner: '冯廷伟',
        url: 'tech-resource-detail({detailId:4})',
        tags: ['软件资源', '通信'],
        title: '融合通信云服务',
        company: "海创空间",
        introduction: '可为开发者提供即时消息、VoIP电话、视频会议等多种应用服务，帮助开发者便捷地将IP电话、PC终端、智能手机终端融合一体，快速落地企业移动办公通信、电话会议等创意。',
        likeCount: 172,
        starCount: 76,
        commentCount: 50
      }
    ]
  });
