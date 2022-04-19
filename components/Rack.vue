/* eslint-disable vue/prop-name-casing */
/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="card w-100 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ name }}</h2>
      <table class="text-center">
        <!-- 25 to 29 -->
        <tr>
          <td
            :class="[
              (code[25] == 'A1047' ? 'bg-blue-500' : ''),
              (code[25] == 'T17' ? 'bg-indigo-600' : ''),
              (code[25] == 'T17+' ? 'bg-green-500' : ''),
              (code[25] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[25] == 'T19' ? 'bg-pink-600' : ''),
              (code[25] == 'S19' ? 'bg-yellow-700' : ''),
              (code[25] == 'Idle' ? 'bg-purple-500' : ''),
              (code[25] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[25])">
            {{ code[25] }}<br /><span class="text-2xs">{{ slot[25] }}</span>
          </td>
          <td
            :class="[
              (code[26] == 'A1047' ? 'bg-blue-500' : ''),
              (code[26] == 'T17' ? 'bg-indigo-600' : ''),
              (code[26] == 'T17+' ? 'bg-green-500' : ''),
              (code[26] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[26] == 'T19' ? 'bg-pink-600' : ''),
              (code[26] == 'S19' ? 'bg-yellow-700' : ''),
              (code[26] == 'Idle' ? 'bg-purple-500' : ''),
              (code[26] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[26])">
            {{ code[26] }}<br /><span class="text-2xs">{{ slot[26] }}</span>
          </td>
          <td
            :class="[
              (code[27] == 'A1047' ? 'bg-blue-500' : ''),
              (code[27] == 'T17' ? 'bg-indigo-600' : ''),
              (code[27] == 'T17+' ? 'bg-green-500' : ''),
              (code[27] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[27] == 'T19' ? 'bg-pink-600' : ''),
              (code[27] == 'S19' ? 'bg-yellow-700' : ''),
              (code[27] == 'Idle' ? 'bg-purple-500' : ''),
              (code[27] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[27])">
            {{ code[27] }}<br /><span class="text-2xs">{{ slot[27] }}</span>
          </td>
          <td
            :class="[
              (code[28] == 'A1047' ? 'bg-blue-500' : ''),
              (code[28] == 'T17' ? 'bg-indigo-600' : ''),
              (code[28] == 'T17+' ? 'bg-green-500' : ''),
              (code[28] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[28] == 'T19' ? 'bg-pink-600' : ''),
              (code[28] == 'S19' ? 'bg-yellow-700' : ''),
              (code[28] == 'Idle' ? 'bg-purple-500' : ''),
              (code[28] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[28])">
            {{ code[28] }}<br /><span class="text-2xs">{{ slot[28] }}</span>
          </td>
          <td
            :class="[
              (code[29] == 'A1047' ? 'bg-blue-500' : ''),
              (code[29] == 'T17' ? 'bg-indigo-600' : ''),
              (code[29] == 'T17+' ? 'bg-green-500' : ''),
              (code[29] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[29] == 'T19' ? 'bg-pink-600' : ''),
              (code[29] == 'S19' ? 'bg-yellow-700' : ''),
              (code[29] == 'Idle' ? 'bg-purple-500' : ''),
              (code[29] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[29])">
            {{ code[29] }}<br /><span class="text-2xs">{{ slot[29] }}</span>
          </td>
        </tr>

        <!-- 20 to 24 -->
        <tr>
          <td
            :class="[
              (code[20] == 'A1047' ? 'bg-blue-500' : ''),
              (code[20] == 'T17' ? 'bg-indigo-600' : ''),
              (code[20] == 'T17+' ? 'bg-green-500' : ''),
              (code[20] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[20] == 'T19' ? 'bg-pink-600' : ''),
              (code[20] == 'S19' ? 'bg-yellow-700' : ''),
              (code[20] == 'Idle' ? 'bg-purple-500' : ''),
              (code[20] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[20])">
            {{ code[20] }}<br /><span class="text-2xs">{{ slot[20] }}</span>
          </td>
          <td
            :class="[
              (code[21] == 'A1047' ? 'bg-blue-500' : ''),
              (code[21] == 'T17' ? 'bg-indigo-600' : ''),
              (code[21] == 'T17+' ? 'bg-green-500' : ''),
              (code[21] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[21] == 'T19' ? 'bg-pink-600' : ''),
              (code[21] == 'S19' ? 'bg-yellow-700' : ''),
              (code[21] == 'Idle' ? 'bg-purple-500' : ''),
              (code[21] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[21])">
            {{ code[21] }}<br /><span class="text-2xs">{{ slot[21] }}</span>
          </td>
          <td
            :class="[
              (code[22] == 'A1047' ? 'bg-blue-500' : ''),
              (code[22] == 'T17' ? 'bg-indigo-600' : ''),
              (code[22] == 'T17+' ? 'bg-green-500' : ''),
              (code[22] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[22] == 'T19' ? 'bg-pink-600' : ''),
              (code[22] == 'S19' ? 'bg-yellow-700' : ''),
              (code[22] == 'Idle' ? 'bg-purple-500' : ''),
              (code[22] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[22])">
            {{ code[22] }}<br /><span class="text-2xs">{{ slot[22] }}</span>
          </td>
          <td
            :class="[
              (code[23] == 'A1047' ? 'bg-blue-500' : ''),
              (code[23] == 'T17' ? 'bg-indigo-600' : ''),
              (code[23] == 'T17+' ? 'bg-green-500' : ''),
              (code[23] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[23] == 'T19' ? 'bg-pink-600' : ''),
              (code[23] == 'S19' ? 'bg-yellow-700' : ''),
              (code[23] == 'Idle' ? 'bg-purple-500' : ''),
              (code[23] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[23])">
            {{ code[23] }}<br /><span class="text-2xs">{{ slot[23] }}</span>
          </td>
          <td
            :class="[
              (code[24] == 'A1047' ? 'bg-blue-500' : ''),
              (code[24] == 'T17' ? 'bg-indigo-600' : ''),
              (code[24] == 'T17+' ? 'bg-green-500' : ''),
              (code[24] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[24] == 'T19' ? 'bg-pink-600' : ''),
              (code[24] == 'S19' ? 'bg-yellow-700' : ''),
              (code[24] == 'Idle' ? 'bg-purple-500' : ''),
              (code[24] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[24])">
            {{ code[24] }}<br /><span class="text-2xs">{{ slot[24] }}</span>
          </td>
        </tr>

        <!-- 15 to 19 -->
        <tr>
          <td
            :class="[
              (code[15] == 'A1047' ? 'bg-blue-500' : ''),
              (code[15] == 'T17' ? 'bg-indigo-600' : ''),
              (code[15] == 'T17+' ? 'bg-green-500' : ''),
              (code[15] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[15] == 'T19' ? 'bg-pink-600' : ''),
              (code[15] == 'S19' ? 'bg-yellow-700' : ''),
              (code[15] == 'Idle' ? 'bg-purple-500' : ''),
              (code[15] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[15])">
            {{ code[15] }}<br /><span class="text-2xs">{{ slot[15] }}</span>
          </td>
          <td
            :class="[
              (code[16] == 'A1047' ? 'bg-blue-500' : ''),
              (code[16] == 'T17' ? 'bg-indigo-600' : ''),
              (code[16] == 'T17+' ? 'bg-green-500' : ''),
              (code[16] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[16] == 'T19' ? 'bg-pink-600' : ''),
              (code[16] == 'S19' ? 'bg-yellow-700' : ''),
              (code[16] == 'Idle' ? 'bg-purple-500' : ''),
              (code[16] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[16])">
            {{ code[16] }}<br /><span class="text-2xs">{{ slot[16] }}</span>
          </td>
          <td
            :class="[
              (code[17] == 'A1047' ? 'bg-blue-500' : ''),
              (code[17] == 'T17' ? 'bg-indigo-600' : ''),
              (code[17] == 'T17+' ? 'bg-green-500' : ''),
              (code[17] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[17] == 'T19' ? 'bg-pink-600' : ''),
              (code[17] == 'S19' ? 'bg-yellow-700' : ''),
              (code[17] == 'Idle' ? 'bg-purple-500' : ''),
              (code[17] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[17])">
            {{ code[17] }}<br /><span class="text-2xs">{{ slot[17] }}</span>
          </td>
          <td
            :class="[
              (code[18] == 'A1047' ? 'bg-blue-500' : ''),
              (code[18] == 'T17' ? 'bg-indigo-600' : ''),
              (code[18] == 'T17+' ? 'bg-green-500' : ''),
              (code[18] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[18] == 'T19' ? 'bg-pink-600' : ''),
              (code[18] == 'S19' ? 'bg-yellow-700' : ''),
              (code[18] == 'Idle' ? 'bg-purple-500' : ''),
              (code[18] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[18])">
            {{ code[18] }}<br /><span class="text-2xs">{{ slot[18] }}</span>
          </td>
          <td
            :class="[
              (code[19] == 'A1047' ? 'bg-blue-500' : ''),
              (code[19] == 'T17' ? 'bg-indigo-600' : ''),
              (code[19] == 'T17+' ? 'bg-green-500' : ''),
              (code[19] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[19] == 'T19' ? 'bg-pink-600' : ''),
              (code[19] == 'S19' ? 'bg-yellow-700' : ''),
              (code[19] == 'Idle' ? 'bg-purple-500' : ''),
              (code[19] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[19])">
            {{ code[19] }}<br /><span class="text-2xs">{{ slot[19] }}</span>
          </td>
        </tr>

        <!-- 10 to 14 -->
        <tr>
          <td
            :class="[
              (code[10] == 'A1047' ? 'bg-blue-500' : ''),
              (code[10] == 'T17' ? 'bg-indigo-600' : ''),
              (code[10] == 'T17+' ? 'bg-green-500' : ''),
              (code[10] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[10] == 'T19' ? 'bg-pink-600' : ''),
              (code[10] == 'S19' ? 'bg-yellow-700' : ''),
              (code[10] == 'Idle' ? 'bg-purple-500' : ''),
              (code[10] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[10])">
            {{ code[10] }}<br /><span class="text-2xs">{{ slot[10] }}</span>
          </td>
          <td
            :class="[
              (code[11] == 'A1047' ? 'bg-blue-500' : ''),
              (code[11] == 'T17' ? 'bg-indigo-600' : ''),
              (code[11] == 'T17+' ? 'bg-green-500' : ''),
              (code[11] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[11] == 'T19' ? 'bg-pink-600' : ''),
              (code[11] == 'S19' ? 'bg-yellow-700' : ''),
              (code[11] == 'Idle' ? 'bg-purple-500' : ''),
              (code[11] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[11])">
            {{ code[11] }}<br /><span class="text-2xs">{{ slot[11] }}</span>
          </td>
          <td
            :class="[
              (code[12] == 'A1047' ? 'bg-blue-500' : ''),
              (code[12] == 'T17' ? 'bg-indigo-600' : ''),
              (code[12] == 'T17+' ? 'bg-green-500' : ''),
              (code[12] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[12] == 'T19' ? 'bg-pink-600' : ''),
              (code[12] == 'S19' ? 'bg-yellow-700' : ''),
              (code[12] == 'Idle' ? 'bg-purple-500' : ''),
              (code[12] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[12])">
            {{ code[12] }}<br /><span class="text-2xs">{{ slot[12] }}</span>
          </td>
          <td
            :class="[
              (code[13] == 'A1047' ? 'bg-blue-500' : ''),
              (code[13] == 'T17' ? 'bg-indigo-600' : ''),
              (code[13] == 'T17+' ? 'bg-green-500' : ''),
              (code[13] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[13] == 'T19' ? 'bg-pink-600' : ''),
              (code[13] == 'S19' ? 'bg-yellow-700' : ''),
              (code[13] == 'Idle' ? 'bg-purple-500' : ''),
              (code[13] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[13])">
            {{ code[13] }}<br /><span class="text-2xs">{{ slot[13] }}</span>
          </td>
          <td
            :class="[
              (code[14] == 'A1047' ? 'bg-blue-500' : ''),
              (code[14] == 'T17' ? 'bg-indigo-600' : ''),
              (code[14] == 'T17+' ? 'bg-green-500' : ''),
              (code[14] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[14] == 'T19' ? 'bg-pink-600' : ''),
              (code[14] == 'S19' ? 'bg-yellow-700' : ''),
              (code[14] == 'Idle' ? 'bg-purple-500' : ''),
              (code[14] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[14])">
            {{ code[14] }}<br /><span class="text-2xs">{{ slot[14] }}</span>
          </td>
        </tr>

        <!-- 5 to 9 -->
        <tr>
          <td
            :class="[
              (code[5] == 'A1047' ? 'bg-blue-500' : ''),
              (code[5] == 'T17' ? 'bg-indigo-600' : ''),
              (code[5] == 'T17+' ? 'bg-green-500' : ''),
              (code[5] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[5] == 'T19' ? 'bg-pink-600' : ''),
              (code[5] == 'S19' ? 'bg-yellow-700' : ''),
              (code[5] == 'Idle' ? 'bg-purple-500' : ''),
              (code[5] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[5])">
            {{ code[5] }}<br /><span class="text-2xs">{{ slot[5] }}</span>
          </td>
          <td
            :class="[
              (code[6] == 'A1047' ? 'bg-blue-500' : ''),
              (code[6] == 'T17' ? 'bg-indigo-600' : ''),
              (code[6] == 'T17+' ? 'bg-green-500' : ''),
              (code[6] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[6] == 'T19' ? 'bg-pink-600' : ''),
              (code[6] == 'S19' ? 'bg-yellow-700' : ''),
              (code[6] == 'Idle' ? 'bg-purple-500' : ''),
              (code[6] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[6])">
            {{ code[6] }}<br /><span class="text-2xs">{{ slot[6] }}</span>
          </td>
          <td
            :class="[
              (code[7] == 'A1047' ? 'bg-blue-500' : ''),
              (code[7] == 'T17' ? 'bg-indigo-600' : ''),
              (code[7] == 'T17+' ? 'bg-green-500' : ''),
              (code[7] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[7] == 'T19' ? 'bg-pink-600' : ''),
              (code[7] == 'S19' ? 'bg-yellow-700' : ''),
              (code[7] == 'Idle' ? 'bg-purple-500' : ''),
              (code[7] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[7])">
            {{ code[7] }}<br /><span class="text-2xs">{{ slot[7] }}</span>
          </td>
          <td
            :class="[
              (code[8] == 'A1047' ? 'bg-blue-500' : ''),
              (code[8] == 'T17' ? 'bg-indigo-600' : ''),
              (code[8] == 'T17+' ? 'bg-green-500' : ''),
              (code[8] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[8] == 'T19' ? 'bg-pink-600' : ''),
              (code[8] == 'S19' ? 'bg-yellow-700' : ''),
              (code[8] == 'Idle' ? 'bg-purple-500' : ''),
              (code[8] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[8])">
            {{ code[8] }}<br /><span class="text-2xs">{{ slot[8] }}</span>
          </td>
          <td
            :class="[
              (code[9] == 'A1047' ? 'bg-blue-500' : ''),
              (code[9] == 'T17' ? 'bg-indigo-600' : ''),
              (code[9] == 'T17+' ? 'bg-green-500' : ''),
              (code[9] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[9] == 'T19' ? 'bg-pink-600' : ''),
              (code[9] == 'S19' ? 'bg-yellow-700' : ''),
              (code[9] == 'Idle' ? 'bg-purple-500' : ''),
              (code[9] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[9])">
            {{ code[9] }}<br /><span class="text-2xs">{{ slot[9] }}</span>
          </td>
        </tr>

        <!-- 5 to 9 -->
        <tr>
          <td
            :class="[
              (code[0] == 'A1047' ? 'bg-blue-500' : ''),
              (code[0] == 'T17' ? 'bg-indigo-600' : ''),
              (code[0] == 'T17+' ? 'bg-green-500' : ''),
              (code[0] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[0] == 'T19' ? 'bg-pink-600' : ''),
              (code[0] == 'S19' ? 'bg-yellow-700' : ''),
              (code[0] == 'Idle' ? 'bg-purple-500' : ''),
              (code[0] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[0])">
            {{ code[0] }}<br /><span class="text-2xs">{{ slot[0] }}</span>
          </td>
          <td
            :class="[
              (code[1] == 'A1047' ? 'bg-blue-500' : ''),
              (code[1] == 'T17' ? 'bg-indigo-600' : ''),
              (code[1] == 'T17+' ? 'bg-green-500' : ''),
              (code[1] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[1] == 'T19' ? 'bg-pink-600' : ''),
              (code[1] == 'S19' ? 'bg-yellow-700' : ''),
              (code[1] == 'Idle' ? 'bg-purple-500' : ''),
              (code[1] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[1])">
            {{ code[1] }}<br /><span class="text-2xs">{{ slot[1] }}</span>
          </td>
          <td
            :class="[
              (code[2] == 'A1047' ? 'bg-blue-500' : ''),
              (code[2] == 'T17' ? 'bg-indigo-600' : ''),
              (code[2] == 'T17+' ? 'bg-green-500' : ''),
              (code[2] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[2] == 'T19' ? 'bg-pink-600' : ''),
              (code[2] == 'S19' ? 'bg-yellow-700' : ''),
              (code[2] == 'Idle' ? 'bg-purple-500' : ''),
              (code[2] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[2])">
            {{ code[2] }}<br /><span class="text-2xs">{{ slot[2] }}</span>
          </td>
          <td
            :class="[
              (code[3] == 'A1047' ? 'bg-blue-500' : ''),
              (code[3] == 'T17' ? 'bg-indigo-600' : ''),
              (code[3] == 'T17+' ? 'bg-green-500' : ''),
              (code[3] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[3] == 'T19' ? 'bg-pink-600' : ''),
              (code[3] == 'S19' ? 'bg-yellow-700' : ''),
              (code[3] == 'Idle' ? 'bg-purple-500' : ''),
              (code[3] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[3])">
            {{ code[3] }}<br /><span class="text-2xs">{{ slot[3] }}</span>
          </td>
          <td
            :class="[
              (code[4] == 'A1047' ? 'bg-blue-500' : ''),
              (code[4] == 'T17' ? 'bg-indigo-600' : ''),
              (code[4] == 'T17+' ? 'bg-green-500' : ''),
              (code[4] == 'S17+' ? 'bg-yellow-500' : ''),
              (code[4] == 'T19' ? 'bg-pink-600' : ''),
              (code[4] == 'S19' ? 'bg-yellow-700' : ''),
              (code[4] == 'Idle' ? 'bg-purple-500' : ''),
              (code[4] == 'Stock' ? 'bg-yellow-300' : '')
            ]"
            class="p-0 md:p-0.5 border border-base-200 text-2xs md:text-xs text-gray-900"
            @click="cellClick(slot[4])">
            {{ code[4] }}<br /><span class="text-2xs">{{ slot[4] }}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Rack',
  props: {
    name: String,
    serialNumber: String
  },
  data() {
    return {
      devices: [] as any,
      code: [] as any,
      slot: [] as any,
    }
  },
  async mounted() {
    this.devices = await this.loadDevices()
    for (const device of this.devices) {
      const index = parseInt(device.port) - 1
      this.$set(this.code, index, device.code)
      this.$set(this.slot, index, device.ip)
    }
  },
  methods: {
    async loadDevices() {
      const response = await this.$axios.get(`/devices/${this.serialNumber}`)
      return response.data
    },
    async cellClick(ip: string) {
      this.$store.dispatch('toggleIsDetailsLoading', true)
      this.$store.dispatch('setIpAddress', ip)
      this.$store.dispatch('toggleModal')
      this.$store.dispatch('setDetailsError', false)

      const instance = this.$axios.create({
        baseURL: 'http://localhost/cgminer',
      });
    
      try {
        // Dummy API
        // const responseSummary = await instance.get(`/dummy-api.php?summary=1`)
        
        const responseSummary = await instance.get(`/api2.php?ip=${ip}&summary=1`)

        if (responseSummary.data.SUMMARY) {
          responseSummary.data.SUMMARY.Elapsed = new Date(responseSummary.data.SUMMARY.Elapsed * 1000).toISOString().substr(11, 8)
          if (responseSummary.data.SUMMARY['MHS av']) {
            responseSummary.data.SUMMARY.ThsAv = (parseFloat(responseSummary.data.SUMMARY['MHS av']) / 1000000).toFixed(2)
          }
          if (responseSummary.data.SUMMARY['GHS av']) {
            responseSummary.data.SUMMARY.ThsAv = (parseFloat(responseSummary.data.SUMMARY['GHS av']) / 1000).toFixed(2)
          }

          //
          // Get temperature
          //
          
          // Dummy API
          // const responseStats = await instance.get(`/dummy-api.php`)

          const responseStats = await instance.get(`/api2.php?ip=${ip}`)

          // If device is an Avalon
          if (responseStats.data.STATS0) {
            const eight = responseStats.data.STATS0["8"].split('] ')
            let MtAvg = eight.find((element: string|any[]) => {
              if (element.includes('MTavg')) {
                return true;
              }
            });
            MtAvg = MtAvg.replace('MTavg[', '').replace(' ', ' / ')
            responseSummary.data.SUMMARY.temperature = MtAvg
          }

          // If device is an Antminer
          if (responseStats.data.null) {
            responseSummary.data.SUMMARY.temperature = responseStats.data.null.temp1 + ' / ' + responseStats.data.null.temp2 + ' / ' + responseStats.data.null.temp3
          }

          this.$store.dispatch('setDeviceDetails', responseSummary.data.SUMMARY)
        }
        
      } catch(error) {
        console.log(error)
        this.$store.dispatch('setDetailsError', true)
      }

      this.$store.dispatch('toggleIsDetailsLoading', false)
    }
  },
})
</script>

<style>
  table { table-layout: fixed; }
  td { width: 20%; height:37.5px; }
  td:hover { cursor: pointer; }
</style>