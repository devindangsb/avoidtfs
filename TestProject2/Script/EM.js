function test(){
  Aliases.mspaint.wndMSPaintApp.MSPaintView.Afx.Click(869, 186);
  Sys.Keys("~[PrtSc]");
  Regions.z_png.Check(Sys.Clipboard, false, false, 0, 0, "C:\\Users\\devin.dang\\Desktop\\avoid tfs cancer\\TestProject2\\Stores\\Regions\\Mask.png");
} 

function Test1()
{
  Aliases.mspaint.wndMSPaintApp.MSPaintView.Afx.Click(869, 186);
}