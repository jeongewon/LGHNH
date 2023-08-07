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


 // $.getJSON('경로', 할일);
 $.getJSON('https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=oZsqCqu3rv9%2Frp1M6cXfKdEN%2Fpyf02cYdsBynYdUCzHV8lbaV8yxaqtTdCqXshKxu2wwUaoIZ0%2FU2uO0cFIu5Q%3D%3D&resultType=json&itmsNm=LG%EC%83%9D%ED%99%9C%EA%B1%B4%EA%B0%95', function(data){
  console.log(data);
  console.log(data.response.body.items.item[0].mkp)

  let Dhdl = data.response.body.items.item[0];

  $('.dhdl h1').append(Dhdl.clpr);
  $('.dhdl').append(Dhdl.vs);
  $('.dldl').append(Dhdl.hipr);
  $('.dhdh').append(Dhdl.trqu);
  $('.dkdk').append(Dhdl.lopr);
  $('.tntn').append(Dhdl.mrktTotAmt/Dhdl.lstgStCnt);


});
