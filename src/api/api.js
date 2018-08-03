const getURL = (url) => '`http://139.224.135.86:8080/${url}';

export const login = (action) => {
  return fetch(
    action.payload.url,
    {
      // method: "GET",
      // mode: "no-cors",//可以在这设置跨域
      headers: {
        "Content-Type": "text/plain"
      },
      //params: action.payload.params
    }
  ).then(response => response.json())
    .then(response => {
      return ({
        response
      });
    }).catch(error => {
      return ({
        error
      });
    });
};

/**
 * 将对象转成 a=1&b=2的形式
 * @param object 对象
 */
function objectToString(object, array = [], index = 0) {
  for (let item in object) {
    array[index] = [item, object[item]];
  }
  return new URLSearchParams(arr).toString();
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param params 请求参数
 * @param method 请求方式
 */
function commonFetch(url, params, method = 'GET', options) {
  const searchString = objectToString(params);
  let initObject = {
    method: method,
  }
  if (method === 'GET') {
    url += '?' + searchString;
  } else {
    initObject.body = body;
  }
  if (options.cookie != undefined) {
    initObject.credentials = 'include'; // 强制加入凭据头
  }
  if(options.headers != undefined && typeof options.headers == 'object') {
    initObject.headers = new Headers(options.headers);
  } else {
    initObject.headers = new Headers({
      'Accept': 'application/json', // 通过头指定，获取的数据类型是JSON
      'Content-Type': 'application/x-www-form-urlencoded',// 指定提交方式为表单提交
    })
  }
  fetch(url, initObject).then(res => {
    return res.json();
  }).then(res => {
    return res;
  })
}

/**
 * GET请求
 * @param url 请求地址
 * @param params 请求参数
 */
 export function get(url, params, options={}) {
  return commonFetch(url, params, 'GET', options);
 }

/**
 * POST请求
 * @param url 请求地址
 * @param params 请求参数
 */
export function post(url, params, options={}) {
  return commonFetch(url, params, 'POST', options);
}

export const scrollToAnchor = (anchorName) => {
  if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }
  }
}