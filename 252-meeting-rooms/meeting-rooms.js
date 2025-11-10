/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function(intervals) {
    intervals.sort((first,second) => first[0] - second[0])
    for (i=0 ; i < intervals.length - 1; i++) {
       if (intervals[i][1] > intervals[i+1][0])  return false 
    }
    return true
};