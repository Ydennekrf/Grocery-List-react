const { Recipes } = require('../models');

const recipeSeed = [{
    title: "Mushroom Risotto",
    instructions: "1. chop onion, garlic and mushrooms. \n 2. In a large pan, sautee mushrooms onions and garlic, when done set aside. \n 3. Using the large pan toast rice lightly deglaze with white wine and begin slowly adding chicken stock. \n 4. Continue adding chicken stock while mixing rice. \n 5. When rice is 80% cooked add onions mushrooms and garlic. \n 6. When rice is al Dente remove from heat and add cheese butter salt and pepper and mix well. \n 7. Garnish with chopped thyme",
    servings: 2,
    },{
    title: "10oz NY Strip with mashed potato and asparagus",
    instructions: "1. chop potatos and garlic, add to a pot of water and boil till tender. \n 2. strain potatos, add butter and mash till homogonous. \n 3. in a seperate pot, sautee onions deglaze with red wine and add beefstock. reduce by 50% combine butter and flour and wisk into stock slowly till sauce consistancy. \n  4. season rib eyes with salt and pepper and grill 3 min per side. \n 5. let rest for 5 min. \n 6. blanch asparagus and then sautee with butter and season with salt and pepper. \n 7. plate with potatos asparagus and steak garnish with fresh thyme",
    servings: 2,
},{
    title: "Home style Veal Lasagna",
    instructions: "1. blanch pasta sheets in salted boiling water and reserve. \n 2. cook veal and season well, add tomato sauce till wet. \n 3. layer lasagna in a long 8 inch deep pan, layers go, pasta-sauce-pasta-ricotta & spinach-pasta-sauce & buffala mozz - pasta - meat sauce - pasta - sauce & provolone. repeat order again. \n 4. cover pan with a lid or tin foil and bake the lasagna @450 for 45 min. \n 5. remove from over and let stand for 1 hour to cool. \n 6. using an identical pan used, place on top of lasagna and add weight(a couple 1 gallon oil/vinegar bottles work great) and place in refrigerator over night. \n 7. in morning remove from pan and portion lasagna into 1.5-2 inch thick slices. \n 8. using a non stick frying pan, sear face of lasagna till crisp, gently flip and repeat. \n 9. plate with tomato sauce on bottom followed by fresh basil and top with lasagna.",
    servings: 10,
},{
    title: "Ricotta Veal Meatballs with grilled bread",
    instructions: "1. combine the bread, peppers, eggs, parsley and white wine in a blender and blend till smooth. \n 2. combine remaining ingredients with blended ingredients and mix till smooth. \n 3. in a shallow hotel pan place a layer of parchment to cover the bottom, place a thin layer of tomoto sauce on the bottom of the pan. \n 4. form the meatballs(portion scoop helps alot), and place within hotel pan without touching. \n 5. pour remaining tomato sauce while hot and cover 60% of the meat balls. \n 6. cover hotel pan and bake @450 for 25 min ensure meat is cooked with a temp. probe but so not over bake. \n 7. remove balls from oven, serve in a bowl with 3 balls and some sauce from pan with slice of grilled bread.",
    servings: 12,
},{
    title: "Ricotta Gnocchi with Mushrooms and Arugula",
    instructions: "1. peel and quarter potatos, remove all blemishes. \n 2. boil potatos till tender, use food mill to rice potatos \n 3. while still warm combine potato with ricotta cheese, eggs and slowly add flour until mix comes together as a dough. \n 4. roll dough out into 1 inch thick tubes and cut into 1 inch squar pillows with a brench scraper, gently coat in flour and reserve till all is cut. \n 5. at this point you may freeze some or blanch it in salted boiling water, all your choice. \n 6. after blanching toss gnocchi a light amount of oil and allow to cool. \n 7. in a non stick pan at high heat, sear gnocchi till crisp on one side, then add mushrooms. \n 8. cook mushrooms to 50% then deglaze pan with white wine, season with salt and pepper and add cream. \n 9. once cream comes to a simmer remove from heat and add arugula give a quick toss and serve do not wilt arugula. \n 10. *optional* garnish with fresh white truffle shavings and lemon zest",
    servings: 4,
},{
    title: "Grilled Octopus with N'Duja sausage potatos arugula and a yellow pepper coulis",
    instructions: " 1. in a large pot combine tomato sauce, onions, lemons(reserve 1/2 a lemon), and fill to 75% with water. bring to a simmer and place octopus in pot cook for 2-3 hours or till tender. \n 2. while octopus is simmering quarter potatos and blanch in salted water. \n 3. roast yellow peppers till all skin somes off, clean and peel and blend till smooth, pass through fine mesh tamis for best quality. \n 4. when octopus is tender, remove from pot and allow to cool but do not refrigerate. \n 5. clean octopus removing the beak and head(head is edible but probably tough use in a chowder) save cooking liquid its great for manhattan chowder. \n 6. grill octopus with a half lemon. \n 7. in a pan sautee n'duja with potatos till crisp, squeeze grilled lemon lightly into pan and quickly toss arugula do not wilt. \n 8. plate with pepper puree on bottom then potato salad on top and finish with octopus. \n 9. *optional* dehydrate thin slices of speck for a salty smokey garnish.",
    servings: 8,
},{
    title: "Red Wine salt roast Beets with Ricotta cheese and arugula",
    instructions: "1. use a shallow hotel pan and line with salt 1 inch thick. place beets on salt unpeeled as is. pour red wine on top and cover with tin foil. \n 2. bake in over at 450 for 30-45 min or until the beets are fully tender. \n 3. shock beets in cold water and peel. \n 4.combine beets arugula, balsamis vin and olive oil in bowl and gently hand mix, season with salt and pepper. \n 5. garnish with riccotta cheese.",
    servings: 4,
}]

const recipeSeeding = () => Recipes.bulkCreate(recipeSeed);

module.exports = recipeSeeding;