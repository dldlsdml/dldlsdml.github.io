---
date: 2026-06-03
title: "[Project] Perp Trap - GAMES2100 Board Game Project"
category: [GameDev]
tags: ["BoardGame", "Tabletop", "NarrativeDesign", "SocialImpact"]
---

## Project Overview / 프로젝트 개요
- **Course & Scope / 과목 및 범위**
  * GAMES2100 수업의 일환으로 진행된 프로젝트로, 사회적 메시지와 전략적 요소를 결합한 플레이 가능한 테이블탑 보드게임 프로토타입을 개발했습니다.
  * Developed as part of the GAMES2100 course, focusing on designing and delivering a fully playable tabletop board game prototype combining social commentary and strategic mechanics.

- **Genre & Platform / 장르 및 플랫폼**
  * 협력 및 경쟁형 소셜 데덕션 / 테이블탑 보드게임 (Physical Board Game)
  * Social Deduction / Tabletop Board Game

- **Team Size & Environment / 개발 인원 및 환경**
  * 팀원-알렉시아(Alexia)와 본인-서윤(Seoyun)의 팀 프로젝트로 진행되었으며, 비주얼 탐색 요소와 규칙 시스템을 설계했습니다.
  * Team project featuring Alexia and Seoyun, utilizing visual asset organization and iterative rules design.

- **Concept & Story / 게임 소개**
  * Alexia의 영감, '월리를 찾아라'와 본인의 영감, '스무고개'를 참고하였으며, 플레이어들이 범인을 찾기 위해 경찰(Cop)과 지시자(Dispatcher) 역할을 맡아 수사하는 독창적인 보드게임입니다. 
  * A unique board game inspired by *Where's Waldo?* and *Twenty Questions*, where players take roles as Cops and a Dispatcher to investigate and apprehend culprits in a crowded scene while navigating hidden corruption mechanics.

---

## 1. Core Variables & Mechanics / 핵심 변수 및 시스템
- **Asymmetric Roles / 비대칭 역할 분담**
  * 범인의 정답을 알고 있는 **Dispatcher(지시자)**와 예/아니오 질문을 통해 용의자를 좁혀나가는 **Cops(경찰)** 간의 비대칭적 정보 구조를 활용합니다.
  * The game features distinct roles: a Dispatcher who knows the exact identity of the culprit, and Cops who ask yes/no questions to identify and arrest them.

- **Mission System & Corruption / 미션 카드 및 부패 시스템**
  * 단순한 범인 검거를 넘어, 플레이어들이 개인적인 미션을 달성하고 서로를 고발하는 부패(Corruption) 메커니즘을 통해 심리적 긴장감과 전략적 선택을 유도합니다.
  * Mission Cards and the corruption accusation system create pressure, encouraging risk-taking and self-interest over strictly following the law.

---

## 2. Story Structure & Passage Flow / 스토리 구조 및 플레이 흐름
- **Gameplay Loop / 기본 게임 플레이 루프**
  * 게임의 라운드 진행 및 수사 프로세스의 전체적인 구조는 다음과 같습니다.
  * Below is the structural flow of the round structure and core loop:
  1. **`Dispatcher Phase`** → Dispatcher draws a culprit card and holds a starting pool of 10 coins.
  2. **`Investigation Phase`** → Cops ask yes/no questions referencing the visual features appendix. Each question reduces the Dispatcher's potential coins.
  3. **`Arrest & Scoring`** → Cops attempt an arrest; correct guesses earn points, while incorrect guesses trigger a penalty die.
  4. **`Corruption & Mission Scoring`** → Players wager points to accuse peers of fulfilling secret missions rather than catching the real culprit.
  5. **`Round Rotation`** → The tiered play space rings rotate, roles shift clockwise, and the cycle continues until a player reaches 30 points.

---

## 3. Key Design Takeaways / 개발 리뷰
- **Mechanics Reflecting Real-World Issues / 현실 사회 문제를 반영한 메커니즘**
  * 경찰 조직의 구조적 문제와 도덕적 해이를 게임 메커니즘(처벌의 완화, 미션을 통한 이득)에 녹여내어, 플레이어가 맹목적인 법 복종과 부패의 유혹을 직접 체감하도록 설계했습니다.
  * Designing systems that mirror real-world policing issues, allowing players to experience the fallibility of the system and the temptation of corruption through gameplay incentives.

- **Mitigating Ambiguity & Enhancing Tension / 모호성 제거 및 긴장감 유지**
  * 플레이테스트 피드백을 반영해 색상 팔레트와 외형 식별 부록(Appendix)을 제작하여 시각적 주관성을 줄이고, 미션 카드와 회전식 보드를 도입해 반복적인 단조로움을 해결했습니다.
  * Resolving visual ambiguity through standardized color palettes and feature appendices, while introducing rotating tiered boards and mission cards to sustain tension and replayability.

---

## Links / 관련 링크
- **Game Design Document / GDD 문서 자료**
  * [Perp Trap Game Design Document (PDF)](/GameBuild3_PerpTrap.pdf)
