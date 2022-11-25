git add .
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"

git push -f https://github.com/wxy0715/blog.git master
