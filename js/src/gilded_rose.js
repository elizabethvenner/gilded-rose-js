MAXQUALITY = 50
MINQUALITY = 0

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];
var special_items = {
  'Aged Brie': updateBrie,
  'Sulfuras': updateSulfuras
};

function updateQuality() {
  for (var i = 0; i < items.length; i++) {
    if (special_items.hasOwnProperty(items[i].name) === true) {
      (special_items[items[i].name])(items[i]);
      console.log(items[i].quality);
    } else {
      regularItemUpdate(items[i]);
    }
  }
}

function regularItemUpdate(item) {
  item.sell_in -= 1;
  item.quality -= 1;
}

function updateBrie(item) {
  if (item.quality < MAXQUALITY){
    item.quality +=1;
  }
}

function updateSulfuras(item) {
  item.quality +=1;
}
