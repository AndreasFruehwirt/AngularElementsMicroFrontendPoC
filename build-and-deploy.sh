ng build domain-c-elements --prod --single-bundle  --named-chunks --output-hashing none
cp dist/domain-c-elements/*.js src/assets
mv src/assets/main.js src/assets/domain-c.js 