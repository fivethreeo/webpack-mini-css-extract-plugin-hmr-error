#!/bin/bash

FAIL=0

echo "starting"

npm run watch --if-present &
sleep 5 && touch test.scss &

for job in `jobs -p`
do
echo $job
    wait $job || let "FAIL+=1"
done

echo $FAIL

if [ "$FAIL" == "0" ];
then
echo "YAY!"
else
echo "FAIL! ($FAIL)"
fi
