<template>
    <div class="login d-flex align-center">
        <v-container class="d-flex justify-center">
            <v-sheet height="400" width="300" color="rgba(0,0,0,0)">
                <v-text-field
                filled
                dense
                rounded
                outlined
                dark
                autocomplete="off"
                placeholder="Email"
                v-model="user_valid.email"
                >
                </v-text-field>
                <v-text-field
                type="password"
                filled
                dense
                outlined
                rounded
                dark
                autocomplete="off"
                placeholder="Password"
                v-model="user_valid.password"
                >
                </v-text-field>
                <v-btn
                rounded
                dark
                color="#b7801fdb"
                width="300"
                @click.prevent="login"
                >
                Login
                </v-btn>
                <div class="d-flex justify-end">
                    <v-btn :to="'/signup'" 
                    class="my-5"
                    dense
                    rounded
                    dark
                    height="30"
                    color="#46020287"
                    >Sign up</v-btn>
                </div>
            </v-sheet>
        </v-container>
    </div>
</template>
<script>
    export default{
        name:"Login",
        data:() => ({
            // back:'./assets/pricing.jpg',
            user_valid:{},
        }),
        methods: {
            login(){
                // let uri = '//localhost:4000/users/login';
                // this.axios.post(uri, this.user_valid).then((res) => {
                //     localStorage.setItem("token",res.data.token);
                //     this.$router.push({path:'blogs'});
                // });
                this.$store.dispatch('login', this.user_valid)
                .then(() => {
                    if (this.$store.state.usermodule.status == "success") {
                        this.$router.push({path:'blogs'})
                    }
                })
                .catch(err => console.log(err))
            }
        },
//         beforeDestroy:function(){
//     localStorage.removeItem("token")
//   }
    }
</script>

<style>
    .login{
        background: url("/assets/register.jpg");
        background-size: cover;
        text-align: center;
        height: 100vh;
    }
  
</style>

