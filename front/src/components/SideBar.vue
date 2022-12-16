<template>
	<div>
		<img src="@/assets/icons/twitter.svg" alt="twitter logo">
		<img src="@/assets/icons/home.svg" alt="home">
		<img src="@/assets/icons/hash.svg" alt="hash">
		<img src="@/assets/icons/bell.svg" alt="bell">
		<img src="@/assets/icons/envelope.svg" alt="envelope">
		<img src="@/assets/icons/mark.svg" alt="mark">
		<img src="@/assets/icons/book.svg" alt="book">
		<img src="@/assets/icons/profile.svg" alt="profile">
		<img src="@/assets/icons/more.svg" alt="more">
		<img src="@/assets/icons/new_tweet.svg" alt="new tweet">
	</div>
</template>
<script>
export default {
	name: 'SideBar',
}
</script>
<style scoped>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		border-right: 1px solid #717171;
	}
	img {
		width: 50px;
		padding: 10px;
		filter: invert(1);
	}

	img:first-child {
		margin-bottom: 20px;
	}

	img:last-child {
		margin-top: 30px;
	}
</style>