from rest_framework import serializers
from posts.models import *



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'