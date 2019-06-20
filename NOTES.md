NOTES SimpleBoard
=================


To Do
- explain my use of .elem



This is my solution for the following exercise:

http://www.jbrcodes.com/oc/wiki/exercises/js-low-budget-pacman

It isn't the only solution, or even necessarily the best one; 
it's just one of many possible solutions, but I have tried to use 
best practices.

My goal with this exercise is not to create an eye-catching user interface for
a PacMan game. I'm more interested in writing minimalist and well-designed
(dare I say "beautiful"?) code that is easy to understand, and easy to
modify (when the time comes).


## Using a Leading Underscore in Method/Property Names

Some programming languages (like Java and PHP) have the ability to declare methods/properties that are private, i.e. only visible within the class. Other languages (like JavaScript and Python) do not have this ability.

In order to (sort of) simulate this ability, programmers often use a leading underscore to signify that a method/property is private and should not be referenced from outside the class. The leading underscore does not actually *do* anything, but it at least alerts others: mess with this at your own risk. ;-)


## Minimize Updates to the DOM

Every modification to a document's DOM causes part of the DOM to be redrawn, because adding/removing an element can very easily change the structure and visual representation of the document.

Therefore it is a good habit to minimize (when possible) the number of changes you make to the DOM. If possible, make one big change instead of many small ones.

When an app is first created, it is common to dynamically create a lot of DOM elements. It is best to (for example) create your main `<div>` and add everything to it before you append it to the DOM. The *wrong* way to do it is to immediately add your main `<div>` to the DOM and then append lots of new elements to it afterwards, forcing a redraw for every modification.

That is one reason I use `this._ctxt` in the Board and Square classes. When you do a jQuery select, one argument is required, but there is a second optional argument specifying in which context the search should take place. By default it's the entire document. However this becomes a problem if -- like I mention above -- you want to build a complex element tree but not add it to the DOM until it has been completed. What if, when the game begins, I want to create a board, and that board consists of squares, and I want to randomly block squares that haven't been blocked already. I can't do a "default" jQuery select because my board hasn't been added to the document yet. So as I am building the board and the squares, I always pass the parent object, so that the parent's element can be used as the context for all jQuery selects.

For example, this will search the entire document for elements with class `foo`:
```
var elems = $('.foo');
```

While here, only elements of class `foo` within element with ID `my-app` will be returned:
```
var app = $('#my-app');
var elems = $('.foo', app);
```


## Combining Model and View

Maybe you've heard of MVC, which stands for Model-View-Controller. It is a way of dividing an app into sensible pieces. The *model* refers to your data. The *view* is whatever is necessary to display the data. (There can be multiple views for the same model in order to show different aspects.) And the *controller* typically handles user interaction to tie together the model and view: Clicking on a button causes something to happen to a model, which then causes the view to be updated.

A common challenge is to make sure that your model and view(s) remain synchronized: If the model is updated, view(s) need to be refreshed accordingly.

As a little experiment I decided to combine the model and view for this exercise. This is possible because the DOM can be used both as the model and the view. Some attributes (like if a square is blocked) can easily be implemented using a CSS class. Other attributes (like cash amount in a square) can be easily implemented as a text node within a square. When I update the DOM, both my model and the view are updated simultaneously.