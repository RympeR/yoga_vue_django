<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">Название</span>
            <div class="form__control">
                <div class="row">
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="ru"
                                      v-model="way.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="way.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="form__item">
            <span class="form__label">Описание RU (Text 1)</span>
            <div class="form__control">
                <quillEditor v-model="way.text_1_ru" @change="onEditorChange($event)" />
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание KZ (Text 1)</span>
            <div class="form__control">
                <quillEditor v-model="way.text_1_kk" @change="onEditorChange($event)" />
            </div>
        </div>
        <hr>
        <div class="form__item">
            <span class="form__label">Описание RU (Text 2)</span>
            <div class="form__control">
                <quillEditor v-model="way.text_2_ru" @change="onEditorChange($event)" />
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание KZ (Text 2)</span>
            <div class="form__control">
                <quillEditor v-model="way.text_2_kk" @change="onEditorChange($event)" />
            </div>
        </div>

        <div class="form__item form__item_submit">
            <div class="form__control">
                <b-button type="submit" variant="primary">Сохранить</b-button>
            </div>
        </div>
    </b-form>
</template>

<script>
import WayMixin from '@/mixins/info/WayMixin';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
    name: 'WayForm',
    mixins: [WayMixin],
    components: {
        quillEditor
    },
    data() {
        return {
            editorConfig: {
                //toolbar: [ 'bold', 'italic', '|', 'link' ],
                //extraPlugins: [uploader]
            },
            id: null,
            economicSectorId: null,
            categoryId: null,
            professionId: null,
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.economicSectorId = this.$route.params.economicSectorId;
        this.categoryId = this.$route.params.categoryId;
        this.professionId = this.$route.params.professionId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
            {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
            {text: 'Профессии', to: {name: 'professions'}, params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId}},
            {text: 'Как стать', to: {name: 'profession-way', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: this.id}}}
        ];
        if (this.$route.params.professionId)
            this.getWay(this.professionId);
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.way);
            console.log(data)
            data.profession = this.professionId;
            this.saveWay(data, this.professionId);
            this.alert = true;
        },
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text)
        },
    },
}
</script>

<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
