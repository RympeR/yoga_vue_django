from django.db import models
from django.contrib.auth.models import AbstractUser, Group
from django.utils.translation import ugettext_lazy as _
# Create your models here.

class User(AbstractUser):
    first_name = models.CharField(_('First name'), max_length=255, null=True, blank=True)
    last_name = models.CharField(_('Last name'), max_length=255, null=True, blank=True)