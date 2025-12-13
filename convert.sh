#!/bin/bash

# 使用 Inkscape 转换 SVG 到 PNG
inkscape -w 16 -h 16 icon-16.svg -o icon-16.png
inkscape -w 48 -h 48 icon-48.svg -o icon-48.png
inkscape -w 128 -h 128 icon-128.svg -o icon-128.png 