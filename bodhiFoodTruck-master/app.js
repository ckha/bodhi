var date = new Date();
var currentDate = {
    "UTCdate": date.toUTCString(),
    "day": date.getDate(),
    "month": date.getMonth() + 1,
    "year": date.getFullYear(),
    "weekDay": date.getDay(),
    "MMDDYYYY": date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
}
var today;

// Scheduale Styling Depending on day for Main Page times.
switch (currentDate.weekDay) {
    case 0:
        today = "Sunday";
        $(".nav-pills:nth-child(7)").addClass("active");
        $('#pills-sunday').addClass("active in");
        $('#pills-sunday-tab').addClass("active");
        $('#sunday-hours').css("font-weight", "bold");
        break;
    case 1:
        today = "Monday";
        $(".nav-pills > li:nth-child(1)").addClass("active");
        $('#pills-monday').addClass("active in");
        $('#pills-monday-tab').addClass("active");
        $('#monday-hours').css("font-weight", "bold");
        break;
    case 2:
        today = "Tuesday";
        $(".nav-pills > li:nth-child(2)").addClass("active");
        $('#pills-tuesday').addClass("active in");
        $('#pills-tuesday-tab').addClass("active");
        $('#tuesday-hours').css("font-weight", "bold");
        break;
    case 3:
        today = "Wednesday";
        $(".nav-pills > li:nth-child(3)").addClass("active");
        $('#pills-wednesday').addClass("active in");
        $('#pills-wednesday-tab').addClass("active");
        $('#wednesday-hours').css("font-weight", "bold");
        break;
    case 4:
        today = "Thursday";
        $(".nav-pills > li:nth-child(4)").addClass("active");
        $('#pills-thursday').addClass("active in");
        $('#pills-thursday-tab').addClass("active");
        $('#thursday-hours').css("font-weight", "bold");
        break;
    case 5:
        today = "Friday";
        $(".nav-pills > li:nth-child(5)").addClass("active");
        $('#pills-friday').addClass("active in");
        $('#pills-friday-tab').addClass("active");
        $('#friday-hours').css("font-weight", "bold");
        break;
    case 6:
        today = "Saturday";
        $(".nav-pills > li:nth-child(6)").addClass("active");
        $('#pills-saturday').addClass("active in");
        $('#pills-saturday-tab').addClass("active");
        $('#saturday-hours').css("font-weight", "bold");
        break;
    default:
        console.log("Sorry, can't find date");
        today = "Error";
}

// provide mm/dd/yyyy string as startday and endday parameters
function setAlert(params) {

    var endDate = new Date(params.endDate);

    if (date < endDate || date === endDate) {
        if (params.headerHTML) {
            params.elementSelector.find('.alert').html(params.headerHTML).append(params.message);
        } else {
            params.elementSelector.find('.alert').append(params.message);
        }
        params.elementSelector.css('display', 'block');
        $(".alert").css('display', 'block');
    } else {
        $(".alert").css('display', 'none');
    }

    //$('.newsAlert .timestamp').text('Posted On: ' + params.startDate);
    params.elementSelector.find('.timestamp').text('Posted On: ' + params.startDate);

    if (typeof params.imageSrc !== 'undefined') {
        params.elementSelector.find('.image').css('display', 'block');
        params.elementSelector.find('.image img').attr('src', params.imageSrc);
    }

    if (typeof params.imageWidth !== 'undefined') {
        params.elementSelector.find('.image').css('width', params.imageWidth + "%");
    }
}

var thanksgivingAlert = {
    "startDate": "11/21/2019",
    "endDate": "12/04/2019",
    "elementSelector": $('.newsAlert.alert'),
    "headerHTML": "<strong>**IMPORTANT UPDATE**</strong> <br />",
    "message": "We will be closed from <strong>November 27th</strong> until <strong>December 4th</strong> for Thanksgiving Holidays.",
    "imageSrc": "assets/images/icons/food-truck.png"
}

var xmasAlert = {
    "startDate": "12/17/2019",
    "endDate": "12/27/2019",
    "elementSelector": $('.newsAlert.alert2'),
    "headerHTML": "<strong>**WINTER HOLIDAY HOURS**</strong> <br />",
    "message": "We will closed Wednesday December 25th and Thursday December 26th, and will be back on Friday December 27th.",
    // "imageSrc": "assets/images/icons/food-truck.png"
}

var NYAlert = {
    "startDate": "12/17/2019",
    "endDate": "1/03/2020",
    "elementSelector": $('.newsAlert.alert'),
    "headerHTML": "<strong>**NEW YEAR EVE HOURS**</strong> <br />",
    "message": "We will closed on Wednesday January 1st and will resume regular hours on Thursday January 2nd. Happy Holidays to all and thanks!",
    // "imageSrc": "assets/images/icons/food-truck.png"
}

let vietNYAlert = {
    "startDate": "1/06/2020",
    "endDate": "2/04/2020",
    "elementSelector": $('.newsAlert.alert'),
    "headerHTML": "<strong>**Vietnamese New Year**</strong> <br />",
    "message": "We will closed on January 22nd and will resume regular hours on February 5th. <br /> May the new lunar moon bring you much joy and luck this Vietnamese New Year on January 25th, 2020.",
    "imageSrc": "assets/images/lantern.svg",
    "imageWidth" : 20
}

let renewPermitAlert = {
    "startDate": "02/26/2020",
    "endDate": "3/04/2020",
    "elementSelector": $('.newsAlert.alert'),
    "headerHTML": "<strong>**UPDATE**</strong> <br />",
    "message": "We will closed as of today(2/26) until next Wednesday(3/4) due to truck maintenance. Please give us some time and we will be back in tip-top shape next week. Thank you for your patience.",
};


document.addEventListener("DOMContentLoaded", function(){
    setAlert(renewPermitAlert);
    document.getElementsByClassName('copywriteYear')[0].textContent = currentDate.year;
});
