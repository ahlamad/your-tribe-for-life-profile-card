<script>
    let { data } = $props();
</script>


<main>
    <section>

        <img src={data.person.image} alt={data.person.name} class="mugshot" width="300" height="200" />
        

    </section>
</main>