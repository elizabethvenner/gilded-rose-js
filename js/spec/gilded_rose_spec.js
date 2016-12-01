describe("Gilded Rose", function() {

  xit("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  describe('updateQuality', function() {

    beforeEach(function() {
      items = [new Item('Mead', 2, 2), new Item('Aged Brie', 2, 2)];
      updateQuality();
    });


    it('decreases sell_in by 1', function() {
      expect(items[0].sell_in).toEqual(1);
    });

    it('decreases quality by 1', function() {
      expect(items[0].quality).toEqual(1);
    });

    it('increases quality of aged brie', function() {
      expect(items[1].quality).toEqual(3);
    });

  });

  describe('updateQuality', function() {
    beforeEach(function() {
      items = [new Item('Mead', 2, 2), new Item('Aged Brie', 50, 50)];
      updateQuality();
    });
    it('does not increase quality of aged brie when at max', function() {
      expect(items[1].quality).toEqual(50);
    });
  });
});
