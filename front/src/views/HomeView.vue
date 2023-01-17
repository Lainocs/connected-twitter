<template>
  <div class="home">
		<SideBar/>
		<MainArea/>
		<RightBar/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import MainArea from '@/components/MainArea.vue'
import RightBar from '@/components/RightBar.vue'
export default {
  name: 'HomeView',
	components: {
		SideBar,
		MainArea,
		RightBar
	}
}
</script>

<style>
	.home {
		display: flex;
	}

	.home > div:first-child {
		width: 10%;
	}

	.home > div:nth-child(2) {
		width: 40%;
	}

	.home > div:last-child {
		width: 30%;
	}

	@media screen and (max-width: 1100px) {

		.home > div:nth-child(2) {
			width: 100%;
		}
		.home > div:last-child {
			display: none;
		}
	}

	@media screen and (max-width: 600px) {
		.home > div:first-child {
			display: none;
		}
	}
</style>
