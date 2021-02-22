<script>
export default {
    name: "ProfessionMixin",
    professionSearch: [],
    data () {
        return {
            professions: [],
            profession: {
                id: null,
                category: {
                    id: null,
                    economic_sector: {
                        id: null,
                        name: null,
                    },
                    name: null,
                },
                name: null,
                name_ru: null,
                name_kk: null,
                average_salary: null,
                growth: null,
                satisfaction: null,
                r: false,
                i: false,
                a: false,
                s: false,
                e: false,
                c: false,
                achievement: 0,
                independence: 0,
                recognition: 0,
                relationships: 0,
                support: 0,
                working_conditions: 0,
                r_percent: 0,
                i_percent: 0,
                a_percent: 0,
                s_percent: 0,
                e_percent: 0,
                c_percent: 0,
                specialties: [],
            },
        }
    },
    methods: {
        getProfessions() {
            return new Promise((resolve, reject) => {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/profession/profession/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.professionSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.professions = response.data.results
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
        getProfession(id) {
            const self = this;
            return new Promise((resolve, reject) => {
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/profession/profession/' + id + '/', {
                                headers: {
                                    Authorization: token
                                },
                                params: this.professionSearch
                            })
                            .then(function (response) {
                                self.profession = response.data;
                                resolve(response)
                            })
                            .catch(function (response) {
                                self.templateShowError(response);
                                reject(response)
                            })
                    })
                    .catch(response => {
                        console.log(response)
                    })
            })
        },
        deleteProfession(id) {
            if (this.deleteRequest('/api/profession/profession/delete/', id))
                this.professions = this.professions.filter(element => element.id !== id);
        },
        saveProfession(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;

            // let formData = new FormData();
            // Object.keys(obj).map(function(key) {
            //     if (obj[key])
            //         formData.append(key, obj[key]);
            // });

            if (id){
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .put(
                                process.env.VUE_APP_HOST + '/api/profession/profession/update/' + id + '/',
                                obj,
                                {
                                    headers: {
                                        Authorization: token,
                                    },
        
                                }
                            )
                            .then(function (response) {
                                self.templateShowSuccess(response);
                                self.getProfession(id)
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
                                process.env.VUE_APP_HOST + '/api/profession/profession/create/',
                                obj,
                                {
                                    headers: {
                                        Authorization: token,
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
