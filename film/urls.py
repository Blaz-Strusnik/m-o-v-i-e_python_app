from django.urls import path
from . import views

urlpatterns = [
    path('about/', views.about, name='film-about'),
    path('import/', views.simple_upload, name='film-import'),
    path('', views.home, name='film-sezon'),
    
    
]