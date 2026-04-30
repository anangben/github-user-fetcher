# GitHub User Fetcher

A simple Node.js script that connects to the GitHub REST API to fetch and display user data in a clear and readable format.

---

## Objective

This project demonstrates:
- Making HTTP requests to an external API
- Parsing JSON responses
- Displaying data in a structured and readable format

---

## Features

### 1. List Users
Fetches a list of GitHub users and displays:
- Username (login)
- ID
- Profile URL

### 2. Single User Details
Fetches details for a specific user and displays:
- Name
- Company
- Public Repositories
- Followers

---

## Technologies Used

- Node.js
- JavaScript (ES6+)
- GitHub REST API

---

## API Endpoints Used

- https://api.github.com/users  
- https://api.github.com/users/{username}

---

## How to Run

```bash
1. Clone the repository
git clone https://github.com/anangben/github-user-fetcher.git
cd github-user-fetcher

2. Install dependencies (if applicable)
npm install


3. Run the script
node index.js

4. How to change the username
Open index.js and update the username:
const username = 'mojombo';

Example:
const username = 'defunkt';

Sample Output

 USERS — first 10 results (for readability)

1. username: mojombo
   id: 1
   profile link: https://github.com/mojombo
2. username: defunkt
   id: 2
   profile link: https://github.com/defunkt
3. username: pjhyett
   id: 3
   profile link: https://github.com/pjhyett
4. username: wycats
   id: 4
   profile link: https://github.com/wycats
5. username: ezmobius
   id: 5
   profile link: https://github.com/ezmobius
6. username: ivey
   id: 6
   profile link: https://github.com/ivey
7. username: evanphx
   id: 7
   profile link: https://github.com/evanphx
8. username: vanpelt
   id: 17
   profile link: https://github.com/vanpelt
9. username: wayneeseguin
   id: 18
   profile link: https://github.com/wayneeseguin
10. username: brynary
   id: 19
   profile link: https://github.com/brynary

SINGLE USER DETAILS: mojombo

name: Tom Preston-Werner
company: @chatterbugapp, @redwoodjs, @preston-werner-ventures
public_repos: 66
followers: 24568