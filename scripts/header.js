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
