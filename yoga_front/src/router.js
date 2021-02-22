import Vue from 'vue'
import Router from 'vue-router'

import TheContainer from './containers/TheContainer.vue';
import Login from './components/Login.vue';
import ChangePassword from "./views/ChangePassword";
import Home from "./views/Home";

import StudentList from "./views/user/student/StudentList";
import StudentForm from "./views/user/student/StudentForm";
import AdminList from "./views/user/admin/AdminList";
import AdminForm from "./views/user/admin/AdminForm";
import ModeratorList from "./views/user/moderator/ModeratorList";
import ModeratorForm from "./views/user/moderator/ModeratorForm";
import GroupList from "./views/user/group/GroupList";
import GroupForm from "./views/user/group/GroupForm";

import OrganisationList from "./views/user/organisation/OrganisationList";
import OrganisationForm from "./views/user/organisation/OrganisationForm";
import SectionList from "./views/profession/section/SectionList";
import SectionForm from "./views/profession/section/SectionForm";
import SpecialtyList from "./views/profession/specialty/SpecialtyList";
import SpecialtyForm from "./views/profession/specialty/SpecialtyForm";
import EconomicSectorList from "./views/profession/economicSector/EconomicSectorList";
import EconomicSectorForm from "./views/profession/economicSector/EconomicSectorForm";
import CategoryList from "./views/profession/category/CategoryList";
import CategoryForm from "./views/profession/category/CategoryForm";
import ProfessionList from "./views/profession/profession/ProfessionList";
import ProfessionForm from "./views/profession/profession/ProfessionForm";

import ScaleList from "./views/task/scale/ScaleList";
import ScaleForm from "./views/task/scale/ScaleForm";
import TaskList from "./views/task/task/TaskList";
import TaskForm from "./views/task/task/TaskForm";
import GolandQuestionList from "./views/task/goland-question/GolandQuestionList";
import GolandQuestionForm from "./views/task/goland-question/GolandQuestionForm";
import EconomicSectorQuestionList from "./views/task/economic-sector-question/EconomicSectorQuestionList";
import EconomicSectorQuestionForm from "./views/task/economic-sector-question/EconomicSectorQuestionForm";
import ValueQuestionList from "./views/task/value-question/ValueQuestionList";
import ValueQuestionForm from "./views/task/value-question/ValueQuestionForm";
import OverviewForm from "@/views/info/overview/OverviewForm";
import EducationForm from "@/views/info/education/EducationForm";
import WayForm from "@/views/info/way/WayForm";
import Professions from "@/views/profession/profession/Professions";
import RegionList from "@/views/info/region/RegionList";
import RegionForm from "@/views/info/region/RegionForm";
import LaborForm from "@/views/info/labor/LaborForm";
import UniversityList from "@/views/info/university/UniversityList";
import UniversityForm from "@/views/info/university/UniversityForm";
import ResourceForm from "@/views/info/resource/ResourceForm";
import LicenseList from "@/views/user/license/LicenseList";
import LicenseGenerateForm from "@/views/user/license/LicenseGenerateForm";
import PersonalityForm from "@/views/info/personality/PersonalityForm";

Vue.use(Router);

export default new Router({
	mode: 'history',
	// mode: 'hash',
	linkActiveClass: 'active',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				requiresAuth: false
			},
		},
		{
			path: '/',
			name: 'main',
			component: TheContainer,
			redirect: 'home',
			meta: {
				requiresAuth: true
			},
			children: [
				{
					path: 'home',
					name: 'home',
					component: Home,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'change-password',
					name: 'change-password',
					component: ChangePassword,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'user/student',
					name: 'students',
					component: StudentList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'user/student/update/:id',
					name: 'student-update',
					component: StudentForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/student/create',
					name: 'student-create',
					component: StudentForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/admin',
					name: 'admins',
					component: AdminList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'user/admin/update/:id',
					name: 'admin-update',
					component: AdminForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/admin/create',
					name: 'admin-create',
					component: AdminForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/moderator',
					name: 'moderators',
					component: ModeratorList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'user/moderator/update/:id',
					name: 'moderator-update',
					component: ModeratorForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/moderator/create',
					name: 'moderator-create',
					component: ModeratorForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/group',
					name: 'groups',
					component: GroupList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'user/group/update/:id',
					name: 'group-update',
					component: GroupForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'user/group/create',
					name: 'group-create',
					component: GroupForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'organisation',
					name: 'organisations',
					component: OrganisationList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'organisation/update/:id',
					name: 'organisation-update',
					component: OrganisationForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'organisation/create',
					name: 'organisation-create',
					component: OrganisationForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'organisation/:organisationId/license',
					name: 'licenses',
					component: LicenseList,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'organisation/:organisationId/license/generate',
					name: 'license-generate',
					component: LicenseGenerateForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector',
					name: 'economic-sectors',
					component: EconomicSectorList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'economic-sector/update/:id',
					name: 'economic-sector-update',
					component: EconomicSectorForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/create',
					name: 'economic-sector-create',
					component: EconomicSectorForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'section',
					name: 'sections',
					component: SectionList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'section/update/:id',
					name: 'section-update',
					component: SectionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'section/create',
					name: 'section-create',
					component: SectionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'section/:sectionId/specialty',
					name: 'specialties',
					component: SpecialtyList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'section/:sectionId/specialty/update/:id',
					name: 'specialty-update',
					component: SpecialtyForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'section/:sectionId/specialty/create',
					name: 'specialty-create',
					component: SpecialtyForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category',
					name: 'categories',
					component: CategoryList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'economic-sector/:economicSectorId/category/update/:id',
					name: 'category-update',
					component: CategoryForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/create',
					name: 'category-create',
					component: CategoryForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'professions',
					name: 'profession-list',
					component: Professions,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession',
					name: 'professions',
					component: ProfessionList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/update/:id',
					name: 'profession-update',
					component: ProfessionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/create',
					name: 'profession-create',
					component: ProfessionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/overview/:professionId',
					name: 'profession-overview',
					component: OverviewForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/labor/:professionId',
					name: 'profession-labor',
					component: LaborForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/resource/:professionId',
					name: 'profession-resource',
					component: ResourceForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/personality/:professionId',
					name: 'profession-personality',
					component: PersonalityForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/education/:professionId',
					name: 'profession-education',
					component: EducationForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'economic-sector/:economicSectorId/category/:categoryId/profession/way/:professionId',
					name: 'profession-way',
					component: WayForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'scale',
					name: 'scales',
					component: ScaleList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'scale/update/:id',
					name: 'scale-update',
					component: ScaleForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'scale/create',
					name: 'scale-create',
					component: ScaleForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task',
					name: 'tasks',
					component: TaskList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'task/update/:id',
					name: 'task-update',
					component: TaskForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/create',
					name: 'task-create',
					component: TaskForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/:taskId/goland-question/',
					name: 'goland-questions',
					component: GolandQuestionList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'task/:taskId/goland-question/update/:id',
					name: 'goland-question-update',
					component: GolandQuestionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/:taskId/goland-question/create',
					name: 'goland-question-create',
					component: GolandQuestionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/:taskId/economic-sector-question/',
					name: 'economic-sector-questions',
					component: EconomicSectorQuestionList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'task/:taskId/economic-sector-question/update/:id',
					name: 'economic-sector-question-update',
					component: EconomicSectorQuestionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/:taskId/economic-sector-question/create',
					name: 'economic-sector-question-create',
					component: EconomicSectorQuestionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/:taskId/value-question/',
					name: 'value-questions',
					component: ValueQuestionList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'task/:taskId/value-question/update/:id',
					name: 'value-question-update',
					component: ValueQuestionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'task/:taskId/value-question/create',
					name: 'value-question-create',
					component: ValueQuestionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'region',
					name: 'regions',
					component: RegionList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'region/update/:id',
					name: 'region-update',
					component: RegionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'region/create',
					name: 'region-create',
					component: RegionForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'university',
					name: 'universities',
					component: UniversityList,
					meta: {
						requiresAuth: true
					},
				},
				{
					path: 'university/update/:id',
					name: 'university-update',
					component: UniversityForm,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'university/create',
					name: 'university-create',
					component: UniversityForm,
					meta: {
						requiresAuth: true
					}
				},
			]
		},
	],
})
