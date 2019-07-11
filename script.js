document.getElementById('button').addEventListener('click', function() {

  var year = document.getElementById('year').value;
  year = parseInt(year);

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    document.getElementById('result').innerHTML = year + ' est une année bissextile.';
    document.getElementById('result').className = 'text-success';
  } else {
    document.getElementById('result').innerHTML = year + ' n\'est pas une année bissextile.';
    document.getElementById('result').className = 'text-danger';
  }

});
