/**
 * Created by wanichnun on 4/22/16.
 */

angular.module('angularfireSlackApp')
    .factory('Auth', function($firebaseAuth, FirebaseUrl){
        var ref = new Firebase(FirebaseUrl);
        var auth = $firebaseAuth(ref);

        return auth;
    });