<script>
    import "../../../CSS/background.css"
    import "../../../CSS/typography.css"
    import "../../../CSS/style.css"
    import "../../../CSS/loader.css"
    import "../../../CSS/desktop.css"
    import "../../../CSS/hamburger-transition.css"
    import gmail_logo from "../../../imgs/Gmail-Icon.png"
    import linkedin_logo from "../../../imgs/Linkedin-Icon.png"
    import X_logo from "../../../imgs/X-Icon.png"
    import dead_astronomer from "../../../imgs/Dead_Astronomer.jpeg"
    import beethoven from "../../../imgs/Beethoven.jpeg"
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Abdulmalik Almadhi">
    <meta name="description" content="The homepage of my website.">
    <meta name="keywords" content="Homepage">
</svelte:head>

<style>
    :root {
        --bar-width: 60px;
        --bar-height: 8px;
        --hamburger-gap: 6px;
    }
    .choice > a {
    font-size: 25px;
    text-decoration: none;
    }
</style>

<body>
    <div class="loader"><div></div><div></div><div></div></div>  
    <div class="content show-content">
    <header>
        <label class="hamburger-menu">
            <input type="checkbox">
        </label>
        <aside class="sidebar">
            <nav>
              <div class="choice" id="choice_1"><a href="homepage.html">Homepage</a></div>
              <div class="choice" id="choice_2"><a href="about_me.html">About me</a></div>
              <div class="choice" id="choie_3"><a href="contact_me.html">Contact me</div>
              <div class="choice" id="choice_4"><a href="my_notes.html">Notes</a></div>
              <div class="choice" id="choice_5"><a href="suggestions.html">Suggest Me</a></div>
            </nav>
        </aside>  
        <h1>Homepage</h1>
    </header>

    <div class="watermark">
        <img src={dead_astronomer} alt="Dead Astronomer">
      </div>
    <div class="watermark">
        <img src={beethoven} alt="Beethoven">
    </div>

    <footer> 
        <div id="logos">
                <a href="AbdulmalikMeshari@gmail.com">
                    <img class="logo" src={gmail_logo}>
                </a>
                <a href="https://www.linkedin.com/in/abdulmalik-almadhi-234610235">
                    <img class="logo" src={linkedin_logo}>
                </a>
                <a href="twitter.com">
                    <img class="logo" src={X_logo}>
                </a>
            </div>
            <span><small><a href="homepage-ar.html">Translate to Arabic</a></small></span><br>
            <span><small>&copy; 2023 Abdulmalik Almadhi</small></span>
      </footer>
      </div>
</body>