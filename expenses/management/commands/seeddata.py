from io import StringIO
from django.core.management.base import BaseCommand, CommandError
from expenses.models import Category, Expense

from datetime import date
import random


class Command(BaseCommand):
    help = "Seeds some Expense data"

    DATASET_SIZE = 150
    TOTAL_RANGE = (5.0, 250.0)
    TOTAL_DECIMAL = 1
    categories = []

    def __init__(self, *args, **kwargs):
        super(Command, self).__init__(*args, **kwargs)
        self.categories = Category.objects.all()
        self.categories = list(self.categories)

    def _random_category(self):
        return random.choice(self.categories)

    def _random_total(self):
        return round(
            random.uniform(self.TOTAL_RANGE[0], self.TOTAL_RANGE[1]), self.TOTAL_DECIMAL
        )

    def _random_date(self):
        start_date = date.today().replace(day=1, month=1).toordinal()
        end_date = date.today().toordinal()
        return date.fromordinal(random.randint(start_date, end_date))

    def handle(self, *args, **options):
        for i in range(self.DATASET_SIZE):
            try:
                expense = Expense.objects.create(
                    category=self._random_category(),
                    date=self._random_date(),
                    total=self._random_total(),
                )
            except Exception as e:
                raise CommandError("Exception {}".format(e))

            self.stdout.write(
                self.style.SUCCESS(
                    'Successfully created expense #%s : "%s"' % (i, expense)
                )
            )
