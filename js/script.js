const btn = document.querySelector(".btn"),
    game_cont = document.querySelector(".game"),
    hint = document.querySelector(".hint"),
    popup = document.querySelector(".hint-box"),
    hint_text = document.querySelector(".hint-text"),
    leave = document.querySelectorAll(".leave"),
    kb = document.querySelector(".keyboard"),
    findWord = document.querySelector(".word"),
    count = document.querySelector(".count"),
    hangman = document.querySelector(".man img"),
    max = 6,
    modal = document.querySelector(".modal"),
    loader = document.querySelector(".loader"),
    pr = document.querySelector(".foiz"),
    settingsBtn = document.querySelector(".settings"),
    settings = document.querySelector(".settings_menu"),
    setBtn = document.querySelectorAll(".settings_menu button"),
    gameBox = document.querySelector(".game"),
    invite = document.querySelector(".invite"),
    about = document.querySelector(".about"),
    toggle = document.querySelectorAll(".toggle"),
    sounds = document.querySelector(".sound"),
    music = document.querySelector(".music"),
replayBtn = document.querySelector(".replay");

const background = new Audio("/sounds/Music.mp3"),
    correctSound = new Audio("/sounds/correct.mp3"),
    enter = new Audio("/sounds/enter.mp3"),
    fail = new Audio("/sounds/fail.mp3"),
    win = new Audio("/sounds/win.mp3"),
    button = new Audio("/sounds/button.mp3"),
    wrong = new Audio("/sounds/wrong.mp3");

settingsBtn.addEventListener("click", () => {
    button.play();
    settings.classList.toggle("active");
});

let num = 0;

window.addEventListener("load", () => {
    setInterval(() => {
        if (num !== 100) {
            num++;
            pr.innerText = `${num}%`;
        } else {
            loader.classList.add("disactive");
        }
    }, 10);
});

let current, wrongCount, correct;

const hint_open = () => {
    setTimeout(() => {
        popup.classList.add("active");
    }, 168);
    setTimeout(() => {
        popup.classList.remove("active");
    }, 3168);
};

btn.addEventListener("click", () => {
    game_cont.classList.add("start");
    enter.play();
    hint_open();
});
hint.addEventListener("click", () => {
    popup.classList.toggle("active");
    button.play();
});
leave.forEach((e) => {
    e.addEventListener("click", () => {
        game_cont.classList.remove("start");
        modal.classList.remove("active");

        button.play();
        RandomWord();
    });
});

const qayta = () => {
    correct = [];
    wrongCount = 0;
    hangman.src = `images/character/${wrongCount}.svg`;
    count.innerText = `${wrongCount} / ${max}`;
    kb.querySelectorAll("button").forEach((key) => {
        key.disabled = false;
        key.classList.remove("dis");
    });
    findWord.innerHTML = current
        .split("")
        .map(() => `<h1 class="letter"></h1>`)
        .join(``);
    modal.classList.remove("active");
    hint_open();
};

const RandomWord = () => {
    const { word, hint } = words[Math.floor(Math.random() * words.length)];
    current = word;
    hint_text.innerText = hint;
    findWord.innerHTML = word
        .split("")
        .map(() => `<h1 class="letter"></h1>`)
        .join(``);
    qayta();
};

const gameOver = (victory) => {
    if (victory) {
        win.play();
    } else {
        fail.play();
    }
    setTimeout(() => {
        const modalText = victory ? `Siz` : `to'g'ri so'z`,
            modalText2 = victory ? `so'zini topdingiz!` : `edi`;
        // modal.querySelector("img").src = `images/${victory ? "win" : "lose"}.gif` ;
        modal.querySelector("h1").innerText = `${
            victory ? "Tabriklaymiz!" : "O'yin tugadi!"
        }`;
        modal.querySelector(
            "h4"
        ).innerHTML = `${modalText} <b>${current}</b> ${modalText2}`;
        modal.classList.add("active");
    }, 168);
};

const click = (key, clicked) => {
    if (current.includes(clicked)) {
        [...current].forEach((letter, i) => {
            if (letter === clicked) {
                correct.push(letter);
                findWord.querySelectorAll("h1")[i].innerText = letter;
                findWord.querySelectorAll("h1")[i].classList.add("g");

                correctSound.play();
            }
        });
    } else {
        wrongCount++;
        hangman.src = `images/character/${wrongCount}.svg`;
        wrong.play();
    }
    key.disabled = true;
    key.classList.add("dis");
    count.innerText = `${wrongCount} / ${max}`;

    if (wrongCount === max) return gameOver(false);
    if (correct.length === current.length) return gameOver(true);
};
for (let i = 65; i <= 90; i++) {
    const key = document.createElement("button");
    key.innerText = String.fromCharCode(i);
    kb.appendChild(key);
    key.addEventListener("click", (e) => {
        click(e.target, String.fromCharCode(i));
    });
    const keypress = () => {
        document.addEventListener("keydown", (e) => {
            if (e.key === String.fromCharCode(i).toLowerCase()) {
                if (key.disabled == true) {
                    return false;
                } else {
                    click(key, String.fromCharCode(i));
                }
            }
        });
    };
    btn.addEventListener("click", keypress);
}
RandomWord();

replayBtn.addEventListener("click", RandomWord);

setBtn.forEach((e) => {
    e.addEventListener("click", () => {
        button.play();
        hint_open();
    });
});

let text = `Men bilan birga jalloddan qoching! Yashirin so'zlarni toping va g'alaba qozoning!`;

const telegram = `https://t.me/share/url?url=https://jallod.netlify.app&&text=${text}`;

invite.addEventListener("click", () => {
    button.play();
    window.open((url = telegram), (target = "blank"));
});

about.addEventListener("click", () => {
    button.play();
    alert("bu funksiya vaqtincha ishlamayapti.");
});

toggle.forEach((e) =>{
    e.addEventListener("click", () => {
        button.play();
        if (e.classList.contains("off")) {
            e.classList.remove("off");
        } else {
            e.classList.add("off");
        }
    });
})

sounds.addEventListener("click", () =>{
    if(sounds.classList.contains("off")){
        wrong.muted =!wrong.muted;
        enter.muted =!enter.muted;
        fail.muted =!fail.muted;
        win.muted =!win.muted;
        button.muted =!button.muted;
        correctSound.muted =!correctSound.muted;
    }else{
        wrong.muted = false;
        enter.muted = false;
        fail.muted = false;
        win.muted = false;
        button.muted = false;
        correctSound.muted = false;
    }
})

music.addEventListener("click", () =>{
    if (music.classList.contains("off")) {
        background.pause()
    }else{
        background.play()
        background.volume = 0.3
    }
})

document.addEventListener("keydown", (e) =>{
    if(e.key === AltKey){
        win.play()
    }
})