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
                                      v-model="resource.name_ru"
                        />
                    </div>
                    <div class="col-6">
                        <b-form-input class="short"
                                      type="text"
                                      required
                                      placeholder="kz"
                                      v-model="resource.name_kk"
                        />
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h4>Статьи</h4>
        <div v-for="article in resource.articles" v-bind:key="article.id">
            <div class="form__item">
                <span class="form__label">Название</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="article.name_ru"
                                          @keyup="keyup($event, article)"
                            />
                        </div>
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="kz"
                                          v-model="article.name_kk"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Ссылка на статью</span>
                <div class="form__control">
                    <b-input-group>
                        <b-form-input class="short"
                                      type="url"
                                      required
                                      v-model="article.url"
                        />
                        <b-input-group-append>
                            <b-button type="button" class="delete" variant="danger" @click="deleteArticle(article)">Удалить</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </div>
        </div>
        <p class="text-right">
            <b-button type="button" variant="outline-primary" @click="addArticle">Добавить статью</b-button>
        </p>


        <h4>Видео</h4>
        <div v-for="video in resource.videos" v-bind:key="video.id">
            <div class="form__item">
                <span class="form__label">Название</span>
                <div class="form__control">
                    <div class="row">
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="ru"
                                          v-model="video.name_ru"
                                          @keyup="keyup($event, video)"
                            />
                        </div>
                        <div class="col-6">
                            <b-form-input class="short"
                                          type="text"
                                          required
                                          placeholder="kz"
                                          v-model="video.name_kk"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__item">
                <span class="form__label">Ссылка на видео</span>
                <div class="form__control">
                    <b-input-group>
                        <b-form-input class="short"
                                      type="url"
                                      required
                                      v-model="video.url"
                        />
                        <b-input-group-append>
                            <b-button type="button" class="delete" variant="danger" @click="deleteArticle(video)">Удалить</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </div>
        </div>

        <p class="text-right">
            <b-button type="button" variant="outline-primary" @click="addVideo">Добавить видео</b-button>
        </p>

        <div class="form__item form__item_submit">
            <div class="form__control">
                <b-button type="submit" variant="primary">Сохранить</b-button>
            </div>
        </div>
    </b-form>
</template>

<script>
import ResourceMixin from '@/mixins/info/ResourceMixin';

export default {
    name: 'ResourceForm',
    mixins: [ResourceMixin],
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
            {text: 'Доп. ресурсы', to: {name: 'profession-resource', params: {economicSectorId: this.economicSectorId, categoryId: this.categoryId, professionId: this.id}}}
        ];

        if (this.$route.params.professionId)
            this.getResource(this.professionId);
    },
    methods: {
        goSave($event) {
            $event.preventDefault();
            let data = Object.assign({}, this.resource);
            console.log(data)
            data.profession = this.professionId;
            this.saveResource(data, this.professionId);
            this.alert = true;
        },
        addArticle(){
            this.resource.articles.push({url: null, id: this.getCurrentTimestamp()})
        },
        deleteArticle(article){
            this.removeFromArray(this.resource.articles, article)
        },
        addVideo(){
            this.resource.videos.push({url: null, id: this.getCurrentTimestamp()})
        },
        deleteVideo(video){
            this.removeFromArray(this.resource.videos, video)
        },
        keyup(e, item){
            item.name = e.target.value
        }
    },
}
</script>

<style scoped>

</style>
