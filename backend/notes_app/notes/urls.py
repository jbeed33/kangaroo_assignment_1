from django.urls import path
from .views import get_notes, create_note, delete_note


urlpatterns = [
    path('notes/', get_notes, name="get_notes"),
    path('notes/create/', create_note , name="create_note"),
    path('notes/delete/<int:id>/', delete_note , name="delete_note")
]