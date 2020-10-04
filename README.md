# Auth System
Authentication + Authorization system in NodeJS + MongoDB done through an auth middleware.

## How it works
The authentication process is controlled through a JWT token given to the user at login (email+password to `/api/auth/authenticate`), whereas the authorization process is done through the role of the user.

When a requisition is made to an endpoint, the endpoint can be public, where anyone can access, it may require authentication, where the headers of the request are checked for an Authorization header with a valid JWT token or it may be private where not only authentication is required but also the role of the user is checked to see if it's authorized to access the resource. Every time a user logs in or access an authorization required endpoint a log is created with the timestamp and description of the event.

## Implementation example
`router.get('/', booksController.getAll);` // Public endpoint\
`router.get('/', auth(), booksController.getAll);` // Authentication required\
`router.get('/', auth(Role.Admin), booksController.getAll);` // Authentication + authorization

## How to run
`docker-compose up`
