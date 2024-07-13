from django.contrib import admin
from .models import Purchase, Book

# Register your models here.


class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'seller']


class PurchaseAdmin(admin.ModelAdmin):
    list_display = ['buyer', 'book']
    list_filter = ['buyer', 'book', 'book__seller']


admin.site.register(Book, BookAdmin)
admin.site.register(Purchase, PurchaseAdmin)
