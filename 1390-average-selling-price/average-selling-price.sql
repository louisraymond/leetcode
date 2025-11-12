SELECT p.product_id,
        CASE
            WHEN SUM(u.units) is null
            THEN 0
            ELSE
            ROUND(SUM (price * units)/SUM(units)::numeric, 2)
        END 
        AS average_price
FROM Prices AS p
LEFT JOIN UnitsSold AS u
ON p.product_id = u.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product_id