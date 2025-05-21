# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
  tortoise = head
  hare = head.nil? ? nil : head.next

  while hare && hare.next
    return true if tortoise == hare
    tortoise = tortoise.next
    hare = hare.next.next
  end

  false
end
