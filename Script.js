const chooseRandomAnimalName = [
    'Time', 'Past', 'Future', 'Dev', 'Manish',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 
  'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey',
   'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox',"Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
];
let TotalChances = 0

const hangstandChildren = document.querySelector(".hangstand").children;
// console.log(hangstandChildren)

for (let index = 0; index < hangstandChildren.length; index++) {
  const Aelement = hangstandChildren[index];
  Aelement.classList.add("displayNone")
  // console.log(Aelement)
}
let RandomAnimalName = null;
let CheckStatusGlobal = 0 ; // check each word with the string letters 

function getRandomNumber(min, max) {
    return Math.trunc(Math.random()*(max - min )  + min);                  //trunc can generate a random value from a number 
  }

  
function giveMeButtonsOnScreen(){
    const rootEl = document.querySelector(".button");
   let buttonsDataArray = Array(26).fill(null);
   let i = 65;

   buttonsDataArray = buttonsDataArray.map((value) => {
    return String.fromCharCode(i++);
   });
  
   buttonsDataArray.forEach(el => {
    const btn = document.createElement("button");
    btn.textContent = el;
    rootEl.appendChild(btn);            // for attaching it to the root element 
   })
  //  console.log(buttonsDataArray);
}

function AnimalName(){

  const fillBlanksEl = document.querySelector(".fill-Blanks");
  const RandomNumber =  getRandomNumber(0, chooseRandomAnimalName.length);
  RandomAnimalName = chooseRandomAnimalName[RandomNumber].toLocaleUpperCase();
  console.log(RandomAnimalName);

  for (let index = 0; index < RandomAnimalName.length; index++) {
    const element = RandomAnimalName[index];       // jitni baar loop chalegi utni baar new element create hoga 
    const Alpha = document.createElement("p");
    const para = document.createElement("span");
    para.textContent = element;
    Alpha.appendChild(para);
    fillBlanksEl.appendChild(Alpha);
  }
}
giveMeButtonsOnScreen();

AnimalName();



const buttonEl = document.querySelector(".button");
// console.log(buttonEl)

//using js feature of creating func outside and use its reference 

const myfunc = function(e){
  let CheckStatus = 0;

  if(e.target.textContent.length === 1){
    const letterclick = e.target.textContent;
     
  const getLettersEl = document.getElementsByTagName("span");
  console.log(RandomAnimalName)
  // console.log(letterclick)

   for (let index = 0; index < getLettersEl.length; index++) {
    const spanEl = getLettersEl[index];

    if(letterclick == spanEl.textContent){
      spanEl.parentElement.textContent = letterclick;
      CheckStatus++;
      CheckStatusGlobal++;
    }
    }
    if (CheckStatus != 0  && RandomAnimalName.includes(letterclick)) {
      e.target.classList.add("availablebtn");
   }else {
    TotalChances++;
      // console.log(TotalChances)
      //  const ElementToRemoveClass = document.querySelector(`.class-${TotalChances}`)
      // console.log(ElementToRemoveClass)
      // ElementToRemoveClass.classList.remove("displayNone")

      e.target.classList.add("notavailablebtn");
      
   }
   
    e.target.setAttribute("disabled" , "disabled");
  
  
  // console.log(RandomAnimalName.indexOf(letterclick));
  // console.log(getLettersEl)
  // console.log(letterclick)
  // console.log(RandomAnimalName)
  }else{
    alert("Click on a Button First 👇")
  }

  if(TotalChances == 10){
    alert(" You Lost The Game 😭")
    location.reload()
  }

  if (CheckStatusGlobal == RandomAnimalName.length) {
    alert("You Won The Game 😁")
    location.reload()
  }
  console.log(CheckStatus)
};
buttonEl.addEventListener("click", myfunc);
