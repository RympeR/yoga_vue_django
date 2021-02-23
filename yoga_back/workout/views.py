from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from .serializers import WorkoutSerializer
from django.core.paginator import Paginator
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes, renderer_classes
import os
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

@permission_classes((permissions.AllowAny,))

class WorkoutAPI(APIView):
    parser_classes = (MultiPartParser,)
    def get(self,*args, **kwargs):
        print(*kwargs.keys())
        workout = WorkoutSerializer.getWorkout(
            **kwargs
        )
        domain = self.request.get_host()
        path_image = workout.image.url
        path_video = workout.video.url
        image_url = 'http://{domain}{path}'.format(domain=domain, path=path_image)
        video_url = 'http://{domain}{path}'.format(domain=domain, path=path_video)
        return Response(
            {
                "workout_id": workout.id,
                "title": workout.title,
                "name": workout.name,
                "video": video_url,
                "duration": workout.duration,
                "periodicity": workout.periodicity,
                "level": workout.level,
                "description": workout.description,
                "value": workout.value,
                "image": image_url,
            }
        )

    def post(self, *args, **kwargs):
        workout = WorkoutSerializer.create(self.request.data)
        return Response(
            {
                "workout_id": workout
            }
        )

    def put(self, *args, **kwargs):
        workout = WorkoutSerializer.update(self.request.data)
        domain = self.request.get_host()
        path_image = workout.image.url
        path_video = workout.video.url
        image_url = 'http://{domain}{path}'.format(domain=domain, path=path_image)
        video_url = 'http://{domain}{path}'.format(domain=domain, path=path_video)
        return Response(
            {
                "workout_id": workout.id,
                "title": workout.title,
                "name": workout.name,
                "video": video_url,
                "duration": workout.duration,
                "periodicity": workout.periodicity,
                "level": workout.level,
                "description": workout.description,
                "value": workout.value,
                "image": image_url,
            }
        )
    
    def delete(self, *args, **kwargs):
        workout = WorkoutSerializer.deleteWorkout(
            **kwargs
        )
        return Response(
            {
                "workout_id": workout[0]
            }
        )
@permission_classes((permissions.AllowAny,))
@renderer_classes((JSONRenderer,))
class WorkoutList(APIView):
    def get(self,*args, **kwargs):
        workouts = WorkoutSerializer.getList()
        workouts_list = workouts.values('id', 'title', 'image')
        domain = self.request.get_host()
        for ind, workout in enumerate(workouts_list):
            path_image = workouts[ind].image.url
            image_url = 'http://{domain}{path}'.format(domain=domain, path=path_image)
            workouts_list[ind]['image'] = image_url

        pg = Paginator(workouts_list, per_page=1)
        page = pg.page(kwargs['page_num'])

        return Response(
            {
                "page": kwargs['page_num'],
                "total_pages": pg.num_pages,
                "results": page.object_list,
                "page_numbers": {
                    "next": page.next_page_number() if page.has_next() else kwargs['page_num'],
                    "prev": page.previous_page_number() if page.has_previous() else kwargs['page_num'],
                }
            }
        )
@permission_classes((permissions.AllowAny,))
@renderer_classes((JSONRenderer,))
class WorkoutInfo(APIView):
    def get(self,*args, **kwargs):
        workouts = WorkoutSerializer.getList()
        workouts_list = workouts.values()
        domain = self.request.get_host()
        for ind, workout in enumerate(workouts_list):

            path_image = workouts[ind].image.url
            path_video = workouts[ind].video.url
            image_url = 'http://{domain}{path}'.format(domain=domain, path=path_image)
            video_url = 'http://{domain}{path}'.format(domain=domain, path=path_video)
            workouts_list[ind]['image'] = image_url
            workouts_list[ind]['video'] = video_url
        return Response(
            {
                "results": workouts_list
            }
        )