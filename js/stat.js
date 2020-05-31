'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var COLUMN_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_X = CLOUD_X + COLUMN_GAP;
var BAR_Y = CLOUD_Y + CLOUD_HEIGHT - GAP;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 5, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 5, CLOUD_Y + GAP + FONT_GAP * 2);

  for (var i = 0; i < players.length; i++) {
    var barHeight = BAR_HEIGHT * (times[i] / maxTime);
    var colorSaturation = Math.floor(Math.random() * Math.floor(100));

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_X + (BAR_WIDTH + COLUMN_GAP) * i, BAR_Y);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + colorSaturation + '%,50%)';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + COLUMN_GAP) * i, BAR_Y - FONT_GAP - barHeight, BAR_WIDTH, barHeight);
    ctx.fillText(Math.round(times[i]), BAR_X + (BAR_WIDTH + COLUMN_GAP) * i, BAR_Y - FONT_GAP * 2 - barHeight);
  }
};
