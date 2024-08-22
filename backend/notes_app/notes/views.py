from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import NotesSerializer

@api_view(['GET'])
def get_notes(request):
    notes =  Note.objects.all()
    serializer = NotesSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_note(request):
    try:
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({"msg": "Note added"}, status=status.HTTP_201_CREATED)
    except:
        print("except called")
        Response({"msg": "Could not add note. Please try again"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_note(request, id):
    note = Note.objects.get(pk=id)
    note.delete()
    return Response({"msg": "Note deleted"}, status=status.HTTP_200_OK)
