<script>
    let { data } = $props();
</script>


<main>
    <section class="name-image-wrapper">
        <img src={data.person.image} alt={data.person.name} class="mugshot" width="300" height="200" />
        <h1>{data.person.name}</h1>
        <h2>Frontend Developer</h2>
        <p>Still Learning</p>
    </section>

    <section class="bio">
        <h2>About me</h2>
        <p>{ data.person.bio}</p>
    </section>  
</main>