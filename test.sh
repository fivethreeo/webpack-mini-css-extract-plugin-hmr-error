#!/bin/bash

npm run watch --if-present & \
  DEPS_PID=$! && \
  sleep 20 && \
  printf "\n\n-------------\nTouching test.js\n-------------\n\n" && \
  touch test.js && \
  sleep 20 && \
  kill -s TERM $DEPS_PID && \
  exit 0
