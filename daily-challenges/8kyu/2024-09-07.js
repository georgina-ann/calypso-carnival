//calculate BMI

function bmi(weight, height) {
    let bmi = (weight / (height ** 2))
    
    return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : 'Obese'
  }