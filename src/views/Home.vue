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
        <li><router-link>Home</router-link></li>
        <li><router-link>Portfolio</router-link></li>
        <li><router-link>Contactez moi</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h1>
        Bonjour, je m'appelle Roméo Nobimé et j'adore construire de beau sites
        internets
      </h1>
      <a href="#about-me">À propos de moi</a>
    </section>
    <section>
      <figure>
        <img src="../assets/homepage/desktop/photo_de_profil.jpg" />
        <figcaption>
          <h2>À propos de moi</h2>
          <p>
            Je suis un développeur front-end junior à la recherche d'un nouveau
            rôle dans une entreprise passionnante. Je me concentre pour écrire
            du code HTML accessible, en utilisant des pratiques CSS modernes et
            en écrivant du JavaScript propre. Lorsque j'écris du code
            JavaScript, j'utilise principalement Vue.js, mais je peux m'adapter
            à quels que soient les outils nécessaires. Je suis basé à Paris, en
            France, mais je serais heureux de travailler à distance et avoir de
            l'expérience dans des équipes à distance.
          </p>
          <router-link>Voir le Portfolio</router-link>
        </figcaption>
      </figure>
    </section>
    <section>
      <h2>Intéressé à travailler avec moi ?</h2>
      <router-link>Contactez moi</router-link>
    </section>
  </main>
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
  name: 'Home',
}
</script>
