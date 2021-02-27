"""
Admin for account
"""
from django.utils.translation import ugettext_lazy as _
from django.contrib import admin

from account.models import User
from core.utils import get_model_by_id


class CustomUserAdmin(admin.ModelAdmin):
    model = User
    list_display = ('email', 'is_active',)
    list_filter = ('is_active',)
    fieldsets = (
        (_('Primary Information'), {'fields': ('email', 'password')}),
        (_('User information'), {
            'fields': ('first_name', 'last_name', 'profile_picture', )
        }),
        (_('Permissions'), {'fields': ('is_staff', 'is_active')}),
    )

    search_fields = ('email',)
    ordering = ('email',)

    def save_model(self, request, obj, form, change):
        user_database = get_model_by_id(User, obj.pk)
        if not user_database:
            obj.password = User.objects.make_random_password(length=10)
        else:
            obj.password = user_database.password
        super().save_model(request, obj, form, change)


admin.site.register(User, CustomUserAdmin)
