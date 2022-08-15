//MockData
import dress from "../../assets/clothes/dress.jpg";
import jacket from "../../assets/clothes/jacket.jpg";
import shirt from "../../assets/clothes/shirt.jpg";
import skirt from "../../assets/clothes/skirt.jpg";
import swimming_costume from "../../assets/clothes/swimming_costume.png";
import jeans from "../../assets/clothes/jeans.jpg";
import sleepwear from "../../assets/clothes/sleepwear.PNG";
import tshirt from "../../assets/clothes/tshirt.jpg";
import shorts from "../../assets/clothes/shorts.jpg";
import heels from "../../assets/clothes/heels.jpg";

//misc
import ring from "../../assets/clothes/ring.jpg";
import bracelet from "../../assets/clothes/bracelet.jpg";
import earring from "../../assets/clothes/earring.jpg";
import necklace from "../../assets/clothes/necklace.jpg";
import makeup from "../../assets/clothes/makeup.jpg";
import adaptor from "../../assets/clothes/adaptor.jpg";
import laptop from "../../assets/clothes/laptop.jpg";
import passport from "../../assets/clothes/passport.jpg";
import creditCard from "../../assets/clothes/creditCard.jpg";
import backpack from "../../assets/clothes/backpack.jpg";
import beach_ball from "../../assets/clothes/beach_ball.jpg";
import beach_goggles from "../../assets/clothes/beach_goggles.jpg";
import bottle from "../../assets/clothes/bottle.jpg";
import bug_spray from "../../assets/clothes/bug_spray.png";
import camping_chair from "../../assets/clothes/camping_chair.jpg";
import camping_cookware from "../../assets/clothes/camping_cookware.png";
import climbing_gear from "../../assets/clothes/climbing_gear.png";
import climbing_rope from "../../assets/clothes/climbing_rope.jpg";
import energy_bar from "../../assets/clothes/energy_bar.jpg";
import first_aid_kit from "../../assets/clothes/first_aid_kit.jpg";
import hammock from "../../assets/clothes/hammock.png";
import heriatage_camera from "../../assets/clothes/heriatage_camera.jpg";
import heriatage_journal from "../../assets/clothes/heriatage_journal.jpg";
import heritage_backpack_notebook from "../../assets/clothes/heritage_backpack_notebook.jpg";
import hiking_stick from "../../assets/clothes/hiking_stick.jpg";

//shoes
import boots from "../../assets/clothes/boots.jpg";
import shoes from "../../assets/clothes/shoes.jpg";
import flipFlops from "../../assets/clothes/flip-flop.jpg";
import sandals from "../../assets/clothes/sandals.jpg";
import hat from "../../assets/clothes/hat.jpg";

// Toiletery
import shampoo from "../../assets/clothes/shampoo.jpg";
import soap from "../../assets/clothes/soap.jpg";
import towel from "../../assets/clothes/towel.jpg";
import sunscreen from "../../assets/clothes/sunscreen.jpg";
import toothpaste from "../../assets/clothes/toothpaste.jpg";
import mouthwash from "../../assets/clothes/mouthwash.jpg";
export const imgData = [
  {
    name: "Dress",
    image: dress,
  },
  {
    name: "Sleepwear",
    image: sleepwear,
  },
  {
    name: "Jacket",
    image: jacket,
  },
  {
    name: "Shirt",
    image: shirt,
  },
  {
    name: "Jeans",
    image: jeans,
  },
  {
    name: "T-shirt",
    image: tshirt,
  },
  {
    name: "Skirt",
    image: skirt,
  },
  {
    name: "Shorts",
    image: shorts,
  },
  {
    name: "Swimming Wear",
    image: swimming_costume,
  },
  {
    name: "Flip Flops",
    image: flipFlops,
  },
  {
    name: "Boots",
    image: boots,
  },
  {
    name: "Shoes",
    image: shoes,
  },
  {
    name: "Heels",
    image: heels,
  },
  {
    name: "Sandals",
    image: sandals,
  },
  {
    name: "Soap",
    image: soap,
  },
  {
    name: "Shampoo",
    image: shampoo,
  },
  {
    name: "Towel",
    image: towel,
  },
  {
    name: "Sunscreen",
    image: sunscreen,
  },
  {
    name: "Toothpaste",
    image: toothpaste,
  },
  {
    name: "Mouthwash",
    image: mouthwash,
  },
  {
    name: "Hat",
    image: hat,
  },
  {
    name: "Ring",
    image: ring,
  },
  {
    name: "Earring",
    image: earring,
  },
  {
    name: "Credit/Debit Card",
    image: creditCard,
  },
  {
    name: "Bracelet",
    image: bracelet,
  },
  {
    name: "Make Up Kit",
    image: makeup,
  },
  {
    name: "Adaptor",
    image: adaptor,
  },
  {
    name: "Laptop",
    image: laptop,
  },
  {
    name: "Necklace",
    image: necklace,
  },
  {
    name: "Passport & Tickets",
    image: passport,
  },
  {
    name: "Backpack",
    image: backpack,
  },
  {
    name: "Beach Ball",
    image: beach_ball,
  },
  {
    name: "Beach Goggles",
    image: beach_goggles,
  },
  {
    name: "Bottle",
    image: bottle,
  },
  {
    name: "Bug Spray",
    image: bug_spray,
  },
  {
    name: "Camping Chair",
    image: camping_chair,
  },
  {
    name: "Cookware",
    image: camping_cookware,
  },
  {
    name: "Climbing Gear",
    image: climbing_gear,
  },
  {
    name: "Climbing Rope",
    image: climbing_rope,
  },
  {
    name: "Energy Bar",
    image: energy_bar,
  },
  {
    name: "First Aid Kit",
    image: first_aid_kit,
  },
  {
    name: "Hammock",
    image: hammock,
  },
  {
    name: "Heritage Camera",
    image: heriatage_camera,
  },
  {
    name: "Heritage Journal",
    image: heriatage_journal,
  },
  {
    name: "Notebook",
    image: heritage_backpack_notebook,
  },
  {
    name: "Hiking Stick",
    image: hiking_stick,
  },
];

/**
 * Author: Trushita Maurya
 * Description: Filter Options
 */
export const filterProperties = [
  {
    filterTitle: "Activites",
    key: "ACT",
    filterProperties: [
      {
        property: "hiking",
        key: "hiking",
      },
      {
        property: "camping",
        key: "camping",
      },
      {
        property: "climbing",
        key: "climbing",
      },
    ],
  },
  {
    filterTitle: "Destination Type",
    key: "destination",
    filterProperties: [
      {
        property: "beach",
        key: "beach",
      },
      {
        property: "heritage",
        key: "heritage",
      },
      {
        property: "mountains",
        key: "mountains",
      },
    ],
  },
];
