from django.test import TestCase
from posts.models import *

class PostTestCase(TestCase):
    def setUp(self):
        Post.objects.create(title='my first post', body='it was a wonderful sunny day')
    
    def test_post_has_title(self):
        p1 = Post.objects.get(title='my first post')
        self.assertEqual(p1.title, 'my first post')



# Create your tests here.
