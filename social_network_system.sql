-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 23, 2022 at 10:05 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social_network_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment_reply`
--

CREATE TABLE `comment_reply` (
  `comment_reply_id` bigint(20) NOT NULL,
  `date_reply` date NOT NULL,
  `reply` varchar(255) NOT NULL,
  `post_comment_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment_reply`
--

INSERT INTO `comment_reply` (`comment_reply_id`, `date_reply`, `reply`, `post_comment_id`, `user_id`) VALUES
(1, '2022-12-16', 'test reply ??', 4, 7),
(4, '2022-12-16', 'test reply', 8, 7);

-- --------------------------------------------------------

--
-- Table structure for table `conversation`
--

CREATE TABLE `conversation` (
  `c_id` int(11) NOT NULL,
  `user_one` bigint(11) NOT NULL,
  `user_two` bigint(11) NOT NULL,
  `time` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conversation`
--

INSERT INTO `conversation` (`c_id`, `user_one`, `user_two`, `time`, `status`) VALUES
(1, 2, 3, '2022-12-19', 0),
(2, 2, 7, '2022-12-19', 0);

-- --------------------------------------------------------

--
-- Table structure for table `conversation_reply`
--

CREATE TABLE `conversation_reply` (
  `cr_id` int(11) NOT NULL,
  `reply` text DEFAULT NULL,
  `user_id_fk` bigint(11) NOT NULL,
  `time` datetime NOT NULL,
  `c_id_fk` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conversation_reply`
--

INSERT INTO `conversation_reply` (`cr_id`, `reply`, `user_id_fk`, `time`, `c_id_fk`, `status`) VALUES
(1, 'Hello', 3, '2022-12-19 05:00:00', 1, 1),
(3, 'Are you free?', 3, '2022-12-19 07:00:00', 1, 1),
(4, 'Let\'s handout', 3, '2022-12-19 08:00:00', 1, 1),
(5, 'Hello friend', 7, '2022-12-19 05:00:00', 2, 1),
(11, 'Okay why not ?', 2, '2022-12-20 21:55:50', 1, 1),
(12, 'Hi', 2, '2022-12-20 22:14:15', 2, 1),
(13, 'When?', 3, '2022-12-20 22:27:15', 1, 1),
(14, 'i dont know', 2, '2022-12-21 13:39:31', 1, 1),
(15, 'are u free', 3, '2022-12-22 13:08:46', 1, 1),
(16, 'nope', 2, '2022-12-22 13:08:52', 1, 1),
(17, 'let hang out', 2, '2022-12-22 13:09:48', 1, 1),
(18, 'nope', 3, '2022-12-22 13:09:55', 1, 1),
(19, 'nope your mom', 2, '2022-12-22 13:10:02', 1, 1),
(20, 'tao pro vcl ', 3, '2022-12-22 13:11:39', 1, 1),
(21, 'may la nhat roi men', 2, '2022-12-22 13:11:48', 1, 1),
(23, 'what', 3, '2022-12-22 13:17:55', 1, 1),
(24, 'what', 2, '2022-12-22 13:25:52', 2, 1),
(25, 'sup', 7, '2022-12-22 13:26:05', 2, 1),
(28, 'are you free', 7, '2022-12-22 13:26:43', 2, 1),
(29, 'not now', 2, '2022-12-22 13:26:46', 2, 1),
(30, 'i see', 7, '2022-12-22 13:27:04', 2, 1),
(185, 'hi', 3, '2022-12-23 16:01:52', 1, 1),
(186, 'are you free', 3, '2022-12-23 16:01:55', 1, 1),
(187, 'nope', 2, '2022-12-23 16:01:58', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `follow_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_id_follower` int(11) NOT NULL,
  `date_follow` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`follow_id`, `user_id`, `user_id_follower`, `date_follow`) VALUES
(1, 3, 2, '2022-12-16'),
(2, 3, 4, '2022-12-16'),
(3, 2, 6, '2022-12-16'),
(4, 2, 7, '2022-12-16'),
(5, 3, 6, '2022-12-16'),
(6, 6, 2, '2022-12-16');

-- --------------------------------------------------------

--
-- Table structure for table `friendship`
--

CREATE TABLE `friendship` (
  `friendship_id` int(11) NOT NULL,
  `user_id_1` int(11) NOT NULL,
  `user_id_2` int(11) NOT NULL,
  `status_id` tinyint(4) NOT NULL,
  `date_addfriend` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `friendship`
--

INSERT INTO `friendship` (`friendship_id`, `user_id_1`, `user_id_2`, `status_id`, `date_addfriend`) VALUES
(1, 7, 17, 2, NULL),
(3, 7, 19, 2, NULL),
(4, 7, 20, 2, NULL),
(6, 17, 20, 2, '2022-12-17'),
(8, 7, 21, 1, NULL),
(9, 21, 20, 1, NULL),
(10, 17, 21, 2, NULL),
(13, 21, 22, 2, '2022-12-19'),
(22, 20, 19, 2, '2022-12-19'),
(24, 22, 17, 2, '2022-12-20'),
(25, 22, 19, 1, '2022-12-20'),
(26, 17, 19, 1, '2022-12-20'),
(27, 17, 8, 1, '2022-12-23'),
(28, 2, 7, 2, '2022-12-23');

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `group_id` bigint(20) NOT NULL,
  `created_date` date NOT NULL,
  `group_about` varchar(50) NOT NULL,
  `group_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`group_id`, `created_date`, `group_about`, `group_name`) VALUES
(1, '2022-12-15', '...', 'Nhóm 1'),
(2, '2022-12-15', '...', 'Nhóm 2'),
(3, '2022-12-16', '...', 'Nhóm 3');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(88);

-- --------------------------------------------------------

--
-- Table structure for table `joinedgroup`
--

CREATE TABLE `joinedgroup` (
  `group_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `joined_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `joinedgroup`
--

INSERT INTO `joinedgroup` (`group_id`, `user_id`, `joined_date`) VALUES
(1, 7, '2022-12-16'),
(1, 8, '2022-12-15'),
(1, 19, '2022-12-17'),
(2, 7, '2022-12-18'),
(2, 8, '2022-12-15'),
(3, 8, '2022-12-16');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `country` text NOT NULL,
  `province` text NOT NULL,
  `city` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `country`, `province`, `city`, `address`) VALUES
(1, 'Việt Nam', 'Khánh Hòa', 'Nha Trang', '213 Võ Thị Sáu');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` bigint(20) NOT NULL,
  `content` varchar(255) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `published_date` date NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `content`, `image`, `published_date`, `user_id`) VALUES
(24, 'hom nay toi buon qua diiiiiiiiii', 'NONE', '2022-12-14', 7),
(59, 'Day la test', '|https://firebasestorage.googleapis.com/v0/b/media-socia.appspot.com/o/post_images%2Fbackground.jpg?alt=media&token=5bc1b69a-b2ec-4671-a180-9534158d06e2|https://firebasestorage.googleapis.com/v0/b/media-socia.appspot.com/o/post_images%2Fbaitap.png?alt=media&token=e9af7062-d662-4aa9-a6cf-de8b00c12209', '2022-12-16', 7),
(60, 'Nay là thứ 7', 'NONE', '2022-12-17', 7);

-- --------------------------------------------------------

--
-- Table structure for table `post_comment`
--

CREATE TABLE `post_comment` (
  `post_comment_id` bigint(20) NOT NULL,
  `date_comment` date NOT NULL,
  `content` varchar(100) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_comment`
--

INSERT INTO `post_comment` (`post_comment_id`, `date_comment`, `content`, `post_id`, `user_id`) VALUES
(4, '2022-12-16', 'day la mot comment ', 24, 7),
(8, '2022-12-16', 'test comment', 59, 7);

-- --------------------------------------------------------

--
-- Table structure for table `post_favorite`
--

CREATE TABLE `post_favorite` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_favorite`
--

INSERT INTO `post_favorite` (`post_id`, `user_id`) VALUES
(1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `refreshtoken`
--

CREATE TABLE `refreshtoken` (
  `ref_token_id` bigint(20) NOT NULL,
  `expiry_date` datetime NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `refreshtoken`
--

INSERT INTO `refreshtoken` (`ref_token_id`, `expiry_date`, `token`, `user_id`) VALUES
(2, '2022-12-14 21:38:03', '996b5420-67e5-4246-beec-853c770e09fb', 8),
(3, '2022-12-15 01:29:30', 'f19966be-8115-4cfb-b475-9759148ca415', 7),
(4, '2022-12-15 02:11:04', '62468e34-9d87-484a-a30d-fc226ff1d1c3', 7),
(5, '2022-12-15 02:37:11', '897a3f29-9a3c-48e7-bd49-8feb14861b7a', 7),
(6, '2022-12-15 14:56:04', '95bd1f66-a1f4-4178-8f9b-a51d3975137e', 7),
(7, '2022-12-16 14:18:10', '420fc5d8-2ab3-4ed9-a1cc-bd8968d6b247', 7),
(8, '2022-12-16 17:52:08', '3beadc38-71c9-434b-8730-0518ef3931d3', 7),
(9, '2022-12-16 23:00:58', '7ff7fc82-7cff-4070-9d33-4026502849e8', 8),
(10, '2022-12-17 13:41:29', '38f06ce0-79c3-427c-bab9-5c440831fa3f', 7),
(11, '2022-12-17 07:50:10', 'd12ce127-74e0-4227-97ad-4c2cf06bb1bf', 7),
(12, '2022-12-17 08:07:51', '0960a76b-d059-4258-8a7d-abc89d9e0deb', 7),
(14, '2022-12-18 03:15:14', 'd802fce8-e8f3-4ecc-8dda-e341240f9e03', 7),
(15, '2022-12-18 03:28:02', '0c4fd4eb-cb0c-4e53-9e1a-e82176f1518d', 9),
(17, '2022-12-18 03:36:13', '514a769e-cb87-4489-82bb-ca6c2dee8fa3', 7),
(18, '2022-12-18 03:50:31', 'b303ce79-33d9-479d-9bbd-1b43f95bf4f7', 9),
(19, '2022-12-18 03:53:51', '70a9a1d2-b71e-469f-8aca-0fff9b4abb33', 9),
(20, '2022-12-18 03:54:46', '425de7d5-46ff-49d7-9de9-1bb46573365d', 17),
(22, '2022-12-18 03:57:08', '77264b82-07d5-4097-a984-5b9f847215f8', 17),
(24, '2022-12-18 04:02:10', '0068862e-6119-4560-8ed9-3f93ba6064a4', 19),
(25, '2022-12-18 04:04:23', '27e55e6c-92a5-4375-8fc6-d269fa6e981b', 20),
(26, '2022-12-18 04:20:00', '9f104ae2-7ba8-47fa-8005-28d432406075', 7),
(27, '2022-12-18 04:23:37', 'da7f5b14-a5a9-4f17-ae82-f366685a7c95', 7),
(28, '2022-12-18 04:28:38', 'ed989b96-b037-4925-a359-cd64b9b4486a', 7),
(29, '2022-12-18 05:21:09', 'c487dbb7-2830-43fe-ba70-00e796fe3971', 9),
(30, '2022-12-18 05:21:30', '7d1b94bd-ba5d-4b6a-96b9-d0cecd45e1cc', 17),
(31, '2022-12-18 05:22:14', '9fd15bf3-b0e9-4980-888c-8b4991e6b2ab', 19),
(32, '2022-12-18 05:47:02', '23199f36-7916-49c0-8947-841081c8b652', 19),
(33, '2022-12-18 05:48:12', 'a9354939-e5e8-4aff-b533-67bf918402a2', 19),
(34, '2022-12-18 05:49:39', '862011af-000d-4055-9a7f-093618a0c70e', 19),
(35, '2022-12-18 05:51:39', '4795b262-a1c6-4919-9b87-1e024e9ed855', 19),
(36, '2022-12-18 05:52:39', 'e79f2ee7-8f5c-42ee-8e89-2250ac8df68d', 19),
(37, '2022-12-18 05:57:36', 'b8a6cd67-9b56-4df5-9975-f41f5c3e402c', 19),
(38, '2022-12-18 05:58:33', '0bd736e1-c559-478d-a6b9-7c5bb28be2e8', 19),
(39, '2022-12-18 05:59:12', 'f75f11c5-125c-4f2e-894d-67c309920a67', 19),
(40, '2022-12-18 06:05:05', 'f6758dcf-4e1a-4512-af5d-7b32a540ff46', 19),
(41, '2022-12-18 11:12:34', 'ccf100dc-5877-4d22-97b4-25785fbc2f26', 19),
(42, '2022-12-18 11:24:00', '875bf9ff-922b-44f5-a8e9-eb28898b7216', 19),
(43, '2022-12-18 12:01:32', '2006163d-7e24-42e9-8841-b2a7f9bc994d', 17),
(44, '2022-12-18 12:02:40', 'b1bb34a5-8469-42fa-8ef9-3b05c9acb1df', 20),
(45, '2022-12-18 13:03:41', '7a3fe4fa-ffaa-41e9-b2f1-0185b8cc3f37', 9),
(46, '2022-12-18 13:03:48', 'fa5cd79d-7fa6-4964-8e4f-677fa2ebf7b3', 17),
(47, '2022-12-18 14:25:31', '2d6f67f0-2da9-47a2-a233-b623300317ce', 7),
(48, '2022-12-18 14:26:54', 'b3eb735a-5edb-4a63-94f1-012c8b6bbc8c', 7),
(49, '2022-12-18 14:45:58', '429c5799-f38f-4a7c-853e-b31350ad74d1', 20),
(50, '2022-12-19 14:12:39', 'de412b9c-1576-4f87-b026-72b99d410e12', 7),
(51, '2022-12-20 08:00:17', '7128e4d3-b3b9-4ae2-b54e-a8af21a72853', 7),
(52, '2022-12-20 08:06:42', '1ff473dd-2a53-4623-bd85-7f1a09d8f794', 7),
(53, '2022-12-20 13:24:38', '583c3e8c-7893-4aa2-8ac5-58770a80cdcd', 7),
(54, '2022-12-20 13:25:52', '8c3dd18c-2a2e-4686-81be-b43884ec3d91', 2),
(55, '2022-12-20 13:48:51', '8d6e6990-d7a6-46d2-b88a-b397a18579e9', 7),
(56, '2022-12-20 13:50:02', 'c4bcf7b1-0884-4de3-a3e1-857b3153fb0a', 3),
(57, '2022-12-20 14:42:20', '79864a82-2863-43d0-bcbf-75df65bc1386', 2),
(58, '2022-12-21 07:39:01', '9b5623e0-6186-4862-bb66-f13faaa2e314', 2),
(59, '2022-12-21 08:24:50', '7f275fa5-fed3-4ad9-91da-b1afffa20bf1', 7),
(60, '2022-12-21 10:23:12', 'c502d268-0b97-44d3-ae44-3a5ba5f152d4', 2),
(61, '2022-12-21 14:36:55', '3aef6caf-4e82-4e2f-b848-b5cd49be0649', 2),
(62, '2022-12-21 15:26:55', '9b1c59d7-318d-42b8-8d33-af0b33363026', 3),
(63, '2022-12-21 15:27:23', 'bc758485-586e-486a-acfd-3e0b30480e4d', 2),
(64, '2022-12-22 05:52:25', 'e2557ac6-1d4d-46ef-a303-da23e2d19816', 2),
(65, '2022-12-22 06:12:40', '6525e12a-1fa3-459a-87b6-c3568ebc5998', 7),
(66, '2022-12-22 12:49:03', '6fde0e90-55b6-4242-87c7-17e2dcc9d9c8', 2),
(67, '2022-12-22 12:51:52', '06cfc7eb-4629-46d0-b9dd-7491c8f8e294', 7),
(68, '2022-12-22 13:42:45', '21fe19f9-d671-43c6-b544-049d98eba1ea', 2),
(69, '2022-12-22 13:45:21', 'a35bf8d7-a0e1-4ccf-9ab1-6f06a1eb5dbf', 2),
(70, '2022-12-22 13:47:00', '80ac27ea-248c-41e6-9a71-1dc651b04cc7', 2),
(71, '2022-12-22 13:51:34', 'd8d64832-a5bd-4370-b738-0f69ac808a49', 2),
(72, '2022-12-22 14:57:38', '0cad23ad-bce3-49e5-b3d8-11de4a297c81', 2),
(73, '2022-12-23 03:26:37', 'ab9206ee-6c35-4fd1-90e8-5d4c925a98fc', 2),
(74, '2022-12-23 03:45:07', 'b468224e-a302-4844-8aec-862d9b72ca83', 3),
(75, '2022-12-23 06:03:23', 'bdf37e8d-0e6d-4cf3-8944-f9bfad69eb96', 7),
(76, '2022-12-23 06:20:23', '1b4406ab-d627-4421-807f-584ac7f1d041', 4),
(77, '2022-12-23 06:23:27', 'ee9b997e-dc46-460d-a1ce-63feb8a21b69', 4),
(78, '2022-12-23 06:24:48', 'ffd5cdaa-ef63-4fa5-9e01-06f8250c4fc7', 7),
(79, '2022-12-23 12:47:05', '44043cab-07fe-462b-8624-6b6496ca749b', 2),
(80, '2022-12-24 06:38:36', '33fcfb3a-c6fa-455d-b4fc-fa8a6eceb9d6', 2),
(81, '2022-12-24 06:40:10', '4bd60ee4-9a67-43e7-af8c-3e6429956456', 3),
(82, '2022-12-24 07:49:22', '33d3a06b-aa20-4780-aa9b-a46774a5f8cf', 17),
(83, '2022-12-24 08:09:07', 'fb541000-fea9-43be-8b45-83e07d36f49a', 17),
(84, '2022-12-24 08:37:06', 'c33ead22-66ec-44d6-baf6-f00f22d37dd6', 2),
(85, '2022-12-24 08:47:44', 'f62b06d9-ee44-472f-86b5-4f731e965d80', 7),
(86, '2022-12-24 08:48:07', '28edc5a6-2c1e-4fd7-9ed1-394795879905', 2),
(87, '2022-12-24 09:01:42', '78b09174-a9a6-4923-b314-6133638f5f47', 3);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` bigint(20) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER'),
(3, 'ROLE_MODERATOR');

-- --------------------------------------------------------

--
-- Table structure for table `status_friend`
--

CREATE TABLE `status_friend` (
  `status_id` int(11) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status_friend`
--

INSERT INTO `status_friend` (`status_id`, `status`) VALUES
(1, 'request friend'),
(2, 'friend');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` bigint(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `registered_date` date NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `registered_date`, `username`) VALUES
(2, 'nguyenthach617@gmail.com', '$2a$10$2jmGakjWDImZeuE740oVT.Z0x7rpeZPw8WH.KkejsIGrQsKr0CYzW', '2022-12-02', 'thachnt123'),
(3, 'hungbeo123@gmail.com', '$2a$10$2jmGakjWDImZeuE740oVT.Z0x7rpeZPw8WH.KkejsIGrQsKr0CYzW', '2022-12-02', 'hung2712'),
(4, 'thachnv@gmail.com', '$2a$10$2jmGakjWDImZeuE740oVT.Z0x7rpeZPw8WH.KkejsIGrQsKr0CYzW', '2022-12-02', 'thachlmao2828'),
(7, 'email@gmail.com', '$2a$10$2jmGakjWDImZeuE740oVT.Z0x7rpeZPw8WH.KkejsIGrQsKr0CYzW', '2022-12-08', 'hung2727'),
(8, 'sieupha2712@gmail.com', '$2a$10$Jw1noGaVHIE9tj.3QnNxh.qPYlFs6Oa.DTd2E1pfQxiNKU4l76sta', '2022-12-08', 'hung2728'),
(9, 'truong992001@gmail.com', '$2a$10$2jmGakjWDImZeuE740oVT.Z0x7rpeZPw8WH.KkejsIGrQsKr0CYzW', '2022-12-02', 'blackbear'),
(17, 'truong992001no2@gmail.com', '$2a$10$WHwPDGhENCW2P0HMjIEehuVWDrUg/lR/S4F5.IFSOR7YNdsFvlPNe', '2022-12-17', 'blackbear1'),
(19, 'nhan123@gmail.com', '$2a$10$4puKCnLcF84nmTxaZe91Y.R6SET0pCz0MekRm7PS/GPV0nZIV4lIq', '2022-12-17', 'nhan1234'),
(20, 'vannam@gmail.com', '$2a$10$gIK7kUovq6NYOooIpzZcIOogEoIwlNrTmCFPTex9MXV.Of2/nKmca', '2022-12-17', 'vannam'),
(21, 'tuananh@gmail.com', '$2a$10$MfShJE1LrH3SLqdFOK9Se.f0kg3BKFUWw/ewnGIerPjr5.WsMrjNC', '2022-12-19', 'tuananh'),
(22, 'minhtrong@gmail.com', '$2a$10$fQmTGRfGHIJ/6DVCbl74guOvVvEd9iXxGqWJvij4KzmXhtYdUWL52', '2022-12-19', 'minhtrong');

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE `userprofile` (
  `userprofile_id` bigint(20) NOT NULL,
  `avatar` text DEFAULT NULL,
  `background` varchar(255) DEFAULT NULL,
  `dob` date NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `gender` bit(1) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `update_date` date DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `about` varchar(255) NOT NULL,
  `location_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userprofile`
--

INSERT INTO `userprofile` (`userprofile_id`, `avatar`, `background`, `dob`, `first_name`, `gender`, `last_name`, `update_date`, `user_id`, `about`, `location_id`) VALUES
(1, 'hutao.jpg', 'background.jpg', '2001-12-27', 'Nguyen Van', b'1', 'Hung', '2022-12-12', 7, '그동안 \'너의 이름은\' 사운드트랙을 10곡 커버했습니다.\n모음집으로 만들면서 돌아보니 2019년부터 \'너의 이름은\' OST를 연주하기 시작 했네요. 시간이 꽤 흘렀지만 좋아하는 작품인지라 매년 다시보고 꾸준히 음악도 들어가며 즐겁게 연주했습니다. ', 0),
(2, 'meogiandu.jpg', 'alone.png', '2022-12-01', 'Nguyen', b'1', 'Hung', '2022-12-12', 8, 'acc clone của Hưng', 0),
(3, 'galaxy-nebula-planet-light-1920x1200.jpg', 'hinh-anh-bieu-tuong-rong-dep_024751803.jpg', '2022-12-16', 'Nguyễn Nhật', b'1', 'Trường', NULL, 17, 'nhà tui ở diên khánh', 1),
(4, '123.png', 'background.jpg', '2022-12-16', 'Nhân', b'1', 'Nguyễn Thành', NULL, 19, 'không có gì', 1),
(5, 'hutao.jpg', 'background.jpg', '2022-12-16', 'Lê Văn', b'1', 'Nam', NULL, 20, 'không có gì :(', 1),
(11, '123.png', 'Anime Scenery.jfif', '2022-12-19', 'Võ Tuấn', b'1', 'Anh', NULL, 21, 'nick của tuấn anh', 1),
(12, '123.png', 'background.jpg', '2022-12-19', 'Trần Minh', b'1', 'Trọng', NULL, 2, 'nick của minh trọng', 1),
(13, 'ERD.jpg', 'hinh-anh-bieu-tuong-rong-dep_024751803.jpg', '2022-12-23', 'Tran', b'1', 'Trong', '2022-12-23', 3, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(2, 1),
(3, 1),
(7, 2),
(8, 2),
(17, 2),
(19, 2),
(20, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment_reply`
--
ALTER TABLE `comment_reply`
  ADD PRIMARY KEY (`comment_reply_id`),
  ADD KEY `FK35weat9pbnp5kdpevwti5k3u4` (`post_comment_id`),
  ADD KEY `FKsrjwcmm9boromh00gubiqc8x5` (`user_id`);

--
-- Indexes for table `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`c_id`),
  ADD KEY `user_one` (`user_one`),
  ADD KEY `user_two` (`user_two`);

--
-- Indexes for table `conversation_reply`
--
ALTER TABLE `conversation_reply`
  ADD PRIMARY KEY (`cr_id`),
  ADD KEY `user_id_fk` (`user_id_fk`),
  ADD KEY `c_id_fk` (`c_id_fk`);

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`follow_id`);

--
-- Indexes for table `friendship`
--
ALTER TABLE `friendship`
  ADD PRIMARY KEY (`friendship_id`);

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `joinedgroup`
--
ALTER TABLE `joinedgroup`
  ADD PRIMARY KEY (`group_id`,`user_id`),
  ADD KEY `FK2yw1svn2qu59st95n4vgrk45q` (`user_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `FK72mt33dhhs48hf9gcqrq4fxte` (`user_id`);

--
-- Indexes for table `post_comment`
--
ALTER TABLE `post_comment`
  ADD PRIMARY KEY (`post_comment_id`),
  ADD KEY `FKna4y825fdc5hw8aow65ijexm0` (`post_id`),
  ADD KEY `FKtc1fl97yq74q7j8i08ds731s1` (`user_id`);

--
-- Indexes for table `post_favorite`
--
ALTER TABLE `post_favorite`
  ADD PRIMARY KEY (`post_id`,`user_id`);

--
-- Indexes for table `refreshtoken`
--
ALTER TABLE `refreshtoken`
  ADD PRIMARY KEY (`ref_token_id`),
  ADD UNIQUE KEY `UK_or156wbneyk8noo4jstv55ii3` (`token`),
  ADD KEY `FKfr75ge3iecdx26qe8afh1srf6` (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `status_friend`
--
ALTER TABLE `status_friend`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`username`) USING HASH,
  ADD UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`) USING HASH;

--
-- Indexes for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD PRIMARY KEY (`userprofile_id`),
  ADD KEY `FKf624a6kavdjjkwyibdatrjipf` (`user_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKrhfovtciq1l558cw6udg0h0d3` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment_reply`
--
ALTER TABLE `comment_reply`
  MODIFY `comment_reply_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `conversation`
--
ALTER TABLE `conversation`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `conversation_reply`
--
ALTER TABLE `conversation_reply`
  MODIFY `cr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `friendship`
--
ALTER TABLE `friendship`
  MODIFY `friendship_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `group_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `post_comment`
--
ALTER TABLE `post_comment`
  MODIFY `post_comment_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `status_friend`
--
ALTER TABLE `status_friend`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `userprofile`
--
ALTER TABLE `userprofile`
  MODIFY `userprofile_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment_reply`
--
ALTER TABLE `comment_reply`
  ADD CONSTRAINT `FK35weat9pbnp5kdpevwti5k3u4` FOREIGN KEY (`post_comment_id`) REFERENCES `post_comment` (`post_comment_id`),
  ADD CONSTRAINT `FKsrjwcmm9boromh00gubiqc8x5` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `conversation`
--
ALTER TABLE `conversation`
  ADD CONSTRAINT `conversation_ibfk_1` FOREIGN KEY (`user_one`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `conversation_ibfk_2` FOREIGN KEY (`user_two`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `conversation_reply`
--
ALTER TABLE `conversation_reply`
  ADD CONSTRAINT `conversation_reply_ibfk_1` FOREIGN KEY (`user_id_fk`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `conversation_reply_ibfk_2` FOREIGN KEY (`c_id_fk`) REFERENCES `conversation` (`c_id`);

--
-- Constraints for table `joinedgroup`
--
ALTER TABLE `joinedgroup`
  ADD CONSTRAINT `FK2yw1svn2qu59st95n4vgrk45q` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `FKrx7jrt7jw263b4731utr71bd1` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK72mt33dhhs48hf9gcqrq4fxte` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `post_comment`
--
ALTER TABLE `post_comment`
  ADD CONSTRAINT `FKna4y825fdc5hw8aow65ijexm0` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`),
  ADD CONSTRAINT `FKtc1fl97yq74q7j8i08ds731s1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `refreshtoken`
--
ALTER TABLE `refreshtoken`
  ADD CONSTRAINT `FKfr75ge3iecdx26qe8afh1srf6` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD CONSTRAINT `FKf624a6kavdjjkwyibdatrjipf` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
