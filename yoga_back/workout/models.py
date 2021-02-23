from django.db import models
from django.utils.translation import ugettext_lazy as _
# Create your models here.

WORKOUT_LEVELS = (
    ('Простой', 'Простой'),
    ('Средний', 'Средний'),
    ('Продвинутый', 'Продвинутый'),
)

class Workout(models.Model):
    title = models.CharField(verbose_name=_('Заголовок'), max_length=255)
    name = models.CharField(verbose_name=_('Название'), max_length=255)
    video = models.FileField(verbose_name=_('Видео'))
    duration = models.CharField(verbose_name=_('Длительность'), max_length=255)
    periodicity = models.CharField(verbose_name=_('Периодичность'), max_length=255)
    level = models.CharField(verbose_name=_('Уровень сложности'), max_length=255, choices=WORKOUT_LEVELS)
    image = models.ImageField(verbose_name=_('Превью'))
    description = models.TextField(verbose_name=_('Описание'))
    value = models.TextField(verbose_name=_('Польза'))


    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Тренировка')
        verbose_name_plural = _('Тренировки')
        ordering = ['id']