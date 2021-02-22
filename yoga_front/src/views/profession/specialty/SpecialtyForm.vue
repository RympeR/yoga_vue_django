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
                                      v-model="specialty.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="specialty.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Средний срок обучения</span>
            <div class="form__control">
                <b-form-input class="short"
                    type="text"
                    v-model="specialty.training_period"
                />
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Стоимость обучения</span>
            <div class="form__control">
                <b-form-input class="short"
                    type="text"
                    v-model="specialty.cost_of_education"
                />
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
import SpecialtyMixin from '@/mixins/profession/SpecialtyMixin';

export default {
    name: 'SpecialtyForm',
    mixins: [SpecialtyMixin],
    data () {
        return {
            id: null,
            sectionId: null,
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.sectionId = this.$route.params.sectionId;
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Секции', to: {name: 'sections'}},
                {text: 'Области образования', to: {name: 'specialties', params: {sectionId: this.sectionId}}},
                {text: 'Редактировать', to: {name: 'specialty-update', params: {sectionId: this.sectionId, id: this.id}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Секции', to: {name: 'sections'}},
                {text: 'Области образования', to: {name: 'specialties', params: {sectionId: this.sectionId}}},
                {text: 'Создать', to: {name: 'specialty-create', params: {sectionId: this.sectionId}}}
            ];
        }
        if (this.$route.params.id)
            this.getSpecialty(this.$route.params.id);
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.specialty);
            data.section = this.sectionId;
            console.log(data)
            this.saveSpecialty(data, this.$route.params.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
