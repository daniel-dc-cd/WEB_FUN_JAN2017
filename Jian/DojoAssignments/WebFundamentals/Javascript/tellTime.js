function tellTime(hour, minute, period){
    var min = 'just after';
    var prd = 'in the morning';

    if (period == 'AM'){
        if (minute > 30){
            min = 'almost';
            hour++;
        }
    }
    if (period == 'PM'){
        prd = 'in the evening';
        if (minute > 30){
            min = 'almost';
            hour++;
        }
    }
    console.log("It's " + min + " " + hour + " " + prd + ".");
}
console.log(tellTime(8,50,'AM'));
