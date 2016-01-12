/*
Simple Bookmark app.
*/
(function(){  
  "use strict";
   var app = angular.module('BookmarkApp', []);
   
   app.controller('appCtrl',function($scope) {
   //bookmark json data
   $scope.bookmarks = [
    {
      title: 'Google Design',
      url: 'https://www.google.com/design/spec/style/color.html#color-color-palette',
      category: 'Web Design'
    },
  ];
  //add bookmark function
  $scope.addBookmark = function () {
    $scope.bookmarks.push({
      title: $scope.site_name,
      url: $scope.site_url,
      category: $scope.site_category,
    });
    $scope.site_name = '';
    $scope.site_url = '';
    $scope.site_category = '';
  },
  //delete bookmark function    
  $scope.deleteBookmark = function (id) {
        var bookmark = $scope.bookmarks[id];
        $scope.bookmarks.splice(id, 1);
    }
  });

})();