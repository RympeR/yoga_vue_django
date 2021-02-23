<script>
export default {
    name: "WorkoutMixin",
    workoutSearch: [],
    data () {
        return {
            workouts: [],
            image: null,
            workout: {
                id: null,
                title: null,
                image: null,
                video: null,
                name: null,
                level: {
                    id:null,
                    name:null
                },
                periodicity: null,
                duration: null,
                description: null,
                value: null,
            },
        }
    },
    methods: {
        getWorkouts() {
            return new Promise((resolve, reject) => {
                const self = this;
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/workout/get-workout-list/', {
                                params: this.workoutSearch,
                                headers: {
                                    'Access-Control-Allow-Origin': "*",
                                    Authorization: token
                                }
                            })
                            .then(function (response) {
                                console.log(response);
                                self.workouts = response.data.results
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
        getWorkout(id) {
            const self = this;
            return new Promise((resolve, reject) => {
                this.$store.dispatch('token')
                    .then((token) => {
                        this.$axios
                            .get(process.env.VUE_APP_HOST + '/api/workout/get-workout/' + id + '/', {
                                params: this.workoutSearch,
                                headers: {
                                    'Access-Control-Allow-Origin': "*",
                                    Authorization: token
                                }
                            })
                            .then(function (response) {
                                console.log(response);
                                self.workout = response.data;
                                self.image = response.data.image;
                                self.video = response.data.video;
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
        deleteWorkout(id) {
            if (this.deleteRequest('/api/workout/delete-workout/' + id + '/'))
                this.workouts = this.workouts.filter(element => element.id !== id);
        },
        saveWorkout(obj, id = null) {
            const self = this;
            obj.name = obj.name_ru;
            obj.text = obj.text_ru;
            obj.city = obj.city_ru;
            if (typeof(obj.image) == 'string')
                delete obj.image;
            
            if (typeof(obj.video) == 'string')
                delete obj.video;

            if (obj.image === [])
                obj.image = null;
            
            if (obj.video === [])
                obj.video = null;

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
                                process.env.VUE_APP_HOST + '/api/workout/update-workout/',
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                        Authorization: token
                                    },
        
                                }
                            )
                            .then(function (response) {
                                self.templateShowSuccess(response);
                                self.getUniversity(id)
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
                                process.env.VUE_APP_HOST + '/api/workout/create-workout/',
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                        Authorization: token
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
