angular.module('configuration')
  .constant('Content', {
    'NO_SEARCH_RESULT': '抱歉，没有找到您想要查找的结果。',
    'TIME_JUST_NOW': '刚刚',
    'TIME_OUT': '网页不给力，请下拉重新刷新',
    'EMPTY_CONTENT': '暂无数据',

    user: {
      'NO_FAVORITE': '暂无收藏的创意',
      'NO_LIKED': '还未收到点赞',
      'LOAD_DATA_ERROR': '获取用户信息出错！',
      'NO_EMPTY': '不能为空！',
      'LOAD_DATA_SUCCESS': '用户信息更新成功！',
      'UPDATE_ERROR': '用户信息更新失败！',
      'UPDATE_AVATOR_ERROR': '头像更新失败！'
    },

    comment: {
      'ERROR_MESSAGE_EMPTY': '您的评论内容不能为空。',
      'SUCCESS_MESSAGE_ADDED_COMMENT': '评论成功。',
      'NO_COMMENTS': '暂无评论信息。',
      'UPDATE_ERROR': '未能成功发表评论！'
    },

    message: {
      'ERROR_MESSAGE_EMPTY': '您的私信内容不能为空。',
      'SUCCESS_MESSAGE_ADDED_COMMENT': '发送成功。',
      'NO_MESSAGES': '暂无私信信息。',
      'UPDATE_ERROR': '未能成功发送私信！'
    },

    draft: {
      'NO_DRAFTS': '你的草稿箱为空。'
    },

    image: {
      'DEFAULT_HEADER': '../img/face/4.png',
      'ERROR_MESSAGE_MAXSIZE': '图片大小不能超过3M，请重新上传！',
      'ERROR_MESSAGE_TYPE': '请选择正确的图片类型！'
    },

    project: {
      'ERROR_MESSAGE_PDF': '生成PDF计划书失败。'
    }
  });
