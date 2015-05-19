$( document ).ready(function() {
	console.log(siteNaam);
	console.log(submitUrl);

	document.title = siteNaam;
	
	$('h1').html(siteNaam);
	$('form').attr("action", submitUrl);	
	
	fasta($('#fasta-optie').val());

	$('#fasta-optie').on('change', function (e) {
		fasta($(this).val());
	});

	
	
});

function fasta(v){
	if(v == 'fasta'){
		$('.type-selection').css({'display':'block'});
	}else{
		$('.type-selection').css({'display':'none'});
	}
}

