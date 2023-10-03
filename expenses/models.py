from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Expense(models.Model):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
    date = models.DateField()
    total = models.FloatField(default=0.0)
    category = models.ForeignKey("expenses.Category", on_delete=models.CASCADE)

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return "{} spent on {} for {}".format(str(self.total), self.date, self.category)
