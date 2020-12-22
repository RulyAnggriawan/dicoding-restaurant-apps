class LikeButton extends HTMLElement {
  constructor(isLiked = false) {
    super();
    this._isLiked = isLiked;
  }

  connectedCallback() {
    this._isLiked = this.getAttribute('is-liked') || false;
    this._updateState();
    this._render();
  }

  _updateState() {
    if (this._isLiked === 'true' || this._isLiked === true) {
      this._label = 'unlike this restaurant';
      this._logoClass = 'fas fa-heart';
    } else {
      this._label = 'like this restaurant';
      this._logoClass = 'far fa-heart';
    }
  }

  renderLike() {
    this._isLiked = false;
    this._updateState();
    this._render();
  }

  renderLiked() {
    this._isLiked = true;
    this._updateState();
    this._render();
  }

  setClickEvent(func) {
    const button = document.querySelector('#likeButton');
    button.addEventListener('click', func);
  }

  _render() {
    this.innerHTML = `
    <style>
    .like {
      font-size: 18px;
      position: fixed;
      bottom: 16px;
      right: 16px;
      background-color: #89c9b8;
      color: white;
      border: 0;
      border-radius: 50%;
      width: 55px;
      height: 55px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
  }
    </style>
    <button aria-label="${this._label}" id="likeButton" class='like'>
      <i class="${this._logoClass}" aria-hidden="true"></i>
    </button>

    `;
  }
}

customElements.define('like-button', LikeButton);
