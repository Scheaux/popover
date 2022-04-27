export default class App {
  static init() {
    const popoverButton = document.getElementById('popover');
    popoverButton.addEventListener('click', this.popoverOnclick);
  }

  static popoverOnclick(e) {
    const popoverModal = document.querySelector('.popover_modal');
    popoverModal.classList.toggle('hidden');
    App.setPopoverContent('Lorem', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, vel numquam tempore rerum pariatur repudiandae maiores aperiam qui? Laudantium, quia ex? Porro hic, nobis a magni possimus blanditiis facere aut?');
    const popoverRect = popoverModal.getBoundingClientRect();
    const buttonRect = e.target.getBoundingClientRect();

    const topOffset = buttonRect.top - popoverRect.height;
    const leftOffset = (popoverRect.width / 2) - (buttonRect.width / 2);
    popoverModal.style.top = `${topOffset}px`;
    popoverModal.style.left = `${buttonRect.left - leftOffset}px`;
  }

  static setPopoverContent(title, text) {
    const popoverModal = document.querySelector('.popover_modal');
    popoverModal.querySelector('.popover_title').innerText = title;
    popoverModal.querySelector('.popover_text').innerText = text;
  }
}
