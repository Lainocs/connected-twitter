import express from "express"
import controller from "./controller.js"

const router = express.Router()

router.get('/tweets', controller.getTweets)
router.post('/tweets', controller.createTweet)
router.get('/tweets/last', controller.getLastTweetTags)
router.get('*', (req, res) => {
  res.json(req.path)
})

export default router