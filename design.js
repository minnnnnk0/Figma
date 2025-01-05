import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

const sd = new StyleDictionary({
  source: ["/tokens.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["example"],
      buildPath: "/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
