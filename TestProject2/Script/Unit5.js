﻿function GeneralEvents_OnLogError(Sender, LogParams)
{
  var locked;
  if(LogParams.MessageText=="The atwin71.exe process crashed."){
    locked = 900;
  } else {
    locked = -1;
  } 
  if(locked!=-1){
    LogParams.Locked=true;
  } else{
    LogParams.Locked=false;
  } 
}

/*function GeneralEvents_OnLogError(Sender, LogParams)
{
  var locked = aqString.Find(LogParams.MessageText, "doo");
  if(locked!=-1){
    LogParams.Locked=true;
  } else{
    LogParams.Locked=false;
  } 
}*/

function Test1()
{
  panel = Aliases.Bee.formBee.panelModal.panelSettingsscreen.panelSpWpFrmedit;
  panel.panelSpWpActions.Click(310, 5);
  textbox = panel.panelSpFrmbox.form0.table0.panel0.row2.cell1.textboxSpUser;
  textbox.Click(40, 5);
  textbox.Keys("hello");
}

function GeneralEvents_OnStartTest(Sender)
{
  var Timer1 = Utils.Timers.Add(30000, "Unit5.timerRoutine", true);
}

function timerRoutine(){
   Runner.Stop(true);
}