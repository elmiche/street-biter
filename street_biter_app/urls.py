from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='app-home'),
    path('about/', views.about, name='about-page'),
    path('admin/', admin.site.urls),
    path('details/<int:id>', views.details, name='details-view'),
    path('save_details', views.save_details, name='save_details'),
    path('my_sweetspots/', views.my_sweetspots, name='my_sweetspots'),
]

