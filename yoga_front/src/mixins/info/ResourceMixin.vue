<script>
export default {
    name: "ResourceMixin",
    requestParams: [],
    data () {
        return {
            resources: [],
            resource: {
                id: null,
                name: null,
                name_ru: null,
                name_kk: null,
                profession: null,
                articles: [],
                videos: [],
            },
        }
    },
    methods: {
        getResource(profession_id) {
            console.log(profession_id)
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/info/resource/' + profession_id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.resource = response.data;
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
        saveResource(obj, profession_id) {
            const self = this;
            obj.name = obj.name_ru;

            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .put(
                            process.env.VUE_APP_HOST + '/api/info/resource/update/',
                            obj,
                            {
                                headers: {
                                    Authorization: token,
                                },

                            }
                        )
                        .then(function (response) {
                            self.templateShowSuccess(response);
                            self.getResource(profession_id)
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
