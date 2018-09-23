// This is just some sample data so you don't have to think of your own!
const restaurants = {
    restaurant1: {
            name: 'South Main Market',
            latitude: 35.135502,
            longitude: -90.058657,
            address: "409 South Main Street, Memphis, Tennessee, 38103",
            phone: '901-341-3838',
            hours1:'Tuesday thru Friday 7:30 AM to 10:00 PM',
            hours2:'Saturday and Sunday 10:00 AM to 5:00 PM',
            image:'images/southMainMarket.png',

            site:'https://thesouthmainmarket.com/',
            facebook:'https://www.facebook.com/The-South-Main-Market-572931696202917/',
            instagram:'http://instagram.com/thesouthmainmarket',


            caption:'Welcome to the South Main Market. The first food hall in Memphis. Photo of city east bagel and grill with a happy group chatting and enjoying themselves.',

            summary:'Large location on three levels. With various food stalls mostly on the second floor. Go up the interior stairs. When at the top, JAVA CABANA WEST, will be on your left. CITY EAST BAGEL AND GRILL will be on the right just after Wall Flower Memphis. Then walk a little farther and find Kinfolk on the right. Counter service at all stalls. You will find seating in the middle. Ask and your drinks and food can be delivered to your table. Service dogs will love this place. A casual community hang out with free wifi. Located on the South Main street bus and trolley lines.  If you love this menu ask to talk to the manager or owner thank you. They are our first customers!',

            bus:'Main Street Line - Bus 100 - Stop Name: Huling - Main Tro NB Stop',
            cab:'Easy cap drop off directly in front',


            heading:'CITY BLOCK SALUMERIA - Meats & Charcutarie Items - $7.00 to $35.00',
            menuItems: [
                {item : 'BEEF ITEMS'},
                {item : '1. Brisket - PRICE $12.00 a pound'},
                {item : '2. Eye Round - PRICE $10.00 a pound'},
                {item : '3. Back Ribs - PRICE $9.00 a pound'},
                {item : '4. Ribeye - PRICE $19.00 a pound'},
                {item : '5. Dry Aged Ribeye - PRICE $25.00 a pound'},
                {item : '6. Cowboy Ribeye - PRICE $25.00 a pound'},
                {item : '7. Spinalis - PRICE $35.00 a pound'},
                {item : '8. Saratoga - PRICE $29.00 a pound'},
                {item : '9. Porterhouse - PRICE $24.00 a pound'},
                {item : '10. T Bone - PRICE $17.00 a pound'},
                {item : '11. Tenderloin - PRICE $29.00 a pound'},
                {item : '12. Bone in Filet - PRICE $27.00 a pound'},
                {item : '13. New York Strip - PRICE $19.00 a pound'},
                {item : '14. Kansas City Strip - PRICE $19.00 a pound'},
                {item : '15. Steak Burger - PRICE $12.00 a pound'},
                {item : '16. Ground Beef - PRICE $9.00 a pound'},
                {item : 'BEEF AND LAMB SAUSAGES - City Block Salumeria items '},
                {item : '17. Fresh - PRICE $12.00 a pound'},
                {item : '18. Hot Dogs - PRICE $12.00 a pound'},
                {item : 'PORK - City Block Salumeria items'},
                {item : '19. Belly - PRICE $8.00 a pound'},
                {item : '20. Coppa - PRICE $12.00 a pound'},
                {item : '21. Rib Chop - PRICE $10.00 a pound'},
                {item : '22. Porterhouse Chop - PRICE $9.00 a pound'},
                {item : '23. Shoulder / Butt - PRICE $8.00 a pound'},
                {item : '24. Ground Pork - PRICE $8.00 a pound'},
                {item : 'PORK SAUSAGES - City Block Salumeria items '},
                {item : '25. Fresh - PRICE $9.00 a pound'},
                {item : '26. Smoked - PRICE $10.00 a pound'},
                {item : '27. Mortadella - PRICE $15.00 a pound'},
                {item : 'COOKED AND CURED MEATS - City Block Salumeria items '},
                {item : '28. PORK - Ham, Bacon, Gabagool - PRICE $12.00 a pound'},
                {item : '29. BEEF - Pastrami and Corned Beef - PRICE $15.00 a pound'},
                {item : '30. Pate - PRICE $8.00 a pound'},
                {item : '31. Headcheese - PRICE $12.00 a pound'},
                {item : 'CHARCUTERIE & MISC - City Block Salumeria items'},
                {item : '32. Whole Muscle - PRICE $12.00 for 20 slices'},
                {item : '33. Salami which is fermented - PRICE $18.00 each for smaller size'},
                {item : '34. Salami Sec - PRICE $12.00 each'},
                {item : '35. Jerky - PRICE $10.00 per bag'},
                {item : '36. Prosciutto - PRICE $45.00 a pound'},
                {item : '37. Gravlax - PRICE $15.00 a pound'},
                {item : '38. Pasnc., Guanc, Lardo  - PRICE $22.00 a pound each'},
                {item : '39. Lard - PRICE $5.00 per quart'},
                {item : '40. Schmaltz - PRICE $5.00 per cup'},
                {item : '41. Duck Fat - PRICE $10.00 per cup'},
                {item : '42. Stocks - PRICE $6.00 per quart'},
                {item : '43. Bar B Q Sauce - PRICE $6.00 per jar'},
                {item : '44. Demi - PRICE $7.00 per cup'},
                {item : '43. Pickles - PRICE $8.00 per jar'},
            ],
            heading:'CITY BLOCK SALUMERIA - 7 Breakfast Sandwiches - $5.00 to $12.00',
            menuItems: [
                {item : 'Breakfast served Tuesday and Friday from 7:30 to 10:30. Saturday and Sunday brunch starts at 10:00. All breakfast sandwiches served on a kaiser roll.'},
                {item : '1. Bacon, egg, and american cheese breakfast sandwich - PRICE $7.50'},
                {item : '2. City ham, egg, and american cheese breakfast sandwich - PRICE $7.50'},
                {item : '3. Spicy maple sausage, egg, and american cheese breakfast sandwich - PRICE $7.50'},
                {item : '4. Egg and american cheese breakfast sandwich - PRICE $5.50'},
                {item : '5. DAVES BAGEL WITH SCHMEAR - PRICE $5.00'},
                {item : '6. DAVES BAGEL WITH LOX and SCHMEAR - PRICE $12.00'},
                {item : '7. Add house made pepperoncini - PRICE .50 cents'},
            ],
            heading:'CITY BLOCK SALUMERIA - 13 Speciality & Regular Sandwiches - $8.00 to $35.00',
            menuItems: [
                {item : 'Lunch served daily from 11:00 to 7:30.'},
                {item : '1. THE HOT ITALIAN  - Capicola, soppressata, mortadella, city ham and spuma di n duja on Leidenheimer’s french baguette with provolone cheese, pepperoncini, marinated onions and green leaf lettuce. - PRICE $10.00'},
                {item : '2. THE CUBAN - Smoked pork shoulder and city ham on pressed Leidenheimer’s french baguette with swiss cheese, yellow mustard and pickles. - PRICE $10.00'},
                {item : '3. MUFFALETTA - Capicola, mortadella and soppressata on Gambino muffaletta loaf with provolone cheese and olive salad. - PRICE  Whole $35.00, Half $18.00 and Quarter $9.00'},
                {item : '4. THE REUBEN  - Pastrami on rye bread with swiss cheese, sauerkraut and Russian dressing. - PRICE $9.00'},
                {item : '5. THE CLASSIC HOT HAM AND CHEESE - City ham on kaiser roll with american cheese. - PRICE $8.00'},
                {item : '6. GRILLED PIMIENTO CHEESE - Pimiento cheese on rye bread with local tomato, when in season - PRICE $8.00'},
                {item : '7. HAM AND SWISS - Ham and swiss cheese with Dijon mayonnaise served on Leidenheimers french baguette with green leaf lettuce, local tomato when in season, pepperrboncini and marinated onion. - PRICE $9.00'},
                {item : '8. PASTRAMI AND SWISS - Pastrami and swiss cheese with creole mustard served on Leidenheimers french baguette with green leaf lettuce, local tomato when in season, pepperrboncini and marinated onion. - PRICE $9.00'},
                {item : '9. ROAST BEEF - Roast Beef and provolone cheese with horseradish and roasted garlic mayonnaise served on Leidenheimers french baguette with green leaf lettuce, local tomato when in season, pepperrboncini and marinated onion. - PRICE $9.00'},
                {item : '10. TURKEY - Turkey and provolone cheese with dijon mayonnaise served on Leidenheimers french baguette with green leaf lettuce, local tomato when in season, pepperrboncini and marinated onion. - PRICE $9.00'},
                {item : 'SANDWICH EXTRAS '},
                {item : '11. Extra meat - PRICE $3.00'},
                {item : '12. Extra cheese - PRICE $1.00'},
                {item : '13. Extra pickles or pepperoncini - PRICE .50 cents'},
            ],

            heading:'CITY BLOCK SALUMERIA - 4 Sides - $2.00',
            menuItems: [
                {item : '1. Potato Salad - PRICE $2.00'},
                {item : '2. Cole Slaw - PRICE $2.00'},
                {item : '3. Dirty Potato Chips - PRICE $2.00'},
                {item : '4. Cumcumber Salad - PRICE $2.00'},

            ],

            heading:'JAVA CABANA WEST - 31 Coffees, Mochas and Specialities Drinks $2.25 to $5.45',
            menuItems: [
                {item : '1. CUP OF COFFEE - PRICE $2.25'},
                {item : '2. AMERICANO COFFEE - PRICE $2.85'},
                {item : '3. CAFE AU LAIT - PRICE $3.00'},
                {item : '4. BREVE COFFEE - PRICE $4.45'},
                {item : '5. CHAI - PRICE $3.95'},
                {item : '6. DIRTY CHAI - PRICE $4.70'},
                {item : '7. ESPRESSO DOUBLE - PRICE $2.50'},
                {item : '8. CAPPUCCINO - PRICE $3.95'},
                {item : '9. LATTE - PRICE $3.95'},
                {item : '10. VANILLA LATTE - PRICE $4.45'},
                {item : '11. FANCY CARAMEL LATTE - PRICE $4.75'},
                {item : 'EXTRAS'},
                {item : '12. SOY MILK - PRICE 75 cents'},
                {item : '13. ALMOND MILK - PRICE 75 cents'},
                {item : '14. MOCHA - PRICE $4.50'},
                {item : '15. RASPBERRY MOCHA - PRICE $4.75'},
                {item : '16. LAVENDER MOCHA - PRICE $4.75'},
                {item : '17. ALMOMD MOCHA - PRICE $4.75'},
                {item : '18. HAZELNUT MOCHA - PRICE $4.75'},
                {item : '19. HOT TEA - PRICE $2.75'},
                {item : '20. MYSTERY TRAIN - Hazelnut, vanilla, espresso, steamed milk and whip cream - PRICE $4.95'},
                {item : '21. FUNKY MONKEY - Chocolate, banana syrup, espresso, steamed milk and whip cream - PRICE $4.95'},
                {item : '22. CHOCOLATE DREAM - Orange syrup, chocolate, espresso, steamed milk and whip cream - PRICE $4.95'},
                {item : '23. SWEET JANE -Caramel sauce, vanilla, espresso, steamed milk and whip cream - PRICE $4.95'},
                {item : '24. ICED LATTE - PRICE $4.45'},
                {item : '25. ICED VANILLA LATTE - PRICE $4.95'},
                {item : '26. ICED MOCHA - PRICE $4.99'},
                {item : '27. ICED CHAI - PRICE $4.45'},
                {item : '28. ICED MYSTERY TRAIN - Hazelnut, vanilla, espresso, steamed milk and whip cream - PRICE $5.45'},
                {item : '29. ICED FUNKY MONKEY - Chocolate, banana syrup, espresso, steamed milk and whip cream - PRICE $5.45'},
                {item : '30. ICED CHOCOLATE DREAM - Orange syrup, chocolate, espresso, steamed milk and whip cream  - PRICE $5.45'},
                {item : '31. ICED WEET JANE -Caramel sauce, vanilla, espresso, steamed milk and whip cream  - PRICE $5.45'},
            ]
    },

    restaurant2: {
        name: 'TEST MENU - Ponchatoulas',
        latitude: 35.134220,
        longitude: -90.062950,
        address: '109 East Park Avenue, Ruston, Louisiana 71270',

        phone: '318-254-5200',
        hours1:'Monday and Saturday - 11:00 am to 2:00 am',
        hours2:'Sunday - 11:00 am to 8:00 pm',

        image:'la/images/ponchatoulas.png',

        site:'https://www.ponchatoulas.com/',
        facebook:'https://www.facebook.com/PonchatoulasRestaurant',
        instagram:'https://www.instagram.com/ponchatoulas/',

        caption:'Welcome to Ponchatoulas. House Specialty the Peacemaker Po Boy. Half hand battered shrimp and half hand battered oysters with mayo, lettuce and tomato on toasted French bread, $12.99. ',

        summary:'Ponchatoulas with a passion for good food and fun. Love this menu? Go to their Facebook links below and leave a message. Or talk to the manager and show him or her how their site works for you. Then how great this menu works.',

        bus:'Bus stops near the corner of North Mc Lean and North Parkway within walking distance. ',
        cab:'Easy cap drop off directly in front',



        heading:'12 APPETIZERS - $5.99 to $9.49',
        menuItems: [
            {item : '1. Seafood Gumbo - Gulf Shrimp and Blue crab in a dark roux sauce. House Specialty - PRICES cup $6.99 bowl $9.49 Add Fried Oysters $3.99 '},
            {item : '2. Filé Gumbo - Chicken and Andouille sausage sautéed with onions and peppers. House Specialty - PRICES  cup $5.99 bowl $7.99 '},
            {item : '3. Hand-Battered Mushrooms - Fresh, hand-battered button mushrooms with a side of homemade Ranch. House Specialty - PRICE $6.99'},
            {item : '4. Sampler Basket - Two fried Cheese Sticks, 2 Boudin Balls, 2 Meat Pies, Hand-battered Onion Rings and mushrooms. House Specialty - PRICES $9.49'},
            {item : '5. Fried Cheese Sticks - Six mozzarella Cheese Sticks with a side of homemade Ranch.  - PRICE $6.99'},
            {item : '6. Hand-Battered Pickles - Pickles hand battered with a side of homemade Ranch. House Specialty - PRICE $5.99'},
            {item : '7. Cheese Fries - Golden brown French fries covered with shredded jack and cheddar cheeses, bacon bits and green onion with a side of homemade Ranch. - PRICE $7.99 '},
            {item : '8. Onion Rings - Basket of hand-battered onion rings with a side of homemade Ranch. House Specialty - PRICE $5.99'},
            {item : '9. Mini Meat Pie Basket - Five pastry pillows stuffed with spicy pork and beef on a bed of fries with a side of homemade Ranch. - PRICE $7.99 '},
            {item : '10. Boneless Buffalo Wings - Skinless chicken tender bites dipped in Ponchatoulas’ wing sauce. Choose from Buffalo or Barbecue. House Specialty - PRICES $8.49'},
            {item : '11. Boudin Balls - Six hand-battered Boudin Balls with our homemade Remoulade sauce. House Specialty - PRICE $6.99'},
            {item : '12. Hand-Battered Green Tomatoes - With a side of our homemade Remoulade sauce.- PRICES $6.99'},
        ],
        heading:'6 SALADS ITEMS - $2.99 to $10.99',
        menuItems: [
            {item : '12 Dressings: Homemade Ranch,  Italian, Remoulade, House which is Garlic Onion Vinaigrette,  Bleu Cheese, Thousand Island, Honey Mustard, French, Fat Free Ranch, and Fat Free Italian, Tartar Sauce and Cocktail Sauce Extra dressing .99 cents'},
            {item : '1. Garden Salad - Iceberg and sprint mix lettuce with cherry tomatoes, shredded jack and cheddar cheese, black olives, bacon bits and seasoned croutons. - PRICE $7.99'},
            {item : '2. Chef Salad - Garden salad with ham, turkey and boiled eggs. - PRICE $9.99 '},
            {item : '3. Caesar Salad - Romaine lettuce, Parmesan cheese, black olives and seasoned croutons with our creamy Caesar dressing. - PRICE $7.99'},
            {item : '4. Pasta Salad - Rainbow rotini pasta in our creamy basil sauce topped with black olives and cherry tomatoes. House Specialty - PRICESSprinkled with Parmesan cheese. - PRICE $7.99'},
            {item : '5. Italian Chef Salad - Garden salad with Provolone cheese, Geona salami, ham, homemade muffaletta mix and boiled egg. House Specialty - PRICE $10.99'},
            {item : 'Add Chicken, Shrimp or Crawfish to any Above Salad  - Chicken: hand-battered or grilled, PRICE $2.99. Shrimp: hand-battered, grilled or boiled, PRICE $3.99. Crawfish: Hand-battered or grilled, PRICE $3.99. Atlantic Salmon, PRICE $7.99. Ham or Turkey, PRICE $2.99'},
            {item : '6. Side Salad - Garden, Pasta or Caesar salads - PRICE $2.99 '},

        ],
        heading:'5 MISC HEALTHY REQUESTS ITEMS - $4.99 to $15.99',
        menuItems: [
            {item : 'All entrees served with a side salad.'},
            {item : 'Substitute mixed vegetables for broccoli $1.00'},
            {item : '1. Atlantic Salmon with Vegetables - PRICE $15.99'},
            {item : '2. Grilled Chicken Breast with Vegetables - PRICE $10.99'},
            {item : '3. Grilled Catfish with Vegetables  - PRICE $13.99'},
            {item : '4. Grilled Shrimp with Vegetables  - PRICE $15.99'},
            {item : '5. Grilled Vegetables - PRICE  $4.99 '},
        ],
        heading:'9 FROM THE FRYER ITEMS - $13.99 to $21.99',
        menuItems: [
            {item : 'All meals listed below are cooked in Trans Fat Free Canola Oil.'},
            {item : '1. Seafood Platter - Hand-battered crawfish tails, butterflied shrimp, catfish, oysters, hushpuppies and your choice of French fries or hand-battered onion rings.  - PRICE $21.99'},
            {item : '2. Stuffed Catfish - Hand-battered catfish fillets stuffed with our homemade crawfish stuffing and covered in crawfish etouffee with a side of hushpuppies and your choice of French fries or hand-battered onion rings. House Specialty - PRICE $16.99'},
            {item : '3. Shrimp Platter - A dozen of butterflied shrimp lightly breaded and hand-battered with hushpuppies and your choice of French fries or hand-battered onion rings. House Specialty - PRICE $15.99'},
            {item : '4. Oyster Platter - Platter of oysters lightly breaded and hand-battered with hushpuppies and your choice of French fries or hand-battered onion rings. House Specialty - PRICE $17.99'},
            {item : '5. Catfish Platter - Platter of hand-battered catfish and hushpuppies with your choice of French fries or hand-battered onion rings.  - PRICE $13.99'},
            {item : '6. Crawfish Platter - Platter of hand-battered crawfish tails with hushpuppies and your choice of French fries or hand-battered onion rings. - PRICE $14.99'},
            {item : '7. Combination Platter - Choice of two: catfish, shrimp, crawfish tails, oysters or chicken strips. Includes your choice of French fries or hand-battered onion rings. - PRICE $16.99'},
            {item : '8. Ponchatoulas Sampler - Choice of one seafood: Shrimp, Catfish, Oysters, Crawfish Tails or Crab Cake. Choice of one entrée: Seafood Gumbo, File’ Gumbo, Étouffée or Red Beans and Rice. House Specialty - PRICE $14.99'},
            {item : '9. Chicken Strip Platter - Hand-battered chicken strips with your choice of French fries or hand-battered onion rings.  - PRICE $10.99'},
        ],
        heading:'6 ENTRÉES ITEMS - $9.99 to $16.99',
        menuItems: [
            {item : 'All entrees served with your choice of garden, pasta or Caesar salad.'},
            {item : 'Substitute fries for mixed vegetables $2.99 or broccoli $.3.99'},
            {item : '1. Crawfish Shirley - Crawfish tail meat sautéed in butter and green onions with a white wine and yellow cheese sauce. Tossed in fettuccini pasta. House Specialty - PRICE $16.99'},
            {item : '2. Red Beans and Rice - New Orleans’ style red beans, smoked sausage and grilled andouille sausage over steamed rice.House Specialty - PRICE $9.99'},
            {item : '3. Crawfish Étouffée - Crawfish tails smothered in onions, peppers and a creamy butter sauce over steamed rice. House Specialty - PRICE $12.99 Add hand-battered shrimp, crawfish or catfish $3.99'},
            {item : '4. Shrimp Creole - Browned tomatoes, onions and butterflied shrimp over steamed rice. - PRICE $13.99'},
            {item : '5. Hamburger Steak - Three quarter of a pound grilled, chopped steak with Debris gravy, sautéed onions, mushrooms and your choice of French fries, hand-battered onion rings or rice. House Specialty - PRICE $10.99 Add cheese $.89'},
            {item : '6. Santa Fe Chicken - Grilled chicken tenders smothered with sautéed onions, mushrooms, a blend of jack and cheddar cheeses and bacon bits with a side of cheese fries. - PRICE $12.99'},
        ],

        heading:'13 POBOYS and SANDWICHES ITEMS  - $8.99 to $16.99',
        menuItems: [
            {item : 'All seafood poboys served with chips or fries. All poboys and sandwiches below served on French bread, jalapeño cheddar, sourdough or hamburger bun with shredded lettuce, tomatoes, mayonnaise and mustard. Includes fries or a choice of regular or Cajun Zapps potato chips. Cheddar, American, Swiss, Pepperjack and Provolone cheese available.'},
            {item : '1. Shrimp Poboy - Hand-battered shrimp with mayo, lettuce and tomato on toasted French bread. House Specialty - PRICE $11.99 '},
            {item : '2. Crawfish Poboy - Fresh crawfish tails hand-battered with mayo, lettuce and tomato on toasted French bread. - PRICE $10.99 '},
            {item : '3. Peacemaker Poboy - Half hand battered shrimp and half hand battered oysters with mayo, lettuce and tomato on toasted French bread. House Specialty. - PRICE $12.99'},
            {item : '4. Catfish Poboy - Hand battered catfish filet with mayo, lettuce and tomato on toasted French bread. - PRICE $10.99'},
            {item : '5. Oyster Poboy - Hand-battered oysters with mayo, lettuce and tomato on toasted French bread. -  PRICES $13.99. Add cheese to any seafood poboy $1.00'},
            {item : '6. Sloppy Roast Beef Poboy - Seasoned, shredded roast beef with your choice of cheese on toasted French bread. House Specialty -  PRICE $11.99'},
            {item : '7. Turkey Poboy - Cajun-smoked turkey sliced thin with your choice of cheese on toasted French bread. - PRICES $8.99. Make It A Melt (sautéed mushroom and onion) served hot $9.99'},
            {item : '8. Ham Poboy - Applewood smoked ham sliced thin with your choice of cheese on toasted French bread. - PRICES  $8.99, Make It A Melt (sautéed mushroom and onion) served hot $9.99'},
            {item : '9. Club Poboy - Roast beef, Cajun-smoked turkey, ham and bacon sliced thin with your choice of cheese on toasted French bread. House Specialty - PRICES  $10.99, Make It A Melt (sautéed mushroom and onion) served hot $11.99 '},
            {item : '10. Andouille Poboy - Delicious grilled Andouille sausage on toasted French bread. - PRICES $8.99, Make It A Melt $9.99'},
            {item : '11. Chicken Sandwich - Skinless chicken breast tenders grilled or hand-battered with our special seasonings topped with your choice of cheese on a toasted bun. House Specialty - PRICES  $8.99, Add hickory smoked bacon $.99'},
            {item : '12. Cheeseburger - 1/3 pound hand-pattied, fresh, never frozen burger grilled with your choice of cheese on a toasted bun. - PRICES  $8.99, Add grilled onions or mushrooms $.99, Add hickory smoked bacon $.99'},
            {item : '13. Muffaletta - Genoa Salami, ham, Provolone cheese and our own homemade olive mix. House Specialty - PRICES half $9.99 whole $16.99'},
        ],
        heading:'2 DESSERT ITEMS - $4.99',
        menuItems: [
            {item : 'Both desserts come with choice of chocolate sauce, caramel sauce or praline bourbon sauce. '},
            {item : '1. White Chocolate Bread Pudding - Bread pudding covered with a sensational homemade pecan-praline bourbon sauce with Jack Daniels Tennessee Whiskey. House Specialty - PRICE $4.99'},
            {item : '2. New York Cheesecake - A slice of New York cheesecake covered with a sensational homemade pecan-praline bourbon sauce with Jack Daniels Tennessee Whiskey.  - PRICE $4.99'},


        ],
        heading:'5 BEVERAGE ITEMS - $1.99 to $2.75',
        menuItems: [
            {item : 'No refills on Abita Root Beer and Dasani bottled water.'},
            {item : '1. Sweet Tea, Unsweet Tea, Coke, Diet Coke, Coke Zero, Dr. Pepper, Diet Dr. Pepper, Sprite, Lemonade, and Mountain Blast POWERADE - PRICE $2.49'},
            {item : '2. Community Coffee  - PRICE $1.99'},
            {item : '3. Peach Tea: Sweet or Unsweet  - PRICE $2.89'},
            {item : '4. Abita Root Beer  - PRICE $2.75'},
            {item : '5. DASANI bottled water  - PRICE $2.75'},
        ],
    },

    // fish3: {
    //   name: "Sea Scallops",
    //   image: "/images/scallops.jpg",
    //   desc:
    //     "Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",
    //   price: 1684,
    //   status: "unavailable"
    // },

    // fish4: {
    //   name: "Mahi Mahi",
    //   image: "/images/mahi.jpg",
    //   desc:
    //     "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",
    //   price: 1129,
    //   status: "available"
    // },

    // fish5: {
    //   name: "King Crab",
    //   image: "/images/crab.jpg",
    //   desc:
    //     "Crack these open and enjoy them plain or with one of our cocktail sauces",
    //   price: 4234,
    //   status: "available"
    // },

    // fish6: {
    //   name: "Atlantic Salmon",
    //   image: "/images/salmon.jpg",
    //   desc:
    //     "This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",
    //   price: 1453,
    //   status: "available"
    // },

    // fish7: {
    //   name: "Oysters",
    //   image: "/images/oysters.jpg",
    //   desc: "A soft plump oyster with a sweet salty flavor and a clean finish.",
    //   price: 2543,
    //   status: "available"
    // },

    // fish8: {
    //   name: "Mussels",
    //   image: "/images/mussels.jpg",
    //   desc:
    //     "The best mussels from the Pacific Northwest with a full-flavored and complex taste.",
    //   price: 425,
    //   status: "available"
    // },

    // fish9: {
    //   name: "Jumbo Prawns",
    //   image: "/images/prawns.jpg",
    //   desc:
    //     "With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",
    //   price: 2250,
    //   status: "available"
    // }
  };

  export default restaurants;
