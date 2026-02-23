git checkout main
git add .

# 取得日期時間
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")

# 加入時間戳到 commit 訊息
git commit -m "Update - $TIMESTAMP"

git push origin main