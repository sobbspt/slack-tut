/**
 * Created by wanichnun on 4/22/16.
 */

angular.module('angularfireSlackApp')
    .controller('AuthCtrl', function(Auth, $state){
        var authCtrl = this;

        authCtrl.user = {
            email: '',
            password: ''
        };

        authCtrl.login = function (){
            Auth.$authWithPassword(authCtrl.user).then(function (auth){
                $state.go('home');
            }, function (error){
                authCtrl.error = error;
                console.log('error');
            });
        };

        authCtrl.register = function (){
            Auth.$createUser(authCtrl.user).then(function (user){
                authCtrl.login();
            }, function (error){
                authCtrl.error = error;
            });
        };
    });