import express from 'express'
const router = express.Router()

//busca o AlunoController

import AlunoController from '../controllers/AlunoController.js'
const controle = new AlunoController()

const caminhobase = 'aluno/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.get('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.lst)

export default router