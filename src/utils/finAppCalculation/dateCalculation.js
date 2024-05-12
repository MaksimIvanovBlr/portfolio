


export const dayToSalary = (salaryDay) => {
    const dateNow = new Date()
    const year = dateNow.getFullYear()
    const month = dateNow.getMonth()
    const day = salaryDay


    let fullDate
    if(month === 11){
        fullDate = `${year+1}-${1}-${day}`
    }
    else{
         fullDate = `${year}-${month+2}-${day}`
    }
    const salaryDate = new Date(fullDate)
    const daysToSalary = Math.ceil((salaryDate - dateNow)/ (1000 * 60 * 60 * 24))
return daysToSalary
}
