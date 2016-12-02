# Gilded Rose

## Description of kata

"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item All items have a Quality value which denotes how valuable the item is At the end of each day our system lowers both values for every item Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."

## My solution

I created separate functions for each special item and stored the function name in an object which took the 'Object name' as its property. Therefore, in the updateQuality function, it is possible to iterate through the array of items, check whether the item is a special item and if it is call the function, passing in the item as an argument.

As this was a time limited kata, I would like to further this kata by encapsulating the updateQuality function, items array special_items object and all associated functions into a Gilded Rose object and would make all functions except updateQuality private. I would also refactor the conditional statements into their own functions.

## Running the code

Cd into gilded-rose/js and then type ```open SpecRunner.html``` into the command line, open the developer tools console in your browser and then type the following:

```
items = [new Item('Aged Brie', 3, 4), new Item('Mead', 3, 4), new Item('Sulfuras', 0, 0), new Item('Backstage Pass', 10, 10), new Item('Conjured', 6, 4)];
```

Ensure that for any special item that you add that the name is spelled correctly with the right capitalization. The 2 integers following the name are the sellIn and quality respectively.

To update, call the following function:

```
updateQuality();
```

You can check whether the items have been updated as they should be by calling

```
items;
```

## Running tests

Tests will be run when you open the SpecRunner.
