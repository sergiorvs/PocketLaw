from django.contrib import admin
from django.utils.safestring import mark_safe

from core.models import EmailRecord


@admin.register(EmailRecord)
class EmailRecordAdmin(admin.ModelAdmin):
    """
    Email record admin
    """

    list_display = ('subject', 'receiver', 'send_on')
    readonly_fields = ('subject', 'receiver', 'send_on', 'body_html')
    search_fields = ('subject', 'receiver')
    list_filter = [
        'send_on',
    ]

    def has_delete_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request, obj=None):
        return False

    def body_html(self, obj: EmailRecord):
        return mark_safe(obj.body)
