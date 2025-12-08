-- Write your PostgreSQL query statement below
SELECT id, COUNT(*) AS num
FROM (
    SELECT requester_id AS id FROM RequestAccepted WHERE accept_date IS NOT NULL

    UNION ALL

    SELECT accepter_id FROM RequestAccepted WHERE accept_date IS NOT NULL
    ) AS temp
    
WHERE id IS NOT NULL
GROUP BY id
ORDER BY num DESC
LIMIT 1;