from django.db import models
from django.shortcuts import reverse
from django.contrib.auth.models import AbstractUser, Group
from django.utils.translation import ugettext_lazy as _
# Create your models here.

class User(models.Model):
    first_name = models.CharField(_('First name'), max_length=255, null=True, blank=True)
    last_name = models.CharField(_('Last name'), max_length=255, null=True, blank=True)
    image = models.ImageField(verbose_name='Фото профиля')

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['id']
        
    def __str__(self):
        return self.first_name + ' ' + self.last_name

