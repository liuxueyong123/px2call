# px2call

一个 [x]px 转 call($fn, [x]) 的 VSCode 插件

# 下载

已经上架：marketplace.visualstudio.com

或者在vscode扩展中直接搜索px2rem安装即可

# 快捷键

mac: `command + 1`
windows: `ctrl + 1`

# 功能

选中需要转换的一段，按下快捷键即可转换

例： `font-size: 16px;` => `font-size: call($fn, 16);`

`border: 0px 4px;` => `border: 0 call($fn, 4);`
