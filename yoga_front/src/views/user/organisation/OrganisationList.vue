<template>
    <b-row>
        <b-col>
            <b-table hover outlined head-variant="light"
                :items="organisations"
                :fields="fields"
                :filter="filter"
                >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(image)="data">
                    <table-thumbnail v-if="data.item.image"
                        :id="data.item.id"
                        :src="data.item.image"
                    />
                </template>
                <template v-slot:cell(licenses)="data">
                    <b-link :to="{name: 'licenses', params: {organisationId: data.item.id}}">Лицензии</b-link>
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'organisation-update', params: {id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteOrganisation(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import OrganisationMixin from '@/mixins/user/OrganisationMixin';

export default {
    name: "ModeratorList",
    mixins: [OrganisationMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'slug', label: 'УРЛ'},
                { key: 'active_main_page', label: 'Active main page'},
                { key: 'users_count', label: 'Пользователей'},
                { key: 'licenses_count', label: 'Лицензий'},
                { key: 'licenses', label: 'Лицензии'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Организации', to: {name: 'organisations'}},
        ];
        this.requestParams = {
            is_staff: true
        };
        this.getOrganisations()
    },
}
</script>

<style scoped>

</style>
