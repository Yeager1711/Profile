<template>
  <section class="admin">
    <h1 class="heading">admin</h1>

    <div class="box-container">
      
      <form @submit.prevent="save()" >
        <!-- image -->
        <div class="box">
            <div class="title-box">
                <h3>Chọn hình ảnh</h3>
            </div>

            <div class="box-add">
                <div class="box-input">
                    <input type="text" 
                    v-model="product.image" 
                    />
                </div>
            </div>
        </div>

      <!-- name products -->

        <div class="box">
            <div class="title-box">
                <h3>Tên sản phẩm</h3>
            </div>

            <div class="box-add">
                <div class="box-input">
                    <input type="text" 
                    v-model="product.name" 
                    />
                </div>
            </div>
        </div>

      <!-- price -->
        <div class="box">
            <div class="title-box">
                <h3>Nhập giá tiền</h3>
            </div>

            <div class="box-add">
                <div class="box-input">
                    <input type="number" 
                    v-model="product.price" 
                    />
                </div>
            </div>
        </div>

        <!-- buton function -->
        <div class="button-function">
            <button class="btn-save"> Thêm </button>
            <button class="btn-remove"> Xóa </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "comp-admin",

  data() {
    return {
        errors:{
            image:'',
            name:'',
            price:''  
        },

        product:{
            image:'',
            name:'',
            price:'',
        }
    }
  },

  methods:{
    validate() {

        this.errors = {
            image:'',
            name:'',
            price:''  
        }

        if(!this.product.name) {
            this.errors.name = 'Product name is required'
        }
    },  

    save(){
        this.validate()
        console.log(this.errors)
    }
  }
};
</script>

<style lang="scss">
.admin {
  width: 100%;

    .heading {
        text-align: center;
        text-transform: capitalize;
        font-size: 3rem;
        color: #333;
        margin-top: 3rem;
    }

  .box-container {
    max-width: 60rem;
    width: 100%;
    margin: 1.5rem auto;

    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      .title-box{
        flex: 1 1 20rem;

        h3{
            font-size: 1.6rem;
        }
      }

      .box-add{
        flex: 1 1 40rem;
       
        .box-input{
            max-width: 100%;
            height: 4rem;
            border: .1rem solid #777;
            align-items: center;
            display: flex;
            font-size: 16px;
            border-radius: .3rem;

            input{
                padding: 0 1.5rem;
                border: none;
                width: 100%;
                background: #eee;
                outline: none;
            }
        }
      }
    }

    .button-function{
        margin-top: 2rem;
        .btn-save,
        .btn-remove{
            display: inline-block;
            padding: .7rem 1.5em;
            background: var(--contacts-button);
            color: #fff;
            font-size: 1.6rem;
            border: none;
            border-radius: 5rem;
            margin-right: 1rem;
            box-shadow: var(--box-shadow);

            &:hover{
                cursor: pointer;
                transform: scale(1.05);
                letter-spacing: .1rem;
                transition: .3s ease;
            }
        }

        .btn-remove{
            background: red;
            color: #fff;
            margin: 0;
        }
    }
  }
}
</style>
