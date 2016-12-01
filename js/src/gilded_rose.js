function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []
var special_items = ['Aged Brie']

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (!special_items.includes(items[i].name))
    regular_item_update(items[i]);
  }
}

function regular_item_update(item) {
  item.sell_in -=1;
  item.quality -= 1;
}
