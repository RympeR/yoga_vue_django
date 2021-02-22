<template>
    <div class="sidebar">
        <ul class="sidebar__list">
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/main.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'home'}">Главная</b-link>
            </div>
            <hr>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/test.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'tasks'}">Тесты</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/specialization.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'sections'}">Образование</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/sector.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'economic-sectors'}">Сектора экономики</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/sector.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'profession-list'}">Профессии</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/scales.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'scales'}">Шкалы</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/gear.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'universities'}">ВУЗ и ССУЗ</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/gear.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'regions'}">Регионы</b-link>
            </div>
            <hr>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/organization.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'organisations'}">Организации</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/admin.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'admins'}">Администраторы</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/moder.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'moderators'}">Модераторы</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/tested.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'students'}">Пользователи</b-link>
            </div>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/gear.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'groups'}">Группы прав</b-link>
            </div>
            <hr>
            <div class="sidebar__item">
                <span class="sidebar__icon">
                    <img src="@/assets/img/icons/passwor.png" alt="">
                </span>
                <b-link class="sidebar__link" :to="{name: 'change-password'}">Изменить пароль</b-link>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TheSidebar',
}
</script>

<style lang="scss">
.sidebar {

}

.sidebar__list {
    list-style: none;
    margin: 0;
    padding: 0;
    // padding: 40px 10px 40px 25px;
}

.sidebar__item {
    // display: flex;
    position: relative;
    padding-left: 24px;
    margin-bottom: 20px;
    
    .b-icon {
        position: absolute;
        top: 4px;
        left: 0;
    }
}



.sidebar__link {
    color: #007bff;
    border-bottom: 1px solid#cee6ff;
    &:hover {
        text-decoration: none;
        border-bottom: 1px solid rgba(243, 55, 57, 0.23);
        color: #f33435;
    }
    &.active {
        color: #000000;
        border: none;
    }
}

.sidebar__icon {
    position: absolute;
    top: 3px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    object-fit: contain;
}
</style>