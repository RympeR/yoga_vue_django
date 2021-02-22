<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'category-create', params: {economicSectorId: economicSectorId}}" variant="primary" size="md">
                    Добавить
                </b-button>
            </div>
            <b-table hover outlined head-variant="light"
                :items="categories"
                :fields="fields"
                :filter="filter"
                >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(name)="data">
                    <b-link :to="{name: 'professions', params: {economicSectorId: economicSectorId, categoryId: data.item.id}}">{{data.item.name}}</b-link>
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'category-update', params: {economicSectorId: economicSectorId, id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteCategory(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import CategoryMixin from "@/mixins/profession/CategoryMixin";

export default {
    name: "CategoryList",
    mixins: [CategoryMixin],
    data () {
        return {
            economicSectorId: null,
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'professions_count', label: 'Профессий'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.economicSectorId = this.$route.params.economicSectorId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
            {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
        ];
        this.categorySearch = {
            economic_sector: this.economicSectorId
        };
        this.getCategories()
    },
}
</script>

<style scoped>

</style>
