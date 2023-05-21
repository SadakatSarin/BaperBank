/*


1.add eventhandler with withdraw buttton
    
2.get the withdraw amount  from the  withdraw input field also make sure to make input fields value into number using parseFloat

3.get previous withdraw total

4.calculate total withdraw amount and set total withdraw amount

5.get previous balance total




*/





//step:1

document.getElementById('btn-withdraw').addEventListener('click', function () {
    
   // step: 2
    
    const withdrawfield = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawfield.value;
    
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


//step 3
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step 4

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step 5

    const balanceTotalElemenet = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalElemenet.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6

    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;

    balanceTotalElemenet.innerText = newBalanceTotal;

    //step 7

    withdrawfield.value = '';



})