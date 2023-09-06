document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('user-amount');
    const newAmountString = depositField.value;
    const newAmount = parseFloat(newAmountString);

    depositField.value = '';

    if(isNaN(newAmount)){
        alert('please type a number');
        return;
    }

   
     const depositTotalElement = document.getElementById("deposit-total");
     const oldDepositTotalString = depositTotalElement.innerText;
     const oldDepositTotal = parseFloat(oldDepositTotalString);
     
     const currentDepositTotal = newAmount + oldDepositTotal;
     depositTotalElement.innerText = currentDepositTotal;
     
     
     
     
     const balanceTotalElement = document.getElementById('balance-total');
     const oldBalanceTotalString = balanceTotalElement.innerText;
     const oldBalanceTotal = parseFloat(oldBalanceTotalString);
     
     const currentBalanceTotal = newAmount + oldBalanceTotal;
     balanceTotalElement.innerText = currentBalanceTotal;
     
     
     



})

document.getElementById('btn-withdraw').addEventListener("click",function(){
  const withdrawField = document.getElementById('user-withdraw');
  const newWithdrawAmountString = withdrawField.value;
  const  newWithdrawAmount = parseFloat(newWithdrawAmountString);
  
  
  withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('please type a number');
    return;
}


const withdrawTotalElement = document.getElementById('withdraw-total');
const withdrawTotalString = withdrawTotalElement.innerText;
const withdrawTotal = parseFloat(withdrawTotalString);




const newBalanceTotalElement = document.getElementById('balance-total');
const newBalanceTotalString = newBalanceTotalElement.innerText;
const newBalanceTotal = parseFloat(newBalanceTotalString);


if(newBalanceTotal< newWithdrawAmount){
    alert('sorry you have no balance');
    return;
}

const currentWithdraw = newWithdrawAmount + withdrawTotal;
withdrawTotalElement.innerText = currentWithdraw;

const newCurrentBalance = newBalanceTotal - newWithdrawAmount;
newBalanceTotalElement.innerText = newCurrentBalance;



})