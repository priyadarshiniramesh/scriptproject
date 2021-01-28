from django.shortcuts import render

# Create your views here.

def volumeofsphere(request):
    context={}
    
        
    return render(request,'mathapp/volume_of_sphere.html',context)

def volumeofcone(request):
    
    context={}
    if request.method == 'POST':
        pi = 22/7 
        radius = float(request.POST.get('value_radius',0))
        height = float(request.POST.get('value_height',0))
        cone = 1/3 * 3.14 * height * radius * radius
        context['result']=cone
        context['radius']=radius
        context['height']=height

    if request.method =='GET':
        context['result']=0
        context['radius']=0
        context['height']=0

        
    return render(request,'mathapp/volume_of_cone.html',context)


