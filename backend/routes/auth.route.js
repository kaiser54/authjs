import express from 'express'
import { sign_in, sign_out, sign_up } from '../controllers/auth.controller.js'

const router = express.Router()


router.post('/sign-up', sign_up)
router.post('/sign-in', sign_in)
router.post('/sign-out', sign_out)

export default router