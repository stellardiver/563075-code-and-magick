'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_Y = 90;
var BAR_GAP = 50;
var NAME_Y = 260;
var TIME_Y = 80;

// Функция рендеринга облака

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция нахождения максимального времени в массиве

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Функция расчета случайного числа для подстановки в координату насыщенности цветовой модели hsl

var randomSaturation = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  names = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  var maxTime = getMaxElement(times);
  var histogramHeight;
  var histogramColor;

  // Цикл, проходящий по массиву с именами игроков

  for (var i = 0; i < names.length; i++) {
    histogramHeight = BAR_HEIGHT * Math.round(times[i]) / maxTime;

    // Условие для выбора цвета колонок

    if (names[i] === 'Вы') {
      histogramColor = 'rgba(255, 0, 0, 1)';
    } else {
      histogramColor = 'hsl(240, ' + randomSaturation(0, 100) + '%, 50%)';
    }

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, NAME_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, TIME_Y + (BAR_HEIGHT - histogramHeight));
    ctx.fillStyle = histogramColor;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_Y + (BAR_HEIGHT - histogramHeight), BAR_WIDTH, histogramHeight);
  }
};
