require 'item'

describe Item do
  subject(:item) {described_class.new("Aged Brie", 2, 20)}
  describe "#to_s" do
    it "adds item attributes to string" do
      expect(item.to_s).to eq("Aged Brie, 2, 20")
    end
  end
end
