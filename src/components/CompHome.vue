<template>

  <section>
    <section class="home">

    <div class="home-banner">
        <div v-for="(banner, index) in bannerItems" 
        :key="`banner-${index}`"
        class="banner-content">
            <h3>{{banner.title}}</h3>
            <p>{{banner.describe}}</p>

            <button class="btn-link"> {{banner.button}}</button>
        </div>

        <div class="banner-image">
            <img src="./images/image-3.png" alt="">
        </div>
    </div> 
    </section>

    
  </section>
</template>

<script>

export default {
    name:"comp-home",

    components:{ 
    },
    data() {
        return {
            bannerItems:[
                {
                    title:"Sáng tạo trong thiết kế giao diện mẫu web Planding",
                    describe:"Làm việc hiệu quả với nền tảng giao diện thân thiện, dễ sử dụng và để quản lý. Thiết kế giao diện mẫu",
                    button:"Bắt đầu ngay bây giờ"
                }
            ]
        }
    },
}
</script>

<style lang="scss">
    .home{
        border-radius: 1rem;
        padding: 0;
        width: 100%;
        min-height: 40vh;
        height: 100%;

       .home-banner{
        background: url(../components/images/home-banner.png) no-repeat;
        background-size: cover;
        overflow: hidden;
        height: 80%;
        padding: 1rem;
        background-position: center;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;

            .banner-content{
                flex: 1 1 10rem;

                h3{
                    font-size: 3.5rem;
                    color: #fff;
                    margin: 1rem 0;
                }

                p{
                    
                    font-size: 1.7rem;
                    animation: fadeUp .6s linear;
                    color: #fff;
                }

                .btn-link{
                    border: none;
                    position: relative;
                    line-height: 2;
                    color: #fff;
                    font-size: 1.6rem;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 5rem;
                    padding:  1.5rem 3.2rem;
                    font-family: 'Poppins', sans-serif;
                    background-image: linear-gradient(to right, #F434A1 0%, #ff8442 100%);
                
                    &:hover{
                       background-image: linear-gradient(to right, #ff8442 0%, #F434A1 100%);
                    }
                }
            }

            .banner-image{
                flex: 1 1 32rem;
                max-width: 40rem;
                margin-top: 3rem;
                animation: fadeRight 1s ease;

                img{
                    max-width: 100%;
                    animation: infinite 3s linear infinite;
                }
            }
       }
    }

    // banner-image
    @keyframes infinite{
        0%{
             transform: translateY(0);
        }

        50%{
             transform: translateY(-5rem);
        }

        100%{
            transform: translateY(0);
        }
    }

    @keyframes fadeRight{
        0%{
            transform: translateX(15rem);
        }

        100%{
            transform: translateX(0);
        }
    }

    // text-banner

    @keyframes fadeUp{
        0%{
            transform: translateY(10rem);
        }
        
        100%{
            transform: translateY(0);
        }
    }


@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  section {
    padding: 0;
  }

  .home{ 

    .home-banner{
        display: flex;
        text-align: center;
        align-items: center;
        
        .banner-content{
            max-width: 60rem;
            width: 90%;

            h3{
                font-size: 4rem;
                font-weight: bolder;
            }
        }

        .banner-image{
            display: none;
        }
    }
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