(function(root,factory){
    if(typeof define==='function'&&define.amd){
        define([],(function(){
            return factory(root);
        }));

    }else if (typeof exports==='object'){
        module.exports=factory(root);
    }else{
        root.SmoothScroll=factory(root);
    }
})(typeof global !=='undefined'?global: typeof window !=='undefined'?window:this,(function(window){
    'use strict';
}))
//
//default settings
//
var defaults={
    //selectors
    ignore:'[data-scroll-ignore]',
    header:null,
    topOnEmptyHash:true,
    //speed &duration
    speed:1000,
    speedAsDuration:false,
    durationMax:null,
    durationMin:null,
    clip:true,
    offset:50,
    //easing
    easing:'easeInOutCubic',
    customEasing:null,
    //History
    updateURL:true,
    popstate:true
}