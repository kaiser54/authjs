import express from 'express'
import { sign_in, sign_out, sign_up } from '../controllers/auth.controller.js'

const router = express.Router()


router.get('/sign-up', sign_up)

router.get('/sign-in', sign_in)

router.get('/sign-out', sign_out)

export default router