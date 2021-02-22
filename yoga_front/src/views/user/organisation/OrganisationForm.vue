<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">Название</span>
            <div class="form__control">
                <b-form-input class="short"
                    type="text"
                    v-model="organisation.name"
                />
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">УРЛ</span>
            <div class="form__control">
                <b-form-input class="short"
                    type="text"
                    v-model="organisation.slug"
                />
            </div>
        </div>

        <div class="form__item">
            <span class="form__label">Active main page</span>
            <div class="form__control">
                <b-form-checkbox
                    type="checkbox"
                    v-model="organisation.active_main_page"
                    :value="true"
                    :unchecked-value="false"
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
import OrganisationMixin from '@/mixins/user/OrganisationMixin';

export default {
    name: 'UserForm',
    mixins: [OrganisationMixin],
    data () {
        return {
            id: null,
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Организации', to: {name: 'organisations'}},
                {text: 'Редактировать', to: {name: 'organisation-update', params: {id: this.id}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Организации', to: {name: 'organisations'}},
                {text: 'Создать', to: {name: 'organisation-create'}}
            ];
        }
        if (this.$route.params.id)
            this.getOrganisation(this.$route.params.id);
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.organisation);
            this.saveOrganisation(data, this.$route.params.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
