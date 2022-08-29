<template>
  <section class="header-queries">
    <nav class="navbar">
      <!-- <div
        v-for="(item, index) in queriesItems"
        :key="`item-${index}`"
        :class="item.element"
        :id="item.cls"
        @click="slideContacts"
      >
       <router-link :to="item.href">
        <i :class="item.icon"></i>
        {{ item.name }}
       </router-link>
      </div> -->

      <div class="buttonBar" @click="removeNav">
        <router-link to="/"> <i class="fa-solid fa-home"></i> Home </router-link>
      </div>
      <div class="buttonBar" @click="removeNav"> 
       <router-link to="links">  <i class="fa-solid fa-link"></i> Liên kết </router-link>
        </div>
      <div class="buttonBar"  id="btn-setting" @click="convert"> <i class="fa-solid fa-gear"></i> Chuyển đổi</div>
      <div class="buttonBar" id="btn-menu" @click="actionContacts"> <i class="fa-solid fa-bars"></i> Menu</div>
    </nav>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "comp-queries",
  data() {
    return {
      queriesItems: [
        {
          element: "buttonBar",
          icon: "fa-solid fa-home",
          href: "/",
          name: "Trang chủ",
          open: "active",
          tag: "a",
        },

        {
          element: "buttonBar",
          icon: "fa-solid fa-link",
          href: "links",
          name: "Liên kết",
          open: "active",
          tag: "a",
        },

        {
          element: "buttonBar",
          cls: "btn-setting",
          icon: "fa-solid fa-gear",
          href: "",
          name: "Chuyển đổi",
          open: "active",
          tag: "a",
        },

        {
          element: "buttonBar",
          cls: "btn-menu",
          icon: "fa-solid fa-bars",
          href: "",
          name: "Menu",
          open: "active",
          tag: "a",
        },
      ],
    };
  },

  methods:{
    ...mapActions(["actionContacts", "removeNav", "convert"])
  }
};
</script>

<style lang="scss">
.header-queries {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  box-shadow: var(--box-shadow);
  z-index: 1 !important;
  padding: 1rem;

  .navbar {
    margin: auto;
    .buttonBar {
      display: inline-block;
      text-align: center;
      padding: 0.5rem;
      font-size: 1.2rem;
      margin: 0 2rem;
      color: var(--black);
      cursor: pointer;

      a {
        color: var(--black);

        i {
          display: block;
          font-size: 2rem;
        }
      }

      i {
        display: block;
        font-size: 2rem;
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
  .header-queries {
    display: flex;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>
