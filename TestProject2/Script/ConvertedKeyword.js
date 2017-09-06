function Test1(Param1)
{
  TestedApps.notepad.Run(1, true);
  Aliases.notepad.wndNotepad.Edit.Click(572, 154);
  Aliases.notepad.wndNotepad.Edit.Keys(Param1);
  Aliases.notepad.wndNotepad.MainMenu.Click("File|Save As...");
  Aliases.notepad.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText("dog");
  Aliases.notepad.dlgSaveAs.btnSave.ClickButton();
  Aliases.notepad.wndNotepad.Close();
}

function test2(){
  Test1("apples");
}

function dummy(){
  Log.Message(Project.Variables.Var1);
  for(var i = 0; i<5; i++){
    var x = Project.Variables.Var1+1;
  Project.Variables.Var1 = x;
  Log.Message(Project.Variables.Var1);
  } 
} 