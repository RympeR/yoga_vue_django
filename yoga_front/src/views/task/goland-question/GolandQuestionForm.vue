<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">Вопрос</span>
            <div class="form__control">
                <div class="row">
                    <div class="col-6">
                        <b-form-textarea
                            class="short"
                            required
                            placeholder="ru"
                            v-model="golandQuestion.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-textarea class="short"
                                      required
                                      placeholder="kz"
                                      v-model="golandQuestion.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Тип</span>
            <div class="form__control">

                <b-form-select
                    class="short"
                    v-model="golandQuestion.question_type"
                    :options="static_data.golandTypes"
                />
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Шкала</span>
            <div class="form__control">

                <b-form-select
                    class="short"
                    v-model="golandQuestion.scale.id"
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
import GolandQuestionMixin from '@/mixins/task/GolandQuestionMixin';
import ScaleMixin from "@/mixins/task/ScaleMixin";

export default {
    name: 'GolandQuestionForm',
    mixins: [GolandQuestionMixin, ScaleMixin],
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
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Тесты', to: {name: 'tasks'}},
                {text: 'RIASEC вопросы', to: {name: 'goland-questions'}, params: {taskId: this.taskId}},
                {text: 'Редактировать', to: {name: 'goland-question-update', params: {id: this.id, taskId: this.taskId}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Тесты', to: {name: 'tasks'}},
                {text: 'RIASEC вопросы', to: {name: 'goland-questions', params: {taskId: this.taskId}}},
                {text: 'Создать', to: {name: 'goland-question-create', params: {taskId: this.taskId}}}
            ];
        }
        this.getScales();
        if (this.$route.params.id)
            this.getGolandQuestion(this.$route.params.id);
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.golandQuestion);
            data.task = this.taskId;
            this.saveGolandQuestion(data, this.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
