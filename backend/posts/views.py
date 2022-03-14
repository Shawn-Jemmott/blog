from django.shortcuts import render

from rest_framework import viewsets
from posts.models import *
from posts.serializer import *

class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# Create your views here.
