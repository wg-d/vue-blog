<template>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Blog site</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" color="white">
            <v-btn 
                v-for="item in menuItems" 
                :key="item.title" 
                color="deep-purple accent-4"
                depressed
                >
                <router-link :to="item.to" class="white--text text-decoration-none p-3">
                    <v-icon left >{{item.icon}}</v-icon>
                        {{item.title}}
                </router-link>
            </v-btn>
            <v-btn
            color="deep-purple accent-4"
            depressed
            v-if="!check"
            >
                <router-link :to="'/login'" class="white--text text-decoration-none p-3">
                    <v-icon left >mdi-account</v-icon>
                    Login
                </router-link>
            </v-btn>
            <v-btn
            color="deep-purple accent-4"
            depressed
            v-if="check"
            @click.prevent="logout"
            >
                <router-link 
                :to="'/'" 
                class="white--text text-decoration-none p-3">
                    <v-icon left >logout</v-icon>
                    Logout
                </router-link>
            </v-btn>
        </v-toolbar-items>
        <v-menu
            left
            bottom
        >
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            </template>
            <v-list>
            <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
            >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>

  export default {
    name: 'Header',
    data(){
        return{
                menuItems:[
                    {
                        title:"Home",icon: 'home',to:'/',
                    },
                    {
                        title:"Blog",icon: 'mdi-blogger',to:'/blogs'
                    },
                    {
                        title:"Blog Create",icon: 'create',to:'/create'
                    },
                ],
                
            }
        },
        // computed: mapState({
        //     check(){
        //         tokenInfo=this.$store.state.usermodule.token
        //         return tokenInfo
        //     }
           
        // })
        computed: {
            check () {
                return this.$store.state.usermodule.token
            }
        },
        methods:{
            logout(){
                console.log("adfdf");
                localStorage.removeItem("token");
                this.$store.dispatch('logout')
                .then(()=>{                   
                })               
            }
        }
        // created(){
        //     console.log(this.$store.state.usermodule.token);
        // }
        
    }

</script>