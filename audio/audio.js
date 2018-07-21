
	
	

	function inicia(){
		var musica = document.getElementById("som");
		var controleSom = document.getElementById("controle");
		var play = document.getElementById("image");
		var pause = document.getElementById("image2");

		play.addEventListener('click',function(){
			musica.play();

		},false);

		pause.addEventListener('click',function(){
			musica.pause();

		},false);
	}
		
	var p = document.getElementById('image');
	var s = document.getElementById('image2');
	s.style.display = ('none');
		

	function altera(i) {    

		if (i == 1) {

        document.getElementById("image").src="pause.png";
			s.style.display = ('none');
		p.style.display = ('none');
		s.style.display = ('block');

           

    } else {       

    	document.getElementById("image2").src="play.png";
		p.style.display = ('block');
		s.style.display = ('none');


    	  

    }

}
 		window.onload = inicia;
  	