function evil(){
  var attr = LogAttributes();
  Log.Message("wowowowow", "wheeee", "500", attr);
}

function LogAttributes()
{
  // Specifies new attributes
  var attr = Log.CreateNewAttributes();
  attr.Bold = true;
  attr.Italic = true;
  attr.StrikeOut = false;
  attr.Underline = true;
  attr.FontColor = BuiltIn.clMaroon;
  attr.BackColor = BuiltIn.clBlack;
  
  return attr;
}

function play(){
  var hostList = NetworkSuite.Hosts;
  Log.Message("hostList count: " + hostList.Count);
  for(i = 0; i < hostList.Count; i++){
    Log.Message(i);
    Log.Message(hostList.Items(i).Name);
  }
}

function trigNetwork(){
  NetworkSuite.Run(false); 
  NetworkSuite.WaitForState(ns_Idle);
}

function packTest(){
  var workDir = "C:\\Users\\devin.dang\\Desktop\\doodoo"; //directory containing the files to be compressed
  var file1 = "blah.txt"; 
  var file2 = "spicy.txt"; 
  var ArchivePath = workDir + "\\2";
  slPacker.Pack(file1 + "\r\n" + file2, workDir, ArchivePath);
}