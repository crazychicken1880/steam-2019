function time_to_seconds(time){
    parts = time.split(":")
    if(parts.length === 1){
        minutes = 0
        seconds = Number.parseFloat(parts[0])
    } else {
        minutes = Number.parseInt(parts[0])
        seconds = Number.parseFloat(parts[1])
    }
    return 60 * minutes + seconds
}

function format_as_time(t){

    var minutes = Math.floor(t/60)
    var seconds = t - minutes * 60
    if(seconds < 10) {
        return minutes + ":0" + seconds.toFixed(2)
    } else {
        return minutes + ":" + seconds.toFixed(2)
    } 

}

module.exports = {
    time_to_seconds:time_to_seconds,
    seconds_to_time: format_as_time
}