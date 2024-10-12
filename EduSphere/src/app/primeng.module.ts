import { NgModule } from "@angular/core";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';  // Needed for ngModel
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from "primeng/floatlabel";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from "@angular/cdk/dialog";
import { PaginatorModule } from "primeng/paginator";
import { TooltipModule } from "primeng/tooltip";
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
    exports: [
        ProgressBarModule,
        SliderModule,
        TagModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        TableModule,
        FormsModule,
        IconFieldModule,
        InputIconModule,
        PanelModule,
        FloatLabelModule,
        DropdownModule,
        ProgressSpinnerModule,
        MenuModule,
        PaginatorModule,
        DialogModule,
        TooltipModule,
        CheckboxModule,
    ]
})

export class PrimengModule {}