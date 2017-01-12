require 'aged_brie'

describe AgedBrie do
  subject(:aged_brie) {described_class.new({sell_in: 0, quality: 49})}

  it 'responds to update_quality message' do
    expect(aged_brie).to respond_to(:update_quality)
  end

  describe '#update_quality' do
    before do
      aged_brie.update_quality
    end

    it 'increases the quality of aged brie' do
      expect(aged_brie.quality).to eq(50)
    end

    it 'does not increase the quality of aged brie beyond 50' do
      aged_brie.update_quality
      expect(aged_brie.quality).to eq(50)
    end
  end

end
