<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">Вопрос</span>
            <div class="form__control">
                <div class="row">
                    <div class="col-6">
                        <b-form-textarea class="short"
                                      required
                                      placeholder="ru"
                                      v-model="economicSectorQuestion.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-textarea class="short"
                                      required
                                      placeholder="kz"
                                      v-model="economicSectorQuestion.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Сектор</span>
            <div class="form__control">

                <b-form-select
                    class="short"
                    v-model="economicSectorQuestion.economic_sector.id"
                    :options="economicSectors"
                    value-field="id"
                    text-field="name"
                />
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Шкала</span>
            <div class="form__control">

                <b-form-select
                    v-model="economicSectorQuestion.scale.id"
                    :options="scales"
                    value-field="id"
                    text-field="name"
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
import EconomicSectorQuestionMixin from '@/mixins/task/EconomicSectorQuestionMixin';
import EconomicSectorMixin from "@/mixins/profession/EconomicSectorMixin";
import ScaleMixin from "@/mixins/task/ScaleMixin";

export default {
    name: 'EconomicSectorQuestionForm',
    mixins: [EconomicSectorQuestionMixin, EconomicSectorMixin, ScaleMixin],
    data () {
        return {
            id: null,
            taskId: null,
            alert: false,
            questions: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.taskId = this.$route.params.taskId;
        this.getEconomicSectors();
        this.getScales();
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Тесты', to: {name: 'tasks'}},
                {text: 'Вопросы по сектору', to: {name: 'economic-sector-questions'}, params: {taskId: this.taskId}},
                {text: 'Редактировать', to: {name: 'economic-sector-question-update', params: {id: this.id, taskId: this.taskId}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Тесты', to: {name: 'tasks'}},
                {text: 'Вопросы по сектору', to: {name: 'economic-sector-questions', params: {taskId: this.taskId}}},
                {text: 'Создать', to: {name: 'economic-sector-question-create', params: {taskId: this.taskId}}}
            ];
        }
        if (this.$route.params.id)
            this.getEconomicSectorQuestion(this.$route.params.id);
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.economicSectorQuestion);
            data.task = this.taskId;
            this.saveEconomicSectorQuestion(data, this.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
