<template>
    <b-form @submit="goSave($event)">
        <b-tabs content-class="mt-3">
            <b-tab title="Основное" active>
            <div class="form__item">
                <span class="form__label">Название</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="university.name_ru"
                            />
                        </div>
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="kz"
                                          v-model="university.name_kk"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Город</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="university.city_ru"
                            />
                        </div>
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="kz"
                                          v-model="university.city_kk"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Описание RU</span>
                <div class="form__control">
                    <quillEditor v-model="university.text_ru"/>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Описание KZ</span>
                <div class="form__control">
                    <quillEditor v-model="university.text_kk"/>
                </div>
            </div>

            <div class="form__item">
                <span class="form__label">Изображение</span>
                <div class="form__control">
                    <template v-if="image">
                        <div class="img__thumbnail">
                            <div class="img__thumbnail-img">
                                <b-img :id="`field-${university.id}`"
                                       :src="image" width="80"
                                       v-b-modal="'modal__thumbnail' + university.id"
                                />
                            </div>
                            <b-modal :id="'modal__thumbnail' + university.id" scrollable hide-footer centered class="modal-dialog-auto">
                                <b-img :src="image" fluid/>
                            </b-modal>
                            <b-button type="button" class="media-delete" variant="link" @click="deleteImg">Удалить</b-button>
                        </div>
                    </template>
                    <template v-else>
                        <b-form-file
                            :id="`field-${university.image}`"
                            v-model="university.image"
                            plain
                        />
                    </template>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Грантов</span>
                <div class="form__control">
                    <b-form-input class="short"
                                  type="number"
                                  required
                                  v-model="university.grants"
                    />
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Студентов</span>
                <div class="form__control">
                    <b-form-input class="short"
                                  type="number"
                                  required
                                  v-model="university.students"
                    />
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Сайт</span>
                <div class="form__control">
                    <b-form-input class="short"
                                  type="text"
                                  required
                                  v-model="university.site"
                    />
                </div>
            </div>
            </b-tab>

            <b-tab title="Области образования">
                <div class="form__item" v-for="specialty in specialties" v-bind:key="specialty.id">
                    <span class="form__label" v-if="section_id !== specialty.section.id" :set="section_id = specialty.section.id">{{specialty.section.name}}</span>
                    <div class="form__control">

                        <b-form-checkbox
                            v-model="universitySpecialties"
                            name="checkbox-1"
                            :value="specialty.id"
                            :unchecked-value="null"
                        >
                            {{ specialty.name }}
                        </b-form-checkbox>
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
import UniversityMixin from '@/mixins/info/UniversityMixin';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import SpecialtyMixin from "@/mixins/profession/SpecialtyMixin";

export default {
    name: 'UniversityForm',
    mixins: [UniversityMixin, SpecialtyMixin],
    components: {
        quillEditor
    },
    data () {
        return {
            id: null,
            universitySpecialties: [],
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'ВУЗ и ССУЗ', to: {name: 'universities'}},
                {text: 'Редактировать', to: {name: 'university-update', params: {id: this.id}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'ВУЗ и ССУЗ', to: {name: 'universities'}},
                {text: 'Создать', to: {name: 'university-create'}}
            ];
        }
        this.getSpecialties();
        if (this.$route.params.id)
            this.getUniversity(this.$route.params.id).then((response) => {
                response.data.specialties.forEach((specialty) => {
                    self.universitySpecialties.push(specialty.id)
                })

            });
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.university);
            data.specialties = this.universitySpecialties;
            if (data.specialties.length === 0)
                data.specialties = []
            else
                data.specialties = JSON.stringify(this.universitySpecialties)
            this.saveUniversity(data, this.$route.params.id);
            this.alert = true;
        },
        processFile(event) {
            this.university.image = event[0]
        },
        deleteImg() {
            let confirmDelete = confirm('Удалить фото?');
            if (confirmDelete) {
                this.image = null;
                this.university.image = [];
            }
        }
    },
}
</script>

<style scoped>

</style>
