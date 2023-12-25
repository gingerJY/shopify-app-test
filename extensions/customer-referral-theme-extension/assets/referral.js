class Referral extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('222', this.querySelector('[referral-button]'))
    this.querySelector('[referral-button]').addEventListener('click', this.showPopup)
    this.querySelector('[close-button]').addEventListener('click', this.hidePopup);
    document.addEventListener('keydown', ({key}) => key === "Escape" && this.hidePopup);
  }

  disconnectedCallback() {
    this.querySelector('[referral-button]').removeEventListener('click', this.showPopup);
    this.querySelector('[close-button]').removeEventListener('click', this.hidePopup);
    document.removeEventListener('keydown', ({key}) => key === "Escape" && this.hidePopup);
  }

  showPopup = ({currentTarget}) => {
    console.log('showPopup')
    const popupElement = document.querySelector('.xrealReferralPopup');
    currentTarget.classList.add('hidden');
    popupElement.classList.remove('hidden');
  }

  hidePopup = () => {
    console.log('hidePopup')
    const popupElement = document.querySelector('.xrealReferralPopup');
    popupElement.classList.add('hidden');
    this.querySelector('[referral-button]').classList.remove('hidden');
  }
}

customElements.define('xreal-referral', Referral)