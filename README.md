
## Tech Stack

**Language:** PHP 8.3

**Framework:** Laravel 11

**Database:** MySQL | PostgreSQL

## Features

 - CRUD Person / User
  
## Installation
clone repositories to your local machine
```bash
  git clone https://github.com/coding-test-history/octobees.git
```

## Run Locally

Build docke image

```bash
  docker-compose build
```
Run docker compose
```bash
  docker-compose up -d
```
Start docker
```bash
  docker run octobees
```

## Running Tests

To run tests, run the following command

```bash
  php artisan test
```

## Demo

- Email : user1@mail.com
- Password : password


## API Reference

### User / Person
#### 1. Retrieve a list of all users.
```http
  GET /users
```
```json
{
    "status": "OK",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 7,
                "name": "User 1",
                "email": "user1@mail.com",
                "email_verified_at": "2024-12-13T09:32:24.000000Z",
                "current_team_id": null,
                "profile_photo_path": null,
                "tanggal_lahir": "2024-05-25",
                "tempat_tinggal": "Medan",
                "created_at": "2024-12-13T09:32:25.000000Z",
                "updated_at": "2024-12-13T09:32:25.000000Z",
                "two_factor_confirmed_at": null,
                "profile_photo_url": "https://ui-avatars.com/api/?name=U+1&color=7F9CF5&background=EBF4FF"
            }
        ],
        "first_page_url": "http://localhost:8000/api/users?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/users?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://localhost:8000/api/users?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "http://localhost:8000/api/users",
        "per_page": 2,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
#### 2. Retrieve details of a specific user.
```http
  GET /users/{id}
```
| Parameter | Type     | Description. |
| :-------- | :------- | :------------|
| `id`      | `int`    | **Required**.|

response
```json
  {
    "status": "OK",
    "data": {
        "id": 1,
        "name": "User 1",
        "email": "user1@mail.com",
        "email_verified_at": "2024-12-12T06:31:54.000000Z",
        "current_team_id": null,
        "profile_photo_path": null,
        "tanggal_lahir": "2024-05-25",
        "tempat_tinggal": "Medan",
        "created_at": "2024-12-12T06:31:55.000000Z",
        "updated_at": "2024-12-12T06:31:55.000000Z",
        "two_factor_confirmed_at": null,
        "profile_photo_url": "https://ui-avatars.com/api/?name=U+1&color=7F9CF5&background=EBF4FF"
    }
}
```

#### 3. Create a new user.
```http
  POST /users/post
```

| Request Body.   | Type     | Description  |
| :---------------| :------- | :------------|
| `name`          | `string` | **Required**.|
| `email`         | `string` | **Required**.|
| `password`      | `string` | **Required**.|
| `tanggal_lahir` | `date`   | **Required**.|
| `tempat_tinggal`| `string` | **Required**.|

response
```json
{
    "status": "Created",
    "message": "Data User Berhasil Disimpan",
    "data": {
        "id": 22,
        "name": "user 10",
        "email": "user10@mail.com",
        "email_verified_at": "2024-12-13T05:58:50.000000Z",
        "current_team_id": null,
        "profile_photo_path": null,
        "tanggal_lahir": "2024-01-01",
        "tempat_tinggal": "Medan",
        "created_at": "2024-12-13T05:58:50.000000Z",
        "updated_at": "2024-12-13T05:58:50.000000Z",
        "two_factor_confirmed_at": null,
        "profile_photo_url": "https://ui-avatars.com/api/?name=u+1&color=7F9CF5&background=EBF4FF"
    }
}
```

#### 4. Update an existing user.
```http
  PUT /users/update/{id}
```
| Parameter | Type     | Description. |
| :-------- | :------- | :------------|
| `id`      | `int`    | **Required**.|

| Request Body.   | Type     | Description  |
| :---------------| :------- | :------------|
| `name`          | `string` | **Required**.|
| `email`         | `string` | **Required**.|
| `tanggal_lahir` | `date`   | **Required**.|
| `tempat_tinggal`| `string` | **Required**.|

response
```json
{
    "status": "Created",
    "message": "Data User Berhasil Diubah",
    "data": {
        "id": 3,
        "name": "user 22",
        "email": "user22@mail.com",
        "email_verified_at": "2024-12-13T03:49:39.000000Z",
        "current_team_id": 3,
        "profile_photo_path": null,
        "tanggal_lahir": "2025-01-01",
        "tempat_tinggal": "Jakarta",
        "created_at": "2024-12-13T03:49:39.000000Z",
        "updated_at": "2024-12-13T08:40:51.000000Z",
        "two_factor_confirmed_at": null,
        "profile_photo_url": "https://ui-avatars.com/api/?name=u+2&color=7F9CF5&background=EBF4FF"
    }
}
```

#### 5. Delete an user.
```http
  DELETE/users/delete/{id}
```
| Parameter | Type     | Description. |
| :-------- | :------- | :------------|
| `id`      | `int`    | **Required**.|

response 
```json
{
    "status": "OK",
    "message": "Data User Berhasil Dihapus"
}
```
