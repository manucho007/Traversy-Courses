
# DevCamper API

Backend API for the DevCamper application to manage bootcamps, courses, reviews, users and authentication

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```
Documentation available in http://localhost:5000/

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```


- Version: 1.0.0
- License: MIT

# API
## Indices

* [bootcamps](#bootcamps)

  * [GET All bootcamps](#1-get-all-bootcamps)
  * [GET Single bootcamp](#2-get-single-bootcamp)
  * [Create new Bootcamp](#3-create-new-bootcamp)
  * [Update a bootcamp](#4-update-a-bootcamp)
  * [Delete a bootcamp](#5-delete-a-bootcamp)
  * [GET All bootcamps in Radius](#6-get-all-bootcamps-in-radius)
  * [Upload photo](#7-upload-photo)

* [courses](#courses)

  * [GET All Courses](#1-get-all-courses)
  * [GET Courses for bootcamp](#2-get-courses-for-bootcamp)
  * [GET a single Courses](#3-get-a-single-courses)
  * [Create a new Course](#4-create-a-new-course)
  * [UPDATE  Courses](#5-update--courses)
  * [Delete Course](#6-delete-course)

* [auth](#auth)

  * [Register User](#1-register-user)
  * [Login User](#2-login-user)
  * [Get logged in user via token](#3-get-logged-in-user-via-token)
  * [Forgot password](#4-forgot-password)
  * [Reset Password](#5-reset-password)
  * [Update user details](#6-update-user-details)
  * [Update user password](#7-update-user-password)
  * [Logout user](#8-logout-user)

* [users](#users)

  * [Get All users](#1-get-all-users)
  * [Get single user](#2-get-single-user)
  * [Create user](#3-create-user)
  * [Update user](#4-update-user)
  * [Delete user](#5-delete-user)

* [reviews](#reviews)

  * [Get all reviews](#1-get-all-reviews)
  * [Get reviews for Bootcamp](#2-get-reviews-for-bootcamp)
  * [Get Single review](#3-get-single-review)
  * [Add new Review for bootcamp](#4-add-new-review-for-bootcamp)
  * [Update Review](#5-update-review)
  * [Delete Review](#6-delete-review)


--------


## bootcamps
bootcamps CRUD functionality



### 1. GET All bootcamps


Fetch all bootcamps from database. Includes pagination, filtering, etc


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps
```



### 2. GET Single bootcamp


Get single bootcamp by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
```



### 3. Create new Bootcamp


Add new bootcamp to database. Must be authenticated and must be an admin


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name": "Bootcamp of Manuel",
    "description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
    "website": "https://devworks.com",
    "phone": "(111) 111-1111",
    "email": "enroll@devworks.com",
    "address": "233 Bay State Rd Boston MA 02215",
    "careers": ["Web Development", "UI/UX", "Business"],
    "housing": true,
    "jobAssistance": true,
    "jobGuarantee": false,
    "acceptGi": true
}
```



### 4. Update a bootcamp


Update a single bootcamp in the database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5eb1e5ae14a08d4c087ff3c9
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"housing":false
}
```



### 5. Delete a bootcamp


Delete a bootcamp from the database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/5eb7b9aa2ac402586c86e197
```



### 6. GET All bootcamps in Radius


Fetches all the bootcamps within a radius from zipcode and distance


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/radius/02118/10
```



### 7. Upload photo


ROute to upload a bootcamp photo


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"housing":false
}
```



## courses
CRUD for courses



### 1. GET All Courses


Get all courses in database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/
```



### 2. GET Courses for bootcamp


Get the specific courses for a bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/courses
```



### 3. GET a single Courses


Gets a single course by ID from Database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```



### 4. Create a new Course


Creates a new course on DB with a reference from a bootcampID


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/courses
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"title": "Full Stack Web Development",
    "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
    "weeks": 12,
    "tuition": 10000,
    "minimumSkill": "intermediate",
    "scholarshipsAvailable": true
}
```



### 5. UPDATE  Courses


Update a course in the database from the ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"tuition": 22000,
    "minimumSkill": "advanced"
}
```



### 6. Delete Course


Removes course in the database from ID


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



## auth
Routes for user Authentication including register, login reset password



### 1. Register User


Add user to database with encrypted password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"name": "Barry Dickens",
    "email": "barry@gmail.com",
    "role": "user",
    "password": "123456"
}
```



### 2. Login User


Login User 


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"password":"1234567",
	"email":"manrodri92@gmail.com"
}
```



### 3. Get logged in user via token



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 4. Forgot password


Generate password token and send email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"email":"kevin@gmail.com"
}
```



### 5. Reset Password


Reset user password using token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/4ab5bf7c996bff8016897a90767833f2b14b48d5
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"password":"654321"
}
```



### 6. Update user details


Update loggged in user name and email


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"email":"kevin@gmail.com",
	"name": "Kevin"
}
```



### 7. Update user password


Update logged in user password, send in body current password and new password


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"currentPassword": "654321",
	"newPassword":"123456"
}
```



### 8. Logout user


Clear token cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



## users
Users CRUD functionality only available to admins



### 1. Get All users


Get all users (admin)


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 2. Get single user


Get single user by ID (admin)


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 3. Create user


Creates a user (admin)


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"name": "Manuel Rodriguez",
    "email": "manrodri92@gmail.com",
    "role": "publisher",
    "password": "123456"
}
```



### 4. Update user


Update a user in the database (admin)


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/5ebba59a1409c51784487ac8
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"name": "Manuel Rodriguez"
}
```



### 5. Delete user


Deletes user in the database (admin)


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/5ebba59a1409c51784487ac8
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



## reviews
CRUD functionality for reviews



### 1. Get all reviews


Gets all the reviews from the database and populate with bootcamp name and description


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 2. Get reviews for Bootcamp


Fetch the reviews for a specific bootcamp


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 3. Get Single review


Fetch a single review from the database by id and populate bottcamp name and decription


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/reviews/5d725a1b7b292f5f8ceff788
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



### 4. Add new Review for bootcamp


Creates a new review for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	"title": "awful",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra feugiat mauris id viverra. Duis luctus ex sed facilisis ultrices. Curabitur scelerisque bibendum ligula, quis condimentum libero fermentum in. Aenean erat erat, aliquam in purus a, rhoncus hendrerit tellus. Donec accumsan justo in felis consequat sollicitudin. Fusce luctus mattis nunc vitae maximus. Curabitur semper felis eu magna laoreet scelerisque",
    "rating": "1"
}
```



### 5. Update Review


Update review in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/5ebbc1892a981c3b60c5578a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	  "title": "Not worth the money just garbage but not terrible",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra feugiat mauris id viverra. Duis luctus ex sed facilisis ultrices. Curabitur scelerisque bibendum ligula, quis condimentum libero fermentum in. Aenean erat erat, aliquam in purus a, rhoncus hendrerit tellus. Donec accumsan justo in felis consequat sollicitudin. Fusce luctus mattis nunc vitae maximus. Curabitur semper felis eu magna laoreet scelerisque",
    "rating": "2"
}
```



### 6. Delete Review


Remove review from database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/5ebbc1892a981c3b60c5578a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
	  "title": "Not worth the money just garbage but not terrible",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra feugiat mauris id viverra. Duis luctus ex sed facilisis ultrices. Curabitur scelerisque bibendum ligula, quis condimentum libero fermentum in. Aenean erat erat, aliquam in purus a, rhoncus hendrerit tellus. Donec accumsan justo in felis consequat sollicitudin. Fusce luctus mattis nunc vitae maximus. Curabitur semper felis eu magna laoreet scelerisque",
    "rating": "2"
}
```



---
[Back to top](#devcamper-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-05-13 19:43:01 by [docgen](https://github.com/thedevsaddam/docgen)
