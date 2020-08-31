#!/bin/bash
set -x
# GETS THE PORT AS ARG
serve -l $1 -s build
