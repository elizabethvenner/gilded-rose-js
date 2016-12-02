I know I should have encapsulated everything other than the Item function within a GildedRose object and also made all functions other than updateQuality as private.

I also think I could have benefited from judicious use of switch statements for some of the functions.

Other than this, I have not set the MAXQUALITY for backstage pass and think might need to do a few more tests to clear up edge cases. Think could also have created a few more constants.

Tests could also be neater.

I do have a couple of questions/things I would like you to look at:

1) I know it's quite popular to refactor e.g. line 30 (and in fact most of my conditional statements) into a function of their own which would then be called inside the if condition, but when there are so many, I wonder if this would make it less readable as having to look further down the page to see what the function does (though appropriate naming would certainly help here)

2) Aged Brie - I didn't update the sellIn, mainly because it seemed irrelevant as it doesn't affect the quality. Also, logically, it seems that in this case there would be no sellIn, as there is not a date by which it would have to be sold?

3) Is my updateQuality method ind of like what you meant when you were mentioning how both Felix's and Stuart's code could be refactored to avoid a massive switch statement/lots of ifs? Though I do still have the problem where I need to add to both special_items as well as a function. Perhaps the function could have been defined in the special_items object? I did look at doing this but that seemed to create other problems.

As you see, I scrapped my inheritance idea which is a shame - mainly because I think when I started using them, I thought it did something slightly different to what it does and then believed it wouldn't work...so something I need to look at!
