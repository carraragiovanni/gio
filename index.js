var express = require('express');
var app = express();
app.use(express.static('public'));

app.use('.', express.static('public'));

//CAD
app.use('/cad/assembly_cart.html', express.static(__dirname + '/public/CAD/assembly_cart/assembly_cart.pdf'));
app.use('/cad/motor_wrench.html', express.static(__dirname + '/public/CAD/motor_wrench/motor_wrench.pdf'));
app.use('/cad/dogbone_press.html', express.static(__dirname + '/public/CAD/dogbone_press/dogbone_press.pdf'));
app.use('/cad/off-board_charger.html', express.static(__dirname + '/public/CAD/off-board_charger/off-board_charger.pdf'));
app.use('/cad/tool_cart.html', express.static(__dirname + '/public/CAD/tool_cart/TOOL_CART_27MAY16_v1.PDF'));
app.use('/12M/many.html', express.static(__dirname + '/public/12M/many.PDF'));

//RESUME
app.use('/resume.html', express.static(__dirname + '/public/resume/Giovanni_Carrara_Resume.pdf'));

//BIKE
app.use('/bike/superTesa.html', express.static(__dirname + '/public/bike/superTesa.pdf'));

app.listen(process.env.PORT || 4603);
