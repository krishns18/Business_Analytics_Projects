/* AMPHITHEATRE BOOKING SYSTEM*/

/* DATABASE */
-- Drop database 
DROP DATABASE IF EXISTS mavericks_db;
-- Creating database mavericks_arena
CREATE DATABASE mavericks_db;
-- Using the schema created above
USE mavericks_db;

/* TABLES */
-- Drop existing tables if they exist.
DROP TABLE IF EXISTS mavericks_db.shows_T, 
mavericks_db.manager_T, mavericks_db.theater_T, mavericks_db.show_schedule_T,
mavericks_db.seats_T, mavericks_db.seats_types_T,
mavericks_db.customers_T,mavericks_db.tickets_T, mavericks_db.booking_T;



-- Shows Table, contains details about the specific shows.
CREATE TABLE mavericks_db.shows_T ( 
showName VARCHAR(50) NOT NULL,
showDescription VARCHAR(250) NOT NULL,
showOwner VARCHAR(50) NOT NULL,
showOwnerGender CHAR(1) NOT NULL CHECK (showOwnerGender IN ('M','F','O')),
showType VARCHAR(10) NOT NULL CHECK(showType IN ('Indoor','Outdoor')),
showId INT NOT NULL,
showTypeId INT NOT NULL,
showStartDate DATE NOT NULL,
showEndDate DATE NOT NULL,
CONSTRAINT SHOWS_PK PRIMARY KEY (showId)
);


-- Theater manager table
CREATE TABLE mavericks_db.manager_T(
managerId INT NOT NULL AUTO_INCREMENT,
managerFirstName VARCHAR(25) NOT NULL,
managerLastName VARCHAR(25) NOT NULL,
managerPhone VARCHAR(10) NOT NULL,
managerEmail VARCHAR(50) NOT NULL,
managerStreetAddress VARCHAR(100) NOT NULL,
managerZipCode CHAR(5) NOT NULL,
CONSTRAINT manager_PK PRIMARY KEY (managerId)
);

-- Theater Table, contains information about the theatre.
CREATE TABLE mavericks_db.theater_T (
theaterId INT NOT NULL,
theaterName VARCHAR(25) NOT NULL,
theaterManagerId INT NOT NULL,
theaterCapacity INT NOT NULL,
theaterLevel CHAR(5) NOT NULL CHECK(theaterLevel IN ('UPPER','LOWER')),
CONSTRAINT THEATER_PK PRIMARY KEY (theaterId),
CONSTRAINT THEATER_MANAGER_FK FOREIGN KEY (theaterManagerId) REFERENCES mavericks_db.manager_T(managerId)
);

-- Show Timings Table, contains information about the various shows and events that happen in amphitheater.
CREATE TABLE mavericks_db.show_schedule_T (
 showId INT NOT NULL,
 theaterId INT NOT NULL,
 showStartTime datetime NOT NULL,
 showEndTime DATETIME NOT NULL,
 CONSTRAINT SHOW_TIMING_PK PRIMARY KEY (showId),
 CONSTRAINT show_schedule_SHOW_ID_FK FOREIGN KEY (showId) REFERENCES mavericks_db.shows_T(showId),
 CONSTRAINT show_schedule_THEATER_ID_FK FOREIGN KEY (theaterId) REFERENCES mavericks_db.theater_T(theaterId),
 UNIQUE INDEX SHOW_TIMING_UNIQUE_IDX (showId,theaterId,showStartTime)
);



-- Customer Table, contains information about the customer. 
CREATE TABLE mavericks_db.customers_T(
customerId INT NOT NULL AUTO_INCREMENT,
customerFirstName VARCHAR(25) NOT NULL,
customerLastName VARCHAR(25) NOT NULL,
customerPhone VARCHAR(10) NOT NULL,
customerEmail VARCHAR(100) NOT NULL,
customerStreetAddress VARCHAR(100) NOT NULL,
customerZipCode CHAR(5) NOT NULL,
CONSTRAINT CUSTOMER_PK PRIMARY KEY (customerId)
);





CREATE TABLE mavericks_db.booking_T(
-- seatBookingId INT NOT NULL AUTO_INCREMENT,
showId INT NOT NULL,
bookingId INT NOT NULL,
CustomerId INT NOT NULL,
-- CONSTRAINT seats_RESERVATION_PK PRIMARY KEY (seatBookingId),
CONSTRAINT booking_PK PRIMARY KEY (bookingId),
CONSTRAINT seats_BOOKING_FK FOREIGN KEY (showId) REFERENCES mavericks_db.shows_T(showId),
CONSTRAINT seats_SHOWTIME_FK FOREIGN KEY (CustomerId) REFERENCES mavericks_db.customers_T(CustomerId),
UNIQUE INDEX SEAT_RESERVATION_IDX (showId,bookingId,CustomerId)
);

-- seats Table, contains information about seats in a theater.
CREATE TABLE mavericks_db.seats_T(
id INT NOT NULL AUTO_INCREMENT,
theaterId INT NOT NULL,
bookingId INT NOT NULL,
seatNumber INT NOT NULL,
rowNumber CHAR(1) NOT NULL,
CONSTRAINT seats_PK PRIMARY KEY(id),
CONSTRAINT seats_THEATER_FK FOREIGN KEY (theaterId) REFERENCES mavericks_db.theater_T(theaterId),
CONSTRAINT seats_TYPE_FK FOREIGN KEY (bookingId) REFERENCES mavericks_db.booking_T(bookingId),
UNIQUE INDEX seats_UNIQUE_IDX (theaterId,seatNumber,rowNumber)
);

-- seats Type Table, contains information about seats price and seats section. 
CREATE TABLE mavericks_db.seats_type_T (
id INT NOT NULL,
seatsType VARCHAR(6) NOT NULL CHECK(seatsType IN('Front','Middle','Back')),
seatsPrice DECIMAL(8,4) NOT NULL,
CONSTRAINT SEATS_FK FOREIGN KEY (id) REFERENCES mavericks_db.seats_T(id)
);


-- Bookings Table, contains information about ticket bookings.
CREATE TABLE mavericks_db.tickets_T(
ticketId INT NOT NULL AUTO_INCREMENT,
bookingId INT NOT NULL,
CustomerdId INT NOT NULL,
BookingStatus BOOLEAN NOT NULL,
BookingTime DATETIME NOT NULL,
CONSTRAINT tickets_PK PRIMARY KEY (ticketId),
CONSTRAINT BOOKINGS_FK FOREIGN KEY (bookingId) REFERENCES mavericks_db.booking_T(bookingId),
CONSTRAINT BOOKINGS_CUSTOMER_FK FOREIGN KEY (CustomerdId) REFERENCES mavericks_db.customers_T(customerId)
);

-- Seat Reservation Table, contains information about the seats reserved. 





-- Ticket Table, contains information about the individual ticket. Associative entity
/* CREATE TABLE mavericks_db.ticket_T(
ticketId INT NOT NULL AUTO_INCREMENT,
ticketSeatReservationId INT NOT NULL,
ticketReservationId INT NOT NULL,

CONSTRAINT TICKET_PK PRIMARY KEY (ticketId),
CONSTRAINT TICKET_seats_RESERVATION_FK FOREIGN KEY (ticketSeatReservationId) REFERENCES mavericks_db.seat_reservation(reservationId),
CONSTRAINT TICKET_RESERVATION_FK FOREIGN KEY (ticketReservationId) REFERENCES mavericks_db.tickets_T(bookingId)
);


