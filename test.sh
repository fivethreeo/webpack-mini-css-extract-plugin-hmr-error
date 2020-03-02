#!/bin/bash

FAIL=0

npm run watch --if-present & DEPS_PID=$! && sleep 10 && touch test.scss & kill -9 $DEPS_PID
