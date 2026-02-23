git checkout gh-pages 
cp -r .output/public/* . 
git add . 
git commit -m "Reset Website" 
git push -f origin gh-pages