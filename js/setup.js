'use strict';

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var pickRandom = function (param) {
  return Math.floor(Math.random() * param.length);
};

var wizards = [
  {
    name: WIZARD_NAMES[pickRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[pickRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[pickRandom(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[pickRandom(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[pickRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[pickRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[pickRandom(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[pickRandom(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[pickRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[pickRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[pickRandom(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[pickRandom(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[pickRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[pickRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[pickRandom(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[pickRandom(WIZARD_EYES)]
  }
];

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
