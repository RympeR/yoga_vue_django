<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">К-во лицензий</span>
            <div class="form__control">
                <b-form-input class="short"
                              type="number"
                              required
                              v-model="generate_license.quantity"
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
import LicenseMixin from "@/mixins/user/LicenseMixin";

export default {
    name: 'LicenseGenerateForm',
    mixins: [LicenseMixin],
    data () {
        return {
            id: null,
            alert: false
        }
    },
    created() {
        this.organisationId = this.$route.params.organisationId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Организации', to: {name: 'organisations'}},
            {text: 'Лицензии', to: {name: 'licenses', params: {organisationId: this.organisationId}}},
            {text: 'Генерировать', to: {name: 'license-generate', params: {organisationId: this.organisationId}}}
        ];
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.generate_license);
            data.organisation = this.organisationId;
            this.generateLicenses(data);
            this.alert = true;
        },
    },
}
</script>
