from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) #if user is deleted, profile is too, but not visa versa
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    #add more user fields like BIO or date created. 
    
    def __str__(self):
        return f'{self.user.username} Profile'


