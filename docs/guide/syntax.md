# 搜索语法

启动器、文件搜索窗口、对话框工具栏的搜索框、资源管理器里打字即搜，查文件都交给 Everything，输入原样传过去，所以 Everything 的写法都能用。

忘了怎么写时：启动器里只输入 `?`，或点文件搜索窗口搜索框右端的“?”，就能看到速查。

## 组合

| 写法 | 作用 | 例子 |
|---|---|---|
| 空格 | 同时包含（且） | `报告 2026` |
| `\|` | 或 | `*.mp4\|*.mkv` |
| `!` | 排除 | `报告 !草稿` |
| `< >` | 分组 | `<报告\|总结> 2026` |
| `" "` | 带空格的词或路径 | `"c:\program files\" *.exe` |

## 名字

| 写法 | 作用 | 例子 |
|---|---|---|
| `*` `?` | 通配符：任意多个 / 一个字符 | `*.mp4`、`报告??.docx` |
| `startwith:` | 名字以…开头 | `startwith:IMG_` |
| `endwith:` | 名字以…结尾 | `endwith:_final` |
| `case:` | 区分大小写 | `case:README` |
| `regex:` | 正则表达式 | `regex:^IMG_\d+\.jpg$` |

## 类型和位置

| 写法 | 作用 | 例子 |
|---|---|---|
| `ext:` | 扩展名，分号分隔 | `ext:jpg;png` |
| `file:` / `folder:` | 只要文件 / 只要文件夹 | `folder:下载` |
| `doc:` `pic:` `video:` `audio:` | 按类型（过滤器，可在 选项 → 文件搜索 → 过滤器 里改、加） | `pic: 截图` |
| 带 `\` | 连路径一起匹配 | `\downloads *.pdf` |
| `parent:` | 只看某个文件夹里直接的内容 | `parent:c:\windows` |
| `empty:` | 空文件夹 | `empty:` |

## 大小和时间

| 写法 | 作用 | 例子 |
|---|---|---|
| `size:` | 大小（kb、mb、gb） | `size:>100mb`、`size:1mb..10mb` |
| `dm:` | 修改日期 | `dm:today`、`dm:thisweek`、`dm:>=2026-10-01` |
| `dc:` | 创建日期 | `dc:lastmonth` |

## 内容

| 写法 | 作用 | 例子 |
|---|---|---|
| `content:` | 按文件内容（要读文件，很慢，最好配合位置或类型） | `ext:txt content:密码` |

## 拼音

应用名支持拼音（`jsb` → 记事本）；文件和文件夹名暂不支持拼音，`sucai` 搜不到“素材”。

完整的写法以 [Everything 官方说明](https://www.voidtools.com/support/everything/searching/) 为准。
