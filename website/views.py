from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def resources(request):
    return render(request, 'resources.html')

def events(request):
    return render(request, 'events.html')