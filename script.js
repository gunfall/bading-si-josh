const IMAGES = {

    backgrounds: {
        universityGate: "",   // CHANGE THIS IMAGE: used in Scene 1 (start) and the final escape endings
        hallway:        "https://raw.githubusercontent.com/gunfall/bading-si-josh/refs/heads/main/Screenshot_2026-08-13-18-02-28-766_com.facebook.katana-edit.jpg",   // CHANGE THIS IMAGE: used for Scenes 3, 4, 5, 6 (hallway walking scenes)
        classroom:      "",   // CHANGE THIS IMAGE: used right before the scary video plays
        room:           "",   // CHANGE THIS IMAGE: used when the player follows the goth woman
        ending:         ""    // CHANGE THIS IMAGE: generic dark background shown behind most endings
    },

    characters: {
        player:    "",   // PASTE_PLAYER_IMAGE_LINK_HERE (optional — not shown by default, first-person style)
        dutae:     "https://raw.githubusercontent.com/gunfall/bading-si-josh/refs/heads/main/3483-removebg-preview.png",   // PASTE_DUTAE_IMAGE_LINK_HERE
        bongbong:  "https://raw.githubusercontent.com/gunfall/bading-si-josh/refs/heads/main/3477-removebg-preview.png",   // PASTE_BONGBONG_SAHUR_IMAGE_LINK_HERE
        monster:   "https://raw.githubusercontent.com/gunfall/bading-si-josh/refs/heads/main/3483-removebg-preview.png",   // PASTE_MONSTER_IMAGE_LINK_HERE
        gothWoman: "",   // PASTE_GOTH_WOMAN_IMAGE_LINK_HERE
        student:   "",   // PASTE_STUDENT_IMAGE_LINK_HERE
        angel:     "",   // PASTE_ANGEL_IMAGE_LINK_HERE
        demon:     ""    // PASTE_DEMON_IMAGE_LINK_HERE
    },

    videos: {
        scaryVideo: ""   // PASTE_VIDEO_LINK_HERE — plays in Scene 3 ("Open the room door")
    }
};

const SOUNDS = {
    backgroundMusic: "", // PASTE_MUSIC_LINK_HERE — loops quietly during the whole game
    click:            "", // PASTE_CLICK_SOUND_LINK_HERE — plays on every choice tap
    horror:           ""  // PASTE_HORROR_SOUND_LINK_HERE — plays on jumpscare / monster moments
};


const scenes = {

    // ---------------------------------------------------------------
    // SCENE 1 — UNIVERSITY GATE
    // ---------------------------------------------------------------
    start: {
        background: IMAGES.backgrounds.universityGate, // CHANGE THIS IMAGE: IMAGES.backgrounds.universityGate
        speaker: "Narrator",
        text: "You found yourself at Arellano University gate at midnight. What will you do?",
        choices: [
            { text: "Go and explore.", next: "guardChoice" },
            { text: "Leave and go home.", next: "end_goHomeEarly" }
        ]
    },


    guardChoice: {
        background: IMAGES.backgrounds.universityGate,
        characters: [
            { img: IMAGES.characters.dutae, pos: "left" },      // CHANGE THIS IMAGE: IMAGES.characters.dutae
            { img: IMAGES.characters.bongbong, pos: "right" }   // CHANGE THIS IMAGE: IMAGES.characters.bongbong
        ],
        speaker: "Narrator",
        text: "You walk through the gate and meet two guards. \u201cWho do you want to guide you through Arellano University?\u201d",
        choices: [
            { text: "Dutae", next: "end_dutaeSendHome" },
            { text: "Bongbong Sahur", next: "hallwayLight" }
        ]
    },

    
    hallwayLight: {
        background: IMAGES.backgrounds.hallway, // CHANGE THIS IMAGE: IMAGES.backgrounds.hallway
        characters: [
            { img: IMAGES.characters.bongbong, pos: "right" }
        ],
        speaker: "Narrator",
        text: "While walking through the hallway with Bongbong Sahur, you notice a light coming from one classroom. What will you do?",
        choices: [
            { text: "Open the room door and go inside.", next: "classroomVideo" },
            { text: "Ignore it and continue walking.", next: "monsterAttack" }
        ]
    },

    classroomVideo: {
        background: IMAGES.backgrounds.classroom, // CHANGE THIS IMAGE: IMAGES.backgrounds.classroom
        isVideo: true,
        video: IMAGES.videos.scaryVideo,          // CHANGE THIS VIDEO: IMAGES.videos.scaryVideo
        next: "end_shocked"
    },

    
    monsterAttack: {
        background: IMAGES.backgrounds.hallway,
        characters: [
            { img: IMAGES.characters.bongbong, pos: "left" },
            { img: IMAGES.characters.monster, pos: "right" }  // CHANGE THIS IMAGE: IMAGES.characters.monster
        ],
        speaker: "Narrator",
        text: "A monster suddenly lunges toward Bongbong Sahur! What will you do?",
        flash: true,
        sting: true,
        choices: [
            { text: "Run and leave Bongbong Sahur.", next: "gateDutae" },
            { text: "Help Bongbong Sahur.", next: "gothWoman" }
        ]
    },

    gateDutae: {
        background: IMAGES.backgrounds.universityGate,
        characters: [
            { img: IMAGES.characters.dutae, pos: "center" }
        ],
        speaker: "Dutae",
        text: "You run back to the gate, out of breath. Dutae looks at you. \u201cWhat happened?\u201d What will you say?",
        choices: [
            { text: "Tell him the monster ate Bongbong Sahur.", next: "end_dutaeMonster" },
            { text: "Ignore him and run through the gate.", next: "win_escapedGate" }
        ]
    },

    
    gothWoman: {
        background: IMAGES.backgrounds.hallway,
        characters: [
            { img: IMAGES.characters.bongbong, pos: "left" },
            { img: IMAGES.characters.gothWoman, pos: "right" } // CHANGE THIS IMAGE: IMAGES.characters.gothWoman
        ],
        speaker: "Narrator",
        text: "You punch the monster, and while it's distracted, Bongbong Sahur drives it off. Before you can catch your breath, a mysterious goth woman appears. \u201cCome with me. Bongbong Sahur is dangerous.\u201d Who will you choose?",
        choices: [
            { text: "Bongbong Sahur", next: "cryingStudent" },
            { text: "Goth woman", next: "end_gothWoman" }
        ]
    },

    
    cryingStudent: {
        background: IMAGES.backgrounds.hallway,
        characters: [
            { img: IMAGES.characters.bongbong, pos: "left" },
            { img: IMAGES.characters.student, pos: "right" }   // CHANGE THIS IMAGE: IMAGES.characters.student
        ],
        speaker: "Narrator",
        text: "Further down the hallway you find a student crying, hair messy, his appearance strange. \u201cWhy are you crying?\u201d What will you do?",
        choices: [
            { text: "Laugh at him.", next: "end_studentMonster" },
            { text: "Ignore him and continue walking.", next: "goHomeScene" }
        ]
    },


    goHomeScene: {
        background: IMAGES.backgrounds.hallway,
        characters: [
            { img: IMAGES.characters.bongbong, pos: "center" }
        ],
        speaker: "Bongbong Sahur",
        text: "\u201cIt's getting late. You should go home.\u201d What will you do?",
        choices: [
            { text: "Agree.", next: "end_bongbongTwist" },
            { text: "Don't agree.", next: "angryBongbong" }
        ]
    },

    angryBongbong: {
        background: IMAGES.backgrounds.hallway,
        characters: [
            { img: IMAGES.characters.bongbong, pos: "center" }
        ],
        speaker: "Narrator",
        text: "Bongbong Sahur's expression darkens. What will you do?",
        flash: true,
        choices: [
            { text: "Run.", next: "end_couldntEscape" },
            { text: "Just accept your fate.", next: "angelDemon" }
        ]
    },

    
    angelDemon: {
        background: IMAGES.backgrounds.room, // CHANGE THIS IMAGE: IMAGES.backgrounds.room
        characters: [
            { img: IMAGES.characters.angel, pos: "left" },   // CHANGE THIS IMAGE: IMAGES.characters.angel
            { img: IMAGES.characters.demon, pos: "right" }   // CHANGE THIS IMAGE: IMAGES.characters.demon
        ],
        speaker: "Narrator",
        text: "Light and shadow split apart before you — an angel and a demon. Who will you choose to help you?",
        choices: [
            { text: "Angel", next: "end_angelBetray" },
            { text: "Demon", next: "win_demonEscape" }
        ]
    },

    

    end_goHomeEarly: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "You turned around, walked away from the gate, and arrived home safely at dawn. Some nights are better left unexplored."
    },

    end_dutaeSendHome: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "Dutae leads you back toward the gate. \u201cYou should go home,\u201d he says, and doesn't explain why."
    },

    end_shocked: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "You were shocked by what you saw in that classroom. Some doors should stay closed."
    },

    end_dutaeMonster: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "As the words leave your mouth, Dutae's face twists into something inhuman. He was never the one you should have run to."
    },

    win_escapedGate: {
        isEnding: true,
        win: true,
        banner: "YOU WIN",
        endingText: "You say nothing. You run straight through the gate and don't look back. You escaped through the gate and got home at dawn."
    },

    end_gothWoman: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "You follow the goth woman into a quiet room. The light fades around you. You realize too late that you made the wrong choice."
    },

    end_studentMonster: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "Your laughter cuts short as the student's expression twists into rage, and something far from human rises where he stood."
    },

    end_bongbongTwist: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "You and Bongbong Sahur head for the gate. Halfway there, he calls your name. You turn around — and that was your last mistake."
    },

    end_couldntEscape: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "You run as fast as you can, but the footsteps behind you never fall behind. You couldn't escape."
    },

    end_angelBetray: {
        isEnding: true,
        win: false,
        banner: "THE END",
        endingText: "The angel steps between you and Bongbong Sahur, and for a moment you're safe. Then its expression changes. You thought you were safe, but you trusted the wrong one."
    },

    win_demonEscape: {
        isEnding: true,
        win: true,
        banner: "YOU ESCAPED",
        subBanner: "GOOD ENDING",
        endingText: "The demon meets Bongbong Sahur's gaze and doesn't blink. It clears you a path through the dark, all the way to the gate. You finally get home at dawn."
    }
};




const SAVE_KEY = "arellanoMidnight_save";

const el = {
    titleScreen: document.getElementById("titleScreen"),
    gameScreen: document.getElementById("gameScreen"),
    endingScreen: document.getElementById("endingScreen"),
    btnNewGame: document.getElementById("btnNewGame"),
    btnContinue: document.getElementById("btnContinue"),
    bgA: document.getElementById("bgLayerA"),
    bgB: document.getElementById("bgLayerB"),
    flashLayer: document.getElementById("flashLayer"),
    charLeft: document.getElementById("charLeft"),
    charCenter: document.getElementById("charCenter"),
    charRight: document.getElementById("charRight"),
    videoOverlay: document.getElementById("videoOverlay"),
    scaryVideo: document.getElementById("scaryVideo"),
    storyBox: document.getElementById("storyBox"),
    storyLabel: document.getElementById("storyLabel"),
    storyText: document.getElementById("storyText"),
    choiceBox: document.getElementById("choiceBox"),
    endingBanner: document.getElementById("endingBanner"),
    endingText: document.getElementById("endingText"),
    btnPlayAgain: document.getElementById("btnPlayAgain"),
    btnMute: document.getElementById("btnMute"),
    btnRestart: document.getElementById("btnRestart"),
    audioMusic: document.getElementById("audioMusic"),
    audioClick: document.getElementById("audioClick"),
    audioHorror: document.getElementById("audioHorror")
};

let currentSceneId = "start";
let bgToggle = false; // which of the two bg layers is "active"
let muted = false;

/* ---------- audio helpers (never throw if a link is blank) ---------- */
function safePlay(audioEl, src, { loop = false, volume = 1 } = {}) {
    if (!src) return;
    try {
        if (audioEl.src !== src) audioEl.src = src;
        audioEl.loop = loop;
        audioEl.volume = muted ? 0 : volume;
        audioEl.currentTime = 0;
        audioEl.play().catch(() => {});
    } catch (e) { /* ignore playback errors */ }
}

function playClick() { safePlay(el.audioClick, SOUNDS.click, { volume: 0.7 }); }
function playHorrorSting() { safePlay(el.audioHorror, SOUNDS.horror, { volume: 0.9 }); }
function startMusic() { safePlay(el.audioMusic, SOUNDS.backgroundMusic, { loop: true, volume: 0.35 }); }

el.btnMute.addEventListener("click", () => {
    muted = !muted;
    el.audioMusic.volume = muted ? 0 : 0.35;
    el.btnMute.textContent = muted ? "🔇" : "🔊";
});

/* ---------- background cross-fade ---------- */
function setBackground(url) {
    const showing = bgToggle ? el.bgB : el.bgA;
    const hiding = bgToggle ? el.bgA : el.bgB;
    if (url) showing.style.backgroundImage = `url("${url}")`;
    else showing.style.backgroundImage = "none";
    showing.classList.add("visible");
    hiding.classList.remove("visible");
    bgToggle = !bgToggle;
}

/* ---------- characters ---------- */
function setCharacters(list) {
    const slots = { left: el.charLeft, center: el.charCenter, right: el.charRight };
    Object.values(slots).forEach(node => {
        node.classList.remove("show");
        node.style.display = "none";
        node.src = "";
    });
    (list || []).forEach(c => {
        const node = slots[c.pos];
        if (!node || !c.img) return;
        node.src = c.img;
        node.style.display = "block";
        // trigger the fade/slide-in on the next frame
        requestAnimationFrame(() => node.classList.add("show"));
    });
}

/* ---------- jumpscare flash ---------- */
function triggerFlash() {
    el.flashLayer.classList.remove("flash");
    // reflow to restart animation
    void el.flashLayer.offsetWidth;
    el.flashLayer.classList.add("flash");
}

/* ---------- rendering a normal story scene ---------- */
function renderScene(scene) {
    setBackground(scene.background);
    setCharacters(scene.characters);

    el.storyLabel.textContent = (scene.speaker || "Narrator").toUpperCase();
    el.storyText.textContent = scene.text || "";
    el.storyBox.style.display = "block";

    // restart the fade-in animation on the text box
    el.storyBox.style.animation = "none";
    void el.storyBox.offsetWidth;
    el.storyBox.style.animation = "";

    el.choiceBox.innerHTML = "";
    (scene.choices || []).forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.text.toUpperCase();
        btn.addEventListener("click", () => {
            playClick();
            goToScene(choice.next);
        });
        el.choiceBox.appendChild(btn);
    });

    if (scene.flash) triggerFlash();
    if (scene.sting) playHorrorSting();
}

/* ---------- rendering the video beat ---------- */
function renderVideoScene(scene) {
    setBackground(scene.background);
    setCharacters([]);
    el.storyBox.style.display = "none";
    el.choiceBox.innerHTML = "";

    if (!scene.video) {
        // no video link provided yet — skip straight to the next scene
        goToScene(scene.next);
        return;
    }

    el.videoOverlay.style.display = "flex";
    el.scaryVideo.src = scene.video; // CHANGE THIS VIDEO: IMAGES.videos.scaryVideo (set above in section 1)
    el.scaryVideo.currentTime = 0;
    el.scaryVideo.muted = muted;
    el.scaryVideo.play().catch(() => {
        // autoplay might be blocked — let the user tap the video's own controls
    });

    const onEnded = () => {
        el.scaryVideo.removeEventListener("ended", onEnded);
        el.videoOverlay.style.display = "none";
        goToScene(scene.next);
    };
    el.scaryVideo.addEventListener("ended", onEnded);
}

/* ---------- rendering an ending ---------- */
function renderEnding(scene) {
    el.gameScreen.style.display = "none";
    el.endingScreen.style.display = "flex";
    el.endingBanner.textContent = scene.subBanner
        ? `${scene.banner} \u2014 ${scene.subBanner}`
        : (scene.banner || "THE END");
    el.endingBanner.classList.toggle("win", !!scene.win);
    el.endingText.textContent = scene.endingText || "";
    clearSave();
}

/* ---------- navigation ---------- */
function goToScene(id) {
    const scene = scenes[id];
    if (!scene) {
        console.error("Missing scene:", id);
        return;
    }
    currentSceneId = id;
    saveProgress(id);

    if (scene.isEnding) {
        renderEnding(scene);
        return;
    }
    if (scene.isVideo) {
        renderVideoScene(scene);
        return;
    }
    renderScene(scene);
}

/* ---------- save system ---------- */
function saveProgress(id) {
    try { localStorage.setItem(SAVE_KEY, id); } catch (e) { /* storage unavailable */ }
}
function loadProgress() {
    try { return localStorage.getItem(SAVE_KEY); } catch (e) { return null; }
}
function clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
}

/* ---------- screen switching ---------- */
function showTitle() {
    el.titleScreen.style.display = "flex";
    el.gameScreen.style.display = "none";
    el.endingScreen.style.display = "none";

    const saved = loadProgress();
    el.btnContinue.style.display = (saved && scenes[saved] && !scenes[saved].isEnding) ? "block" : "none";
}

function beginGame(startId) {
    el.titleScreen.style.display = "none";
    el.endingScreen.style.display = "none";
    el.gameScreen.style.display = "block";
    startMusic();
    goToScene(startId);
}

/* ---------- button wiring ---------- */
el.btnNewGame.addEventListener("click", () => {
    clearSave();
    beginGame("start");
});

el.btnContinue.addEventListener("click", () => {
    const saved = loadProgress();
    beginGame(saved && scenes[saved] ? saved : "start");
});

el.btnPlayAgain.addEventListener("click", () => {
    clearSave();
    showTitle();
});

el.btnRestart.addEventListener("click", () => {
    if (confirm("Restart the story from the beginning?")) {
        clearSave();
        beginGame("start");
    }
});

/* ---------- boot ---------- */
showTitle();
