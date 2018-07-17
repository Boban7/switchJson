$(document).ready(function(){
	let currentObjId = 0;
	$('#js').html('Hello, hello!');
	fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response => response.json())
		.then(json => {

			$galery(0);
			$midle(0);

			function $galery(n){
				function imager(i) {return $('<img/>').attr({
						'id'	: 'galeryItem' + i,
						'src'	: json[i].url,
						'alt'	: 'image',
						'width'	: '20%',
						'height': 'auto',
						'class'	: 'clickableImg'
					});
				}
				for(var i = n; i < n + 5; i++){
					$('#galery5').append(imager(i));
				}
			}

			$('#galeryItem0').addClass('current');

			function changeCurrent(n, old){
				$('#galeryItem' + n).addClass('current');
				$('#galeryItem' + old).toggleClass('current');
			}

			function $midle(n){
				$('#midleHeading').html(json[n].id + '. ' + json[n].title);
				$('#demoImage').attr('src', json[n].url);
			}

			$('#forward').click(function(){
				if(currentObjId < json.length - 1){
					currentObjId++;
					$midle(currentObjId);

					if(currentObjId % 5 === 0){
						$('#galery5').empty();
						$galery(currentObjId);
					}
					changeCurrent(currentObjId, currentObjId - 1);
				}
			});

			$('#back').click(function(){
				if(currentObjId > 0){
					currentObjId--;
					$midle(currentObjId);

					if((currentObjId + 1) % 5 === 0){
						$('#galery5').empty();
						$galery(currentObjId - 4);
					}
					changeCurrent(currentObjId, currentObjId + 1);
				}
			});

			$('#galery5').on('click', 'img.clickableImg', function(){
				console.log(this.id.slice(10));
				$('#galeryItem' + currentObjId).toggleClass('current');
				currentObjId = this.id.slice(10);
				$('#galeryItem' + currentObjId).toggleClass('current');
				$midle(currentObjId);
			});
	});

	
});



/*fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
 	.then(json => {
 		for(var i = 0; i < json.length; i++){
 			$('#demo').append('<h3>' + json[i].id + '. ' +
 			 json[i].title + '.</h3><p>' + json[i].body + '.</p>');
 		}
 	});

{photos
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
  },
 	*/