let loginPage = document.querySelector('.go')
loginPage.addEventListener('click', function(){
    document.querySelector('.modal').className += " hide"
// document.querySelector(.modal)
})



function getPilihanComputer(){
    const comp = Math.random();
    if( comp < 0.20) return 'scissors';
    if( comp < 0.40) return 'paper';
    if( comp < 0.60) return 'rock';
    if( comp < 0.80) return 'lizard';
    return 'spock';
} 



function getHasil(computer, player){
	if( player == computer ) return 'DRAW!';
    const rule = {
        lizard: ["spock", "paper"],
      
        paper: ["rock", "spock"],
      
        rock: ["lizard", "scissors"],
      
        scissors: ["paper", "lizard"],
      
        spock: ["scissors", "rock"],
      };
	for (const x of rule[player]) {
        if(computer === x){
            return "WIN!"
        }
    }
    return 'LOSE!'
}

//function ini dibuat agar seolah olah komputer mengacak pilihannya dengan animasi
function putar(){
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['lizard', 'paper', 'rock', 'scissors', 'spock'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){ //membuat tenggat waktu putar untuk function agar tidak berputar terus menerus
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'picHackathon2/' + gambar[i++] + '.png');// disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar, extnya di sesuaikan yes
	if(i == gambar.length - 1) i = 0;
	}, 100)
}

let scoreComp = 0;
let scorePlayer = 0;
let round = 1;


const pilihan = document.querySelectorAll('span img');//disini kita memilih semua image yg akan jadi pilihan player yg dibuat sebagai list 
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;// className artinya mengambil nama class yg sudah kita pilih
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		
        const imgPlayer = document.querySelector('.img-player');
        imgPlayer.setAttribute('src', 'picHackathon2/' + pilihanPlayer + '.png');

		putar();

		//agar tidak langsung keluar hasilnya ketika pilihan computer sedang berputar, maka function dibawah dipause dulu selama 1 detik

		setTimeout(function(){

		    const inputHasil = document.querySelector('.info');//input di dalam() class pada element untuk win/lose/draw
		    inputHasil.innerHTML = hasil
		    const imgComputer = document.querySelector('.img-komputer');//isi disini class pada gambar computer
		    imgComputer.setAttribute('src', 'picHackathon2/' + pilihanComputer + '.png');// disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar
            

;
            // console.log(document.getElementById("player2-score").innerText)
            if(hasil === 'WIN!'){
                scorePlayer++
                round++
            }else if (hasil === 'LOSE!'){
                scoreComp++
                round++
            }else {
                round++
            };
            const ronde = document.getElementById('round-message')//isi disini class pada ronde ke berapanya
            ronde.innerHTML = 'ROUND ' + round
            const skorPemain = document.getElementById("player1-score")//isi disini class pada jumlah menang player ke berapanya
            skorPemain.innerText = scorePlayer
            const skorKomp = document.getElementById("player2-score")//isi disini class pada jumlah menang komputer ke berapanya
            skorKomp.innerText = scoreComp


        }, 1000);

    });
});

// let endResult = ''
// let maxRound = document.getElementById() // ambil dari 
// if(maxRound === round){
//     //tampilkan end result

//     if(scorePlayer > scoreComp){
//         endResult = 'Congratulations you WIN! but that is just a fluke!'
//     }else if(scorePlayer < scoreComp){
//         endResult = `So sad, you LOSE! be better next time loser ho ho ho`
//     }else{
//         endResult = `I cant believe we had a DRAW! i want a rematch!`
//     }
// }
/*







*/




