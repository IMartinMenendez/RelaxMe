$(function () {
    var bgImageArray = ["2015/06/08/15/19/waterfall-802003_1280.jpg", "2019/08/06/12/15/beach-4388225_1280.jpg", "2018/03/12/20/07/maldives-3220702_1280.jpg", "2020/03/03/20/31/boat-4899802_1280.jpg", "2021/03/04/19/01/lake-6069223_1280.jpg", "2016/10/18/21/28/canada-1751464_1280.jpg",
        "2018/01/14/23/12/nature-3082832__480.jpg", "2016/11/29/02/20/astronomy-1866822_1280.jpg", "2016/02/09/19/57/aurora-1190254_1280.jpg", "2017/01/19/23/46/panorama-1993645_1280.jpg", "2016/12/11/12/02/bled-1899264__480.jpg", "2016/11/29/02/20/astronomy-1866822_1280.jpg",
        "2016/10/27/19/31/greece-1776226__480.jpg", "2017/12/21/20/57/lavanttal-3032560__480.jpg", "2016/10/18/21/28/canada-1751464_1280.jpg", "2018/03/09/00/07/sand-3210284_1280.jpg", "2018/04/02/17/17/beach-3284446__480.jpg",
        "2015/12/08/00/34/ocean-waves-1081834_1280.jpg", "2017/03/13/11/44/island-2139457__480.jpg", "2016/01/08/18/00/antelope-canyon-1128815_1280.jpg", "2016/11/19/18/57/godafoss-1840758_1280.jpg", "2018/10/02/16/12/nature-3719233_1280.jpg", "2017/07/04/12/26/yosemite-2470909_1280.jpg",
        "2017/01/07/14/34/moraine-lake-1960542_1280.jpg",
        "2018/10/14/11/12/seychelles-3746207__480.jpg", "2019/04/17/18/57/paradise-4135057__480.jpg", "2017/07/17/14/14/trees-2512497__480.jpg", "2016/02/04/20/41/scenery-1179905__480.jpg", "2021/03/04/19/01/lake-6069223__480.jpg",
        "2015/10/12/14/59/milky-way-984050__480.jpg", "2020/12/23/08/00/bow-lake-5854210__480.jpg", "2020/06/06/00/05/green-water-5264864__480.jpg", "2015/10/11/06/44/waterfall-981822__480.jpg"];
    base = "https://cdn.pixabay.com/photo/";
    secs = 4;
    bgImageArray.forEach(function (img) {
        new Image().src = base + img;
        // caches images, avoiding white flash between background replacements
    });

    const soundNature = new Audio("./Sound/Nature.wav");
    const soundBirds = new Audio("./Sound/Birds.wav");
    const soundRiver = new Audio("./Sound/River.wav");
    const rollSound = new Audio("./Sound/Music.wav");

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
                    }, (secs * 1000));
                } else {
                    k++;
                }
            }, (secs * 5000) * i);
        }
    }

    function timer() {
        var interval = setInterval(function () {
            var minutesSelector = $('.minutes');
            var secondsSelector = $('.seconds');
            var minutes = minutesSelector.text();
            var seconds = secondsSelector.text() - 1;
            if (seconds < 0) {
                seconds = 59;
                minutes = minutes - 1;
            }
            minutesSelector.text(minutes);
            secondsSelector.text(seconds);
            if (minutes === 0 && seconds === 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    // function finish() {
    //     $(".title").text("Well done!");
    //     $(".animation").animate({marginLeft: "70%"}, 2000);
    //     rollSound.pause();
    //     soundBirds.pause();
    //     soundRiver.pause();
    //     soundNature.pause();
    // }

    function animationToTheLeft() {
        $(".animation").animate({marginRight:"70%"} , 2000);
        $(".card").animate({opacity: 1}, 2000);
        $("button").text("Stop").addClass(".stop");
    }

    $('button').click(function () {
        rollSound.play();
        backgroundSequence();
        timer();
        $(".title").text("Your time left.").animate({left: '250px'});
        $("p").hide().fadeOut('slow');
        animationToTheLeft();
        $(".stop").click(finish());
    });
});

$(".Nature").click(function () {
        rollSound.pause();
        soundBirds.pause();
        soundRiver.pause();
        soundNature.play();
    }
)
$(".Birds").click(function () {
        rollSound.pause();
        soundNature.pause();
        soundRiver.pause();
        soundBirds.play();
    }
)
$(".River").click(function () {
        rollSound.pause();
        soundNature.pause();
        soundBirds.pause();
        soundRiver.play();
    }
);

// Navbar

$(".nav-link").click(function () {
    $(".dropdown-menu").slideDown("slow")
    $(".nav-link").click(function () {
        $(".dropdown-menu").slideUp("Slow")
    })
});

