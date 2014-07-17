/**
 * Created by Orlando on 16/7/2014.
 */
var childProcess = require('./childprocess.js')
module.exports = function(io){
    'use strict';
    var socks;
    io.on('connection', function(socket){
        socket.on('message', function(from, msg){
            console.log('received msg from from', from, 'msg', JSON.stringify(msg));
            console.log('broadcasting');
            io.sockets.emit('broadcast', {
                payload: msg,
                source : from
            });
            console.log('broadcast complete');
        });
        socket.on("remote", function(data){
            socket.type = "remote";
            console.log("Remote Ready... ");
            socks = socket;
            if (socks != undefined){
                console.log('Synced');
            }

        });
        socket.on("video", function(data){
            if (data.action === "play"){
                var id = data.videoID;
                var runProcess = new childProcess('omxplayer', ['/home/pi/Major.Crimes.S03E06.HDTV.x264-LOL.mp4'],
                function(li, buffer){
                    li.stdout += buffer.toString();
                    socket.emit("loading", {output: li.stdout});
                    console.log(li.stdout);
                });
            }
        });
    });
};