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
          owner: '任耀洲',
          tags: ['硬件资源', '会议管理'],
          name: '会议室管理设备'
        },
        {
          img: '../img/resources/tech/resource-2.png',
          owner: '杨仁慧',
          tags: ['软件资源', '测试'],
          name: '开发测试云资源'
        },
        {
          img: '../img/resources/tech/resource-3.png',
          owner: '冯廷伟',
          tags: ['软件资源', '通信'],
          name: '融合通信软件'
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
