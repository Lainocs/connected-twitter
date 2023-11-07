import database from '../database.js'
import Tweet from './model.js'
const getTweets = (req, res) => {
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

const getLastTweetTags = (req, res) => {
	let possibles = [
		'red',
		'green',
		'blue',
		'yellow',
		'orange',
		'purple',
		'magenta',
		'cyan',
		'pink',
		'white',
		'clignote',
		'breath',
		'load',
		'snake',
		'switch',
		'fill',
		'love',
		'friend',
		'beer',
	]
	database.query(
		'SELECT * FROM tweets ORDER BY id DESC LIMIT 1',
		(err, results) => {
			let tweet = results[0].content
			if (tweet.includes('#')) {
				const hashtags = tweet.match(/#[a-zA-Z0-9]+/g)
				const hashtagsWithoutHash = hashtags.map((hashtag) =>
					hashtag.replace('#', '')
				)
				const hashtagsInPossibles = hashtagsWithoutHash.filter((hashtag) =>
					possibles.includes(hashtag)
				)

				if (hashtagsInPossibles.length > 0) {
					console.log(hashtagsInPossibles)
					res.status(200).json(hashtagsInPossibles)
				} else {
					res.status(200).json([])
				}
			} else {
				res.status(200).json([])
			}
		}
	)
}

export default {
	getTweets,
	createTweet,
	getLastTweetTags,
}
