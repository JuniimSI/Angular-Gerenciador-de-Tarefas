import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ],
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent
  ]
})
export class TarefasModule { }
