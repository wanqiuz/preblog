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

export const scrollToAnchor = (anchorName) => {
  if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }
  }
}