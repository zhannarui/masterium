import React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import MainHeader from "./components/MainHeader/MainHeader";
import './index.css'
import AboutUs from "./pages/AboutUs/AboutUs";
import BasketPage from "./pages/BasketPage/BasketPage";
import ContactPage from "./pages/ContactPage";
import Delivery from "./pages/Delivery/Delivery";
import FavoritePage from "./pages/FavoritePage";
import Home from "./pages/HomePage/Home";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage/UserPage";


const App = () => {
  let state = {
    homePage: {
      items: [
        {
          id: "13",
          img:"pumpkin-white-brown.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "30",
          img: "Elephant.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "6",
          img:"mint-stones.jpg",
          title: "Обучающие деревянные цветные камни",
          price: "1800",
          category: "wood",
          colors: [
            {id: 1, productId: 6, name: "Мятный", img: "mint-stones.jpg"},
            {id: 2, productId: 7, name: "Голубой", img: "blue-stones.jpg"},
            {id: 3, productId: 8, name: "Разноцветные темные", img: "brigth-stones.jpg"},
            {id: 4, productId: 9, name: "Розовые", img: "pink-stones.jpg"},
            {id: 5, productId: 10, name: "Разноцветные светлые", img: "light-stones.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "26",
          img:"yellow-bear.jpg",
          title: "Плюшевый мишка",
          price: "2000",
          category: "plush",
          colors: [
            {id: 1, productId: 26, name: "Жёлто белый", img: "yellow-bear.jpg"},
            {id: 2, productId: 27, name: "Голубой", img: "blue-bear.jpg"},
            {id: 3, productId: 28, name: "Жёлтый", img: "yellow-bear-2.jpg"}
          ],
          description: "Мягкие игрушки мишки пользуются большой популярностью среди взрослых и детей. Плюшевые мишки нашего магазина заинтересуют своей внешностью, качеством, маленьким размером. За счёт лёгкости наполнителя, плюшевого малыша можно брать его в дорогу маленькому путешественнику. Для создания игрушек используется только прочный и безопасный материал. Их баятельные мордашки  излучают море нежности и тепла. Для них не сложно найти местечко в доме или квартире.  Пушистый мех достаточно густой и одновременно мягкий, прикасаться к которому одно удовольствие. Надёжней друга, чем плюшевый мишка, Вам не найти."
        },
        {
          id: "4",
          img: "light-green-blocks.jpg",
          title: "Набор деревянных строительных блоков",
          price: "1200",
          category: "wood",
          colors: [
            {id: 1, productId: 1, name: "Голубой", img: "blue-blocks.jpg"},
            {id: 2, productId: 2, name: "Коричневый", img: "brown-blocks.jpg"},
            {id: 3, productId: 3, name: "Зеленый", img: "green-blocks.jpg"},
            {id: 4, productId: 4, name: "Салатовый", img: "light-green-blocks.jpg"},
            {id: 5, productId: 5, name: "Радужный", img: "rainbow-blocks.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "8",
          img:"brigth-stones.jpg",
          title: "Обучающие деревянные цветные камни",
          price: "1800",
          category: "wood",
          colors: [
            {id: 1, productId: 6, name: "Мятный", img: "mint-stones.jpg"},
            {id: 2, productId: 7, name: "Голубой", img: "blue-stones.jpg"},
            {id: 3, productId: 8, name: "Разноцветные темные", img: "brigth-stones.jpg"},
            {id: 4, productId: 9, name: "Розовые", img: "pink-stones.jpg"},
            {id: 5, productId: 10, name: "Разноцветные светлые", img: "light-stones.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "14",
          img:"pumpkin-orange.png",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "1",
          img: "blue-blocks.jpg",
          title: "Набор деревянных строительных блоков",
          price: "1200",
          category: "wood",
          colors: [
            {id: 1, productId: 1, name: "Голубой", img: "blue-blocks.jpg"},
            {id: 2, productId: 2, name: "Коричневый", img: "brown-blocks.jpg"},
            {id: 3, productId: 3, name: "Зеленый", img: "green-blocks.jpg"},
            {id: 4, productId: 4, name: "Салатовый", img: "light-green-blocks.jpg"},
            {id: 5, productId: 5, name: "Радужный", img: "rainbow-blocks.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "21",
          img:"green-constructor.jpg",
          title: "Детский деревянный конструктор",
          price: "1000",
          category: "wood",
          colors: [
            {id: 1, productId: 21, name: "Зеленый", img: "green-constructor.jpg" },
            {id: 2, productId: 22, name: "Розовый", img: "pink-constructor.jpg"},
            {id: 3, productId: 23, name: "Красный", img: "red-constructor.jpg"},
            {id: 4, productId: 24, name: "Серый", img: "grey-constructor.jpg"},
            {id: 5, productId: 25, name: "Бежевый", img: "beige-constructor.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "3",
          img: "green-blocks.jpg",
          title: "Набор деревянных строительных блоков",
          price: "1200",
          category: "wood",
          colors: [
            {id: 1, productId: 1, name: "Голубой", img: "blue-blocks.jpg"},
            {id: 2, productId: 2, name: "Коричневый", img: "brown-blocks.jpg"},
            {id: 3, productId: 3, name: "Зеленый", img: "green-blocks.jpg"},
            {id: 4, productId: 4, name: "Салатовый", img: "light-green-blocks.jpg"},
            {id: 5, productId: 5, name: "Радужный", img: "rainbow-blocks.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "36",
          img: "Truck-2.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "7",
          img:"blue-stones.jpg",
          title: "Обучающие деревянные цветные камни",
          price: "1800",
          category: "wood",
          colors: [
            {id: 1, productId: 6, name: "Мятный", img: "mint-stones.jpg"},
            {id: 2, productId: 7, name: "Голубой", img: "blue-stones.jpg"},
            {id: 3, productId: 8, name: "Разноцветные темные", img: "brigth-stones.jpg"},
            {id: 4, productId: 9, name: "Розовые", img: "pink-stones.jpg"},
            {id: 5, productId: 10, name: "Разноцветные светлые", img: "light-stones.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "12",
          img:"pumpkun-dark-green.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "5",
          img: "rainbow-blocks.jpg",
          title: "Набор деревянных строительных блоков",
          price: "1200",
          category: "wood",
          colors: [
            {id: 1, productId: 1, name: "Голубой", img: "blue-blocks.jpg"},
            {id: 2, productId: 2, name: "Коричневый", img: "brown-blocks.jpg"},
            {id: 3, productId: 3, name: "Зеленый", img: "green-blocks.jpg"},
            {id: 4, productId: 4, name: "Салатовый", img: "light-green-blocks.jpg"},
            {id: 5, productId: 5, name: "Радужный", img: "rainbow-blocks.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "19",
          img:"pumpkin-light-green.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "2",
          img: "brown-blocks.jpg",
          title: "Набор деревянных строительных блоков",
          price: "1200",
          category: "wood",
          colors: [
            {id: 1, productId: 1, name: "Голубой", img: "blue-blocks.jpg"},
            {id: 2, productId: 2, name: "Коричневый", img: "brown-blocks.jpg"},
            {id: 3, productId: 3, name: "Зеленый", img: "green-blocks.jpg"},
            {id: 4, productId: 4, name: "Салатовый", img: "light-green-blocks.jpg"},
            {id: 5, productId: 5, name: "Радужный", img: "rainbow-blocks.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "9",
          img:"pink-stones.jpg",
          title: "Обучающие деревянные цветные камни",
          price: "1800",
          category: "wood",
          colors: [
            {id: 1, productId: 6, name: "Мятный", img: "mint-stones.jpg"},
            {id: 2, productId: 7, name: "Голубой", img: "blue-stones.jpg"},
            {id: 3, productId: 8, name: "Разноцветные темные", img: "brigth-stones.jpg"},
            {id: 4, productId: 9, name: "Розовые", img: "pink-stones.jpg"},
            {id: 5, productId: 10, name: "Разноцветные светлые", img: "light-stones.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "35",
          img: "Truck.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "10",
          img:"light-stones.jpg",
          title: "Обучающие деревянные цветные камни",
          price: "1800",
          category: "wood",
          colors: [
            {id: 1, productId: 6, name: "Мятный", img: "mint-stones.jpg"},
            {id: 2, productId: 7, name: "Голубой", img: "blue-stones.jpg"},
            {id: 3, productId: 8, name: "Разноцветные темные", img: "brigth-stones.jpg"},
            {id: 4, productId: 9, name: "Розовые", img: "pink-stones.jpg"},
            {id: 5, productId: 10, name: "Разноцветные светлые", img: "light-stones.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "34",
          img: "bus.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "15",
          img:"pumpkin-brown.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "22",
          img:"pink-constructor.jpg",
          title: "Детский деревянный конструктор",
          price: "1000",
          category: "wood",
          colors: [
            {id: 1, productId: 21, name: "Зеленый", img: "green-constructor.jpg" },
            {id: 2, productId: 22, name: "Розовый", img: "pink-constructor.jpg"},
            {id: 3, productId: 23, name: "Красный", img: "red-constructor.jpg"},
            {id: 4, productId: 24, name: "Серый", img: "grey-constructor.jpg"},
            {id: 5, productId: 25, name: "Бежевый", img: "beige-constructor.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "16",
          img:"pumpkin-blue.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "18",
          img:"pumpkin-red.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "31",
          img: "Dinosaur.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "20",
          img:"pumpkin-rose-purple.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "23",
          img:"red-constructor.jpg",
          title: "Детский деревянный конструктор",
          price: "1000",
          category: "wood",
          colors: [
            {id: 1, productId: 21, name: "Зеленый", img: "green-constructor.jpg" },
            {id: 2, productId: 22, name: "Розовый", img: "pink-constructor.jpg"},
            {id: 3, productId: 23, name: "Красный", img: "red-constructor.jpg"},
            {id: 4, productId: 24, name: "Серый", img: "grey-constructor.jpg"},
            {id: 5, productId: 25, name: "Бежевый", img: "beige-constructor.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "32",
          img: "car-2.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "11",
          img:"pumpkin-yellow.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "24",
          img:"grey-constructor.jpg",
          title: "Детский деревянный конструктор",
          price: "1000",
          category: "wood",
          colors: [
            {id: 1, productId: 21, name: "Зеленый", img: "green-constructor.jpg" },
            {id: 2, productId: 22, name: "Розовый", img: "pink-constructor.jpg"},
            {id: 3, productId: 23, name: "Красный", img: "red-constructor.jpg"},
            {id: 4, productId: 24, name: "Серый", img: "grey-constructor.jpg"},
            {id: 5, productId: 25, name: "Бежевый", img: "beige-constructor.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "27",
          img:"blue-bear.jpg",
          title: "Плюшевый мишка",
          price: "2000",
          category: "plush",
          colors: [
            {id: 1, productId: 26, name: "Жёлто белый", img: "yellow-bear.jpg"},
            {id: 2, productId: 27, name: "Голубой", img: "blue-bear.jpg"},
            {id: 3, productId: 28, name: "Жёлтый", img: "yellow-bear-2.jpg"}
          ],
          description: "Мягкие игрушки мишки пользуются большой популярностью среди взрослых и детей. Плюшевые мишки нашего магазина заинтересуют своей внешностью, качеством, маленьким размером. За счёт лёгкости наполнителя, плюшевого малыша можно брать его в дорогу маленькому путешественнику. Для создания игрушек используется только прочный и безопасный материал. Их баятельные мордашки  излучают море нежности и тепла. Для них не сложно найти местечко в доме или квартире.  Пушистый мех достаточно густой и одновременно мягкий, прикасаться к которому одно удовольствие. Надёжней друга, чем плюшевый мишка, Вам не найти."
        },
        {
          id: "25",
          img:"beige-constructor.jpg",
          title: "Детский деревянный конструктор",
          price: "1000",
          category: "wood",
          colors: [
            {id: 1, productId: 21, name: "Зеленый", img: "green-constructor.jpg" },
            {id: 2, productId: 22, name: "Розовый", img: "pink-constructor.jpg"},
            {id: 3, productId: 23, name: "Красный", img: "red-constructor.jpg"},
            {id: 4, productId: 24, name: "Серый", img: "grey-constructor.jpg"},
            {id: 5, productId: 25, name: "Бежевый", img: "beige-constructor.jpg"}
          ],
          description: "Такие игрушки учат концентрировать свое внимание на деталях, а также развивают навыки осмысливания, ведь в отличие от высокотехнологических игрушек, разработанных так, что они отвлекают, а иногда даже раздражают ребенка, оказывая на него сильное эмоциональное воздействие. Ничто так не поможет развитию мелкой моторики вашего ребенка, как игры в деревянные камни, блоки, сбор конструкторов."
        },
        {
          id: "28",
          img:"yellow-bear-2.jpg",
          title: "Плюшевый мишка",
          price: "2000",
          category: "plush",
          colors: [
            {id: 1, productId: 26, name: "Жёлто белый", img: "yellow-bear.jpg"},
            {id: 2, productId: 27, name: "Голубой", img: "blue-bear.jpg"},
            {id: 3, productId: 28, name: "Жёлтый", img: "yellow-bear-2.jpg"}
          ],
          description: "Мягкие игрушки мишки пользуются большой популярностью среди взрослых и детей. Плюшевые мишки нашего магазина заинтересуют своей внешностью, качеством, маленьким размером. За счёт лёгкости наполнителя, плюшевого малыша можно брать его в дорогу маленькому путешественнику. Для создания игрушек используется только прочный и безопасный материал. Их баятельные мордашки  излучают море нежности и тепла. Для них не сложно найти местечко в доме или квартире.  Пушистый мех достаточно густой и одновременно мягкий, прикасаться к которому одно удовольствие. Надёжней друга, чем плюшевый мишка, Вам не найти."
        },
        {
          id: "29",
          img: "Hedgehog.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
        {
          id: "17",
          img:"pumpkin-white-green.jpg",
          title: "Плюшевая игрушка в форме тыквы",
          price: "800",
          category: "plush",
          colors:[
            {id: 1, productId: 11, name: "Желтый", img: "pumpkin-yellow.jpg" },
            {id: 2, productId: 12, name: "Тёмно зеленый", img: "pumpkun-dark-green.jpg"},
            {id: 3, productId: 13, name: "Бело коричневый", img: "pumpkin-white-brown.jpg"},
            {id: 4, productId: 14, name: "Оранжевый", img: "pumpkin-orange.png"},
            {id: 5, productId: 15, name: "Коричневый", img: "pumpkin-brown.jpg"},
            {id: 6, productId: 16, name: "Синий", img: "pumpkin-blue.jpg"},
            {id: 7, productId: 17, name: "Бело зеленый", img: "pumpkin-white-green.jpg"},
            {id: 8, productId: 18, name: "Красный", img: "pumpkin-red.jpg"},
            {id: 9, productId: 19, name: "Светло зеленый", img: "pumpkin-light-green.jpg"},
            {id: 10, productId: 20, name: "Пыльная роза", img: "pumpkin-rose-purple.jpg"},
          ],
          description: "Это уникальная игрушка, которая понравится не только детям, но и взрослым. Она точно копирует внешний вид настоящего овоща, а фактурная поверхность и ручное раскрашивание делают каждую фигурку уникальной. Если вашему ребенку нравятся овощи, а в частности тыквы - он будет в полном восторге от такой игрушки! Но реалистичные фигурки предметов пользуются популярностью не только в сюжетных играх у детей - взрослые с удовольствием используют их для обустраивания интерьера помещений."
        },
        {
          id: "33",
          img: "car-3.jpg",
          title: "Детский игрушечный автомобиль",
          price: "2000",
          category: "wood",
          colors: [
            {id: 1, productId: 29, name: "Ёж", img: "Hedgehog.jpg"},
            {id: 2, productId: 30, name: "Слон", img: "Elephant.jpg"},
            {id: 3, productId: 31, name: "Динозавр", img: "Dinosaur.jpg"},
            {id: 4, productId: 32, name: "Большая машина", img: "car-2.jpg"},
            {id: 5, productId: 33, name: "Маленькая машина", img: "car-3.jpg"},
            {id: 6, productId: 34, name: "Автобус", img: "bus.jpg"},
            {id: 7, productId: 35, name: "Маленький трактор", img: "Truck.jpg"},
            {id: 8, productId: 36, name: "Большой трактор", img: "Truck-2.jpg"},
          ],
          description: "Простота этой деревянной игрушки развивает воображение вашего  ребенка, вдохновляя придумывать разные сюжеты и сценарии игр. Так как игрушка цельная, а нк состоящая из нескольких частей, то она не будет разбросана по всему дому."
        },
      ],
      categories: [
        {
            key: 'plush',
            name: 'Плюш'
        },
        {
            key: 'wood',
            name: 'Дерево'
        },
    ],
      currentItems: []
    },
    contactPage: {
      contacts: [
        {
          id: "1",
          title: "по телефону",
          img: "phone.svg",
          link: "+7 (921) 555-76-15 с 10:00 до 18:00 ежедневно по Московскому времени;"
        },
        {
          id: "2",
          title: "в WhatsApp",
          img: "WhatsApp.svg",
          link: "+7 (921) 555-76-15"
        },
        {
          id: "3",
          title: "в Telegram",
          img: "telegram.svg",
          link: "masterium"
        },
        {
          id: "3",
          title: "по электронной почте",
          img: "mail.svg",
          link: "orders@masterium.ru"
        }
      ]
    },
    favorites: [],
  }
  state.homePage.currentItems = state.homePage.items;
  // addToFavorites(item){
  // this.setState({ favorites: [...this.state.favorites, item]}, ()=>{
  //   console.log(this.state.favorites)
  // })
  // }
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Home state={state.homePage}/>}/>
        <Route path='/:categoryType' element={<Home state={state.homePage}/>}/>
        <Route path='/Contact' element={<ContactPage state={state.contactPage}/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
        <Route path='/FavoritePage' element={<FavoritePage/>}/>
        <Route path='/BasketPage' element={<BasketPage/>}/>
        <Route path='/ProductPage/:id' element={<ProductPage state={state.homePage}/>}/>
        <Route path='/UserPage' element={<UserPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;


