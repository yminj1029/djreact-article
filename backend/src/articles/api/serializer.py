from django.db import models
from rest_framework import serializers
from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:  # 메타는 클래스를 만드는 클래스다
        model = Article
        fields = ('id', 'title', 'content')
