const foods = [
    {no: 1,name: 'Bread', quantity:'10'},
    {no: 2,name: 'Egg', quantity:'50'},
    {no: 3,name: 'Milk', quantity:'5'}
]

const result = foods.filter(function(food){
return food.quantity < 20
})

console.log(result);

