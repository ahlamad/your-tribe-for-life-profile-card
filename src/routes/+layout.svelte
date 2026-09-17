<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation/>

{@render children()}

<Footer data={data}/>
