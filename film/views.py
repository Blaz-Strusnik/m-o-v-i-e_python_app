from django.shortcuts import render
from django.http import HttpResponse
import requests
from django.core import serializers
from tablib import Dataset



def about(request):
    return render(request, 'films/about.html')

def home(request):
    return render(request, 'films/home.html')
""" def about(request):
    movies = Movies.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'films/about.html', {}) """
  

    

def simple_upload(request):
    if request.method == 'POST':
        movie_resource = MovieResource()
        dataset = Dataset()
        new_persons = request.FILES['myfile']

        imported_data = dataset.load(new_persons.read())
        result = movie_resource.import_data(dataset, dry_run=True)  # Test the data import

        if not result.has_errors():
            movie_resource.import_data(dataset, dry_run=False)  # Actually import now

    return render(request, 'films/about.html')

#def home(request):
#    return render(request, 'films/home.html')


""" def home(request):
    response = requests.get('http://www.omdbapi.com/?s=chef&apikey=517765d3')
    response1 = requests.get('http://www.omdbapi.com/?t=chef&y=&apikey=517765d3')
    Title = response.json()
    Title1 = response1.json()
   
    return render(request, 'films/home.html',{
        'SearchRe': Title['Search'],
        'SearchRe1': Title1['Title'],
        
    }) """



