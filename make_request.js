var
	request = require('request')
,	fs 	= require('fs')
;

    var formParam = {
                title: "testing single image"
              , caption: "Caption of image to test"
              , tags:"spa, saloon"
              , trademark: "la saloon trademark"
              , is_cover_photo: false
              , image: fs.createReadStream(__dirname + '/dummyImage.jpg')

            };
            var r = request({
                 method: 'POST'
                , url: "http://localhost:3000/upload" 
              , body: formParam
                , formData: formParam
                , json: true
            }, function(err, res, body){
                console.log("body ", body);
            });
	
