function BMIValue(weight,height){
    return (weight/(Math.pow(height,2)));
}

var bmi=Math.round(BMIValue(65,1.8))
console.log("Your BMI value is : "+bmi);