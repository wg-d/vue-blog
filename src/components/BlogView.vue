<template>
    <div class="blogImage">
        <v-container>
            <v-sheet>
                <v-card 
                v-for="(item,i) in posts"
                :key="i"
                >
                    <v-row>
                        <v-col cols="12" lg="5" class="pa-0 px-3">
                            <v-img :src="item.img" height="300" contain>
                            </v-img>
                        </v-col>
                        <v-col cols="12" lg="7">
                            <v-card-title class="justify-center text-h3"><span class="indigo--text text--darken-3">{{item.title}}</span></v-card-title>
                            <v-card-text>{{item.text}}</v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-sheet>
        </v-container>
    </div>
        
</template>
<script>
export default {
    name:'Blog',
   data () {
      return {
        blogItems:[
                {img:'./assets/pricing.jpg',title:'Today News',text:'Brett has been starting, growing, and monetizing websites since 2014. While in college, he began to learn about digital marketing. After graduating, he continued to build a diverse portfolio of websites while working a full time job. After years of building the portfolio on the side, he made the jump to run his websites full time.'},
                {img:'./assets/clint-mckoy.jpg',title:'Car Post',text:''},
                {img:'./assets/login.jpg',title:'Wonderful!!',text:''},
                {img:'./assets/register.jpg',title:'Winter',text:''},
            ],
            posts:[]
        }

    },
    created(){
        let uri ='//localhost:4000/blogs';
        this.axios.get(uri).then(response =>{
            this.posts=response.data;
        });
    }
}
</script>
<style>
.blogImage{
    background:url('https://cdn.vuetifyjs.com/images/parallax/material2.jpg') no-repeat;
    background-size: cover;
}
</style>