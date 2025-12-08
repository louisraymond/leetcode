-- Write your PostgreSQL query statement below


-- Query 1: Getting the users who have rated the most movies
SELECT (
    SELECT name
    FROM Users AS u
    INNER JOIN MovieRating AS mr
    ON u.user_id = mr.user_id
    GROUP BY u.name
    ORDER BY COUNT(*) DESC, name ASC
    LIMIT 1) AS results

UNION ALL

-- Query 2: Getting the movie name with the highest rating
SELECT (SELECT m.title
        FROM Movies AS m
        INNER JOIN MovieRating AS mr
        ON m.movie_id = mr.movie_id
        WHERE EXTRACT(MONTH FROM mr.created_at) = 2 AND EXTRACT(YEAR FROM mr.created_at) = 2020
        GROUP BY m.title
        ORDER BY AVG(mr.rating) DESC, m.title ASC
        LIMIT 1);  
