
var username = document.getElementById('username')
var password = document.getElementById('password')
var username_error = document.getElementById("username_error")

username.addEventListener('input', function(ev){
    var data  = ev.target.value
    var len = data.length
    var patternPw = /^[\w]{6,8}$/ 
    if(patternPw.test(data)){
    username_error.style.display = "none"
    }
    else{
        username_error.style.display = 'block'
    }

}
 
)
