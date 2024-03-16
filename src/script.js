$(document).ready(() => {

    function onStart(){
        setTimeout(() => {
            $("#loading-page").addClass("opacity-0");
            setTimeout(() => {
                $("#loading-page").removeClass("flex");
                $("#loading-page").addClass("hidden");
                $("#login-page").removeClass("hidden");
                $("#login-page").addClass("flex");
                setTimeout(() => {
                    $("#login-page").removeClass("opacity-0");
                },100);
            },100);
        },6000);
    }

    onStart();

    function headerSlideShow() {
        const slides = document.querySelectorAll(".slides");
        let index = 0;
    
        function showNext(){
            slides[index].classList.add("opacity-0");
            index = (index + 1) % slides.length;
            slides[index].classList.remove("opacity-0")
        }
    
        setInterval(showNext, 5000);
    }

    headerSlideShow();

    function onLogin(){
        $("#toggle-show-pass").click(() => {
            $("#toggle-show-pass").toggleClass("fa-eye");
            $("#toggle-show-pass").toggleClass("fa-eye-slash");

            if($("#toggle-show-pass").hasClass("fa-eye-slash")){
                $("#password").attr("type","text");
                return;
            }

            $("#password").attr("type","password");
        });

        $("#login-btn").click(() => {
            $("#login-page").removeClass("opacity-1");
            $("#login-page").addClass("opacity-0");
            setTimeout(() => {
                $("#login-page").addClass("hidden");
                $("#dashboard-page").removeClass("hidden");
                $("#dashboard-page").addClass("grid");
                setTimeout(() => {
                    $("#dashboard-page").removeClass("opacity-0");
                }, 100);
            },100);
        });
    }

    
    // $(".to-home").click(() => {
    //     $(".pages").removeClass("opacity-1");
    //     $(".pages").addClass("opacity-0");
    //     setTimeout(() => {
    //         $(".pages").addClass("hidden");
    //         $("#dashboard-page").removeClass("hidden");
    //         $("#dashboard-page").addClass("grid");
    //         setTimeout(() => {
    //             $("#dashboard-page").removeClass("opacity-0");
    //         }, 100);
    //     },100);
    // });

    onLogin();

    function featuresAction(){

        $("#vacation-btn").click(() => {
            $("#dashboard-page").removeClass("opacity-1");
            $("#dashboard-page").addClass("opacity-0");
            setTimeout(() => {
                $("#dashboard-page").addClass("hidden");
                $("#vacation-page").removeClass("hidden");
                $("#vacation-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-page").removeClass("opacity-0");
                }, 100);
            },100);            
        });
        
        $("#homestay-btn").click(() => {
            $("#dashboard-page").removeClass("opacity-1");
            $("#dashboard-page").addClass("opacity-0");
            setTimeout(() => {
                $("#dashboard-page").addClass("hidden");
                $("#homestay-page").removeClass("hidden");
                $("#homestay-page").addClass("grid");
                setTimeout(() => {
                    $("#homestay-page").removeClass("opacity-0");
                }, 100);
            },100);            
        });
        
        
        $("#souvenir-btn").click(() => {
            $("#dashboard-page").removeClass("opacity-1");
            $("#dashboard-page").addClass("opacity-0");
            setTimeout(() => {
                $("#dashboard-page").addClass("hidden");
                $("#souvenir-page").removeClass("hidden");
                $("#souvenir-page").addClass("grid");
                setTimeout(() => {
                    $("#souvenir-page").removeClass("opacity-0");
                }, 100);
            },100);            
        });
        
        $("#culture-btn").click(() => {
            $("#dashboard-page").removeClass("opacity-1");
            $("#dashboard-page").addClass("opacity-0");
            setTimeout(() => {
                $("#dashboard-page").addClass("hidden");
                $("#culture-page").removeClass("hidden");
                $("#culture-page").addClass("grid");
                setTimeout(() => {
                    $("#culture-page").removeClass("opacity-0");
                }, 100);
            },100);            
        });
        
        $("#worshipplace-btn").click(() => {
            $("#dashboard-page").removeClass("opacity-1");
            $("#dashboard-page").addClass("opacity-0");
            setTimeout(() => {
                $("#dashboard-page").addClass("hidden");
                $("#worshipplace-page").removeClass("hidden");
                $("#worshipplace-page").addClass("grid");
                setTimeout(() => {
                    $("#worshipplace-page").removeClass("opacity-0");
                }, 100);
            },100);            
        });
        
        $("#profile-btn").click(() => {
            $("#dashboard-page").removeClass("opacity-1");
            $("#dashboard-page").addClass("opacity-0");
            setTimeout(() => {
                $("#dashboard-page").addClass("hidden");
                $("#profile-page").removeClass("hidden");
                $("#profile-page").addClass("grid");
                setTimeout(() => {
                    $("#profile-page").removeClass("opacity-0");
                }, 100);
            },100);            
        });

        $("#btn-to-agrowisata-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-agrowisata-page").removeClass("hidden");
                $("#vacation-agrowisata-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-agrowisata-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });

        $("#btn-to-nature-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-nature-page").removeClass("hidden");
                $("#vacation-nature-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-nature-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#btn-to-souvenir-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#souvenir-info-page").removeClass("hidden");
                $("#souvenir-info-page").addClass("grid");
                setTimeout(() => {
                    $("#souvenir-info-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#btn-to-culture-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-culture-page").removeClass("hidden");
                $("#vacation-culture-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-culture-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        
        $("#btn-to-education-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-education-page").removeClass("hidden");
                $("#vacation-education-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-education-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#btn-to-culinary-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-culinary-page").removeClass("hidden");
                $("#vacation-culinary-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-culinary-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#btn-to-religi-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-religi-page").removeClass("hidden");
                $("#vacation-religi-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-religi-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#btn-to-history-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-history-page").removeClass("hidden");
                $("#vacation-history-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-history-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#btn-to-ziarah-vacation-page").click(() => {
            $("#vacation-page").removeClass("opacity-1");
            $("#vacation-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-page").addClass("hidden");
                $("#vacation-ziarah-page").removeClass("hidden");
                $("#vacation-ziarah-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-ziarah-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#to-agrowisata-vacation-info").click(() => {
            $("#vacation-agrowisata-page").removeClass("opacity-1");
            $("#vacation-agrowisata-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-agrowisata-page").addClass("hidden");
                $("#vacation-agrowisata-info-page").removeClass("hidden");
                $("#vacation-agrowisata-info-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-agrowisata-info-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
        
        $("#to-buy-tiket-agrowisata").click(() => {
            $("#vacation-agrowisata-info-page").removeClass("opacity-1");
            $("#vacation-agrowisata-info-page").addClass("opacity-0");
            setTimeout(() => {
                $("#vacation-agrowisata-page").addClass("hidden");
                $("#vacation-agrowisata-buyticket-page").removeClass("hidden");
                $("#vacation-agrowisata-buyticket-page").addClass("grid");
                setTimeout(() => {
                    $("#vacation-agrowisata-buyticket-page").removeClass("opacity-0");
                }, 100);
            },100);              
        });
    }

    featuresAction();
});

