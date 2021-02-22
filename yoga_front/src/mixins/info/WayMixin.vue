<script>
export default {
    name: "WayMixin",
    requestParams: [],
    data () {
        return {
            ways: [],
            way: {
                id: null,
                name: null,
                name_ru: null,
                name_kk: null,
                text_1: null,
                text_1_ru: null,
                text_1_kk: null,
                text_2: null,
                text_2_ru: null,
                text_2_kk: null,
                profession: null,
            },
        }
    },
    methods: {
        getWay(profession_id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/info/way/' + profession_id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.way = response.data;
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
        saveWay(obj, profession_id) {
            const self = this;
            obj.name = obj.name_ru;
            obj.text_1 = obj.text_1_ru;
            obj.text_2 = obj.text_2_ru;
            let formData = new FormData();
            Object.keys(obj).map(function(key) {
                if (obj[key])
                    formData.append(key, obj[key]);
            });

            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .put(
                            process.env.VUE_APP_HOST + '/api/info/way/update/',
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
                            self.getWay(profession_id)
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
