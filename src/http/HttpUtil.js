import 'whatwg-fetch'

export default class HttpUtil {
  get(hostname, url, obj) {
    console.log('vai chamar fetch !!!');
    return fetch(`${hostname}${url}`);
  }

  post(hostname, url, obj) {
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(obj)
    };
    
    return fetch(`${hostname}${url}`, options);
  }
}
