$(function(){
  /* script 영역 jquery load 사용 예 */
  // $("button").click(function(){
  //   // $(this).next().load("./load_file.html");
  //   // $(this).next().load("./load_file.html p");
  //   let val = $(this).attr("class");
  //   if(val == "p_tag"){
  //     $(this).next().load("./load_file.html p");
  //   }else if(val == "img_tag"){
  //     $(this).next().load("./load_file.html img")
  //   }else if(val == "a_tag"){
  //     $(this).next().load("./load_file.html a")
  //   }
  // });

  $("a").click(function(){
    let thisAttr = $(this).attr("href");

    return false
  })
});
