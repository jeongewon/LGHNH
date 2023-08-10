/* 이은서 nav */
let mainMenu = $(".origin .main_menu > li"),
  twodebth = $(".main_menu li ul"),
  formLabel = $(".search_bar label"),
  header = $(".origin"),
  aside_header = $(".aside"),
  width = $(window).width(),
  close_aside = $(".close_btn"),
  open_aside = $(".aside_btn"),
  clone = $(".header-clone"),
  c_mainmenu = clone.find(".main_menu > li"),
  c_twodebth = clone.find(".main_menu li ul"),
  title = $(".title > a"),
  info = $(".info");

c_mainmenu.hover(
  function () {
    clone.css({
      paddingBottom: "54px",
    }),
      c_twodebth.css({
        display: "flex",
      }),
      $(".line").css({
        opacity: 1,
      });
  },
  function () {
    clone.css({
      paddingBottom: "47px",
    }),
      c_twodebth.css({
        display: "none",
      }),
      $(".line").css({
        opacity: 0,
      });
  }
);
$("label").mouseenter(function () {
  if (clone.hasClass("visible")) {
    clone.find(".menu .main_menu").css({
      visibility: "hidden",
    });
  } else {
    $(".menu .main_menu").css({
      visibility: "hidden",
    });
  }
});
$("form").mouseleave(function () {
  clone.find(".main_menu").css({
    visibility: "visible",
  });
});
$(".lang").mouseenter(function () {
  $(".lang_list").css({
    display: "block",
  });
});
$(".lang_list").mouseleave(function () {
  $(".lang_list").css({
    display: "none",
  });
});
/* aside */
title.on('click', function (e) {
  e.preventDefault();
  $(this).parent().siblings('li').find('> ul').slideUp();
  $(this).parent().find('> ul').slideToggle();
  $(this).parent().siblings('.title').find('a').removeClass('active');
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).siblings('ul').find('li > ul').slideDown();
  }else{
    $(this).siblings('ul').find('li > ul').slideUp();
  }
});

open_aside.click(function () {
  $(".aside_menu_side").css({ right: "0" });
});
close_aside.click(function () {
  $(".aside_menu_side").css({ right: "-286px" });
  open_aside.show();
  $(this).removeClass("active");
  title.parent().find("> ul").slideUp();
});
/* resize */
$(window).resize(function () {
  width = $(window).width();
  if (width > 768) {
    header.show();
  } else {
    header.hide();
    $(".aside_menu_side").css({ right: "-286px" });
  }
});

let stockApi = $(".stockapi li");
let financialTab = $(".financial li");
let alloTab = $(".allo li");
let inveTable1 = $(".inve_table_1");
let inveTable2 = $(".inve_table_2");

stockApi.click(function () {
  stockApi.removeClass("active");
  $(this).addClass("active");
});

financialTab.click(function () {
  financialTab.removeClass("active");
  $(this).addClass("active");
  let idx = $(this).index();
  inveTable1.hide();
  $("#in" + idx).show();
});

alloTab.click(function () {
  alloTab.removeClass("active");
  $(this).addClass("active");
  let idx = $(this).index();
  inveTable2.hide();
  $("#al" + idx).show();
});

// $.getJSON('경로', 할일);
$.getJSON(
  "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=oZsqCqu3rv9%2Frp1M6cXfKdEN%2Fpyf02cYdsBynYdUCzHV8lbaV8yxaqtTdCqXshKxu2wwUaoIZ0%2FU2uO0cFIu5Q%3D%3D&resultType=json&likeItmsNm=LG",
  function (data) {
    console.log(data);

    let LGhnh = data.response.body.items.item[6];
    let LGhnhWu = data.response.body.items.item[7];
    let inveTable1 = $(".inve_table_0 table").eq(0);
    let inveTable2Menu = $(".inve_table_0 table").eq(1).find("tr:nth-child(1)");
    let inveTable2Top = $(".inve_table_0 table").eq(1).find("tr:nth-child(2)");
    let inveTable2Down = $(".inve_table_0 table").eq(1).find("tr:nth-child(3)");
    let naNum = 1000000000;
    console.log(inveTable1);

    inveTable1
      .find("td p")
      .append(
        LGhnh.basDt.slice(0, 4) +
          "-" +
          LGhnh.basDt.slice(4, 6) +
          "-" +
          LGhnh.basDt.slice(6, 8)
      );
    inveTable1.find("tr:first td:last").append($.number(LGhnh.clpr));
    inveTable1.find("tr:last td:last").append($.number(LGhnhWu.clpr));
    inveTable2Top.find("td:nth-child(2)").append($.number(LGhnh.hipr));
    inveTable2Top.find("td:nth-child(3)").append($.number(LGhnh.lopr));
    inveTable2Top.find("td:nth-child(4)").append($.number(LGhnh.trqu));
    inveTable2Top
      .find("td:nth-child(5)")
      .append($.number(Math.ceil(LGhnh.mrktTotAmt / naNum)));
    inveTable2Down.find("td:nth-child(2)").append($.number(LGhnhWu.hipr));
    inveTable2Down.find("td:nth-child(3)").append($.number(LGhnhWu.lopr));
    inveTable2Down.find("td:nth-child(4)").append($.number(LGhnhWu.trqu));
    inveTable2Down
      .find("td:nth-child(5)")
      .append($.number(Math.ceil(LGhnhWu.mrktTotAmt / naNum)));

    inveTable2Menu.css({ backgroundColor: "#d9dadb" });
  }
);

/* 이원 aside */
let goTop = $("#top");
$(window).on("scroll", function () {
  let tct = $(this).scrollTop();
  if (tct > 500) {
    goTop.addClass("active");
  } else {
    goTop.removeClass("active");
  }
});
goTop.click(function (e) {
  e.preventDefault();
  $("html,body").stop().animate({ scrollTop: 0 }, "easeInCubic");
});
