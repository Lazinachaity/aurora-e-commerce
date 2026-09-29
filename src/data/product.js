import coffeeSet from "../assets/product/coffee-set.jpg"
import dailyCrossbody from "../assets/product/daily-crossbody.jpg"
import deskLamp from "../assets/product/desk-lamp.jpg"
import everydayBagWoman from "../assets/product/everyday-bag-woman.jpg"
import everydayBag from "../assets/product/everyday-bag.jpg"
import servingBowl from "../assets/product/serving-bowl.jpg"
import wirelessHeadphones from "../assets/product/wireless-headphones.jpg"

const products = [
 {
  id: 1,
  name: "Everyday Carry Bag",
  category: "Lifestyle",
  price: 68,
  image: everydayBag,
  images: [everydayBag, everydayBagWoman],
  description:
    "A structured everyday bag designed for work, travel, and everything in between.",
},
  {
    id: 2,
    name: "Minimal Desk Lamp",
    category: "Home",
    price: 84,
    image: deskLamp,
    images: [deskLamp],
    description:
      "A clean, understated desk lamp designed to bring warm light to your workspace.",
  },
  {
    id: 3,
    name: "Ceramic Coffee Set",
    category: "Home",
    price: 42,
    image: coffeeSet,
    images: [coffeeSet],
    description:
      "A refined ceramic set made for slow mornings and everyday coffee rituals.",
  },
  {
    id: 4,
    name: "Daily Crossbody",
    category: "Lifestyle",
    price: 56,
    image: dailyCrossbody,
    images: [dailyCrossbody],
    description:
      "A compact crossbody designed to carry the essentials without unnecessary bulk.",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Tech",
    price: 129,
    image: wirelessHeadphones,
    images: [wirelessHeadphones],
    description:
      "Comfortable wireless headphones built for focused work and everyday listening.",
  },
  {
    id: 6,
    name: "Stoneware Serving Bowl",
    category: "Home",
    price: 38,
    image: servingBowl,
    images: [servingBowl],
    description:
      "A simple serving bowl with a natural finish that works beautifully on any table.",
  },
]

export default products