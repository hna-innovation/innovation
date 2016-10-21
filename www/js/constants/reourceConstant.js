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
    PROFESSOR: [
        {
          name: '任耀洲',
          img: '../img/face/1.png',
          description: '会议室管理设备',
          tel: '13891281123',
          tags: ['会议管理']
        },
        {
          name: '杨仁慧',
          img: '../img/face/2.png',
          description: '开发测试云资源',
          tel: '13812731823',
          tags: ['自动化测试']
        },
        {
          name: '冯廷伟',
          img: '../img/face/3.png',
          description: '融合通信软件',
          tel: '15782381329',
          tags: ['通信']
        }
    ],
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
