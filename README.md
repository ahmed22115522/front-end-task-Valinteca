# front-end-task-Valinteca
This is a simple login and signup page with ui design

Uing api from the back-end server for validation and store information on the local storage if success

1 In the first page (welcome screen), the “get started” button should open the “register page”
2 In the second page (register page), user is asked to enter some data such as username, email,
password, you need to validate the form
- Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no
numbers at the beginning or the end, ahmed0saber is valid, 0ahmedsaber is not valid,
ahmedsaber0 is not valid, ahmed_saber is not valid, etc...
- Email must be in a valid format
- Password must be at least 8 characters
- Display frontend validation errors below each input
- Use “fetch” to send user data to this endpoint https://goldblv.com/api/hiring/tasks/register
using “POST” method and type of “application/json”, request body should have username,
email, password and password_confirmation
- Display validation errors from api below each input
- If no errors from api, direct user to the last page (logged in successfully), where his email is
displayed from sessionStorage, localStorage or cookies
