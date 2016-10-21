angular.module('starter.controllers')
  .controller('SuccessCaseCtrl', SuccessCaseCtrl);

function SuccessCaseCtrl($scope) {
  'use strict';

  $scope.successCases = [
    {
      title: '小二租车成为覆盖七大旅游城市, 投放15000辆可租赁的行业知名公司',
      owner: '刘日月',
      location: '上海',
      date: '2016/10/19',
      image: '../img/successCase/1.jpg'
    },{
      title: '航材供应链金融项目已为15家航材供应商提供金融服务',
      owner: '张节承',
      location: '北京',
      date: '2016/10/19',
      image: '../img/successCase/2.jpg'
    },{
      title: '智能酒店项目已在集团23家酒店实施',
      owner: '胡东娜',
      location: '海口',
      date: '2016/10/17',
      image: '../img/successCase/3.jpg'
    },{
      title: '智能冷链项目与电商业务结合已在全国30+城市开展生鲜电商业务',
      owner: '陈凯',
      location: '西安',
      date: '2016/10/12',
      image: '../img/successCase/4.jpg'
    },{
      title: 'iBeacon精准营销项目已在集团18个机场航站楼落地',
      owner: '邵民',
      location: '北京',
      date: '2016/9/9',
      image: '../img/successCase/5.jpg'
    },{
      title: '班车APP项目已在海口、西安落地,得到员工广泛好评',
      owner: '周颖',
      location: '北京',
      date: '2016/9/9',
      image: '../img/successCase/6.jpg'
    }
  ];

}
