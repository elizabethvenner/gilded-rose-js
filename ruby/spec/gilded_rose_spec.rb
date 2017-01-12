require 'gilded_rose'

describe GildedRose do
  let(:item) {double :item}
  subject(:inn) {described_class.new([item])}

  describe "#update_quality" do
    it "sends message to item" do
      expect(item).to receive(:update_quality)
      inn.update_quality
    end
  end

end
