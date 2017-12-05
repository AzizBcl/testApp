var app = angular.module('BlogApp', []);

app.controller('blogCtrl', [
	'$scope',
	'$http',
	function($scope, $http ) {

	$scope.getBlog = function(blogger) {
        if(bloggerVerification(blogger))
        {
            $http.get('https://clubfreetst.herokuapp.com/blogs/'+blogger).then(function(response) {

			if (response.data) 
                $scope.blog =  response.data;
			else
                $scope.blog = null ;
		      })
	   }else
                $scope.blog = null ;
        
    }
    
	$scope.deleteNote = function(note) {           $http.delete('https://clubfreetst.herokuapp.com/notes/'+note.id).then(function(response) {
        if(response.statusText && response.statusText=="ok")
            var index = $scope.blog.notes.indexOf(item);
            $scope.blog.notes.splice(index, 1);             
        })

	}

    	bloggerVerification = function(blogger) {
            
               if(blogger<9999 || blogger>9999999)
                {
                    $scope.error = " enter 5-7 digit"
                    return false
                }   
                $scope.error=null;
                return true;
        }
	}
])