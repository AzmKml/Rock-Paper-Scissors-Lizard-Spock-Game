function getPilihanComputer(){
    const comp = Math.random();
    if( comp < 0.20) return 'Scissor';
    if( comp < 0.40) return 'Paper';
    if( comp < 0.60) return 'Rock';
    if( comp < 0.80) return 'Lizard';
    return 'Spock';
} 

let comp = getPilihanComputer()

function getHasil(player, computer){
	if( player == computer ) return 'DRAW!';
    const rule = {
        Lizard: ["Spock", "Paper"],
      
        Paper: ["Rock", "Spock"],
      
        Rock: ["Lizard", "Scissor"],
      
        Scissor: ["Paper", "Lizard"],
      
        Spock: ["Scissor", "Rock"],
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
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['Lizard', 'Paper', 'Rock', 'Scissor', 'Spock'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){ //membuat tenggat waktu putar untuk function agar tidak berputar terus menerus
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');// disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar, extnya di sesuaikan yes
	if(i == gambar.length) i = 0;
	}, 100)
}

const pilihan = document.querySelectorAll('li img');//disini kita memilih semua image yg akan jadi pilihan player yg dibuat sebagai list 
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;// className artinya mengambil nama class yg sudah kita pilih
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		
		putar();

		//agar tidak langsung keluar hasilnya ketika pilihan computer sedang berputar, maka function dibawah dipause dulu selama 1 detik
		setTimeout(function(){

		    const inputHasil = document.querySelector('.info');//input di dalam() class pada element untuk win/lose/draw
		    inputHasil.innerHTML = hasil
		    const imgComputer = document.querySelector('.img-computer');//isi disini class pada gambar computer
		    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');// disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar
	
            let round = 1;
            let scoreComp = 0;
            let scorePlayer = 0;
            if(hasil === 'WIN!'){
                scorePlayer++
                round++
            }else if (hasil === 'LOSE!'){
                scoreComp++
                round++
            }else {
                round++
            };
            const ronde = document.querySelector('.info')//isi disini class pada ronde ke berapanya
            ronde.innerHTML = round
            const skorPemain = document.querySelector('.info')//isi disini class pada jumlah menang player ke berapanya
            skorPemain.innerHTML = scorePlayer
            const skorKomp = document.querySelector('.info')//isi disini class pada jumlah menang komputer ke berapanya
            skorKomp.innerHTML = scoreComp


        }, 1000);

    });
});






