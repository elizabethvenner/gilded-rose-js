require 'item'

describe Item do
  subject(:item) {described_class.new("new_item", 0, 0)}
  describe "#to_s" do
    it "adds item attributes to string" do
      expect(item.to_s).to eq("new_item, 0, 0")
    end
  end
end
