export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function playerShuffle() {
  const players = [
    "Jordan",
    "Jereme",
    "Marty",
    "Yogesh",
    "Steve",
    "Ian",
    "Josh",
    "Russ",
    "Alex",
    "Beckett",
    "Reehana"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(players)}-${rando(players)}`;
}

//CALCULATE DISTANCE
const distanceCalc = (lat1, lon1, lat2, lon2) => {
  let radlat1 = Math.PI * lat1/180;
  let radlat2 = Math.PI * lat2/180;
  let radlon1 = Math.PI * lon1/180;
  let radlon2 = Math.PI * lon2/180;
  let theta = lon1 - lon2;
  let radtheta = Math.PI * theta/180;
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  // RETURNS DISTANCE IN KILOMETERS
  return dist * 1.609344;
}

// RETURN THE RESTAURANT WITH THE SHORTEST DIST
// NEED TO ACCESS STATE FOR RESTAURANTS
// let myRestaurants = restaurants.map((restaurant, min) => {
//   let distance = distanceCalc(userLocation.latitude, userLocation.longitude, restaurant.latitude, restaurant.longitude);
//   restaurant.distance = distance;
// return restaurant;
// });

// var shortestDistance = Math.min(...myRestaurants.map(r => r.distance));

// var closestRestaurant = myRestaurants.find(restaurant => {
//   return restaurant.distance === shortestDistance;
// });
