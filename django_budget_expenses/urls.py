from django.contrib import admin
from django.urls import path, re_path
from expenses import views

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(r"^api/expenses/$", views.expenses_list),
    re_path(r"^api/expenses/([0-9])$", views.expenses_detail),
    re_path(r"^api/categories/$", views.categories_list),
    re_path(r"^api/categories/([0-9])$", views.categories_detail),
]