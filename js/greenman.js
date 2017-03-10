(function(){
  var toggleBtn = document.querySelector('.navbar-toggle');
  var collapsibleMenu = document.querySelector('.navbar-collapse')
  console.log(toggleBtn, collapsibleMenu)

  toggleBtn.addEventListener('click', function(e){
    if(collapsibleMenu.classList.contains('collapse')) {
      collapsibleMenu.classList.remove('collapse');
    }
    else{
      collapsibleMenu.classList.add('collapse');
    }
    e.stopPropagation();
  })
  document.body.addEventListener('click', function(){
    collapsibleMenu.classList.add('collapse');
  })
})();