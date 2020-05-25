/*Mavericks DB SQL*/

/*Q1. What is gender diversity for content created for shows */
SELECT Female_Content_COUNT/(Female_Content_COUNT+Male_Content_COUNT+Others_Content_COUNT) AS FEMALE_CONTENT_RATIO,
	   Male_Content_COUNT/(Female_Content_COUNT+Male_Content_COUNT+Others_Content_COUNT) AS MALE_CONTENT_RATIO,
       Others_Content_COUNT/(Female_Content_COUNT+Male_Content_COUNT+Others_Content_COUNT) AS OTHERS_CONTENT_RATIO
FROM
    (SELECT 
		SUM(CASE
			WHEN showOwnerGender = "F" THEN 1 ELSE 0
			END) AS Female_Content_COUNT,
		SUM(CASE
			WHEN showOwnerGender = "M" THEN 1 ELSE 0
			END) AS Male_Content_COUNT,
		SUM(CASE
		WHEN showOwnerGender = "O" THEN 1 ELSE 0
		END) AS Others_Content_COUNT
		FROM shows_T) AS Content_Count;
        
        
/*Q2. Determine the Manager's Full Name for every theatre*/
SELECT theaterId, 
CONCAT(managerFirstName ," ",managerLastName) AS Manager_Name
FROM  manager_T
INNER JOIN theater_T
on manager_T.managerId = theater_T.theaterManagerId
ORDER BY theaterId ASC;

/*Q3. What is the top most booked shows of all times based on Total Tickets Booked. 
If there is a tie, display both the show names*/
SELECT ShowName,Tickets_Booked
	FROM 
	(SELECT distinct shows.ShowName,
					Count(distinct tickets.ticketId) as Tickets_Booked
					FROM booking_T booking          
					INNER JOIN shows_T shows
					ON booking.showId = shows.showId
					INNER JOIN tickets_T tickets
					ON booking.bookingId = tickets.bookingId
                    AND tickets.BookingStatus = 1
					GROUP BY ShowName
					ORDER BY Count(distinct tickets.ticketId) DESC) AS Top_Shows_T
WHERE Tickets_Booked = (SELECT MAX(Tickets_Booked)
					FROM 
					(SELECT distinct shows.ShowName,
					Count(distinct tickets.ticketId) as Tickets_Booked
					FROM booking_T booking          
					INNER JOIN shows_T shows
					ON booking.showId = shows.showId
					INNER JOIN tickets_T tickets
					ON booking.bookingId = tickets.bookingId
                    AND tickets.BookingStatus = 1
					GROUP BY ShowName
					ORDER BY Count(distinct tickets.ticketId) DESC) AS Top_Shows_T);


/*Q4. Which showtype is most preferred by people based on tickets booked */
SELECT showType AS 'Preferred_Show_Type'
FROM
      (SELECT showType, COUNT(tickets.ticketId) as ticket_count
					FROM booking_T booking          
					INNER JOIN shows_T shows
					ON booking.showId = shows.showId
					INNER JOIN tickets_T tickets
					ON booking.bookingId = tickets.bookingId
                    AND tickets.BookingStatus = 1 
					GROUP BY showType) AS type_count
ORDER BY ticket_count DESC
LIMIT 1;


/*Q5. What are the top 2 highest grossing show along with box office collection of all times */
SELECT DISTINCT shows.showName, ROUND(SUM(seat_types.seatsPrice),2) AS 'Box_Office_Collection'
FROM  booking_T bookings
INNER JOIN tickets_T tickets
ON bookings.bookingId = tickets.bookingId
AND tickets.BookingStatus = 1
INNER JOIN shows_T shows
ON bookings.showId = shows.showId
INNER JOIN seats_T seats
ON bookings.bookingId = seats.bookingId
INNER JOIN seats_type_T seat_types
ON seats.id = seat_types.id
GROUP BY shows.showName
ORDER BY ROUND(SUM(seat_types.seatsPrice),2) DESC
LIMIT 2;


/*Q6. Determine the customers who are the first to attend the shows*/ 
SELECT DISTINCT shows.showName,shows.showStartDate,
        FIRST_VALUE(concat(customers.customerFirstName," ",customers.customerLastName)) 
        OVER(PARTITION BY shows.showName ORDER BY show_schedule.showStartTime ASC) AS Customer_Name
FROM shows_T shows
INNER JOIN show_schedule_T show_schedule
ON shows.showId = show_schedule.showId
INNER JOIN booking_T bookings
ON shows.showId = bookings.showId
INNER JOIN customers_T customers
ON bookings.CustomerId = customers.CustomerId
INNER JOIN tickets_T tickets
ON customers.CustomerId = tickets.CustomerdId
AND tickets.BookingStatus = 1
ORDER BY shows.showStartDate ASC;

