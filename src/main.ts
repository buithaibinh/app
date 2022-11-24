import { defineCustomElement } from 'vue';
import CssSelector from './components/CssSelector.ce.vue';

const cssSelector = defineCustomElement(CssSelector);

customElements.define('css-selector', cssSelector);
