from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Comment
from django.utils import timezone
<<<<<<< HEAD
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
=======
from django.core.paginator import Paginator
>>>>>>> 8304c01f39ae98ffe815250719631e332470e3c9
# Create your views here.

def main(request):
    return render(request, '../templates/main.html')

def talk(request):
<<<<<<< HEAD
    posts = Post.objects.filter().order_by('date')
    comments = Comment.objects.filter().order_by('date')

=======
    posts = Post.objects.filter().order_by('-date')
    comments = Comment.objects.filter().order_by('-date')
    paginator = Paginator(posts,  3)
    page = request.GET.get('page', None)
    if page == None or page == " ":
        page = 1
    posts = paginator.page(page)
>>>>>>> 8304c01f39ae98ffe815250719631e332470e3c9
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

def about(request):
    return render(request, 'about.html')

def org(request):
    return render(request, 'org.html')

def recruit(request):
    return render(request, 'recruit.html')