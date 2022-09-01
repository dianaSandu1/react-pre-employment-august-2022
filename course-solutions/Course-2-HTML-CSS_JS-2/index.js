//list of users
const users = [
  {
    id: 1,
    name: "Jane",
    username: "janed0e",
    age: 21,
    gender: "F",
    isOnline: true,
  },
  {
    id: 2,
    name: "Joe",
    username: "jooo3",
    age: 18,
    gender: "M",
    isOnline: false,
  },
  {
    id: 3,
    name: "Michael",
    username: "michael.smith88",
    age: 34,
    gender: "M",
    isOnline: true,
  },
  {
    id: 4,
    name: "David",
    username: "00_d@vid",
    age: 24,
    gender: "M",
    isOnline: true,
  },
  {
    id: 5,
    name: "Mike",
    username: "mike9762535",
    age: 25,
    gender: "M",
    isOnline: false,
  },
  {
    id: 6,
    name: "Mark",
    username: "maaaark",
    age: 22,
    gender: "M",
    isOnline: false,
  },
  {
    id: 7,
    name: "Jason",
    username: "jason_d21",
    age: 22,
    gender: "M",
    isOnline: false,
  },
  {
    id: 8,
    name: "Robert",
    username: "r0_bert",
    age: 45,
    gender: "M",
    isOnline: true,
  },
  {
    id: 9,
    name: "Jessica",
    username: "jjjjessica",
    age: 31,
    gender: "F",
    isOnline: true,
  },
  {
    id: 10,
    name: "Sarah",
    username: "zarah",
    age: 26,
    gender: "F",
    isOnline: false,
  },
  {
    id: 11,
    name: "Paul",
    username: "pol",
    age: 45,
    gender: "M",
    isOnline: false,
  },
  {
    id: 12,
    name: "Kevin",
    username: "keevin78",
    age: 52,
    gender: "M",
    isOnline: true,
  },
  {
    id: 13,
    name: "Daniel",
    username: "dan_89",
    age: 19,
    gender: "M",
    isOnline: true,
  },
  {
    id: 14,
    name: "Ryan",
    username: "ryian_b",
    age: 46,
    gender: "M",
    isOnline: true,
  },
  {
    id: 15,
    name: "Steve",
    username: "ssssteve",
    age: 39,
    gender: "M",
    isOnline: false,
  },
];

const sortTypes = {
  ASC: "ascending",
  DESC: "descending",
};

const genders = {
  MALE: "M",
  FEMALE: "F",
};

const getSortedUsers = (array, type = sortTypes.ASC, property) => {
  switch (type) {
    case sortTypes.ASC:
      return [...array].sort((a, b) => a[property] - b[property]);
    case sortTypes.DESC:
      return [...array].sort((a, b) => b[property] - a[property]);
    default:
      return [];
  }
};

/**
 * Add a new user at the end of the users list. Make sure the id is unique.
 */
const addUserAtListEnd = () => {
  const newUser = {
    name: "Jared",
    username: "jared_oo",
    age: 19,
    gender: "M",
    isOnline: true,
  };

  const sortedUsersDescendingById = getSortedUsers(users, sortTypes.DESC, "id");
  const maxId = sortedUsersDescendingById[0].id;
  newUser.id = maxId + 1;

  users.push(newUser);
  console.log(users);
};

addUserAtListEnd();

/**
 * Add a new user at the beginning of the users list. Make sure the id is unique.
 */
const addUserAtListStart = () => {
  const newUser = {
    name: "Jared",
    username: "jared_oo",
    age: 19,
    gender: "M",
    isOnline: true,
  };

  const sortedUsersDescendingById = getSortedUsers(users, sortTypes.DESC, "id");
  const maxId = sortedUsersDescendingById[0].id;
  newUser.id = maxId + 1;

  users.unshift(newUser);
  console.log(users);
};
addUserAtListStart();

/**
 * Delete the first user in the users list.
 */

const deleteFirstUser = () => {
  users.shift();
  console.log(users);
};
deleteFirstUser();

/**
 * Delete the last user in the users list.
 */
const deleteLastUser = () => {
  users.pop();
  console.log(users);
};
deleteLastUser();

/**
 * Sort users ascending by age
 */
const sortUsersByAge = () => {
  const sortedUsers = getSortedUsers(users, sortTypes.ASC, "age");
  console.log(sortedUsers);

  return sortedUsers;
};

sortUsersByAge();

/**
 * Search user by id in the users list
 */
const getUserById = (userId) => {
  const user = users.find((user) => user.id === userId);
  console.log(user);

  return user;
};
getUserById(5);
getUserById(90);

/**
 * Return all the users that are online
 */
const getOnlineUsers = () => {
  const onlineUsers = users.filter((user) => user.isOnline === true);
  console.log(onlineUsers);

  return onlineUsers;
};
getOnlineUsers();

/**
 * Return a new list containing only the usernames
 * Return list: ["janed0e", "jooo3", ...]
 */
const getUsernames = () => {
  const usernames = users.map((user) => user.username);
  console.log(usernames);

  return usernames;
};

/**
 * Check if there is at least one user online
 */
const checkIfAtLeastOneUserIsOnline = () => {
  const isAtLeastOneUserOnline = users.some((user) => user.isOnline === true);
  console.log(isAtLeastOneUserOnline);

  return isAtLeastOneUserOnline;
};

/**
 * Check if all users are online
 */
const checkIfAllUsersAreOnline = () => {
  const areAllUsersOnline = users.every((user) => user.isOnline === true);
  console.log(areAllUsersOnline);

  return areAllUsersOnline;
};

/**
 * Change the isOnline status for each user to be true.
 */
const setUserOnline = () => {
  users.forEach((user) => {
    user.isOnline = true;
  });

  console.log(users);
};

/**
 * Get the percent of the online users
 */
const getOnlineUsersPercent = () => {
  const onlineUsers = getOnlineUsers();
  const count = onlineUsers.length;
  const totalUsers = users.length;

  const percent = (count / totalUsers) * 100;
  console.log(percent);

  return percent;
};

/**
 * Get the number of the male users
 */
const getMaleUsersCount = () => {
  const maleUsers = users.filter((user) => user.gender === genders.MALE);
  const count = maleUsers.length;

  console.log(count);
  return count;
};

/**
 * Get the maximum age of the online users
 */
const getMaxAgeOfOnlineUsers = () => {
  const onlineUsers = getOnlineUsers();
  const sortedUsersByAge = getSortedUsers(onlineUsers, sortTypes.DESC, "age");
  const maxAgeUser = sortedUsersByAge[0];
  const maxAge = maxAgeUser.age;

  console.log(maxAge);
  return maxAge;
};

/**
 * Get the minimum age of the online female users
 */
const getMinAgeOfOnlineUsers = () => {
  const onlineFemaleUsers = users.filter(
    (user) => user.gender === genders.FEMALE && user.isOnline === true
  );
  const sortedFemaleUsersByAge = getSortedUsers(
    onlineFemaleUsers,
    sortTypes.ASC,
    "age"
  );

  const minAgeUser = sortedFemaleUsersByAge[0];
  const minAge = minAgeUser.age;

  console.log(minAge);
  return minAge;
};

/**
 * Get all the users that have at least one number in the username
 */
const getUsersWithNumbersInUsername = () => {
  const numbersAsStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const usersWithNumbersInUsername = users.filter((user) => {
    if (user.username) {
      const lettersArray = user.username.split();
      const hasAtLeastOneLetter = lettersArray.some((letter) =>
        numbersAsStrings.includes(letter)
      );

      if (hasAtLeastOneLetter) {
        return user;
      }
    }
  });

  console.log(usersWithNumbersInUsername);
  return usersWithNumbersInUsername;
};

/**
 * Update the age of the user on position 5 (index 4)
 */

const updateUserAtPosition = (index = 4) => {
  if (users && users[index] && users[index].age) {
    users[index].age = 80;
  }

  console.log(users[index]);
};
