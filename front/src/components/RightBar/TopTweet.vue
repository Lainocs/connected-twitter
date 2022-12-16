<template>
	<div class="tt">
		<div>
			<span>{{tt.cat}}</span>
			<h3>{{tt.name}}</h3>
			<span>{{tt.tweets}}</span>
		</div>
		<div>
			<img src="@/assets/icons/more-right.svg" alt="more-right">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopTweet',
		props: [
			'tt'
		]
	}
</script>
<style>
	.tt {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0 auto;
		padding: 20px;
	}

	.tt span {
		font-size: 12px;
		color: #717171;
	}

	.tt h3 {
		color: white;
		font-weight: bold;
	}

	.tt img {
		filter: invert(1);
		width: 30px;
	}
</style>