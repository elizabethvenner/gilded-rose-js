describe("Gilded Rose", function() {

  xit("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("fixme");
  });

  describe('update_quality', function() {

    items = [new Item('item', 2, 2), new Item('Aged Brie', 2, 2)];
    update_quality();

    it('decreases sell_in by 1', function() {
      expect(items[0].sell_in).toEqual(1);
    });

    it('decreases quality by 1', function() {
      expect(items[0].quality).toEqual(1);
    });

    it('does not decrease quality of aged brie', function() {
      expect(items[1].quality).toEqual(2);
    });
  });
});
