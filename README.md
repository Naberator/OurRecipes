# OurRecipes
Family recipes book


This will also be my notebook, so keep that in mind when reading

Main thoughts:
The basic flow should include a user pasting a link and having the recipe stored automatically with images and "recipe metadata" scraped
[recipe metadata: cuisine, cooking time, ingredients tokenized, etc]
we will try to use as much firebase as we can, and if it gets too we will build the backend lean side by side with firebase methods

Architecture: // TODO add proper tech design

1. Web 
  1. react app. who serves it?
// move to flutter once we get api in place?

2. API handler
  1. firebase functions based
  2. will also handle authentication

3. DB & Storage
  1. will be using firestore for user data and firebase storage for scraped images. // TODO add models
