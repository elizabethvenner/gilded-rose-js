require_relative 'item'

class AgedBrie < Item

  def initialize(args={})
    @name = 'Aged Brie'
    @sell_in = args[:sell_in]
    @quality = args[:quality]
  end

  def update_quality
    @quality +=1 if less_than_50?(@quality)
  end

  private

  def less_than_50?(quality)
    @quality < 50
  end

end
