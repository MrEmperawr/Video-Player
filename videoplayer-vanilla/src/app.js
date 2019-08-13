fetch("https://api.myjson.com/bins/so5pk")
    .then(data => res.json(data))
    .then(data => console.log(data));