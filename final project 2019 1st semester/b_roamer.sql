-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 21 2019 г., 12:02
-- Версия сервера: 10.4.10-MariaDB
-- Версия PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `b_roamer`
--

-- --------------------------------------------------------

--
-- Структура таблицы `collectionitems`
--

CREATE TABLE `collectionitems` (
  `id` int(11) NOT NULL,
  `collectionId` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `collectionitems`
--

INSERT INTO `collectionitems` (`id`, `collectionId`, `img`, `description`) VALUES
(1, 1, 'colors 1.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(2, 1, 'colors 2.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(3, 1, 'colors 3.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(4, 1, 'rustem-baltiyev-DAZaHleLYCA-unsplash.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(5, 1, 'rustem-baltiyev-jGMN_-vnMNU-unsplash.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(6, 1, 'rustem-baltiyev-UHpUi0eBEp8-unsplash.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(7, 1, 'rustem-baltiyev-yQFVSHIZJas-unsplash.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(8, 2, 'to the sky 2.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(9, 2, 'to the sky 1.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(10, 2, 'to the sky 3.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(11, 2, 'smores_sky.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(12, 2, 'nyc_tower sky.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(13, 2, 'nyc_cloud.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(14, 3, 'humane 1.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(15, 3, 'humane 2.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(16, 3, 'humane 3.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(17, 3, 'philly_homeless.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(18, 3, 'philly_girl in bazar.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(19, 3, 'nyc_nicole.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(20, 0, 'IMG_3354.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(21, 0, 'IMG_3609.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(22, 0, 'IMG_3742.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(23, 0, 'IMG_3907.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(24, 0, 'IMG_3908.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(25, 0, 'IMG_4236.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!'),
(26, 0, 'IMG_4302.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!');

-- --------------------------------------------------------

--
-- Структура таблицы `collections`
--

CREATE TABLE `collections` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `collections`
--

INSERT INTO `collections` (`id`, `name`, `description`) VALUES
(1, 'COLORS', 'The beauty of our loved ones that sings in an inefable harmony with the World\'s colors.'),
(2, 'TO THE SKY', 'The desire to fly like a bird and see just how little we are in comparison with the grandeur of our World inspired me to create this collection.'),
(3, 'HUMANE', 'The variety of human emotions and the spectrum of out empathy is what really defines us as human beings.'),
(4, 'NEW Collection', 'awdawd');

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `events`
--

INSERT INTO `events` (`id`, `name`, `description`) VALUES
(1, 'FIRST EVER FAN MEETUP IN ALMATY', 'Rustem Baltiyev has annouced the very first fan meetup in his hometown. The venue is yet to specified, but it is speculated that it is going to be held in the business-incubator \'SmartPoint\'. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, dolore? Aspernatur, molestiae assumenda. Rerum, iste eligendi? Obcaecati consequatur porro, dolorum adipisci ab ad hic fuga! Dolores voluptatum voluptates porro natus.'),
(2, 'THE LONG AWAITED EXHIBITION IS HERE', 'The gallery finally opened the doors to the Rustem Baltiyev\'s exhibition that contains the highlights of his carreer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reiciendis tenetur fuga? Nisi dignissimos dolorem earum neque obcaecati laborum nesciunt maiores velit minima. Vel veritatis fugit ut consectetur voluptatibus quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium ad ullam nemo iure fuga alias delectus, deleniti quasi nihil veritatis! Natus harum perferendis esse maiores? Eius eos aspernatur natus.'),
(3, 'UNSPLASH AWARDS HAS CHOSEN 3 OUT OF 5 PHOTOS OF RB', 'The most recent event that took place in the headquarters of Unsplash set yet another milestone for the works of Rustem Baltiyev. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident sint ut adipisci quo? Laboriosam assumenda minus possimus delectus, debitis ea culpa aut praesentium, quo vel reiciendis. Tenetur, delectus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus ipsum? Odio quo debitis explicabo dignissimos temporibus voluptas ut dolore consequuntur, quibusdam expedita sunt vitae sequi nam officiis reiciendis facilis.'),
(4, 'YOU CAN FINALLY BUY THE QUALITY PRINTS OF RB\'S COLLECTIONS', 'This website is made for the fans of RB\'s work who wanted to acquire copies of his art. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam quaerat laudantium ab dignissimos consequuntur esse nemo distinctio, voluptatem labore, quidem voluptas ipsam vitae ad suscipit eius aperiam neque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis minima explicabo ducimus obcaecati, sint ad ipsam cumque, unde omnis cupiditate possimus eius nesciunt nemo temporibus inventore accusamus. Aperiam, at.');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `collectionitems`
--
ALTER TABLE `collectionitems`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `collectionitems`
--
ALTER TABLE `collectionitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT для таблицы `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
