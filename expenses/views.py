from django.db.models import Sum

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Category, Expense
from .serializers import *


@api_view(["GET"])
def categories(request):
    if request.method == "GET":
        serializer = CategorySerializer(
            Category.objects.all(), context={"request": request}, many=True
        )

        return Response(serializer.data)


@api_view(["GET", "POST"])
def expenses(request):
    if request.method == "GET":
        serializer = ExpenseSerializer(
            Expense.objects.all(), context={"request": request}, many=True
        )

        return Response(serializer.data)

    elif request.method == "POST":
        serializer = ExpenseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT", "DELETE"])
def expenses_detail(request, pk):
    try:
        expense = Expense.objects.get(pk=pk)
    except Expense.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "PUT":
        serializer = ExpenseSerializer(
            expense, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        expense.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def expenses_stats(request):
    aggregated_data = (
        Expense.objects.values("category__name")
        .order_by("-total")
        .annotate(total=Sum("total"))
    )
    return Response(aggregated_data)
