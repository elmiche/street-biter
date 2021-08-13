from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm



class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    #you can make this a requirement too
    #class Meta, gives a nested name space for configurations, keeps them in one place. The User model will be affected. The fields in this list, are the fiels we want and in the specific order. 
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
