let IndianMeals = [
    {
        id: 101,
        img: require(`../assets/meals/meal101.jpeg`),
        mealName : 'daal makhni',
        numOf : 0,
        des : 'Dal makhani is a classic Indian dish made with whole urad dal, rajma, butter and spices',
        cost : 150
    },
    {
        id: 102,
        img: require(`../assets/meals/meal102.jpeg`),
        mealName : 'kadai paneer',
        numOf : 0,
        des : 'Kadai paneer is the combination of paneer, onion and colorfull bell peppers coated with spicy tomato sauce, aromatic spices and herbs',
        cost : 180
    },
    {
        id:103,
        img: require(`../assets/meals/meal103.jpeg`),
        mealName : 'chole',
        numOf : 0,
        des : 'Punjabi Chana Masala, also known as Chole Masala, is an authentic North Indian style curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs. ',
        cost : 130
    },
    {
        id:104,
        img: require(`../assets/meals/meal104.jpeg`),
        mealName : 'rajma',
        numOf : 0,
        des : 'red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.',
        cost : 135
    },
    {
        id:105,
        img: require(`../assets/meals/meal105.jpeg`),
        mealName : 'mix veg',         
        numOf : 0,
        des : 'Mix veg curry is made by cooking a mixture of vegetables together in a traditional Indian onion-tomato gravy.',
        cost : 120
    }
]

let ChinesenMeals = [
    {
        id: 201,
        img: require(`../assets/meals/meal201.jpeg`),
        mealName : 'Roasted Duck',
        numOf : 0,
        des : 'Peking duck is savored for its thin and crispy skin. Sliced Peking duck is often eaten with pancakes, sweet bean sauce, or soy sauce with mashed garlic. ',
        cost : 150
    },
    {
        id: 202,
        img: require(`../assets/meals/meal202.jpeg`),
        mealName : 'Sweet Pork',         
        numOf : 0,
        des : 'Sweet and sour pork (糖醋里脊 tángcù lǐjǐ) has a bright orange-red color, and a delicious sweet and sour taste.',
        cost : 180
    },
    {
        id:203,
        img: require(`../assets/meals/meal203.jpeg`),
        mealName : 'Chicken Momos',         
        numOf : 0,
        des : 'Chicken momos served with the red hot spicy souse',
        cost : 130
    },
    {
        id:204,
        img: require(`../assets/meals/meal204.jpeg`),
        mealName : 'Hot Pot',          
        numOf : 0,
        des : 'cook in and eat from a simmering pot of soup stock (broth) on a gas/induction hob in the middle of the dining table with foodstuffs and condiments around the pot.',
        cost : 135
    },
    {
        id:205,
        img: require(`../assets/meals/meal205.jpeg`),
        mealName : 'Dumplings',         
        numOf : 0,
        des : 'Chinese dumplings consist of minced meat and/or chopped vegetables wrapped in a thin dough skin.',
        cost : 120
    }
]

let ItalianMeals = [
    {
        id: 301,
        img: require(`../assets/meals/meal301.jpeg`),
        mealName : 'Caprese Salad',          
        numOf : 0,
        des : 'combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce',
        cost : 150
    },
    {
        id: 302,
        img: require(`../assets/meals/meal302.jpeg`),
        mealName : 'Panzenella',         
        numOf : 0,
        des : 'Panzenella is a Tuscan bread salad, ideal for summer.',
        cost : 180
    },
    {
        id:303,
        img: require(`../assets/meals/meal303.jpeg`),
        mealName : 'Bruschetta',         
        numOf : 0,
        des : 'An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix',
        cost : 130
    },
    {
        id:304,
        img: require(`../assets/meals/meal304.jpeg`),
        mealName : 'Focaccia Bread',          
        numOf : 0,
        des : 'Fresh dough is topped with caramelized onions, olives, tomato slices, basil leaves, grated parmesan cheese and baked delicious!',
        cost : 135
    },
    {
        id:305,
        img: require(`../assets/meals/meal305.jpeg`),
        mealName : 'Pasta Carbonara',          
        numOf : 0,
        des : 'This simple Roman pasta dish derives its name from carbone meaning coal. It was a pasta popular with the coal miners.',
        cost : 120
    }
]
let AmericanMeals = [
    {
        id: 401,
        img: require(`../assets/meals/meal401.jpeg`),
        mealName : 'Chicken Wings',       
        numOf : 0,
        des : 'fried chicken wings doused in a cayenne-vinegar hot sauce (buffalo sauce) are ubiquitous bar snacks',
        cost : 150
    },
    {
        id: 402,
        img: require(`../assets/meals/meal402.jpeg`),
        mealName : 'Tater Tots',
        numOf : 0,
        des : 'American variation of french fries on the traditional spud. Grated potato mini-balls which are cylindrical in shape and fried with a crispy exterior. ',
        cost : 180
    },
    {
        id:403,
        img: require(`../assets/meals/meal403.jpeg`),
        mealName : 'Hot Dogs',
        numOf : 0,
        des : 'grilled or steamed sausage served in the slit of a partially sliced bun',
        cost : 130
    },
    {
        id:404,
        img: require(`../assets/meals/meal404.jpeg`),
        mealName : 'Apple Pie',
        numOf : 0,
        des : 'pie in which the principal filling ingredient is apples',
        cost : 135
    },
    {
        id:405,
        img: require(`../assets/meals/meal405.jpeg`),
        mealName : 'Reuben Sandwich',
        numOf : 0,
        des : 'The classic corned beef, Swiss cheese, and sauerkraut sandwich is synonymous with American delis',
        cost : 120
    }
]
let JapaneseMeals = [
    {
        id: 501,
        img: require(`../assets/meals/meal501.jpeg`),
        mealName : 'Sushi',
        numOf : 0,
        des : 'dish made with Japanese rice that has been seasoned with rice vinegar.',
        cost : 150
    },
    {
        id: 502,
        img: require(`../assets/meals/meal502.jpeg`),
        mealName : 'Ginger Pork',
        numOf : 0,
        des : 'prepared by grilling thin slices of pork dressed with a delicate sauce of mirin, soy sauce, sake (Japanese rice wine), granola oil mixed with sliced onions, and ginger.',
        cost : 180
    },
    {
        id:503,
        img: require(`../assets/meals/meal503.jpeg`),
        mealName : 'Champon',
        numOf : 0,
        des : 'The ingredients are fried in lard, and a soup of chicken and pig bones is later added. The result is a robust and satisfying taste that is rarely the same.',
        cost : 130
    },
    {
        id:504,
        img: require(`../assets/meals/meal504.jpeg`),
        mealName : 'Gyoza',
        numOf : 0,
        des : 'Moon-shaped dumplings, enjoy them with a dip made with soy sauce, rice vinegar, and spicy oil.',
        cost : 135
    },
    {
        id:505,
        img: require(`../assets/meals/meal505.jpeg`),
        mealName : 'Gyudon veg',
        numOf : 0,
        des : 'A bawl of steamed rice is topped with thinly sliced beef and tender onion, simmered in dashi broth (a popular Japanese ingredient) and seasoned with mirin and soy sauce.',
        cost : 120
    }
]
let BeveragesMeals = [
    {
        id: 601,
        img: require(`../assets/meals/meal601.jpeg`),
        mealName : 'Coca Cola',
        numOf : 0,
        des : '750 ml bottle of ur favorite softdrink',
        cost : 150
    },
    {
        id: 602,
        img: require(`../assets/meals/meal602.jpeg`),
        mealName : 'Cold Coffee',
        numOf : 0,
        des : 'Child and tasty cold coffee at your door steps.',
        cost : 180
    },
    {
        id:603,
        img: require(`../assets/meals/meal603.jpeg`),
        mealName : 'Ice Tea',
        numOf : 0,
        des : 'Freshly prepared chilled ice tea at your door steps.',
        cost : 130
    },
    {
        id:604,
        img: require(`../assets/meals/meal604.jpeg`),
        mealName : 'Badaam Shake',   
        numOf : 0,
        des : 'Healthy combination of baadam and milk freshly prepared with seasoning of dry fruits.',
        cost : 135
    },
    {
        id:605,
        img: require(`../assets/meals/meal605.jpeg`),
        mealName : 'Choco Shake',  
        numOf : 0,
        des : 'Fresh and Tasty chocolate shake at your door steps.',
        cost : 120
    }
]
let DesertMeals = [
    {
        id: 701,
        img: require(`../assets/meals/meal701.jpeg`),
        mealName : 'Gulaab Jaamun',
        numOf : 0,
        des : 'Cottage cheese, rose water, green, milk, baking powder',
        cost : 150
    },
    {
        id: 702,
        img: require(`../assets/meals/meal702.jpeg`),
        mealName : 'Ras Malai', 
        numOf : 0,
        des : 'Saffron, lemon juice, pista, white sugar, ice cubes',
        cost : 180
    },
    {
        id:703,
        img: require(`../assets/meals/meal703.jpeg`),
        mealName : 'Choco Pie',  
        numOf : 0,
        des : 'a snack cake consisting of two small round layers of cake with marshmallow filling and a chocolate covering.',
        cost : 130
    },
    {
        id:704,
        img: require(`../assets/meals/meal704.jpeg`),
        mealName : 'Ice-cream',   
        numOf : 0,
        des : 'Two scoops of chilled vanila ice-cream at your door steps',
        cost : 135
    },
    {
        id:705,
        img: require(`../assets/meals/meal705.jpeg`),
        mealName : 'Gajar Halwa',
        numOf : 0,
        des : 'Saffron, golden raisins, almonds, cashews, clarified butter',
        cost : 120
    }
]
let Menu = [{id : 1,
             title : 'Indian',
             meals : IndianMeals
            },
            {id : 2,
                title : 'Chinese',
                meals : ChinesenMeals
            },
            {id : 3,
                title : 'Italian',
                meals : ItalianMeals
            },
            {id : 4,
                title : 'American',
                meals : AmericanMeals
               },
            {id : 5,
             title : 'Japanese',
             meals : JapaneseMeals
            },
            {id : 6,
                title : 'Bevreges',
                meals : BeveragesMeals
            },
            {id : 7,
                title : 'Desert',
                meals : DesertMeals
            },

        ]

export default Menu;