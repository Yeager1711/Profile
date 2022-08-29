<template>
  <section class="contacts">
    <div class="user"
    data-aos="fade-down"
    >
        <router-link to="/other/page/managent/admin" class="image">
            <img src="./images/img-user.jpg" alt="">
            <span>Huỳnh Nam</span>
        </router-link>
    </div>

    <div class="contacts-link"
    data-aos="fade-left"
    >
        <a v-for="(contacts, index) in contacts"
        :key="`contacts-${index}`" 
        :href="contacts.href"
        data-aos="fade-up"
        >
        <i :class="contacts.icon"></i>
        {{contacts.name}}
        </a>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"comp-contacts",

    computed:{
        ...mapGetters(["contacts"])
    },

    methods:{
        ...mapActions(["getContacts"])
    },

    mounted() {
        return this.getContacts();
    }
}
</script>

<style lang="scss" scoped>
.contacts{
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    min-width: 19%;
    padding-left: 0;


    .user{
        display: flex;
        box-shadow: var(--box-shadow);
        border-radius:5rem 0 5rem 0 ;
        padding: 1rem;
        background: var(--white);

        .image{
            display: flex;
            align-items: center;
            margin: auto;

            img{
                width: 4rem;
                border-radius: 5rem;
                margin-right: .5rem;
            }

            span{
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--black);                
            }
        }
    }

    .contacts-link{
        padding: 5rem 1rem 1rem ;
        margin: 1rem 0;
        background: var(--white);
        height: auto;
        box-shadow: var(--box-shadow);
        border-radius: 1rem;
        display: block;

        a{
            font-size: 1.7rem;
            color: var(--black);
            padding: 1rem;
            margin: 2rem auto;
            display: block;
            font-weight: 650;
            box-shadow: var(--box-shadow);
            border-radius: 5rem;
            background: var(--white);

            &:hover{
                transition: .2s linear;
                transform: scale(1.1);
                background: var(--contacts-button);
                color: var(--white);
            }

            i{
                margin-right: 1rem;
            }
        }
    }
}

@media (max-width: 768px) {

    .contacts{
        position: fixed;
        top: 0;
        right: -100%;
        bottom: 0;
        transition: .3s ease;
        width: 20rem;

        &.active{
            transition: .3s ease;
            right: 1rem;
            z-index: 99999 !important;
        }
    }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>


