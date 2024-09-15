import mongoose from 'mongoose';
import Recipe from './model/Recipe.js'; // Adjust the path as needed

const recipes = [
    {
        mealName: "Apple Crisp",
        ingredients: [
            { name: "Apples", amount: "4 cups" },
            { name: "Oats", amount: "1 cup" },
            { name: "Butter", amount: "1/2 cup" },
            { name: "Brown Sugar", amount: "1/2 cup" }
        ],
        description: "1. Preheat the oven to 350°F (175°C). \n2. Peel and slice apples, place them in a baking dish. \n3. Mix oats, brown sugar, and butter together and spread over apples. \n4. Bake for 45 minutes until the topping is golden and the apples are tender.",
        time: "45 minutes",
        type: "dessert",
        ratings: [4, 5],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Baked BBQ Chicken",
        ingredients: [
            { name: "Chicken", amount: "4 pieces" },
            { name: "BBQ Sauce", amount: "1 cup" },
            { name: "Salt", amount: "1 tsp" },
            { name: "Pepper", amount: "1/2 tsp" }
        ],
        description: "1. Preheat the oven to 375°F (190°C). \n2. Season the chicken with salt and pepper. \n3. Brush BBQ sauce generously over the chicken. \n4. Bake for 60 minutes, basting with BBQ sauce halfway through cooking.",
        time: "60 minutes",
        type: "chicken",
        ratings: [5, 5],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Banoffee Pie",
        ingredients: [
            { name: "Bananas", amount: "2" },
            { name: "Caramel", amount: "1 cup" },
            { name: "Whipped Cream", amount: "1 cup" },
            { name: "Digestive Biscuits", amount: "200 g" }
        ],
        description: "1. Crush digestive biscuits and press into a pie dish to form the base. \n2. Spread a layer of caramel over the base. \n3. Slice bananas and layer them on top of the caramel. \n4. Top with whipped cream and chill before serving.",
        time: "30 minutes",
        type: "dessert",
        ratings: [4, 4],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef and Broccoli Stir-Fry",
        ingredients: [
            { name: "Beef", amount: "400 g" },
            { name: "Broccoli", amount: "2 cups" },
            { name: "Soy Sauce", amount: "1/4 cup" },
            { name: "Garlic", amount: "2 cloves" }
        ],
        description: "1. Heat oil in a pan over medium-high heat. \n2. Add sliced beef and cook until browned. \n3. Add garlic and broccoli, stir-fry for 2-3 minutes. \n4. Add soy sauce and cook for another 2 minutes. Serve hot.",
        time: "20 minutes",
        type: "beef",
        ratings: [4, 5],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef and Vegetable Kabobs",
        ingredients: [
            { name: "Beef", amount: "500 g" },
            { name: "Bell Peppers", amount: "2" },
            { name: "Onions", amount: "2" },
            { name: "Zucchini", amount: "2" }
        ],
        description: "1. Preheat the grill to medium-high heat. \n2. Thread beef, bell peppers, onions, and zucchini onto skewers. \n3. Grill for 10-15 minutes, turning occasionally until cooked to your liking. \n4. Serve hot with a dipping sauce of your choice.",
        time: "45 minutes",
        type: "beef",
        ratings: [5, 4],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef Chili",
        ingredients: [
            { name: "Ground Beef", amount: "500 g" },
            { name: "Beans", amount: "2 cups" },
            { name: "Tomato Sauce", amount: "1 can" },
            { name: "Chili Powder", amount: "2 tbsp" }
        ],
        description: "1. In a large pot, brown the ground beef. \n2. Add beans, tomato sauce, and chili powder. \n3. Simmer on low heat for 30 minutes. \n4. Serve with sour cream and cheese.",
        time: "60 minutes",
        type: "beef",
        ratings: [5, 4],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef Enchiladas",
        ingredients: [
            { name: "Ground Beef", amount: "500 g" },
            { name: "Tortillas", amount: "8" },
            { name: "Enchilada Sauce", amount: "1 can" },
            { name: "Cheese", amount: "1 cup" }
        ],
        description: "1. Preheat the oven to 375°F (190°C). \n2. Cook the ground beef until browned, then mix with enchilada sauce. \n3. Fill tortillas with the beef mixture and roll them up. \n4. Place in a baking dish, cover with cheese, and bake for 20 minutes.",
        time: "40 minutes",
        type: "beef",
        ratings: [4, 5],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef Gyros",
        ingredients: [
            { name: "Beef", amount: "400 g" },
            { name: "Pita Bread", amount: "4" },
            { name: "Tzatziki Sauce", amount: "1 cup" },
            { name: "Tomatoes", amount: "2" },
            { name: "Onions", amount: "1" }
        ],
        description: "1. Cook beef in a skillet until browned. \n2. Warm pita bread. \n3. Fill the pita with beef, tzatziki sauce, tomatoes, and onions. \n4. Serve immediately.",
        time: "30 minutes",
        type: "beef",
        ratings: [5, 4],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef Stroganoff",
        ingredients: [
            { name: "Beef", amount: "400 g" },
            { name: "Mushrooms", amount: "200 g" },
            { name: "Sour Cream", amount: "1 cup" },
            { name: "Egg Noodles", amount: "200 g" }
        ],
        description: "1. Cook beef and mushrooms in a skillet until browned. \n2. Add sour cream and simmer for 10 minutes. \n3. Serve over egg noodles.",
        time: "35 minutes",
        type: "beef",
        ratings: [5, 4],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef Tacos",
        ingredients: [
            { name: "Ground Beef", amount: "500 g" },
            { name: "Taco Shells", amount: "8" },
            { name: "Lettuce", amount: "1 cup" },
            { name: "Tomato", amount: "1" },
            { name: "Cheese", amount: "1 cup" }
        ],
        description: "1. Cook ground beef in a skillet until browned. \n2. Fill taco shells with beef, lettuce, tomato, and cheese. \n3. Serve with salsa and sour cream.",
        time: "20 minutes",
        type: "beef",
        ratings: [5, 4],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Beef Wellington",
        ingredients: [
            { name: "Beef Tenderloin", amount: "1 kg" },
            { name: "Puff Pastry", amount: "1 sheet" },
            { name: "Mushrooms", amount: "200 g" },
            { name: "Mustard", amount: "2 tbsp" }
        ],
        description: "1. Preheat the oven to 400°F (200°C). \n2. Sear beef tenderloin, spread mustard on it, and wrap in puff pastry. \n3. Bake for 35-40 minutes until the pastry is golden brown. \n4. Serve sliced with a sauce of your choice.",
        time: "90 minutes",
        type: "beef",
        ratings: [5, 5],
        userVotes: 2,
        comments: [],
    },
    {
        mealName: "Caprese Salad",
        ingredients: [
            { name: "Tomatoes", amount: "2" },
            { name: "Mozzarella", amount: "200 g" },
            { name: "Basil", amount: "10 leaves" },
            { name: "Olive oil", amount: "2 tbsp" },
            { name: "Balsamic vinegar", amount: "1 tbsp" }
        ],
        description: "Slice tomatoes and mozzarella. Layer them with basil leaves, drizzle olive oil and balsamic vinegar, then serve.",
        time: "15 minutes",
        type: "vegetarian",
        ratings: [5, 4, 4],
        userVotes: 3,
        comments: [],
    },
    {
        mealName: "Chicken Alfredo Pasta",
        ingredients: [
            { name: "Chicken", amount: "2 breasts" },
            { name: "Fettuccine pasta", amount: "300 g" },
            { name: "Butter", amount: "2 tbsp" },
            { name: "Heavy cream", amount: "1 cup" },
            { name: "Parmesan cheese", amount: "1/2 cup" },
            { name: "Garlic", amount: "2 cloves" }
        ],
        description: "Cook fettuccine pasta. Sauté chicken in butter and garlic, then add cream and parmesan to create a creamy sauce. Toss the pasta in the sauce and serve.",
        time: "30 minutes",
        type: "pasta",
        ratings: [5, 4, 5],
        userVotes: 3,
        comments: [],
    },
    {
        mealName: "Chicken and Rice Casserole",
        ingredients: [
            { name: "Chicken", amount: "4 breasts" },
            { name: "Rice", amount: "1 cup" },
            { name: "Cream of mushroom soup", amount: "1 can" },
            { name: "Chicken broth", amount: "1 cup" },
            { name: "Onions", amount: "1" },
            { name: "Garlic", amount: "2 cloves" }
        ],
        description: "Layer rice, chicken, onions, and garlic in a baking dish. Pour over the soup and broth, then bake for 1 hour until the chicken is fully cooked.",
        time: "1 hour",
        type: "chicken",
        ratings: [4, 3, 5],
        userVotes: 3,
        comments: [],
    },
    {
        mealName: "Chicken and Vegetable Stir-Fry",
        ingredients: [
            { name: "Chicken", amount: "2 breasts" },
            { name: "Bell peppers", amount: "2" },
            { name: "Broccoli", amount: "1 cup" },
            { name: "Carrots", amount: "2" },
            { name: "Soy sauce", amount: "1/4 cup" },
            { name: "Garlic", amount: "2 cloves" }
        ],
        description: "Sauté chicken until browned, then stir-fry with vegetables. Add soy sauce and garlic for flavor. Serve over rice or noodles.",
        time: "25 minutes",
        type: "chicken",
        ratings: [5, 5, 4],
        userVotes: 3,
        comments: [],
    },
    {
        mealName: "Chicken Caesar Salad",
        ingredients: [
            { name: "Romaine lettuce", amount: "2 heads" },
            { name: "Grilled chicken", amount: "2 breasts" },
            { name: "Parmesan", amount: "1/2 cup" },
            { name: "Croutons", amount: "1 cup" },
            { name: "Caesar dressing", amount: "1/2 cup" }
        ],
        description: "Chop romaine lettuce and top with grilled chicken, parmesan, and croutons. Drizzle Caesar dressing before serving.",
        time: "20 minutes",
        type: "chicken",
        ratings: [4, 4, 5],
        userVotes: 3,
        comments: [],
    },
    {
        mealName: "Chicken Curry",
        ingredients: [
            { name: "Chicken", amount: "500 g" },
            { name: "Onions", amount: "2" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Ginger", amount: "1 tbsp" },
            { name: "Tomatoes", amount: "2" },
            { name: "Curry powder", amount: "2 tbsp" },
            { name: "Coconut milk", amount: "1 cup" }
        ],
        description: "Cook onions, garlic, and ginger until soft. Add curry powder, chicken, tomatoes, and coconut milk, and simmer until chicken is cooked through.",
        time: "1 hour",
        type: "chicken",
        ratings: [4, 5, 3],
        userVotes: 3,
        comments: []
    },
    {
        mealName: "Chicken Parmesan",
        ingredients: [
            { name: "Chicken breasts", amount: "4" },
            { name: "Parmesan cheese", amount: "1/2 cup" },
            { name: "Marinara sauce", amount: "1 cup" },
            { name: "Mozzarella", amount: "1 cup" },
            { name: "Breadcrumbs", amount: "1 cup" }
        ],
        description: "Bread the chicken, bake it until crispy, top with marinara sauce, mozzarella, and parmesan, then bake until cheese is melted.",
        time: "45 minutes",
        type: "chicken",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Chocolate Mousse",
        ingredients: [
            { name: "Dark chocolate", amount: "200 g" },
            { name: "Eggs", amount: "3" },
            { name: "Sugar", amount: "1/2 cup" },
            { name: "Heavy cream", amount: "1 cup" }
        ],
        description: "Melt the chocolate, whip the cream, and fold it into the chocolate mixture along with whipped eggs and sugar. Refrigerate before serving.",
        time: "2 hours",
        type: "dessert",
        ratings: [5],
        userVotes: 1,
        comments: []
    },
    {
        mealName: "Classic Chocolate Chip Cookies",
        ingredients: [
            { name: "Flour", amount: "2 cups" },
            { name: "Butter", amount: "1 cup" },
            { name: "Sugar", amount: "1 cup" },
            { name: "Chocolate chips", amount: "1 cup" },
            { name: "Eggs", amount: "2" },
            { name: "Vanilla extract", amount: "1 tsp" }
        ],
        description: "Mix all the ingredients, shape into balls, and bake until golden.",
        time: "30 minutes",
        type: "dessert",
        ratings: [4, 5, 4],
        userVotes: 3,
        comments: []
    },
    {
        mealName: "Creamy Garlic Shrimp Alfredo",
        ingredients: [
            { name: "Shrimp", amount: "500 g" },
            { name: "Garlic", amount: "3 cloves" },
            { name: "Heavy cream", amount: "1 cup" },
            { name: "Parmesan", amount: "1/2 cup" },
            { name: "Fettuccine", amount: "300 g" }
        ],
        description: "Cook shrimp with garlic, then make a sauce with cream and parmesan. Toss with cooked fettuccine and serve.",
        time: "30 minutes",
        type: "pasta",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Eggplant Parmesan",
        ingredients: [
            { name: "Eggplant", amount: "2" },
            { name: "Parmesan", amount: "1 cup" },
            { name: "Marinara sauce", amount: "2 cups" },
            { name: "Mozzarella", amount: "1 cup" },
            { name: "Breadcrumbs", amount: "1 cup" }
        ],
        description: "Bread and fry eggplant slices, layer with marinara sauce, mozzarella, and parmesan, then bake until golden.",
        time: "1 hour",
        type: "vegetarian",
        ratings: [3, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Fettuccine Alfredo",
        ingredients: [
            { name: "Fettuccine", amount: "300 g" },
            { name: "Butter", amount: "1/2 cup" },
            { name: "Parmesan", amount: "1 cup" },
            { name: "Heavy cream", amount: "1/2 cup" }
        ],
        description: "Cook fettuccine and toss with a sauce made of butter, cream, and parmesan.",
        time: "20 minutes",
        type: "pasta",
        ratings: [5, 4, 3],
        userVotes: 3,
        comments: []
    },
    {
        mealName: "Fruit Salad",
        ingredients: [
            { name: "Strawberries", amount: "1 cup" },
            { name: "Blueberries", amount: "1/2 cup" },
            { name: "Pineapple", amount: "1 cup" },
            { name: "Grapes", amount: "1 cup" },
            { name: "Orange juice", amount: "1/4 cup" }
        ],
        description: "Cut all the fruit and toss them together with orange juice.",
        time: "15 minutes",
        type: "dessert",
        ratings: [4, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Grilled Lemon Herb Chicken",
        ingredients: [
            { name: "Chicken breasts", amount: "4" },
            { name: "Lemon", amount: "1" },
            { name: "Garlic", amount: "3 cloves" },
            { name: "Rosemary", amount: "1 tbsp" },
            { name: "Thyme", amount: "1 tbsp" },
            { name: "Olive oil", amount: "1/4 cup" }
        ],
        description: "Marinate chicken in lemon, garlic, and herbs, then grill until fully cooked.",
        time: "45 minutes",
        type: "chicken",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Honey Mustard Chicken",
        ingredients: [
            { name: "Chicken breasts", amount: "4" },
            { name: "Honey", amount: "1/4 cup" },
            { name: "Mustard", amount: "2 tbsp" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Olive oil", amount: "2 tbsp" }
        ],
        description: "Marinate chicken in honey, mustard, and garlic, then bake or grill until cooked.",
        time: "40 minutes",
        type: "chicken",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Korean Beef Bulgogi",
        ingredients: [
            { name: "Beef", amount: "500 g" },
            { name: "Soy sauce", amount: "1/4 cup" },
            { name: "Sugar", amount: "2 tbsp" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Sesame oil", amount: "1 tbsp" },
            { name: "Ginger", amount: "1 tbsp" }
        ],
        description: "Marinate the beef in a mixture of soy sauce, sugar, garlic, and ginger. Grill or pan-fry until caramelized.",
        time: "1 hour",
        type: "beef",
        ratings: [5, 5, 4],
        userVotes: 3,
        comments: []
    },
    {
        mealName: "Lasagna",
        ingredients: [
            { name: "Lasagna noodles", amount: "12" },
            { name: "Ricotta", amount: "500 g" },
            { name: "Mozzarella", amount: "2 cups" },
            { name: "Ground beef", amount: "500 g" },
            { name: "Marinara sauce", amount: "2 cups" },
            { name: "Parmesan", amount: "1/2 cup" }
        ],
        description: "Layer noodles, meat sauce, and cheeses. Bake until bubbly and golden.",
        time: "1 hour 30 minutes",
        type: "pasta",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Lemon Bars",
        ingredients: [
            { name: "Flour", amount: "2 cups" },
            { name: "Butter", amount: "1 cup" },
            { name: "Sugar", amount: "1/2 cup" },
            { name: "Lemons", amount: "3" },
            { name: "Eggs", amount: "4" }
        ],
        description: "Mix flour, butter, and sugar to create the base. Bake, then pour a lemon and egg mixture over the base and bake again.",
        time: "1 hour",
        type: "dessert",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Lentil and Vegetable Soup",
        ingredients: [
            { name: "Lentils", amount: "1 cup" },
            { name: "Carrots", amount: "2" },
            { name: "Onions", amount: "1" },
            { name: "Celery", amount: "2 stalks" },
            { name: "Tomatoes", amount: "2" },
            { name: "Vegetable broth", amount: "4 cups" }
        ],
        description: "Sauté the vegetables, add lentils and broth, and simmer until tender.",
        time: "1 hour",
        type: "vegetarian",
        ratings: [4, 5, 3],
        userVotes: 3,
        comments: []
    },
    {
        mealName: "Linguine Carbonara",
        ingredients: [
            { name: "Linguine", amount: "300 g" },
            { name: "Eggs", amount: "3" },
            { name: "Parmesan", amount: "1/2 cup" },
            { name: "Pancetta", amount: "100 g" },
            { name: "Black pepper", amount: "1 tsp" }
        ],
        description: "Cook linguine, and mix with a sauce made of eggs, parmesan, and crispy pancetta. Season with pepper.",
        time: "25 minutes",
        type: "pasta",
        ratings: [5, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Mushroom Risotto",
        ingredients: [
            { name: "Arborio rice", amount: "1 cup" },
            { name: "Mushrooms", amount: "200 g" },
            { name: "Onions", amount: "1" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Parmesan", amount: "1/2 cup" },
            { name: "Vegetable broth", amount: "4 cups" }
        ],
        description: "Sauté mushrooms and onions, add arborio rice, and gradually stir in vegetable broth until rice is creamy. Add parmesan before serving.",
        time: "45 minutes",
        type: "vegetarian",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Penne alla Vodka",
        ingredients: [
            { name: "Penne pasta", amount: "300 g" },
            { name: "Tomatoes", amount: "2" },
            { name: "Vodka", amount: "1/4 cup" },
            { name: "Cream", amount: "1/2 cup" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Parmesan", amount: "1/2 cup" }
        ],
        description: "Cook penne and toss with a creamy vodka and tomato sauce. Garnish with parmesan.",
        time: "30 minutes",
        type: "pasta",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Pesto Pasta with Cherry Tomatoes",
        ingredients: [
            { name: "Pasta", amount: "300 g" },
            { name: "Basil", amount: "1 cup" },
            { name: "Pine nuts", amount: "1/4 cup" },
            { name: "Parmesan", amount: "1/2 cup" },
            { name: "Olive oil", amount: "1/4 cup" },
            { name: "Cherry tomatoes", amount: "200 g" }
        ],
        description: "Blend basil, pine nuts, and parmesan to make pesto. Toss with pasta and halved cherry tomatoes.",
        time: "20 minutes",
        type: "pasta",
        ratings: [5, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Quinoa and Black Bean Bowl",
        ingredients: [
            { name: "Quinoa", amount: "1 cup" },
            { name: "Black beans", amount: "1 can" },
            { name: "Corn", amount: "1 cup" },
            { name: "Avocado", amount: "1" },
            { name: "Cilantro", amount: "1/4 cup" },
            { name: "Lime", amount: "1" }
        ],
        description: "Cook quinoa and mix with black beans, corn, avocado, and a cilantro-lime dressing.",
        time: "25 minutes",
        type: "vegetarian",
        ratings: [4, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Shrimp Scampi",
        ingredients: [
            { name: "Shrimp", amount: "500 g" },
            { name: "Garlic", amount: "3 cloves" },
            { name: "Butter", amount: "1/4 cup" },
            { name: "White wine", amount: "1/2 cup" },
            { name: "Lemon", amount: "1" },
            { name: "Pasta", amount: "300 g" }
        ],
        description: "Sauté shrimp with garlic and butter, deglaze with white wine, and toss with pasta. Garnish with lemon juice.",
        time: "30 minutes",
        type: "pasta",
        ratings: [5, 4, 3],
        userVotes: 3,
        comments: []
    },
    {
        mealName: "Spaghetti Bolognese",
        ingredients: [
            { name: "Spaghetti", amount: "300 g" },
            { name: "Ground beef", amount: "500 g" },
            { name: "Tomatoes", amount: "2 cups" },
            { name: "Onions", amount: "1" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Carrots", amount: "2" },
            { name: "Parmesan", amount: "1/2 cup" }
        ],
        description: "Cook the ground beef with vegetables, add tomatoes, and simmer into a sauce. Toss with spaghetti.",
        time: "1 hour",
        type: "pasta",
        ratings: [5, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Spinach and Ricotta Stuffed Shells",
        ingredients: [
            { name: "Pasta shells", amount: "12" },
            { name: "Spinach", amount: "2 cups" },
            { name: "Ricotta", amount: "1 cup" },
            { name: "Mozzarella", amount: "1 cup" },
            { name: "Tomato sauce", amount: "2 cups" }
        ],
        description: "Stuff cooked pasta shells with a mixture of spinach and ricotta, place them in a baking dish, top with tomato sauce and mozzarella, and bake.",
        time: "45 minutes",
        type: "vegetarian",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Strawberry Shortcake",
        ingredients: [
            { name: "Flour", amount: "2 cups" },
            { name: "Sugar", amount: "1/2 cup" },
            { name: "Butter", amount: "1/2 cup" },
            { name: "Strawberries", amount: "2 cups" },
            { name: "Whipped cream", amount: "1 cup" }
        ],
        description: "Make shortcake biscuits, top with sliced strawberries, and finish with whipped cream.",
        time: "1 hour",
        type: "dessert",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Tiramisu",
        ingredients: [
            { name: "Ladyfingers", amount: "24" },
            { name: "Espresso", amount: "1 cup" },
            { name: "Mascarpone", amount: "1 cup" },
            { name: "Cocoa powder", amount: "2 tbsp" },
            { name: "Eggs", amount: "4" },
            { name: "Sugar", amount: "1/2 cup" }
        ],
        description: "Layer soaked ladyfingers with a mascarpone mixture and dust with cocoa powder. Refrigerate before serving.",
        time: "2 hours",
        type: "dessert",
        ratings: [5, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Vanilla Custard",
        ingredients: [
            { name: "Milk", amount: "2 cups" },
            { name: "Eggs", amount: "4" },
            { name: "Sugar", amount: "1/2 cup" },
            { name: "Vanilla extract", amount: "1 tsp" }
        ],
        description: "Heat milk, then whisk with eggs, sugar, and vanilla. Bake in a water bath until set.",
        time: "1 hour",
        type: "dessert",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Vegetable Curry",
        ingredients: [
            { name: "Vegetables", amount: "4 cups" },
            { name: "Coconut milk", amount: "1 can" },
            { name: "Curry paste", amount: "2 tbsp" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Ginger", amount: "1 tbsp" }
        ],
        description: "Sauté vegetables with curry paste, garlic, and ginger, then simmer with coconut milk until tender.",
        time: "45 minutes",
        type: "vegetarian",
        ratings: [4, 5],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Vegetable Paella",
        ingredients: [
            { name: "Rice", amount: "2 cups" },
            { name: "Bell peppers", amount: "2" },
            { name: "Tomatoes", amount: "2" },
            { name: "Peas", amount: "1 cup" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Saffron", amount: "1/4 tsp" }
        ],
        description: "Cook rice with saffron, garlic, and vegetables until rice is tender and flavorful.",
        time: "1 hour",
        type: "vegetarian",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    },
    {
        mealName: "Vegetarian Chili",
        ingredients: [
            { name: "Beans", amount: "2 cups" },
            { name: "Tomatoes", amount: "2 cups" },
            { name: "Onions", amount: "1" },
            { name: "Garlic", amount: "2 cloves" },
            { name: "Chili powder", amount: "1 tbsp" },
            { name: "Bell peppers", amount: "2" },
            { name: "Corn", amount: "1 cup" }
        ],
        description: "Simmer beans and vegetables with spices for a hearty, flavorful chili.",
        time: "1 hour",
        type: "vegetarian",
        ratings: [5, 4],
        userVotes: 2,
        comments: []
    }

];

// Function to seed the database
const seedDB = async () => {
    try {
        await Recipe.deleteMany({});
        await Recipe.insertMany(recipes);
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding the database', error);
    }
};

// Connect to the database and seed
mongoose
    .connect(process.env.URL || 'mongodb://defaultUser:defaultPassword@localhost:27017/Recipes?authSource=admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        seedDB();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });