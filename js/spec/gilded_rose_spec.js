describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  describe('updateQuality', function() {

    beforeEach(function() {
      items = [new Item('Mead', 1, 3), new Item('Aged Brie', 2, 2), new Item('Sulfuras', 0, 0)];
      updateQuality();
    });

    it('decreases sellIn by 1', function() {
      expect(items[0].sellIn).toEqual(0);
    });

    it('decreases quality by 1', function() {
      expect(items[0].quality).toEqual(2);
    });

    it('decreases quality by 2 when sellIn date passes', function() {
      updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it('never decreases quality to less than 0', function() {
      updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it('increases quality of aged brie', function() {
      expect(items[1].quality).toEqual(3);
    });

    it('does nothing to Sulfuras quality', function() {
      expect(items[2].quality).toEqual(0);
    });

    it('does nothing to Sulfuras sellIn', function() {
      expect(items[2].sellIn).toEqual(0);
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

  describe('updateQuality of Backstage Pass', function() {
    beforeEach(function() {
      items = [new Item('Backstage Pass', 11, 10), new Item('Backstage Pass', 4, 15), new Item('Backstage Pass', 0, 12)];
      updateQuality();
    });

    it('increases by 1 more than 10 days before concert', function() {
      expect(items[0].quality).toEqual(11);
    });

    it('decreases sellIn by 1', function() {
      expect(items[0].sellIn).toEqual(10);
    });

    it('increases quality by 2 between 10 and 6 days before concert', function() {
      updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it('increases quality by 3 when there are 5 days or less before concert', function() {
      expect(items[1].quality).toEqual(18);
    });

    it('drops quality to 0 after concert', function() {
      expect(items[2].quality).toEqual(0);
    });


  });
  describe('updateQuality of conjured item', function() {
    beforeEach(function() {
      items = [new Item('Conjured', 1, 6)];
      updateQuality();
    });

    it('decreases quality by 2', function() {
      expect(items[0].quality).toEqual(4);
    });

    it('decreases quality by 4 after sellIn passes', function() {
      updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it('does not decrease quality beyond 0', function() {
      updateQuality();
      updateQuality();
      expect(items[0].quality).toEqual(0);
    });

  });
});
