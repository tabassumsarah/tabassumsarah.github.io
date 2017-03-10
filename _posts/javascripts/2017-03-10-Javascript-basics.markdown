---
layout: default
title:  "Javascript: Take on Map"
date:   2016-02-12 17:50:00
categories: main
---
Map:

The map() method is basically  a way to create an array but there is a catch in that.
You can provide a function as an argument to the map() method.Which will be called on every element of the array you are calling map () on.


There are 3 arguments your custom call method can take. First one is the element of the array you are providing.
Second one is the index of the element. Last one is the array itself you are calling map() on.


{% highlight javascript %}

var input_array = ["element1", "element2"];

var output_array = input_array.map
(function(element, indexOfElement, input_array){
  “element1”                 0             ["element1", "element2"];

  //do stuff to each of your array elements

});

First Iteration
------------------
{% endhighlight %}


From MDN - “The map() method creates a new array with the results of calling a provided function on every element in this array.”

{% highlight javascript %}

Array.prototype.map.call(['a','b'], function(inputLine, index, arr){
    console.log(inputLine);
    console.log(index);
    console.log(arr);
    return inputLine.toUpperCase() ;
});
Simple uppercase transformation
------------------------------------
{% endhighlight %}



