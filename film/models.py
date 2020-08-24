from django.db import models


    

   
class Mytable(models.Model):
    budget = models.DecimalField(max_digits=11, decimal_places=1)
    company = models.CharField(max_length=73)
    country = models.CharField(max_length=30)
    director = models.CharField(max_length=32)
    genre = models.CharField(max_length=9)
    gross = models.DecimalField(max_digits=11, decimal_places=1)
    name = models.CharField(max_length=83)
    rating = models.CharField(max_length=13)
    released = models.CharField(max_length=10)
    runtime = models.IntegerField()
    score = models.DecimalField(max_digits=3, decimal_places=1)
    star = models.CharField(max_length=27)
    votes = models.IntegerField()
    writer = models.CharField(max_length=32)
    year = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'mytable'