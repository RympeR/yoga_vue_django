<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'value-question-create', params: {taskId: taskId}}" variant="primary" size="md">
                    Добавить
                </b-button>
                &nbsp;
                <b-button v-b-toggle.sidebar-filter variant="info">Фильтр</b-button>
            </div>
            <b-table hover outlined head-variant="light"
                     :items="valueQuestions"
                     :fields="fields"
                     :filter="filter"
            >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(scale)="data">
                    {{data.item.scale.name}}
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'value-question-update', params: {id: data.item.id, taskId: taskId}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteValueQuestion(data.item.id)"/>
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
                        v-model="filter.question_type"
                        :options="static_data.valueTypes"
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
import ValueQuestionMixin from '@/mixins/task/ValueQuestionMixin';

export default {
    name: "ValueQuestionList",
    mixins: [ValueQuestionMixin],
    data () {
        return {
            taskId: null,
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Вопрос', sortable: true},
                { key: 'question_type', label: 'Тип', sortable: true},
                { key: 'scale', label: 'Шкала'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: {
                question_type: null
            },
        }
    },
    created() {
        this.taskId = this.$route.params.taskId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Тесты', to: {name: 'tasks'}},
            {text: 'Вопросы по ценности', to: {name: 'value-questions'}, params: {taskId: this.taskId}},
        ];
        this.requestParams = {
            task: this.taskId
        };
        this.getValueQuestions()
    },
    methods: {
        goFilter(e) {
            e.preventDefault();
            this.valueQuestionSearch = this.filter
            this.getValueQuestions()
        },
        clearFilter() {
            this.filter = {}
            this.valueQuestionSearch = {}
            this.getValueQuestions()
        },
    }
}
</script>

<style scoped>

</style>
