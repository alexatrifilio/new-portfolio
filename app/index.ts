//*       ANIMATIONS          *// 

const arrow = document.getElementById('instruction-link') as HTMLAnchorElement;
arrow?.addEventListener('mouseenter', (e)=>{
    document.querySelectorAll('.arrow').forEach(elem =>{
        elem.classList.toggle('active')
        elem.classList.remove('inactive')
    })
})
arrow?.addEventListener('mouseleave', (e)=>{
    document.querySelectorAll('.arrow').forEach(elem =>{
        elem.classList.toggle('inactive')
        elem.classList.remove('active')
    })
})

const sectionTitle = document.querySelectorAll('.section-title');
sectionTitle.forEach( elem => {
    elem.addEventListener('mouseenter', () => {
        console.log('anda')
        elem.classList.toggle('hover-title')
        elem.classList.remove('return-title')
    })

    elem.addEventListener('mouseleave', () => {
        elem.classList.toggle('return-title')
        elem.classList.remove('hover-title')
    })
})



/*    CARD CREATOR        */

const cardCreator = ({id, project, description, repository, deploy }: Data, append) => {

    const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', `card-${id}`)
        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('title');
        cardTitle.appendChild(document.createTextNode(project));
        const cardDescription = document.createElement('p');
        cardDescription.classList.add('description', 'min-description', 'none');
        cardDescription.appendChild(document.createTextNode(description));
        cardDescription.setAttribute('id', 'card-description');
        const btnRepo = document.createElement('a');
        btnRepo.classList.add('btn','primary-btn');
        btnRepo.setAttribute('href', repository);
        btnRepo.setAttribute('id', 'btn-details');
        btnRepo.appendChild(document.createTextNode('Repository'));
        const btnsCont = document.createElement('div');
        const btnDeploy = document.createElement('a');
        btnDeploy.appendChild(document.createTextNode('Deploy'));
        btnDeploy.setAttribute('id', 'btn-edit');
        btnDeploy.setAttribute('href', deploy);


        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        
        btnsCont.appendChild(btnRepo);
        btnsCont.appendChild(btnDeploy);
        card.appendChild(btnsCont);
        
        append.appendChild(card);
}