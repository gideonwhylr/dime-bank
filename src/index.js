import './global.css';
import Icon from './beacon-check.png';
import ANSWERS from '@yext/answers-search-ui';
// const ANSWERS = require('@yext/answers-search-ui');
// const TemplateBundle = require('@yext/answers-search-ui/dist/answerstemplates.compiled.min.js');

ANSWERS.init({
    apiKey: "a381bbbc78e07a078cabe52f321c62eb",  //sample test experience
    experienceKey: "dime_answers_experience_-_frontend_test",  //sample test experience
    templateBundle: TemplateBundle.default,
    businessId: "3179813",  //sample test experience
    experienceVersion: "PRODUCTION",
    onReady: function () {
      // init components
      this.addComponent("SearchBar", {
        container: ".search-bar"
      });
      this.addComponent("SpellCheck", {
        container: ".spell-check"
      });
      this.addComponent("DirectAnswer", {
        container: ".direct-answer"
      });
      this.addComponent("UniversalResults", {
        container: ".universal-results"
      });
      this.addComponent("LocationBias", {
        container: ".location-bias"
      });
    }
  });