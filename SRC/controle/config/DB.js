import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config(); /** sem isso nao funciona */

/** criar uma constante para a conexão com o banco de dados */
const conection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
/**puxar a constante que foi criada */
conection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err);
  } else {
    console.log("Conexão bem-sucedida ao banco de dados!");
  }
});
/** agora vamos exportar tudo */
export default conection;
