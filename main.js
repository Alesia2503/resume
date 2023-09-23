//Кнопка переход со ссылкой 
document.querySelector('.btn_1').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/CSS-generator/';
};
document.querySelector('.btn_2').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/new_site/';
};
document.querySelector('.btn_3').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/calendar/';
};
document.querySelector('.btn_4').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/site1/';
};
document.querySelector('.btn_5').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/site.2/';
};
document.querySelector('.btn_6').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/site3/';
};
document.querySelector('.btn_7').onclick = function(e) {
  window.location = 'https://alesia2503.github.io/shop/';
};


//подсказки для кнопок
let tooltipElem;
    document.onmouseover = function(e) {
        let target = e.target
        let tooltipHtml = target.dataset.tooltip
        if(!tooltipHtml) return
        tooltipElem = document.createElement('div')
        tooltipElem.className = "tooltip"
        tooltipElem.innerHTML = tooltipHtml
        document.querySelector('.form_btn').append(tooltipElem)
        let coords = target.getBoundingClientRect()
        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2
        if(left < 0) left = 5 

        let top = coords.top - tooltipElem.offsetHeight - 25
        if(top < 0) top = coords.top + target.offsetHeight + 5

        tooltipElem.style.left = left + 'px'
        tooltipElem.style.top = top + 'px'
    }
    document.onmouseout = function(e) {
        if(tooltipElem) {
        tooltipElem.remove()
        tooltipElem = null
        }
    }


//увеличение фотографии
const oGallery = document.querySelector('.gallery');
oGallery.addEventListener('click', function(ev) {
  if (ev.target.tagName != 'IMG') { return false; };
  let oTarget = ev.target, nWidth, nHeight, nRatio = oTarget.offsetWidth / oTarget.offsetHeight;
  let oBig = this.appendChild(document.createElement('DIV'));
  oBig.style.position = `absolute`;
  oBig.style.top = `${oTarget.offsetTop}px`; oBig.style.left = `${oTarget.offsetLeft}px`;
  oBig.style.width = `${oTarget.offsetWidth}px`; oBig.style.height = `${oTarget.offsetHeight}px`;
  if (this.offsetHeight < this.offsetWidth) {
    nHeight = this.offsetHeight; nWidth = nHeight * nRatio;
  } else {
    nWidth = this.offsetWidth; nHeight = nWidth / nRatio;
  };
  oBig.style.background = `center / 100% 100% no-repeat url('${oTarget.currentSrc}')`;
  oBig.insertAdjacentHTML('beforeend', '<div class="close">×</div>');
  oBig.addEventListener('transitionend', function() { this.querySelector('.close').style.opacity = 1; });
  oBig.addEventListener('click', function(ev) {
    ev.stopPropagation();
    this.addEventListener('transitionend', function() { this.remove(); });
    this.style.transition = `.5s ease-in`;
    this.style.height = this.style.width = `0px`;
  oGallery.classList.toggle('show', false);
  });
  oBig.classList.toggle('active');
  oBig.style.width = `${nWidth * 1.3  }px`; oBig.style.height = `${nHeight * 1.3  }px`;
  if (window.matchMedia('(max-width:455px)').matches) {
    oBig.style.width = `${nWidth   }px`; oBig.style.height = `${nHeight  }px`;
  }
  oBig.style.top = `70%`
  if (window.matchMedia('(max-width:400px)').matches) {
    oBig.style.top = `50%`
  }
  oBig.style.left = `50%`;
  oBig.style.transform = `translate(-50%, -50%) rotate(1turn)`;
  oGallery.classList.toggle('show', true);
});

//анимация текста
let elems = document.querySelectorAll('.bold');
for(let elem of elems) {
  elem.onmouseover = function() { 
    this.style.color = "rgba(255, 204, 255)"
    if (window.matchMedia('(max-width:450px)').matches) {return false;};
    this.style.fontSize = "50px"
  }
  elem.onmouseout = function(e) {
    this.style.color = "rgb(0, 0, 0)"
    if (window.matchMedia('(max-width:450px)').matches) {return false;};
    this.style.fontSize = "34px"
  }
}

let names = document.querySelectorAll('.name');
for(let nam of names) {
  nam.onmouseover = function() {
    this.style.color = "rgba(255, 204, 255)"
  }
  nam.onmouseout = function(e) {
    this.style.color = "rgb(0, 0, 0)"
  }
}

let words = document.querySelectorAll('.word');
for(let elem of words) {
  elem.onmouseover = function() {
    this.style.color = "rgba(255, 204, 255)"
  }
  elem.onmouseout = function(e) {
    this.style.color = "rgb(0, 0, 0)"
  }
}