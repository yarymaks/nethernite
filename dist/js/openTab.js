const refs = {
  mainTab: document.getElementById('defaultOpen'),
  pages: document.querySelector('.pages__container'),
  btns: document.querySelectorAll('.pages__button'),
  boxes: document.querySelectorAll('.boxes'),
};

const onOpenPage = () => {
  window.addEventListener('load', () => {
    document.getElementById('monst').style.display = 'block';
    refs.mainTab.className += ' active';
  });
};

const openTab = setName => {
  for (i = 0; i < refs.boxes.length; i++) {
    refs.boxes[i].style.display = 'none';
  }
  document.getElementById(setName).style.display = 'block';
};

const toggleTabs = () => {
  for (var i = 0; i < refs.btns.length; i++) {
    refs.btns[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
      openTab(this.className.split(' ')[1]);
      this.blur();
    });
  }
};

onOpenPage();
toggleTabs();
