<script>
export default {
    name: "ScaleMixin",
    requestParams: [],
    data () {
        return {
            scales: [],
            scale: {
                id: null,
                name: null,
                name_ru: null,
                name_kk: null,
                mark_1: null,
                mark_1_ru: null,
                mark_1_kk: null,
                mark_2: null,
                mark_2_ru: null,
                mark_2_kk: null,
                mark_3: null,
                mark_3_ru: null,
                mark_3_kk: null,
                mark_4: null,
                mark_4_ru: null,
                mark_4_kk: null,
                mark_5: null,
                mark_5_ru: null,
                mark_5_kk: null,
            },
        }
    },
    methods: {
        getScales() {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/scale/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.scales = response.data.results
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
        getScale(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/task/scale/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.scale = response.data;
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
        deleteScale(id) {
            if (this.deleteRequest('/api/scales/delete/', id))
                this.scales = this.scale.filter(element => element.id !== id);
        },
        saveScale(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;
            obj.mark_1 = obj.mark_1_ru;
            obj.mark_2 = obj.mark_2_ru;
            obj.mark_3 = obj.mark_3_ru;
            obj.mark_4 = obj.mark_4_ru;
            obj.mark_5 = obj.mark_5_ru;

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
                                process.env.VUE_APP_HOST + '/api/task/scale/update/' + id + '/',
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
                                self.getScale(id)
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
                                process.env.VUE_APP_HOST + '/api/task/scale/create/',
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
