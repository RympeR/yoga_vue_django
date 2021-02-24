from django.contrib.auth.models import Group, Permission
from rest_framework import serializers
from .models import User
from django.shortcuts import get_object_or_404


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'image'
        )

    @staticmethod
    def create(validated_data):
        user = User(
            first_name=validated_data['first_name'][0],
            last_name=validated_data['last_name'][0],
            image=validated_data['image']
        )
        user.save()
        return user.id

    @staticmethod
    def update(validated_data):
        user = get_object_or_404(User, pk=validated_data['user_id'])
        user.first_name = validated_data['first_name'][0]
        user.last_name = validated_data['last_name'][0]
        try:
            user.image = validated_data['image'][0]
        except KeyError:
            user.image = user.image
        user.save()
        return user

    @staticmethod
    def getProfile(user_id):
        user = get_object_or_404(User, pk=user_id)
        return user

    @staticmethod
    def deleteUser(user_id):
        user = get_object_or_404(User, pk=user_id)
        user = user.delete()
        return user

    @staticmethod
    def getList():
        users = User.objects.all()
        return users
