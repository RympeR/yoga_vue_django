<script>
export default {
    name: "EconomicSectorMixin",
    economicSectorSearch: [],
    data () {
        return {
            economicSectors: [],
            image: null,
            economicSector: {
                id: null,
                image: null,
                name: null,
                name_ru: null,
                name_kk: null,
            },
        }
    },
    methods: {
        getEconomicSectors() {
            return new Promise((resolve, reject) => {
                const self = this;
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/profession/economic-sector/', {
                                headers: {
                                    Authorization: token
                                },
                                params: this.economicSectorSearch
                            })
                            .then(function (response) {
                                console.log(response);
                                self.economicSectors = response.data.results
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
        getEconomicSector(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/profession/economic-sector/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.economicSectorSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.economicSector = response.data;
                            self.image = response.data.image;
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
        deleteEconomicSector(id) {
            if (this.deleteRequest('/api/profession/economic-sector/delete/', id))
                this.economicSectors = this.economicSectors.filter(element => element.id !== id);
        },
        saveEconomicSector(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;
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
                                process.env.VUE_APP_HOST + '/api/profession/economic-sector/update/' + id + '/',
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
                                self.getEconomicSector(id)
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
                                process.env.VUE_APP_HOST + '/api/profession/economic-sector/create/',
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
