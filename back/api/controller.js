import database from '../database.js'
import Tweet from './model.js'
const getTweets = (req, res) => {
	console.log('coucou ' + req)
	database.query('SELECT * FROM tweets ORDER BY id DESC', (err, results) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).json(results)
		}
	})
}

const createTweet = (req, res) => {
	const tweet = new Tweet(
		req.body.name,
    req.body.username,
    req.body.time,
		req.body.content,
    req.body.comments,
    req.body.retweets,
    req.body.likes
	)

  
	database.query('INSERT INTO tweets SET ?', tweet, (err, results) => {
    if (err) {
      console.log(tweet)
			res.status(500).send(err)
		} else {
			res.status(200).json(results)
		}
	})
}

export default {
	getTweets,
	createTweet,
}
