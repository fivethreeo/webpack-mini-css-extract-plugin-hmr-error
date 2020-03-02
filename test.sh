#!/bin/bash

FAIL=0

npm run watch --if-present & \
  DEPS_PID=$! && \
  sleep 10 && \
  printf "\n\n-------------\nTouching test.scss\n-------------\n\n" && touch test.scss && \
  sleep 10 && \
  kill -s TERM $DEPS_PID
