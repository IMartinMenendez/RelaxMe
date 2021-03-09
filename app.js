var bgImageArray = ["2015/06/08/15/19/waterfall-802003_1280.jpg", "2019/08/06/12/15/beach-4388225_1280.jpg", "2018/03/12/20/07/maldives-3220702_1280.jpg", "2020/03/03/20/31/boat-4899802_1280.jpg",
        "2016/10/22/18/52/beach-1761410__480.jpg", "2016/11/29/03/19/beach-1867026__480.jpg", "2016/01/19/17/01/island-1149508__480.jpg", "2014/01/02/10/14/beach-hut-237489__480.jpg", "2017/06/07/08/50/mexico-2379694__480.jpg",
        "2018/01/14/23/12/nature-3082832__480.jpg", "2018/04/16/16/16/sunset-3325080__480.jpg", "2016/02/13/12/26/aurora-1197753__480.jpg", "2017/01/19/23/46/panorama-1993645__480.jpg", "2016/12/11/12/02/bled-1899264__480.jpg"],
    base = "https://cdn.pixabay.com/photo/",
    secs = 4;
bgImageArray.forEach(function (img) {
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

const soundNature = new Audio("./Sound/Nature.wav");
const soundBirds = new Audio("./Sound/Birds.wav");
const soundRiver = new Audio("./Sound/River.wav");
const rollSound = new Audio("./Sound/Music.wav");

$(function () {
    $('button').click(function () {
        rollSound.play();

        function backgroundSequence() {
            window.clearTimeout();
            var k = 0;
            for (i = 0; i < bgImageArray.length; i++) {
                setTimeout(function () {
                    document.body.style.background = "url(" + base + bgImageArray[k] + ") no-repeat";
                    document.body.style.backgroundSize = "cover";
                    if ((k + 1) === bgImageArray.length) {
                        setTimeout(function () {
                            backgroundSequence()
                        }, (secs * 1000))
                    } else {
                        k++;
                    }
                }, (secs * 5000) * i)
            }
        }

        backgroundSequence();

    });



$(".Nature").click(function (){
    rollSound.pause();
    soundBirds.pause();
    soundRiver.pause();
    soundNature.play();
    }
)
$(".Birds").click(function (){
    rollSound.pause();
    soundNature.pause();
    soundRiver.pause();
    soundBirds.play();
    }
)
$(".River").click(function (){
    rollSound.pause();
    soundNature.pause();
    soundBirds.pause();
    soundRiver.play();
    }
)
});

// Navbar

$(".nav-link").click(function () {
    $(".dropdown-menu").slideDown("slow")
    $(".nav-link").click(function () {
        $(".dropdown-menu").slideUp("Slow")
    })
});

// timer

