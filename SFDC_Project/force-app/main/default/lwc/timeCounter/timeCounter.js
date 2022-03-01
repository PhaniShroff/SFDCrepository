import { LightningElement } from 'lwc';

export default class TimeCounter extends LightningElement {
    showStartBtn = true;

    // responsible to show the output
    timeVal = '0 : 0 : 0 : 0';

    //this property holds the ID which we will get as return from function setInterval
    timeIntervalInstance;
    totalMilliseconds = 0;

    startHandler(event){
        this.showStartBtn = false;
        var parentThis = this;

        //below code runs in every 100 milliseconds 
        this.timeIntervalInstance = setInterval(function(){

            var hours = Math.floor((parentThis.totalMilliseconds % (1000*60*60*24)) / (1000*60*60));
            var minutes = Math.floor((parentThis.totalMilliseconds % (1000*60*60*24)) / (1000*60));
            var seconds = Math.floor(parentThis.totalMilliseconds % (1000*60)) / (1000);
            var milliseconds = Math.floor((parentThis.totalMilliseconds % (1000)));

            parentThis.timeVal = hours + " : " + minutes + " : " + seconds + " : " +milliseconds;

            parentThis.totalMilliseconds += 100;
        }
        ,
        100);
    }

    stopHandler(event){
        this.showStartBtn = true;
        clearInterval(this.timeIntervalInstance);
    }

    resetHandler(event){
        this.showStartBtn = true;
        this.timeVal = '0 : 0 : 0 : 0';
        this.totalMilliseconds = 0;
        clearInterval(this.timeIntervalInstance);
 
    }
}