require_relative 'item'

class Sulfuras < Item

  def initialize(args={})
    @name = 'Sulfuras'
    @sell_in = args[:sell_in]
    @quality = args[:quality]
  end

  def update_quality
  end

end
