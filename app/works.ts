
const worksSection = document.getElementById('works-content') as HTMLDivElement;
data.map((project)=>{
    cardCreator(project, worksSection)
})
