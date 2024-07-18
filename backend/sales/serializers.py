from .models import Purchase, Book
from rest_framework.serializers import ModelSerializer, ListField, CharField

class PurchaseSerializer(ModelSerializer):
    class Meta:
        model = Purchase
        fields = "__all__"
        
class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"


class BookSerializer(ModelSerializer):
    authors = ListField(
        child=CharField(max_length=100)
    )

    class Meta:
        model = Book
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['authors'] = instance.authors.split(', ')
        return representation

    def to_internal_value(self, data):
        internal_value = super().to_internal_value(data)
        internal_value['authors'] = ', '.join(data.get('authors', []))
        return internal_value
