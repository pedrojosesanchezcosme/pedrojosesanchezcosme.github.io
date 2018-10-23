jQuery(document).ready(function( $ ) {

  //Codigo para hacer la animacion de carrusel dependiendo de la zona en la que se encuentre el scroll
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  //Codigo Js para la funciones de movimiento de las gráficas 
  var doughnutData = [{
      value: 70,			//Asigna el valor que corresponde al color
      color: "#1abc9c"		//Asigna el codigo de color para e valor
    },
    {
      value: 30,			//Asigna el valor que corresponde al color
      color: "#ecf0f1"		//Asigna el codigo de color para e valor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 90,				//Asigna el codigo de color para e valor
    color: "#1abc9c"		//Asigna el codigo de color para e valor
  },
  {
    value: 10,				//Asigna el codigo de color para e valor
    color: "#ecf0f1"		//Asigna el codigo de color para e valor				
  }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [{
    value: 65,				//Asigna el codigo de color para e valor
    color: "#1abc9c"		//Asigna el codigo de color para e valor
  },
  {
    value: 35,				//Asigna el codigo de color para e valor
    color: "#ecf0f1"		//Asigna el codigo de color para e valor
  }
  ];
  var myDoughnut = new Chart(document.getElementById("android").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 75,				//Asigna el codigo de color para e valor
    color: "#1abc9c"		//Asigna el codigo de color para e valor
  },
  {
    value: 25,				//Asigna el codigo de color para e valor
    color: "#ecf0f1"		//Asigna el codigo de color para e valor
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 70,				//Asigna el codigo de color para e valor
    color: "#1abc9c"		//Asigna el codigo de color para e valor
  },
  {
    value: 30,				//Asigna el codigo de color para e valor
    color: "#ecf0f1"		//Asigna el codigo de color para e valor
  }
  ];
  var myDoughnut = new Chart(document.getElementById("mysql").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 50,				//Asigna el codigo de color para e valor
    color: "#1abc9c"		//Asigna el codigo de color para e valor
  },
  {
    value: 50,				//Asigna el codigo de color para e valor
    color: "#ecf0f1"		//Asigna el codigo de color para e valor
  }
  ];
  var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);
});
