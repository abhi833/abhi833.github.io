let jobs = {}
let completed = []
let errors = []
url = 'http://localhost:5000'
url = 'https://www.cpddextccoep.live/api/predict'

$('#cpddForm').submit(function(e) {
  e.preventDefault();
  $("#error_ind").css("display", "none")
  $("#success_ind").css("display", "none")
  var formData = new FormData(this);
  $.ajax({
       type: 'POST',
       crossDomain:true,
       url: `${url}`,
       contentType: 'multipart/form-data',
       data: formData,
       "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
       },
        cache: false,
        contentType: false,
        processData: false,
       success: (data)=>{
         $("#success_ind").css("display", "block")
         document.getElementById("success_message").innerText = data;
         setTimeout(()=>$("#success_ind").css("display", "none"), 8000)
       },
       error: (msg) => {
         console.log(msg)
         $("#error_ind").css("display", "block")
         setTimeout(()=>$("#error_ind").css("display", "none"), 4000)
       }
  });

})
