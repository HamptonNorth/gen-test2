# gen-test2 server.js API docs
  //TODO insert general description of server, API & database
  <br><br>
  
## /api/users

>Description:  returns collection of users
```Text
# thisRoute.method            GET
# authentication              Y
# example                     users
# parameters                  with no route parameter or URL query parameter
# objectKeys                  
```
```Text
# body                        
""
```
```Text
# success response            
{
	"status": "success",
	"data": {
		"users": [
			{
				"id": 1,
				"email": "someone@redmug.dev",
				"role": "superuser"
			},
			{
				"id": 2,
				"email": "support@redmug.dev",
				"role": "user"
			},
			{
				"id": 7,
				"email": "jwilson@redmug.dev",
				"role": "user"
			},
			{
				"id": 12,
				"email": "aduffy@redmug.dev",
				"role": "user"
			},
			{
				"id": 52,
				"email": "ajwilson@redmug.dev",
				"role": "user"
			},
			{
				"id": 67,
				"email": "shwilson@redmug.dev",
				"role": "user"
			}
		]
	}
}

```
```Text
# fail response examples(s)

```
```Text
# curl
curl  -X GET http://localhost:3005/api/users 
```
> Notes:  This routes gets all users. For handling ranges of users use GET usersbyrange API call
<hr><style="page-break-after: always;"></style>

 

## /api/user/:id

>Description:  returns a single user matching id [int]
```Text
# thisRoute.method            GET
# authentication              Y
# example                     user/:id
# parameters                  route parameter: /:id
# objectKeys                  id
```
```Text
# body                        
""
```
```Text
# success response            
{
	"status": "success",
	"data": {
		"users": [
			{
				"id": 7,
				"email": "jwilson@redmug.dev",
				"role": "user"
			}
		]
	}
}

```
```Text
# fail response examples(s)

```
```Text
# curl
curl  -X GET http://localhost:3005/api/user/:id 
```
> Notes:  
<hr><style="page-break-after: always;"></style>

 

## /api/usersearch?name=wil

>Description:  returns collection users matching by name [string] and country [string] 
```Text
# thisRoute.method            GET
# authentication              Y
# example                     usersearch?name=wil
# parameters                  URL query parameter: ?name=wil
# objectKeys                  name
```
```Text
# body                        
""
```
```Text
# success response            
{
	"status": "success",
	"data": {
		"users": [
			{
				"id": 7,
				"email": "jwilson@redmug.dev",
				"role": "user"
			},
			{
				"id": 52,
				"email": "ajwilson@redmug.dev",
				"role": "user"
			},
			{
				"id": 67,
				"email": "shwilson@redmug.dev",
				"role": "user"
			}
		]
	}
}

```
```Text
# fail response examples(s)

```
```Text
# curl
curl  -X GET http://localhost:3005/api/usersearch?name=wil 
```
> Notes:  searches are case insensitive. Name is matched by 'starting with'. Country is matched to ISO 3166 codes
<hr><style="page-break-after: always;"></style>

 

## /api/createuser

>Description:  Add a user to users table  
```Text
# thisRoute.method            POST
# authentication              Y
# example                     createuser
# parameters                  with POST body keys of: display_name, email, client_id, user_status, last_login, role
# objectKeys                  display_name, email, client_id, user_status, last_login, role
```
```Text
# body                        
[
/t{
/t/t"display_name": "HamptonNorth",
/t/t"email": "hamptonnorth@redmug.dev",
/t/t"client_id": 150,
/t/t"user_status": 0,
/t/t"last_login": "2000-01-01 00:00:00",
/t/t"role": "superuser"
/t}
]
```
```Text
# success response            
{
	"status": "success",
	"data": {
		"added": [
			{
				"id": true
			}
		]
	}
}

```
```Text
# fail response examples(s)

```
```Text
# curl
curl  -X POST http://localhost:3005/api/createuser -H "Content-Type: application/json" -d '{"display_name":"HamptonNorth","email":"hamptonnorth@redmug.dev","client_id":150,"user_status":0,"last_login":"2000-01-01 00:00:00","role":"superuser"}'
```
> Notes:  last_login date set to now() if not provided. For bulk user creation use import API
<hr><style="page-break-after: always;"></style>

 

## /api/updateuserrole

>Description:  Update user role
```Text
# thisRoute.method            PUT
# authentication              Y
# example                     updateuserrole
# parameters                  with PUT body keys of: client_id, role
# objectKeys                  client_id, role
```
```Text
# body                        
[
/t{
/t/t"client_id": 1,
/t/t"role": "superuser"
/t}
]
```
```Text
# success response            
{
	"status": "success",
	"data": ""
}

```
```Text
# fail response examples(s)

```
```Text
# curl
curl  -X PUT http://localhost:3005/api/updateuserrole -H "Content-Type: application/json" -d '{"client_id":1,"role":"superuser"}'
```
> Notes:  Updates user role where role may be 'user' or 'superuser' only
<hr><style="page-break-after: always;"></style>

 

## /api/deleteuser

>Description:  Delete a user
```Text
# thisRoute.method            DELETE
# authentication              Y
# example                     deleteuser
# parameters                  with DELETE body keys of: client_id
# objectKeys                  client_id
```
```Text
# body                        
[
/t{
/t/t"client_id": 1
/t}
]
```
```Text
# success response            
{
	"status": "success",
	"data": ""
}

```
```Text
# fail response examples(s)

```
```Text
# curl
curl  -X DELETE http://localhost:3005/api/deleteuser -H "Content-Type: application/json" -d '{"client_id":1}'
```
> Notes:  Deletes user  by id
<hr><style="page-break-after: always;"></style>

 
//@insert1
  