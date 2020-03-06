#!/bin/bash

npm run devserver --if-present & \
  DEPS_PID=$! && \
  sleep 20 && \
  printf "\n\n-------------\nTouching test.scss\n-------------\n\n" && \
  touch test.scss && \
  sleep 20 && \
  kill -s TERM $DEPS_PID && \
  exit 0
