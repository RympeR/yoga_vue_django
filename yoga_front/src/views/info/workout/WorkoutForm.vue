<template>
    <b-form @submit="goSave($event)">
        <b-tabs content-class="mt-3">
            <b-tab title="Основное" active>
            <div class="form__item">
                <span class="form__label">Заголовок</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-12">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="workout.title"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Описание</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-12">
                            <b-form-textarea class="short"
                                        required
                                        placeholder="ru"
                                        v-model="workout.description"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Польза</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-12">
                            <b-form-textarea class="short"
                                        required
                                        placeholder="ru"
                                        v-model="workout.description"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Периодичность</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-12">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="workout.periodicity"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Длительность</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-12">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="workout.duration"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Название</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-12">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="workout.name"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Уровень сложности</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-select
                                v-model="workout.level.id"
                                :options="workoutLevels"
                                value-field="id"
                                text-field="name"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="form__item">
                <span class="form__label">Изображение</span>
                <div class="form__control">
                    <template v-if="image">
                        <div class="img__thumbnail">
                            <div class="img__thumbnail-img">
                                <b-img :id="`field-${workout.id}`"
                                       :src="image" width="80"
                                       v-b-modal="'modal__thumbnail' + workout.id"
                                />
                            </div>
                            <b-modal :id="'modal__thumbnail' + workout.id" scrollable hide-footer centered class="modal-dialog-auto">
                                <b-img :src="image" fluid/>
                            </b-modal>
                            <b-button type="button" class="media-delete" variant="link" @click="deleteImg">Удалить</b-button>
                        </div>
                    </template>
                    <template v-else>
                        <b-form-file
                            :id="`field-${workout.image}`"
                            v-model="workout.image"
                            plain
                        />
                    </template>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Видео</span>
                <div class="form__control">
                    <template v-if="video">
                        <div class="img__thumbnail">
                            <div class="img__thumbnail-img">
                                <b-img :id="`field-${workout.id}`"
                                       :src="video" width="80"
                                       v-b-modal="'modal__thumbnail' + workout.id"
                                />
                            </div>
                            <b-modal :id="'modal__thumbnail' + workout.id" scrollable hide-footer centered class="modal-dialog-auto">
                                <b-img :src="image" fluid/>
                            </b-modal>
                            <b-button type="button" class="media-delete" variant="link" @click="deleteVideo">Удалить</b-button>
                        </div>
                    </template>
                    <template v-else>
                        <b-form-file
                            :id="`field-${workout.video}`"
                            v-model="workout.video"
                            plain
                        />
                    </template>
                </div>
            </div>


            </b-tab>

        </b-tabs>

        <div class="form__item form__item_submit">
            <div class="form__control">
                <b-button type="submit" variant="primary">Сохранить</b-button>
            </div>
        </div>
    </b-form>
</template>

<script>
import WorkoutMixin from '@/mixins/info/WorkoutMixin';
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// import { quillEditor } from 'vue-quill-editor'


export default {
    name: 'WorkoutForm',
    mixins: [WorkoutMixin],
    components: {
        
    },
    data () {
        return {
            id: null,
            workoutLevels: ['Легкий', 'Средний', 'Сложный'],
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Тренировка', to: {name: 'workouts'}},
                {text: 'Редактировать', to: {name: 'workout-update', params: {id: this.id}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Тренировка', to: {name: 'workouts'}},
                {text: 'Создать', to: {name: 'workout-create'}}
            ];
        }
        if (this.$route.params.id)
            this.getWorkout(this.$route.params.id)
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.workout);
            data.specialties = this.workoutLevels;
            if (data.specialties.length === 0)
                data.specialties = []
            else
                data.specialties = JSON.stringify(this.workoutLevels)
            this.saveUniversity(data, this.$route.params.id);
            this.alert = true;
        },
        processFile(event) {
            this.workout.image = event[0]
        },
        deleteImg() {
            let confirmDelete = confirm('Удалить фото?');
            if (confirmDelete) {
                this.image = null;
                this.workout.image = [];
            }
        },
        deleteVideo() {
            let confirmDelete = confirm('Удалить видео?');
            if (confirmDelete) {
                this.video = null;
                this.workout.video = [];
            }
        }
    },
}
</script>

<style scoped>

</style>
