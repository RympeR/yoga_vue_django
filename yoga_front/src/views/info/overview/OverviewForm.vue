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
                                      v-model="overview.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="overview.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание RU</span>
            <div class="form__control">
                <quillEditor v-model="overview.text_ru"/>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание KZ</span>
            <div class="form__control">
                <quillEditor v-model="overview.text_kk"/>
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
import OverviewMixin from '@/mixins/info/OverviewMixin';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
    name: 'OverviewForm',
    mixins: [OverviewMixin],
    components: {
        quillEditor
    },
    data() {
        return {
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
            {text: 'Обзор', to: {name: 'profession-overview', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: this.id}}}
        ];
        if (this.$route.params.professionId)
            this.getOverview(this.professionId);
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.overview);
            console.log(data)
            data.profession = this.professionId;
            this.saveOverview(data, this.professionId);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
