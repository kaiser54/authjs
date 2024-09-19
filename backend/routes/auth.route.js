import express from 'express'

const router = express.Router()


router.get('/sign-up', (req, res) => {
  res.send('sign-up route')
})

router.get('/sign-in', (req, res) => {
  res.send('sign-in route')
})

router.get('/sign-out', (req, res) => {
  res.send('sign-out route')
})

export default router