# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
# Create your views here.
def index(request):
    return render(request,"riskmgr.html")

def riskdetail(request):
    return render(request,'risk_module.html')