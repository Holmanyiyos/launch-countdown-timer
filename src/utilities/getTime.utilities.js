
export const subtractDate =(date1 = "31/12/2022")=>{
    const time1 = new Date(date1).getTime()
    const time2 = new Date().getTime()

    const difference = Math.abs(time2 - time1)
    const result = format(difference)
    return result
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
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
    return timer
}