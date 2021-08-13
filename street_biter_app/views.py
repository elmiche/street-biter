from django.shortcuts import render, redirect
from django.http import HttpResponse
from street_biter_app.models import Street_biter
from django.contrib.auth.decorators import login_required

@login_required
def home(request):
    if request.method == 'POST':
        form = Street_biter(request.POST)
    else:
        return render(request, 'street_biter_app/home.html')

@login_required
def about(request):
    return render(request, 'street_biter_app/about.html')
    
@login_required
def details(request, id):
    # sweetspot = Street_biter.objects.filter(user = request.user, latitude=request.latitude, longitude=request.longitude).first()
    sweetspot = Street_biter.objects.get(id = id)
    return render(request, 'street_biter_app/details.html', {
            'sweetspot': sweetspot, 
            })

def save_details(request):
    if request.method == 'POST':
        user = request.user
        latitude = request.POST['lat']
        longitude = request.POST['long']
        details = request.POST['details']
        species = request.POST['species-list']
        print(latitude)
        sweetspot = Street_biter.objects.create(
            user = user,
            latitude = latitude,
            longitude = longitude,
            details = details,
            species = species,
        )
        return redirect('details-view', sweetspot.id)
    else:
        return render(request, 'street_biter_app/app-home')


@login_required
def my_sweetspots(request):
    sweetspots = Street_biter.objects.filter(user = request.user)
    context = {
        'sweetspots' : sweetspots
    }
    return render(request, 'street_biter_app/sweetspots.html', context)