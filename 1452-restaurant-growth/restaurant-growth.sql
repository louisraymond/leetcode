-- Write your PostgreSQL query statement below
SELECT a.visited_on, SUM(b.amount) AS amount, ROUND(SUM(b.amount)/7::numeric,2) AS average_amount
FROM (SELECT DISTINCT visited_on FROM Customer) AS a 
JOIN Customer AS b
    ON b.visited_on BETWEEN a.visited_on - INTERVAL '6 days' AND a.visited_on
GROUP BY a.visited_on HAVING COUNT(DISTINCT b.visited_on) = 7;