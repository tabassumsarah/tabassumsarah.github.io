function calculateNextPaymentRate() {

    var lastPaymentDate = new Date(document.getElementById("date").value);

    var numberOfDaysToAdd = 15;
    
    lastPaymentDate.setDate(lastPaymentDate.getDate() + numberOfDaysToAdd);

    var dd = lastPaymentDate.getDate();
    var mm = lastPaymentDate.getMonth() + 1;
    var y = lastPaymentDate.getFullYear();
    var someFormattedDate = dd + '/'+ mm + '/'+ y;
    alert(someFormattedDate);

}

document.getElementById("b1").onclick = calculateNextPaymentRate;
