<template>
    <b-form @submit="goSave($event)">
        <div class="form__item">
            <span class="form__label">Название</span>
            <div class="form__control">
                <b-form-input class="short"
                    type="text"
                    v-model="group.name"
                />
            </div>
        </div>
        <div v-for="permission in permissions" v-bind:key="permission.id">
            <div class="form__item">
                <span class="form__label">{{permission.name}}</span>
                <div class="form__control">
                    <b-checkbox class="short"
                                aria-label="permission.name"
                    />
                </div>
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
import GroupMixin from '@/mixins/user/GroupMixin';
import PermissionMixin from "@/mixins/user/PermissionMixin";

export default {
    name: 'GroupForm',
    mixins: [GroupMixin, PermissionMixin],
    data () {
        return {
            id: null,
            alert: false,
            permissions: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.permissions = this.getPermissions()
        if (this.id){
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Группы', to: {name: 'groups'}},
                {text: 'Редактировать', to: {name: 'group-update', params: {id: this.id}}}
            ];
        }else{
            this.$store.state.breadcrumbs = [
                {text: 'Главная', to: {name: 'home'}},
                {text: 'Группы', to: {name: 'groups'}},
                {text: 'Создать', to: {name: 'group-create'}}
            ];
        }
        if (this.$route.params.id)
            this.getGroup(this.$route.params.id);
    },
    methods: {
        goSave($event){
            $event.preventDefault();
            let data = Object.assign({}, this.group);
            this.saveGroup(data, this.$route.params.id);
            this.alert = true;
        },
    },
}
</script>

<style scoped>

</style>
