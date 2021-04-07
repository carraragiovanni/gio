var axios = require('axios');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.use('.', express.static('public'));

//CAD
app.use('/cad/assembly_cart.html', express.static(__dirname + '/public/CAD/assembly_cart/assembly_cart.pdf'));
app.use('/cad/motor_wrench.html', express.static(__dirname + '/public/CAD/motor_wrench/motor_wrench.pdf'));
app.use('/cad/dogbone_press.html', express.static(__dirname + '/public/CAD/dogbone_press/dogbone_press.pdf'));
app.use('/cad/off-board_charger.html', express.static(__dirname + '/public/CAD/off-board_charger/off-board_charger.pdf'));
app.use('/cad/tool_cart.html', express.static(__dirname + '/public/CAD/Tool_Cart/TOOL_CART_27MAY16_v1.PDF'));

//12M
app.use('/12M/many.html', express.static(__dirname + '/public/12M/many.pdf'));

//compresso
app.use('/compresso/compresso.html', express.static(__dirname + '/public/compresso/compresso.pdf'));

//RESUME
app.use('/resume.html', express.static(__dirname + '/public/resume/Giovanni_Carrara_Resume.pdf'));

//BIKE
app.use('/bike/superTesaComplete.html', express.static(__dirname + '/public/bike/superTesaComplete.pdf'));
app.use('/bike/superTesa.html', express.static(__dirname + '/public/bike/superTesa.pdf'));
app.use('/bike/superTesaPhoto1.html', express.static(__dirname + '/public/bike/superTesaPhoto1.jpg'));
app.use('/bike/superTesaPhoto2.html', express.static(__dirname + '/public/bike/superTesaPhoto2.jpg'));
app.use('/bike/superTesaPhoto3.html', express.static(__dirname + '/public/bike/superTesaPhoto3.jpg'));
app.use('/bike/superTesaPhoto4.html', express.static(__dirname + '/public/bike/superTesaPhoto4.jpg'));

//NOTES
app.use('/notes/notes.html', express.static(__dirname + '/public/notes/notes.mov'));

//MODELBOAT
app.use('/modelBoat/modelBoat.html', express.static(__dirname + '/public/modelBoat/modelBoat.PNG'));
app.use('/modelBoat/oRingModelBoatCalc.html', express.static(__dirname + '/public/modelBoat/radialInnerSealing-2019-05-13-21-18-27.pdf'));
app.use('/modelBoat/oRingModelBoatDWG.html', express.static(__dirname + '/public/modelBoat/modelBoatOring.pdf'));

//COVERLETTER
app.use('/glacier_cover_letter.html', express.static(__dirname + '/public/cover_letter/glacier_cover_letter.pdf'));

app.listen(process.env.PORT || 4600);


app.route('/sendsms').post(async function (req, res) {
    axios({
        method: 'POST',
        url: `https://rest-api.d7networks.com/secure/send`,
        headers: {
            'Authorization': 'Basic eWhhazM5OTE6MDB6MndDZG0=',
            'Content-Type': 'application/json',
            'Postman-Token': 'e747d85c-21d3-411c-acf5-f93d2977598b',
            'cache-control': 'no-cache'
        },
        data: {
            'to': '0012158375180',
            'content': `${req.query.body}`,
            'from':'smsinfo'
        },
    }).then(function (response) {
        res.send({
            response: response.data
        });
    })
});