from rest_framework.generics import RetrieveAPIView, ListAPIView
from django.contrib.auth import get_user_model


from .serializer import UserS
User = get_user_model()


class UserListView(ListAPIView):
    serializer_class = UserS
    queryset = User.objects.all()


class CurrentUserView(RetrieveAPIView):
    serializer_class = UserS

    def get_object(self):
        user = self.request.user
        return user

