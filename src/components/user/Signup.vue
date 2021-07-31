<template>
    <div class="signUp d-flex align-center">
        <v-container class="d-flex justify-center">
            <v-sheet height="400" width="300" color="rgba(0,0,0,0)">
                <v-text-field
                filled
                dense
                rounded
                outlined
                dark
                autocomplete="off"
                placeholder="Username"
                v-model="user.username"
                >
                </v-text-field>
                <v-text-field
                filled
                dense
                rounded
                outlined
                dark
                autocomplete="off"
                placeholder="Email"
                v-model="user.email"
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
                v-model="user.password"
                >
                </v-text-field>
                <v-btn
                rounded
                dark
                color="#b7801fdb"
                width="300"
                @click.prevent="createUser"
                >
                SIGN UP
                </v-btn>
            </v-sheet>
        </v-container>
    </div>
</template>
<script>
    export default{
        name:"Signup",
        data:() => ({
            // back:'./assets/pricing.jpg',
            user:{},
        }),
        methods: {
            createUser(){
                // let uri = '//localhost:4000/users/sign/add';
                // this.axios.post(uri, this.user).then(() => {
                // this.$router.push({path:'login'});
                // });
                this.$store.dispatch('signup', this.user)
                .then(() => {
                        this.$router.push({path:'blogs'})
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style>
    .signUp{
        background: url("/assets/register.jpg");
        background-size: cover;
        text-align: center;
        height: 100vh;
    }
  
</style>

