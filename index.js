// Your Code Here

let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let strAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numAnswer = parseFloat(strAnswer)
    console.log(numAnswer)
    weeklyExpenses = weeklyExpenses + numAnswer
}
for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let strAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numAnswer = parseFloat(strAnswer)
    console.log(numAnswer)
    monthlyExpenses = monthlyExpenses + numAnswer
}
for(let i = 0; i < annualExpenseQuestions.length; i++){
    let strAnswer = window.prompt(annualExpenseQuestions[i])
    let numAnswer = parseFloat(strAnswer)
    console.log(numAnswer)
    annualExpenses = annualExpenses + numAnswer
}
