/**
 * Created by wanichnun on 4/22/16.
 */
angular.module('angularfireSlackApp')
    .factory('Channels', function($firebaseArray, FirebaseUrl){
        var ref = new Firebase(FirebaseUrl+'channels');
        var channels = $firebaseArray(ref);

        return channels;
    });