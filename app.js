    //
    //     const backgroundImg = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyB57zuc4bms-hDtWMa-4BZvscIlJDm4r7a9WLaO4SAxUvKM-DDA",
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBinSpWOvAtkxjmkf709O3rjH2ObRbWAEn9s0JcWaeL6LMtCbOrQ",
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY4J2qIFqkuDnABMzeypywbMSZL1cleS8vpySz0KD02wOYORU1g",
    //         "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQkdQT0zN0xDVP-VuvwojSbS5dOstX14eZvJCOWNPxKJ5dWTIc"
    //     ]
    //
    //     setInterval(changeImage, 5000);
    //
    //     function changeImage() {
    //         var i = Math.floor((Math.random() * (backgroundImg.length - 1)));
    //
    // }});

$(function() {
    $('button').click(function() {
        $("body").css('background-image', 'url(https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg)');
        const rollSound = new Audio("./Sound/Music.wav");
        $('button').click(e => rollSound.play());
    });
});

// Navbar


