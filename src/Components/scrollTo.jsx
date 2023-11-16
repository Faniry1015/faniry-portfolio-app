export const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
        })
    }
}