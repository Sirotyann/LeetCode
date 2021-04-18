mkdir "$1"
touch "$1/index.js"
touch "$1/index.test.js"
echo "\n\nmodule.exports = {};" > "$1/index.js"
echo "const {} = require('./'); \n\ndescribe('$1 Tests', () => {\n    it('', ()=>{\n});\n});" > "$1/index.test.js"
exit 0