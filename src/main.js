import { Nasa } from './nasa.js'
import $ from 'jquery'

$(document).ready(function() {
  for(let i = 1; i <= 1000; i++) {
    $("#counter").text(i);
    let nasa = new Nasa();
    let promise = nasa.getMarsImage(i);
    promise.then(function(response) {
      let body = JSON.parse(response);
      body.photos.forEach(function(image){
        $("#nasa").append(`<img src="${image.img_src}">`)
      });
    }, function(error) {
      $("#error").text(`${error.message}`)
    });
  }
})
