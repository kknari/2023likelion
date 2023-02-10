$(document).mouseup(function (e){
    var LayerPopup = $(".nav_detailbox");
    if(LayerPopup.has(e.target).length === 0){
        $(".nav_detailbox").remove("toggle");
    }
  });