
  // $('body').append('')
  index = 0;
  imgs = document.getElementById("shidian_img").children; //获得图片节点
  navs = document.getElementById("shidian_nav").children; // 获得右下图片导航的节点

  //下一张轮播图片
  function next_img () {
    index++;
    if (index >= imgs.length) {
      index = 0;
    }
    show_log();
  }

  //正常显示图片
  function show_log () {
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
      imgs[i].className = "";
    }
    //console.log(index)
    if (index >= imgs.length) {
      index = 0;
    }
    imgs[index].style.display = "block";
    imgs[index].className = "active";
  }
  show_log();
  timer = setInterval(next_img, 1000);

  function stop_img () {
    clearInterval(timer);
  }
  function start_img () {
    timer = setInterval(next_img, 1000);
  }

  //随机切换显示图片
  function show_img1 (obj) {
    stop_img();
    index = getIndex(obj.parentNode, obj);
    show_log();

  }

  //向左翻图片
  function left_img () {
    stop_img();
    index--;
    if (index < 0) index = imgs.length - 1;
    show_log();
    start_img();
  }

  //向右翻图片
  function right_img () {
    stop_img();
    index++;
    if (index > imgs.length) index = 0;
    show_log();
    start_img();
  }
  //获得当前的节点
  function getIndex (parent, obj) {
    //console.log(obj.innerHTML);
    e = parent.children;
    for (i = 0; i < e.length; i++) {
      if (e[i] == obj) {
        return i;
      }
    }
  }






