<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button v-b-toggle.sidebar-filter variant="info">Фильтр</b-button>
            </div>
            <b-table hover outlined head-variant="light"
                :items="users" 
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
                <template v-slot:cell(organisation)="data">
                    <span v-if="data.item.organisation">
                        {{ data.item.organisation.organisation.name }}
                    </span>
                </template>
                <template v-slot:cell(sex)="data">
                    {{ static_data.sex[data.item.sex] }}
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'student-update', params: {id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteUser(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>

        <b-sidebar
            id="sidebar-filter"
            :backdrop-variant="'dark'"
            backdrop
            title="Фильтр"
        >
            <b-form @submit="goFilter($event)">
                <div class="px-3 py-2">
                    <label>Тип:</label>

                    <b-form-select
                        v-model="filter.organisation"
                        :options="organisations"
                        value-field="id"
                        text-field="name"
                    />
                </div>
                <div class="px-3 py-2">
                    <b-button type="submit" variant="success">Фильтровать</b-button>
                    &nbsp;
                    <b-button type="submit" @click="clearFilter" variant="warning">Очистить</b-button>
                    <br>
                    <br>
                </div>

            </b-form>
        </b-sidebar>
    </b-row>
</template>

<script>
import UserMixin from '@/mixins/user/UserMixin'
import OrganisationMixin from "@/mixins/user/OrganisationMixin";

export default {
    name: "AdminList",
    mixins: [UserMixin, OrganisationMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID', sortable: true},
                { key: 'last_name', label: 'Фамилия', sortable: true},
                { key: 'first_name', label: 'Имя'},
                { key: 'email', label: 'E-mail', sortable: true},
                { key: 'image', label: 'Аватар'},
                { key: 'organisation', label: 'Организация', sortable: true},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: {
                organisation: null
            },
        }
    },
    created() {
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Администраторы', to: {name: 'admins'}},
        ];
        this.requestParams = {
            is_admin: true,
            is_staff: false
        };
        this.getUsers()
        this.getOrganisations()
    },
    methods: {
        goFilter(e) {
            e.preventDefault();
            this.userSearch = this.filter
            this.getUsers()
        },
        clearFilter() {
            this.filter = {}
            this.userSearch = {}
            this.getUsers()
        },
    }
}
</script>

<style scoped>

</style>
