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




--- let's start thinking about the db model.
firebase db is [NoSQL](https://www.mongodb.com/nosql-explained). I am favouring a NoSQL model simply because my day job uses relational.
let's start with a simple document based store modeling

{
  _id: 123456,
  name: Ron,
  friends: [123457, 123458],
  recipes: [
      {
        _id: 654321,
        url: "https://www.samplewebsiteok.com/",
        images: {
          thumbnail: ref,
          base: ref,
        },
      },
  ],
  created: 2021-01-29,
  groceriesDayOfWeek: 10, // every second Tuesday
}
