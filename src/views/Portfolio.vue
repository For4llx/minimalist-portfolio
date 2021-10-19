<template>
  <header>
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
      <path
        fill="#33323D"
        fill-rule="evenodd"
        d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
      />
    </svg>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contactez moi</router-link></li>
      </ul>
    </nav>
    <button><img src="../assets/icons/hamburger.svg" alt="Menu" /></button>
    <button><img src="../assets/icons/close.svg" alt="close" /></button>
  </header>
  <section>
    <figure>
      <img src="" />
      <figcaption>
        <h2></h2>
        <p></p>
        <router-link>Voir le projet</router-link>
      </figcaption>
    </figure>
  </section>
  <section>
    <h2>Intéressé à travailler avec moi ?</h2>
    <router-link>Contactez moi</router-link>
  </section>
  <footer>
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
      <path
        fill="#33323D"
        fill-rule="evenodd"
        d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
      />
    </svg>
    <nav>
      <ul>
        <li><router-link>Home</router-link></li>
        <li><router-link>Portfolio</router-link></li>
        <li><router-link>Contactez moi</router-link></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <router-link
            ><img src="../assets/icons/github.svg" alt="GitHub"
          /></router-link>
        </li>
        <li>
          <router-link
            ><img src="../assets/icons/linkedin.svg" alt="LinkedIn"
          /></router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Portfolio',
}
</script>
