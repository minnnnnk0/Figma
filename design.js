const StyleDictionary = require('style-dictionary').extend({
    source: ['**/*.json'],
    platforms: {
      css: {
        transformGroup: 'token-studio',
        buildPath: '', //변환한 파일을 저장할 경로 
        files: [
          {
            destination: '', //파일명
          },
        ],
      },
    },
  });
  
  StyleDictionary.buildAllPlatforms();