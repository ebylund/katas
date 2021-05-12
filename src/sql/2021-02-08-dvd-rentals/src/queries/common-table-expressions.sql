---------------------------------------
---- Common Table Expression (CTE) ----
---------------------------------------

WITH cte_film AS (

  SELECT 
    film_id, 
    title,
    (CASE 
      WHEN length < 50 THEN 'Short'
      WHEN length < 90 THEN 'Medium'
        ELSE 'Long'
      END) length    
  FROM
    film

)
SELECT
  count(*),
  length
FROM 
  cte_film
group by length
;

-------------------------------------------------
---- Recursive Common Table Expression (CTE) ----
-------------------------------------------------

WITH RECURSIVE subordinates AS (
	SELECT
		employee_id,
		manager_id,
		full_name
	FROM
		employees
	WHERE
		employee_id = 2
	UNION
		SELECT
			e.employee_id,
			e.manager_id,
			e.full_name
		FROM
			employees e
		INNER JOIN subordinates s ON s.employee_id = e.manager_id
) SELECT
	*
FROM
	subordinates;