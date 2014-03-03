'use strict';

angular.module('supercrabtreegithubioBuildApp')
  .controller('MainCtrl', function ($scope, $http) {

    !function(a){var b=null;a.modal=function(c,d){a.modal.close();var e,f;if(this.$body=a("body"),this.options=a.extend({},a.modal.defaults,d),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),c.is("a"))if(f=c.attr("href"),/^#/.test(f)){if(this.$elm=a(f),1!==this.$elm.length)return null;this.open()}else this.$elm=a("<div>"),this.$body.append(this.$elm),e=function(a,b){b.elm.remove()},this.showSpinner(),c.trigger(a.modal.AJAX_SEND),a.get(f).done(function(d){b&&(c.trigger(a.modal.AJAX_SUCCESS),b.$elm.empty().append(d).on(a.modal.CLOSE,e),b.hideSpinner(),b.open(),c.trigger(a.modal.AJAX_COMPLETE))}).fail(function(){c.trigger(a.modal.AJAX_FAIL),b.hideSpinner(),c.trigger(a.modal.AJAX_COMPLETE)});else this.$elm=c,this.open()},a.modal.prototype={constructor:a.modal,open:function(){var b=this;this.options.doFade?(this.block(),setTimeout(function(){b.show()},this.options.fadeDuration*this.options.fadeDelay)):(this.block(),this.show()),this.options.escapeClose&&a(document).on("keydown.modal",function(b){27==b.which&&a.modal.close()}),this.options.clickClose&&this.blocker.click(a.modal.close)},close:function(){this.unblock(),this.hide(),a(document).off("keydown.modal")},block:function(){var b=this.options.doFade?0:this.options.opacity;this.$elm.trigger(a.modal.BEFORE_BLOCK,[this._ctx()]),this.blocker=a('<div class="jquery-modal blocker"></div>').css({top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",position:"fixed",zIndex:this.options.zIndex,background:this.options.overlay,opacity:b}),this.$body.append(this.blocker),this.options.doFade&&this.blocker.animate({opacity:this.options.opacity},this.options.fadeDuration),this.$elm.trigger(a.modal.BLOCK,[this._ctx()])},unblock:function(){this.options.doFade?this.blocker.fadeOut(this.options.fadeDuration,function(){a(this).remove()}):this.blocker.remove()},show:function(){this.$elm.trigger(a.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=a('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass+" current"),this.center(),this.options.doFade?this.$elm.fadeIn(this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(a.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(a.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove(),this.$elm.removeClass("current"),this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration):this.$elm.hide(),this.$elm.trigger(a.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||a('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},center:function(){this.$elm.css({position:"fixed",top:"50%",left:"50%",marginTop:-(this.$elm.outerHeight()/2),marginLeft:-(this.$elm.outerWidth()/2),zIndex:this.options.zIndex+1})},_ctx:function(){return{elm:this.$elm,blocker:this.blocker,options:this.options}}},a.modal.prototype.resize=a.modal.prototype.center,a.modal.close=function(a){if(b){a&&a.preventDefault(),b.close();var c=b.$elm;return b=null,c}},a.modal.resize=function(){b&&b.resize()},a.modal.isActive=function(){return b?!0:!1},a.modal.defaults={overlay:"#000",opacity:.75,zIndex:1,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},a.modal.BEFORE_BLOCK="modal:before-block",a.modal.BLOCK="modal:block",a.modal.BEFORE_OPEN="modal:before-open",a.modal.OPEN="modal:open",a.modal.BEFORE_CLOSE="modal:before-close",a.modal.CLOSE="modal:close",a.modal.AJAX_SEND="modal:ajax:send",a.modal.AJAX_SUCCESS="modal:ajax:success",a.modal.AJAX_FAIL="modal:ajax:fail",a.modal.AJAX_COMPLETE="modal:ajax:complete",a.fn.modal=function(c){return 1===this.length&&(b=new a.modal(this,c)),this},a(document).on("click.modal",'a[rel="modal:close"]',a.modal.close),a(document).on("click.modal",'a[rel="modal:open"]',function(b){b.preventDefault(),a(this).modal()})}($);

    var images = {};
    var currentImage;
    var currentVideo;

    var isPlaying = false;

    var imageURLs = [
      ["siblings", "img/siblings.jpg"],
      ["color", "img/me-kid.jpg"],
      ["sugar", "img/sugar.jpg"],
      ["dan", "img/dan.jpg"],
      ["multitouch", "img/multitouch.jpg"],
      ["pmstudio", "img/pmstudio.jpg"],
      ["helen", "img/helen.jpg"],
      ["wish", "img/wish.jpg"],
      ["mobilepie", "img/mobilepie.jpg"],
      ["mappingtoolkit", "img/mappingtoolkit.jpg"],
      ["antivjimg", "img/antivj.jpg"],
      ["uwe", "img/uwe.jpg"],
      ["bafta", "img/bafta.jpg"],
      ["bikes", "img/bikes.jpg"],
      ["bestival", "img/bestival.jpg"],
      ["cornelius", "img/thecornelius.jpg"],
      ["aardman", "img/aardman.jpg"],
      ["sustrans", "img/sustrans.jpg"]
    ];

    var videos = {};

    function init(){
      preloadImages();
      videos.musionvideo = $("#musionvideo");
      videos.jeffhanvideo = $("#jeffhanvideo");
      videos.antivjvideo = $("#antivjvideo");
      $("#body-text>p>a").on("mousedown", onBodyTextLinkClick);
      $("body").on("mouseup", tryHideModal);
      window.onresize = onResize;
      $.modal.defaults = {
        overlay: "#000",
        opacity: 0.75,
        zIndex: 1,
        escapeClose: true,
        clickClose: true,
        closeText: 'Close',
        showClose: false,
        modalClass: "modal",
        spinnerHtml: null,
        showSpinner: true,
        fadeDuration: null,
        fadeDelay: 1.0
      };
    }
    function preloadImages(){
      for ( var i = 0; i < imageURLs.length; i++) {
        var img = new Image();
        img.name = imageURLs[i][0];
        img.onload = onImageLoad;
        img.src = imageURLs[i][1];
      }
    }

    function onImageLoad(e){
      var img = e.target;
      images[img.name] = {img:e.target, width:e.target.width, maxWidth:$(window).innerWidth()-20};
    }

    function onBodyTextLinkClick(e){
      if(e.target.id !== 'hireme') {
        e.preventDefault();
      }
      else {
        return;
      }
      if (e.target.id === 'musion' || e.target.id === 'jeffhan' || e.target.id === 'antivj') {
        showVideo(e);
      } else if (e.target.id === 'music') {
        toggleMusic();
      } else {
        showImage(e);
      }
    }
    function toggleMusic() {
      if (isPlaying) {
        $("#music-tag")[0].pause();
        $("#music").html("music,");
        $("#music").css("backgroundColor", "white");
        $("#music").css("color", "#75C7EF");
        $("#music").css("padding-left", "0");
        $("#music").css("padding-right", "0");
      } else {
        $("#music-tag")[0].play();
        $("#music").html("mute,");
        $("#music").css("backgroundColor", "#75C7EF");
        $("#music").css("color", "white");
        $("#music").css("padding-left", "3px");
        $("#music").css("padding-right", "3px");
      }
      isPlaying = !isPlaying;
    }
    function showVideo(e) {
      currentVideo = videos[e.target.id+ "video"];
      console.log(currentVideo)

      currentVideo.css("display", "block");
      $(".modal").empty();
      $(".modal").append(currentVideo);
      currentVideo[0].play();
      $.modal.resize();
      $(".modal").modal();
    }
    function tryHideModal() {
      $.modal.close();
    }

    function showImage(e) {
      currentImage = images[e.target.id];
      $(".modal").empty();
      $(".modal").append(currentImage.img);
      $(".modal>img").width(currentImage.width > $(window).innerWidth()-20 ? $(window).innerWidth()-20 : currentImage.width);
      $.modal.resize();
      $(".modal").modal();
    }

    function onResize(){
      for ( var img in images ){
        images[img].maxWidth = $(window).innerWidth()-20;
      }
      if (currentImage){
        $(".modal>img").width(currentImage.width > $(window).innerWidth()-20 ? $(window).innerWidth()-20 : currentImage.width);
        $.modal.resize();
      }
    }
  });
