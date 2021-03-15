$(function () {
    var bgImageArray = ["2015/06/08/15/19/waterfall-802003_1280.jpg", "2019/08/06/12/15/beach-4388225_1280.jpg", "2018/03/12/20/07/maldives-3220702_1280.jpg", "2020/03/03/20/31/boat-4899802_1280.jpg", "2021/03/04/19/01/lake-6069223_1280.jpg", "2016/10/18/21/28/canada-1751464_1280.jpg",
        "2018/01/14/23/12/nature-3082832_1280.jpg", "2016/02/09/19/57/aurora-1190254_1280.jpg", "2017/01/19/23/46/panorama-1993645_1280.jpg", "2016/11/29/02/20/astronomy-1866822_1280.jpg", "2017/06/30/21/36/banff-2459897_1280.jpg", "2017/08/03/10/25/peyto-lake-2575418_1280.jpg",
        "2016/10/27/19/31/greece-1776226_1280.jpg", "2017/12/21/20/57/lavanttal-3032560_1280.jpg", "2016/10/18/21/28/canada-1751464_1280.jpg", "2018/03/09/00/07/sand-3210284_1280.jpg", "2018/04/02/17/17/beach-3284446_1280.jpg", "2017/06/19/20/03/arizona-2420757_1280.jpg", "2017/06/27/05/58/lake-2446362_1280.jpg",
        "2015/12/08/00/34/ocean-waves-1081834_1280.jpg", "2017/03/13/11/44/island-2139457_1280.jpg", "2016/01/08/18/00/antelope-canyon-1128815_1280.jpg", "2016/11/19/18/57/godafoss-1840758_1280.jpg", "2018/10/02/16/12/nature-3719233_1280.jpg", "2017/07/04/12/26/yosemite-2470909_1280.jpg",
        "2017/01/07/14/34/moraine-lake-1960542_1280.jpg", "2015/06/19/21/24/avenue-815297_1280.jpg", "2020/10/26/18/57/emerald-lake-5688358_1280.jpg", "2017/05/31/12/33/reflection-2360250_1280.jpg", "2019/07/20/20/11/nature-4351456_1280.jpg", "2016/10/06/03/17/moraine-lake-1718082_1280.jpg",
        "2020/04/14/14/33/lake-5042933_1280.jpg", "2019/10/08/13/35/bergsee-4535036_1280.jpg", "2019/06/23/05/46/mountains-4292912_1280.jpg", "2021/03/04/19/01/lake-6069223_1280.jpg", "2017/01/04/08/27/lake-1951519_1280.jpg", "2019/06/17/15/41/landscape-4280257_1280.jpg",
        "2016/10/18/21/28/seljalandsfoss-1751463_1280.jpg", "2017/10/10/07/48/beach-2836300_1280.jpg", "2016/02/19/10/35/nature-1209302_1280.jpg", "2015/07/02/10/22/stone-arch-828730_1280.jpg", "2017/08/27/15/09/moraine-lake-2686353_1280.jpg", "2018/01/19/09/31/kirkjufell-3092048_1280.jpg",
        "2016/02/13/12/27/aurora-1197755_1280.jpg", "2014/09/27/17/30/waterfalls-463925_1280.jpg", "2016/11/29/13/04/forest-1869713_1280.jpg", "2016/11/18/14/17/geology-1834846_1280.jpg", "2020/11/22/07/11/river-5765785_1280.jpg", "2017/01/15/17/25/autumn-1982163_1280.jpg",
        "2015/11/07/11/30/sunbeam-1031201_1280.jpg", "2017/06/30/21/36/sunset-2459900_1280.jpg", "2014/10/07/13/48/mountain-477832_1280.jpg",
        "2015/10/12/14/59/milky-way-984050_1280.jpg", "2020/12/23/08/00/bow-lake-5854210_1280.jpg", "2020/06/06/00/05/green-water-5264864_1280.jpg", "2015/10/11/06/44/waterfall-981822_1280.jpg"];
    var base = "https://cdn.pixabay.com/photo/";
    // secs = 4;
    bgImageArray.forEach(function (img) {
        new Image().src = base + img;
        // caches images, avoiding white flash between background replacements
    });

    const soundNature = new Audio("./Sound/Nature.wav");
    const soundBirds = new Audio("./Sound/Birds.wav");
    const soundRiver = new Audio("./Sound/River.wav");
    const rollSound = new Audio("./Sound/Music.wav");

    var backgroundInterval;

    function backgroundSequence() {
        backgroundInterval = setInterval(function () {
            var randomNumber = Math.floor(Math.random() * bgImageArray.length);
            const imageNext = base + bgImageArray[randomNumber];
            $("body")
                .css("background", "url(" + imageNext + ") no-repeat")
                .css("backgroundSize", "cover").css("transition-duration", "5s").css("background-attachment", "fixed");
        }, 10000);
    }


    var timeInterval;

    function timer() {
        timeInterval = setInterval(function () {
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
            if (minutes === '0' && seconds === 0) {
                clearInterval(timeInterval);
                finish();
            }
        }, 1000);
    }

    function finish() {
        clearInterval(timeInterval);
        $(".title").text("Well done!");
        $(".animation").animate({marginRight: "0"}, 2000);
        $(".stop").css("display", "none");
        $(".start").css("display", "inline");
        clearInterval(backgroundInterval);
        rollSound.pause();
        soundBirds.pause();
        soundRiver.pause();
        soundNature.pause();
    }

    function animationToTheLeft() {

        if (screen.width > 1000) {
            $(".animation").animate({marginRight: "70%"}, 2000);
            $(".card").animate({opacity: 1}, 2000);
        } else if (screen.width < 1000) {

        }
    }


    function resetCountdown() {
        $('.minutes').text('10')
        $(".seconds").text('00');

    }

    $(".start").click(function () {
        rollSound.play();
        backgroundSequence();
        resetCountdown();
        timer();
        $(".title").text("Your time left.").animate({left: '250px'});
        $(".description").hide().fadeOut('slow');
        animationToTheLeft();
        $(".start").css("display", "none");
        $(".stop").css("display", "inline").click(finish);
    });

    $(".nature").click(function () {
            console.log("Nature");
            rollSound.pause();
            soundBirds.pause();
            soundRiver.pause();
            soundNature.play();
        }
    )
    $(".birds").click(function () {
            rollSound.pause();
            soundNature.pause();
            soundRiver.pause();
            soundBirds.play();
        }
    )
    $(".river").click(function () {
            rollSound.pause();
            soundNature.pause();
            soundBirds.pause();
            soundRiver.play();
        }
    );


});




