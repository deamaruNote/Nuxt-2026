# git push origin --delete gh-pages
git checkout -B gh-pages 
cp -r dist/* . 
git add . 
git commit -m "Reset Website" 
git push -f origin gh-pages