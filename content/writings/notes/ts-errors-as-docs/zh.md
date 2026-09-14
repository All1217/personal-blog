---
title: 把 TypeScript 报错当成文档来写
titleEn: Treat TypeScript errors as documentation
excerpt: 与其在 README 里再解释一遍约束，不如让错误信息自己说话。记录了 branded type 和自定义 type guard 的几处实践。
excerptEn: Instead of restating constraints in the README, let the compiler speak. Notes on branded types and custom type guards that actually helped.
date: 2026-07-03
---

README 里的「请不要传入任意 string」三个月后一定会被人（包括我）忽略。编译器拦下来的那一行，反而有人会读。

## branded type

给 `UserId` 和 `OrderId` 不同的牌子，比在注释里写「别混」有效。自定义 type guard 用来在边界上把 `unknown` 收成你真正信任的形状。

约束写进类型，文档只负责讲为什么，不负责重复规则本身。
