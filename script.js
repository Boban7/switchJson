$(document).ready(function(){
	$('#js').html('Hello, hello!');
	fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response => response.json())
		.then(json => {

			console.log(json[0]);
			$galery(0);

			function $galery(n){
				function imager(i) {return $('<img/>').attr({
						'src': json[i].url,
						'alt': 'image',
						'width':'20%',
						'height':'auto'
					});
				}
				for(var i = n; i < n + 5; i++){
					$('#galery5').append(imager(i));
				}
			}
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