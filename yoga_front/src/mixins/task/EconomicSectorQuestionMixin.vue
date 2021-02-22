<script>
export default {
    name: "EconomicSectorQuestionMixin",
    economicSectorQuestionSearch: [],
    data () {
        return {
            economicSectorQuestions: [],
            economicSectorQuestion: {
                id: null,
                task: null,
                name: null,
                name_ru: null,
                name_kk: null,
                economic_sector: {
                    id: null,
                    name: null,
                },
                scale: {
                    id: null,
                    name: null,
                },
            },
        }
    },
    methods: {
        getEconomicSectorQuestions() {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/economic-sector-question/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.economicSectorQuestionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.economicSectorQuestions = response.data.results
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
        getEconomicSectorQuestion(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/economic-sector-question/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.economicSectorQuestionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.economicSectorQuestion = response.data;
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
        deleteEconomicSectorQuestion(id) {
            if (this.deleteRequest('/api/task/economic-sector-question/delete/', id))
                this.economicSectorQuestions = this.economicSectorQuestions.filter(element => element.id !== id);
        },
        saveEconomicSectorQuestion(obj, id = null) {
            const self = this;
            obj.economic_sector = obj.economic_sector.id
            obj.scale = obj.scale.id
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
                                process.env.VUE_APP_HOST + '/api/task/economic-sector-question/update/' + id + '/',
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
                                self.getEconomicSectorQuestion(id)
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
                                process.env.VUE_APP_HOST + '/api/task/economic-sector-question/create/',
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
