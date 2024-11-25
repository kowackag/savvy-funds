import { useEffect } from "react";

interface ClickOutsideHandlerProps {
	ref: React.RefObject<HTMLElement>;
	handler: () => void;
}

export const useClickOutside = ({ ref, handler }: ClickOutsideHandlerProps) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, handler]);
};
