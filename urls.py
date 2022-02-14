from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('events/', index),
    path('resources/', index),
    path('explore/', index),
    path('entertainment/', index),
    path('advice/', index),
    path('members/', index)
]
