﻿window.globalProvideData('slide', '{"title":"Soal LKPD Studi Kasus 2","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":9,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide9","width":720,"height":1280,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6A16scroiwG","actionGroups":{"ReviewInt_6qaN3C0jzZO":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5VExRO0iID6"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Yr1Fz2GFu5.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qaN3C0jzZO_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qaN3C0jzZO_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qaN3C0jzZO","typea":"var","valueb":"6crPbeEDjeU","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6crPbeEDjeU.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6qaN3C0jzZO"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6crPbeEDjeU.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6qaN3C0jzZO"}]}]}]},"ReviewIntCorrectIncorrect_6qaN3C0jzZO":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qaN3C0jzZO_ReviewShape"}}]},"AnsweredInt_6qaN3C0jzZO":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6qaN3C0jzZO"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6qaN3C0jzZO":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5VExRO0iID6"},"enabled":{"type":"boolean","value":false}}]},"6qaN3C0jzZO_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6Yr1Fz2GFu5.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6crPbeEDjeU.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qaN3C0jzZO"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Yr1Fz2GFu5.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Yr1Fz2GFu5.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qaN3C0jzZO"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6A16scroiwG":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5aLWro9fKVF"}}]},"NavigationRestrictionPreviousSlide_6A16scroiwG":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_649K1mTGZy4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_649K1mTGZy4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qaN3C0jzZO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6qaN3C0jzZO"}],"elseActions":[{"kind":"exe_actiongroup","id":"6qaN3C0jzZO_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qaN3C0jzZO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qaN3C0jzZO","typea":"var","valueb":"6crPbeEDjeU","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6crPbeEDjeU"},"completed_slide_ref":{"type":"string","value":"_player.66Eir3Hluet.65y2DpjYDxC"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6qaN3C0jzZO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qaN3C0jzZO","typea":"var","valueb":"6crPbeEDjeU","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6crPbeEDjeU"},"completed_slide_ref":{"type":"string","value":"_player.66Eir3Hluet.65y2DpjYDxC"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6A16scroiwG"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6A16scroiwG"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ZLPacFy2Pv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jzH1GGleDU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pHt3mVWPz7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6835Auab1D8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5f7v0BgKDUJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5mtT7vtotsd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6OK1iMnTYrd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RJ6JRNuk85"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5k88uOwwdJ9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GdfSAI3V1H"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dgKv7RKT6Y"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6meQYqNABVi"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5m321qcGwa8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XLr9Z0CaEO"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6qaN3C0jzZO_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VExRO0iID6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5st46J8UHBU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iVNljLWube"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qccZkQyndW"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":191,"id":"01","url":"story_content/6ZMrhEQhd8i.png","type":"normal","altText":"Video (3).png","width":1151,"height":2047,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":640,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":1280,"altText":"Video (3).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":1280,"strokewidth":0}},"width":720,"height":1280,"resume":true,"useHandCursor":true,"id":"6ZLPacFy2Pv"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":112,"yPos":32,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":250,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":501,"bottom":73,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":304}},"html5data":{"xPos":-2,"yPos":-2,"width":503,"height":75,"strokewidth":1}},"width":500,"height":72,"resume":true,"useHandCursor":true,"id":"6jzH1GGleDU"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6pHt3mVWPz7_-554594965","id":"01","linkId":"txt__default_6pHt3mVWPz7","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":426,"height":31,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"LEMBAR KERJA PESERTA DIDIK","style":{"fontFamily":"\\"Montserrat MediumBoBoldD5017505\\",\\"Montserrat Medium\\",\\"Montserrat\\"","fontSize":16,"fontIsBold":true,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.413}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":26,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":395,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":562}}}],"shapemaskId":"","xPos":144,"yPos":48,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":220,"rotateYPos":18.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":440,"bottom":37,"altText":"LEMBAR KERJA PESERTA DIDIK","pngfb":false,"pr":{"l":"Lib","i":370}},"html5data":{"xPos":0,"yPos":0,"width":440,"height":37,"strokewidth":0}},"width":440,"height":37,"resume":true,"useHandCursor":true,"id":"6pHt3mVWPz7"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":1192,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":721,"bottom":89,"altText":"Round Same Side Corner 1","pngfb":false,"pr":{"l":"Lib","i":303}},"html5data":{"xPos":-2,"yPos":-2,"width":723,"height":91,"strokewidth":1}},"width":720,"height":88,"resume":true,"useHandCursor":true,"id":"6835Auab1D8"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":8,"id":"01","url":"story_content/6fukg1fxyX3_P_0_1185_1152_862.png","type":"normal","altText":"LAYOUT (6).png","width":1152,"height":862,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":328,"yPos":1208,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":32,"rotateYPos":24.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":64,"bottom":49,"altText":"LAYOUT (6).png","pngfb":false,"pr":{"l":"Lib","i":305}},"html5data":{"xPos":0,"yPos":0,"width":64,"height":49,"strokewidth":0}},"width":64,"height":49,"resume":true,"useHandCursor":true,"id":"5f7v0BgKDUJ","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5yDCE69hnIv.6L2g0o2oKPJ"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":10,"id":"01","url":"story_content/5fDyld8H6wa_P_0_0_1152_1102.png","type":"normal","altText":"LAYOUT (7).png","width":1152,"height":1103,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":458,"yPos":1199,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":28.5,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":57,"bottom":57,"altText":"LAYOUT (7).png","pngfb":false,"pr":{"l":"Lib","i":306}},"html5data":{"xPos":0,"yPos":0,"width":57,"height":57,"strokewidth":0}},"width":57,"height":57,"resume":true,"useHandCursor":true,"id":"5mtT7vtotsd","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5yDCE69hnIv.5sUy3FBAXhb"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":14,"id":"01","url":"story_content/6DxadUDgGfT_P_141_1129_776_776.png","type":"normal","altText":"LAYOUT (9).png","width":777,"height":777,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":580,"yPos":1208,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":48,"altText":"LAYOUT (9).png","pngfb":false,"pr":{"l":"Lib","i":25}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":48,"strokewidth":0}},"width":48,"height":48,"resume":true,"useHandCursor":true,"id":"6OK1iMnTYrd","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5yDCE69hnIv.6NnKnFpQJqX"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":20,"id":"01","url":"story_content/5fDyld8H6wa_P_0_1102_1152_675.png","type":"normal","altText":"LAYOUT (7).png","width":1152,"height":675,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":195,"yPos":1207,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":41,"rotateYPos":24.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":82,"bottom":49,"altText":"LAYOUT (7).png","pngfb":false,"pr":{"l":"Lib","i":307}},"html5data":{"xPos":0,"yPos":0,"width":82,"height":49,"strokewidth":0}},"width":82,"height":49,"resume":true,"useHandCursor":true,"id":"6RJ6JRNuk85","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5yDCE69hnIv.6lXuclwApuW"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":12,"id":"01","url":"story_content/6Sac5aZ3WEk_P_105_210_946_736.png","type":"normal","altText":"LAYOUT (8).png","width":947,"height":736,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":82,"yPos":1207,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":30.5,"rotateYPos":24.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":61,"bottom":49,"altText":"LAYOUT (8).png","pngfb":false,"pr":{"l":"Lib","i":965}},"html5data":{"xPos":0,"yPos":0,"width":61,"height":49,"strokewidth":0}},"width":61,"height":49,"resume":true,"useHandCursor":true,"id":"5k88uOwwdJ9","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5yDCE69hnIv.6RY5bGOZRQK"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":32,"yPos":48,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":552,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":658,"bottom":1106,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":522}},"html5data":{"xPos":-3,"yPos":-3,"width":661,"height":1109,"strokewidth":3}},"width":656,"height":1104,"resume":true,"useHandCursor":true,"id":"6GdfSAI3V1H"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":112,"yPos":24,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":250,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":501,"bottom":73,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":304}},"html5data":{"xPos":-2,"yPos":-2,"width":503,"height":75,"strokewidth":1}},"width":500,"height":72,"resume":true,"useHandCursor":true,"id":"6dgKv7RKT6Y"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6meQYqNABVi_92343951","id":"01","linkId":"txt__default_6meQYqNABVi","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":466,"height":23,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"LANGKAH-LANGKAH PENYELESAIAN MASALAH","style":{"fontFamily":"\\"Montserrat MediumBoBoldD5017505\\",\\"Montserrat Medium\\",\\"Montserrat\\"","fontSize":14,"fontIsBold":true,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":18.069,"descent":4.685,"leading":0,"underlinePosition":-1.4,"underlineThickness":0.933,"xHeight":9.987}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":36,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":471,"bottom":26,"pngfb":false,"pr":{"l":"Lib","i":1004}}}],"shapemaskId":"","xPos":128,"yPos":48,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":240,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":480,"bottom":29,"altText":"LANGKAH-LANGKAH PENYELESAIAN MASALAH","pngfb":false,"pr":{"l":"Lib","i":563}},"html5data":{"xPos":0,"yPos":0,"width":480,"height":29,"strokewidth":0}},"width":480,"height":29,"resume":true,"useHandCursor":true,"id":"6meQYqNABVi"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":58,"yPos":128,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":20,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":40,"bottom":40,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":567}},"html5data":{"xPos":-1,"yPos":-1,"width":41,"height":41,"strokewidth":0}},"width":40,"height":40,"resume":true,"useHandCursor":true,"id":"5m321qcGwa8"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5XLr9Z0CaEO_1808739955","id":"01","linkId":"txt__default_5XLr9Z0CaEO","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":34,"height":23,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"3.","style":{"fontFamily":"\\"Montserrat MediumBoBoldD5017505\\",\\"Montserrat Medium\\",\\"Montserrat\\"","fontSize":13,"fontIsBold":true,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":16.779,"descent":4.351,"leading":0,"underlinePosition":-1.3,"underlineThickness":0.867,"xHeight":9.273}}],"style":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"justify","lineSpacingRule":"multiple","lineSpacing":21,"spacingBefore":0,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":2,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":22,"bottom":25,"pngfb":false,"pr":{"l":"Lib","i":577}}}],"shapemaskId":"","xPos":66,"yPos":136,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":29,"altText":"3.","pngfb":false,"pr":{"l":"Lib","i":568}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":29,"strokewidth":0}},"width":48,"height":29,"resume":true,"useHandCursor":true,"id":"5XLr9Z0CaEO"},{"kind":"textinput","bindto":"_player.2studikasus3","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"Tulis jawaban disini…","fontsize":22,"textcolor":"0x000000","bold":false,"italic":false,"font":"Montserrat Charset0_v9p2ADCB779","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":112,"yPos":264,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":271.5,"rotateYPos":379.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5VExRO0iID6","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":524,"height":760,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":222,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":1006}}},"html5data":{"xPos":0,"yPos":0,"width":544,"height":760,"strokewidth":1}},"width":544,"height":760,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":545,"bottom":761,"altText":"Tulis jawaban disini…","pngfb":false,"pr":{"l":"Lib","i":1017}}},"id":"5VExRO0iID6","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.2studikasus3","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6Yr1Fz2GFu5"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5st46J8UHBU_-255129882","id":"01","linkId":"txt__default_5st46J8UHBU","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":540,"height":118,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Bagaimana solusi untuk masalah keterlambatan, kesalahan pencatatan, dan  penerimaan surat yang tidak tepat?","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"fontIsBold":false,"foregroundColor":"#000000","linkColor":"#000000","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"flowDirection":"leftToRight","trailingMargin":0,"justification":"justify","lineSpacingRule":"singlePt5","lineSpacing":30,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":107,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":556,"bottom":120,"pngfb":false,"pr":{"l":"Lib","i":1102}}}],"shapemaskId":"","xPos":104,"yPos":120,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":280,"rotateYPos":64,"scaleX":100,"scaleY":100,"alpha":100,"depth":16,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":560,"bottom":128,"altText":"Bagaimana solusi untuk masalah keterlambatan, kesalahan pencatatan, dan  penerimaan surat yang tidak tepat?","pngfb":false,"pr":{"l":"Lib","i":1018}},"html5data":{"xPos":0,"yPos":0,"width":560,"height":128,"strokewidth":0}},"width":560,"height":128,"resume":true,"useHandCursor":true,"id":"5st46J8UHBU"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":160,"id":"01","url":"story_content/5bV4AATVx9P_P_192_307_780_512.png","type":"normal","altText":"LAYOUT (16).png","width":781,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":392,"yPos":1072,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":30.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":17,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":61,"bottom":40,"altText":"LAYOUT (16).png","pngfb":false,"pr":{"l":"Lib","i":572}},"html5data":{"xPos":0,"yPos":0,"width":61,"height":40,"strokewidth":0}},"width":61,"height":40,"resume":true,"useHandCursor":true,"id":"5iVNljLWube","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.66Eir3Hluet.5aLWro9fKVF"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":159,"id":"01","url":"story_content/5bV4AATVx9P_X_P_192_307_780_512.png","type":"normal","altText":"LAYOUT (16).png","width":781,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":265,"yPos":1072,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":28,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":18,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":56,"bottom":40,"altText":"LAYOUT (16).png","pngfb":false,"pr":{"l":"Lib","i":576}},"html5data":{"xPos":0,"yPos":0,"width":56,"height":40,"strokewidth":0}},"width":56,"height":40,"resume":true,"useHandCursor":true,"id":"5qccZkQyndW","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qaN3C0jzZO_CorrectReview","id":"01","linkId":"6qaN3C0jzZO_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":655}}}],"shapemaskId":"","xPos":0,"yPos":1240,"tabIndex":19,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":19,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":654}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6qaN3C0jzZO_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qaN3C0jzZO_IncorrectReview","id":"01","linkId":"6qaN3C0jzZO_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":657}}}],"shapemaskId":"","xPos":0,"yPos":1240,"tabIndex":20,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":20,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":656}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6qaN3C0jzZO_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6qaN3C0jzZO_ReviewShape","id":"01","linkId":"txt_6qaN3C0jzZO_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":266,"bottom":1070,"pngfb":false,"pr":{"l":"Lib","i":1016}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":18,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":502.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":21,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":655,"bottom":1075,"altText":"","pngfb":false,"pr":{"l":"Lib","i":1015}},"html5data":{"xPos":0,"yPos":0,"width":655,"height":1075,"strokewidth":0}},"width":648,"height":1005,"resume":false,"useHandCursor":true,"id":"6qaN3C0jzZO_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');