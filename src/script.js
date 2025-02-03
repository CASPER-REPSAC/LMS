const progressBarEl = document.getElemnetById('progress_bar');
window.addEventListener('scroll', () => {
    let height = docuemnt.body.scrollHeight - window.innerHeight;
    let scrollPosition = document.documentElement.scrollTop;
    let width = (scrollPosition / height) * 100;
    progressBarEl.style.width = `${width}%`;
})