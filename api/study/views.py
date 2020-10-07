from django.shortcuts import render, get_object_or_404
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Students, Scores
from .serializers import StudentSerializer, ScoreSerializer, StudentBasicSerializer, ScoreBasicSerializer
from rest_framework.permissions import IsAuthenticated

@api_view(['GET', 'POST'])
def StudentBasicView(request):
    if request.method =='GET':
        student = Students.objects.all()
        serializer = StudentSerializer(student, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['PUT'])
def StudentDetailBasicView(request, pk):
    if request.method =='PUT':
        student = Students.objects.get(pk=pk)
        #student 원래데이터
        # request.data 사람이 보내준 데이터
        #원래데이터에 사람이보내준데이터를 접목 후 save
        serializer = StudentBasicSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'POST'])
def ScoreBasicView(request):
    if request.method == 'GET':
        score = Scores.objects.all()
        serializer = ScoreSerializer(score, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ScoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['PUT'])
def ScoreDetailBasicView(request, pk):
    if request.method == 'PUT':
        score = Scores.objects.get(pk=pk)
        serializer = ScoreBasicSerializer(score, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)







class StudentView(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    #permission_classes = [IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        name = self.request.query_params.get('name')
        if name:
            qs = qs.filter(name=name)
        return qs
    
    @action(detail=False, methods=['GET'])
    def incheon(self,request):
        qs = self.get_queryset().filter(address__contains = '인천') # like %인천% 이랑 똑같음
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['PUT'])
    def init(self, request, pk):
        instance = self.get_object()
        instance.address = ""
        instance.email = ""
        instance.save(update_fields=['address', 'email'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class ScoreView(viewsets.ModelViewSet):
    queryset = Scores.objects.all()
    serializer_class = ScoreSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        
        name = self.request.query_params.get('name')
        math = self.request.query_params.get('math')
        english = self.request.query_params.get('english')
        science = self.request.query_params.get('science')
        order = self.request.query_params.get('order')

        if name:
            qs = qs.filter(name=name)
           
        if math:
            qs = qs.filter(math__gte=math)
        
        if english:
            qs = qs.filter(english__gte=english)
        
        if science:
            qs = qs.filter(science__gte=science)

        if order:
            qs = qs.order_by(order)
        return qs




    # @action(detail=False, methods=['GET'])
    # def int(self,request):
    #     qs = self.get_queryset().filter(Scores.math > 80)
    #     serializer = self.get_serializer(qs, many=True)
    #     return Response(serializer.data)







# class StudentView(APIView):
    
#     def get(self, request):
#         qs = Students.objects.all()
#         serializer = StudentSerializer(qs, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#질문사항: get과 post 차이. 디테일도 아닌데 왜 둘다쓰이는것?

# class StudentDetailView(APIView):

#     def get_object(self, pk):
#         return get_object_or_404(Students, pk=pk)

#     def get(self, request, pk):
#         qs = self.get_object(pk)
#         serializer = StudentSerializer(qs)
#         return Response(serializer.data)

#     def put(self, request, pk):
#         qs = self.get_object(pk)
#         serializer = StudentSerializer(qs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)

#     def delete(self, request, pk):
#         qs = self.get_object(pk)
#         qs.delete()
#         return Response(status=204)



# class ScoreView(APIView):
#     def get(self, request):
#         qs = Scores.objects.all()
#         serializer = ScoreSerializer(qs, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = ScoreSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'POST'])
# def StudentView(request):

#     if request.method =='GET':
#         qs = Students.objects.all()
#         serializer = StudentSerializer(qs, many=True)
#         return Response(serializer.data)
#     elif request.method =='POST':
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def StudentDetailView(request, id):
#     qs = Students.objects.get(pk=id)
#     #상세조회
#     if request.method == 'GET':
#         serializer = StudentSerializer(qs)
#         return Response(serializer.data)
#     #수정
#     elif request.method == 'PUT':
#         serializer = StudentSerializer(qs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
#     #삭제
#     elif request.method =='DELETE':
#         qs.delete()
#         return Response(status=204)


# @api_view(['GET'])
# def ScoreView(request):
#     qs = Scores.objects.all()
#     serializer = ScoreSerializer(qs, many=True)
#     return Response(serializer.data)

# @api_view(['GET', 'PUT', 'DELETE'])
# def ScoreDetailView(request, id):
#     qs = Scores.objects.get(pk=id)
#     #상세조회
#     if request.method == 'GET':
#         serializer = ScoreSerializer(qs)
#         return Response(serializer.data)
#     #수정
#     elif request.method == 'PUT':
#         serializer = ScoreSerializer(qs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
#     #삭제
#     elif request.method == 'DELETE':
#         qs.delete()
#         return Response(status=204)