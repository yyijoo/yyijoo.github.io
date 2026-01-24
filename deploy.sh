#!/bin/bash

echo "📝 Copying from DevLog..."
cp -r "/Users/jooyeon/Library/Mobile Documents/com~apple~CloudDocs/DevLog"/* content/

echo "🔍 Filtering publish: true..."
node filter-publish.js

echo "📦 Committing..."
git add .
git commit -m "Update posts: $(date '+%Y-%m-%d %H:%M')"

echo "🚀 Pushing to GitHub..."
git push

echo "✅ Done! Check https://yyijoo.github.io in 2-3 minutes"
