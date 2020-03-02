#!/bin/bash

FAIL=0

npm run watch --if-present & \
  DEPS_PID=$! && \
  sleep 10 && \
  echo Touching test.scss && touch test.scss && \
  sleep 10 && \
  kill -9 $DEPS_PID
