app_key="78bef5ee6754e158e1dd96dc0118c67c"
app_id="b0ad74e6"

function APIcall(food){
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=cooking&ingr=${food}`)
    .then(data => data.json())
    .then(foodData=> foodData)    
}