/**
 * // Header
 * <type>(scope): <subject>
 * // 空一行
 * Body
 * // 空一行
 * Footer
 *
 *
 * Header：
 * 1、type（必需）、scope（可选）和subject（必需）
 * 2、注意冒号后面有空格，不能以大写字母开头
 * 3、当前commit用于撤销以前的commit，则必须以revert:开头，后面跟着被撤销Commit的Header；
 *    revert: feat(pencil): add 'graphiteWidth'
 * 4、scope: 可以省略；用于说明 commit 的影响范围，比如数据层、控制层、视图层等等，视项目不同而不同
 * 5、subject：subject 是 commit 目的的简短描述，不超过50个字符
 *    以动词开头，使用第一人称现在时，比如change，而不是changed或changes
 *    第一个字母小写，结尾不加句号
 *
 * Body：
 * body 可省略；body部分是对本次commit的描述，可以分成多行
 * 1、使用第一人称现在时，比如使用change而不是changed或changes
 * 2、应该说明代码变动的动机，以及与以前行为的对比
 *
 * Footer：
 * footer 可省略； 用于不兼容变动和关闭ISSUE
 * 1、不兼容变动，如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
 *
 *  BREAKING CHANGE: isolate scope bindings definition has changed.
 *
 *  To migrate the code follow the example below:
 *
 *  Before:
 *
 *  scope: {
 *    myAttr: 'attribute',
 *  }
 *
 *  After:
 *
 *  scope: {
 *    myAttr: '@',
 *  }
 *
 *  The removed `inject` wasn't generaly useful for directives so there should be no code using it.
 *
 *  2、关闭 Issue
 *    如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue；Closes #234
 *    也可以一次关闭多个issue； Closes #123, #245, #992
 *
 * 完成的例子
 * // 使用git commit 方便输入多行的commit message
 * $ git commit
 *
 * //输入完整的commit message： header + body +footer
 * test(): 测试完成commit message
 *
 *  I just change string to test
 *  完整的commit message
 *  添加了一个 测试字符串
 *
 *  Closes #111
 *
 */

const types = [
  'feat', // 新功能
  'fix', // 修复问题
  'docs', // 修改文档
  'style', // 修改代码格式(不影响逻辑功能，比如格式化、补充分号等等)
  'refactor', // 重构代码(fix bug或增加新功能不属于此范围)
  'perf', // 提升页面性能
  'test', // 增加/修改测试用例
  'chore', // 修改工具相关（包括但不限于文档、代码生成等, 比如修改了README，webpack配置文件等等）
  'build', // 构建
  'release', // 发版
  'revert', // 回滚
  'deps', // 升级依赖
  'ci', // CI 配置，脚本文件等更新
]

/**
 * https://commitlint.js.org/#/reference-rules
 *
 * rule配置说明:
 * rule由name和配置数组组成
 * 1、数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error
 * 2、第二位为应用与否，可选always|never
 * 3、第三位该rule的值
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'type-case': [0],
    'scope-empty': [0],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
