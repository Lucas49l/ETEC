VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} UserForm1 
   Caption         =   "UserForm1"
   ClientHeight    =   3330
   ClientLeft      =   110
   ClientTop       =   450
   ClientWidth     =   5340
   OleObjectBlob   =   "operaçoes_basicas.frx":0000
   StartUpPosition =   1  'CenterOwner
End
Attribute VB_Name = "UserForm1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub btn_div_Click()
txt_res.Text = CDbl(txt_n1.Text) / CDbl(txt_n2.Text)

End Sub

Private Sub btn_mult_Click()
txt_res.Text = CDbl(txt_n1.Text) * CDbl(txt_n2.Text)

End Sub

Private Sub btn_quadrado_Click()
txt_res.Text = CDbl(txt_n1.Text) * CDbl(txt_n1.Text)
End Sub

Private Sub btn_soma_Click()
txt_res.Text = CDbl(txt_n1.Text) + CDbl(txt_n2.Text)
    
End Sub

Private Sub btn_subtracao_Click()
txt_res.Text = CDbl(txt_n1.Text) - CDbl(txt_n2.Text)
End Sub

Private Sub txt_n1_Change()

End Sub
