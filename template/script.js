function  fbSdkLoaded()
{
     FB.getLoginStatus(function(response) {
        console.log(response);
        //statusChangeCallback(response);
    });


}