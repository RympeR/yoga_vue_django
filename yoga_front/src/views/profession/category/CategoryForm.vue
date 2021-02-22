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
                                      v-model="category.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="category.name_kk"
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
import CategoryMixin from '@/mixins/profession/CategoryMixin';

export default {
    name: 'CategoryForm',
    mixins: [CategoryMixin],
    data() {
        return {
            id: null,
            economicSectorId: null,
            alert: false
        }
    },
    created() {
        this.economicSectorId = this.$route.params.economicSectorId;
        console.log(this.economicSectorId)
        this.id = this.$route.params.id;
        if (this.id) {
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
                {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
                {text: 'Редактировать', to: {name: 'category-update', params: {id: this.id}}}
            ];
        } else {
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
                {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
                {text: 'Создать', to: {name: 'category-create'}}
            ];
        }
        if (this.$route.params.id)
            this.getCategory(this.$route.params.id);
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.category);
            console.log(this.economicSectorId)
            data.economic_sector = this.economicSectorId;
            console.log(data)
            this.saveCategory(data, this.$route.params.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
