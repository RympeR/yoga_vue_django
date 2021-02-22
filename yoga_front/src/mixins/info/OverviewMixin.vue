<script>
export default {
    name: "OverviewMixin",
    requestParams: [],
    data () {
        return {
            overviews: [],
            overview: {
                id: null,
                name: null,
                name_ru: null,
                name_kk: null,
                text: null,
                text_ru: null,
                text_kk: null,
                profession: null,
            },
        }
    },
    methods: {
        getOverview(profession_id) {
            console.log(profession_id)
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/info/overview/' + profession_id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.overview = response.data;
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
        saveOverview(obj, profession_id) {
            const self = this;
            obj.name = obj.name_ru;
            obj.text = obj.text_ru;
            let formData = new FormData();
            Object.keys(obj).map(function(key) {
                if (obj[key])
                    formData.append(key, obj[key]);
            });

            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .put(
                            process.env.VUE_APP_HOST + '/api/info/overview/update/',
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
                            self.getOverview(profession_id)
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
