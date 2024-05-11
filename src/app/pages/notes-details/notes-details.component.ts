import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import $ from 'jquery';

@Component({
	selector: 'app-notes-details',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './notes-details.component.html',
	styleUrl: './notes-details.component.scss'
})
export class NotesDetailsComponent {
	actualInnerWidth = document.body.clientWidth;     // El. width minus scrollbar width
	actualInnerWidth2 = document.body.scrollWidth;
	selectedSubtext: string | undefined;
	textData: any

	constructor() {
		$(".container-full").width(this.actualInnerWidth)
	}

	replaceSelectedText(styleType: string): void {
		const selection = window.getSelection();
		if (selection && selection.rangeCount > 0) {
			const range = selection.getRangeAt(0);
			const selectedText = selection.toString();
			let replaceText = null;
			switch(styleType) {
				case "make-bold": {
					replaceText = `<span style="font-weight: bold">${selectedText}</span>`; // Replace with your desired replacement text
				}
				break;
				case "remove-bold": {

				}
				break;
				case "make-italic": {
					replaceText = `<span style="font-style: italic;">${selectedText}</span>`; // Replace with your desired replacement text
				}
			}

			if(replaceText) {
				const fragment = range.createContextualFragment(replaceText);
				range.deleteContents();
				range.insertNode(fragment);
			}
		}
	}

	makeBold() {
		this.replaceSelectedText("make-bold")
	}

	makeItalic() {
		this.replaceSelectedText("make-italic")
	}

}
