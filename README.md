# Auth System
Authentication + Authorization system in NodeJS + MongoDB done through an auth middleware.

## How it works
The authentication process is controlled through a JWT token given to the user at login, whereas the authorization process is done through the role of the user.

When a requisition is made to an endpoint, the endpoint can be public, where anyone can access, it may require authentication, where the headers of the request are checked for an Authorization header with a valid JWT token or it may be private where not only authentication is required but also the role of the user is checked to see if it's authorized to access the resource.

## Implementation example
`router.get('/', booksController.getAll);` // Public endpoint\
`router.get('/', auth(), booksController.getAll);` // Authentication required\
`router.get('/', auth(Role.Admin), booksController.getAll);` // Authentication + authorization

## How to run
`docker-compose up`