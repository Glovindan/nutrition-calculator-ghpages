/** Соотношение БЖУ */
const nutRel = {
    /** Белки */
    proteins: 0.3,
    /** Жиры */
    fats: 0.2,
    /** Углеводы */
    carbohydrates: 0.5
};

/** Коэффициенты активности по формуле Миффлина-Сан Жеора */
const activityLevels = {
    /** Минимальная активность */
    minimal: 1.2,
    /** Слабая активность */
    low: 1.375,
    /** Средняя активность */
    medium: 1.55,
    /** Высокая активность */
    high: 1.725,
    /** Экстра активность */
    extra: 1.9
}

// JSDoc
/** Формула Миффлина-Сан Жеора
 * @param weight {number} Вес (кг)
 * @param age {number} Возраст (г)
 * @param growth {number} Рост (см)
 * @param isMale {boolean} Является Мужчиной
 * @param activityLevel {number} Уровень активности 
 * - Минимальная активность: 1,2
 * - Слабая активность: 1,375
 * - Средняя активность: 1,55
 * - Высокая активность: 1,725
 * - Экстра активность: 1,9
 * @returns {number} Норма калорий в день (ккал)
 */
const getDailyCalories = (weight, age, growth, isMale, activityLevel) => {
    return ((10 * weight + 6.25 * growth - 5 * age) + (isMale ? 5 : -161)) * activityLevel;
}

/** Изменение параметров */
const onParamsChange = () => {
    const ageValue = document.getElementById("age").value;
    const weightValue = document.getElementById("weight").value;
    const growthValue = document.getElementById("growth").value;
    const recalcValue = document.getElementById("calories-recalc").value;

    const age = ageValue == "" ? undefined : parseFloat(ageValue);
    const weight = weightValue == "" ? undefined : parseFloat(weightValue);
    const growth = growthValue == "" ? undefined : parseFloat(growthValue);
    const recalc = recalcValue == "" ? 0 : parseFloat(recalcValue);

    const isMale = document.getElementById("sex").value == "male";
    const activityLevel = activityLevels[document.getElementById("level").value];

    console.log(age, weight, growth, isMale, activityLevel);

    if(age === undefined || weight === undefined || growth === undefined || isMale === undefined || activityLevel === undefined) {
        document.getElementById("result-calories").innerText = 0;
        document.getElementById("result-proteins").innerText = 0;
        document.getElementById("result-carbohydrates").innerText = 0;
        document.getElementById("result-fats").innerText = 0;
        return;
    }

    const dailyCalories = getDailyCalories(weight, age, growth, isMale, activityLevel) + recalc;
    const dailyProteins = nutRel.proteins * dailyCalories / 4;
    const dailyCarbohydrates = nutRel.carbohydrates * dailyCalories / 4;
    const dailyFats = nutRel.fats * dailyCalories / 9;

    document.getElementById("result-calories").innerText = Math.ceil(dailyCalories);
    document.getElementById("result-proteins").innerText = Math.ceil(dailyProteins);
    document.getElementById("result-carbohydrates").innerText = Math.ceil(dailyCarbohydrates);
    document.getElementById("result-fats").innerText = Math.ceil(dailyFats);
}
