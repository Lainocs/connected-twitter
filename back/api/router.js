import express from "express"
import controller from "./controller.js"

const router = express.Router()

router.get('/tweets', controller.getTweets)
router.post('/tweets', controller.createTweet)
router.get('*', (req, res) => res.status(404).send('Il n\'y a rien ici...'))

export default router