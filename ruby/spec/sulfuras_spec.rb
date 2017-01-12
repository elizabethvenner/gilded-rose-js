require 'sulfuras'

describe Sulfuras do
  subject(:sulfuras) {described_class.new({sell_in: 0, quality: 0})}

  it 'responds to update_quality message' do
    expect(sulfuras).to respond_to(:update_quality)
  end

  it 'changes no variables on receiving update_quality message' do
    sulfuras.update_quality
    expect(sulfuras.quality).to eq(0)
    expect(sulfuras.sell_in).to eq(0)
  end


end
