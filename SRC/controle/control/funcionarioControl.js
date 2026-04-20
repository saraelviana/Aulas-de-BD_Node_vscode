import db from "../config/db.js";

export const ListarFuncionarios = (req, res) => {
  db.query("select * from funcionario", (err, result) => {
    if (err)
      return res.status(500).json({ erro: "Erro em buscar funcionarios" });
    res.json(result);
  });
};

// função para inserir um novo funcionario

export const InserirFuncionario = (req, res) => {
  const sql =
    "INSERT INTO funcionario (nome, cargo, salario) VALUES (?, ?, ?)"; /**e a segurança do mysql (?, ?, ?) */
  db.query(sql, [nome, cargo, salario], (err, result) => {
    if (err)
      return res.status(500).json({ erro: "Erro em inserir funcionario" });
    res.json({ mensagem: "Funcionario inserido com sucesso" });
  });
};
