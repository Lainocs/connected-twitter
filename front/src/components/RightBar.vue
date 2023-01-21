<template>
	<div class="container">
		<div class="search-bar">
			<img
				class="search-icon"
				src="@/assets/icons/search.svg"
				alt="search"
			/>
			<input
				type="text"
				placeholder="Recherche Twitter"
			/>
		</div>
		<div class="top-tweet">
			<h2>Tendances pour vous</h2>
			<div
				v-for="tt in tts"
				:key="tt.slug"
			>
				<TopTweet :tt="tt" />
			</div>
		</div>
	</div>
</template>
<script>
	import TopTweet from './RightBar/TopTweet.vue'
	export default {
		name: 'RightBar',
		components: {
			TopTweet,
		},
		data() {
			return {
				tts: [
					{
						name: 'RAJOUTE UN HASHTAG DANS TON TWEET !',
						cat: 'Web',
						tweets: '5.8k Tweets',
						slug: 'laravel',
					},
					{
						name: '#blue, #red, #green, #pink',
						cat: 'School',
						tweets: '69.8k Tweets',
						slug: 'iim-digital-school',
					},
					{
						name: '#yellow, #purple, #cyan, #magenta',
						cat: 'Web',
						tweets: '21.8k Tweets',
						slug: 'coding-digital-innovation',
					},
					{
						name: '#white, #orange',
						cat: 'Web',
						tweets: '8.4k Tweets',
						slug: 'developpement-web',
					},
					{
						name: '#switch, #load, #fill',
						cat: 'Web',
						tweets: '6.8k Tweets',
						slug: 'vuejs',
					},
				],
			}
		},
	}
</script>

<style scoped>
	.container {
		width: 30%;
		margin: 0 auto 0 40px;
	}

	.search-bar {
		width: 100%;
	}

	.top-tweet {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		border-radius: 20px;
		margin-top: 20px;
		background-color: var(--bg-grey);
		height: 80vh;
	}

	h2 {
		color: white;
		font-weight: bold;
		padding: 20px;
	}

	h3 {
		padding: 0;
		margin: 0;
	}

	input {
		width: 100%;
		margin: 5px auto;
		height: 40px;
		border: none;
		border-radius: 20px;
		padding-left: 50px;
		background-color: var(--bg-grey);
	}

	.search-icon {
		width: 30px;
		position: absolute;
		margin: 10px 0 0 10px;
		filter: invert(1);
	}
</style>
