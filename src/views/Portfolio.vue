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
    <section class="presentation">
      <figure class="presentation__figure">
        <img
          class="presentation__img"
          src="../assets/project/reservia_Desktop.png"
        />
        <figcaption class="presentation__figcaption">
          <h2 class="presentation__h2">Reservia</h2>
          <p class="presentation__description">
            Ce projet m'a demandé de construire une page d'accueil entièrement
            responsive selon un design fourni. J'ai utilisé HTML5 avec du CSS
            vanilla en utilisant principalement flexbox. Ce projet m'a
            principalement initié à la méthodologie BEM, aux bonnes pratiques et
            au respect des normes W3C en HTML et CSS.
          </p>
          <router-link class="button-2" to="/portfolio"
            >Voir le projet</router-link
          >
        </figcaption>
      </figure>
      <figure class="presentation__figure presentation__figure--reverse">
        <img
          class="presentation__img"
          src="../assets/project/ohmyfood_Desktop.png"
        />
        <figcaption class="presentation__figcaption">
          <h2 class="presentation__h2">Oh My Food</h2>
          <p class="presentation__description">
            Ce projet m'as demandé de construire plusieurs pages entièrement
            responsive selon un design fourni pour un site de reservation de
            menu en restaurant. J'ai utilisé HTML5 avec du SASS et des
            animations CSS moderne. Ce projet m'as principalement inité au
            animations, à SASS et au concept de réutilisation de composants CSS.
          </p>
          <router-link class="button-2" to="/portfolio"
            >Voir le projet</router-link
          >
        </figcaption>
      </figure>
      <figure class="presentation__figure">
        <img
          class="presentation__img"
          src="../assets/project/lachouetteagence_Desktop.png"
        />
        <figcaption class="presentation__figcaption">
          <h2 class="presentation__h2">La Chouette Agence</h2>
          <p class="presentation__description">
            Ce projet m'as demandé retravailler un site internet déjà existant
            pour améliorer ses performences, son SEO et son accessibilité. J'ai
            utilisé l'outil lighthouse pour faire un audit avant et après mon
            intervention. Ce projet m'as inité au bonne pratique SEO, au bonne
            pratique d'accessibilité et à l'amélioration des performences d'un
            site internet.
          </p>
          <router-link class="button-2" to="/portfolio"
            >Voir le projet</router-link
          >
        </figcaption>
      </figure>
      <figure class="presentation__figure presentation__figure--reverse">
        <img
          class="presentation__img"
          src="../assets/project/Orinoco_Desktop.png"
        />
        <figcaption class="presentation__figcaption">
          <h2 class="presentation__h2">Orinoco</h2>
          <p class="presentation__description">
            Ce projet m'as demandé de designer et de construire un site internet
            de E-commerce. J'ai utilisé figma pour le design et HTML5, SASS,
            Javascript vanilla pour le développement front. Ce projet m'as
            initié aux L'UX/UI desing, Javascript et à ses bonnes pratiques, aux
            plan de test, au formulaire et au appel API.
          </p>
          <router-link class="button-2" to="/portfolio"
            >Voir le projet</router-link
          >
        </figcaption>
      </figure>
      <figure class="presentation__figure">
        <img
          class="presentation__img"
          src="../assets/project/thehottestreview_Desktop.png"
        />
        <figcaption class="presentation__figcaption">
          <h2 class="presentation__h2">The hottest review</h2>
          <p class="presentation__description">
            Ce projet m'as demandé de construire une API pour un site de revue
            de sauce piquante. J'ai utilisé Node.js et son framework Express,
            Mongodb pour la base de donnée, jsonwebtoken pour
            l'anthentification, bcrypt pour le chiffrement de mot de passe. Ce
            projet m'as inité au back-end, au bonne pratique de sécurité
            informatique et à l'algorithmie.
          </p>
          <router-link class="button-2" to="/portfolio"
            >Voir le projet</router-link
          >
        </figcaption>
      </figure>
      <figure class="presentation__figure presentation__figure--reverse">
        <img
          class="presentation__img"
          src="../assets/project/groupomania_Desktop.png"
        />
        <figcaption class="presentation__figcaption">
          <h2 class="presentation__h2">Groupomania</h2>
          <p class="presentation__description">
            Ce projet m'as demandé de designer et de construire une application
            fullstack en guise de réseau social pour une entreprise. J'ai
            utilisé figma pour le design. J'ai utilisé pour le front HTML5,
            Vue.js et SASS. Pour le back-end, j'ai utilisé Node.js et express,
            SQL, l'ORM sequilize, jsonwebtoken et bcrypt. Ce projet m'as inité à
            Vue.js et au développement fullstack.
          </p>
          <router-link class="button-2" to="/portfolio"
            >Voir le projet</router-link
          >
        </figcaption>
      </figure>
    </section>
    <section class="home__section-3">
      <h2 class="home__h2 home__h2--no-margin">
        Intéressé à travailler avec moi ?
      </h2>
      <router-link class="button-2" to="/contact">Contactez moi</router-link>
    </section>
  </main>
  <footer class="footer">
    <div class="footer__container-1">
      <svg
        class="footer__logo"
        xmlns="http://www.w3.org/2000/svg"
        width="61"
        height="32"
      >
        <path
          class="footer__logo-path"
          fill="#33323D"
          fill-rule="evenodd"
          d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
        />
      </svg>
      <nav class="navigation navigation--footer">
        <ul class="navigation__ul navigation__ul--footer">
          <li class="navigation__list navigation__list--footer">
            <router-link to="/" class="navigation__link navigation__link--white"
              >Accueil</router-link
            >
          </li>
          <li class="navigation__list navigation__list--footer">
            <router-link
              to="/portfolio"
              class="navigation__link navigation__link--white"
              >Portfolio</router-link
            >
          </li>
          <li class="navigation__list navigation__list--footer">
            <router-link
              to="/contact"
              class="navigation__link navigation__link--white"
              >Contactez moi</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="footer__container-2">
        <nav class="social">
          <ul class="social__ul">
            <li class="social__list">
              <a href="https://github.com/For4llx"
                ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                  <path
                    class="social__icon-path"
                    fill="#33323D"
                    d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"
                  /></svg
              ></a>
            </li>
            <li class="social__list">
              <a
                href="https://www.linkedin.com/in/rom%C3%A9o-nobim%C3%A9-308649219/"
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    class="social__icon-path"
                    fill="#33323D"
                    d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
                  /></svg
              ></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Portfolio',
}
</script>
