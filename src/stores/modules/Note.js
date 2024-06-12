import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('NoteStore', () => {
  // =============================
  // 笔记目录
  // =============================

  // 结构说明：
  //    以 数组 / 对象 （vue均判断为object）作为判断单位
  //    具备key的元素由Paragraph组件处理为一级/二级标题
  //    不具备key的元素由Cell组件进行判断，进行正文内容(字符串)或表格(数组/对象)的判断。
  //    * 字符串正文内容直接渲染
  //    * 表格内容调用Tables组件，生成表格结构，并进行遍历，遍历的单元格内容(数组元素/对象值)传递给Cell进行判断
  //    * 单元格内容既包含正文内容，又包含表格时：遍历单元格内容进行拆分，并将遍历结果(拆分结果)传递给Cell内容，再次判断
  //    * 非表格的正文内容可以视为单元格内容，与表格的单元格内容一起由Cell组件处理
  //
  //    分类名: {
  //      一级标题: [                        // Paragraph组件处理
  //        '正文内容',                      // Cell组件处理
  //
  //        二级标题: [                      // Paragraph组件处理
  //          '正文内容',                    // Cell组件处理
  //
  //          [                             // 表格 // Cell组件判断，Table组件处理
  //            [单元格内容,单元格内容],      // 表格行 // 由Tables组件进行遍历，并生成表格结构
  //                                        // Tables组件遍历的单元格内容，传递给Cell组件进行判断处理
  //
  //            [单元格内容,[                // 单元格的嵌套表格（单元格可多层嵌套表格）// Cell组件判断
  //              [单元格内容,单元格内容]     // 嵌套表格行 // Tabels组件判断处理
  //            ],单元格内容]
  //
  //            [单元格内容,[                // 单元格既有正文内容，同时嵌套表格 // Cell组件判断
  //              '正文内容',                // 单元格的正文内容 // Cell组件处理
  //              [                         // 单元格的嵌套表格（单元格可多层嵌套表格）// Cell组件判断
  //                [单元格内容,单元格内容]   // 嵌套表格行 // Tabels组件判断处理
  //              ]
  //            ]]
  //          ]
  //        ]
  //      ]
  //    }

  const noteList = ref({
    前端笔记: {
      html: {
        基本结构标签: [
          [
            ['<html></html>', 'html标签', '页面中最大的标签，也称为根标签'],
            [
              '<head></head>',
              'html文档的头部标签',
              [
                '用于声明文档的关键信息\n\n举例：\n<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>',
                [
                  [
                    '<meta>',
                    '文档描述标签',
                    [
                      '属性：',
                      [
                        ['http-equiv', '模拟http响应头，通常与content属性一起使用'],
                        [
                          'name',
                          '定义的关键字，通常与content属性一起使用\n◆设置http-equiv属性时，不应使用name属性'
                        ],
                        [
                          'content',
                          [
                            '指定http-equiv属性或name属性的相关值',
                            [
                              ['width', 'viewport的宽度'],
                              ['height', 'viewport的高度'],
                              ['initial-scale', '初始的缩放比例'],
                              ['minimum-scale', '允许用户缩放到的最小比例'],
                              ['maximum-scale', '允许用户缩放到的最大比例'],
                              ['user-scalable', '用户是否可以手动缩放']
                            ]
                          ]
                        ]
                      ]
                    ]
                  ],
                  [
                    '<link>',
                    '外部链接标签',
                    [
                      '用于链接外部资源，如css样式表、网页图标\n\n属性：',
                      [
                        [
                          'rel',
                          [
                            '定义文档与外部链接资源之间的关系，值常为以下几种',
                            [
                              ['icon', '网页图标'],
                              ['stylesheet', 'css样式表']
                            ]
                          ]
                        ],
                        ['href', '外部资源的链接地址']
                      ]
                    ]
                  ],
                  [
                    '<script></script>',
                    '脚本标签',
                    [
                      '用于执行标签内脚本语句\n添加src属性时，标签内语句不会执行',
                      [
                        ['type', '指定脚本的MIME类型，如text/javascript、module'],
                        ['src', '指定外部脚本链接'],
                        ['charset', '指定脚本使用的字符编码\n◆ 仅适用于外部脚本'],
                        ['defer', '页面完成解析后，才执行脚本\n◆ 仅适用于外部脚本'],
                        ['async', 'HTML5新增\n异步执行脚本\n◆ 仅适用于外部脚本'],
                        ['xml:space', 'HTML5移除\n保留代码中的空白']
                      ]
                    ]
                  ],
                  ['<title></title>', '文档标题标签', '用于指定网页名称\n必须设置']
                ]
              ]
            ],
            ['<body></body>', 'html文档的主体标签', '包含页面内容的所有html标签']
          ]
        ],
        常用标签: [
          [
            [
              '<header></header>',
              'HTML5新增\n头部标签',
              '语义化标签\n◆主要针对SEO优化使用\n◆可以使用多次\n◆在IE9中需要先转换为块级元素\n◆移动端较为常用'
            ],
            [
              '<nav></nav>',
              'HTML5新增\n导航标签',
              '语义化标签\n◆主要针对SEO优化使用\n◆可以使用多次\n◆在IE9中需要先转换为块级元素\n◆移动端较为常用'
            ],
            [
              '<article></article>',
              'HTML5新增\n内容标签',
              '语义化标签\n◆主要针对SEO优化使用\n◆可以使用多次\n◆在IE9中需要先转换为块级元素\n◆移动端较为常用'
            ],
            [
              '<section></section>',
              'HTML5新增\n定义文档标签',
              '语义化标签\n◆主要针对SEO优化使用\n◆可以使用多次\n◆在IE9中需要先转换为块级元素\n◆移动端较为常用'
            ],
            [
              '<aside></aside>',
              'HTML5新增\n侧边栏标签',
              '语义化标签\n◆主要针对SEO优化使用\n◆可以使用多次\n◆在IE9中需要先转换为块级元素\n◆移动端较为常用'
            ],
            [
              '<footer></footer>',
              'HTML5新增\n尾部标签',
              '语义化标签\n◆主要针对SEO优化使用\n◆可以使用多次\n◆在IE9中需要先转换为块级元素\n◆移动端较为常用'
            ],
            [
              '<h1></h1>一级标题\n…\n<h6></h6>六级标题',
              '标题标签',
              'display:block;\nfont-weight: bold;\nmargin;\nfont-size;'
            ],
            ['<p></p>', 'paragraph，段落标签'],
            ['<br>\n<br />', 'break，强制换行\n◆<br>为HTML写法\n◆<br />为XML(XHTML)写法', '-'],
            ['<strong></strong>\n<b></b>', '文字加粗标签', 'font-weight: bold;'],
            ['<em></em>\n<i></i>', '文字倾斜标签'],
            ['<del></del>\n<s></s>', '文字删除线标签'],
            ['<ins></ins>\n<u></u>', '文字下划线标签'],
            ['<div></div>', 'division，最常用的标签之一', 'display: block;'],
            ['<span></span>', '最常用的标签之一', 'display: inline;'],
            [
              '<pre></pre>',
              '预定义格式文本标签\n保留空格和换行符以及其他格式',
              '不支持width属性\n\ndisplay: block;\nfont-family: monospace;\nunicode-bidi: isolate;\nwhite-space: pre;\nmargin: 1em 0px;'
            ],
            [
              '<img src="" />',
              [
                'image，插入图片\n◆src为必须属性，用于指定图像文件的路径和文件名',
                [
                  ['src', '图片路径', '必须属性'],
                  ['alt', '文本', '替换文本（图像无法显示时显示的文本）'],
                  ['title', '文本', '提示文本（鼠标放到图像上，显示的文字）'][
                    ('width', '数值', '图像宽度\n◆无需px单位')
                  ],
                  ['height', '数值', '图像高度\n◆无需px单位'],
                  ['border', '数值', '图像边框的粗细。默认为黑边框']
                ]
              ]
            ],
            [
              '<a href="目标链接" targe="窗口打开方式"> 描述文本、图像、表格、音频或视频 </a>',
              'anchor，锚，链接标签\n◆href为必须属性，默认为#（空链接），用于指定链接目标地址。对象可以是网址、文件或当前页面的id指定位置\n◆◆<a href="#子标题"> 链接描述文本 </a>\n    <h2 id="子标题"> 标题名 </h2>\n◆target默认为_self（在当前页面打开），可修改为_blank（在新窗口中打开）\n◆具有默认样式。不生效body{}的样式，需要单独指定样式'
            ],
            [
              '<table> \n	<thead>\n		<tr>\n			<th> 表头单元格 </th>\n		</tr>\n	</thead>\n	<tbody>\n		<tr>\n			<td> 单元格 </td>\n		</tr>\n	</tbody>\n</table>',
              [
                `table，表格\n<table> </table>，定义表格标签<thead> </thead>，定义表格头部。必须嵌套在<table> </table>标签中\n<tbody> </tbody>，定义表格主体。必须嵌套在<table> </table>标签中\n<tr> </tr>，table row，定义行。必须嵌套在<table> </table>标签中\n<th> </th>，table head，定义表头单元格，文本居中并加粗。必须嵌套在<tr> </tr>标签中\n<td> </td>，table data，定义单元格。必须嵌套在<tr> </tr>标签中\n\n属性`,
                [
                  ['align', 'left、center、right', '规定单元格内元素的对齐方式'],
                  ['border', '1或""', '规定单元格是否有边框。默认为""，表示无边框'],
                  ['cellpadding', '像素值', '规定单元格边沿与内容的间隔。默认1像素'],
                  ['cellspacing', '像素值', '规定单元格之间的间隔。默认2像素'],
                  ['width', '像素值、百分比', '规定表格的宽度'],
                  ['rowspan', '合并单元格个数', '跨行合并单元格'],
                  ['colspan', '合并单元格个数', '跨列合并单元格']
                ]
              ]
            ],
            [
              `<ul>\n	<li> 列表项1 </li>\n	<li> 列表项2 </li>\n</ul>`,
              `<ul> </ul>，无序列表。只能嵌套<li> </li>\n<li> </li>，定义列表项\n◆可以通过CSS的list-style: none; 将项目符号去掉`
            ],
            [
              `<ol>\n	<li> 列表项1 </li>\n	<li> 列表项2 </li>\n</ol>`,
              `<ol> </ol>，有序列表，排序默认以数字来显示。只能嵌套<li> </li>\n<li> </li>，定义列表项`
            ],
            [
              `<dl>\n	<dt> 列表项1 </dt>\n	<dd> 列表子项1 </dd>\n	<dd> 列表子项2 </dd>\n</dl>`,
              `<dl> </dl>，自定义列表\n<dt> </dt>，定义自定义列表项\n<dd> </dd>，定义自定义列表子项，带缩进\n◆一般由一个<dt>对应多个<dd>`
            ],
            [
              `<form artion="url地址" method="提交方式" name="表单域名称">\n	各种表单元素控件\n	<input type="属性值" />\n</form>`,
              [
                ['action', 'url地址', '指定表单提交服务器程序的url地址'],
                ['method', 'get\npost', '设置表单设置的提交方式'],
                [
                  'name',
                  '名称',
                  '指定表单名称，用于区分同一页面中的多个表单域（即将多个选项分为同一组，同组不同选项将会互斥，如性别中的男、女）\n◆需与value搭配使用，以区分不同选项'
                ],
                ['required', 'required', 'HTML5新增\n指定该控件为必填项'],
                ['placeholder', '提示文本', 'HTML5新增\n默认不显示'],
                ['autofocus', 'autofocus', 'HTML5新增\n页面加载完成时，自动选择表单'],
                ['autocomplete', 'off/on', 'HTML5新增\n自动填写。默认为on\n◆需要添加name属性'],
                ['multiple', 'multiple', 'HTML5新增\n多选文件提交'],
                [
                  'input',
                  'type\nname\nvalue\nchecked\nmaxlength',
                  [
                    '用于收集用户信息\ntype用于指定输入内容：\n',
                    [
                      ['button', '可点击按钮（搭配JS启动脚本）'],
                      ['checkbox', '复选框'],
                      ['file', '输入字段 或 "浏览"按钮，用于上传文件'],
                      ['hidden', '隐藏输入字段'],
                      ['image', '图片形式的按钮'],
                      ['password', '密码字段（隐藏输入内容）'],
                      ['radio', '单选按钮'],
                      ['reset', '重置按钮。将清除表单中所有数据'],
                      ['submit', '提交按钮。将表单数据发送到服务器'],
                      ['text', '单行输入字段。默认宽度为20个字符'],
                      ['email', 'HTML5新增\n限制内容为email地址'],
                      ['url', 'HTML5新增\n限制内容为url类型'],
                      ['date', 'HTML5新增\n限制内容为日期'],
                      ['time', 'HTML5新增\n限制内容为时间'],
                      ['month', 'HTML5新增\n限制内容为月份'],
                      ['week', 'HTML5新增\n限制内容为周'],
                      ['number', 'HTML5新增\n限制内容为数字'],
                      ['tel', 'HTML5新增\n限制内容为手机号码'],
                      ['search', 'HTML5新增\n搜索框'],
                      ['color', 'HTML5新增\n颜色选择表单']
                    ],
                    '◆必须添加在<form> </form>里时才能验证input内容的类型是否正确\n\n',
                    '其他<input>标签属性：',
                    [
                      [
                        'name',
                        '由用户自定义',
                        '定义input元素的名称（主要由后台人员使用）\n◆要求“单选按钮”和“复选框”要有相同的name值'
                      ],
                      ['value', '由用户自定义', '定义input元素的值（主要由后台人员使用）'],
                      [
                        'checked',
                        'checked',
                        '使指定input元素在加载时被选中\n◆主要用于“单选按钮”和“复选框”'
                      ],
                      ['maxlength', '正整数', '指定输入字段的字符最大长度']
                    ]
                  ]
                ]
              ]
            ],
            [
              `<label for="idname"> 标签名 </label>\n<input type="radio" name="idname" />`,
              '为input元素定义标签。用于绑定<input>的表单元素：选中<label>元素时，等同于选中绑定的<input>表单元素\n◆<label>的for属性值必须与<input>的name值相同'
            ],
            [
              `<select>\n	<option>选项1</option>\n	<option selected="selected">选项2</option>\n</select>`,
              '下拉列表选项。至少包含一对<option>标签\n◆selected属性用于指定当前项为默认选中项\n◆vue中的v-model指定为option的value值'
            ],
            ['<textarea>', '多行文本的输入框'],
            [
              [
                [
                  `<video src="文件地址" controls="controls">\n<source src="文件地址" type="video/mp4">\n<source src="文件地址" type="video/ogg">\n无法播放时的提示文本</video>`,
                  [
                    '视频',
                    [
                      ['autoplay', 'autoplay', '视频自动播放'],
                      ['controls', 'controls', '显示播放控件'],
                      ['width', '数值', '播放器宽度'],
                      ['height', '数值', '播放器高度'],
                      ['loop', 'loop', '循环播放'],
                      [
                        'preload',
                        'auto/none',
                        'auto为预加载视频\nnone为不加载视频\n◆设置autoplay时，该属性会被忽略'
                      ],
                      ['src', '视频地址', '指定视频文件地址'],
                      ['poster', '图片地址', '指定等待加载时的封面图片'],
                      ['muted', 'muted', '静音播放']
                    ],
                    [['<source>', '文件地址', '兼容性写法。添加多个视频源，依序检测是否支持播放']]
                  ]
                ],
                [
                  `<audio src="文件地址" controls="controls">\n<source src="文件地址" type="audio/mpeg">\n<source src="文件地址" type="audio/ogg">\n无法播放时的提示文本\n</audio>`,
                  [
                    '音频',
                    [
                      ['autoplay', 'autoplay', '音频自动播放'],
                      ['controls', 'controls', '显示播放控件'],
                      ['loop', 'loop', '循环播放'],
                      ['src', '视频地址', '指定音频文件地址']
                    ],
                    [['<source>', '文件地址', '兼容性写法。添加多个视频源，依序检测是否支持播放']]
                  ]
                ]
              ],
              [
                'HTML5新增',
                '浏览器兼容性如下：',
                [
                  ['浏览器', 'MP4', 'WebM', 'Ogg'],
                  ['chrome', '支持', '支持', '支持'],
                  ['Firefox', '支持', '支持', '支持'],
                  ['Safari', '支持', '不支持', '不支持']
                ],
                [
                  ['浏览器', 'MP3', 'Wav', 'Ogg'],
                  ['chrome', '支持', '支持', '支持'],
                  ['Firefox', '支持', '支持', '支持'],
                  ['Safari', '支持', '支持', '不支持']
                ]
              ]
            ]
          ]
        ],
        特殊字符: [
          [
            ['', '空格', '&nbsp;'],
            ['<', '小于号', '&lt;'],
            ['>', '大于号', '&gt;'],
            ['&', '和', '&amp;'],
            ['￥', '人民币', '&yen;'],
            ['©', '版权', '&copy;'],
            ['®', '注册商标', '&reg;'],
            ['°', '度', '&deg;'],
            ['±', '正负号', '&plusmn;'],
            ['×', '乘号', '&times;'],
            ['÷', '除号', '&divide;'],
            ['²', '平方', '&sup2;'],
            ['³', '立方', '&sup3;']
          ]
        ]
      },
      css: { url: 'css' },
      js: { url: 'js' },
      vue: { name: 'vue', url: 'vue' },
      ajax: { name: 'ajax', url: 'ajax' },
      nodeJs: { name: 'node.js', url: 'node.js' }
    },
    其他编程笔记: {
      vscode: { url: 'vscode' },
      git: {
        说明: [
          '分布式的代码版本控制系统\n创建一个git仓库，用于保存记录每个版本的代码，并存储修改记录，形成代码历史。且在多人开发时可以高效合并代码内容'
        ],
        系统配置指令: [
          [
            ['git -v', '查看版本号'],
            ['git config --global user.name "用户名"', '配置本机用户名'],
            ['git config --global user.email "用户邮箱"', '配置本机用户邮箱'],
            ['git config --list', '查看git配置'],
            ['git config --system --list', '查看系统配置'],
            ['git config --global --list', '查看当前用户配置']
          ]
        ],
        git仓库: {
          初始化仓库: [
            'git仓库是用于记录文件状态内容的地方，存储着修改的历史记录\n可以使用以下两种方式创建git仓库',
            [
              ['把本地文件夹转为git仓库', 'git init'],
              [
                '从其他服务器克隆git仓库\n◆ 仅能在新建仓库的情况下使用clone指令\n◆ 克隆后无需再次添加git远程仓库地址',
                'git clone 远程仓库地址'
              ]
            ]
          ],
          仓库工作区: [
            [
              [
                '工作区',
                '实际开发时操作的文件夹',
                [
                  [
                    ['git add 文件名', '暂存指定文件'],
                    ['git add .', '暂存所有改动的文件']
                  ],
                  '\n文件标识',
                  [
                    ['未跟踪', 'U', '新文件 / 被移除过的文件。未被git保存过'],
                    ['已跟踪', 'A', 'git第一次保存的文件'],
                    ['未修改', '无标识', '已成功提交保存，即三个区域的版本统一'],
                    [
                      '已修改',
                      'M',
                      '保存过的文件，在工作区内发生改动，且未提交保存\n◆ 提交暂存并不会移除M标识'
                    ]
                  ],
                  [
                    ['git status', '查看文件状态的详细信息'],
                    [
                      'git status -s',
                      [
                        '查看文件状态的简要信息',
                        [
                          [
                            '<span style="color: red;">M</span>',
                            '有文件在工作区发生改动，且未暂存'
                          ],
                          ['<span style="color: green;">M</span>', '有文件已暂存，但未提交保存'],
                          ['无内容提示', '所有文件均提交保存 / 内容无改动']
                        ]
                      ]
                    ]
                  ]
                ]
              ],
              [
                '暂存区',
                '暂存改动过的文件\n保存至.git/index',
                [
                  ['git ls-files', '查看暂存的文件'],
                  [
                    'git commit',
                    [
                      '暂存所有改动的文件',
                      [
                        ['-a', '直接将文件从工作区保存至版本库'],
                        ['-m "备注内容"', '备注内容']
                      ]
                    ]
                  ],
                  ['git restore 目标文件名', '将文件从暂存区复原并覆盖至工作区'],
                  ['git rm --cachaed 目标文件名', '从暂存区移除目标文件']
                ]
              ],
              [
                '版本库',
                '提交并保存的内容，并产生一个版本快照\n保存至.git/objects',
                [
                  '查看历史记录',
                  [
                    ['git log', '查看当前分支历史记录的详细信息'],
                    ['git log --oneline', '查看当前分支历史记录的简要信息'],
                    ['git reflog --oneline', '查看所有分支历史记录的简要信息']
                  ],
                  '\n版本覆盖',
                  [
                    [
                      'git reset --soft 版本号',
                      '将版本库中的某个版本覆盖至工作区和暂存区\n◆ 保留原文件，且全部更改为"未跟踪"状态'
                    ],
                    [
                      'git reset --hard 版本号',
                      '将版本库中的某个版本覆盖至工作区和暂存区\n◆ 不保留原文件'
                    ],
                    [
                      [[['git reset'], ['git reset --mixed 版本号']], '效果等同'],
                      '将版本库中的某个版本覆盖至工作区和暂存区\n◆ 不保留暂存区原文件\n◆ 保留工作区原文件，且全部更改为"未跟踪"状态'
                    ]
                  ]
                ]
              ]
            ]
          ]
        },
        分支: {
          定义: [
            [
              ['定义', '本质上是指向提交节点的可变指针，默认名为master'],
              ['用途', '开发新需求、修复BUG时，保证主线代码随时可用\n提高多人协同开发的效率'],
              ['HRAD指针', '影响工作区和暂存区的代码状态\n◆ HRAD指针指向当前分支指针']
            ]
          ],
          指令: [
            [
              ['查看分支', 'git branch'],
              ['创建分支', 'git branch 分支名\n◆ 将在当前分支下创建新的分支'],
              ['创建并切换至新分支', 'git branch -b 分支名'],
              ['删除分支指针', 'git branch -d 分支名'],
              ['切换分支', 'git checkout 分支名'],
              [
                '合并分支',
                'git merge 分支名\n◆ 应在主分支下执行该指令\n◆ 若主分支在创建分支后，产生了新的提交记录，合并时将自动提交一次版本库保存\n◆ 合并冲突只能手动操作'
              ]
            ]
          ]
        },
        远程仓库: [
          '第三方托管平台：Gitee、GitLab、GitHub',
          [
            [
              '添加git远程仓库',
              'git remote add 自定义远程仓库名 远程仓库地址\n◆ 同一远程仓库名只能对应一个地址\n◆ 修改远程仓库地址，只能先移除再添加'
            ],
            ['移除git远程仓库', 'git remote remove 自定义远程仓库名'],
            ['查看git远程仓库', 'git remote -v'],
            [
              '推送至远程仓库',
              [
                ['简要写法', 'git push -u 远程仓库名 本地和远程分支名'],
                ['完整写法', 'git push --set-upstream 远程仓库名 本地分支名:远程分支名']
              ]
            ],
            [
              '从远程仓库获取并合并',
              [
                [
                  'git pull 远程仓库名 本地分支名:远程分支名',
                  [
                    '◆ git pull为以下两条指令的整合写法',
                    [
                      [
                        'git fetch 远程仓库名 本地分支名:远程分支名',
                        '获取远程分支名\n◆ 不执行合并分支'
                      ],
                      ['git merge 远程仓库名/远程分支名', '合并分支']
                    ]
                  ]
                ],
                [
                  'git pull --rebase 远程仓库名 本地分支名:远程分支名',
                  '变基：将分支移到一个新的基\n用于将本地内容上传至新的远程仓库'
                ]
              ]
            ]
          ]
        ],
        忽略文件: [
          [
            [
              '.gitignore',
              [
                '在项目根目录新建.gitignore文件\n填入相应配置，不再跟踪指定文件',
                [
                  ['系统或软件生成的文件', '.vscode\nnode_modules'],
                  ['编译产生的结果文件', 'dist'],
                  ['运行时生成的日志文件，缓存文件，临时文件等', '*.log'],
                  ['涉密文件，密码，秘钥等文件', '*.pem\n*.cer'],
                  ['指定文件', '文件名\n◆无需路径']
                ]
              ]
            ]
          ]
        ]
      },
      lua: { name: 'lua', url: 'lua' }
    }
  })

  // =============================

  return {
    // 笔记目录
    noteList
  }
})
