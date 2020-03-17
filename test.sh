#!/bin/bash

npm run devserver --if-present & \
DEPS_PID=$!
sleep 5
printf "\n\n-------------\Modifying test.scss\n-------------\n\n"
cp test.red.scss test.scss
sleep 5
kill -s TERM $DEPS_PID
cp test.blue.scss test.scss
exit 0
