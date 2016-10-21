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
          img: '../img/resources/tech/resource-1.png',
          banner: '../img/resources/tech/resource-1.png',
          owner: '任耀洲',
          tags: ['软件资源', '大数据', '营销'],
          name: '大数据营销服务',
          introduction: '基于航旅、电商 、支付等海航具备特色的数据池，为开发者提供用户画像、聚类等大数据分析，帮助开发者快速开发精准营销解决方案。'
        },
        {
          img: '../img/resources/tech/resource-2.png',
          banner: '../img/resources/tech/resource-1.png',
          owner: '杨仁慧',
          tags: ['软件资源', '测试', '云管理'],
          name: '开发测试云',
          introduction: '可跨越私有云、公有云提供开发测试环境，支持DevOps所需的工具和流程，为开发团队提供自动化、虚拟化的基础设施资源，提升开发部署速度和灵活性。'
        },
        // {
        //   img: '../img/resources/tech/resource-2.png',
        //   banner: '../img/resources/tech/resource-1.png',
        //   owner: '杨仁慧',
        //   tags: ['软件资源', '微服务', '容器化'],
        //   name: '容器云',
        //   introduction: '基于最新的Docker技术构建面向应用的容器云技术，为应用开发提供巨大的灵活性和可移植性，快速实现应用架构云化、微服务化。'
        // },
        // {
        //   img: '../img/resources/tech/resource-2.png',
        //   banner: '../img/resources/tech/resource-1.png',
        //   owner: '杨仁慧',
        //   tags: ['软件资源', '物联网'],
        //   name: '物联网云平台',
        //   introduction: '为各类智能设备提供了数据采集、设备管理、远程操作等能力，并通过开放API和SDK支持跨平台物联网应用及服务的开发和运行，可为车联网、智能楼宇、客流分析、物流跟踪、装备维修等应用领域带来创新动力。'
        // },
        {
          img: '../img/resources/tech/resource-3.png',
          banner: '../img/resources/tech/resource-1.png',
          owner: '冯廷伟',
          tags: ['软件资源', '通信'],
          name: '融合通信云服务',
          introduction: '可为开发者提供即时消息、VoIP电话、视频会议等多种应用服务，帮助开发者便捷地将IP电话、PC终端、智能手机终端融合一体，快速落地企业移动办公通信、电话会议等创意。'
        },
        {
          img: '../img/resources/tech/resource-4.png',
          owner: '温岩',
          tags: ['硬件资源', '显示屏'],
          name: '数据展示大屏'
        },
        {
          img: '../img/resources/tech/resource-5.png',
          owner: '杨叶鹏',
          tags: ['硬件资源', '测试'],
          name: '移动测试设备'
        }
      ]
    },
    PROFESSOR: {
      IT: [
        {
          name: '龙旭东',
          img: '../img/face/1.png',
          description: 'CTO, 海航生态科技集团',
          tel: '13902210042',
          tags: ['IDC', '售前', 'IT战略', 'IT解决方案']
        },
        {
          name: '易梅',
          img: '../img/face/4.png',
          description: '院长，海航生态科技研究院',
          tel: '13701103510',
          tags: ['展示中心', '售前', '解决方案架构', 'IT战略']
        },
        {
          name: '李书博',
          img: '../img/face/3.png',
          description: '产品经理，海航生态科技研究院',
          tel: '18601177189',
          tags: ['容器', 'Scrum', '公有云', 'IT战略']
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
      HR: [
        {
          name: '宋光宇(Ted)',
          img: '../img/face/1.png',
          description: '人力资源总监',
          tel: '18976889537',
          tags: ['行政办公', '人事管理', '领导力', '沟通力']
        },
        {
          name: '侯斌(Allen)',
          img: '../img/face/3.png',
          description: '招聘培训经理',
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
          tags: ['行政办公', '人事管理', '领导力', '沟通力']
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
    INCUBATION: {

    },
    TRAIN: {
      CLASSES: [
        {
            title: "社交媒体运营创业社交媒体运营创业社交媒体运营创业",
            img: "../img/resources/tech/team-2.png",
            speaker: '李睿平',
            city: '上海',
            date: '2016-10-28'
        },
        {
            title: "创业意识培训",
            img: "../img/resources/tech/team-4.png",
            speaker: '张博',
            city: '背景',
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
            title: "创业，创业精神与人生发展",
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
            title: "人类手写笔记获能被电脑进行复制",
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
    }
  });
