const baseURL = 'http://localhost:8000/api';
export const fetchAPI = async (endpoint:any, data:any , method = 'GET') => {
  const url = `${baseURL}/${endpoint}`
  

  if(method === 'GET'){
    const res = await fetch(url);
    return await res.json();
  }else {
    const res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) 
    });
    return await res.json();
  }
}

export const fetchWithTokenAPI = async (endpoint?:any, data?:any, method = 'GET') => {
  const url = `${baseURL}/${endpoint}`
  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    const res = await fetch(url, {
      headers: {
        'x-token': token
      }
    });
    return await res.json();
  } else {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    });
    return await res.json();
  }
}
