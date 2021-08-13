from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# from django.contrib.auth.models import get_user_model

class Street_biter(models.Model):
    date_posted = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    latitude = models.CharField(max_length=16, default=0)
    longitude = models.CharField(max_length=16, default=0) 
    details = models.CharField(max_length=900, default='add details')
    species = models.CharField(max_length=20, default='add details')


