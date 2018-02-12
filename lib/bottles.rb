
class Bottles

  def verse(bottles)
    nextBottles = "bottles"

    if bottles == 2
      nextBottles = "bottle"
    end

    if bottles == 1
      return "#{bottles} bottle of beer on the wall, #{bottles} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    elsif bottles == 0
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    else
      return "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer.\nTake one down and pass it around, #{bottles - 1} #{nextBottles} of beer on the wall.\n"
    end

  end


  def verses(start, finish)
    verse(start)
    verse(finish)
  end

end
