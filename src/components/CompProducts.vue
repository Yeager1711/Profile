<template>
  <section class="products-link">
    <form action="">
      <div class="box-search">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Tìm kiếm danh mục ..."
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </form>

    <div class="total-products">
      <h3> Số lượng danh mục hiện có: ({{resultQuery.length}})</h3>
    </div>

    <div class="box-container">
      <div
        v-for="(item, index) in resultQuery"
        :key="`item-${index}`"
        :class="item.cls"
      >
        <div class="image-products">
          <div class="image-img">
              <img :src="item.img_products" alt="" />
          </div>

          <div class="ic-image">
            <img class="ic-1" :src="item?.ic_1" alt="">
            <img class="ic-2" :src="item?.ic_2" alt="">
            <img class="ic-3" :src="item?.ic_3" alt="">
            <img class="ic-3" :src="item?.ic_4" alt="">
          </div>
        </div>

        <div class="content-products">
          <h3>Web: {{ item.name }}</h3>
          <a :href="item.href">xem liên kết</a>
        </div>

        
      </div>

      <!-- <v-else class="ifElse">
        <div class="titleElse">
          <h3>Danh mục bạn đang tìm hiện không có hoặc chưa cập nhật lên 😉</h3>
        </div>
      </v-else> -->
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "comp-products",

    data() {
        return {
    
            searchQuery:""
        }
    },
    
    computed:{
      ...mapGetters(["products"]),

      resultQuery() {
        if(this.searchQuery) {
          return this.products.filter((item) =>{
            return this.searchQuery
            .toLowerCase()
            .split("")
            .every((v) => item.name.toLowerCase().includes(v))
          })
        }else{
          return this.products
        }
      },
    },

    methods: {
      ...mapActions(["getProducts"])
    },

    mounted() {
      return this.getProducts();
    }
};
</script>

<style lang="scss">
.products-link {
  min-width: 58%;
  margin-bottom: 3rem;
  padding: 1rem;
  
  form {
    margin: 2rem 0;

    .box-search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      background: var(--light-search);
      border-radius: 5rem;

      input {
        width: 80rem;
        max-width: 90%;
        outline: none;
        height: 4rem;
        border-radius: 5rem;
        background: var(--light-search);
        border: none;
        font-size: 16px;
        
        &::placeholder{
          font-size: 1.5rem;
        }
      }

      i {
        padding: 0.5rem;
        font-size: 16px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .total-products{
    h3{
      font-size: 1.6rem;
    }
  }

  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.5rem;
    max-height: 52vh;
    overflow-y: auto;
    padding: .5rem;

    &::-webkit-scrollbar{
      width: .5rem;
      
    }

    &::-webkit-scrollbar-thumb{
      background: #333;
      border-radius: 5rem;
    }

    &::-webkit-scrollbar-track{
      background: #eee;
    }

    .box {
      background: var(--bg-box);
      box-shadow:var(--box-shadow);
      padding: 2rem;
      border-radius: 1rem;
      animation: showed .4s ease ;

      .image-products {
        border-bottom: 0.4rem solid #cfcfcf;
        position: relative;
        overflow: hidden;

        .image-img{
           img {
            width: 100%;
          }
        }

        .ic-image{
          position: absolute;
          bottom: -100%;
          left: 1rem;
          display: flex;
          margin: .5rem 0;

          .ic-1,
          .ic-2,
          .ic-3,
          .ic-4{
            margin: 0 .5rem;
            width: 2rem;
          }

          .ic-1{
            margin-left: 0;
          }

          .ic-4{
            margin-right: 0;
          }
        }
      }

      .content-products {
        h3 {
          font-size: 1.7rem;
          font-weight: 650;
          color: var(--black);
        }

        a {
          padding: 0.5rem 1.7rem;
          font-size: 1.7rem;
          color: #fff;
          background: var(--link-button);
          border-radius: 5rem;

          &:hover {
            transition: 0.3s linear;
            letter-spacing: 0.1rem;
          }
        }
      }

      

      &:hover{
        transition: .3s linear;
        transform: translateY(-.7rem);

        .image-products{
          overflow: hidden;
          .ic-image{
            transition: .3s ease;
            bottom: 0;
            padding: .5rem 2rem;
            background: var(--white);
            overflow: hidden;
            border-radius: 5rem;
            box-shadow: var(--box-shadow);
           
            
            .ic-1{
              animation: fadeup .45s linear;
            }

            .ic-2{
              animation: fadeup .55s linear;
            }

            .ic-3{
              animation: fadeup .65s linear;
            }

            .ic-4{
              animation: fadeup .7s linear;
            }
          }
        }
      }

        
    }
  }
}


@keyframes fadeup{
  0%{
    transform: translateY(-3rem);
  }

  100%{
    transform: translateY(0);
  }
}

@keyframes showed{
  0%{
    transform: translateY(0);
  }

  100%{
    transform: translateY(-5rem);
  }
}

</style>
