SELECT (
    SELECT u.name
    FROM Users u
    JOIN (
      SELECT user_id, COUNT(*) AS cnt
      FROM MovieRating
      GROUP BY user_id
    ) t ON u.user_id = t.user_id
    ORDER BY t.cnt DESC, u.name ASC
    LIMIT 1
) AS results

UNION ALL

SELECT (
    SELECT m.title
    FROM Movies m
    JOIN (
      SELECT movie_id, AVG(rating) AS avg_r
      FROM MovieRating
      WHERE EXTRACT(MONTH FROM created_at) = 2
        AND EXTRACT(YEAR FROM created_at) = 2020
      GROUP BY movie_id
    ) AS ty ON m.movie_id = ty.movie_id
    ORDER BY ty.avg_r DESC, m.title ASC
    LIMIT 1
) AS results;
