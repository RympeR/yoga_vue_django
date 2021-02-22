<script>
export default {
    name: "LaborMixin",
    requestParams: [],
    data () {
        return {
            labors: [],
            labor: {
                id: null,
                name: null,
                name_ru: null,
                name_kk: null,
                text: null,
                text_ru: null,
                text_kk: null,
                profession: null,
                quantities: [],
            },
        }
    },
    methods: {
        getLabor(profession_id) {
            console.log(profession_id)
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/info/labor/' + profession_id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.labor = response.data;
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
        saveLabor(obj, profession_id) {
            const self = this;
            obj.name = obj.name_ru;
            obj.text = obj.text_ru;

            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .put(
                            process.env.VUE_APP_HOST + '/api/info/labor/update/',
                            obj,
                            {
                                headers: {
                                    Authorization: token,
                                },

                            }
                        )
                        .then(function (response) {
                            self.templateShowSuccess(response);
                            self.getLabor(profession_id)
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
