MAXQUALITY = 50
MINQUALITY = 0

function Item(name, sell_in, quality) {
  this.name = name;
  this.sellIn = sell_in;
  this.quality = quality;
}

var items = [];

var special_items = {
  'Aged Brie': updateBrie,
  'Sulfuras': updateSulfuras,
  'Backstage Pass': updateBackstagePass,
  'Conjured': conjured
};

function updateQuality() {
  for (var i = 0; i < items.length; i++) {
    if (special_items.hasOwnProperty(items[i].name) === true) {
      (special_items[items[i].name])(items[i]);
    } else {
      regularItemUpdate(items[i]);
    }
  }
}

function regularItemUpdate(item) {
  if (item.quality > MINQUALITY){
    if (item.sellIn > 0){
      item.quality -= 1;
    } else {
      item.quality -= 2;
    }
  }
  item.sellIn -= 1;
}

function updateBrie(item) {
  if (item.quality < MAXQUALITY){
    item.quality +=1;
  }
}

function updateSulfuras(item) {}

function updateBackstagePass(item){
  if (item.sellIn > 10) {
    item.quality += 1;
  } else if (item.sellIn < 11 && item.sellIn > 5) {
    item.quality += 2;
  } else if (item.sellIn < 6 && item.sellIn > 0) {
    item.quality += 3;
  } else {
    item.quality = 0;
  }
  item.sellIn -= 1;
}

function conjured(item){
  if (item.quality > MINQUALITY){
    if (item.sellIn > 0){
      item.quality -= 2;
    } else {
      item.quality -= 4;
    }
  }
  item.sellIn -= 1;
}
