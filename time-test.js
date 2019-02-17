var time = 84.57

function format_as_time(t){

    var minutes = Math.floor(t/60)
    var seconds = t - minutes * 60
    if(seconds < 10) {
        return minutes + ":0" + seconds.toFixed(2)
    } else {
        return minutes + ":" + seconds.toFixed(2)
    } 


    // console.log(t / 60)
    // console.log(t % 60)
    // console.log(Math.floor(t/60))
    // console.log(Math.ceil(t/60))
}

console.log(format_as_time(241.57))