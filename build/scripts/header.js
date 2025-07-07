function linkToAnchor(sourceElementName, targetElementName) {
    const sourceElement = document.getElementById(sourceElementName);
    const targetElement = document.getElementById(targetElementName);
    if (sourceElement && targetElement) {
        sourceElement.addEventListener('click', () => {
            targetElement.scrollIntoView({block: 'center'});
        })
    }
}

linkToAnchor('link-to-skills', 'skills');
linkToAnchor('link-to-projects', 'projects');
linkToAnchor('link-to-contact', 'contact');
linkToAnchor('more', 'skills');

function updateYearOfExperienceCount() {
    const displaySelector = document.getElementById('years-xp')
    if (!displaySelector) {
        return;
    }
    displaySelector.innerHTML = new Date(new Date() - Date.parse('2020-03-01')).getFullYear() - 1970;
}
updateYearOfExperienceCount();