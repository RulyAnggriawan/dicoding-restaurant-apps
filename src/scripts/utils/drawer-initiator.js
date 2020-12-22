const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('hidden');
  },
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('hidden');
  },
};

export default DrawerInitiator;
