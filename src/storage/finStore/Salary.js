import {makeAutoObservable} from "mobx";

export default  class Salary {
    constructor() {
        this._userID = '1'
        this._salary = [
            {name:'firstSalary', value:100,status: false, date:'10.01.2024'},
            {name:'secondSalary', value:200,status: false, date:'10.02.2024'},
            {name:'thirdSalary', value:300,status: false, date:'10.03.2024'},
            {name:'fourthSalary', value:400,status: true, date:'25.04.2024'},
            {name:'fifthSalary', value:500,status: true, date:'10.05.2024'},
        ]
        makeAutoObservable(this)
    }

    get userID(){
        return this._userID
    }

    setSalary(salary){
        this._salary = salary
    }

    get salary(){
        return this._salary
    }
}