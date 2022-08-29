Webcam.set({
    width:350,
    Height:300,
    image_format : 'png',
    png_quality:90
})

camera = document.getElementBId("camera");

Wecam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.verson);

classifire = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modlLoaded);

function check()
{
   img = document.getElementById('capture_image');
   classifier.classify(img, gotResult); 
}

function gotResult(error, result)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}