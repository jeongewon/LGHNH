let financialTab = $(".financial li");
let alloTab = $(".allo li");
let inveTable1 = $(".inve_table_1");
let inveTable2 = $(".inve_table_2");

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
