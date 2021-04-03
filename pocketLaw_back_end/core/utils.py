"""
Core utils
"""
from django.core.handlers.wsgi import WSGIRequest
from django.core.paginator import (
    Paginator,
    PageNotAnInteger,
    EmptyPage,
)


def get_model_by_id(model, pk: int):
    """
    Get instance of model by id
    :param model: model
    :param pk: primary key of model
    :return: instance or none
    """
    try:

        return model.objects.get(pk=pk)

    except model.DoesNotExist:

        return None


def get_domain(request: WSGIRequest) -> str:
    """
    Get domain from request
    :param request: request
    :return: current domain
    """
    domain = request.META.get('HTTP_ORIGIN', '')
    if not domain:
        return ''
    return domain + '/'


def get_paginator(
        query_set: list,
        page_size: int,
        page: int,
        paginated_type: "GrapheneType",
        **kwargs: dict
) -> "GrapheneType":
    """
    Get pagination
    :param query_set: query set
    :param page_size: size of page
    :param page: current page you want to get
    :param paginated_type: graphene type of the object you want paginated
    :param kwargs: kwargs
    :return: graphene type paginated
    """
    paginator = Paginator(query_set, page_size)
    try:
        page_obj = paginator.page(page)
    except PageNotAnInteger:
        page_obj = paginator.page(1)
    except EmptyPage:
        page_obj = paginator.page(paginator.num_pages)

    return paginated_type(
        page=page_obj.number,
        pages=paginator.num_pages,
        has_next=page_obj.has_next(),
        has_prev=page_obj.has_previous(),
        objects=page_obj.object_list,
        **kwargs
    )
