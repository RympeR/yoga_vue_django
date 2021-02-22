<script>
export default {
    name: "PersonalityMixin",
    requestParams: [],
    data () {
        return {
            personality: {
                id: null,
                name: null,
                name_ru: null,
                name_kk: null,
                text: null,
                text_ru: null,
                text_kk: null,
                profession: null,
                blocks: [],
            },
        }
    },
    methods: {
        getPersonality(profession_id) {
            console.log(profession_id)
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/info/personality/' + profession_id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.personality = response.data;
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
        savePersonality(obj, profession_id) {
            const self = this;
            obj.name = obj.name_ru;

            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .put(
                            process.env.VUE_APP_HOST + '/api/info/personality/update/',
                            obj,
                            {
                                headers: {
                                    Authorization: token,
                                },

                            }
                        )
                        .then(function (response) {
                            self.templateShowSuccess(response);
                            self.getPersonality(profession_id)
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
