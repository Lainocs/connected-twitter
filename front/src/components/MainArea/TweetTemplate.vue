<template>
	<div>
		<div class="contents">
			<div class="content">
				<div class="content-img">
					<img :src="require('@/assets/profile.webp')" alt="profile">
				</div>
				<div class="content-text">
					<div class="content-info">
							<h3>{{tweet.name}}</h3>
							<span>{{tweet.username}}</span>
							<span>.</span>
							<span>{{tweet.time}}</span>
					</div>
					<div class="content-tweet">
						{{tweet.content}}
					</div>
				</div>
			</div>
			<div class="content-more">
				<img src="@/assets/icons/more-right.svg" alt="more">
			</div>
		</div>
		<div class="reactions">
			<div class="reaction">
				<img src="@/assets/icons/comment.svg" alt="comment">
				<span>{{tweet.comments}}</span>
			</div>
			<div class="reaction">
				<img src="@/assets/icons/retweet.svg" alt="retweet">
				<span>{{tweet.retweets}}</span>
			</div>
			<div class="reaction">
				<img src="@/assets/icons/like.svg" alt="like">
				<span>{{tweet.likes}}</span>
			</div>
			<div class="reaction">
				<img src="@/assets/icons/share.svg" alt="share">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TweetTemplate',
	props: [
		'tweet'
	],
}
</script>
<style>
.contents {
	display: flex;
	align-items: center;
	padding: 20px;
	color: white;
	justify-content: space-between;
}

.content {
	display: flex;
	align-items: center;
}

.content-img img {
	width: 50px;
	border-radius: 50%;
	background-color: white;
}

.content-text {
	margin-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.content-info {
	display: flex;
	align-items: center;
}

.content-info span {
	margin-left: 10px;
	font-size: 12px;
	color: #717171;
}

.content-tweet {
	margin-top: 10px;
	width: 95%;
}

.content-info {
	display: flex;
	align-items: center;
	width: 100%;
}

.content-more img {
	filter: invert(1);
	width: 30px;
}

h3 {
	color: white;
	font-weight: bold;
	font-size: 16px;
}

.reactions {
	display: flex;
	width: 100%;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #717171;
	padding: 0 20px 20px 20px;
}

.reaction {
	display: flex;
	width: 80%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
}

.reaction span {
	margin-left: 10px;
	font-size: 12px;
	color: #717171;
}

.reaction img {
	width: 20px;
	filter: invert(1);
}
</style>