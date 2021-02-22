<script>
export default {
    name: "CategoryMixin",
    categorySearch: [],
    data () {
        return {
            categories: [],
            category: {
                id: null,
                economic_sector: {
                    id: null,
                    image: null,
                    name: null,
                    name_ru: null,
                    name_kk: null,
                },
                name: null,
                name_ru: null,
                name_kk: null,
            },
        }
    },
    methods: {
        getCategories() {
            return new Promise((resolve, reject) => {
                const self = this;
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/profession/category/', {
                                headers: {
                                    Authorization: token
                                },
                                params: this.categorySearch
                            })
                            .then(function (response) {
                                console.log(response);
                                self.categories = response.data.results
                                resolve(response)
                            })
                            .catch(function (response) {
                                console.log(response);
                                self.templateShowError(response);
                                reject(response)
                            })
                    })
                    .catch(response => {
                        console.log(response)
                    })
            })
        },
        getCategory(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/profession/category/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.categorySearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.category = response.data;
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
        deleteCategory(id) {
            if (this.deleteRequest('/api/profession/category/delete/', id))
                this.categories = this.categories.filter(element => element.id !== id);
        },
        saveCategory(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;
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
                                process.env.VUE_APP_HOST + '/api/profession/category/update/' + id + '/',
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
                                self.getCategory(id)
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
                                process.env.VUE_APP_HOST + '/api/profession/category/create/',
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
