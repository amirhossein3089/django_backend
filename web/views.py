from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from web.models import User,Token,Expense,Income
from datetime import datetime
# Create your views here.

@csrf_exempt
def submit_income(request):
    """user submit an income"""
    #TODO: validate data, amount might be fake ,, token might be fake user might be fake
    this_token = request.POST['token']
    this_user = User.objects.filter(token__token = this_token).get()
    now = datetime.now()#TODO: user may want to enter this datetime himself
    Income.objects.create(user = this_user,amount = request.POST['amount'],
                text = request.POST['text'], date = now)

    return JsonResponse({
        'status':'ok',
    },encoder=json.JSONEncoder) 

@csrf_exempt
def submit_expense(request):
    """user submit an expense"""
    #TODO: validate data, amount might be fake ,, token might be fake user might be fake
    this_token = request.POST['token']
    this_user = User.objects.filter(token__token = this_token).get()
    now = datetime.now()#TODO: user may want to enter this datetime himself
    Expense.objects.create(user = this_user,amount = request.POST['amount'],
                text = request.POST['text'], date = now)

    return JsonResponse({
        'status':'ok',
    },encoder=json.JSONEncoder) 