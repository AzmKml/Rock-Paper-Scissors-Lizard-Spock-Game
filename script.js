let username = ''
let maxRound = 0
let loginPage = document.querySelector('.go')
//document.querySelector('.go')document.getElementById("style2")
loginPage.addEventListener('click', function () {
    username = document.getElementById('style1').value
    document.querySelector('.name').innerText = username
    maxRound = document.querySelector('.roundNeeded').value
    console.log(username, maxRound)
    if (username && maxRound) {
        document.querySelector('.modal').className += " hide"
    } else {
        return alert `Input are invalid`
    }
})



function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.20) return 'scissors';
    if (comp < 0.40) return 'paper';
    if (comp < 0.60) return 'rock';
    if (comp < 0.80) return 'lizard';
    return 'spock';
}



function getHasil(computer, player) {
    if (player == computer) return "IT'S DRAW!";
    const rule = {
        lizard: ["spock", "paper"],

        paper: ["rock", "spock"],

        rock: ["lizard", "scissors"],

        scissors: ["paper", "lizard"],

        spock: ["scissors", "rock"],
    };
    for (const x of rule[player]) {
        if (computer === x) {
            return "IT'S WIN!"
        }
    }
    return "You Loosed !"
}

//function ini dibuat agar seolah olah komputer mengacak pilihannya dengan animasi
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['lizard', 'paper', 'rock', 'scissors', 'spock'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) { //membuat tenggat waktu putar untuk function agar tidak berputar terus menerus
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'picHackathon2/' + gambar[i++] + '.png'); // disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar, extnya di sesuaikan yes
        if (i == gambar.length - 1) i = 0;
    }, 100)
}

let scoreComp = 0;
let scorePlayer = 0;
let round = 0;
const ronde = document.getElementById('round-message') //isi disini class pada ronde ke berapanya
const skorPemain = document.getElementById("player1-score") //isi disini class pada jumlah menang player ke berapanya
const skorKomp = document.getElementById("player2-score") //isi disini class pada jumlah menang komputer ke berapanya
let hidePilihan = document.getElementsByClassName('available-options')[0]



const pilihan = document.querySelectorAll('div img'); //disini kita memilih semua image yg akan jadi pilihan player yg dibuat sebagai list 
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        // console.log(pil)
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className; // className artinya mengambil nama class yg sudah kita pilih
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        // console.log('asd')
        const imgPlayer = document.querySelector('.img-player');
        imgPlayer.setAttribute('src', 'picHackathon2/' + pilihanPlayer + '.png');



        hidePilihan.className += ' hide'
        console.log(hidePilihan)
        putar();

        //agar tidak langsung keluar hasilnya ketika pilihan computer sedang berputar, maka function dibawah dipause dulu selama 1 detik





        setTimeout(function () {

            const inputHasil = document.querySelector('.info'); //input di dalam() class pada element untuk win/lose/draw
            inputHasil.innerHTML = hasil
            const imgComputer = document.querySelector('.img-komputer'); //isi disini class pada gambar computer
            imgComputer.setAttribute('src', 'picHackathon2/' + pilihanComputer + '.png'); // disini kita memilih nama folder tempat image(img/) terus nama image(pilihanComputer) nama imagenya disamakan sesuai dengan data di array gambar

            let endResult = '' //dom
            console.log(maxRound, round)

            if (Number(maxRound) - 1 === round) {

                if (scorePlayer > scoreComp) {
                    endResult = `You managed to defeat Mr. AI! Now peace will be restored to the whole galaxy.. 
                    or is it?`
                } else if (scorePlayer < scoreComp) {
                    endResult = `Mr. AI defeated you and preparing himself to fight on other galaxies.. but it's not too late to TRY AGAIN!`
                } else {
                    endResult = `YOU and Mr. AI decided to call it a day. It seems both your powers are equal. TRY AGAIN!`
                }
                // alert(endResult)
                setTimeout(function () {


                    document.querySelector('.modal-end').className = "modal-end"
                    document.getElementById('final-result').innerText = endResult
                    hidePilihan.className = "available-options"

                }, 1000)
            } else {
                hidePilihan.className = "available-options"
            }
            if (hasil === "IT'S WIN!") {
                scorePlayer++
                round++
            } else if (hasil === "You Loosed !") {
                scoreComp++
                round++
            } else {
                round++
            };
            ronde.innerHTML = 'ROUND ' + round + '/' + maxRound
            skorPemain.innerText = scorePlayer
            skorKomp.innerText = scoreComp




            ;
            // console.log(document.getElementById("player2-score").innerText)

        }, 1000);

    });
});


let reset = document.querySelector('.end')
reset.addEventListener('click', function () {
    console.log('end')
    ronde.innerHTML = 'ROUND ' + 1
    skorPemain.innerText = 0
    skorKomp.innerText = 0
    scoreComp = 0;
    scorePlayer = 0;
    round = 0;
    document.querySelector('.modal-end').className += " hide"
    const inputHasil = document.querySelector('.info'); //input di dalam() class pada element untuk win/lose/draw
    // inputHasil.innerText = 'RESET'
    const imgPlayer = document.querySelector('.img-player');
    imgPlayer.removeAttribute('src')
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.removeAttribute('src')
    document.querySelector('.modal').className = "modal"
    document.getElementById('style1').value = ''
    document.querySelector('.roundNeeded').value = ''
})

let playagain = document.querySelector('.rematch')
playagain.addEventListener('click', function () {
    console.log('remacth')
    ronde.innerHTML = 'ROUND ' + 1 + ' / ' + maxRound
    skorPemain.innerText = 0
    skorKomp.innerText = 0
    scoreComp = 0;
    scorePlayer = 0;
    round = 0;
    hidePilihan.className = "available-options"
    document.querySelector('.modal-end').className += " hide"
    const inputHasil = document.querySelector('.info'); //input di dalam() class pada element untuk win/lose/draw
    inputHasil.innerText = 'REMATCH'
    const imgPlayer = document.querySelector('.img-player');
    imgPlayer.removeAttribute('src')
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.removeAttribute('src')
    // document.querySelector('.playagain').className += " hide"
})


/*







*/