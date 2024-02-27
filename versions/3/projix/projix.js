let projix = [{
    name: 'ChatColors',
    img: 'https://blacket.org/content/logo.png',
    desc: 'a blacket.org chat color code generator.',
    link: 'https://bcc.thonker.pro'
}, {
    name: 'Confidence',
    img: 'https://cdn.discordapp.com/avatars/1037119779254829096/c7c2d5c74623a93b39ae6a948dab5b93.png',
    desc: 'really cool bot with a cooler site!',
    link: 'https://confidencebot.xyz'
}, {
    name: 'BlacketWare',
    img: 'https://avatars.githubusercontent.com/u/107235566?s=200&v=4',
    desc: 'blacket.org hacks, documentation, and more.',
    link: 'https://github.com/BlacketWare'
}];

projix.forEach(projik => {
    document.querySelector('.projix').insertAdjacentHTML(`beforeend`, `
        <a class="projik" href="${projik.link}">
            <div class="projikHeader">
                <img class="projikImage" src="${projik.img}"></img>
                <div class="projikTitle">${projik.name}</div>
            </div>
            <div class="projikDesc">${projik.desc}</div>
        </a>
    `);
});