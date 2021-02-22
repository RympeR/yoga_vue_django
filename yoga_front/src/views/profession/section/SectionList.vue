<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'section-create', params: {economicSectorId: economicSectorId}}" variant="primary" size="md">
                    Добавить
                </b-button>
            </div>
            <b-table hover outlined head-variant="light"
                :items="sections"
                :fields="fields"
                :filter="filter"
                >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(name)="data">
                    <b-link :to="{name: 'specialties', params: {sectionId: data.item.id}}">{{data.item.name}}</b-link>
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'section-update', params: {id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteSection(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import SectionMixin from "@/mixins/profession/SectionMixin";

export default {
    name: "SectionList",
    mixins: [SectionMixin],
    data () {
        return {
            economicSectorId: null,
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'specialties_count', label: 'Образовательные программы'},
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
            {text: 'Секции', to: {name: 'sections'}}
        ];
        this.requestParams = {
            economic_sector: this.economicSectorId
        };
        this.getSections()
    },
}
</script>

<style scoped>

</style>
