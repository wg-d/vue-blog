<template>
    <div>
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in bannerItems"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
        <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="1400"
        >
            <v-slide-group
                
                class="pa-4"
                active-class="success"
                show-arrows
                >
                <v-slide-item
                  v-for="(unit,i) in sliderItems"
                  :key="i"
                  v-slot="{ active, toggle }"
                >
                    <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    @click="toggle"
                    width="300"
                    >
                        <v-img
                        height="250"
                        :src="unit.src"
                        ></v-img>
                        <v-card-title>{{unit.title}}</v-card-title>
                        <v-card-text>{{unit.text}}</v-card-text>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
        <div>
            <VueSlickCarousel v-bind="settings"
            >
              <div
              v-for="(last,i) in lastItems"
              :key="i"
              ><v-img
              height="300"
              :src="last.src"
              class="mx-3"
              ></v-img></div>
            </VueSlickCarousel>
          </div>
    </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name:'Home',
    components: { VueSlickCarousel },
    data () {

      return {
        model: null,
        bannerItems: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        settings:{
           "dots": true,
          "infinite": true,
          "initialSlide": 2,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "swipeToSlide": true
        },
        sliderItems:[
          {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',title:'Cafe Badilico',text:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'},
          {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',title:'Cafe Badilico',text:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'},
          {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',title:'Cafe Badilico',text:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'},
          {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',title:'Cafe Badilico',text:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'},
          {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',title:'Cafe Badilico',text:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'},
          {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',title:'Cafe Badilico',text:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'}
        ],
        lastItems:[
          {src: 'https://picsum.photos/1024/250/?image=41',},
          {src: 'https://picsum.photos/250/250/?image=14',},
          {src: 'https://picsum.photos/250/250/?image=25',},
          {src: 'https://picsum.photos/250/250/?image=30',},
          {src: 'https://picsum.photos/250/250/?image=77',},
          {src: 'https://picsum.photos/250/250/?image=98',},
          {src: 'https://picsum.photos/250/250/?image=119',},
        ]
      }
    },
    methods:{

    }
}
</script>
<style>
.v-carousel__controls{
   background: none !important;
}
</style>