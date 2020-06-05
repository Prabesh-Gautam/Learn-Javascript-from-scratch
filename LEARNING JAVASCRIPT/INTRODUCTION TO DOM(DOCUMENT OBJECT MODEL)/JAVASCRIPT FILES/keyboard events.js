
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    // for specifying a special key, 13 is for enter. you can check the key value in keycode.info
    if(keyCode=== 13){
        console.log("your " + keyCode + ' key is down')
    }

})

document.body.addEventListener('keyup', function(e){
    var keyCode = e.keyCode;
    // for specifying a special key, 13 is for enter. you can check the key value in keycode.info
    if(keyCode=== 13){
        console.log('your '+keyCode+ ' key is up')
    }

})

document.body.addEventListener('keypress', function(e){
    var keyCode = e.keyCode;
    // for specifying a special key, 13 is for enter. you can check the key value in keycode.info
    if(keyCode=== 13){
        console.log('your '+keyCode+ ' key is pressed')
    }

})