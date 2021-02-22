<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button-group>
                    <b-button :to="{name: 'license-generate'}" variant="warning" size="md">
                        Генерировать
                    </b-button>
                </b-button-group>
            </div>
            <b-table hover outlined responsive head-variant="light"
                :items="licenses"
                :fields="fields"
                :filter="filter"
                >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions" v-if="!data.item.user">
                        <b-button class="btn_delete" @click="deleteLicense(data.item.id)"/>
                    </div>
                </template>
                <template v-slot:cell(user)="data">
                    <div v-if="data.item.user">
                        {{data.item.user.last_name}} {{data.item.user.first_name}} // ID: {{data.item.user.id}} // E-mail: {{data.item.user.email}}
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import LicenseMixin from "@/mixins/user/LicenseMixin";
import OrganisationMixin from "@/mixins/user/OrganisationMixin";

export default {
    name: "LicenseList",
    mixins: [OrganisationMixin, LicenseMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'code', label: 'Код' },
                { key: 'user', label: 'Пользователь' },
                /*{ key: 'answered_count', label: 'Всего ответов'},*/
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.organisationId = this.$route.params.organisationId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Организации', to: {name: 'organisations'}},
            {text: 'Лицензии', to: {name: 'licenses', params: {organisationId: this.organisationId}}},
        ];
        this.licenseSearch = {
            organisation: this.$route.params.organisationId
        };
        this.getLicenses()

    },
}
</script>

<style scoped>

</style>
