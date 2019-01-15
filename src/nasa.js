export class Nasa {

  getMarsImage(day) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${day}&api_key=${process.env.API_KEY}`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
