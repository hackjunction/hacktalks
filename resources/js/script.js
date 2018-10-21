$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

    /* Ticket Toggle */
    $('#ticket-attendee').click(function() {
        $('#attendee-options').removeClass('display-none');
        $('#student-options').addClass('display-none');
        $('#ticket-attendee').addClass('option-is-active');
        $('#ticket-student').removeClass('option-is-active');
    });

    $('#ticket-student').click(function() {
        $('#student-options').removeClass('display-none');
        $('#student-options').addClass('display-block');
        $('#attendee-options').addClass('display-none');
        $('#ticket-attendee').removeClass('option-is-active');
        $('#ticket-student').addClass('option-is-active');
    });

    /* Workshops Toggle */
    $('#workshop-cloud').click(function() {
        $('#cloud-workshops').removeClass('display-none');
        $('#ai-workshops').addClass('display-none');
        $('#workshop-cloud').addClass('option-is-active');
        $('#workshop-all, #workshop-ai').removeClass('option-is-active');
    });

    $('#workshop-ai').click(function() {
        $('#cloud-workshops').addClass('display-none');
        $('#ai-workshops').removeClass('display-none');
        $('#workshop-ai').addClass('option-is-active');
        $('#workshop-all, #workshop-cloud').removeClass('option-is-active');
    });

    $('#workshop-all').click(function() {
        $('#ai-workshops, #cloud-workshops').removeClass('display-none');
        $('#workshop-all').addClass('option-is-active');
        $('#workshop-ai, #workshop-cloud').removeClass('option-is-active');
    });

    /* Modal */

    $('#trigger_jasmine').click(function() {
        $('#jasmine_modal').removeClass('display-none');
        $('#jasmine_modal').addClass('display-block');
    });

    $('#trigger_mikko').click(function() {
        $('#mikko_modal').removeClass('display-none');
        $('#mikko_modal').addClass('display-block');
    });

    $('#trigger_ines').click(function() {
        $('#ines_modal').removeClass('display-none');
        $('#ines_modal').addClass('display-block');
    });

    $('#trigger_charlie').click(function() {
        $('#charlie_modal').removeClass('display-none');
        $('#charlie_modal').addClass('display-block');
    });

    $('#trigger_michael').click(function() {
        $('#michael_modal').removeClass('display-none');
        $('#michael_modal').addClass('display-block');
    });

    /* WORKSHOP */

    $('#trigger_marko').click(function() {
        $('#marko_modal').removeClass('display-none');
        $('#marko_modal').addClass('display-block');
    });

    $('#trigger_goran').click(function() {
        $('#goran_modal').removeClass('display-none');
        $('#goran_modal').addClass('display-block');
    });

    $('#trigger_tuomas').click(function() {
        $('#tuomas_modal').removeClass('display-none');
        $('#tuomas_modal').addClass('display-block');
    });

    $('.close-button').click(function() {
        $('.modal').removeClass('display-block');
        $('.modal').addClass('display-none');
    });

    $(document).click(function(event) {
    // if user click on anything except the modal itself close the modal
      if (!$(event.target).closest("#trigger_jasmine, #trigger_mikko, #trigger_ines, #trigger_charlie, #trigger_michael, #trigger_marko, #trigger_goran, #trigger_tuomas, .modal-content").length) {
        
        // Handle speaker modals
        $('#jasmine_modal, #mikko_modal, #ines_modal, #charlie_modal, #michael_modal').removeClass('display-block');
        $('#jasmine_modal, #mikko_modal, #ines_modal, #charlie_modal, #michael_modal').addClass('display-none');
        
        // Handle workshop modals
        $('#marko_modal, #goran_modal, #tuomas_modal').removeClass('display-block');
        $('#marko_modal, #goran_modal, #tuomas_modal').addClass('display-none');
      }
    });
});
