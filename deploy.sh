# 在 main 分支
npm run generate   # 生成 dist/

# 切到 gh-pages
git checkout gh-pages

# 清掉舊檔
git rm -rf .

# 將 dist/ 複製過來
cp -r ../dist/* ./

# commit & push
git add .
git commit -m "Deploy clean Nuxt site"
git push origin gh-pages --force