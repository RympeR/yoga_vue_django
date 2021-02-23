from rest_framework import serializers
from .models import Workout
from django.shortcuts import get_object_or_404

class WorkoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workout
        fields = (
            'id',
            'title',
            'name',
            'video',
            'duration',
            'periodicity',
            'level',
            'description',
            'value',
            'image'
        )

    @staticmethod
    def create(validated_data):
        workout = Workout(
            title=validated_data['title'],
            name=validated_data['name'],
            video=validated_data['video'],
            duration=validated_data['duration'],
            periodicity=validated_data['periodicity'],
            level=validated_data['level'],
            description=validated_data['description'],
            value=validated_data['value'],
            image=validated_data['image']
        )
        workout.save()
        return workout.id

    @staticmethod
    def update(validated_data):
        workout = get_object_or_404(Workout, pk=validated_data['workout_id'])
        workout.title=validated_data['title']
        workout.name=validated_data['name']
        workout.video=validated_data['video']
        workout.duration=validated_data['duration']
        workout.periodicity=validated_data['periodicity']
        workout.level=validated_data['level']
        workout.description=validated_data['description']
        workout.value=validated_data['value']
        workout.image=validated_data['image']
        workout.save()
        return workout

    @staticmethod
    def getWorkout(workout_id):
        workout = get_object_or_404(Workout, pk=workout_id)
        return workout

    @staticmethod
    def getList():
        workouts = Workout.objects.all()
        return workouts

    @staticmethod
    def deleteWorkout(workout_id):
        workout = get_object_or_404(Workout, pk=workout_id)
        workout = workout.delete()
        return workout

