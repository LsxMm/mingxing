sleep(100);var window = floaty.window('<frame><vertical><button id="btn" text="暂停"/><horizontal><button id="speedLow" text="减速" w="80"/><button id="speedHigh" text="加速"w="80"/></horizontal><horizontal><button id="speed" text="x1" w="80"/><button id="stop" text="停止"w="80"/></horizontal></vertical></frame>');window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.myEngine().forceStop()})
var s=1;var speedControl=1;var zuobiaoPath="/sdcard/脚本/zuobiao21.txt";
if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));//快速适配分辨率
} else {
    setScreenMetrics(1080, 2340); //默认分辨率，以下按键位置基于此分辨率
    var x = [410, 680, 950, 1220, 1490, 1760, 2030];
    var y = [980, 870, 760];
    var xy = [];for(var i = 0; i < 21; i++) {xy.push(x[i % 7], y[parseInt(i / 7)])}
}
function ran(){return Math.random()*20-10}
function pre(id,c){while (s != 1) {sleep(100)};if(c==undefined){c=1};press(xy[id*2-2]+ran(),xy[id*2-1]+ran(),c)}
function c4(t) {pre(1,t)};function d4(t) {pre(2,t)};function e4(t) {pre(3,t)};
function f4(t) {pre(4,t)};function g4(t) {pre(5,t)};function a4(t) {pre(6,t)};
function b4(t) {pre(7,t)};function c5(t) {pre(8,t)};function d5(t) {pre(9,t)};
function e5(t) {pre(10,t)};function f5(t) {pre(11,t)};function g5(t) {pre(12,t)};
function a5(t) {pre(13,t)};function b5(t) {pre(14,t)};function c6(t) {pre(15,t)};
function d6(t) {pre(16,t)};function e6(t) {pre(17,t)};function f6(t) {pre(18,t)};
function g6(t) {pre(19,t)};function a6(t) {pre(20,t)};function b6(t) {pre(21,t)};
function sl(t) {while (s != 1) {sleep(100)};sleep(t/speedControl)};
e6();sl(911);a4();sl(45);e4();sl(34);a6();sl(392);a4();sl(461);c5();sl(45);c6();sl(875);b4();sl(42);f4();sl(42);b6();sl(385);b4();sl(460);d5();sl(44);g6();sl(872);g4();sl(44);a6();sl(417);d4();sl(460);g4();sl(51);g6();sl(417);b4();sl(457);c4();sl(43);e6();sl(419);g4();sl(458);c5();sl(44);c6();sl(190);d6();sl(233);e6();sl(231);a6();sl(230);f4();sl(43);c4();sl(32);e6();sl(845);a4();sl(459);d6();sl(244);g6();sl(236);g4();sl(44);e6();sl(419);d4();sl(461);g4();sl(460);c6();sl(459);e4();sl(43);b4();sl(38);a6();sl(385);e4();sl(461);g4();sl(35);c6();sl(427);b4();sl(44);d6();sl(420);g4();sl(42);e6();sl(418);d4();sl(461);g4();sl(463);b4();sl(459);a4();sl(40);e4();sl(22);a4();sl(27);a5();sl(29);e6();sl(29);a6();sl(1710);c5();sl(232);e5();sl(235);a5();sl(232);c6();sl(230);e6();sl(252);a6();sl(231);c6();sl(46);c6();sl(187);e6();sl(240);a5();sl(230);e6();sl(233);a6();sl(234);c6();sl(234);e6();sl(465);a6();sl(232);c6();sl(231);a6();sl(1601);e5();sl(231);a4();sl(39);c6();sl(429);e4();sl(459);a4();sl(463);e5();sl(465);g4();sl(100);b5();sl(368);d4();sl(463);g4();sl(56);g5();sl(868);f4();sl(58);a5();sl(409);c4();sl(462);f4();sl(76);g5();sl(391);c4();sl(464);c4();sl(54);e5();sl(412);g4();sl(461);c4();sl(464);g4();sl(58);d5();sl(407);d4();sl(60);c5();sl(428);a4();sl(65);d5();sl(403);d4();sl(464);a4();sl(84);c5();sl(389);e4();sl(61);d5();sl(406);b4();sl(52);e5();sl(412);e4();sl(461);b4();sl(51);g5();sl(418);a4();sl(468);e4();sl(54);e5();sl(416);c5();sl(464);e5();sl(232);a5();sl(237);c6();sl(467);e6();sl(466);c6();sl(233);b6();sl(242);e5();sl(467);a4();sl(51);c4();sl(40);c6();sl(382);e4();sl(463);a4();sl(464);e5();sl(463);g4();sl(46);b4();sl(36);b5();sl(386);d4();sl(58);g5();sl(411);g4();sl(465);b4();sl(465);f4();sl(55);c4();sl(38);a5();sl(374);f4();sl(59);b5();sl(412);a4();sl(57);c6();sl(408);c5();sl(58);d6();sl(412);c4();sl(69);g4();sl(59);e6();sl(343);c5();sl(463);e5();sl(463);d6();sl(237);c6();sl(234);d4();sl(48);a4();sl(37);d6();sl(386);d5();sl(46);a5();sl(425);f5();sl(463);a5();sl(463);e4();sl(67);b4();sl(45);e6();sl(359);e5();sl(234);d6();sl(235);a5();sl(465);e6();sl(469);a4();sl(58);e4();sl(406);a4();sl(70);a5();sl(397);c5();sl(461);e5();sl(461);a4();sl(464);e5();sl(462);a5();sl(464);a5();sl(234);b5();sl(238);f4();sl(49);c4();sl(41);c6();sl(154);b5();sl(232);f4();sl(232);c6();sl(233);a4();sl(459);c5();sl(45);b5();sl(189);c6();sl(232);g4();sl(45);d4();sl(37);d6();sl(156);c6();sl(234);g4();sl(232);d6();sl(231);b4();sl(460);d5();sl(50);c6();sl(412);e4();sl(43);b4();sl(41);d6();sl(388);e4();sl(36);c6();sl(435);g4();sl(41);d6();sl(423);b4();sl(33);g6();sl(200);e6();sl(235);a4();sl(41);e4();sl(426);a4();sl(42);d6();sl(420);c5();sl(457);e5();sl(42);e6();sl(195);c6();sl(234);f4();sl(45);c4();sl(417);f4();sl(461);a4();sl(459);c5();sl(50);a5();sl(415);g4();sl(37);d4();sl(36);b5();sl(395);g4();sl(231);b5();sl(233);b4();sl(458);d5();sl(46);g5();sl(420);c4();sl(46);g4();sl(416);c5();sl(42);e5();sl(420);e5();sl(459);g5();sl(459);c6();sl(463);e6();sl(239);g6();sl(232);c6();sl(459);a5();sl(230);b5();sl(235);f4();sl(39);c4();sl(24);c6();sl(195);b5();sl(234);f4();sl(235);c6();sl(232);a4();sl(457);c5();sl(39);b5();sl(202);c6();sl(234);g4();sl(40);d4();sl(34);d6();sl(161);c6();sl(232);g4();sl(238);d6();sl(233);b4();sl(459);d5();sl(44);c6();sl(418);e4();sl(41);b4();sl(34);d6();sl(167);c6();sl(234);e4();sl(231);d6();sl(231);g4();sl(461);b4();sl(43);g6();sl(418);a4();sl(42);e4();sl(29);a6();sl(401);a4();sl(63);g6();sl(172);e6();sl(235);c5();sl(55);d6();sl(408);e5();sl(44);e6();sl(205);c6();sl(231);f4();sl(48);c4();sl(416);f4();sl(461);a4();sl(456);c5();sl(459);g4();sl(39);d4();sl(435);g4();sl(49);a5();sl(416);b4();sl(65);c6();sl(400);d5();sl(59);g6();sl(413);a4();sl(82);e4();sl(383);a4();sl(53);e4();sl(39);a4();sl(37);e6();sl(120);d6();sl(234);a4();sl(54);e4();sl(40);a4();sl(39);e6();sl(348);a4();sl(63);e4();sl(53);a4();sl(358);a4();sl(57);e4();sl(56);a4();sl(364);a4();sl(69);e4();sl(50);a4();sl(350);a4();sl(40);e4();sl(42);a4();sl(36);c5();sl(43);c6();sl(315);d5();sl(55);d6();sl(414);f4();sl(53);c4();sl(35);e5();sl(48);e6();sl(351);f4();sl(467);a4();sl(45);c6();sl(44);c6();sl(383);c5();sl(464);g4();sl(52);d4();sl(40);b5();sl(30);b6();sl(353);g4();sl(465);b4();sl(62);g5();sl(51);g6();sl(363);d5();sl(462);e4();sl(46);b4();sl(39);c6();sl(37);a6();sl(352);e4();sl(58);g6();sl(178);e6();sl(237);g4();sl(59);e6();sl(408);b4();sl(59);d6();sl(178);g6();sl(234);a4();sl(60);e4();sl(48);c6();sl(361);a4();sl(462);c5();sl(462);e5();sl(64);d6();sl(182);c6();sl(232);f4();sl(57);c4();sl(41);d6();sl(372);f4();sl(462);a4();sl(49);a5();sl(418);c5();sl(463);g4();sl(54);d4();sl(37);e6();sl(380);g4();sl(464);b4();sl(51);c6();sl(413);d5();sl(461);d4();sl(47);a4();sl(44);b5();sl(69);d6();sl(319);d4();sl(51);b5();sl(41);e6();sl(381);f4();sl(59);b5();sl(44);f6();sl(371);d4();sl(62);b5();sl(40);d6();sl(368);e4();sl(47);b4();sl(41);b5();sl(53);e6();sl(336);e4();sl(462);g4();sl(59);c6();sl(406);e4();sl(56);d6();sl(411);a4();sl(51);e4();sl(32);e5();sl(35);e6();sl(358);a4();sl(461);c5();sl(88);c6();sl(50);c6();sl(333);e5();sl(461);g4();sl(49);d4();sl(42);d6();sl(41);d6();sl(345);g4();sl(461);b4();sl(55);b5();sl(38);b6();sl(377);d5();sl(467);f4();sl(43);c4();sl(43);e6();sl(59);c6();sl(334);f4();sl(71);b6();sl(177);a6();sl(240);a4();sl(51);a6();sl(421);c5();sl(63);b6();sl(403);c4();sl(77);g4();sl(53);e6();sl(60);g6();sl(284);c5();sl(466);e5();sl(465);c5();sl(52);e6();sl(413);f4();sl(49);c4();sl(42);g5();sl(54);d6();sl(328);f4();sl(463);a4();sl(461);f4();sl(61);c6();sl(411);g4();sl(51);d4();sl(56);b5();sl(38);d6();sl(326);g4();sl(84);e6();sl(386);b4();sl(48);g6();sl(420);g4();sl(60);e6();sl(410);a4();sl(48);e4();sl(40);a4();sl(67);a5();sl(37);e6();sl(38);a6();sl(252);a5();sl(460);c6();sl(236);e6();sl(237);e5();sl(58);a6();sl(183);a5();sl(239);c6();sl(238);a6();sl(233);e6();sl(238);e6();sl(237);a6();