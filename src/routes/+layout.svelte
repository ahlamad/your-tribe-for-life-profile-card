<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navigation from "$lib/Navigation.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation/>

{@render children()}
