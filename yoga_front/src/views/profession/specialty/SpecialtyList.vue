<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'specialty-create'}" variant="primary" size="md">
                    Добавить
                </b-button>
            </div>
            <b-table hover outlined head-variant="light"
                :items="specialties"
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
                        <b-button class="btn_edit" :to="{name: 'specialty-update', params: {id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteSpecialty(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import SpecialtyMixin from '@/mixins/profession/SpecialtyMixin';

export default {
    name: "SpecialtyList",
    mixins: [SpecialtyMixin],
    data () {
        return {
            fields: [
                { key: 'index', label: '#'},
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
            sectionId: null,
        }
    },
    created() {
        this.sectionId = this.$route.params.sectionId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Секции', to: {name: 'sections'}},
            {text: 'Области образования', to: {name: 'specialties', params: {sectionId: this.sectionId}}},
        ];
        this.requestParams = {
            section: this.sectionId
        }
        this.getSpecialties()
    },
}
</script>

<style scoped>

</style>
