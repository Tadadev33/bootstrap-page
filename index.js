const icon_color = ['#154F78', '#AA1E2D', '#FCDA4B', '#39C5F3', '#50B83C', '#6E6E6E'];
const icon_name = ['fa-paste', 'fa-file-invoice-dollar', 'fa-chart-line', 'fa-sitemap', 'fa-chalkboard-teacher', 'fa-address-card', 'fa-file-alt'];
const title = ['ECM', 'Invoicing', 'Reporting', 'Inventory Management', 'Titles', 'Some information Text block', 'Quote2Cup'];

$(()=>{
    var temp = document.getElementsByTagName("template")[0];
    let clon;
    for (let index = 0; index < 11; index++) {
        clon = temp.content.cloneNode(true);
        clon.children[0].children[0].children[1].children[1].innerHTML = title[index%title.length];
        clon.children[0].children[0].children[1].children[0].classList = "fas fa-5x main_icon " + icon_name[index%icon_name.length];
        clon.children[0].children[0].children[1].children[0].style.color = icon_color[index%icon_color.length];
        $('.flex_div').append(clon);
    }
    let tempColor;
    $('.box').hover(        
        function(){
            tempColor = $(this).find('.main_icon').css('color');
            $(this).find('.main_icon').css('color', '#FFFFFF');
        },
        function(){
            $(this).find('.main_icon').css('color', tempColor);
        }    
    );

});