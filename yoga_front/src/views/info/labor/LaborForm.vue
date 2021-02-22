<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">Название</span>
            <div class="form__control">
                <div class="row">
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="ru"
                                      v-model="labor.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="labor.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание RU</span>
            <div class="form__control">
                <quillEditor v-model="labor.text_ru"/>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание KZ</span>
            <div class="form__control">
                <quillEditor v-model="labor.text_kk"/>
            </div>
        </div>

        <hr>
        <div class="form__item" v-for="region in laborRegions" v-bind:key="region.region">
            <span class="form__label">{{ region.name }}</span>
            <div class="form__control">
                <b-form-input class="short"
                              type="number"
                              required
                              v-model="region.quantity"
                />
            </div>
        </div>

        <div class="form__item form__item_submit">
            <div class="form__control">
                <b-button type="submit" variant="primary">Сохранить</b-button>
            </div>
        </div>
    </b-form>
</template>

<script>
import LaborMixin from '@/mixins/info/LaborMixin';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import RegionMixin from "@/mixins/info/RegionMixin";

export default {
    name: 'LaborForm',
    mixins: [LaborMixin, RegionMixin],
    components: {
        quillEditor
    },
    data() {
        return {
            id: null,
            economicSectorId: null,
            categoryId: null,
            professionId: null,
            alert: false,
            laborRegions: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.economicSectorId = this.$route.params.economicSectorId;
        this.categoryId = this.$route.params.categoryId;
        this.professionId = this.$route.params.professionId;
        this.$store.state.breadcrumbs = [
            {text: 'Главная', to: {name: 'home'}},
            {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
            {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
            {text: 'Профессии', to: {name: 'professions'}, params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId}},
            {text: 'Рынок труда', to: {name: 'profession-labor', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: this.id}}}
        ];

        if (this.$route.params.professionId)
            this.getLabor(this.professionId);
        this.getRegions()
            .then(() => {
                this.regions.forEach((region) => {
                    let quantity = this.labor.quantities.find(element => element.region === region.id);
                    console.log(quantity)
                    let data = {name: region.name, region: region.id}
                    if (quantity)
                        data['quantity'] = quantity.quantity
                    else
                        data['quantity'] = 0
                    this.laborRegions.push(data)
                })
                console.log(this.laborRegions)
            })
            .catch(response => {
                console.log(response)
            })
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.labor);
            console.log(data)
            data.profession = this.professionId;
            data.quantities = this.laborRegions;
            this.saveLabor(data, this.professionId);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
