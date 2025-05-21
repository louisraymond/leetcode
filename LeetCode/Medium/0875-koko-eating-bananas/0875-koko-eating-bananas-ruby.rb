# @param {Integer[]} piles
# @param {Integer} h
# @return {Integer}
def min_eating_speed(piles, h)
    sessions = ->(k) {piles.reduce(0) {|acc,pile| acc + (pile.to_f/k).ceil }}

    left = 1
    right = piles.max

    while left < right
        mid = (left + right) / 2
        sessions_required = sessions.call(mid)
        sessions_required > h ? left = mid + 1 : right = mid 
    end

    left
end