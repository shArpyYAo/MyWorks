var DHTMLSprite = function(params)
{
    var width = params.width;
    var height = params.height;
    var imagesWidth = params.imagesWidth;
    $element = params.$drawTarget.append("<div/>").find(":last");
    elemStyle = $element[0].style;
    mathFloor = Math.floor;
    $element.css
    ({
        position:"absolute",
        width:width,
        height:height,
        backgroundImage:"url(" + params.images + ")"
    });
    var that = 
    {
        draw:function(x,y)
        {
            elemStyle.left = x + "px";
            elemStyle.top = y + "px";
        },
        changeImage:function(index)
        {
            index *= width;
            var vOffset = -mathFloor(index / imagesWidth) * height;
            var hOffset = -index % imagesWidth;
            elemStyle.backgroundPosition = 
                hOffset + "px " + vOffset + "px";
        },
        show:function()
        {
            elemStyle.display = "block";
        },
        change:function(params)
        {
            //alert(params)
            $("#draw-target" + 47).children().css("animation","test2 0.7s 1s");
            /*$("#draw-target" + 47).children().css("animation-fill-mode","forwards");*/
        },
        destroy:function()
        {
            $element.remove();
        }
    };
    return that;
};

$(document).ready(function()
{
   var params = 
    {
        test:["dist/goddesC.jpg","dist/joker.jpg","dist/noir.jpg","dist/queen.jpg"],
        spriteI:1,
        spriteJ:0,
        spriteK:0,
        images:"dist/goddesC.jpg",
        /*1000*562*/
        /*500*300*/
        imagesWidth:500,
        width:125,/*125*/
        height:100,/*100*/
        $drawTarget:$("#draw-target")
    };
    /*var sprite1 = DHTMLSprite(params);
    sprite1.draw(400,0);*/
    /*0-11 12-23 24-35 36-47*/
    for(params.spriteJ = 0;params.spriteJ < 4;params.spriteJ++)
    {
        params.images = params.test[params.spriteJ];
        if(params.spriteJ == 0)
        {
            params.spriteI = 0;
            params.spriteK = 4;
            params.images = params.test[0];
        }
        else if(params.spriteJ == 1)
        {
            params.spriteI = 12;
            params.images = params.test[1];
            params.spriteK = 16;
        }
        else if(params.spriteJ == 2)
        {
            params.spriteI = 24;
            params.images = params.test[2];
            params.spriteK = 28;
        }
        else if(params.spriteJ == 3)
        {
            params.spriteI = 36;
            params.images = params.test[3];
            params.spriteK = 40;
        }
        
        for(params.spriteI = params.spriteI;params.spriteI < params.spriteK;params.spriteI++)
        {
            params.$drawTarget = $("#draw-target" + params.spriteI);
            sprite1 = DHTMLSprite(params);
            if(params.spriteI >= 0 && params.spriteI < 12)
            {
                sprite1.changeImage(params.spriteI);
                sprite1.draw(400 + (126 * params.spriteI),0);
            }
            else if(params.spriteI >= 12 && params.spriteI < 24)
            {
                sprite1.changeImage(params.spriteI - 12);
                sprite1.draw(400 + (126 * (params.spriteI - 12)),0);
            }
            else if(params.spriteI >= 24 && params.spriteI < 36)
            {
                sprite1.changeImage(params.spriteI - 24);
                sprite1.draw(400 + (126 * (params.spriteI - 24)),0);
            }
            else if(params.spriteI >= 36)
            {
                sprite1.changeImage(params.spriteI - 36);
                sprite1.draw(400 + (126 * (params.spriteI - 36)),0);
            }
            /*sprite1.changeImage(params.spriteI);*/
            /*sprite1.draw(400 + (126 * params.spriteI),0);*/
        }
        
        params.spriteK = params.spriteK + 4;
        for(params.spriteI = params.spriteI;params.spriteI < params.spriteK;params.spriteI++)
        {
            params.$drawTarget = $("#draw-target" + params.spriteI);
            sprite1 = DHTMLSprite(params);
            if(params.spriteI >= 0 && params.spriteI < 12)
            {
                
                sprite1.changeImage(params.spriteI);
                sprite1.draw(400 + (126 * (params.spriteI - 4)),101);
            }
            else if(params.spriteI >= 12 && params.spriteI < 24)
            {
                sprite1.changeImage(params.spriteI - 12);
                sprite1.draw(400 + (126 * (params.spriteI - 16)),101);
            }
            else if(params.spriteI >= 24 && params.spriteI < 37)
            {
                sprite1.changeImage(params.spriteI - 24);
                sprite1.draw(400 + (126 * (params.spriteI - 28)),101);
            }
            else if(params.spriteI > 37)
            {
                sprite1.changeImage(params.spriteI - 36);
                sprite1.draw(400 + (126 * (params.spriteI - 40)),101);
            }
            /*sprite1.changeImage(params.spriteI);
            sprite1.draw(400 + (126 * (params.spriteI - 4)),101);*/
        }
        
        params.spriteK = params.spriteK + 4;
        for(params.spriteI = params.spriteI;params.spriteI < params.spriteK;params.spriteI++)
        {
            params.$drawTarget = $("#draw-target" + params.spriteI);
            sprite1 = DHTMLSprite(params);
            if(params.spriteI >= 0 && params.spriteI < 12)
            {
                sprite1.changeImage(params.spriteI);
                sprite1.draw(400 + (126 * (params.spriteI - 8)),202);
            }
            else if(params.spriteI >= 12 && params.spriteI < 24)
            {
                sprite1.changeImage(params.spriteI - 12);
                sprite1.draw(400 + (126 * (params.spriteI - 20)),202);
            }
            else if(params.spriteI >= 24 && params.spriteI < 37)
            {
                sprite1.changeImage(params.spriteI - 24);
                sprite1.draw(400 + (126 * (params.spriteI - 32)),202);
            }
            else if(params.spriteI > 36)
            {
                sprite1.changeImage(params.spriteI - 36);
                sprite1.draw(400 + (126 * (params.spriteI - 44)),202);
            }
            /*sprite1.changeImage(params.spriteI);
            sprite1.draw(400 + (126 * (params.spriteI - 8)),202);*/
        }
        
    }
    var timesRun = 0;
    params.spriteJ = 0;
    //$("#draw-target" + 46).children().css("opacity","0");
    /*（只沿着 DOM 树向下遍历单一层级）查询直接的子元素。而不管子元素的子元素。*/
    //setInterval(sprite1.change,2000,params.spriteI);
    var interval = setInterval(function()
    {/*0-11 12-23 24-35 36-47*/
        timesRun += 1;
        //alert("timesRun:"+timesRun);
        if((timesRun%2) == 0)
        {
            for(params.spriteI = 36;params.spriteI <= 47;params.spriteI++)
            {
                //alert(params.spriteJ)
                $("#draw-target" + params.spriteI).children().css("opacity","1");
                $("#draw-target" + params.spriteI).children().css("animation","test2 0.3s " +params.spriteJ + "s");
                $("#draw-target" + params.spriteI).children().css("animation-fill-mode","forwards");
                params.spriteJ = params.spriteJ + 0.3
            }
            params.spriteJ = params.spriteJ + 2;
            for(params.spriteI = 24;params.spriteI <= 35;params.spriteI++)
            {
                //alert(params.spriteJ)
                $("#draw-target" + params.spriteI).children().css("opacity","1");
                $("#draw-target" + params.spriteI).children().css("animation","test2 0.3s " +params.spriteJ + "s");
                $("#draw-target" + params.spriteI).children().css("animation-fill-mode","forwards");
                params.spriteJ = params.spriteJ + 0.3
            }
            params.spriteJ = params.spriteJ + 2;
            for(params.spriteI = 12;params.spriteI <= 23;params.spriteI++)
            {
                //alert(params.spriteJ)
                $("#draw-target" + params.spriteI).children().css("opacity","1");
                $("#draw-target" + params.spriteI).children().css("animation","test2 0.3s " +params.spriteJ + "s");
                $("#draw-target" + params.spriteI).children().css("animation-fill-mode","forwards");
                params.spriteJ = params.spriteJ + 0.3
            }
        }
        else
        {
            for(params.spriteI = 12;params.spriteI <= 47;params.spriteI++)
            {
                //alert(params.spriteJ)
                $("#draw-target" + params.spriteI).children().css("opacity","0");
                $("#draw-target" + params.spriteI).children().css("animation","test1 0.3s " +params.spriteJ + "s");
                $("#draw-target" + params.spriteI).children().css("animation-fill-mode","forwards");
                params.spriteJ = params.spriteJ + 0.3
            }
        }
        params.spriteJ = 0;
    }, 16000);
    //setInterval(sprite1.show,1000,"params");
});