<script>
export default {
    name: "LicenseMixin",
    licenseSearch: [],
    data () {
        return {
            licenses: [],
            license: {
                id: null,
                organisation: null,
                user: null,
                code: null,
                activated_at: null,
                created_at: null,
            },
            generate_license: {
                organisation: null,
                quantity: null,
            },
        }
    },
    methods: {
        getLicenses() {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/user/license/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.licenseSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.licenses = response.data.results
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
        getLicense(id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/user/license/' + id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.licenseSearch
                        })
                        .then(function (response) {
                            console.log(response);
                            self.license = response.data;
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
        deleteLicense(id) {
            this.licenses = this.licenses.filter(element => element.id !== id);
            this.deleteRequest('/api/user/license/delete/', id);
        },
        generateLicenses(obj) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .post(
                            process.env.VUE_APP_HOST + '/api/user/license/generate/',
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
        },
    }
}
</script>

<style scoped>

</style>
