import Translator from "@andreasremdt/simple-translator";

import { EN, FR } from "../locales";

const Html = document.querySelector("html");

const translator = new Translator({
  defaultLanguage: "fr",
  detectLanguage: true,
});

const langToggle = (lang) => {
  translator.translatePageTo(lang);
};

translator.add("fr", FR);
translator.add("en", EN);

langToggle(Html.lang);
