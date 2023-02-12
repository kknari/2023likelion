from django.db import models

# Create your models here.
class Post(models.Model):
    content = models.TextField(max_length=200, null=False)
    date = models.DateTimeField(auto_now_add=True) # 자동으로 현재 시간 추가

    def __str__(self):
        return self.content

class Comment(models.Model):
    comment = models.TextField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.comment}" 