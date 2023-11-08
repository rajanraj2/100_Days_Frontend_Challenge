// Link to problem :
// https://codedamn.com/problem/89zW8tz5ikySK7RLKiLPo?challengeList=100-days-of-frontend

import fs from 'fs'

// Simulate an API call to get users
const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{id: 1, name: 'User 1'}, {id: 2, name: 'User 2'}, {id: 3, name: 'User 3'}]);
    }, 1000);
  });
};

// Simulate an API call to get posts
const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}, {id: 3, title: 'Post 3'}]);
    }, 1000);
  });
};

// Use Promise.all() to call getUsers and getPosts concurrently
Promise.all([getUsers(), getPosts()])
  .then((results) => {
    console.log('Users:', results[0]);
    console.log('Posts:', results[1]);
  })
  .catch((error) => {
    console.error(error);
  });

console.log('Hello world');

export { getUsers, getPosts };
