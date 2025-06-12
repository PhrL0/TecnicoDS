from pathlib import Path

# Script SQL completo conforme solicitado
script_sql = """
-- EVENTOS

DELIMITER //
CREATE EVENT ZerarSalarioJogadoresSemEquipe
ON SCHEDULE EVERY 1 YEAR
STARTS '2025-01-01 00:00:00'
DO
  UPDATE jogadorbrasileiro 
  SET salario = 0 
  WHERE idEquipe IS NULL;
//

CREATE EVENT ResetarPosicoesMensalmente
ON SCHEDULE EVERY 1 MONTH
STARTS '2025-07-01 00:00:00'
DO
  UPDATE EquipeCampeonato 
  SET posicao = 0;
//

CREATE EVENT RegistrarFimCampeonato
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE equipe_nome VARCHAR(100);

  SELECT e.nome INTO equipe_nome
  FROM EquipeCampeonato ec
  JOIN Equipe e ON ec.idEquipe = e.id
  WHERE ec.posicao = 1 AND e.nomeCampeonato = 'Campeonato Brasileiro'
  LIMIT 1;

  IF equipe_nome IS NOT NULL THEN
    INSERT INTO logs_campeonato (mensagem)
    VALUES (CONCAT('Campeonato Brasileiro finalizado! Campeão: ', equipe_nome));
  END IF;
END;
//
DELIMITER ;

-- FUNCTIONS

DELIMITER //
CREATE FUNCTION SomaSalariosEquipe(p_idEquipe INT) RETURNS DECIMAL(15,2)
DETERMINISTIC
BEGIN
  DECLARE total DECIMAL(15,2);
  SELECT SUM(salario) INTO total
  FROM JogadorBrasileiro
  WHERE idEquipe = p_idEquipe;
  RETURN IFNULL(total, 0.00);
END;
//

CREATE FUNCTION PegaPosicaoPorCPF(p_cpf VARCHAR(14)) RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
  DECLARE posicao_jogador VARCHAR(50);
  SELECT posicao INTO posicao_jogador
  FROM JogadorBrasileiro
  WHERE cpf = p_cpf;
  RETURN posicao_jogador;
END;
//

CREATE FUNCTION QtdEstrangeirosPorEquipe(p_nomeEquipe VARCHAR(100)) RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE qtd INT;
  SELECT COUNT(*) INTO qtd
  FROM JogadorEstrangeiro je
  JOIN Equipe e ON je.idEquipe = e.id
  WHERE e.nome = p_nomeEquipe;
  RETURN qtd;
END;
//
DELIMITER ;

-- TRIGGERS

DELIMITER //
CREATE TRIGGER trg_ZerarSalarioNegativo_Brasileiro
BEFORE INSERT ON JogadorBrasileiro
FOR EACH ROW
BEGIN
  IF NEW.salario < 0 THEN
    SET NEW.salario = 0;
  END IF;
END;
//

CREATE TRIGGER trg_LogPlacar_AposUpdate
AFTER UPDATE ON Jogo
FOR EACH ROW
BEGIN
  INSERT INTO logs_jogos (idJogo, placar)
  VALUES (
    NEW.id,
    CONCAT(NEW.gols_time_casa, ' x ', NEW.gols_time_visitante)
  );
END;
//

CREATE TRIGGER trg_BloquearSalarioEstrangeiro
BEFORE UPDATE ON JogadorEstrangeiro
FOR EACH ROW
BEGIN
  IF NEW.salario < 5000 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Salário de jogador estrangeiro não pode ser menor que 5000.';
  END IF;
END;
//
DELIMITER ;
"""

# Salvar em arquivo
file_path = Path("/mnt/data/script_eventos_funcoes_triggers.sql")
file_path.write_text(script_sql)

file_path.name  # Return file name for user reference

