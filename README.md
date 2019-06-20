README: SimpleBoard
===================

This is a simple example of a trivial board game, in order to show how some things are done.

## How it Works

The player displays a name and the number of squares it has visited. It is placed in an initial square. Every time the player moves, that number remains in the square, also marked as visited. The player's count of visited squares is incremented and it is moved to a new unvisited square. This repeats a few times, with a delay between moves to maximize viewing pleasure. ;-)


## Works With Firefox...

The code will run as-is on Firefox; just drag `index.html` over the browser. To use Chrome or Safari you'll need to start a local server due to CORS issues. For example, if you have PHP installed, this will do it, run from the project directory:
```
php -S localhost:8000
```


## Small Methods and Meaningful Method/Variable Names

Writing code that runs correctly is important. Writing code that humans can read is also important. For your benefit and for the benefit of someone else who may inherit your code someday, write code that is easy for humans to read. Use variable and method names that are descriptive. Break big methods down into a number of smaller methods. Notice how short the methods in this example are.


## Model and View

The *model* is the data itself. The *view* is a visual representation of the model. In this case, the board data is stored in JS objects, and the view consists of HTML elements. Every time I modify the model, I need to update the corresponding part of the view.

That is why some of my classes have an `.elem` property. For example, the `Board` class contains the model of the entire board. But in order for my view to work, at some point I need to get the HTML `<table>` element so I can insert it into the DOM.

info about one square on the board. When the player leaves a square, I set the model of that square to `visited`. I also need to update the `<td>` element that is the view of the square. So I keep that element in the `.elem` property for quick and easy reference.


## Using a Leading Underscore in Method/Property Names

Some programming languages (like Java and PHP) have the ability to declare methods/properties that are private, i.e. only visible within a class. Other languages (like JavaScript and Python) do not have this ability.

In order to (sort of) simulate this ability, programmers often use a leading underscore to signify that a method/property is private and should not be referenced from outside the class. The leading underscore does not actually *do* anything, but it at least alerts others: mess with this at your own risk. ;-)


## Minimize Updates to the DOM

Every modification to a document's DOM causes part of the DOM to be redrawn, because adding/removing an element can very easily change the structure and visual representation of the document. Therefore it is a good habit to minimize (when possible) the number of changes you make to the DOM. If possible, make one big change instead of many small ones.

When an app is first created, it is common to dynamically create a lot of DOM elements. It is best to (for example) create your main `<div>` and add everything to it before you append it to the DOM. The *wrong* way to do it is to immediately add your main `<div>` to the DOM and then append lots of new elements to it afterwards, forcing a redraw for every modification.