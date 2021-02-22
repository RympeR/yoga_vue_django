<script>
export default {
    name: "EducationMixin",
    requestParams: [],
    data () {
        return {
            educations: [],
            education: {
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
        getEducation(profession_id) {
            const self = this;
            this.$store.dispatch('token')
                .then((token) => {
                    this.$axios
                        .get(process.env.VUE_APP_HOST + '/api/info/education/' + profession_id + '/', {
                            headers: {
                                Authorization: token
                            },
                            params: this.requestParams
                        })
                        .then(function (response) {
                            console.log(response);
                            self.education = response.data;
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
        saveEducation(obj, profession_id) {
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
                            process.env.VUE_APP_HOST + '/api/info/education/update/',
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
                            self.getEducation(profession_id)
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
