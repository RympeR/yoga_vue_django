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
                                      v-model="personality.name_ru"
                                      @keyup="keyup($event, personality)"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="personality.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание RU</span>
            <div class="form__control">
                <quillEditor v-model="personality.text_ru" @change="quillKeyup($event, personality, 'text')"/>
            </div>
        </div>
        <div class="form__item">
            <span class="form__label">Описание KZ</span>
            <div class="form__control">
                <quillEditor v-model="personality.text_kk"/>
            </div>
        </div>

        <hr>
        <h4>Блоки</h4>
        <div class="block" v-for="block in personality.blocks" v-bind:key="block.id">
            <div class="form__item">
                <span class="form__label">Название</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="block.name_ru"
                                          @keyup="keyup($event, block)"
                            />
                        </div>
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="kz"
                                          v-model="block.name_kk"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Заголовок</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="block.title_ru"
                                          @keyup="keyup($event, block, 'title')"
                            />
                        </div>
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="kz"
                                          v-model="block.title_kk"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Описание RU</span>
                <div class="form__control">
                    <quillEditor v-model="block.text_ru" @change="quillKeyup($event, block, 'text')"/>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Описание KZ</span>
                <div class="form__control">
                    <quillEditor v-model="block.text_kk"/>
                </div>
            </div>

            <!--            sections-->
                <h4>Секции</h4>
                <div class="block" v-for="section in block.sections" v-bind:key="section.id">
                <div class="form__item">
                    <span class="form__label">Процент</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      required
                                      v-model="section.percent"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Название</span>
                    <div class="form__control">
                        <div class="row">
                            <div class="col-6">
                                <b-form-input class="short"
                                              type="text"
                                              required
                                              placeholder="ru"
                                              v-model="section.name_ru"
                                              @keyup="keyup($event, section)"
                                />
                            </div>
                            <div class="col-6">
                                <b-form-input class="short"
                                              type="text"
                                              required
                                              placeholder="kz"
                                              v-model="section.name_kk"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Описание RU</span>
                    <div class="form__control">
                        <quillEditor v-model="section.text_ru" @change="quillKeyup($event, section, 'text')"/>
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Описание KZ</span>
                    <div class="form__control">
                        <quillEditor v-model="section.text_kk"/>
                    </div>
                </div>
                <p class="text-right">
                    <b-button type="button" variant="outline-danger" @click="deleteSection(block, section)">Удалить секцию</b-button>
                </p>
            </div>
            <p class="text-left">
                <b-button type="button" variant="outline-success" @click="addSection(block)">Добавить секцию</b-button>
            </p>
            <!--/            sections-->

            <p class="text-right">
                <b-button type="button" variant="outline-danger" @click="deleteBlock(block)">Удалить блок</b-button>
            </p>
        </div>
        <p class="text-left">
            <b-button type="button" variant="outline-primary" @click="addBlock">Добавить блок</b-button>
        </p>

        <div class="form__item form__item_submit">
            <div class="form__control">
                <b-button type="submit" variant="primary">Сохранить</b-button>
            </div>
        </div>
    </b-form>
</template>

<script>
import PersonalityMixin from '@/mixins/info/PersonalityMixin';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
    name: 'PersonalityForm',
    mixins: [PersonalityMixin],
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
            {text: 'Личность', to: {name: 'profession-personality', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: this.id}}}
        ];

        if (this.$route.params.professionId)
            this.getPersonality(this.professionId);
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.personality);
            data.profession = this.professionId;
            console.log(data)
            this.savePersonality(data, this.professionId);
            this.alert = true;
        },
        addBlock(){
            this.personality.blocks.push({
                id: this.getCurrentTimestamp(),
                name: null,
                name_ru: null,
                name_kk: null,
                title: null,
                title_ru: null,
                title_kk: null,
                text: null,
                text_ru: null,
                text_kk: null,
                sections: [],
            })
        },
        deleteBlock(block){
            this.removeFromArray(this.personality.blocks, block)
        },
        addSection(block){
            block.sections.push({
                id: this.getCurrentTimestamp(),
                name: null,
                name_ru: null,
                name_kk: null,
                text: null,
                text_ru: null,
                text_kk: null,
                percent: null,
            })
        },
        deleteSection(block, section){
            this.removeFromArray(block.sections, section)
        },
        keyup(e, item, key = 'name'){
            item[key] = e.target.value

        },
        quillKeyup(e, item, key = 'name'){
            item[key] = e.html
        }
    },
}
</script>

<style scoped>
.block{
    border: 1px solid #ccc;
    padding: 15px;
    margin: 0 0 15px 40px;
}
</style>
