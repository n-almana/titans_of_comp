$(document).ready(function() {
	var names = Object.keys(data);
	for (var i=0; i<names.length; i++) {
		$('#list').append('<li>' + names[i] + '</li>');
	};
		$('li').click(function() {
			// alert(this.innerHTML);
			var name = this.innerHTML;
			var newObject = data[name];
			var gender = newObject.gender;
			var bio = newObject.bio;

			if(gender === 'm') {
				$('#males').empty();
				$('#males').append(bio);
			} else {
				$('#females').empty();
				$('#females').append(bio);
			};

		});
});