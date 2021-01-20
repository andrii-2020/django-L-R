from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny

from  user.serializer import UserS


class RegisterView(CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserS