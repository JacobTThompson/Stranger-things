// this will be for the API end points
const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT`;
const token = sessionStorage.getItem("token");

export async function getPosts(){
  const response = await fetch(`${BASE_URL}/posts`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }})
  const result = await response.json();
  console.log(result);
  return result;
}

export async function register(username, password){
  try{
    const response = await fetch(
      `${BASE_URL}/users/register`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          }
        })
      }
    )

    const result = await response.json();
    console.log(result);
    return result;
  }catch(error){
    console.error(error);
  }
}

export async function login({username, password}) {

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        },
      }),
    });

    console.log("Login Response:", response); // Log the entire response

    if (response.ok) {
      const data = await response.json(); // Parse the response JSON
      console.log("Login Data:", data); // Log the parsed data
      return data; // Return the parsed data
    } else {
      throw new Error(`Login failed with status ${response.status}`);
    }
  } catch (err) {
    console.error("Login Error:", err);
    throw err;
  }
}

export async function makePost(token, posts){
  try{
    const response = await fetch(
      `${BASE_URL}/posts`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: posts.title,
            description: posts.description,
            price: posts.price,
            location: posts.location,
            willDeliver: posts.willDeliver
          },
        }),
      });

      const result = await response.json();
      console.log(result);
      return result;
  }catch(error){
    console.error(error);
  }
}

export async function deletePost(token, _Id){
  try{
    const response = await fetch(
      `${BASE_URL}/posts/${_Id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      const result = await response.json();
      return result;
  }catch(e){
    console.error(e);
  }
}

export function getToken(){
  return sessionStorage.getItem("token") || null;
};

export function userLogin(token){
  sessionStorage.setItem("token", token);
};

export function userLogout(){
  sessionStorage.removeItem("token");
};

export function isLoggedIn(){
  return getToken() !== null;
};

export function makeHeaders(){
  const headers = {
    "Content-Type": "application/json",
  };

  const tokenValue = getToken();

  if (tokenValue) {
    headers["Authorization"] = `Bearer ${tokenValue}`;
  }

  return headers;
};

export async function getUserData(token){
  try{
    const response = await fetch(`${BASE_URL}/users/me`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const result = await response.json();
    return result;
  }catch(error){
    console.error(error);
  }
}

  