const R={B:'On/Off-Field',N:'On-Field',F:'Off-Field'};
const U=[
["Welt",1,"B","Trailblaze Silver Rail","AoE ATK"],["Topaz & Numby",1,"B","Astropolis Merchant Guild","Follow-Up ATK"],["Jing Yuan",1,"B","High-Cloud Quintet","Summon"],["Guinaifen",1,"B","Xianzhou Fleet","DoT"],["Lingsha",1,"B","Xianzhou Fleet","AoE ATK","Heal"],["March 7th Hunt",1,"F","Trailblaze Silver Rail","Follow-Up ATK"],["Fugue",1,"B","Galactic Voyager","Break"],["Black Swan",1,"F","Intertwined Dreamscapes","DoT"],["Boothill",1,"N","Galactic Voyager","Break"],["Anaxa",1,"N","Beast Garden","Combo"],["Cerydra",1,"F","Little Giant","Combo"],["Evernight",1,"B","Beast Garden","Intertwined Dreamscapes","Summon"],["Sparxie",1,"B","Phantasmoon Games","Girls Band","Elation"],["Pearl",1,"F","Phantasmoon Games","Astropolis Merchant Guild","Protection"],
["Natasha",2,"F","Galactic Voyager","DoT","Heal"],["Bailu",2,"F","High-Cloud Quintet","Combo","Heal"],["Yunli",2,"B","Xianzhou Fleet","Counter"],["Sparkle",2,"N","Little Giant","Intertwined Dreamscapes","Elation"],["Robin",2,"N","Girls Band","Follow-Up ATK"],["Firefly",2,"N","Stellaron Hunters","Break"],["Sunday",2,"B","Phantasmoon Games","Trailblaze Silver Rail","Combo"],["The Herta",2,"N","Galactic Voyager","AoE ATK"],["Mydei",2,"B","Beast Garden","The Grand Restaurant","Counter"],["Hysilens",2,"B","Beast Garden","DoT"],["Evanescia",2,"B","Phantasmoon Games","Energy"],["Robin • Summeretto",2,"B","Astropolis Merchant Guild","Summon","Energy"],
["Luocha",3,"B","Galactic Voyager","Heal"],["Fu Xuan",3,"F","Little Giant","Counter","Protection"],["Jingliu",3,"B","High-Cloud Quintet","Combo"],["Jiaoqiu",3,"N","Xianzhou Fleet","DoT"],["Feixiao",3,"N","Xianzhou Fleet","Follow-Up ATK"],["Rappa",3,"F","Girls Band","Break"],["The Dahlia",3,"B","Intertwined Dreamscapes","Break"],["Cipher",3,"F","Beast Garden","AoE ATK"],["Castorice",3,"B","The Grand Restaurant","Summon"],["Yao Guang",3,"F","Astropolis Merchant Guild","Elation"],["Silver Wolf LV.999",3,"N","Phantasmoon Games","Stellaron Hunters","Elation"],["Aeon ★ Aha",3,"N","Elation","Master of Phantasia"],["Trailblazer: Elation",3,"B","Trailblaze Silver Rail","Stellaron Hunters","Energy"],
["Serval",4,"N","Girls Band","DoT"],["Blade",4,"B","High-Cloud Quintet","Counter"],["Hanya",4,"F","Xianzhou Fleet","Combo"],["Huohuo",4,"F","Little Giant","Energy","Heal"],["Aventurine",4,"B","Galactic Voyager","Follow-Up ATK","Protection"],["Acheron",4,"N","Intertwined Dreamscapes","AoE ATK"],["Tribbie",4,"B","Little Giant","Follow-Up ATK"],["Hyacine",4,"B","Beast Garden","Summon","Heal"],["Cyrene",4,"N","The Grand Restaurant","Summon"],["Mortenax Blade",4,"B","Phantasmoon Games","Stellaron Hunters","AoE ATK"],["Himeko • Nova",4,"N","Trailblaze Silver Rail","Energy"],["Aventurine • Waveflair",4,"N","Astropolis Merchant Guild","Elation"],
["Kafka",5,"N","Stellaron Hunters","DoT"],["Clara",5,"B","Galactic Voyager","Counter","Ingenious Artificer"],["Dan Heng • Imbibitor Lunae",5,"N","Trailblaze Silver Rail","High-Cloud Quintet","Twin Dragons' Call"],["Xueyi",5,"N","Xianzhou Fleet","Break"],["Jade",5,"F","Astropolis Merchant Guild","AoE ATK","Black Market Manager"],["Aglaea",5,"N","Beast Garden","Combo"],["Phainon",5,"B","The Grand Restaurant","Flame Reaver"],["Dan Heng • Permansor Terrae",5,"F","Twin Dragons' Call"],["Ashveil",5,"F","Phantasmoon Games","Follow-Up ATK","Galaxy Ranger"]
].map(a=>({name:a[0],cost:a[1],role:a[2],traits:a.slice(3)})).sort((a,b)=>a.name.localeCompare(b.name));
const UB=Object.fromEntries(U.map(u=>[u.name,u]));

// From Traits.txt. k: F faction, C class, S unique. d: description. t: [count, effect]. x: additional effects. exact: only these exact counts activate.
const T={"Xianzhou Fleet": {"k": "F","d": "Before combat begins, some basic equipment of \"Xianzhou Fleet\" members temporarily becomes random advanced equipment! \"Xianzhou Fleet\" members' DMG Amplification increases.","t": [[2,"Converts 1 piece(s) of basic equipment into recommended equipment. Each piece of equipment provides 3% DMG Amplification."],[4,"Converts 2 piece(s). Each piece of equipment provides 5% DMG Amplification. When entering combat, summons a \"Starskiff\" to attack enemies. When allies carry more equipment, each piece increases the \"Starskiff's\" SPD by 10."],[6,"Converts all basic equipment. Each piece of equipment provides 7% DMG Amplification."],[9,"All basic equipment will become privileged equipment! Each piece of equipment provides 10% DMG Amplification."]],"x": ["Advanced equipment/privileged equipment counts as 2/4 pieces of basic equipment.","\"Starskiff\": Takes action with 150 SPD, dealing Fire DMG equal to 400% of base DMG to all enemy targets, plus additional True DMG equal to 50% of the cumulative total DMG of \"Xianzhou Fleet\" members, distributed among all enemies. Clears the cumulative value after the attack."]},"Beast Garden": {"k": "F","d": "Gains 1 point of \"Chimera Energy\" per Node, used to recruit chimeras into the \"Beast Garden.\" The chimeras provide various buffs, and two character exclusive chimeras can even be combined to increase their star level! \"Beast Garden\" characters gain On-/Off-Field Strength.","t": [[3,"30% On/Off-Field Strength. For every 4 point(s) of \"Chimera Energy,\" a chimera can be recruited."],[5,"60% On/Off-Field Strength. For every 3 point(s) of \"Chimera Energy,\" you can recruit more types of chimeras and refresh 1 time(s)."],[7,"120% On/Off-Field Strength. For every 2 point(s) of \"Chimera Energy,\" a chimera can be recruited. Every star of the chimeras' star rating additionally increases the multiplier by 200% and SPD by 40."],[10,"300% On/Off-Field Strength. All Chimeras Assemble!"]],"x": ["\"Chimera Squad\": Chimeras take action and attack enemies. DMG dealt and SPD increase with the chimeras' total star rating.","Activating 3/5/7/10 Bonds for the first time grants 1 free recruitment! Upon entering a new Node, if there is enough \"Chimera Energy\", consumes Energy to recruit a chimera."]},"Phantasmoon Games": {"k": "F","d": "At the start of each game, \"Phantasmoon Games\" will bring you different game rules.","t": [[3,"Improves the efficiency of gaining Wishpower / Experience / Roll-Call under this game's rule."],[5,"Improves the efficiency of gaining Wishpower / Experience / Roll-Call under this game's rule."],[7,"Improves the efficiency of gaining Wishpower / Experience / Roll-Call under this game's rule."],[10,"Improves the efficiency of gaining Wishpower / Experience / Roll-Call under this game's rule."]],"x": ["Phantasmoon Games: Wishpower: At the start of each game, \"Phantasmoon Games\" will display different game rules. Rule for this game: \"Wishpower\". After each Combat phase, accumulate \"Wishpower\", obtaining 2 times the amount upon a Perfect Win. Accumulate enough \"Wishpower\" to obtain crystal ore rewards. The On-Field/Off-Field Strength of \"Phantasmoon Games\" team members increases.","Phantasmoon Games: Experience: At the start of each game, \"Phantasmoon Games\" will display different game rules. Rules for this game: \"Experience\". Gain Experience upon entering a new Node. \"Phantasmoon Games\" team members' On-Field/Off-Field Strength increase, with an additional increase for each Store level.","Phantasmoon Games: Roll-Call: At the start of each round, \"Phantasmoon Games\" will display different game rules. Current game rule: \"Roll-Call\". Your characters perform \"Roll-Call\" and gain a stat bonus."]},"Galactic Voyager": {"k": "F","d": "\"Galactic Voyager\" characters boost specific stats for your squad. This effect increases with more \"Galactic Voyager\" characters on the field. \"Galactic Voyager\" team members receive double the stat boost.","t": [[1,"100% bonus."],[2,"120% bonus."],[3,"140% bonus."],[4,"170% bonus."],[5,"200% bonus."],[6,"240% bonus."],[7,"290% bonus."],[8,"350% bonus."]],"x": ["The following are the base values of the effect given to all allies on the battlefield:","\"Fugue\": Increases Off-Field Strength by 20%.","\"Boothill\": Increases Weakness Break Efficiency by 20%.","\"Natasha\": Increases DMG Mitigation by 10%.","\"The Herta\": Increases On-Field Strength by 20%.","\"Luocha\": Increases SPD Amplification by 10%.","\"Aventurine\": Increases Lucky Strike Rate by 10%.","\"Clara\": Increases DMG Amplification by 10%.","\"Emblem\": Increases Lucky Strike DMG by 18%."]},"Trailblaze Silver Rail": {"k": "F","d": "After each combat phase, accumulate \"Trailblaze Power\" to purchase characters and items in the \"Trailblaze Store.\" As your Bond level increases, the \"Trailblaze Store\" will unlock even rarer goods!","t": [[2,"20 \"Trailblaze Power.\" Astral Express, all aboard!"],[4,"45 \"Trailblaze Power.\" Goods become better."],[6,"75 \"Trailblaze Power.\" Goods become better, and Bond-exclusive Components appear."],[8,"125 \"Trailblaze Power.\""],[10,"225 \"Trailblaze Power\"! Express evolution!"]],"x": ["\"Trailblaze Store\": Consumes \"Trailblaze Power\" to purchase \"Trailblaze Silver Rail\" characters, stat bonuses, Consumables, and Bond-exclusive Components from the store, and enhance your Express!"]},"Astropolis Merchant Guild": {"k": "F","d": "Each 3-star \"Astropolis Merchant Guild\" character deployed activates 1 level of the Bond effect. Each \"Astropolis Merchant Guild\" character provides members in the Bond with 2% Lucky Strike Rate and Lucky Strike DMG. This bonus increases with their star rating. The appearance rate of \"Astropolis Merchant Guild\" characters does not decrease as the Store level increases.","t": [],"x": ["1/2/3/4-star \"Astropolis Merchant Guild\" members provide 1/2/4/8x the base Lucky Strike Rate and Lucky Strike DMG.","For example, a 3* version of an Astropolis Merchant Guild unit will give 8% Lucky Strike Rate and Lucky Strike DMG."]},"High-Cloud Quintet": {"k": "F","d": "Increases the DMG Amplification of \"High-Cloud Quintet\" members by 20%, and summons \"Quintet Joint\" with 200 SPD on the action bar. When taking action, attacks all enemies, and increases the ally squad's DMG Amplification after attacking. This effect is stackable. After a \"High-Cloud Quintet\" member takes action, advances \"Quintet Joint's\" action by 5%.","t": [[2,"\"Quintet Joint\" deals DMG corresponding to the \"High-Cloud Quintet\" member's Type equal to 300% of base DMG, and grants the ally squad 10% DMG Amplification. This effect is stackable."],[3,"SPD increases to 250, multiplier increases to 600% and 20% DMG Amplification."],[4,"SPD increases to 300, multiplier increases to 900% and 40% DMG Amplification."],[5,"The Quintet convenes! \"High-Cloud Quintet\" members gain 120% On-/Off-Field Strength, 70% DMG Amplification, 50% SPD Amplification, and 50% Lucky Strike Rate. SPD increases to 400, multiplier increases to 1800% and 60% DMG Amplification."]],"x": []},"Stellaron Hunters": {"k": "F","d": "Elio reveals 3 random pieces of advanced equipment as this match's Script Equipment for the \"Stellaron Hunters,\" then unlocks and distributes them according to Bond level. Different Script Equipment types will provide the both the wearer and their allies with DMG Amplification. This effect is doubled when equipped by a \"Stellaron Hunter.\"","t": [[2,"Unlocks and grants 1 piece(s) of equipment. Script Equipment provides the wearer/ally squad 20%/8% DMG Amplification."],[3,"Unlocks and grants 2 piece(s) of equipment."],[5,"Unlocks and grants 3 piece(s) of equipment. Script Equipment provides 30%/12% DMG Amplification."],[7,"All equipment provided by Bonds becomes privileged equipment, and Script Equipment provides 60%/24% DMG Amplification."]],"x": ["\"Script Equipment\": All equipment sharing the same name as the revealed equipment is considered Script Equipment and provides corresponding bonuses. Go synthesize more Script Equipment!"]},"Little Giant": {"k": "F","d": "DMG taken by enemy targets increases, and DMG dealt by them decreases. \"Little Giant\" can continuously increase \"Height\" based on the number of Bond stacks to enhance ability effects!","t": [[2,"Gains 1 \"Height\". DMG taken by the enemy increases by 12%, and DMG dealt decreases by 6%."],[3,"Gains 2 Height. DMG taken by the enemy increases by 24%, and DMG dealt decreases by 12%."],[4,"Gains 3 Height. DMG taken by the enemy increases by 36%, and DMG dealt decreases by 18%."],[5,"Gains 4 Height. DMG taken by the enemy increases by 48%, and DMG dealt decreases by 24%."],[6,"Gains 6 Height. DMG taken by the enemy increases by 60%, and DMG dealt decreases by 30%."]],"x": ["\"Height\": Each point of \"Height\" enhances \"Little Giant\" characters' abilities."]},"Intertwined Dreamscapes": {"k": "F","d": "Select 2 \"Intertwined Dreamscapes\" characters. After they take action 12 times in total, \"Dance of Two\" is triggered, and they launch a simultaneous attack.","t": [[2,"Triggers \"Dance of Two\" after taking action a total of 12 time(s)."],[3,"In combat, dancers grant each other 40% On-/Off-Field Strength and 20% SPD Amplification, using the higher value for On-/Off-Field Strength."],[4,"Increases the effect of \"Dance of Two.\" 80% On-/Off-Field Strength and 40% SPD Amplification conversion."],[5,"Increases the effect of \"Dance of Two.\" 120% On-/Off-Field Strength and 60% SPD Amplification conversion."]],"x": ["\"Dance of Two\": Both parties attack together and provide unique effects. 6 actions have already been taken into account initially.","\"Black Swan\": Uses a Follow-Up ATK, increasing DMG taken by all enemies by 20%, lasting for 2 turn(s).","\"Evernight\": Obtains 16 point(s) of \"Memoria\" and uses Memosprite Skill. Increases the ally squad's HP Amplification by 10% and Healing Strength by 10%, lasting for 2 turn(s).","\"Sparkle\": Uses Skill and increases the DMG dealt by the target by 40%, lasting for 2 turn(s).","\"The Dahlia\": Increases the \"Dance of Two\" effect of dancers by 100%, and uses a Follow-Up ATK.","\"Acheron\": Uses Ultimate, dealing DMG equal to 120% of the original DMG.","\"Emblem\": Gains an extra turn and automatically takes action, gaining 20% On/Off-Field Strength and 10 SPD."]},"Girls Band": {"k": "F","d": "\"Girls Band\" solo or group performance: Activates Bond only when there are exactly 1 or 4 \"Girls Band\" characters on the field. Every \"Girls Band\" member can provide unique effects to the ally squad.","t": [[1,"Solo, gaining this member's effect."],[4,"Full ensemble! All members provide triple effects!"]],"x": ["\"Sparxie\": 10% SPD Amplification. 2/3/4-star teammates gain a 2/4/8x bonus.","\"Robin\": 6% + Max Team Size × 3% DMG Amplification.","\"Rappa\": 15% On-Field/Off-Field Strength. Each piece of equipment carried by the ally squad provides an additional 3%.","\"Serval\": When this unit is 1/2/3-star, grants the ally squad 12%/24%/40% Lucky Strike Rate, and DoT dealt by the ally squad has a 12%/20%/40% fixed chance to trigger Lucky Strike."],"exact": true},"The Grand Restaurant": {"k": "F","d": "In every match, based on today's menu, obtain Signature Dish Components that can only be equipped by \"The Grand Restaurant\" characters. The total star rating of \"The Grand Restaurant\" characters counts as the \"Restaurant Star Rating.\" The effects of Meal Components are enhanced as the \"Restaurant Star Rating\" increases.","t": [[2,"Obtains the first Meal Component."],[3,"Obtains the second Meal Component."],[4,"Meal Components activate extra bonuses, becoming even tastier!"]],"x": []},"Follow-Up ATK": {"k": "C","d": "After an enemy target takes DMG, \"KO Value\" can be accumulated to trigger Execute. \"Follow-Up ATK\" allies' On-/Off-Field Strength increases, and after attacking, they additionally accumulate \"KO Value\" equal to 100% of base DMG.","t": [[3,"20% On/Off-Field Strength. 20% of the DMG taken by enemy targets accumulates as \"KO Value.\""],[5,"50% On/Off-Field Strength. Increases the accumulation ratio to 30%."],[7,"80% On/Off-Field Strength. Increases the accumulation ratio to 50%. When triggering \"KO,\" deals Quantum Additional DMG equal to 800% of base DMG to adjacent targets."],[10,"160% On/Off-Field Strength. The accumulated ratio increases to 100%, and the Additional DMG multiplier greatly increases. When triggering \"KO,\" additionally deals Quantum DMG equal to 3000% of base DMG to all enemy targets."]],"x": ["\"KO Value\": After an enemy is attacked, a set percentage of non-True DMG taken are accumulated as \"KO Value.\" If the accumulated value equals their current HP or more, they will be instantly Executed, taking fixed DMG equal to their current HP."]},"DoT": {"k": "C","d": "\"DoT\" members' DoT DMG Amplification increases, and summons \"Crimson Thorns\" to attack all enemy targets, inflicting Random DoT and triggering the finalization of DoT effects on enemy targets. When an ally's action inflicts DoT on an enemy target, the finalization multiplier for \"Crimson Thorns\" increases by 10%, and its action advances by 3%.","t": [[3,"15% DoT DMG Amplification."],[5,"30% DoT DMG Amplification. Increases the action SPD of \"Crimson Thorns\" to 300."],[7,"60% DoT DMG Amplification. When \"Crimson Thorns\" takes action, additionally causes the DoT applied to enemies to deal 1 instance(s) of DMG."],[9,"100% DoT DMG Amplification. Increases the action SPD of \"Crimson Thorns\" to 450, its base DMG multiplier to 1200%, and its calculation multiplier to 300%."]],"x": ["\"Crimson Thorns\": Takes action with 150 SPD. When taking action, attacks all enemies, dealing Wind DMG equal to 200% of base DMG, and has a 120% base chance to inflict a Random DoT, causing the DoT currently inflicted on the targets to immediately produce DMG equal to 150% of the original DMG. When an ally's action inflicts DoT on an enemy, the DMG multiplier of \"Crimson Thorns\" increases by 10%, and its action advances by 3%."]},"AoE ATK": {"k": "C","d": "Increases the DMG Amplification of \"AoE ATK\" members. In combat, creates a \"Soul\" of an enemy unit that can transfer DMG for the enemy target with the highest Max HP.","t": [[2,"10% DMG Amplification. The DMG Transfer efficiency of \"Soul\" is 15%."],[4,"25% DMG Amplification. 20% DMG Transfer efficiency."],[6,"50% DMG Amplification. Increases the DMG Transfer efficiency to 25%. After being attacked, records 35% of the non-True DMG received. For every 1 target hit, the recorded percentage increases by 100%. A \"Soul\" with 300 SPD appears on the Action Order. When the main body of \"Soul\" is defeated or when \"Soul\" takes action, deals True DMG equal to the recorded value, distributed among all enemies. The recorded value is cleared after taking action."],[8,"100% DMG Amplification. 30% DMG Transfer efficiency, and the recorded percentage increases to 50%."]],"x": ["\"Soul\": After being attacked, deals True DMG to the main body equal to a certain percentage of the non-True DMG received. \"Soul\" is immune to Crowd Control debuffs. When the main body of the \"Soul\" is defeated, the \"Soul\" of the enemy target with the highest current Max HP is re-created."]},"Combo": {"k": "C","d": "\"Combo\" members' Lucky Strike Rate increases. Generates a \"Combo Tile\" on the field, which provides Basic ATK/Skill DMG Amplification and \"Combo Rate.\"","t": [[2,"15% Lucky Strike Rate. 8% \"Combo Rate.\""],[4,"30% Lucky Strike Rate. 16% Combo Rate and additionally generates a \"Combo Tile\" in the off-field. During the extra turn gained from consuming Combo Rate, an attack by the character on the \"Combo Tile\" deals True DMG equal to 30% of the original DMG. After taking their first action, they consume Combo Rate and gain an extra turn."],[6,"45% Lucky Strike Rate. 24% Combo Rate, and True DMG dealt during a Combo increases to 60%."],[8,"60% Lucky Strike Rate. 32% Combo Rate, and True DMG dealt during a Combo increases to 90%."]],"x": ["\"Combo Tile\": When entering combat, the character on this tile gains a 15% Basic ATK/Skill DMG Amplification, and \"Combo\" characters gain double. When the character on this tile uses a Basic ATK or Skill, they gain \"Combo Rate.\"","\"Combo Rate\": After using a Basic ATK or Skill, every 1% of \"Combo Rate\" grants a 1% chance to gain an extra turn, and consumes the current \"Combo Rate\" to its Base Value. The default base \"Combo Rate\" is 0.","Base Combo Rates for Combo units are different for each Combo unit."]},"Break": {"k": "C","d": "Increases the Break DMG Amplification and SPD Amplification of \"Break\" members. All enemy targets gain the \"Multi-Toughness Bar\": After their initial Toughness is reduced to 0, it can be further reduced. When reduced to 0, they take Weakness Break DMG again. When an enemy target takes Weakness Break DMG, they additionally take Break DMG of a random Weakness Type they have once.","t": [[2,"20% Break DMG Amplification and 10% SPD Amplification. \"Multi-Toughness Bar\" is 60% of the initial value. After each Break, the percentage increases by 24%, up to a maximum of 480% of the initial value."],[4,"40% Break DMG Amplification and 20% SPD Amplification. 52% of \"Multi-Toughness Bar.\" After Breaking it, the percentage increases by 20%, up to 400% of the initial value."],[6,"60% Break DMG Amplification and 30% SPD Amplification. 44% of \"Multi-Toughness Bar.\" After Breaking it, the percentage increases by 16%, up to 320% of the initial value."],[8,"100% Break DMG Amplification and 50% SPD Amplification. 36% of \"Multi-Toughness Bar.\" After Breaking it, the percentage increases by 12%, up to 240% of the initial value."]],"x": ["\"Multi-Toughness Bar\": Enemy targets additionally gain a \"Multi-Toughness Bar\" equal to a certain percentage of their Max Toughness. When reduced to 0, they take Weakness Break DMG again. A single attack can Break multiple bars. The \"Multi-Toughness Bar\" has a low initial percentage, which increases after each Break, but will not exceed the original Max Toughness."]},"Summon": {"k": "C","d": "Increases the On-Field/Off-Field Strength of \"Summon\" members, and they gain 20% HP Amplification. Activates \"Summon\" exclusive Character Empowerment, and enhances its effect based on \"Summon Power.\"","t": [[2,"25% On-Field/Off-Field Strength. 1 point(s) of \"Summon Power.\""],[4,"50% On/Off-Field Strength. 2 point(s) of \"Summon Power.\""],[6,"100% On/Off-Field Strength. 3 point(s) of \"Summon Power.\""],[8,"200% On/Off-Field Strength. 4 point(s) of \"Summon Power.\""]],"x": ["\"Summon Power\": Every point of \"Summon Power\" enhances the \"Summon\" exclusive Character Empowerment."]},"Elation": {"k": "C","d": "Increases the Lucky Strike Rate and SPD Amplification of \"Elation\" members. During the preparation phase, summons \"Aha\" to provide buffs for the squad. \"Aha\" comes with base stats and is equipped with 3 random pieces of basic equipment. You can purchase \"Aha Equipment\" from the Store and drag it onto \"Aha\" to sequentially synthesize it corresponding advanced equipment with the basic equipment in \"Aha\"'s equipment slots. There is also a chance for \"Aha Items\" to appear in the Store! \"Aha\" will participate in Aha Instant and has a chance of dropping crystal ore rewards!","t": [[3,"8% Lucky Strike Rate and 8% SPD Amplification."],[4,"16% Lucky Strike Rate and 16% SPD Amplification. 2-Star Aha, 2 equipment slots, \"Aha Items\" appear."],[6,"24% Lucky Strike Rate and 24% SPD Amplification. 3-Star Aha, 3 equipment slots, and even more wonderful \"Aha Items.\""],[8,"32% Lucky Strike Rate and 32% SPD Amplification. 4-star Aha can actually equip 4 pieces of equipment!? There is a high chance of dropping Prismatic crystal ores."]],"x": []},"Counter": {"k": "C","d": "The on-field \"Counter\" character with the most equipment becomes the \"Counter King\": More likely to be attacked and deals \"Counter DMG.\" When entering combat, each off-field \"Counter\" character provides them with 30% DMG Amplification and 10% HP Amplification. \"Counter\" members can \"Provoke\" enemy targets.","t": [[2,"Counter DMG deals 400% Base Counter DMG to the attacker. \"Provoke\" increases DMG taken by the enemy by 20%."],[4,"Counter DMG multiplier of 800%. \"Provoke\" increases DMG taken by enemies by 40%."],[6,"Counter DMG multiplier of 1200%. \"Provoke\" increases DMG taken by enemies by 80%."]],"x": ["\"Provoke\": Gains 1/2 Charge after a \"Counter\" member/\"Counter King\" takes action. When fully charged at 15 points, the \"Counter King\"'s attack consumes Charge, causes the enemy target with the highest Max HP in this attack to immediately take action, and increases DMG taken by all enemies, lasting for 3 turn(s).","\"Counter DMG\": Deals Additional DMG of the corresponding Type based on Base Counter DMG. Base Counter DMG increases with Node progress. Counter DMG cannot defeat enemy targets."]},"Energy": {"k": "C","d": "The ally squad gains 10% DMG Amplification and accumulates Charge after using their Ultimate. After being fully charged to 5 points for the first time, \"Energy\" members immediately activate their Ultimate and gain additional DMG Amplification, lasting until the end of the battle.","t": [[2,"Activates the Ultimates of 2 \"Energy\" characters. \"Energy\" members gain 25% DMG Amplification."],[4,"Activates the Ultimates of all \"Energy\" characters, and \"Energy\" members gain 50% DMG Amplification."],[6,"Activates the Ultimates of all allies in the squad! \"Energy\" members gain 100% DMG Amplification."]],"x": []},"Heal": {"k": "C","d": "Increases the ally squad's DMG Mitigation by 12%. Increases the Healing Strength of \"Heal\" members.","t": [[2,"Healing Strength increases by 20%."],[4,"Healing Strength increases by 40%."],[6,"60% Healing Strength, ally squad gains 60% DMG Amplification."]],"x": []},"Protection": {"k": "C","d": "Increases the ally squad's Shield Strength. After a \"Defender\" member uses their Ultimate, restores HP for the on-field ally based on this unit's Max HP and DEF.","t": [[2,"20% Shield Strength. 50% of Max HP plus 100% of DEF."],[3,"40% Shield Strength. 90% of Max HP plus 160% of DEF."]],"x": ["The abilities of \"Defender\" members are affected by Shield strength. In combat, the healing strength of \"Defender\" members is always equal to Shield strength."]},"Twin Dragons' Call": {"k": "S","d": "\"Dan Heng • Imbibitor Lunae\" will summon a \"Dan Heng • Permansor Terrae\" of the same star rating in the off-field area and copy their equipment to obtain corresponding effects. The amount that can be equipped increases with star rating. After taking action, \"Dan Heng • Imbibitor Lunae\"/\"Dan Heng • Permansor Terrae\" Charges \"Twin Dragons' Call.\" When fully charged, they launch a combined attack against enemies and provide Shields to on-field allies.","t": [[1,"When entering combat, summons \"Dan Heng • Permansor Terrae\" to the off-field area."],[2,"At 1/2/3-star, 1/2/3 piece(s) of equipment can be equipped to \"Dan Heng • Permansor Terrae.\""]],"x": ["\"Twin Dragons' Call\": After \"Dan Heng • Imbibitor Lunae\"/\"Dan Heng • Permansor Terrae\"/\"Souldragon\" takes action, Charges \"Twin Dragons' Call\" by 2/1/1 point(s), up to a max of 12 points. When fully charged, consumes 12 points to deal Imaginary DMG equal to 1000% of base DMG and Physical DMG equal to 1000% of base DMG to all enemies, and provides on-field allies with a Shield equal to 30% of their Max HP."]},"Flame Reaver": {"k": "S","d": "You can continuously drag a character to Phainon to absorb Coreflame and convert it into \"Torchflame,\" providing buffs to this unit or the squad. A Chrysos Heir can additionally convert 30%. When \"Flame Reaver\" appears in combat, they can steal max challenge progress. When the progress reaches its limit, activates \"Apocalypse\" and wins the battle.","t": [[1,"During each preparation phase, 1 character can be continuously dragged to Phainon to be converted into Coreflame, permanently granting \"Torchflame\" points based on their value. Converting a Chrysos Heir yields an additional 30%."]],"x": ["\"Flame Reaver\": After transforming into Khaslana, summons a \"Flame Reaver\" with 200 SPD. When taking action, it attacks all enemies, dealing Physical DMG equal to 1000% of Khaslana's ATK, and reduces the Challenge progress limit by 3%, up to a maximum of 18%. When the Challenge Progress reaches its limit, activates \"Apocalypse\" and wins the combat. For every 1 point(s) of \"Torchflame,\" the Flame Reaver's SPD increases by 1%, and its DMG multiplier increases by 10%.","\"Torchflame\": While on-field, every 1 point(s) of \"Torchflame\" grants this unit 1.5% DMG Amplification and 1.5% SPD Amplification. While off-field, every 1 point(s) of \"Torchflame\" grants the squad 2% DMG Amplification."]},"Galaxy Ranger": {"k": "S","d": "When Ashveil is on the field, select 1 on-field character and designate them as \"Galaxy Ranger.\" The \"Galaxy Ranger\" character's star rating increases their DMG Amplification and SPD Amplification.","t": [[1,"Appoint 1 on-field character as \"Galaxy Ranger.\""],[2,"Each \"Galaxy Ranger\" provides 30% DMG Amplification and 30% SPD Amplification. 2/3/4-star characters provide 3/6/12 times the amount."]],"x": []},"Black Market Manager": {"k": "S","d": "As the manager of Currency Wars, Jade leverages her position to open a black market store for you to purchase various items. The black market store sells a signature item that can be purchased an unlimited number of times, alongside some rotating items that refresh with the Nodes.","t": [[1,"1/2/3-Star Jade will sell 1/2/3 types of normal items that refresh with the Node."]],"x": ["The universal market is ever-changing, and each game will feature different signature items!"]},"Ingenious Artificer": {"k": "S","d": "For every 2 new Node(s) entered, Clara can perform an enhanced modification on Svarog, providing a variety of powerful effects. Clara is handy and immediately performs the first enhanced modification upon entering the field. The first 3 modification(s) can be triggered by just entering 1 new Node.","t": [[1,"Clara provides Svarog with multiple modification modules. Having modification modules of any color increases the chance for modifications of the same color to appear. For every 1 modification possessed, Clara's DMG Amplification increases by 6%."]],"x": []},"Master of Phantasia": {"k": "S","d": "Aeon ★ Aha will continuously cast THEIR gaze, exerting influence on the Store. By obtaining Aeon ★ Aha, you can accumulate \"Phantasmoon Power\" to gradually increase THEIR cost and enhance THEIR abilities. Once THEY reach 5-Cost, you can also trigger THEIR Apotheosis to 7-Cost by increasing the total star rating of Elation or Phantasmoon Games members! After reaching 3 stars and 7-Cost, Currency Wars: Voyage Into the Canvas will welcome its true master.","t": [[1,"When viewing the Store, Aeon ★ Aha has a chance to influence characters and Elation items. Upon reaching 4-Cost, THEY will also provide additional Help. At 5-Cost, if the total star rating of Elation/Phantasmoon Games members reaches 10/12 stars, Aeon ★ Aha will undergo ascension to become 7-Cost, further enhancing the effects of the additional Help."]],"x": []}};
// Character art. Filename is the character ID; each one is either .png or .webp, so try png first, then webp.
const ID={"Welt":1004,"Topaz & Numby":1112,"Jing Yuan":1204,"Guinaifen":1210,"Lingsha":1222,"March 7th Hunt":1224,"Fugue":1225,"Black Swan":1307,"Boothill":1315,"Anaxa":1405,"Cerydra":1412,"Evernight":1413,"Sparxie":1501,"Pearl":1503,"Natasha":1105,"Bailu":1211,"Yunli":1221,"Sparkle":1306,"Robin":1309,"Firefly":1310,"Sunday":1313,"The Herta":1401,"Mydei":1404,"Hysilens":1410,"Evanescia":1505,"Robin • Summeretto":1512,"Luocha":1203,"Fu Xuan":1208,"Jingliu":1212,"Jiaoqiu":1218,"Feixiao":1220,"Rappa":1317,"The Dahlia":1321,"Cipher":1406,"Castorice":1407,"Yao Guang":1502,"Silver Wolf LV.999":1506,"Aeon ★ Aha":1511,"Trailblazer: Elation":8008,"Serval":1103,"Blade":1205,"Hanya":1215,"Huohuo":1217,"Aventurine":1304,"Acheron":1308,"Tribbie":1403,"Hyacine":1409,"Cyrene":1415,"Mortenax Blade":1507,"Himeko • Nova":1510,"Aventurine • Waveflair":1513,"Kafka":1005,"Clara":1107,"Dan Heng • Imbibitor Lunae":1213,"Xueyi":1214,"Jade":1314,"Aglaea":1402,"Phainon":1408,"Dan Heng • Permansor Terrae":1414,"Ashveil":1504};
const GH='https://raw.githubusercontent.com/Akaerya/currencywars47/refs/heads/main/';
// Board tiles use character_preview/ (376x512), unit list tiles use character/ (256x256).
// Copies published next to this page come first (the Artifact viewer blocks images from other sites); GitHub is used anywhere else.
const BASES=['',GH];
const ART={}; // "folder/id" -> url once found, false if neither file loads, 'wait' while checking
function findArt(key,exts=['png','webp']){
  if(ART[key]!==undefined)return;
  ART[key]='wait';
  const tries=BASES.flatMap(b=>exts.map(x=>b+key+'.'+x));
  const next=()=>{
    const url=tries.shift();
    if(!url){ART[key]=false;return}
    const im=new Image();
    im.onload=()=>{ART[key]=url;document.querySelectorAll(`[data-art="${key}"]`).forEach(el=>{el.classList.add('art');el.style.backgroundImage=`url("${url}")`})};
    im.onerror=next;
    im.src=url;
  };
  next();
}
const eqArt=it=>{const key='equipment/'+it.id;if(ART[key]===undefined)findArt(key,['webp','png']);const url=(typeof ART[key]==='string'&&ART[key]!=='wait')?ART[key]:'';return `data-art="${key}"${url?` style="background-image:url('${url}')"`:''}`};
const artOf=(dir,u)=>{const key=dir+'/'+ID[u.name];if(ART[key]===undefined)findArt(key);const url=(typeof ART[key]==='string'&&ART[key]!=='wait')?ART[key]:'';return{key,url}};
// Merchant Guild: intervals count 3★+ members, not units, and every reached interval stays active.
Object.assign(T['Astropolis Merchant Guild'],{stack:true,t:[[1, "Gain 1 EXP every time the shop refreshes."], [2, "Gain 1 free shop refresh when entering a new node."], [3, "When entering a new node, an Astropolis Merchant Guild unit appears in the shop."], [4, "Opens the Astropolis vault and choose a reward."], [5, "Obtains an Astropolis Privilege Card, every 15 shop refreshes grants 1 use of the item."], [6, "Units in the shop randomly becomes 2/3/4 stars, can be purchased at base cost."]]});
// Unit abilities from CW_unit_skill_list.txt. F = Frontline (on-field), B = Backline (off-field), keyed by star level. Aha is keyed by cost.
let SK=null; // filled from skills.json
fetch('skills.json').then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(j=>{SK=j;utip.dataset.for=''}).catch(()=>{SK=false;utip.dataset.for=''});
const KIND={F:'Faction',C:'Class',S:'Unique'};
// Equipment, filled from equipment.json. k = key saved on units, id = image ID, cat = basic / advanced / privileged / emblem.
let ITEMS=[],IB={},EQLOAD='wait';
const CATS=[['','All'],['basic','Basic'],['advanced','Advanced'],['privileged','Privileged'],['emblem','Emblems']];
const eqOf=n=>(S.eq[n]||[]).map(k=>IB[k]).filter(Boolean);
// Emblem wearers per trait: [{trait:[unit,...]}]. An Emblem never counts for a trait the unit already has.
function emblemMap(){const m={};S.board.forEach((n,i)=>{if(n&&usable(i))eqOf(n).forEach(it=>{if(it.cat==='emblem'&&!UB[n].traits.includes(it.trait))(m[it.trait]=m[it.trait]||[]).push(n)})});return m}
const slotsFor=u=>3; // natural equipment slots; raise per unit here later
// Galactic Voyager: base value each member gives the squad, before the bond multiplier
const GVB={"Fugue":["Off-Field Strength",20],"Boothill":["Weakness Break Efficiency",20],"Natasha":["DMG Mitigation",10],"The Herta":["On-Field Strength",20],"Luocha":["SPD Amplification",10],"Aventurine":["Lucky Strike Rate",10],"Clara":["DMG Amplification",10]};
const GVM=[1,1.2,1.4,1.7,2,2.4,2.9,3.5];
const TN=Object.keys(T);

const KEY='cw-team-v1';
let S={board:Array(13).fill(null),extra:0,aha:3,eq:{},gr:null,star:{}};
const AHA='Aeon ★ Aha',AHAC=[3,4,5,7];
const costOf=u=>u.name===AHA?S.aha:u.cost;
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&Array.isArray(s.board)&&s.board.length===13){S.board=s.board.map(n=>n==='March 7th'?'March 7th Hunt':n).map(n=>UB[n]?n:null);S.extra=Math.min(3,Math.max(0,s.extra|0));if(AHAC.includes(s.aha))S.aha=s.aha;if(s.eq)for(const k in s.eq)if(UB[k]&&Array.isArray(s.eq[k]))S.eq[k]=s.eq[k].filter(x=>typeof x==='string').slice(0,3);if(UB[s.gr])S.gr=s.gr;if(s.star)for(const k in s.star)if(UB[k]&&[2,3,4].includes(s.star[k]))S.star[k]=s.star[k]}}catch(e){}
const F={q:'',cost:new Set(),role:new Set(),trait:''};
const open=new Set();
const $=id=>document.getElementById(id);
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ini=n=>n.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/).filter(w=>w!=='The').slice(0,2).map(w=>w[0]).join('').toUpperCase();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const isFront=i=>i<4, usable=i=>i<10||i-10<S.extra;
const misfit=(u,i)=>(u.role==='N'&&!isFront(i))||(u.role==='F'&&isFront(i));

function unitEl(u,i){
  const bad=misfit(u,i),{key,url}=artOf('character_preview',u),eq=eqOf(u.name),st=starOf(u.name);
  return `<div class="u${url?' art':''}" data-art="${key}" data-unit="${esc(u.name)}" data-from="${i}" style="--cc:var(--c${costOf(u)})${url?`;background-image:url('${url}')`:''}"><span class="lcol">${u.name===AHA?`<button class="cost flip" data-aha aria-label="Change Aha's cost (3, 4, 5 or 7)">${S.aha} ⟳</button>`:`<span class="cost">${u.cost}</span>`}${bad?'<span class="bad">!</span>':''}${S.gr===u.name&&i<4?'<span class="gr" aria-label="Galaxy Ranger">GR</span>':''}</span><span class="ini">${ini(u.name)}</span><span class="eqrow"><button class="eqb" data-eq="${esc(u.name)}" aria-label="Equipment for ${esc(u.name)}">+</button>${Array.from({length:slotsFor(u)},(_,k)=>eq[k]?`<i class="eqi ${eq[k].cat}" data-k="${eq[k].k}" ${eqArt(eq[k])} aria-label="${esc(eq[k].name)}"></i>`:'<i class="eqi open"></i>').join('')}</span><span class="bot"><span class="nm"><span>${esc(u.name)}</span></span></span></div>`;
}
const starOf=n=>S.star[n]||1; // units are 1★ unless marked
function starsEl(n){
  const st=starOf(n);
  return `<span class="stars s${st}" role="group" aria-label="Star level for ${esc(n)}">${[1,2,3,4].map(k=>`<button data-star="${esc(n)}" data-k="${k}" class="${k<=st?'on':''}" aria-label="${k} star" aria-pressed="${k===st}">★</button>`).join('')}</span>`;
}
function tileEl(i){
  const n=S.board[i],lock=!usable(i);
  return `<div class="tile${n?' full':''}${lock?' locked':''}" data-tile="${i}">${n&&!lock?starsEl(n)+unitEl(UB[n],i):''}</div>`;
}
function renderBoard(){
  const r=(a)=>a.map(tileEl).join('');
  $('board').innerHTML=
   `<div class="row"><div class="grp main"><span class="lab">On-Field</span><div class="tiles">${r([0,1,2,3])}</div></div><div class="grp side notes">${onBoard(AHA)?`<p class="ahanote"><b>Aeon ★ Aha</b> starts at 3-cost. Click the cost badge on her tile to switch her to 4, 5 or 7-cost.</p>`:''}${onBoard('Ashveil')?`<p class="ahanote"><b>Ashveil</b> is on the board. Pick a front-row unit as the Galaxy Ranger in the trait list. Its star level sets the size of the bonus.</p>`:''}</div></div>
    <div class="row"><div class="grp main"><span class="lab">Off-Field</span><div class="tiles">${r([4,5,6,7,8,9])}</div></div>
    <div class="grp side"><span class="lab">Extra tiles</span><div class="tiles">${r([10,11,12])}</div></div></div>`;
  const placed=S.board.filter(Boolean);
  $('count').textContent=`${placed.length} / ${10+S.extra} units`;
  $('extra').innerHTML=[0,1,2,3].map(n=>`<button aria-pressed="${S.extra===n}" data-x="${n}">${n}</button>`).join('');
  const bad=S.board.map((n,i)=>n&&misfit(UB[n],i)?n:null).filter(Boolean);
  $('hint').innerHTML=bad.length?`<b>! Wrong row:</b> ${bad.map(esc).join(', ')}. On-Field units belong in the front four tiles, Off-Field units in the back.`:'Front row is On-Field, back row is Off-Field. Extra tiles come from board-size items, traits or augments.';
}
function counts(){
  const c={};
  S.board.forEach((n,i)=>{if(n&&usable(i))UB[n].traits.forEach(t=>(c[t]=c[t]||[]).push(n))});
  const em=emblemMap();for(const t in em)(c[t]=c[t]||[]).push(...em[t]);
  return c;
}
function tierOf(def,n){
  if(!def.t.length)return n>0?0:-1;
  let x=-1;def.t.forEach(([k],i)=>{if(def.exact?n===k:n>=k)x=i});return x;
}
// bronze, silver, gold, prismatic. Traits with more than 5 intervals (Galactic Voyager) step every two.
const rankOf=(def,i)=>Math.min(3,def.t.length>6?Math.floor(i/2):i);
const RANK=['Bronze','Silver','Gold','Prismatic'];
const onBoard=n=>S.board.some((x,i)=>x===n&&usable(i));
const grOk=()=>!!S.gr&&onBoard('Ashveil')&&S.board.slice(0,4).includes(S.gr);
const pct=v=>'+'+(+v.toFixed(1))+'%';
function gvTotals(who,holders,ti){
  if(ti<0)return '';
  const m=GVM[Math.min(ti,7)],rows=who.filter(n=>GVB[n]&&!holders.includes(n)).map(n=>[GVB[n][0],GVB[n][1]*m,n]);
  holders.forEach(n=>rows.push(['Lucky Strike DMG',18*m,n+' (Emblem)']));
  return `<table class="gv"><tr><th>Total bonus (×${m})</th><th>Squad</th><th>Voyagers</th></tr>${rows.map(([st,v,src])=>`<tr><td>${st}<small>${esc(src)}</small></td><td>${pct(v)}</td><td>${pct(v*2)}</td></tr>`).join('')}</table>`;
}
const SM={1:1,2:2,3:4,4:8}; // Merchant Guild multiplier by star level
const GRM={1:1,2:3,3:6,4:12}; // Galaxy Ranger multiplier by star level
const amgLevel=who=>who.filter(n=>starOf(n)>=3).length;
function amgTotals(who,holders){
  const rows=who.map(n=>[holders.includes(n)?n+' (Emblem)':n,starOf(n)]);
  let sum=0;
  const body=rows.map(([n,st])=>{const v=2*SM[st];sum+=v;return `<tr><td>${esc(n)}</td><td>${st}★</td><td>${pct(v)}</td></tr>`}).join('');
  return `<table class="gv"><tr><th>${amgLevel(who)} member${amgLevel(who)===1?'':'s'} at 3★+</th><th>Stars</th><th>Gives</th></tr>${body}<tr><td>Each member gains<small>Lucky Strike Rate and DMG</small></td><td></td><td>${pct(sum)}</td></tr></table>`;
}
function grLine(){
  const st=starOf(S.gr);
  return `<p class="gvn"><b>${esc(S.gr)}</b> (${st}★) gains ${pct(30*GRM[st])} DMG and SPD Amplification.</p>`;
}
const xfx=d=>d.x.map(l=>`<p>${esc(l).replace(/^&quot;([^&]+)&quot;:/,'<b>$1:</b>')}</p>`).join('');
// a stacking bond (Merchant Guild) gives its stats with any member; 3★+ members only unlock its intervals
const isOn=r=>r.def.stack?r.n>0:r.ti>=0;
function renderTraits(){
  const c=counts();
  const em=emblemMap(),names=Object.keys(c);
  const rows=names.map(name=>{const def=T[name],who=c[name]||[],holders=em[name]||[],e=holders.length,extra=name==='Galaxy Ranger'&&grOk()?1:0,n=who.length+extra;return{name,def,n,e,who,holders,ti:def.stack?Math.min(def.t.length,amgLevel(who))-1:tierOf(def,n),base:def.stack?Math.min(def.t.length,amgLevel(who))-1:tierOf(def,who.length-e+extra)}})
    .sort((a,b)=>isOn(b)-isOn(a)||(b.def.t.length?rankOf(b.def,b.ti):0)*(b.ti>=0)-(a.def.t.length?rankOf(a.def,a.ti):0)*(a.ti>=0)||b.n-a.n||a.name.localeCompare(b.name));
  $('tsum').textContent=rows.length?`${rows.filter(isOn).length} active of ${rows.length}`:'';
  if(!rows.length){$('traits').innerHTML='<div class="empty">Place a unit to see its bonds and traits here. Inactive ones are listed too.</div>';return}
  $('traits').innerHTML=rows.map(r=>{
    const d=r.def,on=isOn(r),tiered=d.t.length>0,rk=r.ti>=0&&tiered?rankOf(d,r.ti):-1;
    const pips=tiered?d.t.map(([k],i)=>{const hit=d.exact?i===r.ti:i<=r.ti;return `<i class="${hit?'hit p'+rankOf(d,i):''}">${k}</i>`}).join('<span>›</span>'):`<i>level ${amgLevel(r.who)} · one per 3★ member</i>`;
    let note='';
    if(r.e>0){
      const need=d.exact?r.e:Math.max(0,d.t[r.ti]?.[0]-(r.n-r.e));
      if(on&&tiered&&r.ti!==r.base)note=`${need} Emblem${need>1?'s':''} required`;
      else note=`${r.e} Emblem${r.e>1?'s':''} worn${d.stack?'':', no new interval'}`;
    }
    let ctl='';
    if(r.name==='Galaxy Ranger'){
      const front=S.board.slice(0,4).filter(Boolean);
      ctl=`<span class="emb">Ranger<select data-gr aria-label="Galaxy Ranger"><option value="">None</option>${front.map(n=>`<option${n===S.gr?' selected':''}>${esc(n)}</option>`).join('')}</select></span>`;
    }
    const gv=r.name==='Galactic Voyager'?gvTotals(r.who,r.holders,r.ti):r.name==='Astropolis Merchant Guild'?amgTotals(r.who,r.holders):r.name==='Galaxy Ranger'&&grOk()?grLine():'';
    const det=open.has(r.name)?`<div class="det">${d.d?`<p>${esc(d.d)}</p>`:''}${tiered?`<ul>${d.t.map(([k,x],i)=>`<li class="${(d.stack?i<=r.ti:i===r.ti)?'hit':''}"><b>(${k})</b><span>${esc(x)}</span></li>`).join('')}</ul>`:''}${d.x.length?`<div class="xin"><p class="xh">Additional effects</p>${xfx(d)}</div>`:''}<p>On board: <span class="who">${r.who.length?r.who.map(n=>esc(n)+(r.holders.includes(n)?' (Emblem)':'')).join(', '):'none'}</span>${r.name==='Galaxy Ranger'&&grOk()?` · Ranger: <span class="who">${esc(S.gr)}</span>`:''}</p><button class="link" data-find="${esc(r.name)}">Show all ${esc(r.name)} units</button></div>`:'';
    return `<div class="tr${on?' on':''}${rk>=0?' r'+rk:''}" data-fx="${esc(r.name)}" data-ti="${r.ti}" data-n="${r.n}"><div class="hd"><button class="tog" data-tr="${esc(r.name)}" aria-expanded="${open.has(r.name)}"><span class="num">${r.n}</span><span><span class="tn">${esc(r.name)}</span><br><span class="kind">${KIND[d.k]} · <span class="rank">${on?(rk>=0?RANK[rk]:'active'):'inactive'}</span></span><span class="pips">${pips}</span>${note?`<span class="note">${note}</span>`:''}</span></button>${ctl}</div>${gv}${det}</div>`;
  }).join('');
}
function renderPool(){
  const used=new Set(S.board.filter((n,i)=>n&&usable(i)));
  const q=F.q.trim().toLowerCase();
  const list=U.filter(u=>(!q||u.name.toLowerCase().includes(q))&&(!F.cost.size||F.cost.has(costOf(u))||(u.name===AHA&&AHAC.some(c=>F.cost.has(c))))&&(!F.role.size||[...F.role].every(r=>u.role==='B'||u.role===r))&&(!F.trait||u.traits.includes(F.trait)));
  $('psum').textContent=`${list.length} of ${U.length} shown, A to Z`;
  $('pool').innerHTML=list.length?list.map(u=>{
    const {key,url}=artOf('character',u),on=used.has(u.name);
    return `<div class="card${on?' used':''}${url?' art':''}" data-art="${key}" data-unit="${esc(u.name)}" style="--cc:var(--c${costOf(u)})${url?`;background-image:url('${url}')`:''}" tabindex="0" role="button"><span class="top"><span class="cs">${costOf(u)}</span><span class="role">${on?'On board':R[u.role]}</span></span><span class="info"><span class="nm">${esc(u.name)}</span>${u.traits.map(t=>`<span class="tg">${esc(t)}</span>`).join('')}</span></div>`}).join(''):'<div class="empty" style="grid-column:1/-1">No units match these filters.</div>';
  $('fcost').innerHTML=[1,2,3,4,5,7].map(c=>`<button class="chip" data-c="${c}" aria-pressed="${F.cost.has(c)}">${c}-cost</button>`).join('');
  $('frole').innerHTML=['N','F'].map(r=>`<button class="chip" data-r="${r}" aria-pressed="${F.role.has(r)}">${R[r]}</button>`).join('');
}
function all(){
  const here=new Set(S.board.filter((n,i)=>n&&usable(i)));for(const k in S.eq)if(!here.has(k)||!S.eq[k].length)delete S.eq[k];
  for(const k in S.star)if(!here.has(k))delete S.star[k];
  if(!grOk())S.gr=null;
  renderBoard();fitNames();renderTraits();renderPool();save()}
// names longer than the two-line box (Dan Heng • Permansor Terrae) shrink until they fit
function fitNames(){document.querySelectorAll('#board .u .nm').forEach(n=>{const s=n.firstElementChild;if(!s)return;let f=parseFloat(getComputedStyle(n).fontSize);while(n.scrollHeight>n.clientHeight+1&&f>7){f-=.5;s.style.fontSize=f+'px'}})}
addEventListener('resize',()=>{document.querySelectorAll('#board .u .nm>span').forEach(s=>s.style.fontSize='');fitNames()});

function place(name,idx,from){
  if(!usable(idx))return;
  const occ=S.board[idx];
  if(from!=null){S.board[from]=occ}
  else{const j=S.board.indexOf(name);if(j>=0)S.board[j]=null}
  S.board[idx]=name;all();
}
function autoPlace(name){
  if(S.board.some((n,i)=>n===name&&usable(i)))return;
  const u=UB[name],front=[0,1,2,3],back=[4,5,6,7,8,9,10,11,12];
  const order=u.role==='F'?[...back,...front]:[...front,...back];
  const i=order.find(i=>usable(i)&&!S.board[i]);
  if(i!=null)place(name,i,null);
  else{$('hint').innerHTML='<b>Board is full.</b> Remove a unit or unlock an extra tile.'}
}

// pointer drag (mouse and touch) with click fallback
// ability box that follows the cursor over unit list tiles and board tiles
const utip=$('utip');
function skillsOf(name){return (SK||{})[name===AHA?AHA+'|'+S.aha:name]||{}}
// bold teal on every number that is different at another star level
const NUM=/(\d+(?:\.\d+)?%?)/;
function markNums(t,others){
  const parts=t.split(NUM),hit=new Set(),nums=parts.filter((_,i)=>i%2);
  for(const o of others){
    if(!o)continue;
    const op=o.split(NUM),on=op.filter((_,i)=>i%2);
    if(on.length!==nums.length)continue;
    nums.forEach((v,k)=>{if(on[k]!==v)hit.add(k)});
  }
  let k=-1;
  return parts.map((p,i)=>i%2?(++k,hit.has(k)?`<b class="chg">${p}</b>`:p):esc(p)).join('').replace(/\n/g,'<br>');
}
function skCol(label,sec,want){
  const lv=Object.keys(sec).map(Number).filter(k=>k<=want).sort((a,b)=>b-a)[0]||1;
  const list=sec[lv]||[],others=Object.keys(sec).filter(k=>+k!==lv).map(k=>sec[k]);
  return `<div class="ucol"><p class="xh">${label} · ${lv}★${lv<want?` <span class="uoff">(no ${want}★ data)</span>`:''}</p>${list.map(([n,x],j)=>{const tag=/\(ElationDamage\)\s*$/.test(n);return `<div class="usk"><b>${esc(n.replace(/\s*\(ElationDamage\)\s*$/,''))}${tag?' <i>Elation DMG</i>':''}</b><p>${markNums(x,others.map(o=>(o[j]&&o[j][0]===n?o[j]:o.find(q=>q[0]===n)||[])[1]))}</p></div>`}).join('')}</div>`;
}
function utipHtml(el){
  if(!SK)return `<p class="uh">${SK===false?'Could not load skills.json. It must sit next to this page and be opened from a web server.':'Loading abilities…'}</p>`;
  const name=el.dataset.unit,u=UB[name],sk=skillsOf(name);
  if(el.classList.contains('card')){
    const cols=[sk.F&&skCol('Frontline (on-field)',sk.F,1),sk.B&&skCol('Backline (off-field)',sk.B,1)].filter(Boolean);
    if(!cols.length)return '';
    return `<p class="uh"><b>${esc(name)}</b> · ${costOf(u)}-cost · ${R[u.role]}</p><div class="ucols c${cols.length}">${cols.join('')}</div>`;
  }
  const i=+el.dataset.from,front=i<4,sec=front?sk.F:sk.B;
  if(!sec)return '';
  return `<p class="uh"><b>${esc(name)}</b> · ${costOf(u)}-cost · ${front?'on-field':'off-field'} tile</p><div class="ucols c1">${skCol(front?'Frontline':'Backline',sec,starOf(name))}</div>`;
}
document.addEventListener('pointermove',e=>{
  const el=e.pointerType==='mouse'&&!(D&&D.ghost)&&!e.target.closest('[data-k]')&&e.target.closest('.card[data-unit],.u[data-from]');
  if(!el||!$('eqm').hidden){utip.hidden=true;utip.dataset.for='';return}
  const key=el.dataset.unit+'|'+(el.dataset.from??'pool')+'|'+starOf(el.dataset.unit)+'|'+S.aha+'|'+(SK?1:SK);
  if(utip.dataset.for!==key){
    utip.dataset.for=key;utip.innerHTML=utipHtml(el);utip.style.fontSize='';
    if(utip.innerHTML){utip.hidden=false;let fs=12;while(utip.scrollHeight>innerHeight-16&&fs>9.5){fs-=.5;utip.style.fontSize=fs+'px'}} // shrink long ability lists to fit the window
  }
  if(!utip.innerHTML){utip.hidden=true;return}
  utip.hidden=false;
  const w=utip.offsetWidth,h=utip.offsetHeight;
  let x=e.clientX+18,y=e.clientY+18;
  if(x+w>innerWidth-8)x=e.clientX-w-18;
  if(y+h>innerHeight-8)y=Math.max(8,innerHeight-h-8);
  utip.style.left=Math.max(8,x)+'px';utip.style.top=y+'px';
});
document.addEventListener('pointerdown',()=>{utip.hidden=true;utip.dataset.for=''});
let D=null;
document.addEventListener('pointerdown',e=>{
  const el=e.target.closest('[data-unit]');if(!el||el.classList.contains('used')||e.button>0)return;
  const from=el.dataset.from!=null?+el.dataset.from:null;
  if(from==null&&e.pointerType!=='mouse'){return} // pool on touch: tap to add, keeps scrolling free
  D={name:el.dataset.unit,from,x:e.clientX,y:e.clientY,ghost:null};
});
document.addEventListener('pointermove',e=>{
  if(!D)return;
  if(!D.ghost){
    if(Math.hypot(e.clientX-D.x,e.clientY-D.y)<6)return;
    D.ghost=document.createElement('div');D.ghost.className='ghost';D.ghost.innerHTML=unitEl(UB[D.name],D.from??0).replace('<span class="bad">!</span>','');
    document.body.appendChild(D.ghost);
  }
  D.ghost.style.left=e.clientX+'px';D.ghost.style.top=e.clientY+'px';
  document.querySelectorAll('.tile.over').forEach(t=>t.classList.remove('over'));
  const t=document.elementFromPoint(e.clientX,e.clientY)?.closest('.tile:not(.locked)');
  if(t)t.classList.add('over');
});
function endDrag(e,cancel){
  if(!D)return;const d=D;D=null;
  if(d.ghost){
    d.ghost.remove();justDragged=true;setTimeout(()=>justDragged=false,0);
    if(cancel)return all();
    const t=document.elementFromPoint(e.clientX,e.clientY)?.closest('.tile:not(.locked)');
    if(t){const i=+t.dataset.tile;if(i!==d.from)place(d.name,i,d.from);else all()}
    else if(d.from!=null){S.board[d.from]=null;all()}
    else all();
  }
}
let justDragged=false;
document.addEventListener('pointerup',e=>endDrag(e,false));
document.addEventListener('pointercancel',e=>endDrag(e,true));

document.addEventListener('click',e=>{
  if(justDragged)return;
  const t=e.target;let el;
  if(el=t.closest('[data-eq]'))return openEq(el.dataset.eq);
  if(el=t.closest('[data-star]')){const k=+el.dataset.k;if(k>1)S.star[el.dataset.star]=k;else delete S.star[el.dataset.star];return all()}
  if(el=t.closest('[data-aha]')){S.aha=AHAC[(AHAC.indexOf(S.aha)+1)%4];return all()}
  if(el=t.closest('.u[data-from]')){S.board[+el.dataset.from]=null;return all()}
  if(el=t.closest('.card')){if(!el.classList.contains('used')&&el.dataset.unit)autoPlace(el.dataset.unit);return}
  if(el=t.closest('[data-x]')){S.extra=+el.dataset.x;for(let i=10+S.extra;i<13;i++)S.board[i]=null;return all()}
  if(el=t.closest('[data-find]')){F.trait=el.dataset.find;$('ftrait').value=F.trait;renderPool();$('pool').scrollIntoView({behavior:'smooth',block:'nearest'});return}
  if(el=t.closest('[data-tr]')){const n=el.dataset.tr;open.has(n)?open.delete(n):open.add(n);return renderTraits()}
  if(el=t.closest('[data-c]')){const c=+el.dataset.c;F.cost.has(c)?F.cost.delete(c):F.cost.add(c);return renderPool()}
  if(el=t.closest('[data-r]')){const r=el.dataset.r;F.role.has(r)?F.role.delete(r):F.role.add(r);return renderPool()}
});
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.classList?.contains('card')){e.preventDefault();e.target.click()}
});
$('clear').onclick=()=>{S.board.fill(null);S.eq={};S.star={};S.gr=null;all()};
document.addEventListener('change',e=>{if(e.target.matches('[data-gr]')){S.gr=e.target.value||null;all()}});

// equipment popup
let EQ=null;
let EQCAT='';
function eqBlock(it){ // why an item can't be added right now, or ''
  const worn=eqOf(EQ);
  if(worn.length>=slotsFor(UB[EQ]))return 'All slots are full.';
  if(it.cat==='emblem'&&UB[EQ].traits.includes(it.trait))return `${EQ} already has ${it.trait}.`;
  if(it.unique&&worn.some(w=>w.id===it.id))return 'Unique: this unit already wears one.';
  return '';
}
const CATL={basic:'Basic',advanced:'Advanced',privileged:'Privileged',emblem:'Emblem'};
function eqInfo(it,askWhy){
  if(!it)return '';
  const why=askWhy&&EQ?eqBlock(it):'';
  return `<p class="eqd-h"><b>${esc(it.name)}</b> · ${CATL[it.cat]}${it.unique&&it.cat!=='emblem'?' · Unique':''}</p><p>${it.d?esc(it.d).replace(/\n/g,'<br>'):'Basic equipment. Combine two to make advanced equipment.'}</p>${why?`<p class="eqd-no">${esc(why)}</p>`:''}`;
}
function renderEq(){
  const u=UB[EQ],eq=eqOf(EQ),max=slotsFor(u),q=$('eqq').value.trim().toLowerCase();
  $('eqt').textContent=`${EQ} · ${eq.length}/${max} equipped`;
  $('eqcats').innerHTML=CATS.map(([k,l])=>`<button class="chip" data-cat="${k}" aria-pressed="${EQCAT===k}">${l}</button>`).join('');
  $('eqslots').innerHTML=Array.from({length:max},(_,i)=>eq[i]?`<button class="slot full ${eq[i].cat}" data-unq="${i}" data-k="${eq[i].k}" aria-label="Remove ${esc(eq[i].name)}"><i class="eqi ${eq[i].cat}" ${eqArt(eq[i])}></i><span>${esc(eq[i].name)}</span><em>remove</em></button>`:`<span class="slot">Empty slot</span>`).join('');
  if(EQLOAD!==true){$('eqgrid').innerHTML=`<div class="empty" style="grid-column:1/-1">${EQLOAD==='wait'?'Loading equipment…':'Could not load equipment.json. It must sit next to this page.'}</div>`;return}
  const list=ITEMS.filter(x=>(!EQCAT||x.cat===EQCAT)&&(!q||x.name.toLowerCase().includes(q)||(x.trait||'').toLowerCase().includes(q)));
  $('eqgrid').innerHTML=list.length?list.map(x=>`<button class="item ${x.cat}" data-item="${x.k}"${eqBlock(x)?' aria-disabled="true"':''}><i class="eqi" ${eqArt(x)}></i><span>${esc(x.name)}</span></button>`).join(''):'<div class="empty" style="grid-column:1/-1">No equipment matches.</div>';
}
function openEq(n){EQ=n;$('eqq').value='';$('eqm').hidden=false;renderEq();$('eqq').focus()}
function closeEq(){EQ=null;$('eqm').hidden=true}
$('eqq').oninput=renderEq;
$('eqm').addEventListener('click',e=>{
  e.stopPropagation();
  const t=e.target;let el;
  if(t===$('eqm')||t.closest('[data-close]'))return closeEq();
  if(el=t.closest('[data-cat]')){EQCAT=el.dataset.cat;return renderEq()}
  if(el=t.closest('[data-item]')){const it=IB[el.dataset.item];if(!eqBlock(it)){const a=S.eq[EQ]=(S.eq[EQ]||[]).filter(x=>IB[x]);a.push(it.k);all()}return renderEq()}
  if(el=t.closest('[data-unq]')){S.eq[EQ]=S.eq[EQ].filter(x=>IB[x]);S.eq[EQ].splice(+el.dataset.unq,1);const n=EQ;all();EQ=n;return renderEq()}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&EQ)closeEq()});
// equipment box that follows the cursor: tile squares, equipped slots and the item grid
const etip=$('etip');
document.addEventListener('pointermove',e=>{
  const el=e.pointerType==='mouse'&&!(D&&D.ghost)&&e.target.closest('[data-k],[data-item]');
  const it=el&&IB[el.dataset.k||el.dataset.item];
  if(!it){etip.hidden=true;etip.dataset.for='';return}
  const key=it.k+'|'+(el.dataset.item?'grid':'x')+'|'+(EQ||'')+'|'+(S.eq[EQ]||[]).join();
  if(etip.dataset.for!==key){etip.dataset.for=key;etip.innerHTML=eqInfo(it,!!el.dataset.item)}
  etip.hidden=false;
  const w=etip.offsetWidth,h=etip.offsetHeight;
  let x=e.clientX+16,y=e.clientY+16;
  if(x+w>innerWidth-8)x=e.clientX-w-16;
  if(y+h>innerHeight-8)y=Math.max(8,e.clientY-h-16);
  etip.style.left=Math.max(8,x)+'px';etip.style.top=y+'px';
});
document.addEventListener('pointerdown',()=>{etip.hidden=true;etip.dataset.for=''});
fetch('equipment.json').then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(j=>{ITEMS=j;IB=Object.fromEntries(j.map(x=>[x.k,x]));EQLOAD=true;all();if(EQ)renderEq()}).catch(()=>{EQLOAD=false;if(EQ)renderEq()});

// additional effects box that follows the cursor
const tip=$('tip');
function tipHtml(name,ti,n){
  const d=T[name];
  if(!d.t.length)return `<p class="xh">${esc(name)} · ${n} on board</p><p>${esc(d.d)}</p>`;
  const next=d.t.find(([k])=>k>n);
  return `<p class="xh">${esc(name)} · ${n} on board</p><ul>${d.t.map(([k,x],i)=>`<li class="${(d.stack?i<=ti:i===ti)?'hit':''}"><b class="p${rankOf(d,i)}">${k}</b><span>${esc(x)}</span></li>`).join('')}</ul>${ti<0?`<p class="off">${d.stack?'Stat bonus is active. No interval unlocked yet: each 3★ or 4★ member unlocks one.':'Not active yet'}${d.stack?'':d.exact?'. Needs exactly '+d.t.map(t=>t[0]).join(' or ')+'.':next?'. First interval at '+d.t[0][0]+'.':'.'}</p>`:''}`;
}
$('traits').addEventListener('pointermove',e=>{
  const row=e.pointerType==='mouse'&&e.target.closest('.tr[data-fx]');
  if(!row||e.target.closest('.det')){tip.hidden=true;return}
  const key=row.dataset.fx+'|'+row.dataset.ti+'|'+row.dataset.n;
  if(tip.dataset.for!==key){tip.dataset.for=key;tip.innerHTML=tipHtml(row.dataset.fx,+row.dataset.ti,+row.dataset.n)}
  tip.hidden=false;
  const w=tip.offsetWidth,h=tip.offsetHeight;
  let x=e.clientX+16,y=e.clientY+16;
  if(x+w>innerWidth-8)x=e.clientX-w-16;
  if(y+h>innerHeight-8)y=Math.max(8,innerHeight-h-8);
  tip.style.left=Math.max(8,x)+'px';tip.style.top=y+'px';
});
$('traits').addEventListener('pointerleave',()=>{tip.hidden=true});
$('q').oninput=e=>{F.q=e.target.value;renderPool()};
$('ftrait').innerHTML='<option value="">All traits</option>'+['F','C','S'].map(k=>`<optgroup label="${KIND[k]}">${TN.filter(n=>T[n].k===k).sort((a,b)=>a.localeCompare(b)).map(n=>`<option>${esc(n)}</option>`).join('')}</optgroup>`).join('');
$('ftrait').onchange=e=>{F.trait=e.target.value;renderPool()};
$('reset').onclick=()=>{F.q='';F.cost.clear();F.role.clear();F.trait='';$('q').value='';$('ftrait').value='';renderPool()};
all();

// ---------- team codes: export, import and saved lineups ----------
// Code = "CW1-" + base64url of bytes:
//   [version 1][extra tiles 2 bits | Aha cost index 2 bits | Galaxy Ranger front slot+1 3 bits][13-bit tile mask, 2 bytes]
//   per filled tile: [character ID, 2 bytes][star-1 2 bits | item count 2 bits] then per item [image ID*2 + privileged, 4 bytes]
//   [checksum byte]
const IDN=Object.fromEntries(Object.entries(ID).map(([n,i])=>[i,n]));
const b64u=bytes=>btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const unb64u=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return Uint8Array.from(atob(s),c=>c.charCodeAt(0))};
function encodeTeam(){
  const out=[1],gr=S.gr?S.board.slice(0,4).indexOf(S.gr):-1;
  out.push((S.extra&3)<<6|(AHAC.indexOf(S.aha)&3)<<4|(gr+1)&7);
  let mask=0;S.board.forEach((n,i)=>{if(n&&usable(i))mask|=1<<i});
  out.push(mask>>8,mask&255);
  S.board.forEach((n,i)=>{
    if(!(mask&1<<i))return;
    const id=ID[n],items=eqOf(n).slice(0,3);
    out.push(id>>8,id&255,(starOf(n)-1)<<2|items.length);
    items.forEach(it=>{const v=(+it.id)*2+(it.cat==='privileged'?1:0);out.push(v>>>24&255,v>>>16&255,v>>>8&255,v&255)});
  });
  out.push(out.reduce((a,x)=>(a*31+x)&255,7));
  return 'CW1-'+b64u(out);
}
function decodeTeam(code){
  const m=String(code).trim().match(/^CW1-([A-Za-z0-9_-]+)$/);
  if(!m)throw new Error('That isn\'t a team code. Codes start with CW1-.');
  let bytes;try{bytes=unb64u(m[1])}catch(e){throw new Error('That team code is damaged.')}
  const sum=bytes[bytes.length-1],body=[...bytes.slice(0,-1)];
  if(bytes.length<5||body.reduce((a,x)=>(a*31+x)&255,7)!==sum||body[0]!==1)throw new Error('That team code is damaged or incomplete. Copy the whole code and try again.');
  let p=1;const take=()=>{if(p>=body.length)throw new Error('That team code is incomplete.');return body[p++]};
  const h=take(),mask=take()<<8|take();
  const st={board:Array(13).fill(null),extra:h>>6&3,aha:AHAC[h>>4&3]||3,eq:{},star:{},gr:null},skipped=[];
  for(let i=0;i<13;i++){
    if(!(mask&1<<i))continue;
    const id=take()<<8|take(),f=take(),n=IDN[id],cnt=f&3,items=[];
    for(let k=0;k<cnt;k++){const v=(take()<<24>>>0)+(take()<<16)+(take()<<8)+take(),iid=String(Math.floor(v/2)),priv=v%2===1;
      const it=ITEMS.find(x=>x.id===iid&&(priv?x.cat==='privileged':x.cat!=='privileged'));if(it)items.push(it.k);else skipped.push('item '+iid)}
    if(!n){skipped.push('unit '+id);continue}
    st.board[i]=n;if((f>>2)+1>1)st.star[n]=(f>>2)+1;if(items.length)st.eq[n]=items;
  }
  const g=(h&7)-1;if(g>=0&&st.board[g])st.gr=st.board[g];
  return {st,skipped};
}
// saved lineups live in this browser only
const LKEY='cw-lineups-v1';
let LINEUPS=[];try{LINEUPS=JSON.parse(localStorage.getItem(LKEY))||[];if(!Array.isArray(LINEUPS))LINEUPS=[]}catch(e){LINEUPS=[]}
const saveLineups=()=>{try{localStorage.setItem(LKEY,JSON.stringify(LINEUPS))}catch(e){}};
const teamSummary=st=>{const u=st.board.filter(Boolean);return u.length?`${u.length} unit${u.length>1?'s':''}: ${u.slice(0,4).join(', ')}${u.length>4?` +${u.length-4}`:''}`:'Empty board'};
function remember(code,kind,st){
  const old=LINEUPS.find(l=>l.code===code);
  if(old){old.kind=kind;old.at=Date.now();LINEUPS=[old,...LINEUPS.filter(l=>l!==old)]}
  else LINEUPS.unshift({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),name:'Lineup '+(LINEUPS.length+1),code,kind,at:Date.now(),sum:teamSummary(st)});
  saveLineups();renderLineups();
}
const shareMsg=(t,bad)=>{const m=$('sharemsg');m.textContent=t;m.classList.toggle('bad',!!bad)};
function applyTeam(st){S.board=st.board;S.extra=st.extra;S.aha=st.aha;S.eq=st.eq;S.star=st.star;S.gr=st.gr;closeEq();all()}
$('exportbtn').onclick=()=>{
  const code=encodeTeam(),box=$('sharecode');box.value=code;remember(code,'Export',S);
  const fallback=()=>{box.focus();box.select();shareMsg('Code ready. Press Ctrl+C (or ⌘C) to copy it.')};
  try{navigator.clipboard.writeText(code).then(()=>shareMsg('Copied to clipboard.'),fallback)}catch(e){fallback()}
};
function importCode(code,kind){
  if(EQLOAD==='wait'){shareMsg('Equipment is still loading. Try again in a moment.',true);return false}
  try{const {st,skipped}=decodeTeam(code);applyTeam(st);if(kind)remember(code.trim(),kind,st);shareMsg(skipped.length?`Loaded. Skipped ${skipped.length} unknown entr${skipped.length>1?'ies':'y'}.`:'Board loaded.');return true}
  catch(e){shareMsg(e.message,true);return false}
}
$('importbtn').onclick=()=>{const v=$('sharecode').value;if(!v.trim())return shareMsg('Paste a team code into the box first.',true);importCode(v,'Import')};
$('sharecode').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('importbtn').click()}});
// saved lineups panel
let LDEL=null,LREN=null;
const fmtDate=t=>new Date(t).toLocaleString(undefined,{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
function renderLineups(){
  $('savedbtn').textContent=`Saved lineups (${LINEUPS.length})`;
  if($('lum').hidden)return;
  $('lulist').innerHTML=LINEUPS.length?LINEUPS.map((l,i)=>`<li class="lu" data-lu="${l.id}">
    <span class="lu-grip" data-grip tabindex="0" role="button" aria-label="Drag to reorder ${esc(l.name)}. Arrow keys also move it." title="">⠿</span>
    <div class="lu-main">${LREN===l.id?`<input class="lu-name-in" id="lu-ren" value="${esc(l.name)}" aria-label="New name" maxlength="60">`:`<b class="lu-name">${esc(l.name)}</b>`}
      <span class="lu-meta">${esc(l.sum||'')} · ${l.kind} ${fmtDate(l.at)}</span><code class="lu-code">${esc(l.code)}</code></div>
    <div class="lu-act">${LDEL===l.id?`<span class="lu-ask">Delete?</span><button class="btn danger" data-la="del-yes">Delete</button><button class="btn" data-la="del-no">Keep</button>`:LREN===l.id?`<button class="btn" data-la="ren-ok">Save</button><button class="btn" data-la="ren-no">Cancel</button>`:
      `<button class="btn" data-la="load">Load</button><button class="btn" data-la="copy">Copy</button><button class="btn" data-la="ren">Rename</button><button class="btn icon" data-la="del" aria-label="Delete">✕</button>`}</div></li>`).join(''):'<li class="empty">No saved lineups yet. Every Export and Import is saved here.</li>';
  const r=$('lu-ren');if(r){r.focus();r.select()}
}
$('savedbtn').onclick=()=>{LDEL=LREN=null;$('lum').hidden=false;renderLineups()};
const closeLu=()=>{$('lum').hidden=true};
$('lum').addEventListener('click',e=>{
  e.stopPropagation();
  if(LJUST)return; // the click that ends a drag, even if released outside the box, does nothing
  const t=e.target;if(t===$('lum')||t.closest('[data-lclose]'))return closeLu();
  const b=t.closest('[data-la]');if(!b)return;
  const row=b.closest('[data-lu]'),i=LINEUPS.findIndex(l=>l.id===row.dataset.lu),l=LINEUPS[i],a=b.dataset.la;
  if(a==='load'){if(importCode(l.code,null)){$('sharecode').value=l.code;closeLu()}return}
  if(a==='copy'){$('sharecode').value=l.code;try{navigator.clipboard.writeText(l.code).then(()=>shareMsg(`Copied “${l.name}”.`),()=>shareMsg('Code is in the box above. Copy it from there.'))}catch(err){shareMsg('Code is in the box above. Copy it from there.')}return}
  if(a==='del')LDEL=l.id;
  if(a==='del-yes'){LINEUPS.splice(i,1);LDEL=null}
  if(a==='del-no')LDEL=null;
  if(a==='ren'){LREN=l.id;LDEL=null}
  if(a==='ren-ok'){const v=$('lu-ren').value.trim();if(v)l.name=v;LREN=null}
  if(a==='ren-no')LREN=null;
  saveLineups();renderLineups();
});
$('lum').addEventListener('keydown',e=>{if(e.target.id==='lu-ren'){if(e.key==='Enter'){e.preventDefault();e.target.closest('.lu').querySelector('[data-la="ren-ok"]').click()}if(e.key==='Escape'){e.stopPropagation();LREN=null;renderLineups()}}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('lum').hidden)closeLu()});
// drag to reorder saved lineups: the row follows the pointer and the others slide out of its way.
// Grab it by the grip (mouse or touch) or anywhere on the row with a mouse; arrow keys on the grip move it one place.
let LD=null,LJUST=false;
const luRows=()=>[...$('lulist').querySelectorAll('.lu')];
function luFlip(rows,mutate){
  const before=new Map(rows.map(r=>[r,r.getBoundingClientRect().top]));
  mutate();
  rows.forEach(r=>{const d=before.get(r)-r.getBoundingClientRect().top;if(!d)return;r.style.transition='none';r.style.transform=`translateY(${d}px)`;r.offsetHeight;r.style.transition='';r.style.transform=''});
}
function luPlace(y){
  const row=LD.row,list=$('lulist'),top=y-LD.grab;
  let natural=row.getBoundingClientRect().top-LD.shift;
  const others=luRows().filter(r=>r!==row),mid=top+row.offsetHeight/2;
  const next=others.find(r=>{const rc=r.getBoundingClientRect();return mid<rc.top+rc.height/2})||null;
  if(row.nextElementSibling!==next){luFlip(others,()=>list.insertBefore(row,next));natural=row.getBoundingClientRect().top-LD.shift}
  // keep the dragged row inside the list's own height so it never makes the list scrollable
  const first=list.firstElementChild,last=list.lastElementChild,lo=first.offsetTop-row.offsetTop,hi=last.offsetTop+last.offsetHeight-row.offsetHeight-row.offsetTop;
  LD.shift=Math.min(hi,Math.max(lo,top-natural));row.style.transform=`translateY(${LD.shift}px)`;
  const lr=list.getBoundingClientRect();
  if(y<lr.top+30)list.scrollTop-=8;else if(y>lr.bottom-30)list.scrollTop+=8;
}
$('lulist').addEventListener('pointerdown',e=>{
  if(LREN||LDEL||e.button>0)return;
  const row=e.target.closest('.lu[data-lu]');if(!row)return;
  const onGrip=!!e.target.closest('[data-grip]');
  if(!onGrip&&(e.pointerType!=='mouse'||e.target.closest('button,input,a,code')))return;
  if(onGrip)e.preventDefault();
  LD={row,y0:e.clientY,started:false,shift:0,grab:0,pid:e.pointerId};
});
document.addEventListener('pointermove',e=>{
  if(!LD||e.pointerId!==LD.pid)return;
  if(!LD.started){
    if(Math.abs(e.clientY-LD.y0)<5)return;
    LD.started=true;LD.grab=LD.y0-LD.row.getBoundingClientRect().top;
    $('lulist').classList.add('sorting');LD.row.classList.add('dragging');
  }
  e.preventDefault();luPlace(e.clientY);
},{passive:false});
function luEnd(){
  if(!LD)return;const d=LD;LD=null;
  if(!d.started)return;
  LJUST=true;setTimeout(()=>{LJUST=false},0);
  d.row.classList.remove('dragging');d.row.style.transform='';   // glides into its slot
  const order=luRows().map(r=>r.dataset.lu);
  LINEUPS.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id));saveLineups();
  setTimeout(()=>{$('lulist').classList.remove('sorting');renderLineups()},200);
}
document.addEventListener('pointerup',luEnd);document.addEventListener('pointercancel',luEnd);
$('lulist').addEventListener('keydown',e=>{
  const g=e.target.closest('[data-grip]');if(!g||(e.key!=='ArrowUp'&&e.key!=='ArrowDown'))return;
  e.preventDefault();const id=g.closest('.lu').dataset.lu,i=LINEUPS.findIndex(l=>l.id===id),j=i+(e.key==='ArrowUp'?-1:1);
  if(j<0||j>=LINEUPS.length)return;
  const rows=luRows();
  luFlip(rows,()=>{const r=rows[i];j<i?$('lulist').insertBefore(r,rows[j]):$('lulist').insertBefore(r,rows[j].nextElementSibling)});
  [LINEUPS[i],LINEUPS[j]]=[LINEUPS[j],LINEUPS[i]];saveLineups();g.focus();
});
renderLineups();
