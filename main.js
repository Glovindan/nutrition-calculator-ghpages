const nutRel = {
    proteins: 0.15,
    fats: 0.30,
    carbohydrates: 0.55
};

const myParams = {
    weight: 84,
    age: 22,
    growth: 190,
    isMale: true
}

//Формула Миффлина-Сан Жеора
// weight(кг)
// age(г)
// growth(см)
// activityLevel отвечает за уровень активности:
// Минимальная активность: activityLevel = 1,2.
// Слабая активность: activityLevel = 1,375.
// Средняя активность: activityLevel = 1,55.
// Высокая активность: activityLevel = 1,725.
// Экстра-активность: activityLevel = 1,9

const getDailyCalories = (weight, age, growth, isMale, activityLevel) => {
    return ((10 * weight + 6.25 * growth - 5 * age) + (isMale ? 5 : -161)) * activityLevel;
}

const dailyCalories = getDailyCalories(myParams.weight, myParams.age, myParams.growth, myParams.isMale, 1.375);
console.log(dailyCalories + " kcal daily");

const dailyFats = nutRel.fats * dailyCalories / 9;
const dailyProteins = nutRel.proteins * dailyCalories / 4;
const dailyCarbohydrates = nutRel.carbohydrates * dailyCalories / 4;

console.log(dailyFats + " g of fats daily\n" + dailyProteins + " g of proteins daily\n" + dailyCarbohydrates + " g of carbohydrates daily\n")

