$(document).ready(function() {
    $.getJSON("projetos.json", function(data) {
        let projects = data.projects; // Considerando que seus projetos estão em uma array chamada "projects"
        for (let project of projects) {
            let projectDiv = `
                <div class="project" id="${project.id}" onmouseover="onHover(this)" onmouseout="onMouseOut(this)">
                    <div class="project-overlay"></div>
                    <img src="${project.image}" class="project-image">
                    <div class="project-tags">${project.tags.join(", ")}</div>
                    <div class="project-name">${project.name}</div>
                    <div class="project-description">${project.description}</div>
                    <a href="projectDetails.html?id=${project.id}" class="project-button">Mais...</a>
                </div>
            `;
            $(".projects").append(projectDiv);
        }
    });
});

function onHover(projectDiv) {
    $(projectDiv).find(".project-image").css("filter", "grayscale(40%)");
    $(projectDiv).find(".project-overlay").css("opacity", "0.8");
    $(projectDiv).find(".project-image").css("opacity", "0.4");
    
    $(projectDiv).find(".project-tags, .project-name, .project-description, .project-button").css("display", "block");
}

function onMouseOut(projectDiv) {
    $(projectDiv).find(".project-image").css("filter", "none");
    $(projectDiv).find(".project-overlay").css("opacity", "0");
    $(projectDiv).find(".project-image").css("opacity", "1");
    $(projectDiv).find(".project-tags, .project-name, .project-description, .project-button").css("display", "none");
}