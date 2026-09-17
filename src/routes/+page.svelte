<script>
    let { data } = $props();
</script>


<main>
    <section class="name-image-wrapper">
        <img src={data.person.image} alt={data.person.name} class="mugshot" width="300" height="200" />
        <div>
          <h1>{data.person.name}</h1>
          <h2>Frontend Developer</h2>
          <p>Still Learning</p>
        </div>
    </section>

    <section class="bio">
        <h2>About me</h2>
        <p>{ data.person.bio}</p>
    </section>  
</main>

<style>

  main {
    background-color:#8F1E40;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  .name-image-wrapper {
    place-items: center;

    &:first-of-type {
      gap: 1rem;
    }
  }

  img {
    border-radius: 100%;
    width: 30dvw;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    box-shadow: #DC4E79 0 0 12px 4px ;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    place-items: center;
  }

  h1 {
    font-size: 23px;
  }

  h2 {
    font-size: 19px;
    font-weight: 500;
  }

  .bio {
    margin-top: 2rem;
    place-items: center;
    text-align: center;
    gap: .5rem;
  }

  .bio p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    padding: 0 12px 0 12px;
  }

  @media (width >= 1000px) {
    main {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      gap: 3rem;
      max-width: 1200px;
      padding: 5rem;
    }

    .bio {
      order: 1;
      margin-top: 0;
    }

    .bio p {  
      padding: 0;
      max-width: 600px;
    }

    .name-image-wrapper {
      order: 2;
      align-items: center;
      text-align: center;
    }

    img {
      width: 220px;
    }
}

</style>