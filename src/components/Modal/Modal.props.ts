import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	SetStateAction
} from 'react';

export interface ModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
	previewUrl: string;
}
