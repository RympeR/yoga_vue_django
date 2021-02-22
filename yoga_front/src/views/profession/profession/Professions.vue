<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button v-b-toggle.sidebar-filter variant="info">Фильтр</b-button>
            </div>
            <b-table hover outlined head-variant="light"
                :items="professions"
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
                <template v-slot:cell(category)="data">
                    {{data.item.category.name}}
                </template>
                <template v-slot:cell(sector)="data">
                    {{data.item.category.economic_sector.name}}
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'profession-update', params: {economicSectorId: data.item.category.economic_sector.id, categoryId: data.item.category.id, id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteProfession(data.item.id)"/>
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
                        @change="getCategoriesList"
                    />
                </div>
                <div class="px-3 py-2">
                    <label>Категория:</label>

                    <b-form-select
                        v-model="filter.category"
                        :options="categories"
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
import ProfessionMixin from "@/mixins/profession/ProfessionMixin";
import EconomicSectorMixin from "@/mixins/profession/EconomicSectorMixin";
import CategoryMixin from "@/mixins/profession/CategoryMixin";

export default {
    name: "ProfessionList",
    mixins: [ProfessionMixin, EconomicSectorMixin, CategoryMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'category', label: 'Категория'},
                { key: 'sector', label: 'Сектор'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: {
                economic_sector: null,
                category: null
            },
        }
    },
    created() {
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Профессии', to: {name: 'professions'}},
        ];
        this.requestParams = {
            category: this.categoryId
        };
        this.getEconomicSectors();
        this.getProfessions()
    },
    methods: {
        getCategoriesList(){
            this.categorySearch = {
                economic_sector: this.filter.economic_sector
            }
            this.filter.category = null
            this.getCategories()
        },
        goFilter(e) {
            e.preventDefault();
            this.professionSearch = this.filter
            this.getProfessions()
        },
        clearFilter() {
            this.filter = {}
            this.economicSectorQuestionSearch = {}
            this.getProfessions()
        },
    }
}
</script>

<style scoped>

</style>
