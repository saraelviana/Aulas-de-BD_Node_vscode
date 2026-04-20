/**
 * depois de ter feito algo no FuncionarioControl,
 * vamos criar as rotas para o funcionario,
 * para isso vamos criar um arquivo chamado FuncionarioRoutes.js,
 * e vamos importar o express e o funcionarioControl,
 * depois vamos criar as rotas para listar e inserir funcionarios,
 * e depois vamos exportar tudo para o servidor.
 */

import express from "express"; /**esta mos importando  */
import {
  /** sera a importacao da pasta funcionario controle */

  listarFuncionarios,
  inserirFuncionario,
} from "../control/funcionarioControl.js";

const router =
  express.Router(); /**aqui estamos criando uma constante para o express */
/**aqui vamos colocar as rotas que vamos trabalhar */
router.get("/", listarFuncionarios); /** do professor */
router.post("/", inserirFuncionario); /** do professor */

/** a preciso usar esta rota la no servidor */
export default router; /**aqui estamos exportando tudo para o servidor*/

/**
 * agora vamos para o Server.js e importar a rota do funcionario e usar ela la,
 */
