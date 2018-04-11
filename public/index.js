var beers;

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);

  request.addEventListener("load", callback);

  request.send();
};

const requestComplete = function(){


  if(this.status !== 200) return;

  populateList(beers);


};

  const app = function(){
    const url = "https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json";
    const button = document.getElementById('beer-list');
    button.addEventListener('click', function(){
    makeRequest(url, requestComplete);
  });

  }

  const populateList = function(beers){
    const select = document.getElementById("beer-list");
    beers.forEach(function(beers){
      var li = document.createElement("li");
      li.innerText = beer.name;
      ul.appendChild(li);

    });
  }



window.addEventListener('load', app);
