function evil(){
  var attr = LogAttributes();
  Log.Message("snackbar", "wheeee", "500", attr);
  Log.Message("zzzzzzzzzzzz", "wheeee", "500", attr);
}

function LogAttributes()
{
  // Specifies new attributes
  var attr = Log.CreateNewAttributes();
  attr.FontColor = BuiltIn.clAqua;
  attr.BackColor = BuiltIn.clBlack;
  attr.Bold = true;
  attr.Italic = false;
  attr.StrikeOut = true;
  attr.Underline = false;
  
  
  return attr;
}

function runthis(){
  Log.Error("The atwin71.exe process crashed.");
  Log.Error("pooooooooo");
} 