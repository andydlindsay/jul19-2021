# W05D01 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`

### RDBMS
* Relational DataBase Management System
* `psql`, `elephantSQL`

### Relational Data
* Structured data / schema
* SQL, NoSQL
* Tables
* Row => Record
* Columns => Fields
* Creat relationships between tables
* Primary key (`serial`) => foreign key

```js
const user = {
  username: '',
  password: '',
  dob: '',
  friends: [],
  phoneNumber: ''
};
```

```
Authors
ID, Name, NumOfBooksPublished, FanClubWebsite
1 Steven King


Books
ID Title AuthorId NumOfPages Publisher
1 The Shining, 1, 8000, Some Publisher
2 The Stand, 1, 8000, Some Other Publisher
```

### SQL Commands
* C => INSERT
* R => SELECT
* U => UPDATE
* D => DELETE

* CREATE TABLE
* ALTER TABLE




### SELECT Challenges

For the first 6 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(*) 
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name ASC;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < '2021-08-16';

-- using CURRENT_DATE
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

6. List all the countries users live in; don't repeat any countries

```sql
SELECT DISTINCT country
FROM users
ORDER BY country;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

7. List all albums along with their songs

```sql
SELECT album_name, artist_name, song_name
FROM albums
JOIN songs ON albums.id = songs.album_id;
```

8. List all albums along with how many songs each album has

```sql
SELECT album_name, COUNT(songs.*) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;
```

9. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, COUNT(songs.*) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name
HAVING COUNT(songs.*) > 10;
```

10. List ALL albums in the database, along with their songs if any

```sql
SELECT album_name, artist_name, song_name
FROM songs
RIGHT JOIN albums ON albums.id = songs.album_id
WHERE songs.album_id IS NULL;

-- LEFT JOIN
SELECT album_name, artist_name, song_name
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;
```

11. List albums along with average song rating

```sql
SELECT album_name, AVG(songs.rating) AS avg_rating
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;
```

12. List albums and songs with rating higher than album average

```sql
SELECT albums.album_name, 
  songs.song_name, 
  songs.rating,
  (SELECT AVG(songs.rating) FROM songs WHERE songs.album_id = albums.id) AS avg_rating
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE songs.rating > (SELECT AVG(songs.rating) FROM songs WHERE songs.album_id = albums.id);
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
