<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'economic-sector-question-create', params: {taskId: taskId}}" variant="primary">
                    Добавить
                </b-button>
                &nbsp;
                <b-button v-b-toggle.sidebar-filter variant="info">Фильтр</b-button>
            </div>
            <b-table hover outlined head-variant="light"
                     :items="economicSectorQuestions"
                     :fields="fields"
                     :filter="filter"
            >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(economicSector)="data">
                    {{data.item.economic_sector.name}}
                </template>
                <template v-slot:cell(scale)="data">
                    {{data.item.scale.name}}
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'economic-sector-question-update', params: {id: data.item.id, taskId: taskId}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteEconomicSectorQuestion(data.item.id)"/>
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
                    <label>Сектор:</label>

                    <b-form-select
                        v-model="filter.economic_sector"
                        :options="economicSectors"
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
import EconomicSectorQuestionMixin from '@/mixins/task/EconomicSectorQuestionMixin';
import EconomicSectorMixin from "@/mixins/profession/EconomicSectorMixin";

export default {
    name: "EconomicSectorQuestionList",
    mixins: [EconomicSectorQuestionMixin, EconomicSectorMixin],
    data () {
        return {
            taskId: null,
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Вопрос', sortable: true},
                { key: 'economicSector', label: 'Сектор', sortable: true},
                { key: 'scale', label: 'Шкала'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: {
                economic_sector: null
            },
        }
    },
    created() {
        this.taskId = this.$route.params.taskId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Тесты', to: {name: 'tasks'}},
            {text: 'Вопросы по сектору', to: {name: 'economic-sector-questions', params: {taskId: this.taskId}}},
        ];
        this.requestParams = {
            task: this.taskId
        };
        this.getEconomicSectorQuestions()
        this.getEconomicSectors()
    },
    methods: {
        goFilter(e) {
            e.preventDefault();
            this.economicSectorQuestionSearch = this.filter
            this.getEconomicSectorQuestions()
        },
        clearFilter() {
            this.filter = {}
            this.economicSectorQuestionSearch = {}
            this.getEconomicSectorQuestions()
        },
    }
}
</script>

<style scoped>

</style>
