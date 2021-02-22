<template>
    <b-row>
        <b-col>
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
    </b-row>
</template>

<script>
import UserMixin from '@/mixins/user/UserMixin'

export default {
    name: "ModeratorList",
    mixins: [UserMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'last_name', label: 'Фамилия'},
                { key: 'first_name', label: 'Имя'},
                { key: 'email', label: 'E-mail'},
                { key: 'image', label: 'Аватар'},
                { key: 'organisation', label: 'Организация'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Модераторы', to: {name: 'moderator'}},
        ];
        this.requestParams = {
            is_staff: true
        };
        this.getUsers()
    },
}
</script>

<style scoped>

</style>
