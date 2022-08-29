<template>
  <section class="header">
    <a href="/" class="logo" 
    data-aos="fade-down"
    >
    <img src="./images/logo-local.png" alt="" />
    </a>

    <nav class="navbar"
    data-aos="fade-right"
    >
      <router-link
        :to="nav.href"
        v-for="(nav, index) in navItems"
        :key="`nav-${index}`"
        :active-class="nav.active"
        :tag="nav.tag"
        exact
      >
        {{ nav.item }}
      </router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: "comp-header",
  data() {
    return {
      navItems: [
        {
          item: "Trang chủ",
          href: "/",
          active: "active",
          tag: "a",
        },

        {
          item: "Liên kết",
          href: "links",
          active: "active",
          tag: "a",
        },
      ],
    };
  },

  methods: {
    showNavbar() {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("active");

      window.onscroll = () => {
        navbar.classList.remove("active");
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  min-width: 19%;
  height: 100%;
  padding-right: 0;

  .logo {
    display: flex;
    box-shadow: var(--box-shadow);
    border-radius: 5rem 0 5rem 0;
    background: var(--white);

    img {
      margin: auto;
      width: 10rem;
    }
  }

  .navbar {
    padding: 5rem 1rem 1rem 1rem;
    margin: 1rem 0;
    height: auto;
    background: var(--white);
    box-shadow: var(--box-shadow);
    border-radius: 1rem;
    display: block;
    text-align: center;

    a {
      font-size: 1.7rem;
      color: var(--black);
      padding: 1rem;
      display: block;
      font-weight: 550;

      &.active {
        opacity: 1;
        transition: .3s linear;
        color: #fff;
        border-radius: 5rem;
        background: var(--contacts-button);
        box-shadow: var(--box-shadow);
      }
    }
  }
}

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .header {
    display: none;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>
