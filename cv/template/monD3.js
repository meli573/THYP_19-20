var urlData = "mCsv.csv"
d3.csv(urlData).then(function(data) {
    console.log(data);
  });