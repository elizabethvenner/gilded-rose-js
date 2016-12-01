function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];
var special_items = {
  'Aged Brie': update_brie,
  'Sulfuras': update_sulfuras
};

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    console.log(0);
    console.log(special_items.hasOwnProperty(items[i].name));
    if (special_items.hasOwnProperty(items[i].name) === true) {
      (special_items[items[i].name])(items[i].name);
      update_brie(items[i]);
    } else {
      regular_item_update(items[i]);
    }
  }
}

function regular_item_update(item) {
  item.sell_in -=1;
  item.quality -= 1;
}

function update_brie(item) {
  item.quality +=1;
}

function update_sulfuras(item) {
  item.quality +=1;
}
