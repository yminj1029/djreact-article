from rest_framework import serializers
from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import Article
from .serializer import ArticleSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer