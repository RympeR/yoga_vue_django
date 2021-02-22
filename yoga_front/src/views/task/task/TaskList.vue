<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'task-create'}" variant="primary" size="md">
                    Добавить
                </b-button>
            </div>
            <b-table hover outlined head-variant="light"
                     :items="tasks"
                     :fields="fields"
                     :filter="filter"
            >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(goland-questions)="data">
                    <b-link :to="{name: 'goland-questions', params: {taskId: data.item.id}}">RIASEC вопросы</b-link>
                </template>
                <template v-slot:cell(economic-sector-questions)="data">
                    <b-link :to="{name: 'economic-sector-questions', params: {taskId: data.item.id}}">Вопросы по сектору</b-link>
                </template>
                <template v-slot:cell(value-questions)="data">
                    <b-link :to="{name: 'value-questions', params: {taskId: data.item.id}}">Вопросы по ценности</b-link>
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'task-update', params: {id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteTask(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import TaskMixin from '@/mixins/task/TaskMixin';

export default {
    name: "TaskList",
    mixins: [TaskMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'goland-questions', label: 'RIASEC вопросы'},
                { key: 'economic-sector-questions', label: 'Вопросы по сектору'},
                { key: 'value-questions', label: 'Вопросы по ценности'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Тесты', to: {name: 'tasks'}},
        ];
        this.requestParams = {
            is_staff: true
        };
        this.getTasks()
    },
}
</script>

<style scoped>

</style>
