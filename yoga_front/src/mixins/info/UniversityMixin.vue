<script>
export default {
    name: "UniversityMixin",
    universitySearch: [],
    data () {
        return {
            universities: [],
            image: null,
            university: {
                id: null,
                image: null,
                name: null,
                name_ru: null,
                name_kk: null,
                text: null,
                text_ru: null,
                text_kk: null,
                city: null,
                city_ru: null,
                city_kk: null,
                site: null,
                grants: null,
                students: null,
                specialties: null,
            },
        }
    },
    methods: {
        getUniversities() {
            return new Promise((resolve, reject) => {
                const self = this;
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/info/university/', {
                                headers: {
                                    Authorization: token
                                },
                                params: this.universitySearch
                            })
                            .then(function (response) {
                                console.log(response);
                                self.universities = response.data.results
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
        getUniversity(id) {
            const self = this;
            return new Promise((resolve, reject) => {
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/info/university/' + id + '/', {
                                headers: {
                                    Authorization: token
                                },
                                params: this.universitySearch
                            })
                            .then(function (response) {
                                console.log(response);
                                self.university = response.data;
                                self.image = response.data.image;
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
        deleteUniversity(id) {
            if (this.deleteRequest('/api/info/university/delete/', id))
                this.universities = this.universities.filter(element => element.id !== id);
        },
        saveUniversity(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;
            obj.text = obj.text_ru;
            obj.city = obj.city_ru;
            if (typeof(obj.image) == 'string')
                delete obj.image;

            if (obj.image === [])
                obj.image = null;

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
                                process.env.VUE_APP_HOST + '/api/info/university/update/' + id + '/',
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
                                self.getUniversity(id)
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
                                process.env.VUE_APP_HOST + '/api/info/university/create/',
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
