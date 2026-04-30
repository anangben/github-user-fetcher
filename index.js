const BASE_URL = 'https://api.github.com';

const requestOptions = {
  headers: { 'User-Agent': 'github-user-fetcher' }
};


// Fetch all users
const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`, requestOptions);

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
};


// Fetch single user
const fetchUser = async (username) => {
  const res = await fetch(`${BASE_URL}/users/${username}`, requestOptions);

  if (res.status === 404) {
    throw new Error('User not found');
  }

  if (!res.ok) {
    throw new Error('GitHub API error');
  }

  return res.json();
};

// Task 1: List users
const listUsers = async () => {
  try {
    const users = await fetchUsers();

    console.log('\n USERS — first 10 results (for readability) \n');
    users.slice(0, 10).forEach((user, index) => {
      console.log(`${index + 1}. username: ${user.login}`);
      console.log(`   id: ${user.id}`);
      console.log(`   profile link: ${user.html_url}`);
    });

  } catch (error) {
    console.error('Error:', error.message);
  }
};


// Task 2: Single user details
const getUserDetails = async (username) => {
  try {
    const user = await fetchUser(username);

    console.log(`\n SINGLE USER DETAILS: ${username} \n`);

    console.log(`name: ${user.name ?? 'N/A'}`);
    console.log(`company: ${user.company ?? 'N/A'}`);
    console.log(`public_repos: ${user.public_repos}`);
    console.log(`followers: ${user.followers}`);

  } catch (error) {
    console.error('Error:', error.message);
  }
};


// Execution
const username = 'mojombo';
(async () => {
  await listUsers();
  await getUserDetails(username);
})();