from django.urls import path

from .views import *

urlpatterns = [
    path('get-workout/<int:workout_id>/', WorkoutAPI.as_view() ,name='WorkoutProfile'),
    path('get-workout-list/<int:page_num>/', WorkoutPaginatedList.as_view() ,name='WorkoutList'),
    path('get-workout-list/', WorkoutInfo.as_view() ,name='WorkoutFullList'),
    path('get-workout-filtered-list/', WorkoutFilteredList.as_view() ,name='WorkoutFilteredList'),
    path('create-workout/', WorkoutAPI.as_view() ,name='WorkoutCreate'),
    path('update-workout/<int:workout_id>/', WorkoutAPI.as_view() ,name='WorkoutUpdate'),
    path('delete-workout/<int:workout_id>/', WorkoutAPI.as_view() ,name='WorkoutDelete'),
    path('get-trouble-list/', TroubleList.as_view() ,name='TroubleFullList'),
    path('get-trouble/<int:trouble_id>/', TroubleAPI.as_view() ,name='TroubleFullList'),
    path('create-trouble/', TroubleAPI.as_view() ,name='TroubleCreate'),
    path('update-trouble/<int:trouble_id>/', TroubleAPI.as_view() ,name='TroubleUpdate'),
    path('delete-trouble/<int:trouble_id>/', TroubleAPI.as_view() ,name='TroubleDelete'),

]