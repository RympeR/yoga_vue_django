<script>
export default {
    name: "GolandQuestionMixin",
    golandQuestionSearch: [],
    data () {
        return {
            golandQuestions: [],
            golandQuestion: {
                id: null,
                task: null,
                name: null,
                name_ru: null,
                name_kk: null,
                question_type: null,
                group: null,
                scale: {
                    id: null,
                    name: null,
                },
            },
        }
    },
    methods: {
        getGolandQuestions() {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/goland-question/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.golandQuestionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.golandQuestions = response.data.results
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
        getGolandQuestion(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/goland-question/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.golandQuestionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.golandQuestion = response.data;
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
        deleteGolandQuestion(id) {
            if (this.deleteRequest('/api/task/goland-question/delete/', id))
                this.golandQuestions = this.golandQuestions.filter(element => element.id !== id);
        },
        saveGolandQuestion(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;
            obj.scale = obj.scale.id

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
                                process.env.VUE_APP_HOST + '/api/task/goland-question/update/' + id + '/',
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
                                self.getGolandQuestion(id)
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
                                process.env.VUE_APP_HOST + '/api/task/goland-question/create/',
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
