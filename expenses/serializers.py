from rest_framework import serializers
from .models import Expense, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            "pk",
            "name",
        )


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = (
            "pk",
            "date",
            "total",
            "category",
        )

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret["category"] = instance.category.name
        return ret
