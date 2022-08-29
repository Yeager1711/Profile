import Vue from 'vue'
import Vuex from 'vuex'
import products from '../Server/products.json'
import contacts from '../Server/contacts.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    contacts: [],
  },

  getters: {
    products: (state) => state.products,
    contacts: (state) => state.contacts
  },

  actions: {
    getProducts({commit}) {
      commit("getProductData")
    },

    getContacts({ commit }) {
      commit("getContactData")
    },

    // thanh trượt contacts
    actionContacts({ commit }) {
      commit("showNavigation")
    },

    // remove active nav
    removeNav({ commit }) {
      commit("removeNavbar")
    },

    convert({commit}) {
      commit("convertBody")
    }
  },

  mutations: {
    getProductData(state) {
      state.products = products;
    },

    getContactData(state) {
      state.contacts = contacts;
    },

    showNavigation() {
      var contacts = document.querySelector(".contacts");
      contacts.classList.toggle("active");

      window.onscroll = () => {
        contacts.classList.remove("active");
      }
    },

    removeNavbar() {
      var contacts = document.querySelector(".contacts");
      contacts.classList.remove("active");
    },

    convertBody() {
      let themeBtn = document.querySelector('#btn-setting');
      themeBtn.classList.toggle("active");
      
      if(themeBtn.classList.contains("active")){
        document.body.classList.add('active');
      }else{
          document.body.classList.remove('active');
      }
    }
  },

  modules: {
  }
})
