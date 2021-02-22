<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'profession-create', params: {economicSectorId: economicSectorId, categoryId: categoryId}}" variant="primary" size="md">
                    Добавить
                </b-button>
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
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'profession-update', params: {economicSectorId: economicSectorId, categoryId: categoryId, id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteProfession(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import ProfessionMixin from "@/mixins/profession/ProfessionMixin";

export default {
    name: "ProfessionList",
    mixins: [ProfessionMixin],
    data () {
        return {
            economicSectorId: null,
            categoryId: null,
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.economicSectorId = this.$route.params.economicSectorId;
        this.categoryId = this.$route.params.categoryId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
            {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
            {text: 'Профессии', to: {name: 'professions'}, params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId}},
        ];
        this.professionSearch = {
            category: this.categoryId
        };
        this.getProfessions()
    },
}
</script>

<style scoped>

</style>
