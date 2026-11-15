---
date: 2026-06-11
title: "[Project] The Fate of Juliet - Love or Death (Twine Interactive Gamebook)"
category: [GameDev]
tags: ["Twine", "InteractiveFiction", "NarrativeDesign"]
---
## Project Overview / 프로젝트 개요
- **Course & Scope / 과목 및 범위**
  * GAMES3020 수업의 일환으로 진행된 프로젝트로, 학업 요구사항을 충족하는 플레이 가능한 인터랙티브 게임북 프로토타입을 개발했습니다.
  * Developed as part of the GAMES3020 course, focusing on designing and delivering a fully playable interactive gamebook prototype meeting academic requirements.

- **Genre & Platform / 장르 및 플랫폼**
  * 인터랙티브 픽션 / 웹 브라우저 및 Itch.io 플랫폼에서 플레이 가능합니다.
  * Interactive Fiction / Web Browser (Twine Engine / Itch.io)

- **Team Size & Environment / 개발 인원 및 환경**
  * 1인 개발 프로젝트로 진행되었으며, Twine 엔진과 마크다운 기반의 내러티브 구조 설계를 활용했습니다.
  * Solo Development / Built using Twine engine with custom CSS styling and variable-driven narrative state management.

- **Concept & Story / 게임 소개**
  * 기존의 비극적인 원작 소설(Romeo and Juliet)의 흐름에서 벗어나, 플레이어가 직접 줄리엣(Juliet)이 되어 선택을 내리고 성향과 운명을 개척해 나가는 인터랙티브 게임북 프로젝트입니다.
  * An interactive adaptation of *Romeo and Juliet* where the player controls Juliet, steering her personality and fate through key choices rather than following a rigid, linear tragedy.

---

## 1. Core Variables & Mechanics / 핵심 변수 및 시스템
- **State Management / 상태 관리**
  * 플레이어의 선택에 따라 변화하는 **`$Love`** 와 **`$Responsibility`** 두 가지 핵심 변수를 추적하여 내러티브의 흐름과 분기를 제어합니다.
  * The story tracks two variables, **`$Love`** and **`$Responsibility`**, which shift depending on player choices and dynamically alter subsequent dialogue, narrative framing, and available pathways.

- **Dynamic Branching / 동적 분기**
  * 수치 변화에 따라 이어지는 대사, 내러티브 묘사, 그리고 도달 가능한 엔딩이 유기적으로 달라지도록 설계되었습니다.
  * Choices continuously shift these meters, unlocking different narrative framing, dialogue options, and ultimate endings.
<img width="718" height="627" alt="스크린샷 2026-11-15 194935" src="https://github.com/user-attachments/assets/53ee4d96-7dfe-4269-9b20-2a003f431110" />
<img width="718" height="627" alt="image" src="https://github.com/user-attachments/assets/bc806069-61c1-4061-ad31-6d3b09e8083a" />

---

## 2. Story Structure & Passage Flow / 스토리 구조 및 흐름
- **Passage Architecture / 내용 구조**
  * 컴파일된 트바인(Twine) 스토리 노드의 전체적인 구조적 흐름은 다음과 같습니다.
  * Below is the structural flow of the compiled Twine story nodes:
  1. **`GameStartPage`** $\rightarrow$ Initializes `$Love` and `$Responsibility` to `0`, leading to **`ParisInteraction`**.
  2. **`ParisInteraction`** $\rightarrow$ Capulet ball introduction with Count Paris. Choices lead to **`CapuletBall`**.
  3. **`CapuletBall`** $\rightarrow$ Nobles discussing alliances. Player chooses to remain inside (**`PartyResponsibility`**) or escape to the garden (**`Garden`**).
  4. **`MeetingRomeo` & `Discovery`** $\rightarrow$ Meeting the masked stranger in the garden, followed by the Nurse revealing Romeo is a Montague. Player decides whether to pursue a secret relationship (**`BalconyScene`**).
  5. **`FriarLawrence` & Conflict Management** $\rightarrow$ Discussing whether love can overcome the feud, leading to the crucial decision on how to handle Tybalt's violence (**`RomeoWarning`**, **`StreetFight`**, or **`ConfrontTybalt`**).
  6. **`Banishment` & `ParisProposal`** $\rightarrow$ Following Tybalt's death and Romeo's banishment, Lady Capulet and Count Paris introduce severe family pressure for an expedited marriage.
  7. **`FinalDecision` (Climax & Endings):**
     * **`EscapeEnding`:** Rejecting Friar Lawrence's potion plan and escaping Verona with Romeo for a free, independent future (*"Love wins all"*).
     * **`Tragedy` (Original Ending):** Following the traditional plot where both lovers perish in the tomb due to miscommunication and family hatred.
     * **`JulietOnlySurvived`:** Juliet wakes up, finds Romeo dead, and confesses the truth to reconcile the feuding families (*"Peace at the cost of love"*).

---

## 3. Key Design Takeaways / 개발 리뷰
- **Player Agency / 플레이어 주체성 확보**
  * 내러티브의 관점을 줄리엣으로 전환함으로써 플레이어가 개인적인 욕망과 사회적 의무 사이에서 능동적으로 갈등을 직접 경험할 수 있도록 설계했습니다.
  * Shifting the narrative perspective to Juliet allows players to actively weigh personal desire against social obligations.

- **Modular State Design / 모듈식 상태 관리**
  * `$Love` 및 `$Responsibility` 변수를 활용해 복잡한 상태 없이 멀티 엔딩 조건을 깔끔하게 제어했습니다.
  * Utilizing `$Love` and `$Responsibility` variables cleanly manages narrative states and controls multi-ending conditions.

---

## Links / 관련 링크
- **Itch.io Page / Itch.io 페이지**
  * [The Fate of Juliet on Itch.io](https://unaeng.itch.io/the-fate-of-juliet)
