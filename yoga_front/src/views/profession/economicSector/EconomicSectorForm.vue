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
                                      v-model="economicSector.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="economicSector.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="form__item">
            <span class="form__label">Изображение</span>
            <div class="form__control">
                <template v-if="image">
                    <div class="img__thumbnail">
                        <div class="img__thumbnail-img">
                            <b-img :id="`field-${economicSector.id}`"
                                   :src="image" width="80"
                                   v-b-modal="'modal__thumbnail' + economicSector.id"
                            />
                        </div>
                        <b-modal :id="'modal__thumbnail' + economicSector.id" scrollable hide-footer centered class="modal-dialog-auto">
                            <b-img :src="image" fluid/>
                        </b-modal>
                        <b-button type="button" class="media-delete" variant="link" @click="deleteImg">Удалить</b-button>
                    </div>
                </template>
                <template v-else>
                    <b-form-file
                        :id="`field-${economicSector.image}`"
                        v-model="economicSector.image"
                        plain
                    />
                </template>
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
import EconomicSectorMixin from '@/mixins/profession/EconomicSectorMixin';

export default {
    name: 'EconomicSectorForm',
    mixins: [EconomicSectorMixin],
    data () {
        return {
            id: null,
            alert: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
                {text: 'Редактировать', to: {name: 'economic-sectors-update', params: {id: this.id}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
                {text: 'Создать', to: {name: 'economic-sectors-create'}}
            ];
        }
        if (this.$route.params.id)
            this.getEconomicSector(this.$route.params.id);
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.economicSector);
            this.saveEconomicSector(data, this.$route.params.id);
            this.alert = true;
        },
        processFile(event) {
            this.economicSector.image = event[0]
        },
        deleteImg() {
            let confirmDelete = confirm('Удалить фото?');
            if (confirmDelete) {
                this.image = null;
                this.economicSector.image = [];
            }
        }
    },
}
</script>

<style scoped>

</style>
