-- Write your PostgreSQL query statement below
SELECT DISTINCT temp.id AS id, SUM(temp.num) as num
FROM (
    SELECT requester_id AS id, COUNT(*) AS num
    FROM RequestAccepted
    WHERE accept_date IS NOT NULL
    GROUP BY requester_id

    UNION ALL

    SELECT accepter_id, COUNT(*)
    FROM RequestAccepted
    WHERE accept_date IS NOT NULL
    GROUP BY accepter_id
    ) AS temp
    
    GROUP BY temp.id
    ORDER BY num DESC
    LIMIT 1
;