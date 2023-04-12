import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatTabsModule,
		MatDividerModule,
		MatBadgeModule,
		MatChipsModule,
	],
	exports: [
		FlexLayoutModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatTabsModule,
		MatDividerModule,
		MatBadgeModule,
		MatChipsModule,
	],
})
export class SharedModule {}
