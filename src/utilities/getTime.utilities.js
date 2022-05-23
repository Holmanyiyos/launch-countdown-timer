
export const subtractDate =(date1)=>{
    const time1 = new Date(date1).getTime()
    const time2 = new Date().getTime()

    const difference = Math.abs(time2 - time1)
    if(time2 >= time1 ){
        const result = null
        return result
    }else{
        const result = format(difference)
        return result
    }
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