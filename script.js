const form = document.querySelector('form')

form.addEventListener("submit", function(e){
    e.preventDefault();


const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
const bmi = (weight/((height*height)/10000)).toFixed(2)


if(height === " " || height <= 0 || isNaN(height)){
    results.innerHTML = `Invalid Input ${height}`;
}else if(weight === " " || weight <= 0 || height == NaN){
    results.innerHTML =  `Invalid Weight ${weight}`
}
else{
    results.innerHTML = (`BMI is: ${bmi}`)
}

const mssg = document.querySelector('#mssg');
const message = results.innerHTML

if(bmi < 18.6){
  mssg.innerHTML = `UnderWeight`
}else if(bmi > 18.6 && bmi < 24.9){
  mssg.innerHTML = `Your BMI, ${bmi} is Normal`
}else if(bmi > 24.9){
  mssg.innerHTML = `You are overweight`
}
});