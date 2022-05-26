
export const subtractDate =(date1)=>{
    const time1 = new Date(date1).getTime()
    const time2 = new Date().getTime()
    let result;
    const difference = Math.abs(time2 - time1)
    if(time1){
        if(difference <= 800){
            result = {messagge: "Time out"}
        }else if(time2 > time1 ){
            result = {messagge: "The selected date cannot be prior to the current date"}
        }else{
            result = format(difference)
        }
    }else{
        result = {messagge: "You must select a date to start"}
    }
    return result
}

function addZero(num){
    if(num<=9){
        return `0${num}`
    }else{
        return num
    }
}

function format(num){
    const baseDias = 1000 * 3600 * 24
    const baseHoras = 1000 * 3600
    const baseMinutos = 1000 * 60
    const days = parseInt(num / baseDias)
    const hours = parseInt((num % baseDias) / baseHoras)
    const minutes = parseInt(((num % baseDias) % baseHoras) / baseMinutos)
    const seconds = parseInt((((num % baseDias) % baseHoras) % baseMinutos) / 1000)
    
    const timer = {
        days: addZero(days),
        hours: addZero(hours),
        minutes: addZero(minutes),
        seconds: addZero(seconds)
    }
    return timer
}