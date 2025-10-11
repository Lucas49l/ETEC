VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} Revisao_operaces_basicas 
   Caption         =   "Revisao Operaces_basicas"
   ClientHeight    =   2890
   ClientLeft      =   110
   ClientTop       =   450
   ClientWidth     =   3610
   OleObjectBlob   =   "Revisao_operaces_basicas.frx":0000
   StartUpPosition =   1  'CenterOwner
End
Attribute VB_Name = "Revisao_operaces_basicas"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub btnSomar_Click()
txtresultado = CInt(txtvalor1) + CInt(txtvalor2)
End Sub

Private Sub btnSubtrair_Click()
txtresultado = CInt(txtvalor1) - CInt(txtvalor2)
End Sub

Private Sub btnMultiplicar_Click()
txtresultado = CInt(txtvalor1) * CInt(txtvalor2)
End Sub

Private Sub btnDividir_Click()
txtresultado = CInt(txtvalor1) / CInt(txtvalor2)
End Sub

