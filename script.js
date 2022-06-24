
let username = ''
let maxRound = 0
let loginPage = document.querySelector('.go')
//document.querySelector('.go')document.getElementById("style2")
loginPage.addEventListener('click', function(){
    username = document.getElementById('style1').value
    document.querySelector('.name').innerText = username
    maxRound = document.querySelector('.roundNeeded').value
    console.log(username, maxRound)
    if(username && maxRound){
    document.querySelector('.modal').className += " hide"
    }else{
        return alert `Input are invalid`
    }
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
	if( player == computer ) return "IT'S DRAW!";
    const rule = {
        lizard: ["spock", "paper"],
      
        paper: ["rock", "spock"],
      
        rock: ["lizard", "scissors"],
      
        scissors: ["paper", "lizard"],
      
        spock: ["scissors", "rock"],
      };
	for (const x of rule[player]) {
        if(computer === x){
            return "IT'S WIN!"
        }
    }
    return "IT'S LOSE"
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
const ronde = document.getElementById('round-message')//isi disini class pada ronde ke berapanya
const skorPemain = document.getElementById("player1-score")//isi disini class pada jumlah menang player ke berapanya
const skorKomp = document.getElementById("player2-score")//isi disini class pada jumlah menang komputer ke berapanya




const pilihan = document.querySelectorAll('span img');//disini kita memilih semua image yg akan jadi pilihan player yg dibuat sebagai list 
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;// className artinya mengambil nama class yg sudah kita pilih
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		// console.log('asd')
        const imgPlayer = document.querySelector('.img-player');
        imgPlayer.setAttribute('src', 'picHackathon2/' + pilihanPlayer + '.png');

		putar();

		//agar tidak langsung keluar hasilnya ketika pilihan computer sedang berputar, maka function dibawah dipause dulu selama 1 detik

 



		setTimeout(function(){

		    const inputHasil = document.querySelector('.info');//input di dalam() class pada element untuk win/lose/draw
		    inputHasil.innerHTML = hasil
		    const imgComputer = document.querySelector('.img-komputer');//isi disini class pada gambar computer
		    imgComputer.setAttribute('src', 'picHackathon2/' + pilihanComputer + '.png');// disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar
            
            let endResult = ''//dom
            console.log(maxRound, round)
            if(Number(maxRound) === round){
                
                if(scorePlayer > scoreComp){
                    endResult = 'Congratulations you WIN! but that is just a fluke!'
                }else if(scorePlayer < scoreComp){
                    endResult = `So sad, you LOSE! be better next time loser ho ho ho`
                }else{
                    endResult = `I cant believe we had a DRAW! i want a rematch!`
                }
                alert(endResult)
            }

;
            // console.log(document.getElementById("player2-score").innerText)
            if(hasil === "IT'S WIN!"){
                scorePlayer++
                round++
            }else if (hasil === "IT'S LOSE"){
                scoreComp++
                round++
            }else {
                round++
            };
            ronde.innerHTML = 'ROUND ' + round
            skorPemain.innerText = scorePlayer
            skorKomp.innerText = scoreComp


        }, 1000);

    });
});


let reset = document.querySelector('.reset')
reset.addEventListener('click', function(){
    ronde.innerHTML = 'ROUND ' + 1
    skorPemain.innerText = 0
    skorKomp.innerText = 0
    scoreComp = 0;
    scorePlayer = 0;
    round = 1;
    const inputHasil = document.querySelector('.info');//input di dalam() class pada element untuk win/lose/draw
    inputHasil.innerText = 'RESET'
    const imgPlayer = document.querySelector('.img-player');
    imgPlayer.removeAttribute('src')
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.removeAttribute('src')
    document.querySelector('.modal').className = "modal"
    document.getElementById('style1').value = ''
    document.querySelector('.roundNeeded').value = ''
})




/*







*/




