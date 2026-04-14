#!/usr/bin/env bash

rm -fr ./dist/*

export NODE_ENV=development 

tsc --noEmit -p tsconfig.renderer.json || exit 1

vite --config vite.config.ts &
VITE_PID=$!

tsc --noEmit -p tsconfig.renderer.json --watch &
TSC_RENDERER_PID=$!

tsc -p tsconfig.main.json --watch &
TSC_MAIN_PID=$!

trap clean_up INT
clean_up() {
    kill -9 $VITE_PID $TSC_RENDERER_PID $TSC_MAIN_PID 2>/dev/null
}

while [ ! -f ./dist/main/main.js ]
do
    sleep 1
done

electron .

clean_up
