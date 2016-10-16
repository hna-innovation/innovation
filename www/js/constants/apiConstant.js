angular.module('configuration')
    .constant('Api', {
        'SEARCH_API': '/api/show/search',
        'PROJECTS_API': '/api/projects',
        'USER_INNOVATION_STARS_API': '/api/user/stars',
        'USER_INFO_API': '/api/user/profile',
        'USER_EXTENSION_INFO': '/api/user/profile/extensionInfo',
        'USER_COMMENTS_API': '/api/user/comments',
        'USER_PROJECTS_API': '/api/user/projects',
        'USER_DRAFTS_API': '/api/user/drafts',
        'USER_LIKED_PROJECTS_API': '/api/user/userLikedProjects',
        'USER_FAVORITE__PROJECTS_API': '/api/user/favoriteProjects',
        'USER_LIKED_STATUS_READ': '/api/user/likeStatus',
    });
