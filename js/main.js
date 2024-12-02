const testMode = true;
let currentPage = 1;
const itemsPerPage = 3;

async function loadData(language = 'en') {
    const response = await fetch(`data/data-${language}.json`);
    const data = await response.json();
    renderSections(data);
}

function renderSections(data) {
    renderAbout(data.about);
    renderEducation(data.education);
    renderExperience(data.experience);
    renderProjects(data.projects);
    renderSkills(data.skills);
    renderReferences(data.references);
}

function renderAbout(about) {
    document.getElementById('about').innerHTML = `
        <h2>About Me</h2>
        <img src="${about.photo}" alt="${about.name}" class="img-thumbnail mb-3" width="150">
        <h3>${about.name}</h3>
        <p>${about.profession}</p>
        <p>${about.description}</p>
    `;
}

function renderEducation(education) {
    const content = education.map(edu => `
        <li><strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})</li>
    `).join('');
    document.getElementById('education').innerHTML = `
        <h2>Education</h2>
        <ul>${content}</ul>
    `;
}

function renderExperience(experience) {
    const content = experience.map(exp => `
        <li><strong>${exp.role}</strong> at ${exp.company} (${exp.years})</li>
    `).join('');
    document.getElementById('experience').innerHTML = `
        <h2>Work Experience</h2>
        <ul>${content}</ul>
    `;
}

function renderProjects(projects) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProjects = projects.slice(start, end);

    const content = paginatedProjects.map(project => `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                ${testMode ? `<button class="btn btn-danger" onclick="deleteProject('${project.name}')">Delete</button>` : ''}
            </div>
        </div>
    `).join('');

    document.getElementById('projects').innerHTML = `
        <h2>Projects</h2>
        <div>${content}</div>
        <nav>
            <ul class="pagination">
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <button class="page-link" onclick="changePage(-1)">Previous</button>
                </li>
                <li class="page-item">
                    <button class="page-link">${currentPage}</button>
                </li>
                <li class="page-item ${end >= projects.length ? 'disabled' : ''}">
                    <button class="page-link" onclick="changePage(1)">Next</button>
                </li>
            </ul>
        </nav>
        <input type="text" id="searchBox" class="form-control mt-3" placeholder="Search projects...">
        <button class="btn btn-primary mt-2" onclick="searchProjects()">Search</button>
    `;
}

function renderSkills(skills) {
    const content = Object.entries(skills).map(([category, skills]) => `
        <div>
            <h5>${category.charAt(0).toUpperCase() + category.slice(1)}</h5>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </div>
    `).join('');
    document.getElementById('skills').innerHTML = `
        <h2>Skills</h2>
        ${content}
    `;
}

function renderReferences(references) {
    const content = references.map(ref => `
        <li>${ref.name} - ${ref.relation}</li>
    `).join('');
    document.getElementById('references').innerHTML = `
        <h2>References</h2>
        <ul>${content}</ul>
    `;
}

function renderContactForm() {
    document.getElementById('contact').innerHTML = `
        <h2>Contact Me</h2>
        <form onsubmit="return validateContactForm()">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-control">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    `;
}

function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!/^[A-Z][a-z]+/.test(name)) {
        alert('Name must start with an uppercase letter.');
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email is not valid.');
        return false;
    }
    if (message.length < 20) {
        alert('Message must be at least 20 characters long.');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}

function changePage(offset) {
    currentPage += offset;
    loadData();
}

function searchProjects() {
    const query = document.getElementById('searchBox').value.trim();
    if (query.length < 3) {
        alert('Please enter at least 3 characters to search.');
        return;
    }
    // Simulate an API call for search
    alert(`Searching projects with "${query}"`);
}

function deleteProject(projectName) {
    if (confirm(`Are you sure you want to delete ${projectName}?`)) {
        alert(`Project "${projectName}" deleted!`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderContactForm();
});
