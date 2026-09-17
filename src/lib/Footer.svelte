<script>
    import github from "$lib/assets/github.svg"
    import linkedin from "$lib/assets/linkedin.svg"
    import location from "$lib/assets/location.svg"
    import mail from "$lib/assets/mail.svg"

    let { data } = $props();
</script>

<footer>
    <h2>Contacts</h2>
    <ul> 
        <li>
            <img src={ location } alt={data.person.residency}>
            <span>{data.person.residency}</span>
        </li>
        <li>
            <a href="https://github.com/ahlamad" target="_blank">
                <img src={ github } alt={data.person.github_handle}>
                <span>{data.person.github_handle}</span>
            </a>
        </li>        
        <li>
            <img src={ mail } alt="{data.person.name}'s E-mail">
            <span>ahlam.adda@hva.nl</span>
        </li>    
        <li>
            <a href="https://www.linkedin.com/in/ahlam-adda-860762313/" target="_blank">
                <img src={ linkedin } alt="{data.person.name}'s Linkedin">
                <span>Linkedin</span>
            </a>
        </li>  
    </ul>
</footer>

<style>

  footer {    
    background-color: #8F1E40;
    min-width: 20dvw;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-bottom: 2rem;


  }

  h2 {
    margin: 2.1rem 0 1.2rem 0;
    font-size: 19px;
    font-weight: 500;
  }

  ul {
    background-color: #BD4066;
    padding: 1.8rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    box-shadow: #BD4066 0 0 12px 4px ;
  }

  li,
  a {
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-decoration: none;
  }

  a {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 20px;
    height: 22px;
  }

  span {
    font-size: 16px;
    font-weight: 300;
  }

  @media (width >= 1000px) {
    footer {
      min-width: none;
      padding-bottom: 0;
    }

    ul {
      flex-direction: row;
      width: 100%;
      padding: 4rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      justify-content: center;
    }
  }
</style>