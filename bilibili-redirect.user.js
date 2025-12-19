// ==UserScript==
// @name         Bilibili Redirect
// @description  访问 B 站首页时自动重定向到搜索页面
// @version      1.0
// @author       CodePencil
// @match        https://www.bilibili.com/
// @match        http://www.bilibili.com/
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 目标重定向地址
    const targetUrl = 'https://search.bilibili.com';

    // 检查当前是否在首页（避免无限重定向）
    if (window.location.hostname === 'www.bilibili.com' && 
        (window.location.pathname === '/' || window.location.pathname === '')) {
        window.location.replace(targetUrl);
    }
})();

