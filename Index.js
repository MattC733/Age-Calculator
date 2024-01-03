const date = new Date();
var yearBorn
var monthBorn
var dayBorn
var todaysyear = date.getFullYear()
var todaysmonth = (date.getMonth() + 1)
var todaysday = date.getDate()
var monthNumber
var currentMonthNum = todaysmonth
var yearAge
var monthAge
var dayAge

window.onclick = e => {
    console.log(e.target.innerText)
    console.log(e.target.className)

    if (e.target.className == 'year') {
        document.getElementById('yearButton').innerHTML = e.target.innerText
        yearBorn = e.target.innerText

        document.getElementById('yearContent').display = "none"
    }
    else if (e.target.className == 'month') {
        document.getElementById('monthButton').innerHTML = e.target.innerText
        monthBorn = e.target.innerText
    }
    else if (e.target.className == 'day') {
        document.getElementById('dayButton').innerHTML = e.target.innerText
        dayBorn = e.target.innerText
    }
}

document.getElementById("submitBtn").onclick = function () {

    if (monthBorn == "January") {
        monthNumber = 1
        console.log(monthNumber)
    }
    else if (monthBorn == "Febuary") {
        monthNumber = 2
        console.log(monthNumber)
    }
    else if (monthBorn == "March") {
        monthNumber = 3
        console.log(monthNumber)
    }
    else if (monthBorn == "April") {
        monthNumber = 4
        console.log(monthNumber)
    }
    else if (monthBorn == "May") {
        monthNumber = 5
        console.log(monthNumber)
    }
    else if (monthBorn == "June") {
        monthNumber = 6
        console.log(monthNumber)
    }
    else if (monthBorn == "July") {
        monthNumber = 7
        console.log(monthNumber)
    }
    else if (monthBorn == "August") {
        monthNumber = 8
        console.log(monthNumber)
    }
    else if (monthBorn == "September") {
        monthNumber = 9
        console.log(monthNumber)
    }
    else if (monthBorn == "October") {
        monthNumber = 10
        console.log(monthNumber)
    }
    else if (monthBorn == "November") {
        monthNumber = 11
        console.log(monthNumber)
    }
    else if (monthBorn == "December") {
        monthNumber = 12
        console.log(monthNumber)
    }

    if (currentMonthNum > monthNumber) {
        yearAge = todaysyear - yearBorn
        monthAge = (currentMonthNum - monthNumber)
        dayAge = (todaysday - dayBorn)

        document.getElementById("totalResults").innerHTML = "You are " + yearAge + " Years " + monthAge + " Months and " + dayAge + " Days old"

        monthAge = monthAge + (yearAge * 12)
        dayAge = dayAge + (yearAge * 365) + (monthAge * 30)

        document.getElementById("yearLabel").innerHTML = "You are " + yearAge + " years old"
        document.getElementById("monthLabel").innerHTML = "You are " + monthAge + " months old"
        document.getElementById("dayLabel").innerHTML = "You are " + dayAge + " days old"
    }
    else if (currentMonthNum < monthNumber) {
        yearAge = todaysyear - yearBorn - 1
        monthAge = (12 - monthNumber) + currentMonthNum
        dayAge = 30 + (todaysday - dayBorn)

        document.getElementById("totalResults").innerHTML = "You are " + yearAge + " Years " + monthAge + " Months and " + dayAge + " Days old"

        monthAge = monthAge + (yearAge * 12)
        dayAge = dayAge + (yearAge * 365) + (monthAge * 30)

        document.getElementById("yearLabel").innerHTML = "You are " + yearAge + " years old"
        document.getElementById("monthLabel").innerHTML = "You are " + monthAge + " months old"
        document.getElementById("dayLabel").innerHTML = "You are " + dayAge + " days old"
    }
    else if (currentMonthNum == monthNumber) {
        if (todaysday >= dayBorn) {
            yearAge = todaysyear - yearBorn
            monthAge = (currentMonthNum - monthNumber)
            dayAge = (todaysday - dayBorn)

            document.getElementById("totalResults").innerHTML = "You are " + yearAge + " Years " + monthAge + " Months and " + dayAge + " Days old"

            monthAge = monthAge + (yearAge * 12)
            dayAge = dayAge + (yearAge * 365) + (monthAge * 30)

            document.getElementById("yearLabel").innerHTML = "You are " + yearAge + " years old"
            document.getElementById("monthLabel").innerHTML = "You are " + monthAge + " months old"
            document.getElementById("dayLabel").innerHTML = "You are " + dayAge + " days old"
        }
        else if (todaysday < dayBorn) {
            yearAge = todaysyear - yearBorn - 1
            monthAge = 11 + (currentMonthNum - monthNumber)
            dayAge = 30 + (todaysday - dayBorn)

            document.getElementById("totalResults").innerHTML = "You are " + yearAge + " Years " + monthAge + " Months and " + dayAge + " Days old"

            monthAge = monthAge + (yearAge * 12)
            dayAge = dayAge + (yearAge * 365) + (monthAge * 30)

            document.getElementById("yearLabel").innerHTML = "You are " + yearAge + " years old"
            document.getElementById("monthLabel").innerHTML = "You are " + monthAge + " months old"
            document.getElementById("dayLabel").innerHTML = "You are " + dayAge + " days old"
        }
    }

}