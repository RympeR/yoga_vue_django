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
                                      v-model="section.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="section.name_kk"
                        />
                    </div>
                </div>
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
import SectionMixin from '@/mixins/profession/SectionMixin';

export default {
    name: 'SectionForm',
    mixins: [SectionMixin],
    data() {
        return {
            id: null,
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        if (this.id) {
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Секции', to: {name: 'sections'}},
                {text: 'Редактировать', to: {name: 'section-update', params: {id: this.id}}}
            ];
        } else {
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Секции', to: {name: 'sections'}},
                {text: 'Создать', to: {name: 'section-create'}}
            ];
        }
        if (this.$route.params.id)
            this.getSection(this.$route.params.id);
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.section);
            console.log(data)
            this.saveSection(data, this.$route.params.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
