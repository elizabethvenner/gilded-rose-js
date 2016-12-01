function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    regular_item_update(items[0]);
  }
}

function regular_item_update(item) {
  item.sell_in -=1;
  item.quality -= 1;
}
