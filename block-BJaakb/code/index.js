function fetch(url) {
  return Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload(() => {
      res(12).then(() => {
        console.log(12);
      });
    });
    xhr.onerror(() => {
      rej("something went wrong");
    });
  });
}
