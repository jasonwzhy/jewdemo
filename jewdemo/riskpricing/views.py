# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
# Create your views here.
def index(request):
    return render(request,"riskingprice.html")

def riskmonitormgr(request):
    return render(request,"riskmonitormgr.html")

def monitor(request):
    return render(request,"riskmonitor.html")