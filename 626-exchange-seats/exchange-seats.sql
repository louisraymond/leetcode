-- Write your PostgreSQL query statement below
SELECT 
    CASE
        WHEN b.id % 2 = 0 THEN b.id - 1
        WHEN NOT EXISTS (
            SELECT id 
            FROM Seat AS a 
            WHERE a.id = b.id + 1)
        THEN id
        ELSE id + 1
    END as id,
    student
FROM Seat AS b
ORDER BY id;