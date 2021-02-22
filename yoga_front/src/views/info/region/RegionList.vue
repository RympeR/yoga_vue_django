<template>
    <b-row>
        <b-col>
            <div class="mb-4">
                <b-button :to="{name: 'region-create'}" variant="primary" size="md">
                    Добавить
                </b-button>
            </div>
            <b-table hover outlined head-variant="light"
                     :items="regions"
                     :fields="fields"
                     :filter="filter"
            >
                <template #cell(index)="data">
                    <b>{{ data.index + 1 }}</b>
                </template>
                <template v-slot:cell(actions)="data">
                    <div class="table__actions">
                        <b-button class="btn_edit" :to="{name: 'region-update', params: {id: data.item.id}}"></b-button>
                        <!--<btn-turn :turn="true"/>-->
                        <b-button class="btn_delete" @click="deleteRegion(data.item.id)"/>
                    </div>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>

<script>
import RegionMixin from '@/mixins/info/RegionMixin';

export default {
    name: "RegionList",
    mixins: [RegionMixin],
    data () {
        return {
            fields: [
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Название'},
                { key: 'actions', label: ''},
            ],
            activePage: 1,
            filter: null,
        }
    },
    created() {
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Регионы', to: {name: 'regions'}},
        ];
        this.requestParams = {
            is_staff: true
        };
        this.getRegions()
    },
}
</script>

<style scoped>

</style>
