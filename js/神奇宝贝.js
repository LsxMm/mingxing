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
a4();sl(339);g5();sl(45);a4();sl(138);b5();sl(174);c6();sl(40);d5();sl(28);a4();sl(33);e4();sl(90);b5();sl(170);c6();sl(37);a4();sl(146);d6();sl(174);e6();sl(52);g4();sl(291);g4();sl(339);b4();sl(42);g4();sl(303);g4();sl(341);f4();sl(342);a5();sl(173);a4();sl(33);f4();sl(147);c6();sl(32);a4();sl(26);f4();sl(304);e6();sl(45);f4();sl(296);d6();sl(44);e4();sl(302);c6();sl(172);d5();sl(50);g4();sl(38);e4();sl(99);b5();sl(47);d5();sl(48);g4();sl(45);e4();sl(218);g5();sl(44);g4();sl(298);a4();sl(346);a5();sl(61);a4();sl(117);b5();sl(173);c6();sl(54);d5();sl(50);a4();sl(53);e4();sl(62);b5();sl(147);c6();sl(50);a4();sl(140);d6();sl(172);e6();sl(42);g4();sl(311);g4();sl(341);b4();sl(52);g4();sl(295);g4();sl(339);f4();sl(344);a5();sl(342);c6();sl(33);e5();sl(33);a4();sl(29);f4();sl(91);e6();sl(339);g6();sl(37);d6();sl(23);g5();sl(29);d5();sl(44);g4();sl(48);e4();sl(354);e4();sl(172);b4();sl(343);e4();sl(347);a5();sl(38);g4();sl(136);a5();sl(175);c6();sl(47);a4();sl(129);a5();sl(179);c6();sl(45);a4();sl(130);a5();sl(174);c6();sl(41);c5();sl(45);a4();sl(47);e4();sl(56);a5();sl(173);c6();sl(36);a4();sl(150);a5();sl(175);c6();sl(53);g4();sl(123);a5();sl(178);c6();sl(51);g4();sl(127);a5();sl(178);c6();sl(53);b4();sl(49);g4();sl(76);a5();sl(174);c6();sl(50);g4();sl(141);a5();sl(179);a5();sl(48);f4();sl(300);c6();sl(35);f4();sl(314);c6();sl(45);a4();sl(47);f4();sl(88);d6();sl(169);f4();sl(177);b5();sl(175);b5();sl(45);e4();sl(298);e4();sl(344);d5();sl(50);g4();sl(37);e4();sl(260);a5();sl(37);g4();sl(143);a5();sl(173);c6();sl(41);a4();sl(133);a5();sl(175);c6();sl(55);a4();sl(122);a5();sl(174);c6();sl(38);c5();sl(48);a4();sl(53);e4();sl(50);a5();sl(169);c6();sl(35);a4();sl(144);a5();sl(172);c6();sl(54);g4();sl(120);a5();sl(171);c6();sl(50);g4();sl(137);a5();sl(173);c6();sl(76);b4();sl(57);g4();sl(59);a5();sl(173);a5();sl(58);g4();sl(124);a5();sl(179);e6();sl(64);f4();sl(310);e6();sl(66);f4();sl(287);d6();sl(46);a4();sl(42);f4();sl(97);c6();sl(173);f4();sl(181);b5();sl(176);b5();sl(56);e4();sl(291);e4();sl(348);d5();sl(64);g4();sl(55);e4();sl(235);g4();sl(348);c6();sl(54);a4();sl(125);a5();sl(173);c6();sl(54);a4();sl(127);a5();sl(177);c6();sl(54);c5();sl(47);a4();sl(55);e4();sl(49);a5();sl(157);c6();sl(65);a4();sl(116);a5();sl(175);c6();sl(62);g4();sl(123);a5();sl(177);c6();sl(67);g4();sl(113);a5();sl(176);c6();sl(58);b4();sl(56);g4();sl(81);a5();sl(174);c6();sl(58);g4();sl(122);a5();sl(175);a5();sl(87);f4();sl(261);c6();sl(64);f4();sl(283);c6();sl(66);a4();sl(50);f4();sl(66);d6();sl(173);f4();sl(176);b5();sl(178);b5();sl(66);e4();sl(293);e4();sl(344);d5();sl(67);g4();sl(51);e4();sl(237);a5();sl(58);g4();sl(125);a5();sl(173);c6();sl(43);a4();sl(306);a5();sl(47);a4();sl(305);d6();sl(92);e6();sl(50);d5();sl(40);a4();sl(35);e4();sl(148);d6();sl(66);a4();sl(279);c6();sl(36);g4();sl(141);a5();sl(178);g4();sl(341);c5();sl(47);g4();sl(42);d4();sl(267);a5();sl(60);g4();sl(148);a5();sl(178);c6();sl(49);f4();sl(300);a5();sl(53);f4();sl(292);a5();sl(57);a4();sl(44);f4();sl(258);f4();sl(339);g6();sl(93);a6();sl(52);f4();sl(209);g6();sl(62);f4();sl(291);e6();sl(56);a4();sl(40);f4();sl(261);d6();sl(45);f4();sl(307);e6();sl(59);c6();sl(48);g5();sl(47);e4();sl(196);f6();sl(183);b4();sl(173);e6();sl(40);c6();sl(40);g5();sl(51);d4();sl(222);f6();sl(60);e4();sl(289);e6();sl(52);c6();sl(47);g5();sl(47);g4();sl(208);f6();sl(51);b4();sl(293);e6();sl(76);c6();sl(56);g5();sl(58);d5();sl(166);f6();sl(59);e5();sl(294);e6();sl(62);c6();sl(61);g5();sl(57);d5();sl(55);g4();sl(53);e4();sl(68);f6();sl(341);e6();sl(54);c6();sl(55);g5();sl(56);b4();sl(193);f6();sl(58);e4();sl(288);e6();sl(62);c6();sl(51);g5();sl(62);e4();sl(184);e5();sl(62);e4();sl(282);g5();sl(60);g4();sl(285);e6();sl(57);c4();sl(121);e6();sl(175);e6();sl(347);e6();sl(45);f5();sl(45);c5();sl(50);g4();sl(396);e6();sl(48);e5();sl(52);c5();sl(50);g4();sl(50);e6();sl(167);g4();sl(174);c5();sl(346);c6();sl(56);f5();sl(129);c6();sl(178);c6();sl(62);c4();sl(124);e6();sl(177);d6();sl(72);b4();sl(276);g6();sl(48);b4();sl(298);g4();sl(346);b4();sl(182);a5();sl(58);g5();sl(294);d5();sl(169);b4();sl(341);b5();sl(42);b4();sl(304);a5();sl(41);a4();sl(313);e6();sl(47);a4();sl(132);e6();sl(180);e6();sl(344);e6();sl(48);g5();sl(35);e5();sl(43);c5();sl(35);a4();sl(202);a4();sl(175);e6();sl(58);g5();sl(57);e5();sl(56);c5();sl(187);g5();sl(176);e5();sl(341);c6();sl(56);a4();sl(128);c6();sl(173);c6();sl(184);e6();sl(172);d6();sl(63);g4();sl(288);d4();sl(176);g4();sl(177);g4();sl(177);b4();sl(181);d5();sl(339);a5();sl(43);g5();sl(305);d5();sl(343);g4();sl(350);d6();sl(49);d5();sl(298);c6();sl(38);a5();sl(37);g5();sl(36);f4();sl(244);a5();sl(61);g5();sl(116);c5();sl(176);c6();sl(53);a5();sl(66);g5();sl(231);d6();sl(52);e5();sl(49);f4();sl(254);e6();sl(52);a5();sl(48);g5();sl(50);e5();sl(52);e4();sl(162);b5();sl(64);g5();sl(50);c6();sl(70);c5();sl(342);e5();sl(175);c5();sl(340);c6();sl(37);a5();sl(41);f5();sl(49);c5();sl(51);d4();sl(175);c6();sl(173);f4();sl(175);c6();sl(39);a5();sl(41);g5();sl(48);g4();sl(224);g6();sl(349);e6();sl(50);b5();sl(44);g5();sl(49);c4();sl(211);g4();sl(175);g5();sl(37);c5();sl(304);g4();sl(171);c6();sl(44);c4();sl(303);e6();sl(36);a5();sl(43);g5();sl(47);c5();sl(49);f4();sl(178);e6();sl(52);a5();sl(41);g5();sl(107);f4();sl(177);c6();sl(49);g5();sl(54);c5();sl(49);f4();sl(51);d6();sl(157);c6();sl(54);c5();sl(51);f4();sl(245);b5();sl(48);g5();sl(51);c5();sl(50);e4();sl(210);c6();sl(183);c5();sl(170);d6();sl(52);g5();sl(289);b5();sl(51);e5();sl(293);d6();sl(42);g5();sl(43);c5();sl(49);d4();sl(219);c6();sl(32);g5();sl(30);a4();sl(41);b4();sl(78);c5();sl(191);b5();sl(52);g5();sl(49);b4();sl(268);c6();sl(53);a5();sl(52);c5();sl(263);d6();sl(52);b5();sl(50);f5();sl(54);b4();sl(49);g4();sl(165);g5();sl(178);g4();sl(171);e6();sl(57);c6();sl(51);g5();sl(51);g4();sl(200);f6();sl(50);c6();sl(55);b5();sl(53);g5();sl(48);c4();sl(148);g6();sl(52);e6();sl(47);d6();sl(45);c4();sl(216);c6();sl(49);e6();sl(47);d6();sl(54);g5();sl(49);e5();sl(163);d6();sl(39);c4();sl(310);b6();sl(73);f6();sl(49);d6();sl(55);b4();sl(176);a6();sl(177);f4();sl(171);a6();sl(43);f6();sl(50);d6();sl(48);d5();sl(52);b4();sl(159);g6();sl(51);b4();sl(304);a6();sl(33);e6();sl(35);c6();sl(46);a4();sl(247);g6();sl(176);a4();sl(176);g6();sl(37);c6();sl(44);e5();sl(47);c5();sl(51);a4();sl(179);e6();sl(40);a4();sl(302);c6();sl(36);a5();sl(40);f5();sl(50);d5();sl(226);f5();sl(345);c6();sl(64);a5();sl(53);f5();sl(50);d5();sl(50);f4();sl(159);d6();sl(38);d5();sl(309);e6();sl(51);c6();sl(49);a5();sl(52);g5();sl(51);f4();sl(161);e6();sl(49);c6();sl(46);a5();sl(47);g5();sl(51);c5();sl(173);e6();sl(54);c6();sl(51);a5();sl(55);g5();sl(198);f6();sl(50);e5();sl(300);g6();sl(57);b5();sl(49);g5();sl(56);e5();sl(40);e4();sl(153);g6();sl(344);f6();sl(39);c6();sl(30);g5();sl(35);d5();sl(45);c5();sl(48);d4();sl(164);e6();sl(347);e6();sl(55);a5();sl(53);g5();sl(51);d4();sl(193);a4();sl(182);d6();sl(52);a5();sl(49);g5();sl(51);c5();sl(204);a4();sl(174);d4();sl(343);g5();sl(37);g4();sl(309);g4();sl(173);g5();sl(41);b4();sl(317);f5();sl(174);e6();sl(41);c6();sl(29);b4();sl(114);f6();sl(52);d6();sl(126);g6();sl(59);e6();sl(53);d6();sl(50);c4();sl(187);c6();sl(50);e6();sl(45);d6();sl(255);c6();sl(38);e6();sl(42);d6();sl(51);g5();sl(57);e5();sl(177);d6();sl(40);c4();sl(304);b6();sl(54);f6();sl(51);d6();sl(36);b6();sl(48);b4();sl(169);a6();sl(175);f4();sl(170);a6();sl(37);f6();sl(46);d6();sl(48);d5();sl(49);b4();sl(181);g6();sl(49);b4();sl(298);a6();sl(33);e6();sl(38);c6();sl(47);a4();sl(235);g6();sl(36);a4();sl(151);g5();sl(54);e5();sl(50);c5();sl(82);g6();sl(45);c6();sl(133);a4();sl(178);e6();sl(177);d5();sl(67);g4();sl(114);c6();sl(57);a5();sl(54);g5();sl(238);c6();sl(180);d5();sl(64);f4();sl(117);e6();sl(58);a5();sl(50);f5();sl(246);d6();sl(348);c6();sl(60);a5();sl(31);g5();sl(51);f4();sl(216);c5();sl(173);f5();sl(174);e6();sl(44);a5();sl(71);g5();sl(50);f5();sl(187);c5();sl(343);d6();sl(53);b5();sl(53);a5();sl(49);g5();sl(50);e4();sl(154);c5();sl(182);e5();sl(179);c6();sl(53);a5();sl(50);g5();sl(53);e5();sl(199);c5();sl(349);c6();sl(58);a6();sl(52);f6();sl(55);d6();sl(54);d4();sl(138);a4();sl(181);c5();sl(175);c5();sl(178);a4();sl(179);c5();sl(344);a6();sl(56);f6();sl(38);b5();sl(41);f5();sl(44);b4();sl(45);g4();sl(309);a6();sl(57);f6();sl(50);b5();sl(49);g4();sl(201);g4();sl(176);a6();sl(58);g6();sl(54);d6();sl(52);c6();sl(54);d4();sl(142);e6();sl(69);b5();sl(58);g5();sl(57);e5();sl(49);c4();sl(292);d4();sl(178);g5();sl(69);e5();sl(45);g4();sl(53);e4();sl(185);c4();sl(179);c4();sl(346);d6();sl(62);a5();sl(53);f5();sl(51);d4();sl(197);d6();sl(59);a5();sl(63);f5();sl(61);d4();sl(173);d6();sl(56);a5();sl(53);f5();sl(58);a4();sl(54);f4();sl(56);e6();sl(84);d4();sl(175);d6();sl(62);a5();sl(48);f5();sl(78);e4();sl(343);d5();sl(67);b4();sl(112);e5();sl(172);g5();sl(62);d4();sl(117);e5();sl(180);g5();sl(64);b4();sl(46);g4();sl(50);f4();sl(52);a5();sl(150);g5();sl(171);a5();sl(178);b5();sl(65);d4();sl(114);a5();sl(173);b5();sl(62);e4();sl(118);d6();sl(177);b5();sl(64);d4();sl(112);d6();sl(174);e6();sl(61);g5();sl(59);e5();sl(54);a4();sl(182);d6();sl(177);e4();sl(180);e6();sl(58);g5();sl(51);e5();sl(243);e6();sl(58);a4();sl(289);d6();sl(37);a5();sl(51);f5();sl(52);d4();sl(215);d6();sl(61);a5();sl(52);f5();sl(243);d6();sl(57);a5();sl(55);f5();sl(49);a4();sl(51);f4();sl(50);e6();sl(272);d6();sl(65);b5();sl(58);a5();sl(56);f5();sl(52);g4();sl(300);d4();sl(169);g4();sl(175);d5();sl(348);d4();sl(512);g4();sl(180);d4();sl(345);g4();sl(349);d6();sl(44);g5();sl(45);d5();sl(263);e6();sl(43);b5();sl(43);g5();sl(42);e5();sl(37);c4();sl(203);d6();sl(63);g5();sl(61);d5();sl(68);d4();sl(172);e6();sl(60);b5();sl(56);g5();sl(54);e5();sl(56);e4();sl(130);d6();sl(66);a5();sl(56);g5();sl(52);d5();sl(55);g4();sl(57);b4();sl(243);g4();sl(184);b4();sl(347);g5();sl(47);d5();sl(54);g4();sl(251);d6();sl(57);b4();sl(290);d6();sl(70);g5();sl(37);e5();sl(36);g4();sl(47);a4();sl(170);d6();sl(65);g5();sl(56);e5();sl(60);a4();sl(181);b5();sl(59);g5();sl(65);e5();sl(55);g4();sl(180);d6();sl(63);b5();sl(49);f5();sl(53);e5();sl(52);d4();sl(316);d4();sl(344);f4();sl(181);f5();sl(60);e5();sl(51);a4();sl(242);d6();sl(54);e5();sl(42);c4();sl(255);e6();sl(51);g5();sl(50);e5();sl(51);b4();sl(54);g4();sl(49);c4();sl(103);d6();sl(56);g5();sl(52);e5();sl(71);g4();sl(174);e6();sl(58);g5();sl(55);e5();sl(55);b4();sl(185);d6();sl(64);a5();sl(54);g5();sl(51);d5();sl(52);a4();sl(49);b4();sl(267);g4();sl(174);a4();sl(347);g6();sl(60);b5();sl(41);g5();sl(53);g4();sl(212);f6();sl(60);d6();sl(52);a5();sl(53);a4();sl(55);b4();sl(474);d4();sl(343);f4();sl(348);a4();sl(345);b4();sl(348);c5();sl(343);d5();sl(340);e5();sl(346);f5();sl(63);d5();sl(41);c5();sl(35);b4();sl(218);b4();sl(341);d4();sl(343);f4();sl(342);b5();sl(48);f5();sl(49);d5();sl(52);b4();sl(547);b4();sl(679);c4();sl(344);g4();sl(345);c5();sl(347);g5();sl(73);d5();sl(277);g5();sl(60);d5();sl(286);e5();sl(342);d5();sl(350);c5();sl(341);c4();sl(347);g4();sl(341);c5();sl(342);g5();sl(39);d5();sl(309);g5();sl(38);d5();sl(314);d5();sl(338);e5();sl(685);g6();sl(55);c5();sl(40);b6();sl(85);c6();sl(172);g6();sl(37);g5();sl(307);c6();sl(40);c5();sl(302);g6();sl(36);c6();sl(37);g5();sl(35);e4();sl(243);g6();sl(37);c6();sl(29);g5();sl(46);e4();sl(250);e6();sl(37);c5();sl(60);f6();sl(255);e5();sl(339);e6();sl(342);d6();sl(55);g4();sl(296);b5();sl(44);d5();sl(296);b5();sl(40);g5();sl(301);a5();sl(341);a5();sl(338);g5();sl(339);d5();sl(340);g4();sl(341);b5();sl(33);g4();sl(311);g5();sl(35);d4();sl(315);b5();sl(37);g4();sl(311);f6();sl(47);b5();sl(34);g5();sl(51);b4();sl(219);f6();sl(36);b5();sl(46);g5();sl(52);b4();sl(223);e6();sl(51);g4();sl(297);b4();sl(368);d6();sl(344);e6();sl(43);b5();sl(24);g5();sl(28);c4();sl(258);g6();sl(36);g4();sl(314);g6();sl(40);c5();sl(309);g5();sl(43);f5();sl(41);f4();sl(35);g4();sl(226);b4();sl(345);f5();sl(49);g4();sl(44);g5();sl(595);c6();sl(52);c4();sl(291);g5();sl(37);g4();sl(307);c6();sl(38);c5();sl(308);g6();sl(42);c6();sl(55);g5();sl(36);e4();sl(218);g6();sl(36);c6();sl(45);g5();sl(51);e4();sl(221);e6();sl(38);c6();sl(60);f6();sl(258);e5();sl(339);e6();sl(338);d6();sl(41);g4();sl(302);b5();sl(42);d5();sl(300);b5();sl(38);f5();sl(312);g5();sl(343);g5();sl(339);f5();sl(339);d5();sl(340);g4();sl(368);b5();sl(36);g4();sl(307);g5();sl(28);d5();sl(323);b5();sl(40);f5();sl(305);f6();sl(39);b5();sl(34);g5();sl(31);b4();sl(28);f6();sl(43);b5();sl(48);g5();sl(53);b4();sl(49);e6();sl(49);g4();sl(48);b4();sl(286);d6();sl(351);c6();sl(51);g5();sl(49);e5();sl(47);c4();sl(209);g4();sl(346);c5();sl(340);d5();sl(341);e5();sl(1348);e6();sl(30);b5();sl(36);g5();sl(27);c4();sl(254);g4();sl(344);e6();sl(40);b5();sl(34);g5();sl(31);c5();sl(586);g6();sl(47);d6();sl(30);b5();sl(61);g5();sl(49);e4();sl(168);c5();sl(342);g6();sl(39);d6();sl(36);b5();sl(36);g5();sl(29);e5();sl(556);f6();sl(78);c6();sl(51);a5();sl(52);f4();sl(169);g6();sl(58);c5();sl(288);f6();sl(59);f5();sl(288);e6();sl(55);c5();sl(294);d6();sl(48);g5();sl(301);c5();sl(344);f4();sl(681);b5();sl(40);e4();sl(308);c5();sl(343);g5();sl(341);e5();sl(346);d6();sl(42);b5();sl(33);a5();sl(37);g4();sl(245);b4();sl(344);g5();sl(348);d5();sl(340);a5();sl(50);c4();sl(43);b5();sl(89);c6();sl(172);b5();sl(51);g4();sl(296);c6();sl(48);c5();sl(305);d6();sl(53);g4();sl(297);e6();sl(48);g5();sl(31);c4();sl(271);g4();sl(347);e5();sl(346);c5();sl(341);e6();sl(76);b5();sl(62);c4();sl(215);g4();sl(342);c5();sl(677);g6();sl(62);e6();sl(41);c6();sl(36);e4();sl(214);c5();sl(348);e5();sl(676);f6();sl(55);c6();sl(39);a5();sl(35);f4();sl(221);e6();sl(45);c5();sl(306);f6();sl(345);g6();sl(345);a6();sl(68);c6();sl(40);a5();sl(40);f4();sl(208);c5();sl(351);a6();sl(46);c6();sl(34);a5();sl(274);f5();sl(345);d6();sl(47);g4();sl(48);e6();sl(87);g6();sl(173);d6();sl(342);f6();sl(79);g5();sl(268);e6();sl(50);d5();sl(297);f6();sl(50);a5();sl(302);d5();sl(346);g4();sl(339);b4();sl(346);e6();sl(42);g4();sl(306);f6();sl(41);b4();sl(314);e6();sl(56);d4();sl(291);d6();sl(52);f4();sl(305);c6();sl(43);a5();sl(38);f5();sl(40);g4();sl(233);d4();sl(348);g4();sl(337);e5();sl(175);f5();sl(174);g5();sl(45);e5();sl(47);d5();sl(37);c4();sl(224);c6();sl(48);g4();sl(35);e4();sl(50);c4();sl(224);c6();sl(340);d6();sl(58);g4();sl(62);e4();sl(59);c4();sl(178);b5();sl(60);b4();sl(290);a5();sl(68);g4();sl(56);e4();sl(55);b4();sl(174);a5();sl(342);g5();sl(63);g4();sl(62);e4();sl(59);b4();sl(171);a5();sl(40);f4();sl(308);g5();sl(50);g4();sl(53);e4();sl(52);c4();sl(55);f4();sl(153);g5();sl(341);e5();sl(56);g4();sl(53);e4();sl(56);c4();sl(55);f4();sl(141);c5();sl(63);e4();sl(284);c5();sl(64);e4();sl(60);c4();sl(233);e5();sl(63);d4();sl(290);d5();sl(69);e4();sl(61);c4();sl(63);d4();sl(163);c6();sl(79);a5();sl(55);f4();sl(214);c5();sl(63);a4();sl(67);f4();sl(222);e6();sl(59);a5();sl(55);g5();sl(241);c5();sl(59);a4();sl(71);f4();sl(221);d6();sl(57);a5();sl(62);g5();sl(52);e4();sl(184);c5();sl(65);a4();sl(57);e4();sl(230);c6();sl(54);a5();sl(48);g5();sl(248);c5();sl(51);a4();sl(44);e4();sl(254);c6();sl(61);a5();sl(60);f5();sl(57);c5();sl(56);d4();sl(122);a4();sl(344);c5();sl(62);c4();sl(284);a4();sl(348);a5();sl(46);f5();sl(41);b4();sl(44);f4();sl(224);f4();sl(341);b4();sl(45);d4();sl(307);a5();sl(40);f5();sl(44);g4();sl(271);c5();sl(53);g4();sl(51);e4();sl(70);d4();sl(52);c4();sl(475);f6();sl(176);e6();sl(174);c6();sl(179);g5();sl(180);f5();sl(177);e5();sl(178);c5();sl(178);g4();sl(177);f4();sl(175);e4();sl(184);c4();sl(180);g4();sl(182);f6();sl(174);e6();sl(177);c6();sl(176);g5();sl(176);c4();sl(171);c4();sl(179);c6();sl(39);g5();sl(34);e5();sl(44);c4();sl(235);c6();sl(54);g5();sl(47);e5();sl(53);c4();sl(1225);c6();sl(61);g5();sl(43);e5();sl(40);c4();