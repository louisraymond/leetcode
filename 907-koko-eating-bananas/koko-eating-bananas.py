class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:

        left, right = 1, max(piles)

        while left < right:
            k = (left + right) // 2
            time_taken = sum(math.ceil(pile / k) for pile in piles)
            if time_taken <= h:
                right = k
            else:
                left = k + 1

        return left
