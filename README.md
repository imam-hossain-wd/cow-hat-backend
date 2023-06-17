# l2a3-cow-hut-backend-assignment-imam-hossain1

//user

create user :
http://localhost:5000/api/v1/auth/singup

get all users :
http://localhost:5000/api/v1/users

get single user with id :
http://localhost:5000/api/v1/users/648c754622a9f6a5fce281ad

delete a user :
http://localhost:5000/api/v1/users/648c7a04114828c007c99bfa

// users pagination search filter

page-limit : http://localhost:5000/api/v1/users/?page=1&limit=2

page-limit-skip-sort : http://localhost:5000/api/v1/users/?page=1&limit=2&sortBy=income&sortOrder=desc

search-filter-limit-sort : http://localhost:5000/api/v1/users/?address=dhaka&limit=5&sortBy=income&sortOrder=asc


//cow 

create cow : http://localhost:5000/api/v1/cows/create-cow

getAllCows: http://localhost:5000/api/v1/cows

getCowById : http://localhost:5000/api/v1/cows/648cae8c41a8d64b7bd00a70

deleteCow : http://localhost:5000/api/v1/cows/648cb7d5bda4ea20ef4e3f0f




//cow pagination

http://localhost:5000/api/v1/cows/?page=1&limit=10

http://localhost:5000/api/v1/cows/?sortBy=price&sortOrder=asc

http://localhost:5000/api/v1/cows/?minPrice=20000&maxPrice=70000

http://localhost:5000/api/v1/cows/?location=Dhaka

http://localhost:5000/api/v1/cows/?searchTerm=Cha


//order
create-order : http://localhost:5000/api/v1/orders

