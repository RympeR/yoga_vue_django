<script>
export default {
    name: "ValueQuestionMixin",
    valueQuestionSearch: [],
    data () {
        return {
            valueQuestions: [],
            valueQuestion: {
                id: null,
                task: null,
                name: null,
                name_ru: null,
                name_kk: null,
                question_type: null,
                scale: {
                    id: null,
                    name: null,
                },
            },
        }
    },
    methods: {
        getValueQuestions() {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/value-question/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.valueQuestionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.valueQuestions = response.data.results
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
        getValueQuestion(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/value-question/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.valueQuestionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.valueQuestion = response.data;
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
        deleteValueQuestion(id) {
            if (this.deleteRequest('/api/task/value-question/delete/', id))
                this.valueQuestions = this.valueQuestions.filter(element => element.id !== id);
        },
        saveValueQuestion(obj, id = null) {
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
                                process.env.VUE_APP_HOST + '/api/task/value-question/update/' + id + '/',
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
                                self.getValueQuestion(id)
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
                                process.env.VUE_APP_HOST + '/api/task/value-question/create/',
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
