<template>
    <b-form @submit="goSave($event)">
        <p class="text-right">
            <b-button :to="{name: 'profession-overview', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: profession.id}}">Обзор</b-button>
            &nbsp;
            <b-button :to="{name: 'profession-education', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: profession.id}}">Образование</b-button>
            &nbsp;
            <b-button :to="{name: 'profession-labor', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: profession.id}}">Рынок труда</b-button>
            &nbsp;
            <b-button :to="{name: 'profession-way', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: profession.id}}">Как стать</b-button>
            &nbsp;
            <b-button :to="{name: 'profession-resource', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: profession.id}}">Доп. ресурсы</b-button>
            &nbsp;
            <b-button :to="{name: 'profession-personality', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: profession.id}}">Личность</b-button>
        </p>
        <b-tabs content-class="mt-3">
            <b-tab title="Основное" active>
                <div class="form__item" v-if="id">
                    <span class="form__label">Сектор/Категория</span>
                    <div class="form__control">
                        <div class="row">
                            <div class="col-6">
                                <b-form-select
                                    v-model="profession.category.economic_sector.id"
                                    :options="economicSectors"
                                    class="short"
                                    value-field="id"
                                    text-field="name"
                                    @change="getCategoriesList"
                                />
                            </div>
                            <div class="col-6">
                                <b-form-select
                                    v-model="profession.category.id"
                                    :options="categories"
                                    class="short"
                                    value-field="id"
                                    text-field="name"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form__item">
                    <span class="form__label">Название</span>
                    <div class="form__control">
                        <div class="row">
                            <div class="col-6">
                                <b-form-input class="short"
                                              type="text"
                                              required
                                              placeholder="ru"
                                              v-model="profession.name_ru"
                                />
                            </div>
                            <div class="col-6">
                                <b-form-input class="short"
                                              type="text"
                                              required
                                              placeholder="kz"
                                              v-model="profession.name_kk"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form__item">
                    <span class="form__label">Средняя ЗП</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="text"
                                      v-model="profession.average_salary"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Рост</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="0.01"
                                      v-model="profession.growth"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Удовлетворение</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="text"
                                      v-model="profession.satisfaction"
                        />
                    </div>
                </div>
                <hr>
                <div class="form__item">
                    <span class="form__label">RIASEC</span>
                    <div class="form__control">
                        <b-form-checkbox
                            v-model="profession.r"
                            @change="checkRIASECCheckbox"
                            :disabled="!profession.r && count >= 3"
                        >
                            R
                        </b-form-checkbox>
                        <b-form-checkbox
                            v-model="profession.i"
                            @change="checkRIASECCheckbox"
                            :disabled="!profession.i && count >= 3"
                        >
                            I
                        </b-form-checkbox>
                        <b-form-checkbox
                            v-model="profession.a"
                            @change="checkRIASECCheckbox"
                            :disabled="!profession.a && count >= 3"
                        >
                            A
                        </b-form-checkbox>
                        <b-form-checkbox
                            v-model="profession.s"
                            @change="checkRIASECCheckbox"
                            :disabled="!profession.s && count >= 3"
                        >
                            S
                        </b-form-checkbox>
                        <b-form-checkbox
                            v-model="profession.e"
                            @change="checkRIASECCheckbox"
                            :disabled="!profession.e && count >= 3"
                        >
                            E
                        </b-form-checkbox>
                        <b-form-checkbox
                            v-model="profession.c"
                            @change="checkRIASECCheckbox"
                            :disabled="!profession.c && count >= 3"
                        >
                            C
                        </b-form-checkbox>
                    </div>
                </div>
                <hr>
                <div class="form__item">
                    <span class="form__label">Achievement</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.achievement"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Working Conditions</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.working_conditions"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Recognition</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.recognition"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Relationships</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.relationships"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Support</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.support"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">Independence</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.independence"
                        />
                    </div>
                </div>
                <hr>
                <div class="form__item">
                    <span class="form__label">R</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.r_percent"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">I</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.i_percent"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">A</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.a_percent"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">S</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.s_percent"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">E</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.e_percent"
                        />
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__label">C</span>
                    <div class="form__control">
                        <b-form-input class="short"
                                      type="number"
                                      step="1"
                                      v-model="profession.c_percent"
                        />
                    </div>
                </div>
            </b-tab>

            <b-tab title="Области образования">
                <div class="form__item" v-for="specialty in specialties" v-bind:key="specialty.id">
                    <span class="form__label" v-if="section_id !== specialty.section.id" :set="section_id = specialty.section.id">{{specialty.section.name}}</span>
                    <div class="form__control">

                        <b-form-checkbox
                            v-model="professionSpecialties"
                            name="checkbox-1"
                            :value="specialty.id"
                            :unchecked-value="null"
                        >
                            {{ specialty.name }}
                        </b-form-checkbox>
                    </div>
                </div>
            </b-tab>
        </b-tabs>

        <div class="form__item form__item_submit">
            <div class="form__control">
                <b-button type="submit" variant="primary">Сохранить</b-button>
            </div>
        </div>
    </b-form>
</template>

<script>
import ProfessionMixin from '@/mixins/profession/ProfessionMixin';
import EconomicSectorMixin from "@/mixins/profession/EconomicSectorMixin";
import CategoryMixin from "@/mixins/profession/CategoryMixin";
import SpecialtyMixin from "@/mixins/profession/SpecialtyMixin";

export default {
    name: 'ProfessionForm',
    mixins: [ProfessionMixin, EconomicSectorMixin, CategoryMixin, SpecialtyMixin],
    data() {
        return {
            id: null,
            economicSectorId: null,
            categoryId: null,
            count: 0,
            professionSpecialties: [],
            alert: false
        }
    },
    created() {
        this.economicSectorId = this.$route.params.economicSectorId;
        this.categoryId = this.$route.params.categoryId;
        this.id = this.$route.params.id;
        if (this.id) {
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
                {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
                {text: 'Профессии', to: {name: 'professions'}, params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId}},
                {text: 'Редактировать', to: {name: 'profession-update', params: {id: this.id, economicSectorId: this.economicSectorId, categoryId: this.categoryId}}}
            ];
        } else {
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Сектора экономики', to: {name: 'economic-sectors'}},
                {text: 'Категории', to: {name: 'categories'}, params: {economicSectorId: this.economicSectorId}},
                {text: 'Профессии', to: {name: 'professions'}, params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId}},
                {text: 'Создать', to: {name: 'profession-create'}, params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId}}
            ];
        }
        this.getEconomicSectors();
        this.getSpecialties();
        if (this.$route.params.id){
            let self = this;
            this.getProfession(this.$route.params.id).then((response) => {
                this.checkRIASECCheckbox();
                self.categorySearch = {
                    economic_sector: response.data.category.economic_sector.id
                }
                self.getCategories()
                response.data.specialties.forEach((specialty) => {
                    self.professionSpecialties.push(specialty.id)
                })

            });
        }
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.profession);
            if (this.id)
                data.category = this.profession.category.id
            else
                data.category = this.categoryId;
            data.specialties = this.professionSpecialties;
            if (data.specialties.length === 0)
                data.specialties = []
            console.log(data)
            this.saveProfession(data, this.$route.params.id);
            this.alert = true;
        },
        checkRIASECCheckbox(){
            this.count = 0
            for (const [key, value] of Object.entries(this.profession)) {
                switch (key){
                    case 'r':
                        if (value)
                            this.count++
                        break;
                    case 'i':
                        if (value)
                            this.count++
                        break;
                    case 'a':
                        if (value)
                            this.count++
                        break;
                    case 's':
                        if (value)
                            this.count++
                        break;
                    case 'e':
                        if (value)
                            this.count++
                        break;
                    case 'c':
                        if (value)
                            this.count++
                        break;
                }
            }
            console.log(this.count)
        },
        getCategoriesList(){
            this.categorySearch = {
                economic_sector: this.profession.category.economic_sector.id
            }
            this.getCategories()
        }
    },
}
</script>

<style scoped>

</style>
