angular.module('configuration')
  .constant('RESOURCE', {
    TECH: {
      TEAMS:[
        {
          img: '../img/resources/tech/team-1.png',
          name: '原型制作团队',
          leader: '龚倩'
        },
        {
          img: '../img/resources/tech/team-2.png',
          name: 'MVP开发团队',
          leader: 'Jerry'
        },
        {
          img: '../img/resources/tech/team-3.png',
          name: 'Scrum咨询团队',
          leader: '程杨'
        },
        {
          img: '../img/resources/tech/team-4.png',
          name: '创意包装团队',
          leader: '车博琳'
        }
      ],
      RESOURCES: [
        {
          img: '../img/resources/tech/resource-1.png',
          owner: '任耀洲',
          name: '会议室管理设备'
        },
        {
          img: '../img/resources/tech/resource-2.png',
          owner: '杨仁慧',
          name: '开发测试云资源'
        },
        {
          img: '../img/resources/tech/resource-3.png',
          owner: '冯廷伟',
          name: '融合通信软件'
        },
        {
          img: '../img/resources/tech/resource-4.png',
          owner: '温岩',
          name: '数据展示大屏'
        },
        {
          img: '../img/resources/tech/resource-5.png',
          owner: '杨叶鹏',
          name: '移动测试设备'
        }
      ]
    },
    EXPERT: {

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
