// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates volume of a sphere.
 */
function calculate() {
  // input
    let radius = parseFloat(document.getElementById('radius').value);
    const PI = Math.PI
  // process
    let volume = (4/3) * PI * radius**3;

  // output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + 'cm3' + '.'
}
