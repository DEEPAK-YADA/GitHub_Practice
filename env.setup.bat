export PATH=$PATH:/usr/local/bin
git clean -fdx
git reset --hard
npm install
npx playwright install