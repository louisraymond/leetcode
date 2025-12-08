-- Write your PostgreSQL query statement below
SELECT
    CASE
        WHEN (id % 2 = 0) THEN id - 1
        WHEN NOT EXISTS (
            SELECT id 
            FROM Seat AS a 
            WHERE a.id = b.id + 1 )
        THEN id
        ELSE id + 1
    END AS id,
    student
FROM Seat AS b
ORDER BY id;