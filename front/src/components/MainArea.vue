<template>
	<div class="container">
		<div class="top-home">
			<h2>Accueil</h2>
			<img
				src="@/assets/icons/sparkles.svg"
				alt="sparkles"
			/>
		</div>
		<PostBar />
		<div class="tweets">
			<div
				v-for="tweet in tweets"
				:key="tweet.id"
			>
				<TweetTemplate :tweet="tweet" />
			</div>
		</div>
	</div>
</template>
<script>
	import TweetTemplate from './MainArea/TweetTemplate.vue'
	import PostBar from './MainArea/PostBar.vue'
	export default {
		name: 'MainArea',
		components: {
			TweetTemplate,
			PostBar,
		},
		data() {
			return {
				tweets: [],
			}
		},
		methods: {
			async getTweets() {
				await fetch('http://localhost:3000/tweets')
					.then((response) => response.json())
					.then((data) => {
						this.tweets = data
					})
				
				this.checkHashtag()
			},
			checkHashtag() {
				this.tweets.forEach((tweet) => {
					if (tweet.content.includes('#')) {
						const hashtag = tweet.content.split('#')[1]
						console.log(hashtag)
					}
				})
			},
		},
		mounted() {
			this.getTweets()

			this.$socket.on('tweet', () => {
				this.getTweets()
			})
		},
	}
</script>

<style scoped>
	.container {
		width: 50%;
		border-right: 1px solid #717171;
	}

	h2 {
		font-size: 20px;
		font-weight: bold;
		color: white;
	}

	img {
		width: 50px;
		padding: 10px;
		filter: invert(1);
	}

	.top-home {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0 auto;
		padding: 10px;
		border-bottom: 1px solid #717171;
	}
</style>
