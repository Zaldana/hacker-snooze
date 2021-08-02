slideDatalooped =[];

// Slide One
const slideOnetitle = document.querySelector('#slide-one-title');
const slideOnedescription = document.querySelector('#slide-one-description');
const linkOne = document.querySelector('#url-one');

//Slide Two
const slideTwotitle = document.querySelector('#slide-two-title');
const slideTwodescription = document.querySelector('#slide-two-description');
const linkTwo = document.querySelector('#url-two');

//SlideThree
const slideThreetitle = document.querySelector('#slide-three-title');
const slideThreedescription = document.querySelector('#slide-three-description');
const linkThree = document.querySelector('#url-three');

// API request for IDs for banners
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')

    // Run the following after receiving a response from the API
    .then(function (rawData) {

        return rawData.json();
    })

    //loop for first 3 ids
    .then(function (data) {

        for (i = 0; i <= 2; i++) {

            //Push ids into array
            slideDatalooped.push(data[i]);
        
        }

        //fetch 3 stories for banners
        let itemNum = slideDatalooped[0] + '.json?print=pretty';

        const fetchUrl = 'https://hacker-news.firebaseio.com/v0/item/';

        fetch(fetchUrl.concat(itemNum))

        .then(function (rawData) {

            return rawData.json();

        })

        .then(function (data) {

            slideOnetitle.innerText = data.title;
            linkOne.href = data.url
            slideOnedescription.innerText = 'BY: ' + data.by + '  SCORE: ' + data.score + '  COMMENTS: ' + data.descendants;

        });

        itemNum = slideDatalooped[1] + '.json?print=pretty';

        fetch(fetchUrl.concat(itemNum))

            .then(function (rawData) {

                return rawData.json();

            })

            .then(function (data) {

                slideTwotitle.innerText = data.title;
                linkTwo.href = data.url
                slideTwodescription.innerText = 'BY: ' + data.by + '  SCORE: ' + data.score + '  COMMENTS: ' + data.descendants;

            });

        itemNum = slideDatalooped[2] + '.json?print=pretty';

        fetch(fetchUrl.concat(itemNum))

            .then(function (rawData) {

                return rawData.json();

            })

            .then(function (data) {

                slideThreetitle.innerText = data.title;
                linkThree.href = data.url
                slideThreedescription.innerText = 'BY: ' + data.by + '  SCORE: ' + data.score + '  COMMENTS: ' + data.descendants;

            });
});

//the story's score, number of comments, and author's username should be visible

// story cards ===========================================================================

const cardSection = document.querySelector('.card-section');

//start fetch
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')

    // Run the following after receiving a response from the API
    .then(function (rawData) {

        return rawData.json();
    })

    //loop for first 100 ids
    .then(function (data) {

for (i = 0; i <= 99; i++) {

    let dataLooped = [];
    let index = 0;

    dataLooped.push(data[i]);

    let itemNum = dataLooped[index] + '.json?print=pretty';

    const fetchUrl = 'https://hacker-news.firebaseio.com/v0/item/';

    fetch(fetchUrl.concat(itemNum))

        .then(function (rawData) {

            return rawData.json();

        })

        .then(function (data) {

            const card = document.createElement('div');
            card.classList.add('card','text-center', 'mb-3');

            const header =document.createElement('div');
            header.classList.add('card-header');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');

            const cardButton = document.createElement('a');
            cardButton.classList.add('btn', 'btn-outline-danger');

            const footer = document.createElement('div');
            footer.classList.add('card-footer');


            cardSection.appendChild(card);
            card.appendChild(header);
            card.appendChild(cardBody);
            card.appendChild(footer);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardButton);

            header.innerText = data.type
            cardTitle.innerText = data.title;
            cardText.innerText = 'BY: ' + data.by; 
            cardButton.innerText = 'Read More'
            cardButton.href = data.url
            footer.innerText = 'Score: ' + data.score + '     Comments: ' + data.descendants

            })

    index += 1;

    };

});






// cardSection.appendChild(document.createElement('div')).classList.add('card', 'w-75')
