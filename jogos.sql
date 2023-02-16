-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Fev-2023 às 20:23
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `jogos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogos_jogados`
--

CREATE TABLE `jogos_jogados` (
  `id` int(11) NOT NULL,
  `nome` varchar(60) DEFAULT NULL,
  `ano_lancamento` int(11) DEFAULT NULL,
  `nome_empresa` varchar(55) DEFAULT NULL,
  `genero` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `jogos_jogados`
--

INSERT INTO `jogos_jogados` (`id`, `nome`, `ano_lancamento`, `nome_empresa`, `genero`) VALUES
(1, 'Super Mario Bros', 1985, 'Nintendo', 'Plataforma'),
(4, 'Uncharted 2: Among Thieves', 2009, 'Naughty Dog', 'Ação e Aventura'),
(5, 'The Witcher 3: Wild Hunt', 2015, 'CD Projekt RED', 'Action RPG'),
(6, 'The Last of Us Part II', 2020, 'Naughty Dog', 'Ação e Aventura'),
(7, 'Red Dead Redemption 2', 2018, 'Rockstar Games', 'Ação e Aventura'),
(9, 'Tom Clancy\'s Rainbow Six Siege', 2015, 'Ubisoft', 'FPS'),
(10, 'Final Fantasy VII Remake', 2020, 'Square Enix', 'Action RPG'),
(11, 'The King of Fighters XV', 2022, 'SNK', 'Luta');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lista_interesse`
--

CREATE TABLE `lista_interesse` (
  `id` int(11) NOT NULL,
  `nome` varchar(55) DEFAULT NULL,
  `ano_lancamento` int(11) DEFAULT NULL,
  `empresa` varchar(35) DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `genero` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `lista_interesse`
--

INSERT INTO `lista_interesse` (`id`, `nome`, `ano_lancamento`, `empresa`, `preco`, `genero`) VALUES
(1, 'Hogwarts Legacy', 2023, 'Avalanche Software', 349.9, 'Action RPG'),
(2, 'Valorant', 2020, 'Riot Games', 0, 'FPS'),
(5, 'Middle-Earth: Shadow of War', 2017, 'Monilith Productions', 229.99, 'Action RPG'),
(6, 'Resident Evil 4 - Remake', 2023, 'Capcom', 259.5, 'Survivor Horror'),
(7, 'Resident Evil: Outbreak File 2', 2004, 'Capcom', 0, 'Survivor Horror'),
(8, 'Resident Evil: Code Veronica', 2000, 'Capcom', 79.9, 'Survivor Horror'),
(9, 'Assassin\'s Creed II', 2009, 'Ubisoft', 59.99, 'Ação e Aventura'),
(10, 'Little Big Planet 3', 2014, 'Sumo Digital', 159, 'Multiplayer');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `jogos_jogados`
--
ALTER TABLE `jogos_jogados`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `lista_interesse`
--
ALTER TABLE `lista_interesse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jogos_jogados`
--
ALTER TABLE `jogos_jogados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `lista_interesse`
--
ALTER TABLE `lista_interesse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
