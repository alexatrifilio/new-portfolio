var worksSection = document.getElementById('works-content');
data.map(function (project) {
    cardCreator(project, worksSection);
});
