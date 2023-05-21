
//step-1 :add evemt listener to the deposit button


document.getElementById('btn-deposit').addEventListener('click', function () {
    //get the deposit amount from the deposit input field 
    //for input field use .value to the value inside the  input field 
    
   const depositField= document.getElementById('your-deposit');

    const newDepositAmountString = depositField.value;   //use .value when you use input field

    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3 get the current diposit total
    //for non-input(element other than input ,textarea) use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;  //use innertext when you dont use input field

    const previousDepositTotal=parseFloat(previousDepositTotalString);

    const currentDepositTotal=previousDepositTotal+newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

/// STEP 5 :GET BALANCE CURRENT TOTAL
    
    const balanceTotalElemenet = document.getElementById('balance-total');
    
    const previousBalanceTotalString = balanceTotalElemenet.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6: calculate current total balance

    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    
    //set the balance total

    balanceTotalElemenet.innerText = currentTotalBalance;


    //7 clear the deposit field

    depositField.value = '';


})