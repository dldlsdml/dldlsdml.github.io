---
date: 2026-01-15
title: AppleCatch_Unity
description:
mermaid: true
mathjax: true
category: [GameDev]
tags: ["Unity","C#"]
---
### Game Development Study   
In this project, I developed a simple 3D game based on instruction of 'Unity Textbook, Revised 8th Edition'(유니티 교과서, 개정 8판)   
   
### Game Scene 
<img src="https://github.com/user-attachments/assets/dbbefd59-2268-4dcb-bbd3-85929df4dbbb" width="260" height="300"/>   
<img src="https://github.com/user-attachments/assets/fa62f3f9-78a3-4541-9a73-aef1d17c689d" width="260" height="300"/>   
<img src="https://github.com/user-attachments/assets/f61f441e-dfd4-4b6c-94f3-58b8fcdfa2ba" width="260" height="300"/>   
   
### Comment   
#### Game State Management   
Used boolean variable(isPlaying) to control the game state   
* ```StartGame()``` --> starts the game   
* ```Update()``` --> runs only when '```isPlaying```' is TRUE   
* ```EndGame()``` --> stops the game   
   
#### Object Spawning   
Used ```Instantiate()``` to spawn elements(bombs&apples) randomly   
* ```int dice = Random.Range(1,11)```    
  - ```Random.range()``` randomly output numbers in designated data range   
* spawn interval ```(span)```   
* falling speed ```(speed)```   
* bomb ratio ```(ratio)```   
   
#### Collision Handling   
void OnTriggerEnter(Collider other)   
* Used tags to distinguish assets   
* Applied score logic - increase/decrease   
   
#### UI   
Used boolean function to control UI - Panel.SetActive(true/false)
* StartPanel   
* ResultPanel   
* GamePanel   

Linked UI buttons to functions   
* StartButton --> ```StartGame()```   
* ResetButton --> ```RestartGame()```   
   
#### Issues   
* Buttons not working --> incorrect OnClick setup   
* Score always showing 0 --> wrong object reference/name mismatch   
* Initialization of the game-loop not working --> wrong function connecting setup   
   
#### Summary   
- Used given assets: apple, bomb, basket and board   
- Asset scripts   
- Identifying collision mechanism   
- Sorting items by TAG   
- Generator & Director script   
- Level Design   
