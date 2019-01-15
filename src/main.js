import { Nasa } from './nasa.js'
import $ from 'jquery'

$(document).ready(function() {
  let nasa = new Nasa();
  let promise = nasa.getMarsImage($("#user-input").val());
  promise.then(function(response) {
    let body = JSON.parse(response);
    body.photos.forEach(function(image){
      $("#nasa").append(`<img src="${image.img_src}">`)
    });
  }, function(error) {
    $("#error").text(`${error.message}`)
  });
})
