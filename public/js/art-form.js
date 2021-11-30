//client side JS
const contents = [
    {
        id: 1,
        title: 'painting',
        img: '../images/painting-home.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 2,
        title: 'illustrator',
        img: '../images/illustrator-home.jpeg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 3,
        title: 'poster-design',
        img: '../images/poster-design-2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 4,
        title: 'sculpture',
        img: '../images/poster-design-home.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 1,
        title: 'painting',
        img: '../images/painting-2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 2,
        title: 'illustrator',
        img: '../images/illustrator-2.jpeg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
]

const sectionCenter = document.querySelector('.art-form')
window.addEventListener('DOMContentLoaded', function () {
    displayArtForms(contents)
})

function displayArtForms(contents) {
    let displayForm = contents.map(function (content) {
        return `
            <article class="art-form-photo">
                <a href=#>
                    <img src=${content.img} class="photo image" alt="form-image">
                    <div class='art-form-box middle'>
                        <div class='art-form-title text'>${content.title}</div>
                    </div>
                </a>
            </article>
        `
    })
    displayForm = displayForm.join('')
    sectionCenter.innerHTML = displayForm
}
console.log(document)
//on scorll change navabr colour
document.querySelector(document).ready(function () {
    document.querySelector(window).scroll(function () {
        var scroll = document.querySelector(window).scrollTop;
        if (scroll > 300) {
            document.querySelector(".navbar-nav").css("background", "blue");
        }

        else {
            document.querySelector(".navbar-nav").css("background", "#333");
        }
    })
})

/*

`<section class="art-form-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="art-form">
                        <div class="art-info">
                            <img src=${content.img} class="photo" alt=${content.title}>
                            <h2>${content.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`


    <div class="art-info">
                    <h2>${content.title}</h2>
                </div>
*/