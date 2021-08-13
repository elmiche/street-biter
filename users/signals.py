from django.db.models.signals import post_save #fires after an object is saved and in this case - when a user is created
from django.contrib.auth.models import User #sender
from django.dispatch import receiver #receiver
from .models import Profile



@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    # else:
    #     messages.warning(request, f'Failed. Please see below and try again.')
    #         return render(request, 'users/register.html', {'form': form})
                                                                        # trying to solve default pic

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()