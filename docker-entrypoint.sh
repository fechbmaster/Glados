#!/bin/bash
set -e

if [ "$1" = 'serve' ]; then
    echo 'y' |ionic serve
fi
if [ "$1" = 'run' ]; then
    adb devices && \
    echo 'y' | ionic cordova prepare  && \
    ionic cordova run android --no-confirm
fi
if [ "$1" = 'clean-run' ]; then
    rm -rf node_modules && \
    rm -rf platforms && \
    rm -rf plugins && \
    rm -rf package-lock.json && \
    rm -rf yarn.lock && \
    npm install && \
    adb devices && \
    echo 'y' | ionic cordova prepare  && \
    ionic cordova run android --no-confirm
fi
if [ "$1" = 'build' ]; then
   ionic cordova prepare  && \
   ionic cordova build android
fi
if [ "$1" = 'clean-build' ]; then
    rm -rf node_modules && \
    rm -rf platforms && \
    rm -rf plugins && \
    rm -rf package-lock.json && \
    rm -rf yarn.lock && \
    npm install && \
    ionic cordova prepare  && \
    ionic cordova build android
fi
if [ "$1" = 'rebuild-modules' ]; then
    rm -rf node_modules && \
    rm -rf plugins && \
    rm -rf package-lock.json && \
    rm -rf yarn.lock && \
    npm install
fi

