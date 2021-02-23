from django.urls import path

from .views import *

urlpatterns = [
    path('get-workout/<int:workout_id>/', WorkoutAPI.as_view() ,name='WorkoutProfile'),
    path('get-workout-list/', WorkoutInfo.as_view() ,name='WorkoutFullList'),
    path('get-workout-list/<int:page_num>/', WorkoutList.as_view() ,name='WorkoutList'),
    path('create-workout/', WorkoutAPI.as_view() ,name='WorkoutCreate'),
    path('update-workout/<int:workout_id>/', WorkoutAPI.as_view() ,name='WorkoutUpdate'),
    path('delete-workout/<int:workout_id>/', WorkoutAPI.as_view() ,name='WorkoutDelete'),
]