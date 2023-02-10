from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Comment
from django.utils import timezone
# Create your views here.

def main(request):
    return render(request, '../templates/main.html')

def talk(request):
    posts = Post.objects.filter().order_by('date')
    comments = Comment.objects.filter().order_by('date')
    return render(request, 'talk.html', {'posts' : posts, 'comments' : comments})

def create(request):
    if(request.method == 'POST'):                   
        post = Post()                              
        post.content = request.POST['content']
        if post.content == "":
            return redirect('talk')
        else:  
            post.date = timezone.now()
            post.save()                               
    return redirect('talk')
