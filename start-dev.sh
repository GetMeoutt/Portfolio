#!/bin/bash
export PATH=/usr/bin:/usr/local/bin:$PATH
export NODE_ENV=development

cd /home/tawan/apps/Portfolio || exit 1

npm install --silent > /dev/null 2>&1
npm run dev --silent > /dev/null 2>&1

