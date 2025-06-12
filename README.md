#1) Crie um event que zere o salário de jogadores brasileiros que estão sem equipe (idEquipe IS NULL) todo dia 1º de janeiro.

DELIMITER //
CREATE EVENT ZerarsalarioJogadoresSemEquipe
ON SCHEDULE AT CURRENT_TIMESTAMP = '2025-01-01 00:00:00' #complete_________________
DO
  #sua lógica aqui!
  update jogadorbrasileiro set salario = 0 where idEquipe = NULL;
//
DELIMITER ;


#2) Crie um event que atualize mensalmente o campo 'posicao' da tabela EquipeCampeonato para colocar todas as posições para 0 (resetar posições).

DELIMITER //


DO
   #sua lógica aqui!
//
DELIMITER ;


#3) Crie um event que registre uma mensagem em uma tabela de logs toda vez que o campeonato "Campeonato Brasileiro" terminar (exemplo: posicao = 1 para uma equipe).

-- Supondo que exista uma tabela logs_campeonato para registro
CREATE TABLE IF NOT EXISTS logs_campeonato (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mensagem VARCHAR(255),
  dataRegistro DATETIME DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //








DELIMITER ;

#*************************
#FUNCTIONS
#*************************

#1) Crie uma função que receba o ID de uma equipe e retorne a soma dos salários dos jogadores brasileiros dessa equipe.

DELIMITER //
CREATE FUNCTION SomaSalariosEquipe(p_idEquipe INT) RETURNS DECIMAL(15,2)
deterministic
BEGIN
  DECLARE total DECIMAL(15,2);

  #sua lógica aqui!

  RETURN total;
END //
DELIMITER ;


#2) Crie uma função que receba o CPF de um jogador brasileiro e retorne a posição dele.

DELIMITER //






DELIMITER ;


#3) Crie uma função que receba o nome de uma equipe e retorne a quantidade de jogadores estrangeiros nesta equipe.

DELIMITER //






DELIMITER ;

#*************************
#TRIGGERS
#*************************

#1) Crie um trigger antes da inserção na tabela JogadorBrasileiro que zere o salário caso o valor informado seja negativo.

DELIMITER //






DELIMITER ;

#2) Crie um trigger após atualização na tabela Jogo que registre o placar do jogo em uma tabela de logs.

CREATE TABLE IF NOT EXISTS logs_jogos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idJogo INT,
  placar VARCHAR(20),
  dataRegistro DATETIME DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //




DELIMITER ;


#3) Crie um trigger que impeça a atualização do salário de jogadores estrangeiros para valores menores que 5000.
#OBS: pesquise sobre SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT
DELIMITER //
CREATE TRIGGER trg_Estrangeiro_Salario_BeforeUpdate
BEFORE UPDATE ON JogadorEstrangeiro
FOR EACH ROW
BEGIN

  #sua lógica aqui!

END;
//
DELIMITER ;
