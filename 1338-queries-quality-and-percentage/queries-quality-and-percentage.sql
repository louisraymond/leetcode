-- Write your PostgreSQL query statement below
SELECT 
query_name,
ROUND(AVG(rating/position::decimal),2) AS quality,
ROUND( 100.0 * COUNT(*) FILTER (WHERE rating <3)/ COUNT(*),2) AS poor_query_percentage
FROM Queries
WHERE query_name IS NOT NULL
GROUP BY query_name;