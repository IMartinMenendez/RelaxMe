// $('button').click(function() {
//     // window.onload = function () {
//         // // Array of Images
//         // const backgroundImg = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyB57zuc4bms-hDtWMa-4BZvscIlJDm4r7a9WLaO4SAxUvKM-DDA",
//         //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBinSpWOvAtkxjmkf709O3rjH2ObRbWAEn9s0JcWaeL6LMtCbOrQ",
//         //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY4J2qIFqkuDnABMzeypywbMSZL1cleS8vpySz0KD02wOYORU1g",
//         //     "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQkdQT0zN0xDVP-VuvwojSbS5dOstX14eZvJCOWNPxKJ5dWTIc"
//         // ]
//         //
//         // setInterval(changeImage, 5000);
//         //
//         // function changeImage() {
//         //     var i = Math.floor((Math.random() * (backgroundImg.length - 1)));
//
//             document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg)";
//
// ) };
    // }});

// $('button').click(function() {
//     const audioElement = new Audio(`Sound/Music.mp3');
//     audioElement.play();

$(function() {
    $('body').click(function() {
        $(this).css('background-image', 'url(https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg)');
    });
});