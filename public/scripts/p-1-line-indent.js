/*
 * Script
 *
 * This script is designed for conditional formatting of web components.
 * 
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

const p = document.getElementsByTagName("p");
for (let a of p) {
  if (
    !a.classList.contains("card-text") &&
    !a.classList.contains("testimonial") &&
    a.closest(".center") == null
  ) {
    a.innerHTML = "<indent></indent>" + a.innerHTML;
  }
}
