document.getElementById('calculate-btn').addEventListener('click', function(){

    var foodInput = document.getElementById('food');
    var foodInputString = foodInput.value;
    var food = parseFloat(foodInputString);

    foodInput.value = food;


    var rentInput = document.getElementById('rent');
    var rentInputString = rentInput.value;
    var rent = parseFloat(rentInputString);

    
    var clothesInput = document.getElementById('clothes');
    var clothesInputString = clothesInput.value;
    var clothes = parseFloat(clothesInputString);

    
   
var totalExpenseField = document.getElementById('total-expense');
     var totalExpenseFieldString = totalExpenseField.innerText;
     var totalExpense = parseFloat(totalExpenseFieldString);
     
     var totalNumberOfExpense = food + rent + clothes;
     
     totalExpenseField.innerText= totalExpense;
      
     totalExpenseField.innerText = totalNumberOfExpense

     
     var incomeInput = document.getElementById('income');
     var incomeInputString = incomeInput.value;
     var income = parseFloat(incomeInputString);
    
     var balanceInput = document.getElementById('balance');
     var balanceInputString = balanceInput.innerText;
     var balance = parseFloat(balanceInputString);
     
     var totalBalance = income - totalNumberOfExpense;

      incomeInput.innerText = balance;
      
      balanceInput.innerText= totalBalance;








    
})