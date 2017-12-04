var app = angular.module('BlogApp', []);


app.controller('blogCtrl', [
	'$scope',
	'$http',

	function($scope, $http ) {

		$scope.title = 'My blog Page';
        $scope.blog = null ;
        $scope.blogger = 11111
        $scope.info = ""
        $scope.error = ""

	

		
		
	$scope.getBlog = function(blogger) {
        if(bloggerVerification(blogger))
        {
            $http.get('https://clubfreetst.herokuapp.com/blogs/'+blogger).then(function(response) {

			if (response.data) {
                $scope.blog =  response.data;
			}else
                $scope.blog = null ;
		      })
	   }else
                $scope.blog = null ;
		      
        
    }
    
	$scope.deleteNote = function(note_id) {

	$scope.info=$http.delete('https://clubfreetst.herokuapp.com/notes/'+note_id).$$state
            
	}

    	bloggerVerification = function(blogger) {
            
            if(!angular.isNumber(blogger))
                {
                    $scope.error = "enter a Digit"
                    return false
                }
            else if(blogger<9999 || blogger>9999999)
                {
                    $scope.error = "5-7 digit"
                    return false
                }                
                return true;
        }
	}
])