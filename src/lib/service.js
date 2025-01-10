import axios from 'axios';

const getData = async (userId) => {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const data = {
      ...userResponse.data,
      posts: postsResponse.data
    };

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default getData;