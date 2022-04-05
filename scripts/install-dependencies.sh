#!/bin/sh

ABSOLUTE_PATH="$(cd "$(dirname "$1")"; pwd)/$(basename "$1")"
DEPS_PATHS=$(find . -name "package.json" -not -path "*/node_modules/*" | sed -r 's|/[^/]+$||' |sort |uniq)
SEPARATOR=" "
DEPS_PATHS_ARRAY=(${DEPS_PATHS//${SEPARATOR}/})

for i in "${!DEPS_PATHS_ARRAY[@]}"
do
  echo "Current path: ${DEPS_PATHS_ARRAY[i]}"
  cd ${DEPS_PATHS_ARRAY[i]} && npm i && cd $ABSOLUTE_PATH
  echo "\n"
done
