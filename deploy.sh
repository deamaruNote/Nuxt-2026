git checkout gh-pages
cp -r .output/public/* .
git add .
git commit -m "Fix baseURL for GitHub Pages"
git push -f origin gh-pages