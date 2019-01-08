// Fundamental Procedures

	// Initializes the game

	var randomHealth;
	var wins = 0;
	var losses = 0;
	var damage = 0;

	$('.menu-btn').on('click',function(){
	$('.menu-text-container').fadeOut();
	$('.game-text-container,.character-container,.dragon-container').fadeIn();
	$( ".weapon" ).css({
				'display':'none'
			});
});

	function characterChange(character){
		if (character != 0){
			weaponCreate(character);
			valueCreate();
			$( ".weapon" ).css({
				'display':'initial'
			});
		}else{
			console.log('No Character Selected');
		}
	};

//Generates Bosses' Health

function generate(){
	randomHealth = Math.floor(Math.random() * ((120-19)+1) + 19);
	$("#total-health").html("Dragon Health: " + randomHealth);

};
generate();

//Generates the weapons

function weaponCreate(character){
	var arsenal = {
		knight: {
			weapons: ['spear', 'bow','sword'],
			source:['assets/weapons/spear.png','assets/weapons/bow.png','assets/weapons/sword.png'],
			figure: 'assets/characters/knight.png'
		},
		soldier: {
			weapons: ['smithandwesson','ak47','50cal'],
			source:['assets/weapons/smithandwesson.png','assets/weapons/ak47.png','assets/weapons/50cal.png'],
			figure: 'assets/characters/soldier.png'
		},
		mage:{
			weapons:['fireblast','soultrap', 'kamehameha'],
			source:['assets/weapons/firefist.png','assets/weapons/destruction.png','assets/weapons/thunder.png'],
			figure: 'assets/characters/mage.png'
		}
	}
	if (character==='knight'){
		$( ".weapon" ).each(function( index ) {
			$( this ).attr('src', arsenal.knight.source[index]);
		});
		$('#character-image').attr('src', arsenal.knight.figure);
	}else if(character==='soldier'){
		$( ".weapon" ).each(function( index ) {
			$( this ).attr('src', arsenal.soldier.source[index]);
		});
		$('#character-image').attr('src', arsenal.soldier.figure);
	}else if(character==='mage'){
		$( ".weapon" ).each(function( index ) {
			$( this ).attr('src', arsenal.mage.source[index]);
		});
		$('#character-image').attr('src', arsenal.mage.figure);
	}
}

//Creates a power number and assigns it to each weapon

function valueCreate (){

	$( ".weapon" ).each(function( index ) {
		var pts = $( this ).attr("data-points", Math.floor((Math.random() * 12) + 1));
        console.log( index + ": " + pts );
});

}

//Updates the counter

$(".weapon").on("click", function counter(){

	var points = ($(this).attr("data-points"))
	points = parseInt(points);
	damage += points;
	$("#yourScore").html("Damage Dealt: " + damage);

if (damage == randomHealth){
	alert("You Win!");
	wins++;
	$("#wins").html("Wins: " + wins);
	generate();
	valueCreate();
	damage = 0;
	$("#yourScore").html("Damage Dealt: " + damage);

} 
else if (damage > randomHealth){
	alert("You Lose!");
	losses++;
	$("#losses").html("Loses: " + losses);
	generate();
	valueCreate();
	damage = 0;
	$("#yourScore").html("Damage Dealt: " + damage);
}


});