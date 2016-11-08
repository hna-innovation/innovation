angular.module('configuration')
    .constant('Api', {
        'PROJECTS_API': '/api/projects',
        'PROJECT_BP_PDF_API': '/api/projects',
        'USER_INNOVATION_STARS_API': '/api/user/stars',
        'USER_INFO_API': '/api/user/profile',
        'USER_EXTENSION_INFO': '/api/user/profile/extensionInfo',
        'USER_COMMENTS_API': '/api/user/comments',
        "USER_RECEIVED_COMMENTS_API": '/api/user/comments/received',
        "USER_MESSAGES_API": '/api/user/messages',
        "PROJECT_COMMENT_API": '/api/projects',
        'USER_PROJECTS_API': '/api/user/projects',
        'USER_DRAFTS_API': '/api/user/drafts',
        'USER_LIKED_PROJECTS_API': '/api/user/userLikedProjects',
        'USER_FAVORITE_PROJECTS_API': '/api/user/favoriteProjects',
        'USER_LIKED_STATUS_READ': '/api/user/likeStatus',
        'USER_JOIN_PROJECT': '/api/user/joinedProjects',
        'USER_TAGS': '/api/user/tags',
        'USER_AVATOR_API': '/api/user/avatar',
        'IMAGE_UPLOAD_API': '/api/media/image'
    });
