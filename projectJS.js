function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    var meals = {
        mondayBreakfast: document.getElementById("mondayBreakfast").value,
        mondaySnack: document.getElementById("mondaySnack").value,
        mondayLunch: document.getElementById("mondayLunch").value,
        mondaySnack2: document.getElementById("mondaySnack2").value,
        mondayDinner: document.getElementById("mondayDinner").value,

        tuesdayBreakfast: document.getElementById("tuesdayBreakfast").value,
        tuesdaySnack: document.getElementById("tuesdaySnack").value,
        tuesdayLunch: document.getElementById("tuesdayLunch").value,
        tuesdaySnack2: document.getElementById("tuesdaySnack2").value,
        tuesdayDinner: document.getElementById("tuesdayDinner").value,

        wednesdayBreakfast: document.getElementById("wednesdayBreakfast").value,
        wednesdaySnack: document.getElementById("wednesdaySnack").value,
        wednesdayLunch: document.getElementById("wednesdayLunch").value,
        wednesdaySnack2: document.getElementById("wednesdaySnack2").value,
        wednesdayDinner: document.getElementById("wednesdayDinner").value,

        thursdayBreakfast: document.getElementById("thursdayBreakfast").value,
        thursdaySnack: document.getElementById("thursdaySnack").value,
        thursdayLunch: document.getElementById("thursdayLunch").value,
        thursdaySnack2: document.getElementById("thursdaySnack2").value,
        thursdayDinner: document.getElementById("thursdayDinner").value,

        fridayBreakfast: document.getElementById("fridayBreakfast").value,
        fridaySnack: document.getElementById("fridaySnack").value,
        fridayLunch: document.getElementById("fridayLunch").value,
        fridaySnack2: document.getElementById("fridaySnack2").value,
        fridayDinner: document.getElementById("fridayDinner").value,

        saturdayBreakfast: document.getElementById("saturdayBreakfast").value,
        saturdaySnack: document.getElementById("saturdaySnack").value,
        saturdayLunch: document.getElementById("saturdayLunch").value,
        saturdaySnack2: document.getElementById("saturdaySnack2").value,
        saturdayDinner: document.getElementById("saturdayDinner").value,

        sundayBreakfast: document.getElementById("sundayBreakfast").value,
        sundaySnack: document.getElementById("sundaySnack").value,
        sundayLunch: document.getElementById("sundayLunch").value,
        sundaySnack2: document.getElementById("sundaySnack2").value,
        sundayDinner: document.getElementById("sundayDinner").value,

    };

    var mealPlanHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Weekly Meal Plan</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }

            </style>
        </head>
        <body>
            <h1>Weekly Meal Plan</h1>
            <h2>Name: ${name}</h2>
            <h2>Email: ${email}</h2>
            <h2>Goal for the Week:</h2>
            <p>${goal}</p>
            <h3>Meal Plan</h3>
            <h4>Monday</h4>
            <ul>
                <li>Breakfast: ${meals.mondayBreakfast}</li>
                <li>Snack: ${meals.mondaySnack}</li>
                <li>Lunch: ${meals.mondayLunch}</li>
                <li>Snack2: ${meals.mondaySnack2}</li>
                <li>Dinner: ${meals.mondayDinner}</li>
            </ul>
            <h4>Tuesday</h4>
            <ul>
            <li>Breakfast: ${meals.tuesdayBreakfast}</li>
            <li>Snack: ${meals.tuesdaySnack}</li>
            <li>Lunch: ${meals.tuesdayLunch}</li>
            <li>Snack2: ${meals.tuesdaySnack2}</li>
            <li>Dinner: ${meals.tuesdayDinner}</li>
            </ul>
            <h4>Wednesday</h4>
            <ul>
            <li>Breakfast: ${meals.wednesdayBreakfast}</li>
            <li>Snack: ${meals.wednesdaySnack}</li>
            <li>Lunch: ${meals.wednesdayLunch}</li>
            <li>Snack2: ${meals.wednesdaySnack2}</li>
            <li>Dinner: ${meals.wednesdayDinner}</li>
            </ul>
            <h4>Thursday</h4>
            <ul>
            <li>Breakfast: ${meals.thursdayBreakfast}</li>
            <li>Snack: ${meals.thursdaySnack}</li>
            <li>Lunch: ${meals.thursdayLunch}</li>
            <li>Snack2: ${meals.thursdaySnack2}</li>
            <li>Dinner: ${meals.thursdayDinner}</li>
            </ul>
            <h4>Friday</h4>
            <ul>
            <li>Breakfast: ${meals.fridayBreakfast}</li>
            <li>Snack: ${meals.fridaySnack}</li>
            <li>Lunch: ${meals.fridayLunch}</li>
            <li>Snack2: ${meals.fridaySnack2}</li>
            <li>Dinner: ${meals.fridayDinner}</li>
            </ul>
            <h4>Saturday</h4>
            <ul>
            <li>Breakfast: ${meals.saturdayBreakfast}</li>
            <li>Snack: ${meals.saturdaySnack}</li>
            <li>Lunch: ${meals.saturdayLunch}</li>
            <li>Snack2: ${meals.saturdaySnack2}</li>
            <li>Dinner: ${meals.saturdayDinner}</li>
            </ul>
            <h4>Sunday</h4>
            <ul>
            <li>Breakfast: ${meals.sundayBreakfast}</li>
            <li>Snack: ${meals.sundaySnack}</li>
            <li>Lunch: ${meals.sundayLunch}</li>
            <li>Snack2: ${meals.sundaySnack2}</li>
            <li>Dinner: ${meals.sundayDinner}</li>
            </ul>


        </body>
        </html>
    `;

    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanHTML);
}

function clearMealPlan() {
    document.getElementById("mealPlanForm").reset();
}
