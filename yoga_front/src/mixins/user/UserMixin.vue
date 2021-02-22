<script>
export default {
    name: "UserMixin",
    userSearch: [],
    data () {
        return {
            users: [],
            image: null,
            user: {
                id: null,
                image: null,
                email: null,
                last_name: null,
                first_name: null,
                sex: null,
                organisation: {
                    organisation: {
                        id: null,
                        name: null,
                        slug: null,
                        active_main_page: null,
                    },
                    is_admin: null
                }
            },
        }
    },
    methods: {
        getUsers() {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/user/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.userSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.users = response.data.results
                        })
                        .catch(function (response) {
                            console.log(response);
                            self.templateShowError(response);
                        })
                })
                .catch(response => {
                    console.log(response)
                })
        },
        getUser(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/user/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.userSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.user = response.data;
                            self.image = response.data.image;
                            self.user.image = null;
                        })
                        .catch(function (response) {
                            console.log(response);
                            self.templateShowError(response);
                        })
                })
                .catch(response => {
                    console.log(response)
                })
        },
        deleteUser(id) {
            if (this.deleteRequest('/api/user/delete/', id))
                this.users = this.users.filter(element => element.id !== id);
        },
        saveUser(obj, id = null) {
            const self = this;
            if (typeof(obj.image) == 'string')
                delete obj.image;

            if (obj.image === [])
                obj.image = null;

            if (obj.organisation)
                obj.organisation = obj.organisation.organisation.id;

            let formData = new FormData();
            Object.keys(obj).map(function(key) {
                if (obj[key])
                    formData.append(key, obj[key]);
            });

            if (id){
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .put(
                                process.env.VUE_APP_HOST + '/api/user/update/' + id + '/',
                                formData,
                                {
                                    headers: {
                                        Authorization: token,
                                        'Content-Type': 'multipart/form-data',
                                    },
        
                                }
                            )
                            .then(function (response) {
                                self.templateShowSuccess(response);
                                self.getUser(id)
                            })
                            .catch(function (response) {
                                console.log(response);
                                self.templateShowError(response);
                            })
                    })
                    .catch(response => {
                        console.log(response)
                    })
            }else{
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .post(
                                process.env.VUE_APP_HOST + '/api/user/create/',
                                formData,
                                {
                                    headers: {
                                        Authorization: token,
                                        'Content-Type': 'multipart/form-data',
                                    },
        
                                }
                            )
                            .then(function (response) {
                                console.log(response);
                                self.goBack()
                            })
                            .catch(function (response) {
                                console.log(response);
                                self.templateShowError(response);
                            })
                    })
                    .catch(response => {
                        console.log(response)
                    })
            }
        },
    }
}
</script>

<style scoped>

</style>
