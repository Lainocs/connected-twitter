<template>
  <router-view/>
</template>

<style>

:root {
	--bg-color: #000000;
	--blue-twitter: #1C9CEF;
	--bg-grey: #16181C;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: var(--bg-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
