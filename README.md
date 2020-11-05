# Auth System
Authentication + Authorization system in NodeJS + MongoDB.

## How it works

![Class diagram](https://raw.githubusercontent.com/nathangngencissk/api-authentication/master/class_diagram.png)

![Process diagram](https://raw.githubusercontent.com/nathangngencissk/api-authentication/master/process_auth.png)

The authentication process is controlled through a JWT token given to the user at login (email+password to `/api/auth/authenticate`), whereas the authorization process is done through the permissions the user.

Authenticated users can access the endpoint `/api/auth/user/:id/permissions` to check their permissions, for which routes they can access. 

## Implementation
There are routes for creating/altering and deleting permissions and users.

example of a created permission.
```json
{
  "_id": "5f7a4ab341c2cb012a44fcb7",
  "name": "Sales",
  "route": "/sales",
  "__v": 0
}
```

example of a created user.
```json
{
  "permissions": [
    "5f7a463c613926001941fcf0"
  ],
  "_id": "5f7a465f613926001941fcf1",
  "name": "Pedro",
  "cpf": "1234",
  "email": "pedro@gmail.com",
  "password": "1234",
  "createdAt": "2020-10-04T22:02:07.560Z",
  "__v": 0
}
```

example of user authenticated through `/api/auth/authenticate`.
```json
{
  "userId": "5f7a0d447b7a770012b2e3f8",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjdhMGQ0NDdiN2E3NzAwMTJiMmUzZjgiLCJpYXQiOjE2MDE4MzQzMTQsImV4cCI6MTYwMTkyMDcxNH0.zqJsEsk981NPP86qZijkF23jayA4dr01EdJtIuGO3ew"
}
```

example of user permissions through `/api/auth/user/:id/permissions`.
```json
{
  "user": "5f7a465f613926001941fcf1",
  "permissions": [
    {
      "permissionId": "5f7a483212adb40090553afa",
      "permissionName": "Admin",
      "route": "/"
    },
    {
      "permissionId": "5f7a4ab341c2cb012a44fcb7",
      "permissionName": "Sales",
      "route": "/sales"
    }
  ]
}
```


## How to run
install dependencies and run `docker-compose up`.
