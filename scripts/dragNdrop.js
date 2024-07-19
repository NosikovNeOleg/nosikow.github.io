

function meow() {

    let shiftX = event.clientX - block.getBoundingClientRect().left;
    let shiftY = event.clientY - block.getBoundingClientRect().top;
  
    block.style.position = 'absolute';
    block.style.zIndex = 1000;
    document.body.append(block);
  
    moveAt(event.pageX, event.pageY);
  

    function moveAt(pageX, pageY) {
        block.style.left = pageX - shiftX + 'px';
        block.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    
    document.addEventListener('mousemove', onMouseMove);
  
    
    block.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      block.onmouseup = null;
    };
  
  };
  
  block.ondragstart = function() {
    return false;
  };

  function meow3() {

    let shiftX = event.clientX - block3.getBoundingClientRect().left;
    let shiftY = event.clientY - block3.getBoundingClientRect().top;
  
    block3.style.position = 'absolute';
    block3.style.zIndex = 1000;
    document.body.append(block3);
  
    moveAt(event.pageX, event.pageY);
  

    function moveAt(pageX, pageY) {
        block3.style.left = pageX - shiftX + 'px';
        block3.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    
    document.addEventListener('mousemove', onMouseMove);
  
    
    block3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      block3.onmouseup = null;
    };
  
  };
  
  block3.ondragstart = function() {
    return false;
  };







function leftbaropen() {
  document.querySelector(".leftbar").classList.remove("preload");
  document.querySelector(".leftbarbutton").classList.remove("preload");
  document.querySelector(".leftbar").classList.toggle("leftbar2");
  document.querySelector(".leftbarbutton").classList.toggle("leftbarbutton2");
  
}


