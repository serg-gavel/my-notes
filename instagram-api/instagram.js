var token = 'ACCESS_TOKEN',
    num_photos = 12;

$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){
            $('.instagram-last').append('<div class="col-6 col-md-6 col-lg-4"><a href="'+data.data[x].link+'" target="_blank"><div class="img-box"><img src="'+data.data[x].images.thumbnail.url+'"></div></a></div>');
        // console.log(data.data[x]);
        }
    },
    error: function(data){
        console.log(data);
    }
});
