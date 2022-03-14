from django.db import models


class Post(models.Model):
    title = models.CharField(blank=False,  max_length=30)
    body = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
# Create your models here.

