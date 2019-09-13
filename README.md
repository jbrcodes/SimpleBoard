README: SimpleBoard
===================

## To Do

* doc: components? state and renderer?
* make player getter/setter in Square?
* each class is only responsible for its own model/view, i.e. Board knows nothing about Square


This is a demo of a simple board game, trying to show the following practices:

* Using OOP
* Using meaningful method and variable names
* Using small methods
* Separating *model* from *view*


## What it Does

The player is a purple object that contains its name and the number of squares it has visited. Every time the player is moved (automatically and randomly), the old square is marked as visited, with the move number. The player's count of visited squares is incremented and it is moved to a new unvisited square. This repeats a few times, with a delay between moves to maximize viewing pleasure. ;-)


## Works With Firefox...

The code will run as-is with Firefox; just drag/drop `index.html` on the browser. To use Chrome or Safari you'll need to start a local server due to CORS issues. For example, if you have PHP installed, run this command in the folder that contains `index.html`:
```
php -S localhost:8000
```

## Small Methods and Meaningful Names

Writing code that runs correctly is important. Writing code that humans can understand is also important. For your own benefit, and for the benefit of someone else who may inherit your code someday, write code that is easy for humans to understand. Use variable and method names that are descriptive. Break big methods down into a number of smaller methods. Notice how short the methods are in this demo.


## Each Class Only Knows About Its Own Implementation




## Model and View => MVC

The *model* is the data itself. The *view* is a visual representation of the model. Here the model is stored in JS objects, and the view consists of HTML elements added to the DOM that you see in the browser. Every time I modify the model, the corresponding part of the view needs to be updated.


## Using a Leading Underscore in Method/Property Names

Some programming languages (like Java and PHP) have the ability to declare methods/properties that are private, i.e. only visible within a class. Other languages (like JavaScript and Python) do not have this ability.

In order to (sort of) simulate this ability, programmers often use a leading underscore to signify that a method/property is private and should not be referenced from outside the class. The leading underscore does not actually *do* anything, but it at least alerts others: mess with this at your own risk. ;-)


## Minimize Updates to the DOM

Every modification to a document's DOM causes part of the DOM to be redrawn, because adding/removing an element can very easily change the visual representation of the document. Therefore it is a good habit to minimize the number of changes you make to the DOM. If possible, make one big change instead of many small ones.

For example, when an app is first created, it is common to dynamically create a lot of HTML elements. It is best to (for example) create your main `<div>`, and add everything to it before you append it to the DOM. The *wrong* way to do it is to immediately add your main `<div>` to the DOM and then append lots of new elements to it afterwards, forcing at least a partial redraw of the DOM each time you append something.
