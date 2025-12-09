-- Write your PostgreSQL query statement below
WITH 
non_matching AS (
    SELECT a.pid
    FROM Insurance AS a INNER JOIN Insurance AS b
    ON a.lon = b.lon AND a.lat = b.lat AND a.pid <> b.pid
),

valid AS (
    SELECT DISTINCT a.pid
    FROM Insurance AS a INNER JOIN Insurance AS b ON a.tiv_2015 = b.tiv_2015
    WHERE a.pid <> b.pid AND a.pid NOT IN (SELECT pid FROM non_matching)
)

SELECT ROUND(SUM(tiv_2016)::numeric,2) AS tiv_2016
FROM Insurance as i
WHERE i.pid IN (SELECT pid FROM valid)
