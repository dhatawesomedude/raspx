/**
 * Created by Orlando on 17/7/2014.
 */
var Q = require('q');
var childProcess = exports.childProcess = function(cmd, args, obj, cb){
    //var d = Q.defer();
    var spawn = require('child_process').spawn;
    var  childSpawn = spawn('/usr/bin/omxplayer', ['home/pi/majorcrime.mp4'], function(){console.log('end');});
    var li = this;
   // childSpawn.stdout.on('data', function(buffer){
    //    cb(li, buffer)
   // });
    childSpawn.stdout.on('end', end);

};

