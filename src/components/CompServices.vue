<template>
  <section class="services">
    <div class="list-title">
      <div class="title" data-aos="fade-right">Chúng tôi giúp bạn</div>
      <h1 class="heading" data-aos="fade-right">
          Mặt nổi bật nhất là các <span data-aos="fade-up">dịch vụ</span> tận tâm
        </h1>
    </div>

    <div class="box-container">
      <div class="flex-box">
        <carousel
          :margin="10"
          :responsive="responsive"
          :autoplay="true"
        >
          <div
            v-for="(serices, index) in servicesItems"
            :key="`services-${index}`"
            :class="serices.class_services"
            data-aos="fade-up"
          >
            <div class="image">
              <img :src="serices.img_services" alt="" />
            </div>

            <div class="content-service">
              <h3>{{ serices.text_serices }}</h3>
              <span>{{ serices.describe_serices }}</span>
            </div>
          </div>
        </carousel>
      </div>

      <div class="flex-image">
        <img src="./images/services.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "comp-services",
  components: {
    carousel,
  },

  data() {
    return {
      responsive:{
            0: { items: 1, nav: false },
            600: { items: 1, nav: true },
            900: { items: 1, nav: true },
      },

      servicesItems: [
        {
          class_services: "box",
          img_services: require("./images/service-1.png"),
          text_serices: "Hoàn toàn đáp ứng cho tất cả các thiết bị",
          describe_serices:
            "Căn chỉnh ứng dụng tùy chỉnh được thiết kế đặc biệt để đáp ứng hầu hết toàn ứng dụng mang lại trải nghiệm đơn giản",
        },

        {
          class_services: "box",
          img_services: require("./images/service-2.png"),
          text_serices: "Thân thiện với SEO và tối ưu hóa",
          describe_serices:
            "Căn chỉnh ứng dụng tùy chỉnh được thiết kế đặc biệt để đáp ứng hầu hết toàn ứng dụng mang lại trải nghiệm đơn giản",
        },

        {
          class_services: "box",
          img_services: require("./images/service-3.png"),
          text_serices: "Siêu nhanh và chắc chắn",
          describe_serices:
            "Căn chỉnh ứng dụng tùy chỉnh được thiết kế đặc biệt để đáp ứng hầu hết toàn ứng dụng mang lại trải nghiệm đơn giản",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  background: url(./images/banner-services1.jpg) no-repeat;
  position: relative;
  width: auto;
  background-size: cover;
  align-items: center;
  margin-bottom: 3rem;
  padding: 1rem;

  .list-title{
    overflow: hidden;
    position: relative;

    

    &::before{
      content: "";
      position: absolute;
      width: .8rem;
      min-height: 90%;
      background: #fff;
    }
  }

  .box-container {
    display: flex;
    flex-wrap:wrap-reverse;
    align-items: center;
    gap: 1.5rem;
    padding: 5rem 1rem;

    .flex-box {
      flex: 1 1 40rem;
      width: 50%;

      .box {
        padding: 1.5rem 1rem;
        background: #fff;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
        border-radius: 0.5rem;
        align-items: center;
        display: flex;

        .image {
         max-width: 20rem;
        }

        .content-service {
          margin-left: 1rem;

          h3 {
            margin: auto;
            font-size: 2rem;
            font-weight: 750;
            margin-bottom: 1.5rem;
          }

          span {
            font-size: 1.6rem;
            color: #555555;
          }
        }
      }
    }

    .flex-image {
      flex: 1 1 40rem;
      width: 50%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
