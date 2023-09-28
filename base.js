var loginInfo = localStorage.getItem('loginInfo');
var userStatus = {
    "Lucas Harel": "Dev",
    "Admin": "Pr",
    "Admin 2": "Std",
};
var statusBadge = document.getElementById('statusBadge');
if (loginInfo in userStatus) {
    var statusToDisplay = userStatus[loginInfo];
    statusBadge.innerHTML = statusToDisplay;
    if (statusToDisplay == 'Dev') {
        document.getElementById('profileDisplay').innerHTML = '<img src="Profile.png" id="profile">'
        statusBadge.setAttribute('class', 'developerStatus')
    } else if (statusToDisplay == 'Pr') {
        statusBadge.setAttribute('class', 'premiumStatus')
    }
} else {
    location.href = 'login.html?fromLogin=false'
}

var ZenMusic = document.getElementById('ZenMusic');
ZenMusic.addEventListener('click', function() {
    location.href = '#'
})

var profileDisplay = document.getElementById('profileDisplay')
profileDisplay.addEventListener('click', function() {
    var logoutConfirm = confirm('Log out from this account?')
    if (logoutConfirm) {
        location.href = 'login.html?fromLogin=true'
    }
})


let musicDistribute
let musicControlSave=[]
var musicArtistList = {
    "People" : 'Libianca',
    "Daylight" : 'David Khusner',
    'Somewhere' : 'Keane',
    'Paradise' : 'Coyote Theory',
    'collide' : 'Justine Skye',
    'letitallgo' : 'BIRDY & RHODES',
    'Someone' : 'Vancouver Sleep Clinic',
    'Another' : 'Tom Odell',
    '8Letters' : 'Why dont we',
    'BeYours' : 'Artic Monkeys',
    'Whatitis' : 'Doechii',
    'thatswhatiwant' : 'Lil Nas X',
    'jiwayangbersedih' : 'Ghea Indrawari',
    'industrybaby' : 'Lil Nas X',
    'youareenough' : 'Sleeping At Last',
    'starboy' : 'The Weeknd',
    'hotgirlbummer' : 'Blackbear',
    'nothingisimpossible' : 'Planetshakers',
    'metamorphosis' : 'INTERWORLD',
    'television' : 'Rex Orange Country',
    'rewritethestars' : 'James Arthur & Anne-Marie'
}
var musicTitleList = {
    "People" : 'People',
    "Daylight" : 'Daylight',
    'Somewhere' : 'Somewhere only we know',
    'Paradise' : 'This side of paradise',
    'collide' : 'Collide',
    'letitallgo' : 'Let it all go',
    'Someone' : 'Someone to stay',
    'Another' : 'Another love',
    '8Letters' : '8 Letters',
    'BeYours' : 'I Wanna Be Yours',
    'Whatitis' : 'What it is?',
    'thatswhatiwant' : 'THATS WHAT I WANT',
    'jiwayangbersedih' : 'Jiwa yang bersedih',
    'industrybaby' : 'Industry Baby',
    'youareenough' : 'You are enough',
    'starboy' : 'Starboy',
    'hotgirlbummer' : 'Hot girl bummer',
    'nothingisimpossible' : 'Nothing is impossible',
    'metamorphosis' : 'Metamorphosis',
    'television' : 'Television',
    'rewritethestars' : 'Rewrite the stars'
}

var musicPlayedImage = document.getElementById('musicPlayedImage-base')
var musicPlayedName = document.getElementById('musicPlayedName-base')
var musicPlayedArtist = document.getElementById('musicPlayedArtist-base')
var navinfo = document.getElementById('navigationinfo')
function musicPlayer(music, toPrevious) {
    musicToSave = music
    var audioElements = document.querySelectorAll("audio");
    audioElements.forEach(function(audio) {
        audio.currentTime = 0;
    });
    var musicArtist = musicArtistList[music]
    var musicTitle = musicTitleList[music]
    navinfo.style.display = 'block';
    audioControl_Pause.style.display = "block";
    audioControl_Play.style.display = "none";
    var musicProfileNotify
    switch (music) {
        case "People":
            musicPlayedImage.style.backgroundImage = 'url("image/libianca.jpeg")';
            musicProfileNotify = 'image/libianca.jpeg'
            musicPlayedName.innerHTML = musicTitle;
            break;
        case "Daylight":
            musicPlayedImage.style.backgroundImage = 'url("image/Daylight.png")';
            musicProfileNotify = 'image/Daylight.png'
            musicPlayedName.innerHTML = musicTitle;
            break;
        case "Somewhere":
            musicPlayedImage.style.backgroundImage = 'url("image/somewhere only we know.jpg")';
            musicProfileNotify = 'image/somewhere only we know.jpg'
            musicPlayedName.innerHTML = musicTitle;
            break;
        case "Paradise":
            musicPlayedImage.style.backgroundImage = 'url("image/This side of paradise.jpeg")';
            musicPlayedName.innerHTML = musicTitle;
            musicProfileNotify = 'image/This side of paradise.jpeg'
            break;
        case 'collide':
            musicPlayedImage.style.backgroundImage = 'url("image/collide.jpg")';
            musicPlayedName.innerHTML = musicTitle;
            musicProfileNotify = 'image/collide.jpg'
            break;
        case 'letitallgo':
            musicPlayedImage.style.backgroundImage = 'url("image/let it all go.jpg")';
            musicPlayedName.innerHTML = musicTitle;
            musicProfileNotify = 'image/let it all go.jpg'
            break;
        case 'Someone':
            musicPlayedImage.style.backgroundImage = 'url("image/Someone to stay.jpeg")';
            musicPlayedName.innerHTML = musicTitle;
            musicProfileNotify = 'image/Someone to stay.jpeg'
            break;
        case 'Another':
            musicPlayedImage.style.backgroundImage = 'url("image/Tomodell.jpg")';
            musicPlayedName.innerHTML = musicTitle;
            musicProfileNotify = 'image/Tomodell.jpg'
            break;
        case "8Letters":
            musicPlayedImage.style.backgroundImage = 'url("image/8 letters.jpg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/8 Letters.jpg'
            break;
        case "BeYours":
            musicPlayedImage.style.backgroundImage = 'url("image/BeYours.jpg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/BeYours.jpg'
            break;
        case "Whatitis":
            musicPlayedImage.style.backgroundImage = 'url("image/what it is.jpg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/what it is.jpg'
            break;
        case "thatswhatiwant":
            musicPlayedImage.style.backgroundImage = 'url("image/thats what i want.jpg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/thats what i want.jpg'
            break;
        case "jiwayangbersedih":
            musicPlayedImage.style.backgroundImage = 'url("image/jiwa yang bersedih.jpeg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/jiwa yang bersedih.jpeg'
            break;
        case "industrybaby":
            musicPlayedImage.style.backgroundImage = 'url("image/industry baby.jpeg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/industry baby.jpeg'
            break;
        case "youareenough":
            musicPlayedImage.style.backgroundImage = 'url("image/you are enough.jpg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/you are enough.jpg'
            break;
        case "starboy":
            musicPlayedImage.style.backgroundImage = 'url("image/starboy.png")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/starboy.png';
            break;
        case "hotgirlbummer":
            musicPlayedImage.style.backgroundImage = 'url("image/hot girl bummer.jpeg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/hot girl bummer.jpeg';
            break;
        case "television":
            musicPlayedImage.style.backgroundImage = 'url("image/television.jpeg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/television.jpeg';
            break;
        case "rewritethestars":
            musicPlayedImage.style.backgroundImage = 'url("image/rewrite the stars.jpeg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/rewrite the stars.jpeg';
            break;
        case "metamorphosis":
            musicPlayedImage.style.backgroundImage = 'url("image/metamorphosis.jpeg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/metamorphosis.jpeg';
            break;
        case "nothingisimpossible":
            musicPlayedImage.style.backgroundImage = 'url("image/nothing is impossible.jpg")';
            musicPlayedName.innerHTML = musicTitle
            musicProfileNotify = 'image/nothing is impossible.jpg';
            break;
    }
    musicPlayedArtist.innerHTML = musicArtist
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: musicTitle,
            artist: musicArtist,
            album: 'Album Audio',
            artwork: [
              { src: musicProfileNotify, sizes: '192x192', type: 'image' },
            ]
        });
        navigator.mediaSession.setActionHandler('play', function(){
            audioPlay()
        })
        navigator.mediaSession.setActionHandler('pause', function() {
            audioPause()
        })
        navigator.mediaSession.setActionHandler('nexttrack', function() {
            nextTrack()
        })
        navigator.mediaSession.setActionHandler('previoustrack', function() {
            previousTrack()
        })
    }
    audioElements.forEach((el) => el.pause());
    var musicToPlay = document.getElementById(music);
    musicDistribute = musicToPlay
    musicToPlay.play();
    musicToPlay.currentTime = 0;
    musicToPlay.addEventListener('ended', function() {
        if (autoShuffle == true) {
            nextTrack()
        } else {
            musicToPlay.play();
            musicToPlay.currentTime = 0;
        }
    })
    setTimeout(function() {
        navExpand()
    }, 350)
}
let autoShuffle = false

var shuffle = document.getElementById('shuffle')
var shuffleEXP = document.getElementById('shuffleEXP')
shuffle.addEventListener('click', function() {
    if (autoShuffle == false) {

        shuffle.style.border = '2px solid white'
        shuffle.style.color = 'white';
        autoShuffle = true
        shuffle.setAttribute('title', 'Auto Shuffle on')

        shuffleEXP.style.border = '2px solid white'
        shuffleEXP.style.color = 'white';
        shuffleEXP.setAttribute('title', 'Auto Shuffle on')

        generateTrack()
    } else if (autoShuffle == true){
        shuffle.style.border = 'none'
        shuffle.style.color = 'white';
        autoShuffle = false;
        shuffle.setAttribute('title', 'Auto Shuffle off')

        shuffleEXP.style.border = 'none'
        shuffleEXP.style.color = 'white';
        shuffleEXP.setAttribute('title', 'Auto Shuffle off')
    }
})
shuffleEXP.addEventListener('click', function() {
    if (autoShuffle == false) {
        shuffleEXP.style.border = '2px solid white'
        shuffleEXP.style.color = 'white';
        autoShuffle = true
        shuffleEXP.setAttribute('title', 'Auto Shuffle on')

        shuffle.style.border = '2px solid white'
        shuffle.style.color = 'white';
        shuffle.setAttribute('title', 'Auto Shuffle on')

        generateTrack()
    } else if (autoShuffle == true){
        shuffleEXP.style.border = 'none'
        shuffleEXP.style.color = 'white';
        autoShuffle = false;
        shuffleEXP.setAttribute('title', 'Auto Shuffle off')

        shuffle.style.border = 'none'
        shuffle.style.color = 'white';
        shuffle.setAttribute('title', 'Auto Shuffle off')
    }
})


let musicSave = []
function nextTrack() {
    var randomize = musicTitleTrack[Math.floor(Math.random() * musicTitleTrack.length)]
    if (autoShuffle == true) {
        musicPosition++
        musicPlayer(musicTrack[musicPosition])
        console.log(musicTrack[musicPosition])
    } else{
        switch (randomize) {
            case "People":
                musicPlayer('People')
                break;
            case "Whatitis":
                musicPlayer('Whatitis')
                break;
            case "thatswhatiwant":
                musicPlayer('thatswhatiwant')
                break;
            case "collide":
                musicPlayer('collide')
                break;
            case "Daylight":
                musicPlayer('Daylight')
                break;
            case "letitallgo":
                musicPlayer('letitallgo')
                break;
            case "Someone":
                musicPlayer('Someone')
                break; 
            case "Another":
                musicPlayer('Another')
                break;
            case "jiwayangbersedih":
                musicPlayer('jiwayangbersedih')
                break;
            case "8Letters":
                musicPlayer('8Letters')
                break;
            case "BeYours":
                musicPlayer('BeYours')
                break;
            case "Somewhere":
                musicPlayer('Somewhere')
                break;
            case "Paradise":
                musicPlayer('Paradise')
                break;
            case "industrybaby":
                musicPlayer('industrybaby')
                break;
            case "youareenough":
                musicPlayer('youareenough')
                break;
            case "starboy":
                musicPlayer('starboy')
                break
            case "hotgirlbummer":
                musicPlayer('hotgirlbummer')
                break
            case "rewritethestars":
                musicPlayer('rewritethestars');
                break
            case "metamorphosis":
                musicPlayer('metamorphosis')
                break
            case "nothingisimpossible":
                musicPlayer('nothingisimpossible')
                break
            case "television":
                musicPlayer('television')
                break
        }
    }
}
function audioPlay() {
    musicDistribute.play();
    audioControl_Pause.style.display = "block";
    audioControl_Play.style.display = "none";
    audioPaused = false
}
function audioPause() {
    musicDistribute.pause();
    audioControl_Pause.style.display = "none";
    audioControl_Play.style.display = "block";
    audioPaused = true
}
var audioControl_Pause = document.getElementById('music-Pause')
var audioControl_Play = document.getElementById('music-Play')
audioControl_Pause.addEventListener('click', function() {
    audioPause()
})
audioControl_Play.addEventListener('click', function() {
    audioPlay()
})
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState == 'hidden') {
        if (userStatus[loginInfo] == 'Std') {
            audioPause()
            setTimeout(function() {
                alert('Upgrade to premium to play music in background!')
            }, 150)
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState != 'hidden') {
                    audioPlay()
                }
            })
        } else {

        }
    }
})

var volSlider = document.getElementById('volRange')
var volSliderEXP = document.getElementById('volRangeEXP')
var audioElements = document.querySelectorAll("audio");
volSlider.addEventListener('input', function(audio){
    audioElements.forEach(function (audio) {
      audio.volume = volSlider.value;
      volSliderEXP.value = volSlider.value
    });
})
volSliderEXP.addEventListener('input', function(audio){
    audioElements.forEach(function (audio) {
      audio.volume = volSliderEXP.value;
      volSlider.value = volSliderEXP.value
    });
})

var search = document.getElementById('search')
var searchBox = document.getElementById('search-box')
var profile = document.getElementById('profile')
var searchResult = document.getElementById('searchResultContainer')
search.addEventListener('click', function(){
    search.setAttribute('name', 'close')
    search.style.right = '0px'
    searchBox.style.display = 'block';
    ZenMusic.style.left = '-117px';
    profile.style.display = 'none';
    searchBox.focus()
    searchResult.style.display = 'block'
})

searchBox.addEventListener('blur', function() {
    search.setAttribute("name", "search");
    search.style.right = "55px";
    searchBox.style.display = "none";
    ZenMusic.style.left = "0px";
    profile.style.display = "block";
    searchBox.blur()
    setTimeout(function(){
        searchResult.style.display = "none";
    }, 90)
})

var list = document.getElementById("musicList");
var items = list.getElementsByTagName("li");

// SEARCH-BOX FUNCTION
searchBox.addEventListener("input", function () {
    const searchTerm = searchBox.value.toLowerCase();
    for (let i = 0; i < items.length; i++) {
        var item = items[i];
        var text = item.textContent.toLowerCase();
        if (searchTerm !== '' && text.includes(searchTerm)) {
            item.style.display = "block";
        } else if(searchTerm == '') {
            item.style.display = "none";
        }
        else {
            item.style.display = "none";
        }
    }
});

let audioPaused = false

document.addEventListener('keypress', function(e) {
    if (e.keyCode == '32') {
        event.preventDefault()
        if (audioPaused == false) {
            audioPause();
        } else if (audioPaused == true) {
            audioPlay()
        }
    }
})

var musicControl = document.getElementById('musicControl');
var musicControlButton = document.getElementById("musicControlButton");
musicControlButton.addEventListener('click', function() {
    if (musicControl.style.display !== 'block') {
        musicControl.style.display = 'block';
        musicControlButton.style.rotate = '180deg';
        musicPlayedName.style.display = 'none'
        musicPlayedArtist.style.display = 'none';
        navigationExpand.style.display = 'none'
    } else {
        musicControl.style.display = "none";
        musicControlButton.style.rotate = "0deg";
        musicPlayedName.style.display = "block";
        musicPlayedArtist.style.display = 'block';
        navigationExpand.style.display = 'block'
    }
})

var scrollleft = document.getElementById('scrollleft')
var scrollright = document.getElementById('scrollright')
var musicProfileRCMD = document.getElementById('recomendedmusic')
scrollleft.addEventListener('click', function() {
    musicProfileRCMD.scrollLeft -= 200
})
scrollright.addEventListener('click', function() {
    musicProfileRCMD.scrollLeft += 200
})


function startTimer(amount) {
    timerBanner.style.display = 'none'
    setTimeout(function() {
        audioPause()
    }, amount)
}

function detectTime(){
    var timeValue = document.getElementById('timeSelector').value
    if (timeValue == '10minutes') {
        startTimer(600000)
    } else if (timeValue == '15minutes') {
        startTimer(900000)
    } else if (timeValue == '30minutes') {
        startTimer(1800000)
    } else if (timeValue == '45minutes') {
        startTimer(2700000)
    }
    else {
        
    }
}

var sleepmode = document.getElementById('sleepMode');
var timerBanner = document.getElementById('timerBanner')
var sleepmodeEXP = document.getElementById('sleepModeEXP')
sleepmode.addEventListener('click', function() {
    timerBanner.style.display = 'block'
})
sleepmodeEXP.addEventListener('click', function() {
    timerBanner.style.display = 'block'
})

var closeTimerBanner = document.getElementById('closeTimerBanner')
closeTimerBanner.addEventListener('click', function() {
    timerBanner.style.display = 'none'
})

var notification = document.getElementById('notification')
var whatsnewinfo = localStorage.getItem('NewInformation7')
var loginInfoNTF = localStorage.getItem('loginInfo')
if (whatsnewinfo == null) {
    if (loginInfoNTF in userStatus) {
        notification.style.display = 'block';
        setTimeout(function(){
            notification.style.transform = 'translateY(-75%)'
        }, 500)
        var hreflocation = document.getElementById('hreflocation')
        hreflocation.addEventListener('click', function() {
            location.href = 'whatsnew.html'
        })
        setTimeout(function() {
            notification.style.transform = 'translateY(-200%)'
            setTimeout(function() {
                notification.style.display = 'none'
            }, 500)
        }, 3500)
        localStorage.setItem('NewInformation7', 'done')
    } else {

    }
}

var controller = document.getElementById('controller')

function navExpand() {
    navinfo.style.animation = 'resizeNavigation forwards 0.5s ease';
    navigationExpand.style.display = 'none'

    musicPlayedImage.style.animation = 'resizeProfile forwards 0.5s ease'

    audioControl_Pause.style.top = '475px'
    audioControl_Play.style.top = '475px'
    audioControl_Pause.style.right = '50%'
    audioControl_Play.style.right = '50%'
    audioControl_Pause.style.transform = 'translateX(50%)'
    audioControl_Play.style.transform = 'translateX(50%)'

    musicPlayedName.setAttribute('class', 'musicPlayedName-base-expanded')
    musicPlayedArtist.setAttribute('class', 'musicPlayedArtist-base-expanded')
    
    musicControlButton.style.display = 'none'
    musicControl.style.opacity = '0'

    closeNav.style.display = 'block';
    controller.style.display = 'block'
}


var closeNav = document.getElementById('closeNavigation')
closeNav.addEventListener('click', function() {
    navinfo.style.animation = 'reverseResizeNavigation 0.55s forwards ease';
    navigationExpand.style.display = 'block'

    musicPlayedImage.style.animation = 'reverseProfileSize 0.5s forwards ease'

    audioControl_Pause.style.top = '7px'
    audioControl_Play.style.top = '7px'
    audioControl_Pause.style.right = '15px'
    audioControl_Play.style.right = '15px'
    audioControl_Pause.style.transform = 'translateX(0%)'
    audioControl_Play.style.transform = 'translateX(0%)'

    musicPlayedName.setAttribute('class', 'musicPlayedName-base')
    musicPlayedArtist.setAttribute('class', 'musicPlayedArtist-base')
    
    musicControlButton.style.display = 'block'
    musicControl.style.opacity = 1

    closeNav.style.display = 'none'
    controller.style.display = 'none'
})

var navigationExpand = document.getElementById('navigationExpand')
navigationExpand.addEventListener('click', function(){
    navExpand()
})





var musicTitleTrack = [
    "People",
    "Daylight",
    'Somewhere',
    'Paradise',
    'collide',
    'letitallgo',
    'Someone',
    'Another',
    '8Letters',
    'BeYours',
    'Whatitis',
    'thatswhatiwant',
    'jiwayangbersedih',
    'industrybaby',
    'youareenough',
    'starboy',
    'hotgirlbummer',
    'nothingisimpossible',
    'metamorphosis',
    'television',
    'rewritethestars'
]
let musicTrack = []
let musicPosition = 0
function generateTrack() {
    musicTrack = []
    musicTrack.push(musicToSave)
    while (musicTrack.length < 21) {
        var randomize = musicTitleTrack[Math.floor(Math.random() * musicTitleTrack.length)]
        if (musicTrack.includes(randomize)) {

        } else {
            musicTrack.push(randomize)
        }
    }
    console.log(musicTrack)
}

let musicToSave
function previousTrack() {
    if (autoShuffle == true) {
        if (musicPosition == 0) {

        } else if (musicPosition > 0) {
            musicPosition--
            musicPlayer(musicTrack[musicPosition])
        }
    }
}