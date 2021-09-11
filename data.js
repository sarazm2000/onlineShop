var book = 
     [{
            "book_name": "Be The Refuge",
            "author": "Chenxing Han",
            "book_score": 5,
            "detail": "The Magical Language of Others is a powerful and aching love story in letters, from mother to daughter. After living in America for over a decade, Eun Ji Koh’s parents return to South Korea for work, leaving fifteen-year-old Eun Ji and her brother behind in California. Overnight, Eun Ji finds herself abandoned and adrift in a world made strange by her mother’s absence. Her mother writes letters, in Korean, over the years seeking forgiveness and love—letters Eun Ji cannot fully understand until she finds them years later hidden in a box.",
            "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599886757l/55305745.jpg"
        },
        {
            "book_name": "The Magical Language of Others",
            "author": "E.J. Koh",
            "book_score": 5,
            "detail": "More than two thirds of U.S. Buddhists are Asian American. But you’d never guess this from mainstream representations, which all too often whitewash the racial and cultural diversity of American Buddhist communities. Be the Refuge is both critique and celebration, countering the erasure of Asian American Buddhists while uplifting their stories and experiences. The Oriental monk, the superstitious immigrant, the banana Buddhist: dissatisfied with these tired tropes, Han asks, Will the real Asian American Buddhists please stand up? Her journey to answer this question led to in-depth interviews with a pan-ethnic, pan-Buddhist group of eighty-nine young adults.",
            "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574328700l/46195204.jpg"
        },
        {
            "book_name": "Displacement",
            "author": "Kiku Hughes",
            "book_score": 5,
            "detail": "Kiku is on vacation in San Francisco when suddenly she finds herself displaced to the 1940s Japanese-American internment camp that her late grandmother, Ernestina, was forcibly relocated to during World War II.",
            "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576630449l/46223303.jpg"
        },
        {
            "book_name": "Be The Refuge",
            "author": "Chenxing Han",
            "book_score": 5,
            "detail": "The Magical Language of Others is a powerful and aching love story in letters, from mother to daughter. After living in America for over a decade, Eun Ji Koh’s parents return to South Korea for work, leaving fifteen-year-old Eun Ji and her brother behind in California. Overnight, Eun Ji finds herself abandoned and adrift in a world made strange by her mother’s absence. Her mother writes letters, in Korean, over the years seeking forgiveness and love—letters Eun Ji cannot fully understand until she finds them years later hidden in a box.",
            "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599886757l/55305745.jpg"
        },
        {
            "book_name": "The Magical Language of Others",
            "author": "E.J. Koh",
            "book_score": 5,
            "detail": "More than two thirds of U.S. Buddhists are Asian American. But you’d never guess this from mainstream representations, which all too often whitewash the racial and cultural diversity of American Buddhist communities. Be the Refuge is both critique and celebration, countering the erasure of Asian American Buddhists while uplifting their stories and experiences. The Oriental monk, the superstitious immigrant, the banana Buddhist: dissatisfied with these tired tropes, Han asks, Will the real Asian American Buddhists please stand up? Her journey to answer this question led to in-depth interviews with a pan-ethnic, pan-Buddhist group of eighty-nine young adults.",
            "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574328700l/46195204.jpg"
        },
        {
            "book_name": "Displacement",
            "author": "Kiku Hughes",
            "book_score": 5,
            "detail": "Kiku is on vacation in San Francisco when suddenly she finds herself displaced to the 1940s Japanese-American internment camp that her late grandmother, Ernestina, was forcibly relocated to during World War II.",
            "book_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576630449l/46223303.jpg"
        }
        
    ];
var container = document.getElementById("card_cantainer")
for (var i = 0; i < book.length; i++){
var authorName = book[i].author;
var name = book[i].book_name;
var score = book[i].book_score;
var detail = book[i].detail;
var image = book[i].book_image;
var card = document.createElement("div")
if (i % 3 == 0){
    card.innerHTML = `<div class="card card--1">
                    <div class="card__front">
                        <div class="card__img"><img src= "${image}" /></div>
                        <div class="card__title">${name}</div>
                        <div class='card__author'>${authorName}</div>
                        <div class='card__star'><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
                    </div>
                    <div class='card__back'>
                        <div class='card__title'>${name}</div>
                        <div class='card__author'>${authorName}</div>
                        <div class='card__content'>${detail}</div>
                    </div>
                </div>`
} else if(i % 3 == 1){
    card.innerHTML = `<div class="card card--2">
                    <div class="card__front">
                        <div class="card__img"><img src= "${image}" /></div>
                        <div class="card__title">${name}</div>
                        <div class='card__author'>${authorName}</div>
                        <div class='card__star'><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
                    </div>
                    <div class='card__back'>
                        <div class='card__title'>${name}</div>
                        <div class='card__author'>${authorName}</div>
                        <div class='card__content'>${detail}</div>
                    </div>
                </div>`
} else {
    card.innerHTML = `<div class="card card--3">
                    <div class="card__front">
                        <div class="card__img"><img src= "${image}" /></div>
                        <div class="card__title">${name}</div>
                        <div class='card__author'>${authorName}</div>
                        <div class='card__star'><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
                    </div>
                    <div class='card__back'>
                        <div class='card__title'>${name}</div>
                        <div class='card__author'>${authorName}</div>
                        <div class='card__content'>${detail}</div>
                    </div>
                </div>`
    }
     container.appendChild(card);
}


