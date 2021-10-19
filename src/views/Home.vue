<template>
  <header class="header">
    <div class="header__container-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
        <path
          fill="#33323D"
          fill-rule="evenodd"
          d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
        />
      </svg>
      <nav class="navigation">
        <button class="navigation__open">
          <img src="../assets/icons/hamburger.svg" alt="Menu" />
        </button>
        <button class="navigation__close">
          <img src="../assets/icons/close.svg" alt="close" />
        </button>
        <ul class="navigation__ul">
          <li class="navigation__list">
            <router-link to="/" class="navigation__link">Accueil</router-link>
          </li>
          <li class="navigation__list">
            <router-link to="/portfolio" class="navigation__link"
              >Portfolio</router-link
            >
          </li>
          <li class="navigation__list">
            <router-link to="/contact" class="navigation__link"
              >Contactez moi</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="home">
    <section class="home__section-1">
      <div class="home__container-1">
        <h1 class="home__h1">
          Bonjour, je m'appelle Roméo Nobimé et j'adore construire de beau sites
          internets
        </h1>
        <a class="button" href="#about-me">
          <div class="button__container-1">
            <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
            >
              <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                <path d="M0 9l8 4 8-4" />
                <path opacity=".5" d="M0 5l8 4 8-4" />
                <path opacity=".25" d="M0 1l8 4 8-4" />
              </g>
            </svg>
            <p class="button__p">À propos de moi</p>
          </div>
        </a>
      </div>
    </section>
    <!--<section>
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
          <router-link to="/portfolio">Voir le Portfolio</router-link>
        </figcaption>
      </figure>
    </section>
    <section>
      <h2>Intéressé à travailler avec moi ?</h2>
      <router-link to="/contact">Contactez moi</router-link>
    </section>-->
  </main>
  <!--<footer>
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
    <nav>
      <ul>
        <li>
          <a href="https://github.com/For4llx"
            ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
              <path
                fill="#33323D"
                d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"
              /></svg
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rom%C3%A9o-nobim%C3%A9-308649219/"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#33323D"
                d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
              /></svg
          ></a>
        </li>
      </ul>
    </nav>
  </footer>-->
</template>

<script>
export default {
  name: 'Home',
}
</script>
