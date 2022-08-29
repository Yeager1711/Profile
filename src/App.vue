<template>
  <div id="app">
     <div class="wrapper">
          <div class="row">
            <comp-header class="compHeader" />

            <router-view />
      
            <comp-contacts class="compContacts" />
          </div>
          <comp-services />
      </div>
      
   <comp-queries />
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue';
import CompContacts from './components/CompContacts.vue';
import CompQueries from './components/CompQueries.vue';
import CompServices from './components/CompServices.vue';

export default {
  name: 'App',
  components: {
    CompHeader,
    CompContacts,
   CompServices,
    CompQueries
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400;1,500&family=Nunito:wght@200;300;400;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,500;1,700&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
}

:root {
    --black:#333;
    --white:#fff;
    --bg-box:#fff;
    --contacts-button:#45b895;
    --btn-gradient:-webkit-gradient(linear, left top, right top, color-stop(0, #F434A1), color-stop(100, #ff8442));
    --link-button:#eb2f5b;
    --light-bg:#eeeeee;
    --box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3);
    --light-search:#e0e0e0;
}

.wrapper{
  .row{
    display: flex;
    justify-content: space-between;
  }
}

html {
  font-size: 62.5%;
  overflow-x: none;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  
    &::-webkit-scrollbar {
        display: none;
    }

    &::-webkit-scrollbar-track {
        background: #fff;
    }

    &::-webkit-scrollbar-thumb{
        background: #fbb710;
        border-radius: 5rem;
    }    
}

a{
  text-decoration: none;
}

button{
  outline: none;
}

section {
  padding: 1rem;
  font-family: "Nunito", sans-serif;
  text-transform: none;
}

body{
  margin:0;
  background:var(--light-bg);
  transition: .3s linear;

  &.active{
    transition: .6s linear;
    --red: #fa4f09;
    --black:#fff;
    --white:#333;
    --bg-box:#333;
    --contacts-button:#45b895;
    --link-button:#fe9614;
    --light-bg:#111;
    --light-search:#e0e0e0;
  }
}

.heading {
  max-width: 80rem;
  margin: auto 0;
  font-size: 4vw;
  font-weight: 900;
  color: #fff;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  
  span {
    // color: #3cb815;
    color: #3cb815;
  }
}

.title {
  color: #fff;
  padding-left: 1.5rem;
  font-size: 1.5vw;
}

// owl carousel
.owl-theme{
  .owl-nav{
    display: none;
  }

  .owl-dots{
    margin-top: 1.5rem;

    .owl-dot{
      span{
      width: 3rem;
      height: 1rem;
      }
    }
  }
} 

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: var(--contacts-button);
}

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  section {
    padding: 1rem;
  }
}

@media (max-width: 768px) {

}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>
