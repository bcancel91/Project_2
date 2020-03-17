$(document).ready(function () {

    var githubURL1 = "https://api.github.com/users/DariaNau";
    var githubURL2 = "https://api.github.com/users/gusgonz";
    var githubURL3 = "https://api.github.com/users/bcancel91";
    
        $.ajax({
            url: githubURL1,
            method: "GET"
          }).then(function (response) {
    
            console.log(response)
           $(".profile1").replaceWith("<img id='pic1' src="+response.avatar_url+">");
           $(".url1").replaceWith("<a href="+"'"+response.html_url +"'" + "class='btn btn-outline-secondary url1'>View Github Profile<br><i class='fab fa-github fa-1x'></i></a>")
          })

          $.ajax({
            url: githubURL2,
            method: "GET"
          }).then(function (response) {
    
            console.log(response)
           $(".profile2").replaceWith("<img id='pic2' src="+response.avatar_url+">");
           $(".url2").replaceWith("<a href="+"'"+response.html_url +"'" + "class='btn btn-outline-secondary url2'>View Github Profile<br><i class='fab fa-github fa-1x'></i></a>")
          })

          $.ajax({
            url: githubURL3,
            method: "GET"
          }).then(function (response) {
    
            console.log(response)
           $(".profile3").replaceWith("<img id='pic3' src="+response.avatar_url+">");
           $(".url3").replaceWith("<a href="+"'"+response.html_url +"'" + "class='btn btn-outline-secondary url3'>View Github Profile<br><i class='fab fa-github fa-1x'></i></a>")
          })





    })


    


























