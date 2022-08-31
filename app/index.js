//*       ANIMATIONS          *// 
var arrow = document.getElementById('instruction-link');
arrow === null || arrow === void 0 ? void 0 : arrow.addEventListener('mouseenter', function (e) {
    document.querySelectorAll('.arrow').forEach(function (elem) {
        elem.classList.toggle('active');
        elem.classList.remove('inactive');
    });
});
arrow === null || arrow === void 0 ? void 0 : arrow.addEventListener('mouseleave', function (e) {
    document.querySelectorAll('.arrow').forEach(function (elem) {
        elem.classList.toggle('inactive');
        elem.classList.remove('active');
    });
});
var sectionTitle = document.querySelectorAll('.section-title');
sectionTitle.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        console.log('anda');
        elem.classList.toggle('hover-title');
        elem.classList.remove('return-title');
    });
    elem.addEventListener('mouseleave', function () {
        elem.classList.toggle('return-title');
        elem.classList.remove('hover-title');
    });
});
/*    CARD CREATOR        */
var cardCreator = function (_a, append) {
    var id = _a.id, project = _a.project, description = _a.description, repository = _a.repository, deploy = _a.deploy;
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', "card-" + id);
    var cardTitle = document.createElement('h3');
    cardTitle.classList.add('title');
    cardTitle.appendChild(document.createTextNode(project));
    var cardDescription = document.createElement('p');
    cardDescription.classList.add('description', 'min-description', 'none');
    cardDescription.appendChild(document.createTextNode(description));
    cardDescription.setAttribute('id', 'card-description');
    var btnRepo = document.createElement('a');
    btnRepo.classList.add('btn', 'primary-btn');
    btnRepo.setAttribute('href', repository);
    btnRepo.setAttribute('id', 'btn-details');
    btnRepo.appendChild(document.createTextNode('Repository'));
    var btnsCont = document.createElement('div');
    var btnDeploy = document.createElement('a');
    btnDeploy.appendChild(document.createTextNode('Deploy'));
    btnDeploy.setAttribute('id', 'btn-edit');
    btnDeploy.setAttribute('href', deploy);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    btnsCont.appendChild(btnRepo);
    btnsCont.appendChild(btnDeploy);
    card.appendChild(btnsCont);
    append.appendChild(card);
};
