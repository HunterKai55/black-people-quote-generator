//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let quoteImage = document.querySelector('#quote-image');

const quotes = [{
    quote: "If we are truly a great nation, the truth cannot destroy us.",
    person: ' Nikole Hannah-Jones',
    image: "img/image2.jpg"
}, {
    quote: "I'm a firm believer that language and how we use language determines how we act, and how we act then determines our lives and other people's lives.",
    person: ' Ntozake Shange',
    image: "img/image3.jpg"
}, {
    quote: "Nobody in the world, nobody in history, has ever gotten their freedom by appealing to the moral sense of the people who were oppressing them.",
    person: ' Assata Shakur',
    image: "img/image4.jpg"
}, {
    quote: "A nation that continues year after year to spend more money on  military defense than on programs of social uplift is approaching spiritual death.",
    person: ' Martin Luther King Jr.',
    image: "img/image5.jpg"
}, {
    quote: "There is no greater agony than bearing an untold story inside you.",
    person: '  Maya Angelou',
    image: "img/image6.jpg"
}, {
    quote:  "All of us—who might have probed space, or cured cancer, or built industries—were, instead, black victims of the white man's American social system." ,
    person: ' Malcolm X',
    image: "img/image7.jpg"
}, {
    quote: "Are you going to let someone else's view of who you should be, and what you should do, hold you back?",
    person: ' Charmaine Wilkerson',
    image: "img/image8.jpg"
}, {
    quote: "I learnt that the only way to get a thing done is to start to do it, then keep on doing it, and finally you'll finish it, even if in the beginning you think you can't do it at all.",
    person: ' Langston Hughes',
    image: "img/image9.jpg"
}, {
    quote: "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.",
    person: ' Rosa Parks',
    image: "img/image10.jpg"

} ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    quoteImage.src = quotes[random].image;

})